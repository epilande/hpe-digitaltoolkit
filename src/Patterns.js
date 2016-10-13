// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component } from 'react';
import Header from './examples/Header';

export default class Patterns extends Component {
  render () {
    const { children } = this.props;
    return (
      <div>
        <Header external={true}
          logoLink={'examples'}
          links={
            [{
              label: 'Documentation',
              links: [{
                label: 'Accordion',
                href: 'http://grommet.github.io/docs/accordion/'
              }, {
                label: 'Card',
                href: 'http://grommet.github.io/docs/card/'
              }, {
                label: 'Marquee',
                href: 'develop/marquee'
              }, {
                label: 'Stack',
                href: 'develop/stack'
              }]
            }, {
              label: 'Page Templates',
              links: [{
                label: 'Primary',
                href: 'primary'
              }, {
                label: 'Sub',
                href: 'sub'
              }, {
                label: 'Details',
                href: 'details'
              }]
            }]
          } />
        {children}
      </div>
    );
  }
};
