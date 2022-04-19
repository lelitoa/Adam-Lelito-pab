var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});

//http://localhost:3000/dodaj/4/5
app.get('/dodaj/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    
    let result = a+b;
    res.send(`Wynik dodawania ${result}`);
});
//http://localhost:3000/usun/4/5
app.get('/usun/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    
    let result = a-b;
    res.send(`Wynik odejmowania ${result}`);
});
//http://localhost:3000/podziel/4/5
app.get('/podziel/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    
    let result = a/b;
    res.send(`Wynik dzielenia ${result}`);
});
//http://localhost:3000/pomnoz/4/5
app.get('/pomnoz/:num1/:num2', function (req, res) {
    const a =Number(req.params.num1);
    const b =Number(req.params.num2);
    
    let result = a*b;
    res.send(`Wynik mnożenia ${result}`);
});

app.listen(3000);

// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//     res.send('Hello World');
// });
// app.listen(3000);
