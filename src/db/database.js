
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pizza-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( db => console.log(db.connection.host) )
  .catch( err => console.log( err ));