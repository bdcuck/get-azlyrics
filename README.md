# get-azlyrics
NodeJS package to get lyrics from AZLyrics by simple [Artist - Song] query.

Example usage:

```javascript

'use strict'
const lyrics = require('get-azlyrics');

lyrics.getLyrics('daft punk - Daftendirekt')
    .then(x => console.log(x))
    .catch(err => console.log(err))
    // outputs: Dafunk back to the punk come on

```
