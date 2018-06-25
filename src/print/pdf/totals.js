import newPage from "../newPage";

export default (doc, invoice, startY, fontSize, lineSpacing) => {
    let startX = 57;
    const pageWidth = doc.internal.pageSize.width;
    const endX =  pageWidth - startX;

    const tablecol3X = 460;

    // <><>><><>><>><><><><><>>><><<><><><><>
    // new page check before totals output
    const neededHeight = lineSpacing * 2 + lineSpacing;
    startY = newPage(doc, startY, neededHeight);

    doc.setDrawColor(157, 183, 128);
    doc.setLineWidth(0.5);
    doc.line(startX, startY, endX, startY);

    doc.setFontSize(fontSize);

    startY += lineSpacing * 2;

    doc.text("Grand Total", tablecol3X, startY, 'right');

    doc.setFontType('bold');
    doc.text(invoice.total, endX, startY, 'right');

    // @todo: font replacement for good width calculation. because else not working with my custom font :(
    doc.setFont('arial');
    startX = endX - doc.getStringUnitWidth(invoice.total) * fontSize - 5;
    doc.setFont('WorkSans');
    startY += lineSpacing / 2;
    doc.setDrawColor(157, 157, 157);
    doc.setLineWidth(0.5);
    doc.line(startX - 1, startY, endX + 1, startY);
    doc.line(startX -2 , startY + 2, endX + 2, startY + 2);

    return startY;
}
