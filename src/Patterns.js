// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ArubaLogo from 'grommet/components/icons/base/PlatformAruba';
import HPILogo from 'grommet/components/icons/base/PlatformHpi';
import GrommetLogo from 'grommet/components/icons/Grommet';
import Header from './examples/Header';

export default class Patterns extends Component {

  constructor(props) {
    super(props);
    this.load = this.load.bind(this);
  }

  componentWillMount() {
    this.removeChildren('header');
    this.removeChildren('footer');
  }

  componentDidMount() {
    if (this.context.routePrefix.split('/')[2] === 'hpe') {
      this.load('https://ssl.www8.hp.com/ie/en/scripts/framework/jquery/v-1-8/jquery.js', () => {
        this.load('https://ssl.www8.hp.com/ie/en/scripts/framework/jquery/v-1-8/can.jquery.js', () => {
          this.load('https://ssl.www8.hp.com/caas/header-footer/us/en/hpe/latest.r?contentType=js');
        });
      });
    }
  }

  load(url, cb) {
    const node = ReactDOM.findDOMNode(this);
    const element = document.createElement('script');
    element.src = url;
    element.addEventListener('load', cb);
    node.appendChild(element);
  }

  removeChildren(id) {
    const element = document.getElementById(id);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  render () {
    const { children } = this.props;
    const currentTheme = this.context.routePrefix.split('/')[2];

    let logo;
    switch (currentTheme) {
      case 'aruba':
        logo = <ArubaLogo size="large" colorIndex="brand" />;
        break;
      case 'hpinc':
        logo = <HPILogo size="large" colorIndex="brand" />;
        break;
      default:
        logo = <GrommetLogo />;
    }

    return (
      <div>
        {currentTheme !== 'hpe' &&
          <Header
            external={true}
            logo={logo}
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
              }, {
                label: 'Themes',
                links: [{
                  label: 'Grommet',
                  href: '/docs/examples'
                }, {
                  label: 'Aruba',
                  href: '/docs/aruba/examples'
                }, {
                  label: 'HPE',
                  href: '/docs/hpe/examples'
                }, {
                  label: 'HPINC',
                  href: '/docs/hpinc/examples'
                }]
              }]
            }
          />
        }
        {children}
      </div>
    );
  }
};

Patterns.contextTypes = {
  routePrefix: PropTypes.string.isRequired
};
