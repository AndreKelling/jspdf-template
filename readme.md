# jsPDF Template

This a styled invoice Template [jsPDF](https://github.com/parallax/jsPDF) in an _ES module_ setup.

Includes [svg2pdf](https://github.com/yWorks/svg2pdf.js) for better SVG support.

Here there is a [demo](https://andrekelling.github.io/jspdf-template/).

It does not work as an ES module in node.js, because JsPDF has an [issue](https://github.com/parallax/jsPDF/issues/783). So it is primarily for bundling into JS for the browser.

## Install

1. `npm install`

If you want the usable node package, you can install it via npm:

`npm i jspdf-invoice -S` it is here https://www.npmjs.com/package/jspdf-invoice

## Build

Creates a bundle JS file which provides the global method `printPDF()`.

For demonstration a docs [GitHub page](https://andrekelling.github.io/jspdf-template/) is here.

1. `npm run build`


## Development

1. `npm run dev`
2. `npm run serve`

## Publish

Is done via GitHub action.

* raise version in `dist/package.json`

A copy of the src dir is taken as artifact for the node package in the dist dir.

## Custom-Font file

I do use a custom font here. Which is prepared as base64 code like following: https://github.com/parallax/jsPDF#use-of-unicode-characters--utf-8

1. My custom fonts are laying as .ttf font-files in `src/fonts` subdirectory.
2. prepared JS script with the font's base64 code are in `src/print/fonts`
3. they got a `import { jsPDF } from 'jspdf';` added at the very top

## Structure

* Print components or template partials are placed in `src/print/partials`
* `fetchSvg` and `newPage` are tools placed in `src/print/utils`

### Image sizes

Images need to be SVG in here!

* Logo Size: width="40" height="49"
* Address-bar: width="668" height="56", which is scaled down to keep details
* Background: width="733" height="528", which is centralised and hangs a bit over the edges

## Issues

* SVG should be SVGO (e.g. https://jakearchibald.github.io/svgomg/ or configure a SVGO export in sketch [sketch SVGO export plugin](https://www.sketch.com/extensions/plugins/svgo-compressor/) like this https://github.com/sketch-hq/svgo-compressor/issues/20#issuecomment-411478737) optimized. So some attributes not working for rendering are removed.
* currently using localStorage to save the background graphic globally for synchronous usage. Might not be the best idea.
