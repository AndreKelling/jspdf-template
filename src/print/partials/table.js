import newPage from '../utils/newPage';

export default async (doc, printData, startY, fontSize, lineSpacing) => {

    let startX = 57;
    const pageWidth = doc.internal.pageSize.width;
    const endX = pageWidth - startX;

    const tablecol2X = 386;
    const tablecol3X = 460;

    doc.setFontSize(fontSize);
    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);

    //-------Table Header---------------------
    startY += lineSpacing * 1.5;

    doc.text(printData.label.tableItems, startX, startY);
    doc.text(printData.label.tableQty, tablecol2X, startY, {align: 'right'});
    doc.text(printData.label.tableSinglePrice, tablecol3X, startY, {align: 'right'});
    doc.text(printData.label.tableSingleTotal, endX, startY, {align: 'right'});

    startY += lineSpacing;

    doc.line(startX, startY, endX, startY);

    startY += lineSpacing * 1.5;

    //-------Table Body---------------------

    const items = Object.values(printData.items);

    for (const item of items) {
        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);
        const splitTitle = doc.splitTextToSize(
            item.title,
            tablecol2X - startX - lineSpacing * 1.5
        );
        const heightTitle = splitTitle.length * doc.internal.getLineHeight();

        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
        const splitDescription = doc.splitTextToSize(
            item.description,
            tablecol2X - startX - lineSpacing * 1.5
        );
        const heightDescription = splitDescription.length * doc.internal.getLineHeight();

        // <><>><><>><>><><><><><>>><><<><><><><>
        // new page check before item output
        // @todo: display table header at start of a new page
        startY = await newPage(doc, startY, heightDescription + heightTitle);

        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightBold);
        doc.text(splitTitle, startX, startY);

        // tweak Y to be below title. fits nicer with long descriptions. descriptions will be probably taking a row space while titles do not.
        startY += heightTitle;

        doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
        doc.text(splitDescription, startX, startY);

        doc.text(item.qty, tablecol2X, startY, {align: 'right'});

        doc.text(item.amount, tablecol3X, startY, {align: 'right'});

        doc.text(item.total, endX, startY, {align: 'right'});

        startY += heightDescription + lineSpacing;
    }

    return startY;
}
