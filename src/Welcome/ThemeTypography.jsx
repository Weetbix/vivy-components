import React from "react";
import { Row, Col } from "../../src/index";
import Styles from "./themeTypography.style";

export default function ThemeTypography() {
  return (
    <Styles>
      <Row position="center">
        <Col lg={10}>
          <p>
            <h1 style={{ marginTop: "32px" }}>Heading One</h1>
            <small>TTNorms-Medium, 3rem (48px) line-height: 54px</small>
          </p>

          <p>
            <h2 style={{ marginTop: "32px" }}>Heading Two</h2>
            <small>TTNorms-Regular, 2.25rem (36px) line-height: 42px</small>
          </p>

          <p>
            <h3 style={{ marginTop: "32px" }}>Heading Three</h3>
            <small>
              TTNorms-Regular, 2.5rem (40px), #575756, line-height: 46px
            </small>
          </p>

          <p>
            <h4 style={{ marginTop: "32px" }}>Heading Four</h4>
            <small>
              TTNorms-Regular, 2rem (32px), #575756, line-height: 36px
            </small>
          </p>

          <p>
            <h5 style={{ marginTop: "32px" }}>Heading Five</h5>
            <small>
              TTNorms-Medium, 1.5rem (24px), #575756, line-height: 30px
            </small>
          </p>

          <p style={{ marginTop: "48px" }}>Paragraph</p>

          <p>
            Teilen Sie Untersuchungs­ergebnisse und Befunde sicher und einfach
            mit Patienten und erhalten Sie in der gleichen Weise wichtige
            Unterlagen aus vorangegangenen Untersuchungen. Für eine bessere
            Patientenbindung, effiziente Diagnosen und weniger
            Doppelbehandlungen.
          </p>
          <small>
            TTNorms-Regular, 1rem (16px), #575756, line-height: 26px
          </small>
          <br />

          <small style={{ marginTop: "56px", display: "block" }}>Caption</small>
          <br />
          <small>
            TTNorms-Regular, 0.9375rem (15px), #575756, line-height: 20px
          </small>
          <small style={{ color: "red", display: "block" }}>
            Small and hard to read for many people so use with caution
          </small>
          <br />

          <a href="https://www.vivy.com/" rel="noopener noreferrer">
            This is a link
          </a>
          <small>TTNorms-Medium, 1rem (16px), #575756, line-height: 22px</small>
          <br />
        </Col>
      </Row>
    </Styles>
  );
}
