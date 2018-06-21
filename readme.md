# jsPDF Template

fiddling around with [jsPDF](https://github.com/MrRio/jsPDF) in a simple _ES6 webpack_ setup.

Included custom fonts with this [jsPDF CustomFont support plugin](https://github.com/sphilee/jsPDF-CustomFonts-support). Even it's said that this functionality is already integrated in jsPDF. It is now working with my used custom font.

Included [svg2pdf](https://github.com/yWorks/svg2pdf.js) for better SVG support. Which is also the reason why [jsPDF-yworks](https://github.com/yWorks/jsPDF) package had to replace the original one.

## Setup dev env

1. `yarn install`
2. `yarn run webpack`

you might need to have webpack installed too.

## Description

Print "Templates" are hidden in `src/print/pdf`.

While `src/print/jspdf.js` serves the main start for the printing functionality.

## Issues

* the yworks fork of jsPDF is used for their proper SVG integration
* custom font `work sans` isn't working in any case. sometimes i do switch font temporally for some calculations. e.g. for functions `getStringUnitWidth()` or `splitTextToSize()`
