// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Footer from '../../modules/Footer';
import Logo from '../../examples/Logo';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';

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
            <dt><code>darkTheme              true|false</code></dt>
            <dd>Text will be light-colored if true, dark if false.</dd>
            <dt><code>directory              {`[{
                          header: {string},
                          links: [{
                            title: {string},
                            url: {string}
                          }, ...]
                        },
                        ...]`}</code></dt>
            <dd>An array of links. Required.</dd>
            <dt><code>logo                   {`{icon: {node}, url: {string}}`}</code></dt>
            <dd>Logo on footer. <code>icon</code> &amp; <code>url</code> required.</dd>
            <dt><code>social                 {`[{icon: {node}, url: {string}}, ...]`}</code></dt>
            <dd>Social media icons on footer. <code>icon</code> &amp; <code>url</code> required.</dd>
            <dt><code>legal                  {`[{icon: {node}, title: {string}, url: {string}}, ...]`}</code></dt>
            <dd>Legal section on footer. <code>title</code> &amp; <code>url</code> required.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Footer
              pad="medium"
              darkTheme={true}
              directory={[
                {
                  header: 'Corporate',
                  links: [
                    {title: 'Accessibility', url: '#'},
                    {title: 'Careers', url: '#'},
                    {title: 'Contact Us', url: '#'},
                    {title: 'Corporate Responsibility', url: '#'},
                    {title: 'Events', url: '#'},
                    {title: 'Hewlett Packard Labs', url: '#'},
                    {title: 'Investor Relations', url: '#'},
                    {title: 'Leadership', url: '#'},
                    {title: 'Newsroom', url: '#'},
                    {title: 'Sitemap', url: '#'}
                  ]
                },
                {
                  header: 'Partners',
                  links: [
                    {title: 'Partners Program', url: '#'},
                    {title: 'Find a Partner', url: '#'}
                  ]
                },
                {
                  header: 'Communities',
                  links: [
                    {title: 'Developer Forums', url: '#'},
                    {title: 'Enterprise Business', url: '#'}
                  ]
                },
                {
                  header: 'Customer Resources',
                  links: [
                    {title: 'Enterprise Store', url: '#'},
                    {title: 'Public Sector Store', url: '#'},
                    {title: 'Education & Training', url: '#'},
                    {title: 'Email Signup', url: '#'}
                  ]
                }
              ]}
              logo={{icon: <Logo reverse={true} />, url: '#'}}
              social={[
                {icon: <SocialLinkedinIcon />, url: '#'},
                {icon: <SocialTwitterIcon />, url: '#'},
                {icon: <SocialFacebookIcon />, url: '#'}
              ]}
              legal={[
                {title: 'United States', url: '#'},
                {title: 'Privacy', url: '#'},
                {title: 'Terms of Use', url: '#'},
                {title: 'Cookies', url: '#'},
                {title: '© 2016 Hewlett Packard Enterprise'}
              ]}
            />
          } />

          <Example name="Dark theme" code={
            <Footer
              pad="medium"
              darkTheme={true}
              directory={[
                {
                  header: 'Corporate',
                  links: [
                    {title: 'Accessibility', url: '#'},
                    {title: 'Careers', url: '#'},
                    {title: 'Contact Us', url: '#'},
                    {title: 'Corporate Responsibility', url: '#'},
                    {title: 'Events', url: '#'},
                    {title: 'Hewlett Packard Labs', url: '#'},
                    {title: 'Investor Relations', url: '#'},
                    {title: 'Leadership', url: '#'},
                    {title: 'Newsroom', url: '#'},
                    {title: 'Sitemap', url: '#'}
                  ]
                },
                {
                  header: 'Partners',
                  links: [
                    {title: 'Partners Program', url: '#'},
                    {title: 'Find a Partner', url: '#'}
                  ]
                },
                {
                  header: 'Communities',
                  links: [
                    {title: 'Developer Forums', url: '#'},
                    {title: 'Enterprise Business', url: '#'}
                  ]
                },
                {
                  header: 'Customer Resources',
                  links: [
                    {title: 'Enterprise Store', url: '#'},
                    {title: 'Public Sector Store', url: '#'},
                    {title: 'Education & Training', url: '#'},
                    {title: 'Email Signup', url: '#'}
                  ]
                }
              ]}
              logo={{icon: <Logo reverse={true} />, url: '#'}}
              social={[
                {icon: <SocialLinkedinIcon />, url: '#'},
                {icon: <SocialTwitterIcon />, url: '#'},
                {icon: <SocialFacebookIcon />, url: '#'}
              ]}
              legal={[
                {title: 'United States', url: '#'},
                {title: 'Privacy', url: '#'},
                {title: 'Terms of Use', url: '#'},
                {title: 'Cookies', url: '#'},
                {title: '© 2016 Hewlett Packard Enterprise'}
              ]}
            />
          } />

          <Example name="Without directory links" code={
            <Footer
              pad="medium"
              logo={{icon: <Logo />, url: '#'}}
              social={[
                {icon: <SocialLinkedinIcon />, url: '#'},
                {icon: <SocialTwitterIcon />, url: '#'},
                {icon: <SocialFacebookIcon />, url: '#'}
              ]}
              legal={[
                {title: 'United States', url: '#'},
                {title: 'Privacy', url: '#'},
                {title: 'Terms of Use', url: '#'},
                {title: 'Cookies', url: '#'},
                {title: '© 2016 Hewlett Packard Enterprise'}
              ]}
            />
          } />
        </section>
      </DocsArticle>
    );
  }
};

FooterDoc.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};
