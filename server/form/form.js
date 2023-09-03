import nodemailer from "nodemailer";

async function formData(name_form, mail_form, query_form, error) {
  if (error === false) {
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
        to: "javuchin100@gmail.com",
        subject: "Support King of the Market",
        html: `
       <div style="text-align: center">
         <h1>Hola, soy ${name_form}</h1>. <br />
         <p>Mi consulta es ${query_form}</p> <br />
         Mail: <b>${mail_form}</b></p>
       </div>
      `,
      };
    const transporter = nodemailer.createTransport(config);
    const responses = await transporter.sendMail(message);
  }
}

export default formData;
