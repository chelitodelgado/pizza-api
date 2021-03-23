const { Router } = require('express');
const router = Router();
const Pizza = require('../model/Pizza');

router.get('/', (req, res) => {
    res.send('Hola bienvenido a Pizza-API ');
});

// Show all the pizzas
router.get('/v1/pizzas', async ( req, res) => {
    
    const limit = parseInt( req.query.limit || 12 );
    const page  = parseInt( req.query.page || 1 );
    const forceCountFn  = parseInt( req.query.forceCountFn || true );
    const pizzas = await Pizza.paginate( {}, { limit, page, forceCountFn } );
    res.json( pizzas );
    
});

// Insert new Pizza
router.post('/v1/pizzas', async ( req, res) => {
    
    const newPizza = new Pizza( req.body );
    const pizzas =  await newPizza.save();
    res.send( pizzas );

});

// Export routes
module.exports = router;