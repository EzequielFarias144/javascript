const toSpaceCase = require('to-space-case');
const toCapitalCase = require('to-capital-case');
const toConstantCase = require('to-constant-case');

const strings = [
  'InstitutoFederalDeBrasilia',
  'sistemas.para.internet',
  'Programacao_para_Internet-1'
];

function testConversions(str) {
  console.log(`\nOriginal: ${str}`);
  console.log(`toSpaceCase: ${toSpaceCase(str)}`);
  console.log(`toCapitalCase: ${toCapitalCase(str)}`);
  console.log(`toConstantCase: ${toConstantCase(str)}`);
}

strings.forEach(testConversions);