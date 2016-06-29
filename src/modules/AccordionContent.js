// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const CLASS_ROOT = 'accordion-panel';

export default class AccordionContent extends Component {
  componentWillEnter (callback) {
    const node = ReactDOM.findDOMNode(this);
    const contentHeight = node.clientHeight; // save height
    node.classList.remove('animate');
    node.style.height = 0;
    setTimeout(() => {
      node.classList.add('animate');
      node.style.height = `${contentHeight}px`;
      setTimeout(callback, parseFloat(getComputedStyle(node).transitionDuration) * 1000);
    });
  }

  componentDidEnter () {
    const node = ReactDOM.findDOMNode(this);
    node.style.height = '';
  }

  componentWillLeave (callback) {
    const node = ReactDOM.findDOMNode(this);
    const contentHeight = node.clientHeight; // save height
    node.style.height = `${contentHeight}px`;
    setTimeout(() => {
      node.classList.add('animate');
      node.style.height = 0;
      // on complete, call callback, should match transition duration
      setTimeout(callback, parseFloat(getComputedStyle(node).transitionDuration) * 1000);
    });
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
