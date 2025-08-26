function cesarEncrypt(text, s) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // Ստուգում ենք արդյոք մեծատառ ա
        if (char >= 'A' && char <= 'Z') {
            let ch = String.fromCharCode(
                ((char.charCodeAt(0) - 65 + s) % 26) + 65
            );
            result += ch;
        }
        // Փոքրատառի դեպքում
        else if (char >= 'a' && char <= 'z') {
            let ch = String.fromCharCode(
                ((char.charCodeAt(0) - 97 + s) % 26) + 97
            );
            result += ch;
        }
        // Մնացած սիմվոլները թողնում ենք առանց փոփոխության
        else {
            result += char;
        }
    }
    return result;
}

module.exports.cesarEncrypt = cesarEncrypt