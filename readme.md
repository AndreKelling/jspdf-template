# jsPDF Template

fiddling around with [jsPDF](https://github.com/MrRio/jsPDF) in a simple _ES6 webpack_ setup.

Included custom fonts with this [jsPDF CustomFont support plugin](https://github.com/sphilee/jsPDF-CustomFonts-support). Even it's said that this functionality is already integrated in jsPDF. It is now working with my used custom font.

## Setup dev env

1. `yarn install`
2. `yarn run webpack`

## Description

Print "Templates" are hidden in `src/print/pdf`.

While `src/print/jspdf.js` serves the main start for the printing functionality.
