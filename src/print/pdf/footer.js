import footerItem from './footerItem';

export default (doc, data, fontSize, lineSpacing) => {

    const pageHeight = doc.internal.pageSize.height;
    let startY = pageHeight - 120;

    let startX = 57;
    const pageWidth = doc.internal.pageSize.width;
    const endX =  pageWidth - startX;
    const thirdX = (pageWidth - startX * 2) / 3;

    doc.setDrawColor(157, 183, 128);
    doc.setLineWidth(0.5);
    doc.line(startX, startY, endX, startY);
    startY += lineSpacing / 3;

    doc.setFontSize(fontSize);

    //-------Contact Details---------------------
    footerItem(doc, data.addressSender, 'Contactdetails:', startX, startY, lineSpacing);
    startX += thirdX;

    //-------Bank Details---------------------
    footerItem(doc, data.personalInfo.bank, 'Bankaccount:', startX, startY, lineSpacing);
    startX += thirdX;

    //-------Tax Details---------------------
    footerItem(doc, data.personalInfo.taxoffice, 'Taxnumber:', startX, startY, lineSpacing);
}
