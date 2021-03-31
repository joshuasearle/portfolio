import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { RouteName } from '../types';
import classes from '../css/classes';

interface NavbarProps {
  links: RouteName[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  // If a click occured in the last life of the navbar, it will be stored here
  const [navbarClicked, setNavbarClicked] = useState(false);

  // If navbarClicked changed from previous life of navbar, run this
  useEffect(() => {
    // If it was 'unclicked', do nothing
    if (!navbarClicked) return;
    // If it was 'clicked', set it unclicked
    // Need to time out, to make sure the page renders once without the css class,
    // otherwise, sometimes the animation does not run
    // Users cannot notice 30ms
    const MILLISECONDS_BEFORE_UPDATE = 30;
    setTimeout(() => setNavbarClicked(false), MILLISECONDS_BEFORE_UPDATE);
  }, [navbarClicked]);

  // Set the css class list based on navbarClicked state
  const classList = navbarClicked
    ? classes.navbar
    : `${classes.navbar} ${classes.navbarAnimation}`;

  // Create list of links
  const linkElements = links.map((link) => (
    <Link to={link.path}>{link.name}</Link>
  ));

  return (
    <nav onClick={() => setNavbarClicked(true)} className={classList}>
      {linkElements}
    </nav>
  );
};

export default Navbar;
