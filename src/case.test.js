const convert = require('./converter');

test('converts to snake case', () => {
    expect(convert.cases['snake']('some text to convert')).toBe('some_text_to_convert');
});

test('converts to kebab case', () => {
    expect(convert.cases['kebab']('some text to convert')).toBe('some-text-to-convert');
});

test('converts to camel case', () => {
    expect(convert.cases['camel']('some text to convert')).toBe('someTextToConvert');
});

test('converts to pascal case', () => {
    expect(convert.cases['pascal']('some text to convert')).toBe('SomeTextToConvert');
});

test('converts snake case to space case', () => {
    expect(convert.cases['space']('some_text_to_convert')).toBe('some text to convert');
});

test('converts kebab case to space case', () => {
    expect(convert.cases['space']('some-text-to-convert')).toBe('some text to convert');
});

test('converts camel case to space case', () => {
    expect(convert.cases['space']('someTextToConvert')).toBe('some text to convert');
});

test('converts pascal case to space case', () => {
    expect(convert.cases['space']('SomeTextToConvert')).toBe('some text to convert');
});

test('converts space case to space and lower case', () => {
    expect(convert.cases['space']('Some Text To Convert')).toBe('some text to convert');
});
