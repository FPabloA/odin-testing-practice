
function isAlpha (char) {
    return /^[a-zA-Z]$/.test(char);
}

function wrap (n, p) {
    if (n < 0) {
        n = p - Math.abs(n) % p;
    }
    return n % p;
}

function caesarCipher(str, shift) {
    shift = shift % 26;
    let res = "";

    for (let i = 0; i < str.length; i++){

        if (isAlpha(str.charAt(i))) {
            let code = str.charCodeAt(i);

            //uppercase range
            if (code >= 65 && code <= 90){
                code -= 65;
                code = wrap(code + shift, 26);
                code += 65;
            }
            else if(code >= 97 && code <= 122) {
                code -= 97;
                code = wrap(code+shift, 26);
                code += 97
            }
            res += String.fromCharCode(code);
        }
        else{
            res += str.charAt(i);
        }
    }
    return res;
}

module.exports = caesarCipher;
