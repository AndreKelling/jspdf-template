export default (doc, data, headline, startX, startY, lineSpacing) => {

    const padding = lineSpacing / 2;
    let tempY = startY;

    const dataArr = Object.values(data);

    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);
    doc.text(headline, startX + padding, tempY += lineSpacing);
    tempY += lineSpacing;

    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
    dataArr.map(text => {
        if (text) {
            doc.text(text, startX + padding, tempY += lineSpacing);
        }
    });

    doc.setDrawColor(157, 183, 128);
    doc.setLineWidth(1);
    doc.line(startX + 1, startY + padding, startX + 1, tempY + padding/3);
}
