import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import styled from "styled-components";

const Box = styled.div`
  background-color: #04d4bf;
  display: inline-block;
`;

storiesOf("Spaces", module)
  .add(
    "pa1",
    withInfo("pa1")(() => (
      <Box>
        <div className="pa1" />
      </Box>
    ))
  )
  .add(
    "pa2",
    withInfo("pa2")(() => (
      <Box>
        <div className="pa2" />
      </Box>
    ))
  )
  .add(
    "pa3",
    withInfo("pa3")(() => (
      <Box>
        <div className="pa3" />
      </Box>
    ))
  )
  .add(
    "pa4",
    withInfo("pa4")(() => (
      <Box>
        <div className="pa4" />
      </Box>
    ))
  )
  .add(
    "pa5",
    withInfo("pa5")(() => (
      <Box>
        <div className="pa5" />
      </Box>
    ))
  )
  .add(
    "pa6",
    withInfo("pa6")(() => (
      <Box>
        <div className="pa6" />
      </Box>
    ))
  )
  .add(
    "pa7",
    withInfo("pa7")(() => (
      <Box>
        <div className="pa7" />
      </Box>
    ))
  )
  .add(
    "pa8",
    withInfo("pa8")(() => (
      <Box>
        <div className="pa8" />
      </Box>
    ))
  )
  .add(
    "pa9",
    withInfo("pa9")(() => (
      <Box>
        <div className="pa9" />
      </Box>
    ))
  )
  .add(
    "pa10",
    withInfo("pa10")(() => (
      <Box>
        <div className="pa10" />
      </Box>
    ))
  );
