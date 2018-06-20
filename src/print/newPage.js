export default (doc, startY, newHeight) => {
    const pageHeight = doc.internal.pageSize.getHeight();
    const endY = pageHeight - 120; // minus footerHeight
    const newPageY = 140;

    console.log('needs page: ',endY,startY);
    if (endY - startY - newHeight < 0) {
        console.log('needs new page');
        doc.addPage();
        return newPageY;
    }
    return startY;
};