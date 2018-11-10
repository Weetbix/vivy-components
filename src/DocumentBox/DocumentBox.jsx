import React from "react";
import PropTypes from "prop-types";
import Row from "../FlexGrid/FlexRow";
import Col from "../FlexGrid/FlexColumn";

export default function DocumentBox({ style, children }) {
  return (
    <Row position="center">
      <Col offset={3} width={6}>
        {children}
      </Col>
    </Row>
  );
}
DocumentBox.propTypes = {
  style: PropTypes.shape({})
};

DocumentBox.defaultProps = {
  style: {}
};
