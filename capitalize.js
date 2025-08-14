function capitalize(str) {
    let res = "";
    let firstChar = str.charAt(0);
    firstChar = firstChar.toUpperCase();
    res = firstChar + str.slice(1);
    return res;
}

module.exports =  capitalize;