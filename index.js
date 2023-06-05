const express = require("express");
// const db = require('./db');
const app = express();
const PORT = 9500;
app.use(express.json());

app.get('/needToSleep', (req, res) => {
    return res.send('needToSleepy');
})
app.listen(PORT, () => {
    console.log('Servidor levantado en el puerto:' + PORT);
})

// db.then(() => {
//     app.listen(PORT, () => {
//         console.log('Server is running on port:' + PORT);
//     })
// }).catch((error) => {
//     console.error('Error starting server', error.message);
// })