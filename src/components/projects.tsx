import React from 'react';

import ProjectTile from './project_tile';

import projects from '../data/projects';
import classes from '../css/classes';

const Projects: React.FC = () => {
  const projectElements = projects.map((p) => <ProjectTile project={p} />);
  return (
    <div>
      <h1 className={classes.title}>My Projects</h1>
      <div className={classes.projects}>{projectElements}</div>
    </div>
  );
};

export default Projects;
