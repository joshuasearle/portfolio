import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import ProjectTile from './project_tile';

import projects from '../data/projects';
import classes from '../css/classes';

const Projects: React.FC = () => {
  const projectElements = projects.map((p, i) => (
    <ProjectTile project={p} projectIndex={i} key={i} />
  ));
  return (
    <div>
      <h1 className={classes.title}>My Projects</h1>
      <div className={classes.projects}>{projectElements}</div>
    </div>
  );
};

export default Projects;
