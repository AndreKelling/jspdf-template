import fetchSvg from "../utils/fetchSvg";

export default (doc, printData, pageNr) => {
    const pageWidth = doc.internal.pageSize.width;
    const pageCenterX = pageWidth / 2;
    let n;

    return fetchSvg('img/logo.svg').then(async ({svg, width}) => {
        if (svg) {
            n = 0;

            while (n < pageNr) {
                n++;

                doc.setPage(n);

                await doc.svg(svg, {
                    x: pageCenterX - width / 2,
                    y: 25
                });

                doc.link(pageCenterX - width / 2, 25, width, 60, {url: printData.personalInfo.website});
            }
        }
    });
}
