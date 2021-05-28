import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';

import { Project } from '../types';
import classes from '../css/classes';

interface ProjectTileProps {
  project: Project;
  projectIndex: number;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project, projectIndex }) => {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  if (redirect) {
    // Save projects on browser history
    history.push('/projects');
    return <Redirect to={`/projects/${projectIndex + 1}`} />;
  }

  const { name, link, source, description, technologies, photo } = project;

  const linkElement = link ? (
    <p>
      <a className={classes.link} target={'#'} href={link}>
        Link to App
      </a>
    </p>
  ) : null;

  return (
    <div onClick={() => setRedirect(true)} className={classes.projectTile}>
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
