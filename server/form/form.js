import nodemailer from "nodemailer";

async function formData(props) {
  const { name, mail, message } = props,
    config = {
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "algorithmicmarket@gmail.com",
        pass: "akfi ffpk tugt znup",
      },
    },
    mailHTML = {
      from: "algorithmicmarket@gmail.com",
      to: "gioliotta.io@gmail.com",
      subject: "Soporte Algorithmic Market",
      html: `
      <main style="text-align:start;font-family:Arial">
        <h1>Hola, soy ${name}</h1>
        <div style="style="display:flex; flex-direction:column; justify-center:center;align-items:start;width:80%;      min-height:400px">
          <p style="text-align:start">
            <b>Consulta:</b>
            <br/><br/>
            ${message}
          </p>
          <p style="text-align:start">
           <b>Mail de usuario: </b>
           ${mail}
          </p>
        </div>
      </main>
      `,
    };

  try {
    const transporter = nodemailer.createTransport(config);
    await transporter.sendMail(mailHTML);
  } catch (err) {
    throw new Error(err.message);
  }
}

export default formData;
