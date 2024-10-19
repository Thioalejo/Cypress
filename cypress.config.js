const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message){
            console.log(`Soy el console log del task ${message}`)
            return null
        }
    })
    },
    excludeSpecPattern:[
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
//para que no falle el recargo de la pagina
    testIsolation: false,

    viewportWidth:1920,
    viewportHeight:1080,
    "baseUrl":"https://demoqa.com"
  },
});
