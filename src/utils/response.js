const successResponse = (res, message, data = {}) => {
    return res.status(200).json({
        success: 'true',
        message,
        data,
    });
};

const errorResponse = (res, message, errorCode = 500, error = null) => {
    return res.status(errorCode).json({
        success: 'false',
        message,
        error: error ? error.toString() : null, 
    });
};

const validationErrorResponse = (res, errors) => {
    return res.status(400).json({
        success: 'false',
        message: 'Validation errors occurred.',
        errors, 
    });
};

const notFoundResponse = (res, message = 'Resource not found') => {
    return res.status(404).json({
        success: 'false',
        message,
    });
};

module.exports = {
    successResponse,
    errorResponse,
    validationErrorResponse,
    notFoundResponse,
};