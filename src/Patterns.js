// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component } from 'react';

export default class Patterns extends Component {
  render () {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
};
