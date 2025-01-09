const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido a /endroute</h1>
        <p>Estás en la ruta final.</p>
    `);
});

module.exports = router;
