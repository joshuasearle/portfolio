import React from 'react';
import { Link } from 'react-router-dom';

import { RouteName } from '../types';
import classes from '../css/classes';

interface NavbarProps {
  links: RouteName[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const linkElements = links.map((link) => (
    <Link to={link.path}>{link.name}</Link>
  ));
  return <nav className={classes.navbar}>{linkElements}</nav>;
};

export default Navbar;
