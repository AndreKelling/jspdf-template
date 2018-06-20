export default (doc, items, startY, fontSize, lineSpacing) => {

    let startX = 57;
    const pageWidth = doc.internal.pageSize.getWidth();
    const endX =  pageWidth - startX;

    const tablecol2X = 366;
    const tablecol3X = 411;

    doc.setFontSize(fontSize);
    doc.setFontType('normal');

    //-------Table Header---------------------
    startY += lineSpacing * 1.5;

    doc.text("Items", startX, startY);
    doc.text("Qty", tablecol2X, startY);
    doc.text("Price", tablecol3X, startY);
    doc.text("Total", endX, startY, 'right');

    startY += lineSpacing;

    doc.line(startX, startY, endX, startY);

    startY += lineSpacing * 1.5;

    //-------Table Body---------------------

    items = Object.values(items);

    items.map(item => {

        // @todo: add this workaround for missing `widths` and `kerning` values in splitTextToSize function, because used custom font ist not really nice unicode conform
        const fontWidths = doc.internal.getFont('WorkSans', 'normal').metadata.subset.unicodes;
        const fontKerning = doc.internal.getFont('times', 'normal').metadata.Unicode.kerning;

        doc.setFontType('bold');
        const splitTitle = doc.splitTextToSize(
            item.title,
            tablecol2X - startX - lineSpacing,
            {widths: fontWidths, kerning: fontKerning}
        );
        doc.text(splitTitle, startX, startY);
        const heightTitle = splitTitle.length * doc.internal.getLineHeight();

        // tweak Y to be below title. fits nicer with long descriptions. descriptions will be probably taking a row space while titles do not.
        startY += heightTitle;

        doc.setFontType('normal');
        const splitDescription = doc.splitTextToSize(
            item.description,
            tablecol2X - startX - lineSpacing,
            {widths: fontWidths, kerning: fontKerning}
        );
        doc.text(splitDescription, startX, startY);
        const heightDescription = splitDescription.length * doc.internal.getLineHeight();

        doc.text(item.qty, tablecol2X, startY);

        doc.text(item.amount, tablecol3X, startY);

        doc.text(item.total, endX, startY, 'right');

        startY += heightDescription + lineSpacing;
    });

    return startY;
};

