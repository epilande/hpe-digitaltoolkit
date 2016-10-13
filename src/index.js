// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

require('autotrack');
require('./lib/modernizr');

if (! Modernizr.flexbox ||
  ! Modernizr.rgba) {
  alert('Unfortunately, your browser appears to be too old. ' +
    'We recommend the latest version of Chrome, Firefox, Safari, or Internet Explorer. ' +
    'If you are using the latest Internet Explorer, you will need to turn off Compatibility Mode.');
}

var React = require('react');
var ReactDOM = require('react-dom');

import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

var themeGroups = /docs\/([^\/]+)\/?/.exec(window.location.pathname);

var theme = '';
if (themeGroups && themeGroups.length > 1) {
  theme = themeGroups[1];
  var possibleThemes = 'aruba,hpe,hpinc';
  if (possibleThemes.indexOf(theme) === -1) {
    theme = '';
  }
}

var themeLink = document.getElementById('theme-link');
var themeUrl = '/docs/' + (theme === '' ? 'vanilla' : theme) + '.min.css';
themeLink.setAttribute('href', themeUrl);

var rootPath = '/docs/' + (theme === '' ? '' : theme + '/');

var routes = require('./routes')(rootPath);

var onRouteUpdate = function () {
  var docElements = document.querySelectorAll('.article');
  if (docElements.length > 0 && window.location.hash === '') {
    docElements[0].scrollTop = 0;
  }
};

var history = useRouterHistory(createHistory)();

var element = document.getElementById('content');
ReactDOM.render(<Router onUpdate={onRouteUpdate} routes={routes} history={history} />, element);

document.body.classList.remove('loading');
