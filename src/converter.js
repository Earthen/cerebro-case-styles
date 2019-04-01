function convertToSnakeCase(text) {
    return text.replace(/ /g, '_');
}

function convertToKebabCase(text) {
    return text.replace(/ /g, '-');
}

function isFirstWord(index) {
    return index == 0;
}

function convertToCamelCase(text) {
return text.split(' ').map(function(word,index){
    if(isFirstWord(index)){
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

function convertToPascalCase(text) {
return text.split(' ').map(function(word,index){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

function convertToSpaceCase(text) {
    if(text.includes('_')) {
        return text.replace(/_/g, ' ');
    }
    if(text.includes('-')) {
        return text.replace(/-/g, ' ');
    }
    return text.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
}

module.exports = {
    convertToSnakeCase: convertToSnakeCase,
    convertToCamelCase: convertToCamelCase,
    convertToPascalCase: convertToPascalCase,
    convertToKebabCase: convertToKebabCase,
    convertToSpaceCase: convertToSpaceCase,
};
