const fs = require('fs');
const path = require('path');

const getTextFromFile = (dirname, relativePath) => {
  const queryText = fs.readFileSync(
    path.resolve(dirname, relativePath), 'utf8'
  );
  return queryText;
}

module.exports = getTextFromFile;