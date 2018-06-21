import svg2pdf from "svg2pdf.js";
//import svg2pdf from '../../node_modules/svg2pdf.js/dist/svg2pdf';

export default (doc, url, startX, startY, scale, page = 1) => {

    return fetch(url).then((response) => {
        return response.text();
    }).then((str) => {
        //console.log(str);
        return new window.DOMParser().parseFromString(str, "text/xml");
    }).then((svgText) => {
        const svg = svgText.getElementsByTagName('svg')[0];

        doc.setPage(page);

        svg2pdf(svg, doc, {
            xOffset: startX,
            yOffset: startY,
            scale: scale
        });
    }).catch(function(error) {
        console.log(error);
    });
};