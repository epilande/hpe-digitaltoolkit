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
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Footer
              pad="medium"
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
                    {title: 'Find a Partner', url: '#'},
                  ]
                },
                {
                  header: 'Communities',
                  links: [
                    {title: 'Developer Forums', url: '#'},
                    {title: 'Enterprise Business', url: '#'},
                  ]
                },
                {
                  header: 'Customer Resources',
                  links: [
                    {title: 'Enterprise Store', url: '#'},
                    {title: 'Public Sector Store', url: '#'},
                    {title: 'Education & Training', url: '#'},
                    {title: 'Email Signup', url: '#'},
                  ]
                }
              ]}
              logo={{icon: <Logo />, url: '#'}}
              social={[
                {icon: <SocialLinkedinIcon />, url: '#'},
                {icon: <SocialTwitterIcon />, url: '#'},
                {icon: <SocialFacebookIcon />, url: '#'}
              ]}
              legal={[
                {icon: '', title: 'United States', url: '#'},
                {title: 'Privacy', url: '#'},
                {title: 'Terms of Use', url: '#'},
                {title: 'Cookies', url: '#'},
                {title: '© 2016 Hewlett Packard Enterprise'},
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
                    {title: 'Find a Partner', url: '#'},
                  ]
                },
                {
                  header: 'Communities',
                  links: [
                    {title: 'Developer Forums', url: '#'},
                    {title: 'Enterprise Business', url: '#'},
                  ]
                },
                {
                  header: 'Customer Resources',
                  links: [
                    {title: 'Enterprise Store', url: '#'},
                    {title: 'Public Sector Store', url: '#'},
                    {title: 'Education & Training', url: '#'},
                    {title: 'Email Signup', url: '#'},
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
                {icon: '', title: 'United States', url: '#'},
                {title: 'Privacy', url: '#'},
                {title: 'Terms of Use', url: '#'},
                {title: 'Cookies', url: '#'},
                {title: '© 2016 Hewlett Packard Enterprise'},
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
