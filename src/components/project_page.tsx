import React from 'react';
import { useParams } from 'react-router-dom';

import classes from '../css/classes';
import projects from '../data/projects';
import { techToString } from '../types';

interface ProjectProps {}

const Project: React.FC<ProjectProps> = () => {
  const id = +useParams<{ id: string }>().id;

  // Minus one to move from zero to one indexing
  const project = projects[id - 1];
  if (isNaN(id) || !project) return <h1>Page not found </h1>;

  return (
    <>
      <h1 className={classes.projectTitle}>{project.name}</h1>
      <img
        className={classes.projectImage}
        src={project.photo}
        alt={project.name}
      />
      <div className={classes.projectDesc}>
        <strong>Project Description</strong>
        <br />
        {project.description}
        <br />
        <br />
        <strong>Technologies Used:</strong>
        <br />
        {project.technologies.map(techToString).join(', ')}
      </div>
      <div className={classes.projectButtons}>
        {!project.link ? null : (
          <a className={classes.projectButton} href={project.link} target={'#'}>
            View Project
          </a>
        )}
        <a className={classes.projectButton} href={project.source} target={'#'}>
          View Source Code
        </a>
      </div>
    </>
  );
};

export default Project;
