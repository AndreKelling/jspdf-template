declare interface PrintData {
    addressSender: {
        person: string;
        street: string;
        city: string;
        email: string;
        phone: string;
    },
    address: {
        company: string;
        person: string;
        street: string;
        city: string;
    },
    personalInfo: {
        website: string;
        bank: {
            person: string;
            name: string;
            IBAN: string;
        },
        taxoffice: {
            name: string;
            number: string;
        }
    },
    label: {
        invoicenumber: string;
        invoice: string;
        tableItems: string;
        tableQty: string;
        tableSinglePrice: string;
        tableSingleTotal: string;
        totalGrand: string;
        contact: string;
        bank: string;
        taxinfo: string;
    },
    invoice: {
        number: string;
        date: string;
        subject: string;
        total: string;
        text: string;
    },
    items: {
        [key: number]: {
            title: string;
            description: string;
            amount: string;
            qty: string;
            total: string;
        }
    }
}

export declare function printPDF(printData: PrintData): void;
