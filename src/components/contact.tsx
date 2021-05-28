import axios from 'axios';
import React, { useState } from 'react';
import github from '../assets/github.jpg';

import linkedin from '../assets/linkedin.jpg';

import classes from '../css/classes';

const Contact: React.FC = () => {
  return (
    <>
      <h1 className={classes.title}>Contact</h1>
      <div className={[classes.projectDesc, classes.contactPieces].join(' ')}>
        <div className={classes.contactPiece}>
          <a href={'https://github.com/joshuasearle'} target={'#'}>
            <img
              className={classes.contactImage}
              src={github}
              alt={'GitHub logo'}
            />
          </a>
          GitHub
        </div>
        <div className={classes.contactPiece}>
          <a
            href={'https://www.linkedin.com/in/josh-searle-253a6b209/'}
            target={'#'}
          >
            <img
              className={classes.contactImage}
              src={linkedin}
              alt={'linkedin logo'}
            />
          </a>
          Linkedin
        </div>
        <div className={classes.contactPiece}>
          Email: joshryansearle@gmail.com
        </div>
      </div>
    </>
  );
};

export default Contact;
