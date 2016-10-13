// (C) Copyright 2014-2016 Hewlett-Packard Development Company, L.P.

import React, { Component, PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';

function renderLink (routePrefix, link, index = 0) {
  return (
    <NavAnchor key={index} routePrefix={routePrefix}  path={link.href}>
      {link.label}
    </NavAnchor>
  );
}

class NavAnchor extends Component {
  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick (event, href) {
    event.preventDefault();
    this.context.router.push(href);
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render () {
    const { path, routePrefix, ...props } = this.props;
    const { router } = this.context;
    let className = this.props.className || '';
    let href = router.createPath(path);
    href = `${routePrefix}${href}`;
    return (
      <Anchor {...props} className={className} href={href}
        onClick={(event) => this._onClick(event, href)} />
    );
  }
};

NavAnchor.propTypes = {
  ...Anchor.propTypes,
  onClick: PropTypes.func,
  path: PropTypes.string.isRequired
};

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};



function renderMenuLinks (props, routePrefix) {
  return (
    <Box appCentered={props.centered}
      className={(props.external && !props.responsive) ? 'flex' : undefined}
      colorIndex={props.colorIndex} direction="row"
      separator={(props.external && props.responsive) ? 'top' : undefined}
      pad={{ horizontal: 'medium',vertical: 'none' }}>
      <Menu direction="row" inline={true}
        label="Menu" dropAlign={{top: 'top', left: 'left'}}>
        {props.links.map((link, index) => {
          if (link.links && link.links.length > 0) {
            return (
              <Menu key={index} label={link.label}
                colorIndex="dark"
                dropColorIndex={props.colorIndex}
                dropAlign={{top: 'top', left: 'left'}}>
                {link.links.map((dropdownLink, linkIndex) =>
                  renderLink(routePrefix, dropdownLink, linkIndex)
                )}
              </Menu>
            );
          } else {
            return renderLink(routePrefix, link, index);
          }
        })}
      </Menu>
    </Box>
  );
}

class HeaderMenu extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    if (this.props.links.length > 0) {
      return renderMenuLinks(this.props, this.context.routePrefix);
    } else {
      return null;
    }
  }
}

HeaderMenu.propTypes = {
  centered: PropTypes.bool,
  colorIndex: PropTypes.string,
  external: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string
    }))
  })),
  responsive: PropTypes.bool
};

HeaderMenu.defaultProps = {
  links: []
};

HeaderMenu.contextTypes = {
  routePrefix: PropTypes.string.isRequired
};

export default HeaderMenu;
