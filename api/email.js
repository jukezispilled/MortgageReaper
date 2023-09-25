const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { name, address, city, email, message } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use the email service you prefer
    auth: {
      user: 'jackw1618@gmail.com', // Your email address
      pass: 'rhchqsetnzgfntvz', // Your email password or an app password
    },
  });

  // Email data
  const mailOptions = {
    from: 'jackw1618@gmail.com',
    to: 'jackw1618@gmail.com', // The recipient's email address
    subject: subject,
    text: `
      Full Name: ${name}
      Address: ${address}
      City/State/Zipcode: ${city}
      Email: ${email}
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
