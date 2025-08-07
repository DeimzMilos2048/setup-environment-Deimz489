const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

// Middleware to allow JSON and handle CORS
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DM10312003',
    database: 'premiere'
});

// Connect to MariaDB
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MariaDB');
});

// API route to get users
app.get('/', (req, res) => {
    db.query('SELECT * FROM customer', (err, results) => {
        if (err) {
            console.error('Error querying:', err);
            res.status(500).send('Query failed');
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
