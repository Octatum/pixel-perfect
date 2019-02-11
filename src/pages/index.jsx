import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';

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
import { StaticQuery, graphql } from 'gatsby';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home(props) {
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
        <HomePresentation />
        <About />
        <Services />
        <FeaturedIn />
        <OurStaff />
        <OurStudents />
        <OurProjects />
        <OurClients />
        <Contact />
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
