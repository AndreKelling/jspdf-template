import jsPDF from 'jspdf';
import dataFormater from "../data-formater";

export default (doc, startY, fontSizes, lineSpacing) => {
    const companyJSON = dataFormater()[0];
    const invoiceJSON = dataFormater()[2];

    const rightStartCol1 = 400;
    const rightStartCol2 = 480;

    const startX = 40;
    const InitialstartY = 50;
    const pageCenterX = doc.internal.pageSize.getWidth() / 2;

    doc.setFontSize(fontSizes.SubTitleFontSize);
    // doc.setFontType('bold');
    doc.text(companyJSON.CompanyName, startX, startY += 15);

    doc.setFontSize(fontSizes.NormalFontSize);
    doc.text("TEST HEADER", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(companyJSON.CompanyGSTIN, 80, startY);

    doc.setFontType('bold');
    doc.text("STATE", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(companyJSON.CompanyState, 80, startY);

    doc.setFontType('bold');
    doc.text("PAN", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(companyJSON.CompanyPAN, 80, startY);

    doc.setFontType('bold');
    doc.text("PIN", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(companyJSON.PIN, 80, startY);

    doc.setFontType('bold');
    doc.text("EMAIL", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(companyJSON.companyEmail, 80, startY);

    doc.setFontType('bold');
    doc.text("Phone: ", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(companyJSON.companyPhno, 80, startY);

    var tempY = InitialstartY;

    doc.setFontType('bold');
    doc.text("INVOICE NO: ", rightStartCol1, tempY += lineSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.InvoiceNo, rightStartCol2, tempY);


    doc.setFontType('bold');
    doc.text("INVOICE Date: ", rightStartCol1, tempY += lineSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.InvoiceDate, rightStartCol2, tempY);

    doc.setFontType('bold');
    doc.text("Reference No: ", rightStartCol1, tempY += lineSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.RefNo, rightStartCol2, tempY);

    doc.setFontType('bold');
    doc.text("Total: ", rightStartCol1, tempY += lineSpacing);
    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalAmnt, rightStartCol2, tempY);
    // doc.writeText(0, tempY+=lineSpacing ,"INVOICE No  :  "+invoiceJSON.InvoiceNo + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing ,"INVOICE Date: "+invoiceJSON.InvoiceDate + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing ,"Reference No: "+invoiceJSON.RefNo + '     ', { align: 'right' });
    // doc.writeText(0, tempY+=lineSpacing ,"Total       :  Rs. "+invoiceJSON.TotalAmnt + '     ', { align: 'right' });

    doc.setFontType('normal');

    doc.setLineWidth(1);
    // doc.line(20, startY+lineSpacing, 580, startY+=lineSpacing);
    doc.line(20, startY + lineSpacing, 220, startY + lineSpacing);
    doc.line(380, startY + lineSpacing, 580, startY + lineSpacing);

    doc.setFontSize(fontSizes.Head2TitleFontSize);
    doc.setFontType('bold');

    doc.text("TAX INVOICE", pageCenterX, startY += lineSpacing + 2, 'center');

    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');

    return startY;
};

