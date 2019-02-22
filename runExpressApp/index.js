const PORT = process.env.PORT || 8080;

module.exports = (app) => {
    // #### Global Error handler
    app.use((err, req, res, next) => {
      if (res.headersSent) {
        return next(err)
      }
      res.status(err.status || 500)
      res.json({
        error: { message: err.message || 'Internal Error' }
      })
    });
    let server = app.listen(PORT, function () {
        console.log(
            `App is running on interal port ${PORT}:
            If this service is running in a container, you
            will need to expose this port to the outside world
            to have direct access to it.`
        );
    });
    //
    // need this in docker container to properly exit since node doesn't handle SIGINT/SIGTERM
    // this also won't work on using npm start since:
    // https://github.com/npm/npm/issues/4603
    // https://github.com/npm/npm/pull/10868
    // https://github.com/RisingStack/kubernetes-graceful-shutdown-example/blob/master/src/index.js
    // if you want to use npm then start with `docker run --init` to help, but I still don't think it's
    // a graceful shutdown of node process
    //

    // quit on ctrl-c when running docker in terminal
    process.on('SIGINT', function onSigint() {
        console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
        shutdown();
    });

    // quit properly on docker stop
    process.on('SIGTERM', function onSigterm() {
        console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
        shutdown();
    })

    // shut down server
    function shutdown() {
        server.close(function onServerClosed(err) {
            if (err) {
                console.error(err);
                process.exitCode = 1;
            }
            process.exit();
        })
    }
    //
    // need above in docker container to properly exit
    //
};