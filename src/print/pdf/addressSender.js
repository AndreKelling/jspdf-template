export default (doc, address, startY, fontSize, lineSpacing) => {

    let startX = 57;

    //-------Sender Info Draw Line and Graphic---------------------
    let endX =  doc.internal.pageSize.getWidth() - startX;
    doc.setLineWidth(0.5);
    doc.line(startX, startY + lineSpacing/2, endX, startY + lineSpacing/2);

    //-------Sender Info Address---------------------
    doc.setFontType('normal');
    doc.setFontSize(fontSize);

    address = Object.values(address);
    // @todo: slice arrays while knowing they wont change it's content
    const addressStart = address.slice(0,3);
    const addressEnd = address.slice(3);

    addressStart.map(text => {
        if (text) {
            doc.text(text, startX, startY);
            startX = startX + doc.getStringUnitWidth(text) * fontSize + lineSpacing;
        }
    });

    addressEnd.map(text => {
        if (text) {
            doc.text(text, endX, startY, 'right');
            endX = endX - doc.getStringUnitWidth(text) * fontSize - lineSpacing;
        }
    });

    return startY;
};

