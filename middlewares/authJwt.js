const jwt = require("jsonwebtoken");
const config = require("../config/authConfig.js");

module.exports.verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: "You are not authorized to view this page" });
        }
        req.uesrId = decoded.id;
        next();
    })
}