const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    const token = req.header('token');

    if(!token) {
        return res.status(401).json({ msg: 'Authorization Denied'})
    }

    try {
const decoded = jwt.verify(token, config.get('TOKEN_SECRET'));
req.user= decoded.user;
next()
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid'})
    }
}