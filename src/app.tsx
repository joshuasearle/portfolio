import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Navbar from './components/navbar';

type RouteObj = {
  path: string;
  name: string;
  element: JSX.Element;
};

const x = <Home />;

const App: React.FC = () => {
  const routes: RouteObj[] = [
    { path: '/', name: 'Home', element: <Home /> },
    { path: '/about', name: 'About', element: <About /> },
    { path: '/projects', name: 'Projects', element: <Projects /> },
    { path: '/skills', name: 'Skills', element: <Skills /> },
  ];

  const routeElements = routes.map((route) => (
    <Route path={route.path}>{route.element}</Route>
  ));
  return (
    <Router history={createBrowserHistory()}>
      <Navbar />
      <Switch>{routeElements}</Switch>
    </Router>
  );
};

export default App;
