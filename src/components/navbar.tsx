import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { RouteName } from '../types';
import classes from '../css/classes';
import useClicked from '../hooks/use_clicked';

interface NavbarProps {
  links: RouteName[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [clicked, click] = useClicked();

  // Set the css class list based on navbarClicked state
  const classList = clicked
    ? classes.navbar
    : `${classes.navbar} ${classes.navbarAnimation}`;

  // Create list of links
  const linkElements = links.map((link) => (
    <Link to={link.path}>{link.name}</Link>
  ));

  return (
    <nav onClick={click} className={classList}>
      {linkElements}
    </nav>
  );
};

export default Navbar;
