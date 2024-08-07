import express from 'express';
import serverless from 'serverless-http';
import cors from 'cors';
import { sendEmail } from './sendEmail.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
  console.log('Function invoked with body:', JSON.stringify(req.body));
  try {
    await sendEmail(req.body);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.toString() });
  }
});

export const handler = serverless(app);

console.log('API function loaded');