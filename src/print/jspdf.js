import jsPDF from 'jspdf';
import 'jspdf-customfonts';
import './default_vfs';
import { getDataUri } from '../tools';
import setFont from './setFont';
import addressSender from './pdf/addressSender';
import addressCustomer from './pdf/addressCustomer';
import heading from './pdf/heading';
import table from './pdf/table';
import totals from './pdf/totals';

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
            'subject':'https://andrekelling.de',
            'total':'3.362,00 €'
        },
        'items': {
            [0]: {
                'title':'Templating',
                'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
                'amount':'1.200,00 €',
                'qty':'2',
                'total':'2.400,00 €'
            },
            [1]: {
                'title':'Design',
                'description':'outwork digital screen UX in different cases for utilities',
                'amount':'876,00 €',
                'qty':'0.5',
                'total':'438,00 €'
            },
            [2]: {
                'title':'Security',
                'description':'develop a 100% secure workflow mechanism by shutting down your PC',
                'amount':'12,00 €',
                'qty':'1',
                'total':'12,00 €'
            },
            [3]: {
                'title':'Capability Training Closure Business Rules Appliance Regulatory',
                'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
                'amount':'256,00 €',
                'qty':'2',
                'total':'512,00 €'
            }

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
    startY = addressCustomer(doc, printData.address, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // INVOICE DATA
    // <><>><><>><>><><><><><>>><><<><><><><>

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Invoicenumber, -date and subject

    startY = heading(doc, printData.invoice, startY, fontSizes, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Table with items

    startY = table(doc, printData.items, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Totals

    totals(doc, startY, fontSizes.NormalFontSize, lineSpacing);

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
