const User = require('../models/User.js');

module.exports.checkDuplicateUsernameOrEmail = (req, res, next) => {
    
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Email already in use!" });
            return;
        }
        next();
    })
}
