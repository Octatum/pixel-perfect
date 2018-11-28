const path = require("path");

const courseTemplate = path.resolve('src/templates/Course.jsx');
const projectSpotlightTemplate = path.resolve(`src/templates/ProjectSpotlight.jsx`);

const getAllFilesQuery = `
  query GetAllContentFiles {
    projects: allProjectsJson {
      edges {
        node {
          path
        }
      }
    }
    
    courses: allCoursesJson {
      edges {
        node {
          path
        }
      }
    }
  }
`;

const createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(getAllFilesQuery).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.projects.edges.forEach(({node}) => createProjectPage(node, createPage));
    result.data.courses.edges.forEach(({node}) => createCoursePage(node, createPage));
  });
};

function createProjectPage(node, createPage) {
  createPage({
    path: `portfolio/${node.path}`,
    component: projectSpotlightTemplate,
    context: {
      route: node.path
    }
  });
}

function createCoursePage(node, createPage) {
  createPage({
    path: `course/${node.path}`,
    component: courseTemplate,
    context: {
      route: node.path
    }
  });
}