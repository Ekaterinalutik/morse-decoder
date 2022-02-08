const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
  let exprArr =  expr.split('').reduce((s, c) => {let l = s.length-1; (s[l] && s[l].length < 10) ? s[l] += c : s.push(c); return s;}, []);
  let newArr = [];
  let str = '';
  for (let i= 0; i < exprArr.length; i++) {
    newArr.push(exprArr[i].split("00").join("").split('').reduce((s, c) => {let l = s.length-1; (s[l] && s[l].length < 2) ? s[l] += c : s.push(c); return s;}, []));
  }
  for(let i = 0; i < newArr.length; i++) {
      
    for (let j = 0; j < newArr[i].length; j++) {
        if (newArr[i][j] == 10) {
            newArr[i][j] = '.'; }
        else if (newArr[i][j] == 11) {
                newArr[i][j] = '-'; }
        else if (newArr[i][j] == '**') {
                 newArr[i][j] = ' '; }   
}
  }
  for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i].join('')
  }
  for (let i = 0; i < newArr.length; i++) {
      for (let key in MORSE_TABLE) {
          if (newArr[i] == key ) {
              str += MORSE_TABLE[key]
          } 
      } if (newArr[i] == '     ') {
        str += ' ';
    }
      
  } return str
} 

module.exports = {
    decode
}
