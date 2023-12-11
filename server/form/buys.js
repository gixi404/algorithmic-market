import nodemailer from "nodemailer";

async function buyMail(name, email) {
  const config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "gixipixel@gmail.com",
        pass: "dxemxhhcypdpbkht",
      },
    },
    message = {
      from: "gixipixel@gmail.com",
      to: email?.toString(),
      subject: "Algorithmic Market",
      html: `
       <div style="text-align: center">
         <h1>
            Hola, ${name?.toString()}
         </h1>. 
         <br />
         <p> Gracias por adquirir un nuevo curso re fachero </p>
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
