export default (doc, data, startY, fontSizes, lineSpacing) => {

    const invoiceNrTxt = data.label.invoicenumber;
    let startX = 57;
    const pageWidth = doc.internal.pageSize.width;
    const endX =  pageWidth - startX;

    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
    doc.setFontSize(fontSizes.SubTitleFontSize);

    // set fix value for Y to bring title in alignment with folding marks
    startY = 243;
    doc.text(invoiceNrTxt, startX, startY);

    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);

    startX += doc.getStringUnitWidth(invoiceNrTxt) * fontSizes.SubTitleFontSize;
    doc.text(data.invoice.number, startX, startY);

    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
    const location = data.invoice.location ? data.invoice.location + ', ' : '';
    doc.text(location + data.invoice.date, endX, startY, 'right');

    startY += lineSpacing * 2;
    startX = 57;

    doc.setFontSize(fontSizes.TitleFontSize);
    doc.text(data.label.invoice, startX, startY += lineSpacing + 2);
    doc.text(data.invoice.subject, startX, startY += lineSpacing * 2);

    doc.setDrawColor(157, 183, 128);
    doc.setLineWidth(0.5);
    startY += lineSpacing;
    doc.line(startX, startY, endX, startY);

    return startY;
}
