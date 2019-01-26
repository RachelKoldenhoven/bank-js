const fs = require('fs');

class Bank {
    constructor() {
        this.key = {
            'SSSSSPSSP': 1,
            'SUSSUPPUS': 2,
            'SUSSUPSUP': 3,
            'SSSPUPSSP': 4,
            'SUSPUSSUP': 5,
            'SUSPUSPUP': 6,
            'SUSSSPSSP': 7,
            'SUSPUPPUP': 8,
            'SUSPUPSUP': 9,
            'SUSPSPPUP': 0
        }
    }

    parse() {
        // get big string from file
        // could not get space at end of line, added on at begin of line 2 in txt file
        let entries = fs.readFileSync('entries.txt', 'utf8');
        // remove newline chars and change to letters
        let a = entries.replace(/\n/g, '').replace(/ /g, 'S').replace(/_/g, 'U').replace(/\|/g, 'P');
        // break string into array of threes
        let b = a.match(/.{1,3}/g);
        // put all triplets for each num together
        let codes = ['', '', '', '', '', '', '', '', ''];
        for (let i = 0; i < codes.length; i++) {
            codes[i] = codes[i].concat(b[i]).concat(b[i + 9]).concat(b[i + 18]);
        }
        // sub code for its num
        return codes.map(code => this.key[code]);
    }
}

module.exports = Bank;