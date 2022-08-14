const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
const contacts = await listContacts();
const result = contacts.find(item => item.id === id);
if(!result){return null};
return result;
}

module.exports = { listContacts, getContactById };
