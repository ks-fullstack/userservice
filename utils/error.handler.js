const customErrorHandler = (res, err) => {
    let errMessage = 'Internal server error';
    switch(err.statusCode) {
        case 400:
            errMessage = 'Bad request';
            break;
        case 401:
            errMessage = 'Unauthorized request';
            break;
        case 403:
            errMessage = 'Forbidden request';
            break;
        case 404:
            errMessage = 'Record not found';
            break;
        case 405:
            errMessage = 'Method not allowed';
            break;
        case 422:
            errMessage = 'Invalid data provided';
            break;
    }
    res.status(err.statusCode).json({
        success: false,
        statusCode: err.statusCode,
        message: err.message || errMessage
    });
}

module.exports = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    customErrorHandler(res, error);
}