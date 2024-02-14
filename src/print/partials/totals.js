import newPage from "../utils/newPage";

export default async (doc, printData, startY, fontSize, lineSpacing) => {
    let startX = 57;
    const pageWidth = doc.internal.pageSize.width;
    const endX = pageWidth - startX;

    const tablecol3X = 460;

    // <><>><><>><>><><><><><>>><><<><><><><>
    // new page check before totals output
    const neededHeight = lineSpacing * 2 + lineSpacing;
    startY = await newPage(doc, startY, neededHeight);

    doc.setDrawColor(157, 183, 128);
    doc.setLineWidth(0.5);
    doc.line(startX, startY, endX, startY);

    doc.setFontSize(fontSize);

    startY += lineSpacing * 2;

    doc.text(printData.label.totalGrand, tablecol3X, startY, 'right');

    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);
    doc.text(printData.invoice.total, endX, startY, 'right');

    startX = endX - doc.getStringUnitWidth(printData.invoice.total) * fontSize - 5;
    doc.setLineWidth(0.5);
    startY += 4;
    doc.line(startX - 1, startY, endX + 1, startY);
    startY += 2;
    doc.line(startX - 2, startY, endX + 2, startY);

    return startY;
}
