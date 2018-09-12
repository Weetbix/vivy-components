import React from "react";
import PropTypes from "prop-types";
import Icon from "../icons";
import SimpleIconStyles from "./simpleIcon.style";

export default function BasicInfoIcon({ icon, iconDetail, iconColor }) {
  return (
    <SimpleIconStyles style={{ color: iconColor }}>
      <Icon name={icon} />
      <div className="detail">{iconDetail}</div>
    </SimpleIconStyles>
  );
}

BasicInfoIcon.propTypes = {
  iconDetail: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string
};

BasicInfoIcon.defaultProps = {
  iconColor: ""
};