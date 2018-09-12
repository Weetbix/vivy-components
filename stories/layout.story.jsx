import React, { Fragment } from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Topbar from "../src/topbar";
import MedicalCard from "../src/MedicalCard";
import Footer from "../src/footer";
import logo from "../public/images/logo.svg";

const LayoutStyles = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 100px;

  .layout-body {
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const footerChildren = (
  <Fragment>
    <a
      className="link"
      href="https://www.vivy.com/impressum"
      target="_"
      rel="noopener noreferrer"
    >
      Impressum
    </a>
    <a
      className="link"
      href="https://www.vivy.com/nutzungsbedingungen"
      target="_"
      rel="noopener noreferrer"
    >
      AGB
    </a>
    <a
      className="link"
      href="https://www.vivy.com/datenschutz"
      target="_"
      rel="noopener noreferrer"
    >
      Datenschutz
    </a>
  </Fragment>
);

storiesOf("Page Layout", module)
  .add(
    "Simple Page",
    withInfo("A simple page with topbar, body, footer")(() => (
      <LayoutStyles>
        <Topbar>
          <a
            className="link"
            href="https://www.vivy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo" src={logo} alt="Vivy Logo" />
          </a>
        </Topbar>
        <div className="layout-body">
          <MedicalCard
            user={{
              name: "Demo User",
              dateOfBirth: "1970-01-01"
            }}
            data={{
              gender: {
                text: "Other",
                icon: "gender-other"
              },
              weight: "82",
              height: "180",
              bloodType: "A-"
            }}
            lastUpdatedAt="1970-01-01"
          />
        </div>
        <Footer>{footerChildren}</Footer>
      </LayoutStyles>
    ))
  )
  .add(
    "Topbar",
    withInfo("The raw topbar component")(() => (
      <LayoutStyles>
        <Topbar>
          <a
            className="link"
            href="https://www.vivy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="logo" src={logo} alt="Vivy Logo" />
          </a>
        </Topbar>
      </LayoutStyles>
    ))
  )
  .add(
    "Footer",
    withInfo("The raw footer component")(() => (
      <LayoutStyles>
        <Footer>{footerChildren}</Footer>
      </LayoutStyles>
    ))
  );