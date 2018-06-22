export default (doc, url) => {

    return fetch(url).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.text();
    }).then((str) => {
        return new window.DOMParser().parseFromString(str, "text/xml");
    }).then((svgText) => {
        return svgText.getElementsByTagName('svg')[0];
    }).catch(function(error) {
        console.log(error);
    });
};