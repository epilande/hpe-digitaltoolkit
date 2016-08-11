// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';

const CLASS_ROOT = 'footer';

export default class Footer extends Component {
  render () {
    const {
      className,
      ...props
    } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      className
    );

    return (
      <Box className={classes} colorIndex="light-2" {...props}>
        <Box direction="row" responsive={false}>
          links
        </Box>
        <Box direction="row" align="center" justify="between" responsive={false}>
          <Box>
            logo
          </Box>
          <Box>
            social links
          </Box>
        </Box>
        <Box direction="row" justify="end" responsive={false}>
          <a href="#">
            United States
          </a>
          <a href="#">
            Privacy
          </a>
          <a href="#">
            Terms of Use
          </a>
          <a href="#">
            Cookies
          </a>
          2016 Hewlett Packard Enterprise
        </Box>
      </Box>
    );
  }
};

Footer.propTypes = {
};

Footer.defaultProps = {
};
