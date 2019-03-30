const convert = require('./converter');

test('converts to snake case', () => {
    expect(convert.convertToSnakeCase('some text to convert')).toBe('some_text_to_convert');
});

test('converts to kebab case', () => {
    expect(convert.convertToKebabCase('some text to convert')).toBe('some-text-to-convert');
});

test('converts to camel case', () => {
    expect(convert.convertToCamelCase('some text to convert')).toBe('someTextToConvert');
});

test('converts to pascal case', () => {
    expect(convert.convertToPascalCase('some text to convert')).toBe('SomeTextToConvert');
});

