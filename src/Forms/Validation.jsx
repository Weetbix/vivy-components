import React, { createContext, Component } from "react";
import Schema from "async-validator";
import PropTypes from "prop-types";

const DEFAULT_STATE = {
  errors: {}
};

export const ValidationContext = createContext(DEFAULT_STATE);

export default class Validation extends Component {
  state = DEFAULT_STATE;

  validate = (fields, rules) => {
    const schema = new Schema(rules);
    let validation = {};

    schema.validate(fields, validateErr => {
      if (validateErr) {
        validation = validateErr.reduce(
          (prev, error) => ({ ...prev, [error.field]: error.message }),
          {}
        );
      }
    });

    return validation;
  };

  validateForm = (fields, target) => {
    const { rules } = this.props;
    const { errors } = this.state;
    const hasErrors = Object.keys(errors).some(message => errors[message]);
    const validation = this.validate(fields, rules);
    const validationErrors = target
      ? { [target]: validation[target] }
      : validation;

    this.setState({ errors: { ...errors, ...validationErrors } });

    return hasErrors;
  };

  render() {
    const { children } = this.props;
    const { errors } = this.state;

    return (
      <ValidationContext.Provider
        value={{
          onBlur: this.validateForm,
          onChange: this.validateForm,
          validation: this.validateForm,
          errors
        }}
      >
        {children}
      </ValidationContext.Provider>
    );
  }
}

Validation.propTypes = {
  children: PropTypes.node.isRequired,
  rules: PropTypes.shape({}).isRequired
};
