import React from 'react';
import { Link } from 'react-router-dom';

import { RouteName } from '../types';
import classes from '../css/classes';

interface NavbarProps {
  links: RouteName[];
  onClick: () => void;
  reanimate: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ links, onClick, reanimate }) => {
  // Set the css class list based on reanimate
  const classList = reanimate
    ? classes.navbar
    : `${classes.navbar} ${classes.navbarAnimation}`;

  // Create list of links
  const linkElements = links.map((link) => (
    <Link to={link.path}>{link.name}</Link>
  ));

  return (
    <nav onClick={onClick} className={classList}>
      {linkElements}
    </nav>
  );
};

export default Navbar;
