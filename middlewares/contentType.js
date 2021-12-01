module.exports = function (req, res, next) {
    if (!req.headers['content-type'] || !req.headers['content-type'].includes('application/json')) {
        return res.status(415).send('Specified content type not allowed.')
    }
    next();
}