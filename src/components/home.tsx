import React from 'react';
import classes from '../css/classes';

interface HomeProps {
  reanimate: boolean;
}

const Home: React.FC<HomeProps> = ({ reanimate }) => {
  const classList = reanimate
    ? classes.home
    : `${classes.home} ${classes.homeAnimation}`;
  return (
    <div className={classList}>
      <h1>Joshua Searle</h1>
    </div>
  );
};

export default Home;
