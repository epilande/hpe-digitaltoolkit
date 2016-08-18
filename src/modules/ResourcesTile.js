// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Tile from 'grommet/components/Tile';
import Paragraph from 'grommet/components/Paragraph';

const CLASS_ROOT = 'resources-tile';

export default class ResourcesTile extends Component {
  constructor (props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick () {
    window.location.href = this.props.link;
  }

  render () {
    const {
      className,
      thumbnail,
      title,
      description,
      link,
      ...props
    } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      className
    );

    return (
      <Tile
        className={classes}
        direction="row"
        responsive={false}
        align="start"
        onClick={link && this._handleClick}
        {...props}
      >
        <Box
          className={`${CLASS_ROOT}__thumbnail`}
          backgroundImage={`url(${thumbnail})`}
          flex={false}
        />
        <Box pad={{horizontal: 'medium', vertical: 'small'}}>
          <Heading tag="h6" margin="none" uppercase={true}>{title}</Heading>
          <Paragraph margin="none">{description}</Paragraph>
        </Box>
      </Tile>
    );
  }
};

ResourcesTile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  link: PropTypes.string
};
