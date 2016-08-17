// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Footer from '../../modules/Footer';

Footer.displayName = 'Footer';

export default class FooterDoc extends Component {
  render () {
    return (
      <DocsArticle title="Footer" colorIndex="neutral-3">

        <p>Footer component.</p>
        <pre><code className="html hljs xml">
          {`<Footer />`}
        </code></pre>

        <section>
          <h2>Footer Options</h2>
          <dl>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Footer pad="medium" />
          } />
        </section>
      </DocsArticle>
    );
  }
};

FooterDoc.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};
