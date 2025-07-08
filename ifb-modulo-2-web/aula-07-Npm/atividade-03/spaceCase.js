const toSpaceCase = require('to-space-case');

const strings = [
  'InstitutoFederalDeBrasilia',
  'sistemas.para.internet',
  'Programacao_para_Internet-1'
];

strings.forEach(str => {
  const converted = toSpaceCase(str);
  console.log(`Original: ${str}`);
  console.log(`Convertido: ${converted}\n`);
});