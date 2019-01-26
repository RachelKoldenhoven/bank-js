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

    sample() {
        return true;
    }

    parse() {
        let entries = fs.readFileSync('entries.txt', 'utf8');
        let a = entries.replace(/\n/g, '').replace(/ /g, 'S').replace(/_/g, 'U').replace(/\|/g, 'P');
        let b = a.match(/.{1,3}/g);
        let codes = ['', '', '', '', '', '', '', '', ''];
        for (let i = 0; i < codes.length; i++) {
            codes[i] = codes[i].concat(b[i]).concat(b[i + 9]).concat(b[i + 18]);
        }
        return codes.map(code => this.key[code]);
    }
}

module.exports = Bank;