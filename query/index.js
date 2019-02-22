let fs = require('fs');
const { Client } = require('pg');
const conInfo = {
  user: fs.readFileSync(process.env.PG_USER_FILE, 'utf8'),
  password: fs.readFileSync(process.env.PG_PASS_FILE, 'utf8'),
  database: fs.readFileSync(process.env.PG_DB_FILE, 'utf8'),
  host: fs.readFileSync(process.env.PG_HOST_FILE, 'utf8'),
  port: process.env.PG_PORT || 5432,
}

const pgQuery = async (opts) => {
  const client = new Client(conInfo);
  try {
    await client.connect();
    const rawData = await client.query(opts)
    const result = rawData.rows
    await client.end();
    return result;
  }
  catch (e) {
    client.end();
    throw e;
  }
}
const queryStrategies = {
  'pg': pgQuery
}
const runQuery = (strategy, tempOpts, storeVar='results') => {
  return async (req, res, next) => {
    const opts = (typeof tempOpts === 'function')? tempOpts(req) : tempOpts;
    try {
      const result = await queryStrategies[strategy](opts);
      res.locals[storeVar] = result;
      next();
    }
    catch (e) {
      next(e);
    }
  }
}
module.exports = runQuery;