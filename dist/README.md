# jsPDF invoice

An invoice template.

Here there is a [demo](https://andrekelling.github.io/jspdf-template/) how that print is looking like.

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
