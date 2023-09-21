function getUsrCipherKey(){
    return key.value;
}
function createCipher(){
    const key = getUsrCipherKey();
    cipher = []; //clear the old one 
    
    for (let i = key; i <= 25; i++){
        cipher.push(alphabet[i]);
    }
    for (let i = 0; i < key; i++){
        cipher.push(alphabet[i]);
    }
    console.log(alphabet);
    console.log(cipher)
}
function outputResult(result){
    alert(result);
}
function encode(){
    createCipher();
    
    let text = cipherEncodeText.value;
    let result = '';
    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) == ' '){
            result += ' ';
        }
        else if(cipher[alphabet.indexOf(text.toUpperCase().charAt(i))] == undefined){
            result += '�';
            // result += String.fromCharCode(UxFFFD);
        }
        else{
            result += cipher[alphabet.indexOf(text.toUpperCase().charAt(i))];
        }
    }
    outputResult(result);
}

btnEncode.addEventListener("click", encode);