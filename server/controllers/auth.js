const bcrypt = require('bcryptjs');
const User = require('../models/User.js');
const config = require('../config/authConfig.js');

module.exports.signup = (req, res) => {
    //res.status(500).json(req.body);
    console.log(req.body)
    const body = json(req.body)

    const newUser = new User({
        name: body.name,
        email: body.email,
        password: body.password
    });



    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: err });
            return;
        }
        newUser.password = hash;
        newUser.save((err) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.send({ message: "You are now registered" });
        });
    }));
}

module.exports.signin = (req, res) => {
    User.findOne({
        email: req.body.email
    })
    .exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            return res.status(404).send({ message: "User not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: "Incorrect Password"
            });
        }

        var token = jwt.sign({ id: user.id }, config.secret, {expiresIn:86500});
        res.status(200).send({
            name: user.name,
            email: user.email,
            applied: user.applied,
            rejected: user.rejected,
            OA: user.OA,
            interviews: user.interviews,
            offers: user.offers,
            accessToken: token
        })
    });
}