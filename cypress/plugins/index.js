 const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('DownloadingFile.js', {downloadFile})
}


 