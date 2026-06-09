const express = require('express');
const cors = require('cors');
const db = require('./connectiondb');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aceaviation2026@gmail.com',
        pass: 'ogrr sjzt rhps viyb'
    }
});

app.post('/api/enquiry', (req, res) => {

    const {
        name,
        email,
        phone,
        education,
        interest,
        message
    } = req.body;

    const sql =
        `INSERT INTO enquiries
        (name,email,phone,education,interest,message)
        VALUES (?,?,?,?,?,?)`;

    db.query(
        sql,
        [name, email, phone, education, interest, message],
        async (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            await transporter.sendMail({
                from: 'yourgmail@gmail.com',
                to: 'aceaviation2026@gmail.com',
                subject: 'New Enquiry',
                html: `
                Name: ${name}<br>
                Email: ${email}<br>
                Phone: ${phone}<br>
                Education: ${education}<br>
                Interest: ${interest}<br>
                Message: ${message}
                `
            });

            res.json({
                success: true
            });

        });

});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});