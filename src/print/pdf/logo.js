import svg2pdf from "svg2pdf.js";
import fetchSvg from "../fetchSvg";

export default (doc, printData, pageNr) => {
    const pageWidth = doc.internal.pageSize.width;
    const pageCenterX = pageWidth / 2;

    return fetchSvg(doc, 'img/logo.svg').then((logoSvg) => {
        if (logoSvg) {
            let n = 0;

            while (n < pageNr) {
                n++;

                doc.setPage(n);

                svg2pdf(logoSvg, doc, {
                    xOffset: pageCenterX - 20,
                    yOffset: 25,
                });

                doc.link(pageCenterX - 25, 25, 50, 50, {url: printData.personalInfo.website});
            }
        }
    });
}
