import { Link } from "react-router-dom";
import styled from "styled-components";

function CloseCartSVG(props) {
  const { menuActive, setMenuActive } = props;

  return (
    <svg
      onClick={() => menuActive && setMenuActive(!menuActive)}
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
          fill="#ff6700"
        />{" "}
      </g>
    </svg>
  );
}

function TrashSVG() {
  return (
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z"
        fill="#ff6700"
      />
      <path
        d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z"
        fill="#ff6700"
      />
    </svg>
  );
}

function ArrowSVG(props) {
  const { openCourse } = props;

  return openCourse ? (
    <svg
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="11"
      viewBox="0 0 23 11"
      fill="none"
    >
      <path
        d="M11.5 11C10.5712 11 9.64246 10.6545 8.93926 9.97644L0.288579 1.63449C-0.0961928 1.26345 -0.0961928 0.64932 0.288579 0.27828C0.67335 -0.0927599 1.31021 -0.0927599 1.69498 0.27828L10.3457 8.62023C10.9825 9.23436 12.0174 9.23436 12.6543 8.62023L21.305 0.27828C21.6898 -0.0927599 22.3267 -0.0927599 22.7114 0.27828C23.0962 0.64932 23.0962 1.26345 22.7114 1.63449L14.0607 9.97644C13.3575 10.6545 12.4287 11 11.5 11Z"
        fill="#FF6700"
        transform="scale(-1, 1) translate(-23, 0)"
      />
    </svg>
  ) : (
    <svg
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="11"
      viewBox="0 0 23 11"
      fill="none"
    >
      <path
        d="M11.5 0C10.5712 0 9.64246 0.345451 8.93926 1.02356L0.288579 9.36551C-0.0961928 9.73655 -0.0961928 10.3507 0.288579 10.7217C0.67335 11.0928 1.31021 11.0928 1.69498 10.7217L10.3457 2.37977C10.9825 1.76564 12.0174 1.76564 12.6543 2.37977L21.305 10.7217C21.6898 11.0928 22.3267 11.0928 22.7114 10.7217C23.0962 10.3507 23.0962 9.73655 22.7114 9.36551L14.0607 1.02356C13.3575 0.345451 12.4287 0 11.5 0Z"
        fill="#FF6700"
      />
    </svg>
  );
}

function UserSVG() {
  return (
    <User to="/profile">
      <svg
        width="16"
        height="16"
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
    </User>
  );
}

function IconSVG() {
  return (
    <IconContainer>
      <svg
        width="33px"
        height="33px"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="&#240;&#159;&#166;&#134; icon &#34;shopping cart&#34;">
          <g id="Group">
            <path
              id="Vector"
              d="M1 1H4.56702C6.78102 1 8.5235 2.9065 8.339 5.1L6.6375 25.518C6.3505 28.8595 8.99498 31.7295 12.357 31.7295H34.1895C37.1415 31.7295 39.7245 29.3105 39.95 26.379L41.057 11.004C41.303 7.601 38.72 4.8335 35.2965 4.8335H8.83102"
              stroke="#292D32"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M30.2125 42C31.6278 42 32.775 40.8528 32.775 39.4375C32.775 38.0222 31.6278 36.875 30.2125 36.875C28.7972 36.875 27.65 38.0222 27.65 39.4375C27.65 40.8528 28.7972 42 30.2125 42Z"
              stroke="#292D32"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_3"
              d="M13.8125 42C15.2277 42 16.375 40.8528 16.375 39.4375C16.375 38.0222 15.2277 36.875 13.8125 36.875C12.3973 36.875 11.25 38.0222 11.25 39.4375C11.25 40.8528 12.3973 42 13.8125 42Z"
              stroke="#292D32"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_4"
              d="M15.35 13.3H39.95"
              stroke="#292D32"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </IconContainer>
  );
}

function MenuSVG(props) {
  const { menuActive, setMenuActive } = props;

  return (
    <svg
      onClick={() => setMenuActive(!menuActive)}
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
        fill="#ff6700"
      />
      <path
        d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
        fill="#ff6700"
      />
      <path
        d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
        fill="#ff6700"
      />
    </svg>
  );
}

function CircleSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 29 29"
      fill="none"
    >
      <circle cx="14.5" cy="14.5" r="14.5" fill="#FF6700" />
    </svg>
  );
}

export {
  CloseCartSVG,
  TrashSVG,
  MenuSVG,
  ArrowSVG,
  UserSVG,
  IconSVG,
  CircleSVG,
};

const User = styled(Link)`
    cursor: pointer;
    border: 2px solid #ff6700;
    border-radius: 10px;
    padding: 0.3rem 0.5rem;
    transition: all ease 0.3s;
    &:hover {
      scale: 1.1;
    }
    &:active {
      scale: 1;
    }
  `,
  IconContainer = styled.div`
    height: 80px;
    line-height: 100px;
    width: max-content;
    transition: all ease 0.3s;
    &:hover {
      scale: 1.1;
    }
  `;
