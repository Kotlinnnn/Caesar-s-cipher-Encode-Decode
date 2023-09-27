const btnDecode = document.getElementById('btnDecode');
const btnEncode = document.getElementById('btnEncode');

const shiftValue = document.getElementById('shiftValue');
const shiftDirection = document.getElementById('shiftDirection');
const selectedAlphabet = document.getElementById('selectedAlphabet');

const cipherDecodeText = document.getElementById('cipherDecode');
const cipherEncodeText = document.getElementById('cipherEncode');

const resultOutput = document.getElementById('output');

const LatinAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const PolishAlphabet = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'Q', 'R',  'S', 'Ś', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Ź', 'Ż'];

let cipher = [];