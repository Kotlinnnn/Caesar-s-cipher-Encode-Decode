function rewriteSelectShift(){
    const alphabet = selectAlphabet(selectedAlphabet.value);
    shiftValue.innerHTML = '';

    for (let i = 0; i<=alphabet.length; i++){
        let option = document.createElement('option');
        option.innerText = i;
        option.value = i;
        shiftValue.appendChild(option);
    }
}
function selectAlphabet(e){
    switch(e){
        case "LatinAlphabet":
            return LatinAlphabet;
        case "PolishAlphabet":
            return PolishAlphabet;
    }
}
function outputResult(result){
    resultOutput.innerHTML = result;
}

function createCipher(){
    const key = shiftValue.value;
    const direction = parseInt(shiftDirection.value); // 0 == left, 1 == right
    const alphabet = selectAlphabet(selectedAlphabet.value);
    cipher = []; //clear the old one 
    
    switch(direction){
        case 0:
            // LEFT SHIFT
            if (key == 0){
                cipher = alphabet;
            }
            else{
                for (let i = key; i <= alphabet.length - 1; i++){
                    cipher.push(alphabet[i]);
                }
                for (let i = 0; i < key; i++){
                    cipher.push(alphabet[i]);
                }
            }
            break;
        case 1:
            // RIGHT SHIFT
            if (key == 0){ 
                cipher = alphabet;
            }
            else{
                for (let i = alphabet.length - key; i <= alphabet.length - 1; i++){
                    cipher.push(alphabet[i]);
                }
                for (let i = key; i <= alphabet.length - 1; i++){
                    cipher.push(alphabet[i - key]);
                }
            }
            break;
    }
    console.log(alphabet);
    console.log(key);
    console.log(cipher);
    console.log(direction);
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
    // cipherEncodeText.value = '';
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
        else if (alphabet.indexOf(text.charAt(i)) == -1){        
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
selectedAlphabet.addEventListener("change", rewriteSelectShift)