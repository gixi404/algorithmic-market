import nodemailer from "nodemailer";

async function formData(name_form, mail_form, query_form) {
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
      to: "gioliotta.io@gmail.com",
      subject: "Soporte Algorithmic Market",
      html: `
       <div style="text-align: center">
         <h1>
            Hola, soy ${name_form}
         </h1>. 
         <br />
         <p>
            Consulta: ${query_form} <br />
            Mail: <b>${mail_form}</b>
         </p>
       </div>
      `,
    },
    transporter = nodemailer.createTransport(config);
  await transporter.sendMail(message);
}

export default formData;
