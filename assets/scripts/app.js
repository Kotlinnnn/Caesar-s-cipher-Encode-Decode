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
    
}

btnEncode.addEventListener("click", encode);