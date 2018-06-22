import newPage from '../newPage';

export default (doc, items, startY, fontSize, lineSpacing) => {

    let startX = 57;
    const pageWidth = doc.internal.pageSize.width;
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

        doc.setFontType('bold');
        const splitTitle = doc.splitTextToSize(
            item.title,
            tablecol2X - startX - lineSpacing * 1.5
        );
        const heightTitle = splitTitle.length * doc.internal.getLineHeight();

        doc.setFontType('normal');
        const splitDescription = doc.splitTextToSize(
            item.description,
            tablecol2X - startX - lineSpacing * 1.5
        );
        const heightDescription = splitDescription.length * doc.internal.getLineHeight();

        // <><>><><>><>><><><><><>>><><<><><><><>
        // new page check before item output
        // @todo: display table header on a new page
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
