# jsPDF Template

This a styled invoice Template [jsPDF](https://github.com/MrRio/jsPDF) in a simple _ES6 webpack_ setup.

Includes [svg2pdf](https://github.com/yWorks/svg2pdf.js) for better SVG support. Which is also the reason why [jsPDF-yworks](https://github.com/yWorks/jsPDF) package had to replace the original one.

Here there is a [demo](https://andrekelling.github.io/jspdf-template/).

## Releases

For a bit simpler usage i would suggest to refer back to [Version 1.0](https://github.com/AndreKelling/jspdf-template/releases/tag/1.0) of this development. Which isn't using jspdf-yworks package and integrates graphics as simple base64.

## Setup dev env

1. `npm install`
2. `npm run webpack`

## Custom-Font file

I do use a custom font here. Which is prepared as base64 code like following: https://github.com/MrRio/jsPDF/#use-of-utf-8--ttf

1. My custom fonts are laying as .ttf font-files in `src/fonts` subdirectory.
2. prepared JS script with the font's base64 code are in `src/print/fonts`
3. they got a `import jsPDF from 'jspdf-yworks';` added at the very top

## Description

* Print components are placed in `src/print/pdf`
* `fetchSvg` and `newPage` are tools placed in `src/print`

### Image sizes

Images need to be SVG in here!

* Logo Size: width="40" height="49"
* Address-bar: width="668" height="56", which is scaled down to keep details
* Background: width="733" height="528", which is centralised and hangs a bit over the edges

## Issues

* the yworks fork of jsPDF is used for their proper SVG integration. Still SVG should be SVGO (eg. https://jakearchibald.github.io/svgomg/ or configure a SVGO export in sketch [sketch SVGO export plugin](https://www.sketch.com/extensions/plugins/svgo-compressor/) like this https://github.com/sketch-hq/svgo-compressor/issues/20#issuecomment-411478737) optimized. So some attributes not working for rendering are removed.
* currently using localStorage to save the background graphic globally for synchronous usage. Might not be the best idea.
