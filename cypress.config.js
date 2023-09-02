
const { defineConfig } = require('cypress')
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    setupNodeEvents(on, config) {
         on('task', {downloadFile})
    },
     specPattern: "**/*.js",
   // excludeSpecPattern:['/cypress/e2e/1-getting-started','/cypress/e2e/1-getting-started'],
       
    //downloadsFolder: "cypress/downloads",
    testIsolation: false,
    viewportWidth: 1280,
    viewportHeight: 720   
    }
})
 // (parameter )config: Cypress.PluginConfigOptions 
// on('DownloadingFile', {downloadFile})

   
   
   