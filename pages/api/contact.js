import data from "@/data";
import nodemailer from "nodemailer";

export default async function (req, res) {
  const mailData = {
    from: "botemailhello@gmail.com",
    to: data.email,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: ` <div  style="min-height: 400px; min-width: 300px; background: linear-gradient(to bottom,#ec9f05, #ff4e00)" >
        <h1 style="color: white; text-align: center; padding-top: 20px;">Hello ${data.name}</h1>
        <h3 style="color: white; text-align: center;">Here is an email from ${req.body.email}</h3>
        <p style="color: white; text-align: center;">${req.body.message}</p>
    </div>`,
  };

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "botemailhello@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  await transporter.sendMail(mailData, function (err, info) {
    if (err) return res.json({ success: false });
    else return res.json({ success: true });
  });
}
