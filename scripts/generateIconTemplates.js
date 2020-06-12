const fs = require('fs');
const csv = require('csv-parser');
const template = require('lodash.template');

const createTemplates = (row) => {
  const tmpl = fs.readFileSync("./scripts/template.tmpl").toString('utf-8');
  const compiled = template(tmpl);
  const final = compiled(row);
  fs.writeFileSync(`./icons/${row.AntdIcon}.jsx`, final);
};

const createIndexJs = (rows) => {
  const compile = template("export { default as <%= AntdIcon %> } from './<%= AntdIcon %>';");
  const indexData = [];
  rows.forEach(r => {
    indexData.push(compile(r))
  });
  fs.writeFileSync('./icons/index.js', indexData.join('\n'));
};

const data = [];
fs.createReadStream('./scripts/requiredIcons.csv')
  .pipe(csv({
    mapValues: ({ value }) => value.trim(),
  }))
  .on('data', (row) => {
    createTemplates(row);
    data.push(row);
  })
  .on('end', () => {
    createIndexJs(data);
    console.log('Success full generated icon files');
  });
