const express = require("express");
const app = express();
const PORT = 5500;
app.use(express.json());

app.listen(PORT, () => {
    console.log('Servidor levantado en el puerto:' + PORT);
})