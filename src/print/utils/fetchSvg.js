export default (url) => {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.text();
    }).then((str) => {
        return new window.DOMParser().parseFromString(str, "text/xml");
    }).then((svgText) => {
        const svg = svgText.getElementsByTagName('svg')[0];
        const parseFloats = (viewBox) => {
            let floats = [], match,
                regex = /[+-]?(?:(?:\d+\.?\d*)|(?:\d*\.?\d+))(?:[eE][+-]?\d+)?/g;
            while(match = regex.exec(viewBox)) {
                floats.push(parseFloat(match[0]));
            }
            return floats;
        };

        const viewBox = parseFloats(svg.getAttribute("viewBox"));
        const width = parseFloat(svg.getAttribute("width")) || viewBox[2];
        const height = parseFloat(svg.getAttribute("height")) || viewBox[3];

        return {svg, width, height};
    }).catch(function(error) {
        console.log(error);
    });
};