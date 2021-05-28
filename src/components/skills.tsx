import React from 'react';

import { techToString, allTech } from '../types';
import classes from '../css/classes';

const Skills: React.FC = () => {
  return (
    <>
      <h1 className={classes.title}>Skills</h1>
      <div className={classes.projectDesc}>
        {allTech()
          .map(techToString)
          .map((s) => (
            <p>{s}</p>
          ))}
      </div>
    </>
  );
};

export default Skills;
