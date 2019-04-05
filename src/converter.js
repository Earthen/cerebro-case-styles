
var cases = {};

cases['lower'] = (text) => { return text.toLowerCase(); };
cases['upper'] = (text) => { return text.toUpperCase(); };
cases['dot'] = (text) => { return text.replace(/ /g, '.'); };
cases['snake'] = (text) => { return text.replace(/ /g, '_'); };
cases['kebab'] = (text) => { return text.replace(/ /g, '-'); };
cases['pascal'] = (text) => { return toPascal(text);};
cases['camel'] = (text) => { return toCamel(text); };
cases['space'] = (text) => { return convertToSpaceCase(text); };

function toCamel(text) {
    return text.split(' ').map(function(word,index){
        if(index == 0){
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

function toPascal(text) {
return text.split(' ').map(function(word,index){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
};

function convertToSpaceCase(text) {
    if(text.includes('_')) {
        return text.replace(/_/g, ' ');
    }
    if(text.includes('-')) {
        return text.replace(/-/g, ' ');
    }

    if(text.includes('.')) {
        return text.replace(/./g, ' ');
    }
    
    return text.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}

module.exports = {
    cases: cases,
};
