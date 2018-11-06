import styled, { css } from "styled-components";

const baseStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  font-family: "Norms", sans-serif;
`;
const transitionBoxShadow = css`
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
`;
const transitionBackgroundColor = css`
  transition: color 0.2s ease, background-color 0.2s ease;
`;

const ButtonStyles = styled.div`
  .component-child {
    ${baseStyles};
  }

  button:disabled,
  button:disabled .component-child {
    cursor: not-allowed !important;
  }

  button {
    padding: 0.25rem 1rem 0rem 1rem;
    height: 40px
    border-radius: 4px;
    min-width: 8rem;
    display: block;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    font-size: 1em;
    line-height: normal;
    font-weight: 500;
  }

  .primary {
    ${transitionBoxShadow};
    color: #fff;
    background-color: #04d4bf;
    border: none;

    &:hover {
      ${transitionBoxShadow};
      background-color: #03d4bf;
      box-shadow: 0px 4px 16px 0px rgba(87,87,86,0.20);
    }

    &:active {
      ${transitionBoxShadow};
      background-color: #00bfac;
      box-shadow: 0px 4px 8px 0px rgba(87,87,86,0.25);
    }

    &:disabled {
      opacity: 0.4;
      box-shadow: none;
    }
  }


  .secondary {
    ${transitionBackgroundColor};
    background-color: #fff;
    border: solid 1px #00bfac;
    color: #00bfac;

    &:hover {
      ${transitionBackgroundColor};
      background-color: #04d4bf;
      border: solid 1px #04d4bf;
      color: white;
    }

    &:active {
      ${transitionBackgroundColor};
      background-color: #00bfac;
      border: solid 1px #00bfac;
    }

    &:disabled {
      opacity: 0.4;
      box-shadow: none;
      color: #00bfac;
      background-color: #fff;

    }
  }

    }
  }
`;

export default ButtonStyles;
