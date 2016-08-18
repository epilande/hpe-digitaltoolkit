// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Resources = require('../../modules/Resources');

Resources.displayName = 'Resources';

var inline = "<Resources ... />";

var ResourcesDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _renderCode(name, jsx) {
    return (
      <div>
        <h3>{name}</h3>
        <div className="example">
          {jsx}
        </div>
        <pre><code className="html hljs xml">
          {jsxToString(jsx)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var simpleResources = (
      <Resources
        tiles={[
          {
            thumbnail: '/docs/img/resource-img-1.png',
            title: 'Brochure',
            description: 'Enable workplace productivity HPE Transformation Workshop',
            link: '/docs/hpe/develop/resources'
          },
          {
            thumbnail: '/docs/img/resource-img-2.png',
            title: 'Solution Brief',
            description: 'Digital Context Aware Solutions',
            onClick: () => console.log('Hello')
          },
          {
            thumbnail: '/docs/img/resource-img-3.png',
            title: 'Video -1:41',
            description: 'Real Academia de Bellas Artes Ehances Experience with Mobile App'
          }
        ]}
      />
    );

    return (
      <DocsArticle title="Resources" colorIndex="neutral-3">

        <p>The Resources module.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Resources Options</h2>
          <dl>
            <dt><code>tiles              {`[{thumbnail: , title: , description: }, ...]`}</code></dt>
            <dd>An array of resource tiles. Required.</dd>
          </dl>
        </section>

        <section>
          <h2>ResourcesTile Options</h2>
          <dl>
            <dt><code>thumbnail          {'{string}'}</code></dt>
            <dd>Url path to image. Required.</dd>
            <dt><code>title              {'{string}'}</code></dt>
            <dd>Resource title. Required.</dd>
            <dt><code>description        {'{string}'}</code></dt>
            <dd>Resource description. Required.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleResources)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = ResourcesDoc;
