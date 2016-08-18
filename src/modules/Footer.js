// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';
import Responsive from 'grommet/utils/Responsive';
import Box from 'grommet/components/Box';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import Logo from '../examples/Logo';

const CLASS_ROOT = 'footer';

export default class Footer extends Component {
  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {
      accordionDisabled: true
    };
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount () {
    if (this._responsive) {
      this._responsive.stop();
    }
  }

  _onResponsive (small) {
    if (small) {
      this.setState({accordionDisabled: false});
    } else {
      this.setState({accordionDisabled: true});
    }
  }

  render () {
    const {
      className,
      ...props
    } = this.props;
    const { accordionDisabled } = this.state;

    const classes = classnames(
      CLASS_ROOT,
      className
    );

    return (
      <Box className={classes} colorIndex="light-2" {...props}>
        <Box direction="row" responsive={false}>
          <Accordion icon={false} openMulti={accordionDisabled}
            disabled={accordionDisabled}>
            <AccordionPanel
              heading="Corporate"
              active={accordionDisabled}
              separator={accordionDisabled ? 'none' : 'bottom'}
            >
              <ul>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Corporate Responsibility</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Hewlett Packard Labs</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Sitemap</a></li>
              </ul>
            </AccordionPanel>
            <AccordionPanel
              heading="Partners"
              active={accordionDisabled}
              separator={accordionDisabled ? 'none' : 'bottom'}
            >
              <ul>
                <li><a href="#">Partners Program</a></li>
                <li><a href="#">Find a Partner</a></li>
              </ul>
            </AccordionPanel>
            <AccordionPanel
              heading="Communities"
              active={accordionDisabled}
              separator={accordionDisabled ? 'none' : 'bottom'}
            >
              <ul>
                <li><a href="#">Developer Forums</a></li>
                <li><a href="#">Enterprise Business</a></li>
              </ul>
            </AccordionPanel>
            <AccordionPanel
              heading="Customer Resources"
              active={accordionDisabled}
              separator={accordionDisabled ? 'none' : 'bottom'}
            >
              <ul>
                <li><a href="#">Enterprise Store</a></li>
                <li><a href="#">Public Sector Store</a></li>
                <li><a href="#">Education &amp; Training</a></li>
                <li><a href="#">Email Signup</a></li>
              </ul>
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box
          className={`${CLASS_ROOT}__social`}
          direction="row"
          align="start"
          justify="between"
          separator="top"
          pad={{vertical: 'medium'}}
        >
          <Box className={`${CLASS_ROOT}__logo`}>
            <Logo />
          </Box>
          <Box
            direction="row"
            pad={{between: 'medium'}}
            responsive={false}
          >
            <SocialLinkedinIcon />
            <SocialTwitterIcon />
            <SocialFacebookIcon />
          </Box>
        </Box>
        <Box
          className={`${CLASS_ROOT}__legal`}
          direction="row"
          justify="end"
          responsive={false}
        >
          <ul>
            <li><a href="#">United States</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Cookies</a></li>
            <li>2016 Hewlett Packard Enterprise</li>
          </ul>
        </Box>
      </Box>
    );
  }
};

Footer.propTypes = {
};

Footer.defaultProps = {
};
