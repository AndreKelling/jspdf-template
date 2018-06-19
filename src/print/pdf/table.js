export default (doc, items, startY, fontSize, lineSpacing) => {

    let startX = 57;
    const pageWidth = doc.internal.pageSize.getWidth();
    const endX =  pageWidth - startX;

    const tablecol2X = 366;
    const tablecol3X = 411;

    doc.setFontSize(fontSize);
    doc.setFontType('normal');

    //-------Table Header---------------------
    startY += lineSpacing;
    doc.text("Items", startX, startY);
    doc.text("Qty", tablecol2X, startY);
    doc.text("Price", tablecol3X, startY);
    doc.text("Total", endX, startY, 'right');

    doc.line(startX, startY + lineSpacing/2, endX, startY + lineSpacing/2);

    startY += lineSpacing * 2;

    //-------Table Body---------------------

    items = Object.values(items);

    items.map(item => {

        doc.setFontType('bold');
        doc.text(item.title, startX, startY);
        const heightTitle = doc.getTextDimensions(item.title).h;

        doc.setFontType('normal');
        const splitTitle = doc.splitTextToSize(
            item.description,
            tablecol2X - startX - lineSpacing,
            // @todo: add this workaround for missing `widths` and `kerning` values in splitTextToSize function, because used custom font ist not really nice unicode conform
            {widths: doc.internal.getFont('WorkSans', 'normal').metadata.subset.unicodes, kerning: doc.internal.getFont('times', 'normal').metadata.Unicode.kerning}
        );
        doc.text(splitTitle, startX, startY + heightTitle);
        const heightDescription = doc.getTextDimensions(splitTitle).h;

        doc.text(item.qty, tablecol2X, startY);

        doc.text(item.amount, tablecol3X, startY);

        doc.text(item.total, endX, startY, 'right');

        startY += heightTitle + heightDescription + lineSpacing;
    });

    return startY;
};

