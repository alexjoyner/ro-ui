const API = {
    // Initialization
    makeApp: (opts) => require('./makeApp')(opts),
    runApp: (opts) => require('./runApp')(opts),
    // Common Processes
    query: (strategy, opts, storeVar='results') => require('./query')(strategy, opts, storeVar),
    sendMessage: (strategy, opts, storeVar='results') => require('./sendMessage')(strategy, opts, storeVar),
    // Helpers
    getTextFromFile: (...args) => require('./helpers/getTextFromFile')(...args),
}

module.exports = API;
