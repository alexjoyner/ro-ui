const sendLocal = (localsVars) => (req, res, next) => {
  if(!localsVars){
    return res.status(200).send(res.locals);
  }
  if(typeof localsVars === 'string'){
    return res.status(200).send(res.locals[localsVars]);
  }
  if(Array.isArray(localsVars)){
    const result = {};
    localsVars.map(localVar => {
      result[localVar] = res.locals[localVar]
    })
    return res.status(200).send(result);
  }
  return next(new TypeError('Invalid type for localsVarName'))
}

module.exports = sendLocal;
