import Header from "../Body/Header/Header";
import Footer from "./Footer";
import styled from "styled-components";

function Privacy() {
  return (
    <Container>
      <Header />

      <PrivacyContainer>
        <p>
          Please read carefully Wix.com cares deeply about the privacy of its
          visitors and users. Accordingly, in the present Privacy Policy
          (“Privacy Policy”) describes what way Wix.com Ltd., together with its
          affiliated companies around the world (“Wix”, “we”, “our” or “us”),
          collects, uses and share your Personal Information; likewise, the
          rights that in terms of data you may have about said Personal
          Information.
          <br />
          <br />
          This Privacy Policy applies to all Wix users, including visitors,
          registered users and users premium (collectively “User(s)”, “you”, or
          “your(s)”), as well as all Wix services, including our websites
          (including www.wix.com and any of its subdomains, the “Website”), the
          web applications (“Wix Applications”), mobile applications (“Mobile
          Applications”) and related services (collectively, services").
          <br />
          <br />
          This Privacy Policy is not intended supersede the terms of any
          contract you have with us, or none of the rights you may have under
          other laws applicable in terms of data protection. Before accessing
          our services or use them, please read this policy and make sure you
          fully understand our practices in regards to to your Personal
          Information. If after having read and understood completely this
          Privacy Policy, still does not agree in accordance with our practices,
          you must leave the website immediately and totally discontinue the use
          of any of our Services.
          <br />
          <br />
          Yeah If you have any questions or concerns about this policy, please
          contact us here. By accessing any of our services or use them, you
          acknowledge that you have read this Privacy Policy Privacy. 2.
          <br />
          <br />
          Privacy Policy applies to all Wix users, including visitors,
          registered users and users premium (collectively “User(s)”, “you”, or
          “your(s)”), as well as all Wix services, including our websites
          (including www.wix.com and any of its subdomains, the “Website”), the
          web applications (“Wix Applications”), mobile applications (“Mobile
          Applications”) and related services (collectively, services").
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
  PrivacyContainer = styled.div`
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
  `;
