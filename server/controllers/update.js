const User = require('../models/User.js');

module.exports.update = (req, res) => {
    const filter = { email: req.email };
    const update = {
        applied: req.data.applied,
        rejected: req.data.rejected,
        OA: req.data.OA,
        interviews: req.data.interviews,
        offers: req.data.offers
    };

    User.findOneAndUpdate(filter, update);
}