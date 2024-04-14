const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "maikelfriasmosquea@gmail.com",
      pass: "xzlskwutpzzmjgmv",
    },
  });

async function handler(req, res) {
  const body = req.body;
  const { name, email, message } = body;

  if (!body.name || !body.email || !body.message) {
    return res.status(400).json({ data: "Name, Email or Message not found" });
  }
  const info = await transporter.sendMail({
    from: '"Maikel OÜ Site" <maikelfriasmosquea@gmail.com>', // sender address
    to: "yourwebsite@maikel.dev", 
    subject: "Contact from Site", 
    text: `${name}\n${email}\n${message}`, 
    html: `
    </div style="margin-20px">
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
    </div>
    `, 
  });

  
  await res.status(200).json({ data: `${name} ${email} stored` });
}


export default handler;




