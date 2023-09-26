const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { name, address, city, email, message } = req.body;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use the email service you prefer
    auth: {
      user: 'mortgagereaperny@gmail.com', // Your email address
      pass: 'Mrbenzer22', // Your email password or an app password
    },
  });

  // Email data
  const mailOptions = {
    from: email,
    to: 'mortgagereaperny@gmail.com', // The recipient's email address
    subject: "Give me An Offer",
    html: `
      <p>Full Name: ${name}</p>
      <p>Address: ${address}</p>
      <p>City/State/Zipcode: ${city}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
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
