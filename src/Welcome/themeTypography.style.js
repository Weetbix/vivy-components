import styled from "styled-components";

const FontStyles = styled.div`
  
h1, h2, h3, h4, h5 , p, small {
::selection {
  background: #03D4BF;
  color: #fff
}
}

  h1 {
    font-size: 3rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.13;
    letter-spacing: normal;
    color: #353f41;
    margin: 6px 0;
  }

  h2 {
    font-size: 2.25m;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: normal;
    color: #353f41;
    margin: 6px 0;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    font-stretch: normal;
    line-height: 1.42;
    letter-spacing: normal;
    color: #353f41;
    margin: 6px 0;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.3;
    letter-spacing: normal;
    color: #353f41;
    margin: 6px 0;
  }

  h5 {
    font-size: 1rem;
    font-weight: 500;
    font-stretch: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #353f41;
    margin: 6px 0;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.38;
    letter-spacing: normal;
    color: #575756;
  }

  br {
    margin-bottom: 32px;
  }

  small {
    font-size: 0.875rem;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #898988;
  }


`;

export default FontStyles;
