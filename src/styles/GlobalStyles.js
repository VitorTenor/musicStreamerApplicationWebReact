import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundImage from '../assets/image.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    color: ${colors.primaryDarkColor};
    background-image: url(${BackgroundImage});
    background-size: cover;
    height: 100vh;
  }

  html, border-style, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover{
    filter: brightness(85%);
  }
  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.greyColor};
  color: ${colors.primaryDarkColor};
}

.Toastify__progress-bar--success {
  background: ${colors.successColor};
}



body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.greyColor};
  color: ${colors.primaryDarkColor};
}

.Toastify__progress-bar--error {
  background: ${colors.errorColor};
}
`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 7.5em auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;
