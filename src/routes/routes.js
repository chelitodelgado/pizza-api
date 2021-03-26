const { Router } = require('express');
const router = Router();
const Pizza = require('../model/Pizza');

router.get('/', (req, res) => {
    res.send('Hola bienvenido a Pizza-API ');
});

// Mostrar todos los retaurantes
router.get('/v1/pizzas', async ( req, res) => {
    const limit = parseInt( req.query.limit || 12 );
    const page  = parseInt( req.query.page || 1 );
    const forceCountFn  = parseInt( req.query.forceCountFn || true );
    const pizzas = await Pizza.paginate( {}, { limit, page, forceCountFn } );
    res.json( pizzas );
});

// Insertar una pizza
router.post('/v1/pizzas', async ( req, res) => {
    const newPizza = new Pizza( req.body );
    const pizzas =  await newPizza.save();
    res.send( pizzas );
});

// Buscar por ID
router.get('/v1/pizzas/:id', async (req,res) => {
    try {
        const menu = await Pizza.findById(req.params.id);
        console.log("Menu encontrado.");
        res.json( menu );
    } catch (error) {
        res.status(500).send(error);
        console.log("No se pudo encontrar el menu de este restautante");
      }
});

// Buscar por termino
/* router.get('/v1/pizzas/:id', async (req,res) => {
    try {
        // const menu = await Pizza.findById(req.params.id);
        const menu = await Pizza.find(req.params.body);
        console.log("Restaurante encontrado.");
        res.json( menu );
    } catch (error) {
        res.status(500).send(error);
        console.log("No se pudo encontrar este restautante");
      }
}); */

// Eliminar registros
router.delete('/v1/pizzas/:id', async (req,res) => {
    try {
        await Pizza.findByIdAndDelete(req.params.id);
        console.log("Restaurante eliminado");
        res.status(200).send();
      } catch (error) {
        res.status(500).send(error);
      }
});

// Exportar las rutas
module.exports = router;