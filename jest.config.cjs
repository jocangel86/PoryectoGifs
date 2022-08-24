// Se ejecuta en cuanto se ejecuta un test

// Se l e especigfica que teabaje de otra forma cuando encuentra un aync await o fetch en los test.

module.exports = {
    // TODO:
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}