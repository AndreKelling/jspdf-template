import newPage from "../utils/newPage";

export default async (doc, text, startY, fontSize, lineSpacing) => {

    let startX = 57;
    doc.setFontSize(fontSize);

    startY += lineSpacing * 4;

    doc.setFont(doc.vars.fontFamily, doc.vars.fontWeightNormal);
    let splitText = doc.splitTextToSize(
        text,
        320
    );

    // <><>><><>><>><><><><><>>><><<><><><><>
    // new page check before text output
    const pageHeight = doc.internal.pageSize.height;
    const endY = pageHeight - 120; // minus footerHeight
    const neededSpacing = lineSpacing * 4;
    let neededHeight = splitText.length * doc.internal.getLineHeight();
    let spaceForLines = Math.floor((endY - startY) / doc.internal.getLineHeight());

    // check if new page is needed right at beginning
    startY = await newPage(doc, startY, neededSpacing);

    // <><>><><>><>><><><><><>>><><<><><><><>
    // power algorithm to split long text on multiple pages
    let textStart;

    while (endY - startY - neededHeight < 0 && splitText.length > spaceForLines) {
        spaceForLines = Math.floor((endY - startY) / doc.internal.getLineHeight());
        neededHeight = splitText.length * doc.internal.getLineHeight();

        textStart = splitText.slice(0, spaceForLines);
        doc.setFont('WorkSans'); // set font here again, else weirdo things are printed out
        doc.text(textStart, startX, startY);

        splitText = splitText.slice(spaceForLines);

        startY = await newPage(doc, startY, neededHeight);
    }

    // set font here again, else weirdo things are printed out
    doc.setFont('WorkSans');
    doc.text(splitText, startX, startY);
    neededHeight = splitText.length * doc.internal.getLineHeight();
    startY += neededHeight + lineSpacing;

    return startY;
}
