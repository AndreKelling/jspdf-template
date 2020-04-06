# jsPDF Template

This a styled invoice Template [jsPDF](https://github.com/MrRio/jsPDF) in a simple _ES6 webpack_ setup.

I do use a custom font here. Which is prepared as base64 code like following: https://github.com/MrRio/jsPDF/#use-of-utf-8--ttf

Includes [svg2pdf](https://github.com/yWorks/svg2pdf.js) for better SVG support. Which is also the reason why [jsPDF-yworks](https://github.com/yWorks/jsPDF) package had to replace the original one.

## Releases

For a bit simpler usage i would suggest to refer back to [Version 1.0](https://github.com/AndreKelling/jspdf-template/releases/tag/1.0) of this development. Which isn't using jspdf-yworks package and integrates graphics as simple base64.

## Setup dev env

1. `npm install`
2. `npm run webpack`

## Custom Font file

1. My custom fonts are laying as .ttf font-files in `src/fonts` subdirectory.
2. prepared JS script with the font's base64 code are in `src/print/fonts`
3. they got a `import jsPDF from 'jspdf-yworks';` added at the very top

## Description

Print "Templates" or Components are hidden in `src/print/pdf`.

While `src/print/index.js` serves the main start for the printing functionality.

Some functional tools are placed in `src/print`.

## Issues

* the yworks fork of jsPDF is used for their proper SVG integration
* custom font `work sans` isn't working in any case. sometimes i do switch font temporally for some calculations. e.g. for functions `getStringUnitWidth()` or `splitTextToSize()`
* currently using localStorage to save the background graphic globally for synchronous usage. Might not be the best idea.
