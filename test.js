'use strict'

const lyrics = require('./index.js');

lyrics.getLyrics('aaa - aaa')
    .then(x => console.log(x + '\n\n'))
    .catch(err => console.log(err + '\n\n'))

lyrics.getLyrics('daft punk - Daftendirekt')
    .then(x => console.log(x + '\n\n'))
    .catch(err => console.log(err + '\n\n'))

lyrics.getLyrics('pissboner')
    .then(x => console.log(x + '\n\n'))
    .catch(err => console.log(err + '\n\n'))

lyrics.getLyrics('piss-boner-balls')
    .then(x => console.log(x + '\n\n'))
    .catch(err => console.log(err + '\n\n'))
  
lyrics.getLyrics('smash mouth - all star')
.then(x => console.log(x + '\n\n'))
.catch(err => console.log(err + '\n\n'))
