const API = {
    // Initialization
    makeApp: (opts) => require('./makeApp')(opts),
    runApp: (opts) => require('./runApp')(opts),
    // Utilities
    query: (strategy, opts, storeVar='results') => require('./query')(strategy, opts, storeVar),
    sendMessage: (strategy, opts, storeVar='results') => require('./sendMessage')(strategy, opts, storeVar),
}

module.exports = API;
