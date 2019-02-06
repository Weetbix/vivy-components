import styled from "styled-components";
import { Colors } from "../index";

const TopbarStyles = styled.div`
  background-color: #fff;
  border-bottom: 1px solid ${Colors.divider};

  .link {
    display: flex;
    margin: 0 15%;
  }

  .logo {
    width: 100px;
  }

  @media (max-width: 1200px) {
    .link {
      margin: 0 10%;
    }
  }

  @media (max-width: 1000px) {
    min-height: 50px;

    .logo {
      width: 80px;
    }

    .link {
      margin: 0 3%;
    }
  }
`;

export default TopbarStyles;
