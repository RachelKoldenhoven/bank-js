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

    readEntriesFromFile() {
        // get big string from file
        return fs.readFileSync('entries.txt', 'utf8');
    }

    divideEntries(string) {
        // take giant string and break into accounts by double newline
        let entryArr = string.split('\n\n');
        // remove last entry which is an empty string after the last newline
        entryArr.pop();
        return entryArr;
    }

    transformEntry(entry) {
        // remove newline chars and change to letters
        let letters = entry.replace(/\n/g, '').replace(/ /g, 'S').replace(/_/g, 'U').replace(/\|/g, 'P');
        // break string into array of threes
        let triplets = letters.match(/.{1,3}/g);
        // put all triplets for each num together
        let codes = ['', '', '', '', '', '', '', '', ''];
        for (let i = 0; i < codes.length; i++) {
            codes[i] = codes[i].concat(triplets[i]).concat(triplets[i + 9]).concat(triplets[i + 18]);
        }
        // sub code for its num
        return parseInt((codes.map(code => this.key[code])).join(''), 10);
    }

    parse() {
        let entries = this.readEntriesFromFile();
        let entriesArr = this.divideEntries(entries);
        return entriesArr.map((entry) => this.transformEntry(entry));
    }

    validateActNum() {
        return true;
    }
}

module.exports = Bank;