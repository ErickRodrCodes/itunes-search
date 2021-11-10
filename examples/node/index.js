const { searchApp, searchAudiobook, searchBook, searchArtist } = require('../../dist/index');
searchArtist('Hikaru Utada',{limit: 1,timeout:5000}).then(data => {
  console.log(JSON.stringify(data,null,2))
})

