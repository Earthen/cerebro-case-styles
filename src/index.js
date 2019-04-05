const convert = require('./converter');
import { clipboard } from 'electron';
import React from 'react';
import icon from './icon.png';
import camelCaseIcon from './camelCase.png';
import snakeCaseIcon from './snakeCase.png';

const id = 'convert';
export const fn = ({ term, actions, display, update }) => {
    console.log(arguments);
    const match = term.match(/(^convert\s)(.*)/);
    if (match) {
        const cmd = match[1];
        const title = `convert: ${match[2]}`;
        var textToConvert = convert.cases['space'](match[2]);
        const onSelect = (event) => {
        };

        display([
            {
            icon: camelCaseIcon,
            title: `camelCase: ${convert.cases['camel'](textToConvert)}`,
            onSelect: () => actions.copyToClipboard(convert.cases['camel'](textToConvert)),
            getPreview: () => convert.cases['camel'](textToConvert)
            },
            {
                icon: icon,
                title: `PascalCase: ${convert.cases['pascal'](textToConvert)}`,
                onSelect: () => actions.copyToClipboard(convert.cases['pascal'](textToConvert)),
                getPreview: () => convert.cases['pascal'](textToConvert)
            },
            {
                icon: icon,
                title: `kebab-case: ${convert.cases['kebab'](textToConvert)}`,
                onSelect: () => actions.copyToClipboard(convert.cases['kebab'](textToConvert)),
                getPreview: () => convert.cases['kebab'](textToConvert)
            },
            {
                icon: snakeCaseIcon,
                title: `snake_case: ${convert.cases['snake'](textToConvert)}`,
                onSelect: () => actions.copyToClipboard(convert.cases['snake'](textToConvert)),
                getPreview: () => convert.cases['snake'](textToConvert)
            },
            {
                icon: icon,
                title: `space case: ${convert.cases['space'](textToConvert)}`,
                onSelect: () => actions.copyToClipboard(convert.cases['space'](textToConvert)),
                getPreview: () => convert.cases['space'](textToConvert)
            }
            ]
        );
        console.log(clipboard.readText('selection'));
        let autocomplete = clipboard.readText('selection');
        autocomplete = autocomplete ? `convert ${autocomplete}` : term;
        update(id, {term: autocomplete});
    };
};
