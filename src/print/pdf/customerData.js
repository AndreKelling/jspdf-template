import jsPDF from 'jspdf';
import dataFormater from "../data-formater";

export default (doc, startY, fontSizes, lineSpacing) => {
    const customer_BillingInfoJSON = dataFormater()[1];

    const startX = 40;

    //-------Customer Info Billing---------------------
    const resetY = startY;

    doc.text("CHECK NEXT,", startX, startY += lineSpacing);
    doc.text(customer_BillingInfoJSON.CustomerName, startX, startY += lineSpacing);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.text("GSTIN", startX, startY += lineSpacing);
    doc.setFontType('normal');
    // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.text(customer_BillingInfoJSON.CustomerGSTIN, 80, startY);


    // doc.setFontType('bold');
    // doc.text("PAN", startX, startY+=lineSpacing);
    // doc.setFontType('normal');
    // doc.text(customer_BillingInfoJSON.CustomerPAN, 80, startY);

    doc.setFontType('bold');
    doc.text("Address", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerAddressLine1, 80, startY);
    doc.text(customer_BillingInfoJSON.CustomerAddressLine2, 80, startY += lineSpacing);
    doc.text(customer_BillingInfoJSON.CustomerAddressLine3, 80, startY += lineSpacing);

    doc.setFontType('bold');
    doc.text("STATE", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerState, 80, startY);

    doc.setFontType('bold');
    doc.text("PIN", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.PIN, 80, startY);

    doc.setFontType('bold');
    doc.text("EMAIL", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerEmail, 80, startY);

    doc.setFontType('bold');
    doc.text("Phone: ", startX, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerPhno, 80, startY);


    //-------Customer Info Shipping---------------------
    const rightcol1 = 340;
    const rightcol2 = 400;

    startY = resetY;

    doc.setFontType('bold');
    doc.text("Shipping Address,", rightcol1, startY += lineSpacing);
    doc.text(customer_BillingInfoJSON.CustomerName, rightcol1, startY += lineSpacing);
    doc.setFontSize(fontSizes.NormalFontSize);
    doc.setFontType('bold');
    doc.text("GSTIN", rightcol1, startY += lineSpacing);
    doc.setFontType('normal');
    // var w = doc.getStringUnitWidth('GSTIN') * NormalFontSize;
    doc.text(customer_BillingInfoJSON.CustomerGSTIN, rightcol2, startY);


    // doc.setFontType('bold');
    // doc.text("PAN", startX, startY+=lineSpacing);
    // doc.setFontType('normal');
    // doc.text(customer_BillingInfoJSON.CustomerPAN, 80, startY);

    doc.setFontType('bold');
    doc.text("Address", rightcol1, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerAddressLine1, rightcol2, startY);
    doc.text(customer_BillingInfoJSON.CustomerAddressLine2, rightcol2, startY += lineSpacing);
    doc.text(customer_BillingInfoJSON.CustomerAddressLine3, rightcol2, startY += lineSpacing);

    doc.setFontType('bold');
    doc.text("STATE", rightcol1, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerState, rightcol2, startY);

    doc.setFontType('bold');
    doc.text("PIN", rightcol1, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.PIN, rightcol2, startY);

    doc.setFontType('bold');
    doc.text("EMAIL", rightcol1, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerEmail, rightcol2, startY);

    doc.setFontType('bold');
    doc.text("Phone: ", rightcol1, startY += lineSpacing);
    doc.setFontType('normal');
    doc.text(customer_BillingInfoJSON.CustomerPhno, rightcol2, startY);


    return startY;
};

