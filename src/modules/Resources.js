// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Tiles from 'grommet/components/Tiles';
import Paragraph from 'grommet/components/Paragraph';
import ResourcesTile from './ResourcesTile';

const CLASS_ROOT = 'resources';

export default class Resources extends Component {
  render () {
    const { header, subHeader, tiles } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    let subHeaderMarkup;
    if (subHeader) {
      subHeaderMarkup = (
        <Paragraph size="large" margin="none">
          {subHeader}
        </Paragraph>
      );
    }

    const resourceTiles = tiles.map((tile, key) => {
      return <ResourcesTile key={key} {...tile} />;
    });

    return (
      <Box className={classes}>
        <Box pad={{vertical: 'medium'}}>
          <Heading tag="h3" margin="none">{header}</Heading>
          {subHeaderMarkup}
        </Box>
        <Tiles flush={false} pad="none">
          {resourceTiles}
        </Tiles>
      </Box>
    );
  }
};

Resources.propTypes = {
  header: PropTypes.string,
  subHeader: PropTypes.string,
  tiles: PropTypes.arrayOf(PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string
  })).isRequired
};

Resources.defaultProps = {
  header: 'Resources'
};
