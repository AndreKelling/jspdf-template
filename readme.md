# jsPDF Template

This a styled invoice Template [jsPDF](https://github.com/MrRio/jsPDF) in a simple _ES6 webpack_ setup.

Includes custom fonts with this [jsPDF CustomFont support plugin](https://github.com/sphilee/jsPDF-CustomFonts-support). Even it's said that this functionality is already integrated in jsPDF. It is now working with my used custom font.

Includes [svg2pdf](https://github.com/yWorks/svg2pdf.js) for better SVG support. Which is also the reason why [jsPDF-yworks](https://github.com/yWorks/jsPDF) package had to replace the original one.

## Releases

For a bit simpler usage i would suggest to refer back to [Version 1.0](https://github.com/AndreKelling/jspdf-template/releases/tag/1.0) of this development. Which isn't using jspdf-yworks package and integrates graphics as simple base64.

## Setup dev env

1. `npm install`
2. `npm run webpack`

## Create custom Font file

1. Copy your fonts into the **fonts** subdirectory.
2. Run `node makeFonts.js` to create a new print/default_vfs.js.   

## Description

Print "Templates" or Components are hidden in `src/print/pdf`.

While `src/print/index.js` serves the main start for the printing functionality.

Some functional tools are placed in `src/print`.

## Issues

* the yworks fork of jsPDF is used for their proper SVG integration
* custom font `work sans` isn't working in any case. sometimes i do switch font temporally for some calculations. e.g. for functions `getStringUnitWidth()` or `splitTextToSize()`
* currently using localStorage to save the background graphic globally for synchronous usage. Might not be the best idea.
