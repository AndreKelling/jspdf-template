import dataFormater from "../data-formater";

export default (doc, startY, fontSize, lineSpacing) => {
    const companyJSON = dataFormater()[0];
    const invoiceJSON = dataFormater()[2];

    const rightcol1 = 340;
    const rightcol2 = 430;

    doc.setFontSize(fontSize);

    doc.setFontType('bold');
    doc.text("Sub Total,", rightcol1, startY += lineSpacing);
    doc.text(invoiceJSON.SubTotalAmnt, rightcol2, startY);

    doc.setFontSize(fontSize);

    doc.setFontType('bold');
    doc.text("Grand Total Rs.", rightcol1, startY += lineSpacing);

    doc.setFontType('normal');
    doc.text(invoiceJSON.TotalAmnt, rightcol2, startY);

    doc.setFontType('bold');
    doc.text('For ' + companyJSON.CompanyName + ',', rightcol2, startY += lineSpacing + 50, 'center');
};

