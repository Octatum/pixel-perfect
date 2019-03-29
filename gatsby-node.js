const path = require('path');

function cleanString(string) {
  return string
    .replace(' ', '_')
    .toLowerCase()
    .replace(/\W/g, '');
}

function createRouteFields({ createNodeField, nodes }) {
  const nodesLength = nodes.length;

  nodes
    .sort((nodeA, nodeB) => nodeA.index - nodeB.index)
    .forEach((node, index) => {
      const previousIndex = (index + nodesLength - 1) % nodesLength;
      const nextIndex = (index + 1) % nodesLength;
      const previousNode = nodes[previousIndex];
      const nextNode = nodes[nextIndex];
      const previousRoute = cleanString(previousNode.frontmatter.title);
      const nextRoute = cleanString(nextNode.frontmatter.title);

      createNodeField({
        node,
        name: 'previousRoute',
        value: previousRoute,
      });

      createNodeField({
        node,
        name: 'nextRoute',
        value: nextRoute,
      });
    });
}

exports.sourceNodes = ({ actions, getNodes }) => {
  const { createNodeField } = actions;
  const projectNodes = getNodes().filter(
    node =>
      node.internal.type === 'MarkdownRemark' &&
      node.frontmatter.type === 'project'
  );

  const courseNodes = getNodes().filter(
    node =>
      node.internal.type === 'MarkdownRemark' &&
      node.frontmatter.type === 'courses'
  );

  createRouteFields({ nodes: projectNodes, createNodeField });
  createRouteFields({ nodes: courseNodes, createNodeField });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions,
    projectTemplate = path.resolve(`src/templates/ProjectTemplate.jsx`),
    courseTemplate = path.resolve(`src/templates/CourseTemplate.jsx`);

  return graphql(`
    {
      projects: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "project" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }

      courses: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "courses" } } }
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
      return Promise.reject(result.errors);
    }

    const { courses, projects } = result.data;

    projects &&
      projects.edges.forEach(({ node }) => {
        const route = cleanString(node.frontmatter.title);

        createPage({
          path: `/project/${route}`,
          component: projectTemplate,
          context: {
            ...node.frontmatter,
          },
        });
      });

    courses &&
      courses.edges.forEach(({ node }) => {
        const route = cleanString(node.frontmatter.title);

        createPage({
          path: `/course/${route}`,
          component: courseTemplate,
          context: {
            title: node.frontmatter.title,
          },
        });
      });
  });
};
