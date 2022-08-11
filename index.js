const contacts = require('./contacts');

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action){
        case 'listContacts':
            const allContacts = await contacts.listContacts();
            console.table(allContacts);
            break;
            default:
                console.log('Unknown action');
    }
}

invokeAction({action: 'listContacts'})