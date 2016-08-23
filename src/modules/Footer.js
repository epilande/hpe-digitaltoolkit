// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Responsive from 'grommet/utils/Responsive';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

const CLASS_ROOT = 'footer';
const LIGHT_COLORINDEX = 'light-2';
const DARK_COLORINDEX = 'grey-1';

export default class Footer extends Component {
  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {
      isMobile: false
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
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    }
  }

  _renderAccordion (directory) {
    const panels = directory.map(column => (
      <AccordionPanel
        key={column.header}
        heading={column.header}
      >
        <ul>
          {
            column.links.map((link) => {
              return (
                <li key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })
          }
        </ul>
      </AccordionPanel>
    ));

    return (
      <Accordion className="directory__accordion" icon={false}>
        {panels}
      </Accordion>
    );
  }

  _renderNestedList (directory) {
    return directory.map(column => (
      <Box key={column.header} className="directory__list">
        <Heading tag="h4" margin="none">{column.header}</Heading>
        <ul>
          {
            column.links.map((link) => {
              return (
                <li key={link.title}>
                  <a href={link.url}>{link.title}</a>
                </li>
              );
            })
          }
        </ul>
      </Box>
    ));
  }

  _renderDirectory (directory, isMobile) {
    return (
      <Box
        className={`${CLASS_ROOT}__directory`}
        direction="row"
        wrap={true}
        separator="bottom"
      >
        {isMobile ?
          this._renderAccordion(directory) :
          this._renderNestedList(directory)
        }
      </Box>
    );
  }

  _renderLogo (logo) {
    let content = logo.icon;
    if (logo.url) {
      content = <a href={logo.url}>{logo.icon}</a>;
    }
    return (
      <Box className={`${CLASS_ROOT}__logo`}>
        {content}
      </Box>
    );
  }

  _renderSocial (social) {
    const socialIcons = social.map((item, key) => (
      <a key={`social-${key}`} href={item.url}>{item.icon}</a>
    ));
    return (
      <Box direction="row" pad={{between: 'medium'}} responsive={false}>
        {socialIcons}
      </Box>
    );
  }

  _renderLegal (legal) {
    const legalList = legal.map((item) => {
      let content = item.title;
      if (item.url) {
        content = <a href={item.url}>{item.icon}{item.title}</a>;
      }
      return (
        <li key={item.title}>
          {content}
        </li>
      );
    });

    return (
      <Box
        className={`${CLASS_ROOT}__legal`}
        direction="row"
        justify="end"
        responsive={false}
      >
        <ul>
          {legalList}
        </ul>
      </Box>
    );
  }

  render () {
    const {
      className,
      darkTheme,
      directory,
      legal,
      logo,
      social,
      ...props
    } = this.props;
    const { isMobile } = this.state;

    const classes = classnames(
      CLASS_ROOT,
      className,
      {
        [`${CLASS_ROOT}--dark`]: darkTheme
      }
    );

    return (
      <Box
        className={classes}
        colorIndex={darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX}
        {...props}
      >
        {directory && this._renderDirectory(directory, isMobile)}
        <Box
          className={`${CLASS_ROOT}__social`}
          direction="row"
          align="start"
          justify="between"
          pad={{vertical: 'medium'}}
        >
          {logo && this._renderLogo(logo)}
          {social && this._renderSocial(social)}
        </Box>
        {legal && this._renderLegal(legal)}
      </Box>
    );
  }
};

Footer.propTypes = {
  darkTheme: PropTypes.bool,
  directory: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })).isRequired
  })),
  logo: PropTypes.shape({
    icon: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired
  }),
  social: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired,
  legal: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element,
    title: PropTypes.string.isRequired,
    url: PropTypes.string
  })).isRequired
};
