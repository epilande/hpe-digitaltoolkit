// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Tile from 'grommet/components/Tile';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';

const CLASS_ROOT = 'resources-tile';

export default class ResourcesTile extends Component {
  render () {
    const { thumbnail, title, description } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    return (
      <Tile className={classes} direction="row">
        <Image className={`${CLASS_ROOT}__image`} src={thumbnail}  />
        <Box pad="medium">
          <Heading tag="h6" margin="none">{title}</Heading>
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
