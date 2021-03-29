import React from 'react';
import { Link } from 'react-router-dom';

import { RouteName } from '../types';

interface NavbarProps {
  links: RouteName[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const linkElements = links.map((link) => (
    <Link to={link.path}>{link.name}</Link>
  ));
  return <nav>{linkElements}</nav>;
};

export default Navbar;
