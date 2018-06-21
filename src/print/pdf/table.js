import newPage from '../newPage';

export default (doc, items, startY, fontSize, lineSpacing) => {

    let startX = 57;
    const pageWidth = doc.internal.pageSize.getWidth();
    const endX =  pageWidth - startX;

    const tablecol2X = 386;
    const tablecol3X = 460;

    doc.setFontSize(fontSize);
    doc.setFontType('normal');

    //-------Table Header---------------------
    startY += lineSpacing * 1.5;

    doc.text("Items", startX, startY);
    doc.text("Qty", tablecol2X, startY, 'right');
    doc.text("Price", tablecol3X, startY, 'right');
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
            tablecol2X - startX - lineSpacing * 1.5,
            {widths: fontWidths, kerning: fontKerning}
        );
        const heightTitle = splitTitle.length * doc.internal.getLineHeight();

        doc.setFontType('normal');
        const splitDescription = doc.splitTextToSize(
            item.description,
            tablecol2X - startX - lineSpacing * 1.5,
            {widths: fontWidths, kerning: fontKerning}
        );
        const heightDescription = splitDescription.length * doc.internal.getLineHeight();

        // <><>><><>><>><><><><><>>><><<><><><><>
        // new page check before item output
        startY = newPage(doc, startY, heightDescription + heightTitle);

        doc.setFontType('bold');
        doc.text(splitTitle, startX, startY);
        // tweak Y to be below title. fits nicer with long descriptions. descriptions will be probably taking a row space while titles do not.
        startY += heightTitle;

        doc.setFontType('normal');
        doc.text(splitDescription, startX, startY);

        doc.text(item.qty, tablecol2X, startY, 'right');

        doc.text(item.amount, tablecol3X, startY, 'right');

        doc.text(item.total, endX, startY, 'right');

        startY += heightDescription + lineSpacing;
    });

    return startY;
}
