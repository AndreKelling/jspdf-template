import printPDF from './print';

const basePrintData = {
    'addressSender': {
        'person':'André Kelling',
        'street':'Brückenstraße 3',
        'city':'12439 Berlin',
        'email':'kontakt@andrekelling.de',
        'phone':'+49 (0) 178 1 / 751 157'
    },
    'address': {
        'company':'Johnlands',
        'person':'Jona Jonaldo',
        'street':'Jonestreet 123',
        'city':'12345 Jenese Joplin',
    },
    'personalInfo': {
        'website': 'https://andrekelling.de',
        'bank': {
            'person':'André Kelling',
            'name':'Noris Bank',
            'IBAN':'DE12 3456 7890 1234 5678 90'
        },
        'taxoffice': {
            'name':'FA Treptow-Köpenick',
            'number':'St-Nr 12/123/12345'
        }
    },
    'label': {
        'invoicenumber':'Invoice No.',
        'invoice':'Invoice for',
        'tableItems':'Items',
        'tableQty':'Qty',
        'tableSinglePrice':'Price',
        'tableSingleTotal':'Total',
        'totalGrand':'Grand Total',
        'contact':'Kontaktdetails',
        'bank':'Bankverbindung',
        'taxinfo':'Steuernummer',
    }
};
const shortPrintData = {
    'invoice': {
        'number':'2018-15738',
        'date':'28.06.2018',
        'subject':'https://andrekelling.de',
        'total':'2.838,00 €',
        'text':'Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\nal ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\nvestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.'
    },
    'items': {
        [0]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [1]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        }
    }
};
const longPrintData = {
    'invoice': {
        'number':'2018-15738',
        'location':'Berlin',
        'date':'28.06.2018',
        'subject':'https://andrekelling.de',
        'total':'6.724,00 €',
        'text':'Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\naliquid ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\nvestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.\n' +
        '\n' +
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n' +
        'nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie'
    },
    'items': {
        [0]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [1]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [2]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [3]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        },
        [4]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [5]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [6]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [7]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        }
    }
};
const longestPrintData = {
    'invoice': {
        'number':'2018-15738',
        'location':'Berlin',
        'date':'28.06.2018',
        'subject':'https://andrekelling.de',
        'total':'888.556.724,00 €',
        'text':'Etiam quis quam. Nullam at arcu a est sollicitudin euismod. Nulla quis diam. Etiam neque. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut\naliquid ex ea commodi consequatur? Fusce tellus. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Phasellus enim erat,\nvestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis justo.\n' +
        '\n' +
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis jo egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n' +
        'nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie'+
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus. Donec vitae arcu. Sed convallis magna eu sem. Cras elementum. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Nulla non lectus sed nisl molestie malesuada. Etiam quis quam. In rutrum. Nullam sit amet magna in magna gravida vehicula. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nullam dapibus fermentum ipsum. Etiam posuere lacus quis dolor. Integer imperdiet lectus quis justo. Duis viverra diam non justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vestibulum vel, aliquam a, posuere eu, velit. Integer vulputate sem a\n' +
        'nibh rutrum consequat. Mauris metus. Phasellus faucibus molestie\n' +
        'nisl. Suspendisse sagittis ultrices augue. Integer imperdiet lectus quis\n' +
        'justo.\n' +
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.\n' +
        'Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,\n' +
        'nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit,\n' +
        'ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis\n'+
        'Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.\n' +
        'Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,\n' +
        'nec bibendum odio risus sit amet ante. Fusce nibh. Mauris suscipit'
    },
    'items': {
        [0]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [1]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [2]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [3]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        },
        [4]: {
            'title':'Templating',
            'description':'predefined custom specialities for vague usage in a framework. Sense a light case weight value for exisiting solution services. Provide a case for universal properties.',
            'amount':'1.200,00 €',
            'qty':'2',
            'total':'2.400,00 €'
        },
        [5]: {
            'title':'Design',
            'description':'outwork digital screen UX in different cases for utilities',
            'amount':'876,00 €',
            'qty':'0.5',
            'total':'438,00 €'
        },
        [6]: {
            'title':'Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'12,00 €',
            'qty':'1',
            'total':'12,00 €'
        },
        [7]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'256,00 €',
            'qty':'2',
            'total':'512,00 €'
        },
        [8]: {
            'title':'Security Security Security Security Security Security Security',
            'description':'develop a 100% secure workflow mechanism by shutting down your PC',
            'amount':'88812,00 €',
            'qty':'888',
            'total':'88812,00 €'
        },
        [9]: {
            'title':'Capability Training Closure Business Rules Appliance Regulatory',
            'description':'setup your skill mentoring for future reference & allow $ signs to getUsed `because` this should get covered too. Let me just explain not why ß.',
            'amount':'888256,00 €',
            'qty':'88',
            'total':'8888512,00 €'
        }
    }
};

document.getElementById('short').onclick = () => {
    printPDF(Object.assign(basePrintData, shortPrintData));
};

document.getElementById('long').onclick = () => {
    printPDF(Object.assign(basePrintData, longPrintData));
};

document.getElementById('longest').onclick = () => {
    printPDF(Object.assign(basePrintData, longestPrintData));
};

