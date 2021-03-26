const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/authConfig.js');

// setup express router
const app = express();

// setup cors options
var corsOptions = {
    origin: "http://localhost:3000"
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./routes/authRoutes')(app);
require('./routes/updateRoutes')(app);


// mongodb setup
const CONNECTION_URL = config.mongo;
const PORT = process.env.PORT || 8080;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

