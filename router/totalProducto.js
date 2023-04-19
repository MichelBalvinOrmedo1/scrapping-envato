const express = require("express");
const router = express.Router();
const path = require("path"); // Asegúrate de importar el módulo 'path'
const { scrapeEnvato } = require("./proyecto");

router.post('/', async function(req, res) {
    const keyword = req.body.keyword;

    let data;

    // Verifica si 'keyword' está presente en el cuerpo de la solicitud
    if (keyword) {
        // Llama a la función 'scrapeEnvato()' con el valor de 'keyword'
        data = await scrapeEnvato(keyword);
    } else {
        // Asigna null o un valor vacío a 'data' si 'keyword' no está presente
        data = await scrapeEnvato(keyword);
    }

    // Renderiza la vista 'totalProducto' con los datos obtenidos
    res.render('totalProducto', { products: data });
});

module.exports = router;
