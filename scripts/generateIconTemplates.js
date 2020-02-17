const fs = require('fs');
const path = require('path');
var text = fs.readFileSync("./scripts/requiredIcons.txt").toString('utf-8');;
var requiredIcons = text.split("\n").filter(s => !!s);

requiredIcons.forEach(async icon => {
  console.log(icon);
  await fs.copyFileSync('./scripts/template.jsx', `./${icon}.jsx`);
});

