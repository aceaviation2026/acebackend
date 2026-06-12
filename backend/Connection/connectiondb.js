const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'aviation_db',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.log('Database Error:', err);
    } else {
        console.log('MySQL Connected');
    }
});

module.exports = db;