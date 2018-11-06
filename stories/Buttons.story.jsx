import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/index";

const click = action("Button");

const ButtonStyles = styled.div`
  margin: 80px 0 50px 110px;
  .list {
    display: flex;
    flex-direction: row;
    margin-top: 27px;
    margin-bottom: 50px;
  }

  a,
  button {
    margin-right: 25px;
  }

  a {
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 40px
  }

`;

storiesOf("Buttons", module).add(
  "Buttons Types",
  withInfo("A list of primary, secondary, and tertiary buttons")(() => (
    <ButtonStyles>
      <h2>Primary Buttons</h2>
      <div className="list">
        <Button onClick={() => click("button clicked!")}>Call to Action</Button>
        <Button disabled type="primary" onClick={() => click("disabled")}>Disabled</Button>
      </div>
      <h2>Secondary Buttons</h2>
      <div className="list">
        <Button type="secondary" onClick={() => click("button clicked!")}>Call to Action</Button>
        <Button disabled type="secondary" onClick={() => click("button clicked!")}>Disabled</Button>
      </div>

      <h2>Link style</h2>
      <div className="list">
      <a style={{color: '#00BFAC'}} target='blank' href="https://www.vivy.com/impressum/">Impressum</a>
      <a style={{color: '#bfbfbf'}} target='blank' href="https://www.vivy.com/impressum/">Impressum</a>

      </div>
   
    </ButtonStyles>
  ))
);
