const path = require('path');

function cleanString(string) {
  return string
    .replace(' ', '_')
    .toLowerCase()
    .replace(/\W/g, '');
}

exports.sourceNodes = ({ actions, getNodes }) => {
  const { createNodeField } = actions;
  const projectNodes = getNodes().filter(
    node =>
      node.internal.type === 'MarkdownRemark' &&
      node.frontmatter.type === 'project'
  );
  const projectsLength = projectNodes.length;

  const courseNodes = getNodes().filter(
    node =>
      node.internal.type === 'MarkdownRemark' &&
      node.frontmatter.type === 'courses'
  );
  const coursesLength = courseNodes.length;

  projectNodes
    .sort((nodeA, nodeB) => nodeA.index - nodeB.index)
    .forEach((node, index) => {
      const previousProjectIndex =
        (index + projectsLength - 1) % projectsLength;
      const nextProjectIndex = (index + 1) % projectsLength;
      const previousProjectNode = projectNodes[previousProjectIndex];
      const nextProjectNode = projectNodes[nextProjectIndex];
      const previousProjectRoute = cleanString(
        previousProjectNode.frontmatter.title
      );
      const nextProjectRoute = cleanString(nextProjectNode.frontmatter.title);

      createNodeField({
        node,
        name: 'previousProjectRoute',
        value: previousProjectRoute,
      });

      createNodeField({
        node,
        name: 'nextProjectRoute',
        value: nextProjectRoute,
      });
    });

  courseNodes
    .sort((nodeA, nodeB) => nodeA.index - nodeB.index)
    .forEach((node, index) => {
      const previousIndex = (index + coursesLength - 1) % coursesLength;
      const nextIndex = (index + 1) % coursesLength;
      const previousNode = courseNodes[previousIndex];
      const nextNode = courseNodes[nextIndex];
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
