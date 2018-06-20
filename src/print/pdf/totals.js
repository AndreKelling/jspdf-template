export default (doc, invoice, startY, fontSize, lineSpacing) => {
    let startX = 57;
    const pageWidth = doc.internal.pageSize.getWidth();
    const endX =  pageWidth - startX;

    doc.line(startX, startY, endX, startY);

    doc.setFontSize(fontSize);

    doc.text("Grand Total", startX, startY += lineSpacing * 2);

    doc.text(invoice.total, endX, startY, 'right');

    startY += lineSpacing * 4;

    return startY;
};

