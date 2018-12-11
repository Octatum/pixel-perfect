const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const
    { createPage } = actions,
    projectTemplate = path.resolve(`src/templates/ProjectTemplate.jsx`);

  return graphql(`
    {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "project"}}}
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

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const route = node.frontmatter.title.replace(' ', '_').toLowerCase().replace(/\W/g, '');

      createPage({
        path: `/project/${route}`,
        component: projectTemplate,
        context: {
          title: node.frontmatter.title
        }
      });
    });
  });
}
