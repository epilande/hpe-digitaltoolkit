// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

// import React, { Component, PropTypes } from 'react';
import React, { Component } from 'react';
import classnames from 'classnames';
import Responsive from 'grommet/utils/Responsive';
import Box from 'grommet/components/Box';
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
      darkTheme,
      directory,
      legal,
      logo,
      social,
      ...props
    } = this.props;
    const { accordionDisabled } = this.state;

    const classes = classnames(
      CLASS_ROOT,
      className
    );

    return (
      <Box
        className={classes}
        colorIndex={darkTheme ? DARK_COLORINDEX : LIGHT_COLORINDEX}
        {...props}
      >
        <Box direction="row" responsive={false}>
          <Accordion
            icon={false}
            openMulti={accordionDisabled}
            disabled={accordionDisabled}
          >
            {
              directory.map((column) => (
                <AccordionPanel
                  key={column.header}
                  heading={column.header}
                  active={accordionDisabled}
                  separator={accordionDisabled ? 'none' : 'bottom'}
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
              ))
            }
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
          { logo &&
            <Box className={`${CLASS_ROOT}__logo`}>
              <a href={logo.url}>
                {logo.icon}
              </a>
            </Box>
          }
          { social &&
            <Box
              direction="row"
              pad={{between: 'medium'}}
              responsive={false}
            >
              {
                social.map((item, key) => (
                  <a key={`social-${key}`} href={item.url}>{item.icon}</a>
                ))
              }
            </Box>
          }
        </Box>
        { legal &&
          <Box
            className={`${CLASS_ROOT}__legal`}
            direction="row"
            justify="end"
            responsive={false}
          >
            <ul>
              {
                legal.map((item) => {
                  let content = item.title;
                  if (item.url) {
                    content = <a href={item.url}>{item.icon}{item.title}</a>;
                  }
                  return (
                    <li key={item.title}>
                      {content}
                    </li>
                  );
                })
              }
            </ul>
          </Box>
        }
      </Box>
    );
  }
};

Footer.propTypes = {
};

Footer.defaultProps = {
};
