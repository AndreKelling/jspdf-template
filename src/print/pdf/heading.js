export default (doc, data, startY, fontSizes, lineSpacing) => {

    const invoiceNrTxt = "INVOICE NO: ";
    let startX = 57;
    const pageWidth = doc.internal.pageSize.getWidth();
    const endX =  pageWidth - startX;

    doc.setFontSize(fontSizes.SubTitleFontSize);
    startY = 255;
    doc.text(invoiceNrTxt, startX, startY);
    doc.text(data.number, doc.getStringUnitWidth(invoiceNrTxt) * fontSizes.SubTitleFontSize + 65, startY);
    // @todo: city as single value from invoice??
    doc.text('Berlin, '+data.date, endX, startY, 'right');

    // set Y before first fold mark on the paper
    startY = 277;

    doc.setFontSize(fontSizes.TitleFontSize);
    doc.text("Invoice for", startX, startY += lineSpacing + 2);
    doc.text(data.subject, startX, startY += lineSpacing * 2);

    doc.setDrawColor(206, 218, 192);
    doc.setLineWidth(0.5);
    startY += lineSpacing/2;
    doc.line(startX, startY, endX, startY);

    return startY;
};

