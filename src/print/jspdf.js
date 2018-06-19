import jsPDF from 'jspdf';
import 'jspdf-customfonts';
import './default_vfs';
import { getDataUri } from '../tools';
import setFont from './setFont';
import addressSender from './pdf/addressSender';
import addressCustomer from './pdf/addressCustomer';
import totals from './pdf/totals';
import dataFormater from "./data-formater";

export default (printData) => {

    printData = {
        'addressSender': {
            'person':'André Kelling',
            'street':'Brückenstraße 3',
            'city':'12439 Berlin',
            'email':'kontakt@andrekelling.de',
            'phone':'+49 (0) 178 1 / 751 157'
        },
        'address': {
            'company':'Johnlands',
            'person':'John Jonaldo',
            'street':'Brückenstraße 3',
            'city':'12439 Berlin',
        },
        'invoice': {
            'number':'2018-15738',
            'date':'28.06.2018',
            'subject': 'https://andrekelling.de'
        }
    };

    const doc = new jsPDF('p', 'pt');

    setFont(doc);

    // SETTINGS

    const fontSizes = {
        TitleFontSize:14,
        SubTitleFontSize:12,
        NormalFontSize:10,
        SmallFontSize:8
    };
    const lineSpacing = 12;

    let startX = 57;
    let startY = 128;

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageCenterX = pageWidth / 2;
    const endX =  pageWidth - startX;


    // <><>><><>><>><><><><><>>><><<><><><><>
    // COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    // Graphics first because they are loaded not immediately via promise and need fix X ad Y values

    const logoLoaded = getDataUri('/img/logo.png').then(
        logo => {
            const pageCenterX = pageWidth / 2;
            doc.addImage(logo, 'PNG', pageCenterX - 25, 25, 50, 50);
        }
    ).catch(
        error => {
            console.log(error);
        }
    );

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Sender's address

    const svgLoaded = getDataUri('/img/stripes_down.svg').then(
        img => {
            // @todo: add smaller svg image with less empty space around
            //doc.addImage(logo, 'PNG', startX,  128 + lineSpacing/2, 384, 55);
            doc.addImage(img, 'PNG', 230, 112, 307, 44);
        }
    ).catch(
        error => {
            console.log(error);
        }
    );

    startY = addressSender(doc, printData.addressSender, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Customer address

    startY += 10;
    startY = addressCustomer(doc, printData.address, startY, fontSizes, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // INVOICE DATA
    // <><>><><>><>><><><><><>>><><<><><><><>

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Invoicenumber and date

    startY = 255;
    const invoiceNrTxt = "INVOICE NO: ";

    doc.setFontSize(fontSizes.SubTitleFontSize);
    doc.setFontType('bold');
    doc.text(invoiceNrTxt, startX, startY);
    doc.setFontType('normal');
    doc.text(printData.invoice.number, doc.getStringUnitWidth(invoiceNrTxt) * fontSizes.SubTitleFontSize + 65, startY);
    doc.text(printData.invoice.date, endX, startY, 'right');

    // before first fold mark on the paper
    startY = 277;

    doc.setFontSize(fontSizes.TitleFontSize);
    doc.setFontType('bold');
    doc.text("Invoice for", startX, startY += lineSpacing + 2);
    doc.text(printData.invoice.subject, startX, startY += lineSpacing * 2);

    doc.setDrawColor(206, 218, 192);
    doc.setLineWidth(0.5);
    doc.line(startX, startY + lineSpacing/2, endX, startY + lineSpacing/2);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Table

    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('normal');

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Totals

    totals(doc, startY, fontSizes, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Fold Marks

    const foldX = 12;
    const foldMarksY = [298,421,595];

    foldMarksY.map(valueY => {
        doc.line(foldX, valueY, foldX + 23, valueY);
    });

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Print
    Promise.all([logoLoaded, svgLoaded]).then(() => {
        doc.save("invoice.pdf");
    });
}
