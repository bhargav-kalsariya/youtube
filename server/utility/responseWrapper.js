const Success = (statusCode, result) => {

    return {
        status: "ok",
        statusCode,
        result
    };

};

const Error = (statusCode, result) => {

    return {
        status: "error",
        statusCode,
        result
    };

};

module.exports = {
    Success,
    Error
}