const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/livraria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB conectado!'))
.catch(err => console.error('❌ Erro ao conectar no MongoDB:', err));

module.exports = mongoose;
