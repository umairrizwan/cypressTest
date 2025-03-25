const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ztyvzp',
  e2e: {
    //  setupNodeEvents(on, config) {
    // implement node event listeners here
    baseUrl: "https://favqs.com/api/",
    env: {
      apiKey: "4f060d2d1797adb33b32ec3b92befdab",
      login: "umair.rizwan@hotmail.com",
      password: "7ebece7c798",
      user: "umair"
    },
    specPattern:"cypress/e2e/**/*.cy.js"
    // },
  },
});
