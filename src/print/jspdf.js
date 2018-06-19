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
            'date':'28.06.2018'
        }
    };

    const doc = new jsPDF('p', 'pt');

    setFont(doc);

    // SETTINGS

    const fontSizes = {
        HeadTitleFontSize:18,
        Head2TitleFontSize:16,
        TitleFontSize:14,
        SubTitleFontSize:12,
        NormalFontSize:10,
        SmallFontSize:8
    };
    const lineSpacing = 12;
    let startY = 128;

    // <><>><><>><>><><><><><>>><><<><><><><>
    // COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    // Graphics first because they are loaded not immediately via promise and need fix X ad Y values

    const logoLoaded = getDataUri('/img/logo.png').then(
        logo => {
            const pageCenterX = doc.internal.pageSize.getWidth() / 2;
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

    startY += 20;
    startY = addressCustomer(doc, printData.address, startY, fontSizes, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // INVOICE DATA
    // <><>><><>><>><><><><><>>><><<><><><><>

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Invoicenumber and date


    const invoiceJSON = dataFormater()[2];

    const rightStartCol1 = 400;
    const rightStartCol2 = 480;
    const InitialstartY = 50;
    const pageCenterX = doc.internal.pageSize.getWidth() / 2;

    let tempY = InitialstartY;


    doc.setFontType('bold');
    doc.text("INVOICE NO: ", rightStartCol1, tempY += lineSpacing);
    doc.setFontType('normal');
    doc.text(printData.invoice.number, rightStartCol2, tempY);


    doc.setFontType('bold');
    doc.text("INVOICE Date: ", rightStartCol1, tempY += lineSpacing);
    doc.setFontType('normal');
    doc.text(printData.invoice.date, rightStartCol2, tempY);

    doc.setFontType('normal');

    doc.setLineWidth(1);
    doc.line(20, startY + lineSpacing, 220, startY + lineSpacing);
    doc.line(380, startY + lineSpacing, 580, startY + lineSpacing);

    doc.setFontSize(fontSizes.Head2TitleFontSize);
    doc.setFontType('bold');

    doc.text("TAX INVOICE", pageCenterX, startY += lineSpacing + 2, 'center');

    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');

    // Totals

    doc.setDrawColor(206, 218, 192);
    doc.setLineWidth(0.5);
    doc.line(20, startY + lineSpacing, 220, startY + lineSpacing);
    doc.line(380, startY + lineSpacing, 580, startY + lineSpacing);

    totals(doc, startY, fontSizes, lineSpacing);

    // Print
    Promise.all([logoLoaded, svgLoaded]).then(() => {
        doc.save("invoice.pdf");
    });
}
