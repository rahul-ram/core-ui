import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class Footer extends Component {
  render() {
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span> Deutsche Bank </span>
      </React.Fragment>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
