const convert = require('./converter');
import { clipboard } from 'electron';

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


        display(
            Object.keys(convert.cases).map((key) => {
                var convertedText = convert.cases[key](textToConvert);
                return {
                    title: `${convertedText}`,
                    onSelect: () => actions.copyToClipboard(convertedText),
                    getPreview: () => convertedText
                };
            })
        );
        console.log(clipboard.readText('selection'));
        let autocomplete = clipboard.readText('selection');
        autocomplete = autocomplete ? `convert ${autocomplete}` : term;
        update(id, {term: autocomplete});
    };
};
