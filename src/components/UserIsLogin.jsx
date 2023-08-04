import { Link } from "react-router-dom";
import styled from "styled-components";

function UserIsLogin() {
  return (
    <UserIsLoginContainer>
      <h3>Mis cursos</h3>
      <Link to="/mycourses">
        <button>IR A MIS CURSOS</button>
      </Link>
    </UserIsLoginContainer>
  );
}

export default UserIsLogin;

const UserIsLoginContainer = styled.div`
  background-color: #457b9d;
  box-shadow: 0 0 5px #fff;
  width: 90%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  text-align: center;
`;
