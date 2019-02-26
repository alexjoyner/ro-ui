module.exports = (activeExamples, app) => {
    activeExamples.map(name => {
        console.log('Activating:', name);
        require(`./examples/${name}`)(app);
    })
}