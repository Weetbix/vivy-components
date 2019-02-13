import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Icon } from "../../src/index";
import {
  AlertSuccessStyles,
  AlertWarningStyles,
  ContentStyles
} from "./alert.style";

const TYPE_WARNING = "warning";
const TYPE_SUCCESS = "success";

export default function Alert({ type, children }) {
  const Styles =
    type === TYPE_SUCCESS ? AlertSuccessStyles : AlertWarningStyles;
  const iconName =
    type === TYPE_SUCCESS
      ? "radio-button-filled-alt"
      : "warning-triangle-filled";

  return (
    <Styles>
      <Row textAlign="center">
        <Col>
          <Icon name={iconName} />
          <ContentStyles>{children}</ContentStyles>
        </Col>
      </Row>
    </Styles>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf([TYPE_SUCCESS, TYPE_WARNING]).isRequired,
  children: PropTypes.string.isRequired
};