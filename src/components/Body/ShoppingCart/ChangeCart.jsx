import { useState, useEffect } from "react";
import styled from "styled-components";

const IconoSVG = ({ width, height }) => {
  const [onPressClick, setOnPressClick] = useState(false);
  const handleState = () => {
    setOnPressClick(!onPressClick);
  };
  useEffect(() => {
    const timer = setTimeout(() => setOnPressClick(false), 2000);
    return () => clearTimeout(timer);
  }, [onPressClick]);
  return (
    <div onClick={handleState}>
      {onPressClick ? (
        <Svg
          width={width}
          height={height}
          viewBox="0 0 40 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="&#240;&#159;&#166;&#134; icon &#34;shopping cart&#34;">
            <g id="Group">
              <path
                id="Vector"
                d="M28.9412 41C30.8059 41 32.3176 39.4883 32.3176 37.6235C32.3176 35.7587 30.8059 34.247 28.9412 34.247C27.0764 34.247 25.5647 35.7587 25.5647 37.6235C25.5647 39.4883 27.0764 41 28.9412 41Z"
                fill="#292D32"
              />
              <path
                id="Vector_2"
                d="M13.5059 41C15.3706 41 16.8823 39.4883 16.8823 37.6235C16.8823 35.7587 15.3706 34.247 13.5059 34.247C11.6411 34.247 10.1294 35.7587 10.1294 37.6235C10.1294 39.4883 11.6411 41 13.5059 41Z"
                fill="#292D32"
              />
              <path
                id="Vector_3"
                d="M6.92659 5.19012L6.54071 9.91718C6.46353 10.824 7.17741 11.5765 8.08424 11.5765H37.6235C38.4339 11.5765 39.1092 10.9591 39.1671 10.1487C39.4179 6.73365 36.8132 3.95529 33.3981 3.95529H9.68565C9.49271 3.10635 9.10682 2.296 8.50871 1.62071C7.544 0.598118 6.19341 0 4.80424 0H1.44706C0.656 0 0 0.656 0 1.44706C0 2.23812 0.656 2.89412 1.44706 2.89412H4.80424C5.40235 2.89412 5.96188 3.14494 6.36706 3.56941C6.77224 4.01318 6.96518 4.592 6.92659 5.19012Z"
                fill="#292D32"
              />
              <path
                id="Vector_4"
                d="M37.8548 12H8.25751C7.44716 12 6.79116 12.6174 6.71399 13.4085L6.0194 21.8014C5.74928 25.1007 8.33469 27.9176 11.634 27.9176H33.0891C35.9833 27.9176 38.5301 25.5445 38.7423 22.6504L39.379 13.64C39.4562 12.7525 38.7616 12 37.8548 12Z"
                fill="#292D32"
              />
            </g>
          </g>
        </Svg>
      ) : (
        <Svg
          width={width}
          height={height}
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
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M30.2125 42C31.6278 42 32.775 40.8528 32.775 39.4375C32.775 38.0222 31.6278 36.875 30.2125 36.875C28.7972 36.875 27.65 38.0222 27.65 39.4375C27.65 40.8528 28.7972 42 30.2125 42Z"
                stroke="#292D32"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M13.8125 42C15.2277 42 16.375 40.8528 16.375 39.4375C16.375 38.0222 15.2277 36.875 13.8125 36.875C12.3973 36.875 11.25 38.0222 11.25 39.4375C11.25 40.8528 12.3973 42 13.8125 42Z"
                stroke="#292D32"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M15.35 13.3H39.95"
                stroke="#292D32"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </Svg>
      )}
    </div>
  );
};

export default IconoSVG;

const Svg = styled.svg`
  transition: all 1s ease;
  &:active {
    path {
      fill: #181818;
    }
  }
`;
