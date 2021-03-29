const User = require('../models/User.js');

module.exports.update = (req, res) => {
    const filter = { email: req.body.email };
    const update = {
        applied: req.body.applied,
        rejected: req.body.rejected,
        OA: req.body.OA,
        interviews: req.body.interviews,
        offers: req.body.offers
    };

    User.findOne(filter)
        .exec()
    User.findOneAndUpdate(filter, update, (err, doc) => {
        if (err) {
            console.log(err)
            res.status(500).send({ message: "could not update" });
            return;
        }
    });
    res.send({ message: "updated!" });
}