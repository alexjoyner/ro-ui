const codes = {
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
}

const createError = (message, code) => {
    const error = new Error(message);
    error.status = code || codes.BAD_REQUEST;
    return error;
}


module.exports = {
    USER_NOT_FOUND: createError('User not found'),
    INVALID_PASSWORD: createError('Incorrect Password', codes.FORBIDDEN),
    FORBIDDEN: createError('Forbidden', codes.FORBIDDEN),
}