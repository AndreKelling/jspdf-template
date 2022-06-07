export default (doc, address, startY, fontSize, lineSpacing) => {

    let startX = 57;
    const spaceBetweenWords = 8;

    //-------Sender Info Draw Line and Graphic---------------------
    let endX =  doc.internal.pageSize.width - startX;
    doc.setLineWidth(0.5);
    doc.line(startX, startY + lineSpacing/2, endX, startY + lineSpacing/2);

    //-------Sender Info Address---------------------
    doc.setFontSize(fontSize);

    address = Object.values(address);
    // @todo: more dynamic slice arrays
    const addressStart = address.slice(0,3);
    const addressEnd = address.slice(3);

    addressStart.map(text => {
        if (text) {
            doc.text(text, startX, startY);
            startX = startX + doc.getStringUnitWidth(text) * fontSize + spaceBetweenWords;
        }
    });

    addressEnd.map(text => {
        if (text) {
            doc.text(text, endX, startY, 'right');
            endX = endX - doc.getStringUnitWidth(text) * fontSize - spaceBetweenWords;
        }
    });

    return startY;
};

