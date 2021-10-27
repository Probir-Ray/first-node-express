const express = require('express');
const app = express();
const cors = require('cors');
const port = 3030;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello, all of my friends welcome to learn new things');
});


users = [
    {id: 1, name: 'FBS', country: 'USA', area: 'North America'},
    {id: 2, name: 'MTS', country: 'UAE', area: 'Asia Pacific'},
    {id: 3, name: 'MTBA', country: 'Germany', area: 'Euro'}
];


// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


app.get('/users', (req, res) => {
    const search = req.query.search;
    console.log(search);
    if(!search) {
        res.send(users);
    } else {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        console.log(searchResult);
        res.send(searchResult);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const detail = users[id];
    res.send(detail);
})

app.listen(port, () => {
    console.log('Listening port', port);
})