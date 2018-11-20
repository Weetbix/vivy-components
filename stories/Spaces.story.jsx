import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";

const Pad = styled.div`
  background-color: #04d4bf;
`;

storiesOf("Spaces", module).add(
  "default",
  withInfo("pa")(() => (
    <Pad>
      <div className="pa10" />
    </Pad>
  ))
);
