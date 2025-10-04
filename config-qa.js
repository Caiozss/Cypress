const { defineConfig } = require('cypress');
const baseConfig = require('./cypress.config');

const e2e = {
    baseUrl: 'https://www.dev.saucedemo.com/',
    env: {
        username:'QA_sauce',
        Password: 'QA_sauce'
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})