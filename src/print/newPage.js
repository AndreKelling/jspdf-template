import svg2pdf from "svg2pdf.js";

export default (doc, startY, neededHeight) => {
    const pageHeight = doc.internal.pageSize.height;
    const endY = pageHeight - 120; // minus footerHeight
    const newPageY = 140;

    if (endY - startY - neededHeight < 0) {
        doc.addPage();

        const bgSvg = localStorage.getItem('bgSvg');
        if (bgSvg) {
            const svgText = new window.DOMParser().parseFromString(bgSvg, "text/xml");
            const svg = svgText.getElementsByTagName('svg')[0];
            svg2pdf(svg, doc, {
                xOffset: -70,
                yOffset: 250
            });
        }

        return newPageY;
    }
    return startY;
};
