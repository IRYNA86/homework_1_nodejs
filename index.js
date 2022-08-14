const contacts = require('./contacts');

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action){
        case 'list':
            const allContacts = await contacts.listContacts();
            console.table(allContacts);
            break;
            case 'get':
                const oneContact = await contacts.getContactById(id);
                console.log(oneContact);
                break;
            default:
                console.log('Unknown action');
    }
}

invokeAction({action: 'list'})
invokeAction({action: 'get', id: '3'})