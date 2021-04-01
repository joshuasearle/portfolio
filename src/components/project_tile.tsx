import React from 'react';

import { Project } from '../types';
import classes from '../css/classes';

interface ProjectTileProps {
  project: Project;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project }) => {
  const { name, link, source, description, technologies, photo } = project;

  const linkElement = link ? (
    <p>
      <a className={classes.link} target={'#'} href={link}>
        Link to App
      </a>
    </p>
  ) : null;

  return (
    <div className={classes.projectTile}>
      <div className={classes.tileInfo}>
        <h1 className={classes.projectTileTitle}>{name}</h1>
        <p>
          <a className={classes.link} target={'#'} href={source}>
            Source code
          </a>
        </p>
        {linkElement}
      </div>
      <div className={classes.projectTileImg}>
        <img src={photo} alt={name} />
      </div>
    </div>
  );
};

export default ProjectTile;
