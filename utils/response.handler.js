module.exports = (res, result) => {
    let responseObj = {
        success: true,
        statusCode: 200,
        ...result
    }
    res.status(200).json(responseObj);
}