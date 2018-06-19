import jsPDF from 'jspdf';
import 'jspdf-customfonts';
import './default_vfs';
import setFont from './setFont';
import address from './pdf/address';
import customerData from './pdf/customerData';
import totals from './pdf/totals';

export default (somedata) => {

    console.log('print');
    const doc = new jsPDF('p', 'pt');

    //doc.addImage(company_logo.src, 'PNG', startX,startY+=50, company_logo.w,company_logo.h);

    setFont(doc);

    const fontSizes = {
        HeadTitleFontSize:18,
        Head2TitleFontSize:16,
        TitleFontSize:14,
        SubTitleFontSize:12,
        NormalFontSize:10,
        SmallFontSize:8
    };
    const lineSpacing = 12;

    let startY = 0;

    startY = address(doc, startY, fontSizes, lineSpacing);

    startY = customerData(doc, startY, fontSizes, lineSpacing);

    totals(doc, startY, fontSizes, lineSpacing);

    //doc.save("invoice.pdf");
}
