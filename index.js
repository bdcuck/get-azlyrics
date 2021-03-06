'use strict'

const request = require('then-request');
const cheerio = require('cheerio');
const lyricsBase = 'https://azlyrics.com/';

const transformMsg = msg => {
    const arr = msg.split(/\s*\-\s*/g);
    if(arr.length !== 2) return false;
    return arr;
}

const transformLink = data => {
	data = data.replace(/\W/g,'');	
	data = data.toLowerCase();
	return data;
}

const lyricsUrl = (artistName,songName) => {
	let returnUrl = lyricsBase;	
	artistName = transformLink(artistName);
	songName = transformLink(songName);
	returnUrl += `lyrics/${artistName}/${songName}.html`;
	return returnUrl;
}

exports.getLyrics = msg => {
	return new Promise((resolve, reject) => {
		const song = transformMsg(msg);
		if(!song) return resolve(`Too much or too little hyphens dumbass.\nFormat: Artist - Song.\nAdditional hyphens in the title should be omitted`);
		const URI = lyricsUrl(song[0],song[1]);
		const Response = request('GET', URI)
		.then(res => {
			const $ = cheerio.load(res.getBody('utf8'));
			const lyricsDiv = $('.col-xs-12.col-lg-8.text-center')[0].children[16].children;
			let lyrics = '';
			for(let i = 2; i < lyricsDiv.length; i++)
			{
				const line = lyricsDiv[i].data ? `${lyricsDiv[i].data.substr(1)}\n` : ``;
				lyrics += line;
			}
			lyrics = lyrics.slice(0,-2);
			return resolve(lyrics);
		})
		.catch(err => reject(`You're doing it wrong!\nServer responded with status ${err.statusCode === 404 ? err.statusCode + ' not found!' : err.statusCode}\n\nFormat: Artist - Song.\nAdditional hyphens in the title should be omitted`));
	});
}
