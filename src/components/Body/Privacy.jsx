import Header from "../Body/Header/Header";
import Footer from "./Footer";
import styled from "styled-components";

function Privacy() {
  return (
    <Container>
      <Header />

      <PrivacyContainer>
        <Title>Política de Privacidad</Title>
        <br />
        <br />
        <p>
          La presente política de privacidad establece los términos en que
          ALGORITHMIC MARKET usa y protege la información que es proporcionada
          por sus usuarios al momento de utilizar su sitio web. Esta compañía
          está comprometida con la seguridad de los datos de sus usuarios.
          Cuando le pedimos llenar los campos de información personal con la
          cual usted pueda ser identificado, lo hacemos asegurando que sólo se
          empleará de acuerdo con los términos de este documento. Sin embargo
          esta política de privacidad puede cambiar con el tiempo o ser
          actualizada por lo que le recomendamos y enfatizamos revisar
          continuamente esta página para asegurarse que está de acuerdo con
          dichos cambios.
        </p>
        <br />
        <p>
          Información recogida: nuestro sitio web podrá recoger información como
          su nombre y dirección de correo electrónico. Así mismo cuando sea
          necesario podrá ser requerida información específica para procesar
          algún pedido o realizar una entrega o facturación. Nuestro sitio web
          emplea la información con el fin de mantener un registro de usuarios,
          de pedidos en caso que aplique, y mejorar nuestros productos y
          servicios.
        </p>
        <br />
        <p>
          Es posible que sean enviados correos electrónicos regularmente a
          través de nuestro sitio web con ofertas especiales, nuevos productos y
          otra información publicitaria que consideremos relevante para usted o
          que pueda brindarle algún beneficio, estos correos electrónicos serán
          enviados a la dirección que usted proporcione y podrán ser cancelados
          en cualquier momento.
        </p>
        <br />
        <p>
          Esta compañía no venderá, cederá ni distribuirá la información
          personal que es recopilada sin su consentimiento, salvo que sea
          requerido por un juez con un orden judicial. ALGORITHMIC MARKET Se
          reserva el derecho de cambiar los términos de la presente política de
          privacidad en cualquier momento.
        </p>
      </PrivacyContainer>

      <Footer />
    </Container>
  );
}

export default Privacy;

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins", monospace;
  `,
  PrivacyContainer = styled.section`
    background-color: #ebebeb;
    width: 80vw;
    height: max-content;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    margin: 2rem 0;
    @media (max-width: 480px) {
      width: 90vw;
    }
  `,
  Title = styled.b`
    font-size: 2em;
    text-align: center;
    width: 100%;
    color: #000;
    font-family: "Popppins", Arial, sans-serif;
  `;
