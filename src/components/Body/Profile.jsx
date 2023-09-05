import styled from "styled-components";

function Profile() {
  const UserSVG = () => (
    <div
      style={{
        cursor:'pointer',
        border: "2px solid #FF6700",
        borderRadius: "10px",
        padding: "0.5rem 0.8em ",
      }}
    >
      <svg
        width="24"
        height="27"
        viewBox="0 0 24 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 13C15.866 13 19 10.0898 19 6.5C19 2.91015 15.866 0 12 0C8.13401 0 5 2.91015 5 6.5C5 10.0898 8.13401 13 12 13Z"
          fill="#FF6700"
        />
        <path
          d="M12 16C5.38613 16 0 20.62 0 26.3125C0 26.6975 0.290428 27 0.660065 27H23.3399C23.7096 27 24 26.6975 24 26.3125C24 20.62 18.6139 16 12 16Z"
          fill="#FF6700"
        />
      </svg>
    </div>
  );
  return <UserSVG />;
}

export default Profile;
