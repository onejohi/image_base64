### Image Encoder

## Encode and Decode images to base64 and store them in notarealdb as JSON data

**installed packages**
- `notarealdb`

**usage**

Only images stored in the folder `files` will be encoded.
Run `encode.js` with the parameters as listed:
- `filepath` = relative path name to file, include extension name i.e `photo.jpg`
- `filename` = name to be used as reference in notarealdb json data
- `collectionName` = name of collection to store data on images

Encoded images will be decoded into the `output` folder.
Run `decode.js` with the parameters as listed:
- `filename` = reference to the data in the db
- `collectionName` = name of the collection in the db

# Examples
Encode image: `node encode.js spongebob.jpg sponge memes`
Decode image: `node decode.js sponge memes`

**images are stored in notarealdb in the following JSON format**
 -
`{
  id: "ID",
  base64file: "base64fileencodedstring",
  filename: "filename",
  type: "filetype"
 }`
 
 
 Made with :heart: by [@Onejohi](https://onejohi.com)
