import nodemailer from "nodemailer";

async function formData(name, mail, query) {
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
      to: "gioliotta.io@gmail.com",
      subject: "Soporte Algorithmic Market",
      html: `
      <main style="text-align:start;font-family:Arial">
        <h1>Hola, soy ${name}</h1>
        <div style="style="display:flex; flex-direction:column; justify-center:center;align-items:start;width:80%;      min-height:400px">
          <p style="text-align:start">
            <b>Consulta:</b>
            <br/><br/>
            ${query}
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
    await transporter.sendMail(message);
  } catch (err) {
    console.error("Error al enviar mail de soporte: " + err.message);
  }
}

export default formData;
