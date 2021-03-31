import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import Button from './button';

import classes from '../css/classes';

interface HomeProps {
  reanimate: boolean;
}

const Home: React.FC<HomeProps> = ({ reanimate }) => {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  if (redirect) {
    // Save home on browser history
    history.push('/');
    return <Redirect to={'/projects'} />;
  }

  const classList = reanimate
    ? classes.home
    : `${classes.home} ${classes.homeAnimation}`;
  const buttonText = 'See my Projects';
  return (
    <div className={classList}>
      <h1>Joshua Searle</h1>
      <Button onClick={() => setRedirect(true)} text={buttonText}></Button>
    </div>
  );
};

export default Home;
