const runExamples = require('./runExamples');
const { makeApp, runApp } = require('..');

const app = makeApp('basic');
process.env.PORT = 9000;

// ##### ACTIVE EXAMPLES #####
const activeExamples = ['postgres', 'authentication']

runExamples(activeExamples, app);

runApp(app);