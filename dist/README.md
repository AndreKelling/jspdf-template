# jsPDF invoice

An invoice template.

Here there is a [demo](https://andrekelling.github.io/jspdf-template/) how that print is looking like.

It is primarily for bundling into JS for usage in a browser.
There was this [issue](https://github.com/parallax/jsPDF/issues/783) which was getting closed. It should work on nodeJS side just without the `.html()` method. Which is not used here. I did not test it yet.

## Install

1. `npm i jspdf-invoice -S`

## Usage

Should look like this:

```
import { printPDF } from "jspdf-invoice";

document.querySelector(".js-print-pdf").addEventListener("click", function() {
    /**
    * @type {PrintData} check PrintData interface in src/print/index.d.ts
    */
    const printData = {
        ...
    }
    
    printPDF(printData);
});
```
