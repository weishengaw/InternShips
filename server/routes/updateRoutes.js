const controller = require('../controllers/update.js');

module.exports = function(app) {
    app.put("/update", controller.update);
};