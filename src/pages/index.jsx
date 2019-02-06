import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import ReactFullpage from '@fullpage/react-fullpage';

import AppLayout from '../components/AppLayout';
import HomePresentation from '../page-components/Home/Presentation';
import About from '../page-components/Home/About';
import Services from '../page-components/Home/Services';
import FeaturedIn from '../page-components/Home/FeaturedIn';
import OurStaff from '../page-components/Home/OurStaff';
import OurStudents from '../page-components/Home/OurStudents';
import OurProjects from '../page-components/Home/OurProjects';
import OurClients from '../page-components/Home/OurClients';
import Contact from '../page-components/Home/Contact';
import { navbarIds } from '../components/Navbar';
import { StaticQuery, graphql } from 'gatsby';

const wrapper = () => {
  require('fullpage.js/vendors/scrolloverflow');
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
const Section = ({ children }) => <div className="section">{children}</div>;

function Home(props) {
  console.log(props);
  const { siteDescription } = props.data.markdownRemark.frontmatter;

  return (
    <AppLayout>
      <Helmet title={'Pixel Perfect VFX'} titleTemplate={''}>
        <meta
          name="description"
          content={siteDescription}
        />
      </Helmet>

      <Layout>
        <ReactFullpage
          licenseKey="Key"
          anchors={[
            'home',
            navbarIds.about,
            navbarIds.services,
            navbarIds.featured,
            navbarIds.projects,
            'customers',
            navbarIds.contact,
          ]}
          scrollOverflow
          pluginWrapper={wrapper}
          render={({ fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Section data-anchor={navbarIds.home}>
                  <HomePresentation api={fullpageApi} />
                </Section>
                <Section data-anchor={navbarIds.about}>
                  <About />
                </Section>
                <Section data-anchor={navbarIds.services}>
                  <Services />
                </Section>
                <Section data-anchor={navbarIds.featured}>
                  <FeaturedIn />
                  <OurStaff />
                  <OurStudents />
                </Section>
                <Section data-anchor={navbarIds.projects}>
                  <OurProjects />
                </Section>
                <Section>
                  <OurClients />
                </Section>
                <Section data-anchor={navbarIds.contact}>
                  <Contact />
                </Section>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Layout>
    </AppLayout>
  );
}

export default props => <StaticQuery 
  query={graphql`
    query {
      markdownRemark(frontmatter: { type: { eq: "start-page" } }) {
        frontmatter {
          siteDescription
        }
      }
    }
  `}
  render={(data) => <Home data={data} {...props} />}
/>;
