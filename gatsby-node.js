const path = require("path");

function createRouteFromString(string) {
  return string.replace(' ', '_').toLowerCase().replace(/\W/g, '');
}

exports.sourceNodes = ({ actions, getNodes }) => {
  const { createNodeField } = actions
  const projectNodes = getNodes()
    .filter(node => 
      node.internal.type === 'MarkdownRemark' &&
      node.frontmatter.type === 'project'
    )
  const projectsLength = projectNodes.length;

  projectNodes.forEach((node, index) => {
    const previousProjectIndex = (index + projectsLength - 1) % projectsLength;
    const nextProjectIndex = (index + 1) % projectsLength;
    const previousProjectNode = projectNodes[previousProjectIndex];
    const nextProjectNode = projectNodes[nextProjectIndex];
    const previousProjectRoute = createRouteFromString(previousProjectNode.frontmatter.title);
    const nextProjectRoute = createRouteFromString(nextProjectNode.frontmatter.title);

    createNodeField({
      node,
      name: 'previousProjectRoute',
      value: previousProjectRoute
    });

    createNodeField({
      node,
      name: 'nextProjectRoute',
      value: nextProjectRoute
    });
  })
}

exports.createPages = ({ actions, graphql }) => {
  const
    { createPage } = actions,
    projectTemplate = path.resolve(`src/templates/ProjectTemplate.jsx`),
    courseTemplate = path.resolve(`src/templates/CourseTemplate.jsx`);

  return graphql(`
    {      
      projects: allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "project"}}}
      ) {
        edges {
          node {
            frontmatter {
              title
              index
            }
          }
        }
      }
    
      courses: allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "course"}}}
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }  
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const { courses, projects } = result.data;
    
    projects && projects.edges.forEach(({ node }, index) => {
      const route = createRouteFromString(node.frontmatter.title);

      createPage({
        path: `/project/${route}`,
        component: projectTemplate,
        context: {
          ...node.frontmatter,
        }
      });
    });

    courses && courses.edges.forEach(({ node }) => {
      const route = createRouteFromString(node.frontmatter.title);

      createPage({
        path: `/course/${route}`,
        component: courseTemplate,
        context: {
          title: node.frontmatter.title
        }
      });
    });    
  });
}
