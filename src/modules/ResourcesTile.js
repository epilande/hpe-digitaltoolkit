// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Tile from 'grommet/components/Tile';
import Paragraph from 'grommet/components/Paragraph';

const CLASS_ROOT = 'resources-tile';

export default class ResourcesTile extends Component {
  render () {
    const { thumbnail, title, description } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    const thumbnailStyles = {
      backgroundImage: thumbnail
    };

    return (
      <Tile className={classes} direction="row" responsive={false} align="start">
        <Box
          className={`${CLASS_ROOT}__thumbnail`}
          style={thumbnailStyles}
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
  thumbnail: PropTypes.string.isRequired
};
