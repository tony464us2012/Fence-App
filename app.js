const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

connectDB();


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/login', require('./routes/login_route'));
app.use('/api/register', require('./routes/register_route'));
app.use('/api/setup', require('./routes/setup_route') );

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => res.sendfile(path.join(__dirname, 'client', 'build', 'index.html')))
}



// How to start listening to the server

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`on port ${PORT}`));