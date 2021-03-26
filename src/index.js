const express = require('express');
const app     = express();
const cors = require('cors');
const PORT    = process.env.PORT || 4000;

// Rutas
const pizzaRotes = require('./routes/routes');

// Database
require('./db/database');

// Configurar los Cors y los headers
app.use( cors() );

app.use( express.json() );
app.use('/', pizzaRotes);

app.listen( PORT, () =>{
    console.log(`Server running http://localhost:${PORT}`);
});