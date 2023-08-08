import { Link } from "react-router-dom";
import styled from "styled-components";

function Privacy() {
  return (
    <PrivacyContainer>
      <Link to="/">Atrás</Link>
      <p>
        1. Por favor, lea atentamente A Wix.com le preocupa profundamente la
        privacidad de sus visitantes y usuarios. En tal virtud, en la presente
        Política de Privacidad (“Política de Privacidad”) se describe de qué
        manera Wix.com Ltd., junto con sus empresas afiliadas de todo el mundo
        (“Wix”, “nosotros”, “nuestro(a)(s)” o “nos”), recopila, utiliza y
        comparte su Información Personal; asimismo, se explican los derechos que
        en materia de datos usted puede tener sobre dicha Información Personal.
        Esta Política de Privacidad se aplica a todos los usuarios de Wix,
        incluidos los visitantes, los usuarios registrados y los usuarios
        premium (conjuntamente “Usuario(s)”, “usted”, o “su(s)”), así como a
        todos los servicios de Wix, entre ellos nuestros sitios web (incluidos
        www.wix.com y cualquiera de sus subdominios, el “Sitio Web”), las
        aplicaciones web (“Aplicaciones de Wix”), las aplicaciones móviles
        (“Aplicaciones Móviles”) y los servicios relacionados (conjuntamente,
        los “Servicios”). La presente Política de Privacidad no tiene por objeto
        reemplazar los términos de ningún contrato que tenga con nosotros, ni
        ninguno de los derechos que pueda tener con arreglo a otras leyes
        aplicables en materia de protección de datos. Antes de acceder a
        nuestros servicios o utilizarlos, sírvase leer esta política y
        asegurarse de entender plenamente nuestras prácticas en lo que respecta
        a su Información Personal. Si después de haber leído y entendido
        completamente la presente Política de Privacidad, sigue sin estar de
        acuerdo con nuestras prácticas, debe abandonar el sitio web de inmediato
        y suspender totalmente el uso de cualquiera de nuestros Servicios. Si
        tiene alguna pregunta o duda sobre esta política, comuníquese con
        nosotros aquí. Al acceder a cualquiera de nuestros servicios o
        utilizarlos, usted reconoce que ha leído la presente Política de
        Privacidad. 2.
      </p>
    </PrivacyContainer>
  );
}

export default Privacy;

const PrivacyContainer = styled.div`
  background-color: #457b9d;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin: 2rem auto;
  display: block;
`;
