import nodemailer from "nodemailer";

async function buyMail(name, email) {
  const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "algorithmicmarket@gmail.com",
        pass: "akfi ffpk tugt znup",
      },
    },
    message = {
      from: "algorithmicmarket@gmail.com",
      to: email?.toString(),
      subject: "Algorithmic Market",
      html: `
       <div style="text-align: center">
         <h1>Estimad@ ${name?.toString()}</h1>. 
         <br />
         <b> 
         Estamos muy contentos de que hayas elegido nuestro curso para aprender sobre [tema del curso]
         Atentamente, <br /><b>Algorithmic Market</b>
          </p>
       </div>
      `,
    };
  try {
    const transporter = nodemailer.createTransport(config);
    await transporter.sendMail(message);
  } catch (err) {
    console.error("Error al enviar mail de compra: " + err.message);
  }
}

export default buyMail;
