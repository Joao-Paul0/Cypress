const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sqbfsu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  // necessário da framework
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss"
  }
},
);
