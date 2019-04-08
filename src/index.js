import React from 'react';
import Preview from './Preview';
const convert = require('./converter');
import { clipboard } from 'electron';

const id = 'convert';

export const fn = ({ term, actions, display, update }) => {

    const match = term.match(/(^convert\s)(.*)/);

    if (match) {
        const cmd = match[1];
        const title = `convert: ${match[2]}`;
        var textToConvert = convert.cases['space'](match[2]);

        let cases = Object.keys(convert.cases).map((key) => {
            let convertedText = convert.cases[key](textToConvert);
            return {
                id: key,
                text: convertedText,
                title: `${key}: ${convertedText}`,
                onSelect: actions.copyToClipboard,
            };
        });


        display({
            id: id,
            title: 'to case...',
            getPreview: () => <Preview cases={cases}  />
        }
        );


        let autocomplete = clipboard.readText('selection').trim();
        autocomplete = autocomplete ? `convert ${autocomplete}` : term;
        update(id, {term: autocomplete});
    };
};
