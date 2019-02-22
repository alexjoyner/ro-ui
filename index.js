// We use the import structure
// - 'command': (...args) => require(<PATH>)(...args)
// as a way for the main app to only require needed utilities
const API = {
    // Initialization
    makeApp: (...args) => require('./makeApp')(...args),
    runApp: (...args) => require('./runApp')(...args),
    // Common Processes
    query: (...args) => require('./query')(...args),
    sendMessage: (...args) => require('./sendMessage')(...args),
    // Helpers
    getTextFromFile: (...args) => require('./helpers/getTextFromFile')(...args),
    sendLocal: (...args) => require('./helpers/sendLocal')(...args),
}

module.exports = API;
