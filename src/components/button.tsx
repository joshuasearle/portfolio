import React from 'react';

import classes from '../css/classes';

interface ButtonProps {
  onClick: () => any;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
