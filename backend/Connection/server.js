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
                from: email,
                to: 'aceaviation2026@gmail.com',
                subject: 'New Consultation Request - The Ace Aviator',
                html: `
      <h2>New Consultation Request</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Education:</strong> ${education}</p>

        <p><strong>Interest:</strong> ${interest}</p>

        <p><strong>Message:</strong> ${message}</p>
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