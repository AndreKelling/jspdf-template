import jsPDF from 'jspdf';
import 'jspdf-customfonts';
import './default_vfs';
import { getDataUri } from '../tools';
import setFont from './setFont';
import address from './pdf/address';
import customerData from './pdf/customerData';
import totals from './pdf/totals';

export default (somedata) => {

    //console.log('print');
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

    let startY = 50;
    const pageCenterX = doc.internal.pageSize.getWidth() / 2;
    // COMPONENTS

    const logoLoaded = getDataUri('/img/logo.png').then(
        logo => {
            doc.addImage(logo, 'PNG', pageCenterX - 20, 5, 40, 40);
        }
    ).catch(
        error => {
            console.log(error);
        }
    );

    startY = address(doc, startY, fontSizes, lineSpacing);

    startY = customerData(doc, startY, fontSizes, lineSpacing);

    totals(doc, startY, fontSizes, lineSpacing);

    logoLoaded.then(
        () => doc.save("invoice.pdf")
    );
}
