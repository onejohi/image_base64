const fs = require('fs');
const { DataStore } = require('notarealdb');

const myArgs = process.argv.slice(2);
const store = new DataStore('./db');

const createCollection = (collectionName) => {
  return store.collection(collectionName);
}

const saveItem = (collectionName, data) => {
  createCollection(collectionName).create({ ...data })
}

switch(typeof myArgs[0]) {
  case 'string':
    try {
      let base64file = fs.readFileSync(`./files/${myArgs[0]}`).toString('base64');
      let filename = myArgs[1];
      let collectionName = myArgs[2];
      if (!filename) {
        filename = 'Unnamed file';
      }
      if (!collectionName) {
        collectionName = 'default';
      }
      saveItem(collectionName, { base64file, filename, type: myArgs[0].substr(myArgs[0].length - 3) });
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.log(`No file found at ${e.path}, ensure you've written it correctly.`);
      }
    }
    break;
  default:
    console.log('Please enter a valid file name in the files folder');
    break;
}