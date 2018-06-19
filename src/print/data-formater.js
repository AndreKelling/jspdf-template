export default (data) => {
    const companyJSON = {
        CompanyName:'ABCD TECHONOLOGIES',
        CompanyGSTIN:'GSTIN C238B7E1Z5',
        CompanyState:'KERALA (09)',
        CompanyPAN:'B76C238B7E',
        CompanyAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
        CompanyAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
        CompanyAddressLine3:'COCHIN',
        PIN: '683584',
        companyEmail:'xyz@gmail.com',
        companyPhno:'+918189457845',
    };

    const customer_BillingInfoJSON = {
        CustomerName:'Jino Shaji',
        CustomerGSTIN:'37B76C238B7E1Z5',
        CustomerState:'KERALA (09)',
        CustomerPAN:'B76C238B7E',
        CustomerAddressLine1:'ABCDEFGD HOUSE,IX/642-D',
        CustomerAddressLine2:'ABCDEFGD P.O., NEDUMBASSERY',
        CustomerAddressLine3:'COCHIN',
        PIN: '683584',
        CustomerEmail:'abcd@gmail.com',
        CustomerPhno:'+918189457845',
    };

    const invoiceJSON = {
        InvoiceNo:'INV-120152',
        InvoiceDate:'03-12-2017',
        RefNo:'REF-78445',
        TotalAmnt:'Rs.1,24,200',
        SubTotalAmnt:'Rs.1,04,200',
        TotalGST:'Rs.2,0000',
        TotalCGST:'Rs.1,0000',
        TotalSGST:'Rs.1,0000',
        TotalIGST:'Rs.0',
        TotalCESS:'Rs.0',
    };

    return [companyJSON, customer_BillingInfoJSON, invoiceJSON]
}
