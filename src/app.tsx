import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createHashHistory } from 'history';

import Home from './components/home';
import Contact from './components/contact';
import Skills from './components/skills';
import Projects from './components/projects';
import Navbar from './components/navbar';

import { RouteObj } from './types';
import classes from './css/classes';
import useClicked from './hooks/use_clicked';

import background from './assets/background.jpg';

const history = createHashHistory();

const App: React.FC = () => {
  const [reanimate, click] = useClicked();

  const routes: RouteObj[] = [
    { path: '/', name: 'Home', element: <Home reanimate={reanimate} /> },
    { path: '/projects', name: 'Projects', element: <Projects /> },
    { path: '/skills', name: 'Skills', element: <Skills /> },
    { path: '/contact', name: 'Contact', element: <Contact /> },
  ];

  const links = routes.map((route) => ({ name: route.name, path: route.path }));

  const routeElements = routes.map((route) => (
    <Route exact path={route.path}>
      {route.element}
    </Route>
  ));

  return (
    <Router history={history}>
      <Navbar onClick={click} reanimate={reanimate} links={links} />
      <div className={classes.background}>
        <img src={background} />
      </div>
      <Switch>{routeElements}</Switch>
    </Router>
  );
};

export default App;
