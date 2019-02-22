const sendLocal = (localsVarName) => (req, res, next) => {
  if(typeof localsVarName !== 'string'){
    return next(new TypeError('Invalid type for localsVarName'))
  }
  res.status(200).send(res.locals[localsVarName]);
}

module.exports = sendLocal;
