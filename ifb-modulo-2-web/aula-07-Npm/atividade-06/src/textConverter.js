import toSpaceCase from 'to-space-case';
import toCapitalCase from 'to-capital-case';
import toConstantCase from 'to-constant-case';

export function convertToSpaceCase(text) {
    return toSpaceCase(text);
}

export function convertToCapitalCase(text) {
    return toCapitalCase(text);
}

export function convertToConstantCase(text) {
    return toConstantCase(text);
}

export function convertText(text, conversionType) {
    switch(conversionType) {
        case 'space':
            return convertToSpaceCase(text);
        case 'capital':
            return convertToCapitalCase(text);
        case 'constant':
            return convertToConstantCase(text);
        default:
            return text;
    }
}