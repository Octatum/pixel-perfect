const path = require("path");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if(!node.frontmatter || !node.frontmatter.type || node.frontmatter.type !== "project") return;

  createNodeField({
    node,
    name: "next",
    value: null
  })

  createNodeField({
    node,
    name: "previous",
    value: null
  })

  console.log(node);
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

    projects && projects.edges.forEach(({ node }) => {
      const route = node.frontmatter.title.replace(' ', '_').toLowerCase().replace(/\W/g, '');

      createPage({
        path: `/project/${route}`,
        component: projectTemplate,
        context: {
          title: node.frontmatter.title,
        }
      });
    });

    courses && courses.edges.forEach(({ node }) => {
      const route = node.frontmatter.title.replace(' ', '_').toLowerCase().replace(/\W/g, '');

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
