const fs = require("fs/promises");
const path = require("path");
console.log(__dirname);
const contactsPath = path.resolve("db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = { listContacts };
