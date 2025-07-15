const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('App funcionando con CI/CD desde AWS!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
