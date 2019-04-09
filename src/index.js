import React from 'react';
import Preview from './Preview';
const convert = require('./converter');
import { clipboard } from 'electron';

const id = 'case';

export const fn = ({ term, actions, display, update }) => {

    const match = term.match(/(^case\s)(.*)/);

    const copyToClipboard = text => {
        actions.copyToClipboard(text);
        actions.hideWindow();
    };

    if (match) {
        const cmd = match[1];
        const title = `case: ${match[2]}`;
        var textToConvert = convert.cases['space'](match[2]);

        let cases = Object.keys(convert.cases).map((key) => {
            let convertedText = convert.cases[key](textToConvert);
            return {
                id: key,
                text: convertedText,
                title: `${key}: ${convertedText}`,
                onSelect: copyToClipboard,
            };
        });


        display({
            id: id,
            title: 'to case...',
            getPreview: () => <Preview cases={cases}  />
        }
        );

        let autocomplete = clipboard.readText('selection').trim();
        autocomplete = autocomplete ? `case ${autocomplete}` : term;
        update(id, {term: autocomplete});
    };
};
