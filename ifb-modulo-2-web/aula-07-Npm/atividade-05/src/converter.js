import toSpaceCase from 'to-space-case';
import toCapitalCase from 'to-capital-case';
import toConstantCase from 'to-constant-case';

export function convertText(text, conversionType) {
  switch(conversionType) {
    case 'space':
      return toSpaceCase(text);
    case 'capital':
      return toCapitalCase(text);
    case 'constant':
      return toConstantCase(text);
    default:
      return text;
  }
}