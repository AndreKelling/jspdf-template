export default (doc, data, startY, fontSizes, lineSpacing) => {

    const invoiceNrTxt = "INVOICE NO: ";
    let startX = 57;
    const pageWidth = doc.internal.pageSize.width;
    const endX =  pageWidth - startX;

    doc.setFontSize(fontSizes.SubTitleFontSize);

    // set fix value for Y to bring title in alignment with folding marks
    startY = 243;
    doc.text(invoiceNrTxt, startX, startY);

    // @todo: font replacement for good width calculation. because else not working with my custom font :(
    doc.setFont('arial');
    startX += doc.getStringUnitWidth(invoiceNrTxt) * fontSizes.SubTitleFontSize;
    doc.setFont('WorkSans');
    doc.text(data.number, startX, startY);


    // @todo: city as single value from invoice??
    doc.text('Berlin, '+data.date, endX, startY, 'right');

    startY += lineSpacing * 2;
    startX = 57;

    doc.setFontSize(fontSizes.TitleFontSize);
    doc.text("Invoice for", startX, startY += lineSpacing + 2);
    doc.text(data.subject, startX, startY += lineSpacing * 2);

    doc.setDrawColor(157, 183, 128);
    doc.setLineWidth(0.5);
    startY += lineSpacing;
    doc.line(startX, startY, endX, startY);

    return startY;
}
