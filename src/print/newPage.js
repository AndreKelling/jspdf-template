export default (doc, startY, neededHeight) => {
    const pageHeight = doc.internal.pageSize.getHeight();
    const endY = pageHeight - 120; // minus footerHeight
    const newPageY = 140;

    //console.log('needs page: ',endY,endY - startY - newHeight);
    if (endY - startY - neededHeight < 0) {
        //console.log('needs new page');
        doc.addPage();
        return newPageY;
    }
    return startY;
};