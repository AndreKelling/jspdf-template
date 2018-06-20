export default (doc, text, startY, fontSize) => {

    let startX = 57;
    doc.setFontSize(fontSize);

    // @todo: add this workaround for missing `widths` and `kerning` values in splitTextToSize function, because used custom font ist not really nice unicode conform
    const fontWidths = doc.internal.getFont('WorkSans', 'normal').metadata.subset.unicodes;
    const fontKerning = doc.internal.getFont('times', 'normal').metadata.Unicode.kerning;

    doc.setFontType('normal');
    const splitText = doc.splitTextToSize(
        text,
        320,
        {widths: fontWidths, kerning: fontKerning}
    );
    doc.text(splitText, startX, startY);

    startY += splitText.length * doc.internal.getLineHeight();

    return startY;
}
