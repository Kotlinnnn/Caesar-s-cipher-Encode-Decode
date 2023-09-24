function getUsrCipherKey(){
    return key.value;
}
function createCipher(){
    const key = getUsrCipherKey();
    cipher = []; //clear the old one 
    
    for (let i = key; i <= alphabet.length - 1; i++){
        cipher.push(alphabet[i]);
    }
    for (let i = 0; i < key; i++){
        cipher.push(alphabet[i]);
    }
}
function outputResult(result){
    resultOutput.innerHTML = result;
}

function encode(){
    createCipher();
    
    let text = cipherEncodeText.value.toUpperCase();
    let result = '';

    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) == ' '){
            result += ' ';
        }
        else if (cipher[alphabet.indexOf(text.charAt(i))] == undefined){
            result += '�';
        }
        else{
            result += cipher[alphabet.indexOf(text.charAt(i))];
        }
    }
    outputResult(result);
}
function decode(){
    createCipher();

    let text = cipherDecodeText.value.toUpperCase();
    let result = '';

    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) == ' '){
            result += ' ';
        }
        else if (alphabet.indexOf(text.charAt(i)) == undefined){
            result += '�';
        }
        else{
            result += alphabet[cipher.indexOf(text.charAt(i))];
        }
    }
    outputResult(result);
}

btnEncode.addEventListener("click", encode);
btnDecode.addEventListener("click", decode);