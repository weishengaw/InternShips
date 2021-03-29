const verifySignUp = require("../middlewares/verifySignUp.js");
const controller = require("../controllers/auth.js");

module.exports = function(app) {
    app.use(function(req,res,next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    app.post(
        "/register",
        verifySignUp.checkDuplicateUsernameOrEmail,
        controller.signup
    );

    app.post(
        "/login",
        controller.signin
    );
};