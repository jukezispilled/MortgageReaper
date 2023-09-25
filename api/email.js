import { createTransport } from 'nodemailer';
///const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO } = process.env;

export default async (req, res) => {
  const { name, email, subject, message } = JSON.parse(req.body);

  // Create a transporter object using SMTP transport
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: 'jackw1618@gmail.com',
      pass: 'uqdjdatfyjqzkaoo',
    },
  });

  // Email data
  const mailOptions = {
    from: email,
    to: 'jackw1618@gmail.com',
    subject: 'New Inquiry from Your Website',
    text: `
      Full Name: ${name}
      Address: ${email}
      City/State/Zipcode: ${subject}
      Message: ${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};
