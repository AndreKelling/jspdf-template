export default (doc, address, startY, fontSize, lineSpacing) => {

    let startX = 57;

    //-------Sender Info Draw Line and Graphic---------------------
    let endX =  doc.internal.pageSize.width - startX;
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
            // @todo: font replacement for good width calculation. because else not working with my custom font :(
            doc.setFont('arial');
            startX = startX + doc.getStringUnitWidth(text) * fontSize + lineSpacing;
            doc.setFont('WorkSans');
        }
    });

    addressEnd.map(text => {
        if (text) {
            doc.text(text, endX, startY, 'right');
            // @todo: font replacement for good width calculation. because else not working with my custom font :(
            doc.setFont('arial');
            endX = endX - doc.getStringUnitWidth(text) * fontSize - lineSpacing;
            doc.setFont('WorkSans');
        }
    });

    return startY;
};

