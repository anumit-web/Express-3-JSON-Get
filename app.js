const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.send('Welcome to JSON Get response demo page');
})

app.get('/welcome', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({ message: 'Welcome traveller' })
    console.log('http://localhost:3000/welcome');

})

var continents_list = [
    { name: 'Asia' },
    { name: 'Europe' },
    { name: 'Africa' },
    { name: 'North America' },
    { name: 'South America' },
    { name: 'Australia' },
    { name: 'Antarctica' }
];

// return an array
app.get('continents', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(continents_list);
    console.log('return an array as json');
    console.log('http://localhost:3000/continents');
    
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// https://expressjs.com/en/starter/hello-world.html