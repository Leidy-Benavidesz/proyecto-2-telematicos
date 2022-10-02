const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
var cantidad_disponible = [10, 13, 9, 20];
var alerta = ["", "", "", ""];


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render("index")
});
app.get('/inventario', (req, res) => {
    res.render("inventario", { Total1: cantidad_disponible[0], Total2: cantidad_disponible[1], Total3: cantidad_disponible[2], Total4: cantidad_disponible[3], alerta1: alerta[0], alerta2: alerta[1], alerta3: alerta[2], alerta4: alerta[3] })
});
app.post('/', (req, res) => {

    res.render("index");

    valor1 = req.body.number1;
    valor2 = req.body.number2;
    valor3 = req.body.number3;
    valor4 = req.body.number4;

    cantidad_disponible[0] = cantidad_disponible[0] - valor1;
    cantidad_disponible[1] = cantidad_disponible[1] - valor2;
    cantidad_disponible[2] = cantidad_disponible[2] - valor3;
    cantidad_disponible[3] = cantidad_disponible[3] - valor4;

    if (cantidad_disponible[0] <= 2) { alerta[0] = "Hay menos de 2 articulos disponibles, es necesario comprar más" };
    if (cantidad_disponible[1] <= 2) { alerta[1] = "Hay menos de 2 articulos disponibles, es necesario comprar más" };
    if (cantidad_disponible[2] <= 2) { alerta[2] = "Hay menos de 2 articulos disponibles, es necesario comprar más" };
    if (cantidad_disponible[3] <= 2) { alerta[3] = "Hay menos de 2 articulos disponibles, es necesario comprar más" };
});

app.listen(process.env.PORT, () => {
    console.log("Ejecutando servidor en el puerto 5000");
});