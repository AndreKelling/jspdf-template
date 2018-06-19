export default (doc, address, startY, fontSizes, lineSpacing) => {

    const startX = 57;

    //-------Customer Info Address---------------------
    doc.setFontType('normal');
    doc.setFontSize(fontSizes.NormalFontSize);

    address = Object.values(address);

    address.map(text => {
        if (text) {
            doc.text(text, startX, startY += lineSpacing);
        }
    });

    return startY;
};

