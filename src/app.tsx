import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Navbar from './components/navbar';

import { RouteObj } from './types';
import classes from './css/classes';
import useClicked from './hooks/use_clicked';

import background from './assets/background.jpg';

const history = createBrowserHistory();

const App: React.FC = () => {
  const [reanimate, click] = useClicked();

  const routes: RouteObj[] = [
    { path: '/', name: 'Home', element: <Home reanimate={reanimate} /> },
    { path: '/about', name: 'About', element: <About /> },
    { path: '/projects', name: 'Projects', element: <Projects /> },
    { path: '/skills', name: 'Skills', element: <Skills /> },
  ];

  const links = routes.map((route) => ({ name: route.name, path: route.path }));

  const noLinkMatchRedirect = (
    <Route path='*'>{() => <Redirect to='/home' />}</Route>
  );

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
      <Switch>
        <Route exact path={'/'}>
          <Home reanimate={reanimate} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
