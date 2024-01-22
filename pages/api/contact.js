const nodemailer = require("nodemailer");

// Handles POST requests to /api

export default async function POST(request, res) {
  // const username = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  //   console.log("myEmail", myEmail);
  //   console.log("password", password);

  console.log("dealing with request");
  const { name, email, message } = request.body;

  // create transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: myEmail,
      pass: password,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: myEmail,
      to: email,
      subject: `Your message is received!`,
      html: `
            <p>Hi ${name},</p>
            <br/>
            <p>Your message is received sucessfully, My response time would be usually under 1 day, </p>
            <br/>
            <p>Your Messsage: ${message}</p>
            <br/>
            <br/>
            <br/>
            <p><b>NOTE:</b>This is an auto generated message, sent for just acknowledgement </p>
            `,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
