const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const pizzaSchema =  Schema({
	nombre: String,
	categoria: String,
	direccion: String,
	telefono: String,
	website: String,
	imagen: String,
	pizzas: [
		{
			nombre: String,
			descripcion: String,
			imagen: String,
			precio: String
		}
	]
});

pizzaSchema.plugin(mongoosePaginate);
module.exports = model('Pizza', pizzaSchema);