const convert = require('./converter');
import React from 'react';
import icon from './icon.png';

// export const fn = ({ term, actions, display }) => {
//     // var search = (searchTerm) => {
//     //     actions.open(`https://duckduckgo.com/?q=${searchTerm}`);
//     //     actions.hideWindow();
//     // };

//     display({
//         icon: icon,
//         title: `Search DuckDuckGo For ${term}`,
//         // onSelect: () => search(term),
//         // getPreview: () => <Preview query={term} key={term} search={search} />
//     });
// };
export const fn = ({ term, actions, display }) => {
    const match = term.match(/(^convert\s)(.*)/);
    if (match) {
        const cmd = match[1];
        const title = `convert: ${match[2]}`;
        var textToConvert = match[2];
        const onSelect = (event) => {
        };
        display([
            {
            icon: icon,
            title: `camelCase: ${convert.convertToCamelCase(textToConvert)}`,
            onSelect: () => actions.copyToClipboard(convert.convertToCamelCase(textToConvert)),
            getPreview: () => convert.convertToCamelCase(textToConvert)
            },
            {
                icon: icon,
                title: `PascalCase: ${convert.convertToPascalCase(textToConvert)}`,
                onSelect: () => actions.copyToClipboard(convert.convertToPascalCase(textToConvert)),
                getPreview: () => convert.convertToPascalCase(textToConvert)
            },
            {
                icon: icon,
                title: `kebab-case: ${convert.convertToKebabCase(textToConvert)}`,
                onSelect: () => actions.copyToClipboard(convert.convertToKebabCase(textToConvert)),
                getPreview: () => convert.convertToKebabCase(textToConvert)
            },
            {
                icon: icon,
                title: `snake_case: ${convert.convertToSnakeCase(textToConvert)}`,
                onSelect: () => actions.copyToClipboard(convert.convertToSnakeCase(textToConvert)),
                getPreview: () => convert.convertToSnakeCase(textToConvert)
            }
            ]
        );
    };
};
