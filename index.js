const express = require ('express')

const app = express();
require('dotenv').config();

app.get ('/', (req, res) =>{
    res.send('Hola mundo');
});

const PORT = process.env.PORT;
app.listen(4000, () => {
    console.log(`escucha desde el puerto ${PORT}`);

});