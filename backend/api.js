const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const sendEmail = require('./sendEmail');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  try {
    await sendEmail(req.body);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

module.exports.handler = serverless(app);