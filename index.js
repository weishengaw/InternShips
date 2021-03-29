const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/authConfig.js');

require("dotenv").config();

// setup express router
const app = express();

// setup cors options
var corsOptions = {
    origin: "https://weishengaw.github.io"
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./routes/authRoutes')(app);
require('./routes/updateRoutes')(app);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


// mongodb setup
const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

