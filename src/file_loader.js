import fs from 'fs';
import path from 'path';

const fileLoader = (folderPath) => {
  const dir = folderPath; // path.join(__dirname, folderPath);
  const files = [];
  fs.readdirSync(dir).forEach((f) => {
    if (f.slice(-3) !== '.js') { return; }
    const filesDir = path.join(dir, f);
    const file = require(filesDir); // eslint-disable-line
    files.push(file.default);
  });
  return files;
};

export default fileLoader;
