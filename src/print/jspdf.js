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
import text from './pdf/text';
import footer from './pdf/footer';

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
        'personalInfo': {
            'bank': {
            'person':'André Kelling',
                'name':'Noris Bank',
                'IBAN':'DE12 3456 7890 1234 5678 90'
        },
            'taxoffice': {
                'name':'FA Treptow-Köpenick',
                'number':'St-Nr 36/377/01652'
            }
        },
        'invoice': {
            'number':'2018-15738',
            'date':'28.06.2018',
            'subject':'https://andrekelling.de',
            'total':'6.724,00 €',
            'text':'Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\n aliquid ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\n vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.\n' +
            '\n' +
            'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n' +
            'nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie\n' +
            'nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis\n' +
            'justo.\n' +
            'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.\n' +
            'Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,\n' +
            'nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit,\n' +
            'ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis\n'+
            'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.\n' +
                'Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,\n' +
            'nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit,\n'
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
            },
            [4]: {
                'title':'Templating',
                'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
                'amount':'1.200,00 €',
                'qty':'2',
                'total':'2.400,00 €'
            },
            [5]: {
                'title':'Design',
                'description':'outwork digital screen UX in different cases for utilities',
                'amount':'876,00 €',
                'qty':'0.5',
                'total':'438,00 €'
            },
            [6]: {
                'title':'Security',
                'description':'develop a 100% secure workflow mechanism by shutting down your PC',
                'amount':'12,00 €',
                'qty':'1',
                'total':'12,00 €'
            },
            [7]: {
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

    // <><>><><>><>><><><><><>>><><<><><><><>
    // SETTINGS
    // <><>><><>><>><><><><><>>><><<><><><><>

    const fontSizes = {
        TitleFontSize:14,
        SubTitleFontSize:12,
        NormalFontSize:10,
        SmallFontSize:9
    };
    const lineSpacing = 12;

    let startX = 57;
    let startY = 130; // bit more then 45mm

    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageCenterX = pageWidth / 2;
    const endX =  pageWidth - startX;


    // <><>><><>><>><><><><><>>><><<><><><><>
    // COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Sender's address

    startY = addressSender(doc, printData.addressSender, startY, fontSizes.NormalFontSize, lineSpacing);

    const svgLoaded = getDataUri('/img/stripes_ecks_bottom.svg').then(
        img => {
            doc.setPage(1);
            doc.addImage(img, 'PNG', 205, 136, 333, 27);
        }
    ).catch(
        error => {
            console.log(error);
        }
    );

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

    startY = totals(doc, printData.invoice, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Text

    startY = text(doc, printData.invoice.text, startY, fontSizes.NormalFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Footer

    footer(doc, printData, fontSizes.SmallFontSize, lineSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // REPEATED PAGE COMPONENTS
    // <><>><><>><>><><><><><>>><><<><><><><>

    const pageNr = doc.internal.getNumberOfPages();

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Fold Marks

    const foldX = 12;
    const foldMarksY = [288,411,585];
    let n = 0;

    while (n < pageNr) {
        n++;

        doc.setPage(n);

        doc.setDrawColor(206, 218, 192);
        doc.setLineWidth(0.5);

    foldMarksY.map(valueY => {
        doc.line(foldX, valueY, foldX + 23, valueY);
    });
    }

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Logo

    const logoLoaded = getDataUri('/img/logo.png').then(
        logo => {
            n = 0;
            while (n < pageNr) {
                n++;
                doc.setPage(n);
                doc.addImage(logo, 'PNG', pageCenterX - 25, 25, 50, 50);
                doc.link(pageCenterX - 25, 25, 50, 50, {url:'https://andrekelling.de'});
            }
        }
    ).catch(
        error => {
            console.log(error);
        }
    );

    // <><>><><>><>><><><><><>>><><<><><><><>
    // Page Numbers

    if (pageNr > 1) {
        n = 0;
        doc.setFontSize(fontSizes.SmallFontSize);

        while (n < pageNr) {
            n++;

            doc.setPage(n);

            doc.text(n+' / '+pageNr, pageCenterX, pageHeight - 20, 'center');
        }
    }
    
    // <><>><><>><>><><><><><>>><><<><><><><>
    // PRINT
    // <><>><><>><>><><><><><>>><><<><><><><>

    Promise.all([logoLoaded, svgLoaded]).then(() => {
        doc.save("invoice.pdf");
    });
}
