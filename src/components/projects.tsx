import React from 'react';

import ProjectTile from './project_tile';

import projects from '../data/projects';

const Projects: React.FC = () => {
  const projectElements = projects.map((p) => <ProjectTile project={p} />);
  return <div>{projectElements}</div>;
};

export default Projects;
