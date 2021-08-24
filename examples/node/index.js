const { searchApp, searchAudiobook, searchBook, searchArtist } = require('../../dist/index');
searchArtist('Hikaru Utada').then(data => {
  console.log(JSON.stringify(data,null,2))
})

