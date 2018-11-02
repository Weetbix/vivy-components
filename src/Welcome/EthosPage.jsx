import React from "react";
import FlexGrid from "../grid/FlexGrid";
import Col from "../grid/Col";
import WelcomeStyles from "./welcome.style";

export default function WelcomePage() {
  return (
    <WelcomeStyles>
      <FlexGrid>
        <Col>
          <div className="container">
            <h1>Vision &amp; Ethos</h1>
            <p style={{ marginTop: "4rem" }}>
              The styleguide and component library aims to bring engineering and
              design together.
              <br /> <br /> <br />
              Components tie into our frontend infrastructure to empower a
              design first approach.
              <br /> <br /> <br />
              With this philosophy we aim to have consistent and accessible
              design that unifies our features into a greater whole.
            </p>
          </div>
        </Col>
      </FlexGrid>
    </WelcomeStyles>
  );
}