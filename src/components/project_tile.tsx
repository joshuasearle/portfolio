import React from 'react';
import { Project } from '../types';

interface ProjectTileProps {
  project: Project;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ project }) => {
  const { name, link, source, description, technologies, photo } = project;
  return (
    <div>
      <img src={photo} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
      <p>
        source:{' '}
        <a target={'#'} href={source}>
          {source}
        </a>
      </p>
      <p>
        link:{' '}
        <a target={'#'} href={link}>
          {link}
        </a>
      </p>
      <h2>Technologies</h2>
    </div>
  );
};

export default ProjectTile;
