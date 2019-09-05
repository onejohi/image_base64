const { DataStore } = require('notarealdb');
const fs = require('fs');
const store = new DataStore('./db');

const args = process.argv.slice(2);
const filename = args[0];
const collectionName = args[1];

const collection = (name) => {
  return store.collection(name);
}

try {
  const dataArray = collection(collectionName).list();
  const file = dataArray.filter((value) => value.filename === filename);
  if (file) {
    let buff = new Buffer(file[0].base64file, 'base64');
    fs.writeFileSync(`./output/${filename}.${file[0].type}`, buff);
    console.log(`./output/${filename}.${file[0].type} has been successfully decoded.`);
  }
} catch(e) {
  console.log(e);
}
