// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import HPELogo from '../HPELogo';

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
          <Accordion icon={false}>
            <AccordionPanel heading="Corporate">
              <ul>
                <li>Accessibility</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Corporate Responsibility Events</li>
                <li>Hewlett Packard Labs</li>
                <li>Investor Relations Leadership</li>
                <li>Newsroom</li>
                <li>Sitemap</li>
              </ul>
            </AccordionPanel>
            <AccordionPanel heading="Partners">
              <ul>
                <li>Partners Program</li>
                <li>Find a Partner</li>
              </ul>
            </AccordionPanel>
            <AccordionPanel heading="Communities">
              <ul>
                <li>Developer Forums</li>
                <li>Enterprise Business</li>
              </ul>
            </AccordionPanel>
            <AccordionPanel heading="Customer Resources">
              <ul>
                <li>Enterprise Store</li>
                <li>Public Sector Store</li>
                <li>Education &amp; Training</li>
                <li>Email Signup</li>
              </ul>
            </AccordionPanel>
          </Accordion>
        </Box>
        <Box
          direction="row"
          align="start"
          justify="between"
          separator="top"
          pad={{vertical: 'medium'}}
          responsive={false}
        >
          <Box className={`${CLASS_ROOT}__logo`}>
            <HPELogo />
          </Box>
          <Box
            className={`${CLASS_ROOT}__social-icon`}
            direction="row"
            pad={{between: 'medium'}}
          >
            <SocialLinkedinIcon />
            <SocialTwitterIcon />
            <SocialFacebookIcon />
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
