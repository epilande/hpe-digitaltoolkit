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
      <Box className={classes} {...props}>
        Testing
      </Box>
    );
  }
};

Footer.propTypes = {
};

Footer.defaultProps = {
};
