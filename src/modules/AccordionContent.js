// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const CLASS_ROOT = 'accordion-panel';

export default class AccordionContent extends Component {
  componentWillEnter (callback) {
    const node = ReactDOM.findDOMNode(this);
    const contentHeight = node.clientHeight; // save height
    node.classList.add('close');
    setTimeout(() => {
      node.classList.add('animate-in');
      node.style.height = `${contentHeight}px`;
      node.classList.remove('close');
      callback();
    });

    console.log('node.clientHeight: ', contentHeight);
  }

  componentDidEnter () {
    // const node = ReactDOM.findDOMNode(this);
    // node.style.height = '';
  }

  componentWillLeave (callback) {
    // const node = ReactDOM.findDOMNode(this);
    console.log('component exit');
    // on complete, call callback, should match transition duration
    // setTimeout(callback, 500);
    callback();
  }

  render () {
    const { children } = this.props;

    const classes = classnames(
      CLASS_ROOT,
      this.props.className
    );

    return (
      <div className={classes} >
        {children}
      </div>
    );
  }
};

AccordionContent.propTypes = {
  children: PropTypes.element.isRequired
};
