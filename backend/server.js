const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const User = require('./model/user'); 
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = 3013 ;

app.use(cors());
app.use(express.json());


app.use(cors({
  origin: ['http://localhost:5173','https://bimqubator.com', 'https://bimqubator.com','https://wwww.bimqubator.com'],
  methods: ['GET', 'POST'],
}));
app.get('/', (req, res) => {
  res.send('Hello from Bimqubator!');
});

app.post('/contact', async (req, res) => {
  const { name, telephone, email, subject, message } = req.body;
  console.log('📥 Incoming request:', req.body);

  if (!name || !email || !message) {
    console.log('❌ Required fields missing');
    return res.status(400).json({ message: 'Required fields missing' });
  }

  try {
    // Save to DB
    const savedContact = await User.create({ name, telephone, email, subject, message });
    

    // Email setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `"Bimqubator Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'info@bimqubator.com',
      subject: `New Contact from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Telephone:</strong> ${telephone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('📤 Email sent:', mailOptions);

    res.status(201).json({ message: 'Message submitted & email sent!', data: savedContact });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});


const startServer = async () => {
  try {
    await db.authenticate();
    console.log('✅ Connected to MySQL');
    await db.sync();
    console.log('✅ Models synchronized');
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('DB Connection Failed:', err);
  }
};

startServer();
