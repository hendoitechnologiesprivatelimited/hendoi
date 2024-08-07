import nodemailer from 'nodemailer';

export const sendEmail = async (formData) => {
  console.log('Attempting to send email with data:', JSON.stringify(formData));
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error in sendEmail:', error.message);
    throw error;
  }
};