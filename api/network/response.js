exports.success = (req, res, status, message) => {
    res.status(status).json(message)
}
exports.error = (req, res, status, message, error) => {
    console.log(`message -------- ${message}`)
    console.log(`error -------- ${error}`)
    res.status(status).json(message)
}