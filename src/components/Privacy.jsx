import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Privacy() {
  return (
    <PrivacyContainer>
      <Link to="/">Back</Link>
      <p>1. Please read carefully Wix.com cares deeply about the
        privacy of its visitors and users. Accordingly, in the present
        Privacy Policy (“Privacy Policy”) describes what
        way Wix.com Ltd., together with its affiliated companies around the world
        (“Wix”, “we”, “our” or “us”), collects, uses and
        share your Personal Information; likewise, the rights that
        in terms of data you may have about said Personal Information.
        This Privacy Policy applies to all Wix users,
        including visitors, registered users and users
        premium (collectively “User(s)”, “you”, or “your(s)”), as well as
        all Wix services, including our websites (including
        www.wix.com and any of its subdomains, the “Website”), the
        web applications (“Wix Applications”), mobile applications
        (“Mobile Applications”) and related services (collectively,
        services"). This Privacy Policy is not intended
        supersede the terms of any contract you have with us, or
        none of the rights you may have under other laws
        applicable in terms of data protection. Before accessing
        our services or use them, please read this policy and
        make sure you fully understand our practices in regards to
        to your Personal Information. If after having read and understood
        completely this Privacy Policy, still does not agree
        in accordance with our practices, you must leave the website immediately
        and totally discontinue the use of any of our Services. Yeah
        If you have any questions or concerns about this policy, please contact
        us here. By accessing any of our services or
        use them, you acknowledge that you have read this Privacy Policy
        Privacy. 2.
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
