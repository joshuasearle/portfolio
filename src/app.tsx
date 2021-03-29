import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Navbar from './components/navbar';

import { RouteObj } from './types';

const App: React.FC = () => {
  const routes: RouteObj[] = [
    { path: '/', name: 'Home', element: <Home /> },
    { path: '/about', name: 'About', element: <About /> },
    { path: '/projects', name: 'Projects', element: <Projects /> },
    { path: '/skills', name: 'Skills', element: <Skills /> },
  ];

  const links = routes.map((route) => ({ name: route.name, path: route.path }));

  const noLinkMatchRedirect = (
    <Route path='*'>{() => <Redirect to='/' />}</Route>
  );

  const routeElements = routes.map((route) => (
    <Route exact path={route.path}>
      {route.element}
    </Route>
  ));

  return (
    <Router history={createBrowserHistory()}>
      <Navbar links={links} />
      <Switch>
        {routeElements}
        {noLinkMatchRedirect}
      </Switch>
    </Router>
  );
};

export default App;
