const express = require("express");
const db = require('./db');
const router = require("./router");
const auth = require('./middlewares/verifyToken');
const app = express();
const PORT = 9000;

app.use(express.json());
app.use(router);

// app.get('/needToSleep', (req, res) => {
//     return res.send('needToSleepy');
// })


db.then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port:' + PORT);
    })
}).catch((error) => {
    console.error('Error starting server', error.message);
})