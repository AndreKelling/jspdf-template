export default (doc, address, startY, fontSize, lineSpacing) => {

    const startX = 57;

    //-------Customer Info Address---------------------
    doc.setFontType('bold');
    doc.setFontSize(fontSize);

    address = Object.values(address);

    address.map(text => {
        if (text) {
            doc.text(text, startX, startY += lineSpacing);
        }
    });

    return startY;
};

