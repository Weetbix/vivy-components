import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { DocumentBox, Icon, Button, FlexRow, FlexColumn } from "../src/index";

const BoxContent = styled.div`
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  border-radius: 8px;
  border: solid 1px #e4e4e4;

  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
    padding-top: 24px;
    padding-bottom: 8px;
    
  }
  .name,
  .date {
    font-size: 16px;
    font-weight: normal;
    line-height: 1.38;
  }
`;
storiesOf("DocumentBox", module).add(
  "basic",
  withInfo()(() => (
    <FlexRow position="center">
      <FlexColumn col={5}>
        <BoxContent>
          <Icon style={{ fontSize: "10em", paddingTop: "40px" }} name="default" />
          <div className="title">Röntgenbild</div>
          <div className="name">Peggy J. Rosenberg</div>
          <div className="date">(geb 09.12.1969)</div>
          <FlexRow position="center" style={{ padding: "24px" }}>
            <FlexColumn>
              <Button customStyle={{ width: "100%" }}>hello</Button>
            </FlexColumn>
          </FlexRow>
        </BoxContent>
      </FlexColumn>
    </FlexRow>
  ))
);
