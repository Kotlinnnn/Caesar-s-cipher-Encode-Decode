// Updating "Shift Value" element
function SelectShiftUpdate(){
    const alphabet = selectAlphabet(selectedAlphabet.value);
    shiftValue.innerHTML = '';

    for (let i = 0; i<=alphabet.length; i++){
        let option = document.createElement('option');
        option.innerText = i;
        option.value = i;
        if (i == 3){
            option.defaultSelected = true;
        }
        shiftValue.appendChild(option);
    }
}

// Checking which alphabet the user wants to use
function selectAlphabet(selectedAlphabet){
    switch(selectedAlphabet){
        case "LatinAlphabet":
            return LatinAlphabet;
        case "PolishAlphabet":
            return PolishAlphabet;
        case "CzechAlphabet":
            return CzechAlphabet;
    }
}

function outputResult(plaintext, ciphertext){
    plaintextResult.innerHTML = plaintext;
    ciphertextResult.innerHTML = ciphertext;
}

function writeToLog(operation, plaintext, ciphertext){ /* do smth with that later */
    const IOLog = {
        operation: operation,
        plaintext: plaintext,
        ciphertext: ciphertext
    };
    outputResult(plaintext, ciphertext)
    userIOLog.push(IOLog);
    console.log(userIOLog);
}

function createCipher(){
    const key = shiftValue.value;
    const direction = parseInt(shiftDirection.value); // 0 == left, 1 == right
    alphabet = selectAlphabet(selectedAlphabet.value);
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
}

function encode(){
    createCipher();
    
    const text = inputtedText.value.toUpperCase();
    let result = '';

    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) == ' ' && ignorSpace.checked == true){
            result += '';
        }
        else if (cipher[alphabet.indexOf(text.charAt(i))] == undefined){
            result += text.charAt(i);
        }
        else{
            result += cipher[alphabet.indexOf(text.charAt(i))];
        }
    }
    writeToLog('encode', text, result);
}
function decode(){
    createCipher();

    const text = inputtedText.value.toUpperCase();
    let result = '';

    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) == ' ' && ignorSpace.checked == true){
            result += '';
        }
        else if (alphabet.indexOf(text.charAt(i)) == -1){        
            result += text.charAt(i);
        }
        else{
            result += alphabet[cipher.indexOf(text.charAt(i))];
        }
    }
    writeToLog('decode', result, text);
}

btnEncode.addEventListener("click", encode);
btnDecode.addEventListener("click", decode);
selectedAlphabet.addEventListener("change", SelectShiftUpdate);