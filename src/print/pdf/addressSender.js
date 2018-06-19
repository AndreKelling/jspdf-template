export default (doc, address, startY, fontSize, lineSpacing) => {

    let startX = 57;

    //-------Sender Info Draw Line and Graphic---------------------
    const endX =  doc.internal.pageSize.getWidth() - startX;
    doc.setLineWidth(0.5);
    doc.line(startX, startY + lineSpacing/2, endX, startY + lineSpacing/2);

    //-------Sender Info Address---------------------
    doc.setFontType('normal');
    doc.setFontSize(fontSize);

    address = Object.values(address);

    address.map(text => {
        if (text) {
            doc.text(text, startX, startY);
            startX = startX + doc.getStringUnitWidth(text) * fontSize + lineSpacing;
            // @todo: more space between city and email
        }
    });

    return startY;
};

