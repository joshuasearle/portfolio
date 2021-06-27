const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 8080;

const links = require('./data/links');
const projectData = require('./data/projectData');

app.use(morgan('tiny'));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { page: 'home', links });
});

app.get('/about', (req, res) => {
  res.render('about', { page: 'about', links });
});

app.get('/projects', (req, res) => {
  res.render('projects', { page: 'projects', links, projectData: projectData });
});

app.get('/projects/:slug', (req, res) => {
  const slug = req.params.slug;
  const project = projectData[slug];
  if (!project) res.redirect('/');
  res.render('project', { page: 'projects', project, links });
});

app.get('/skills', (req, res) => {
  res.render('skills', { page: 'skills', links });
});

app.get('/contact', (req, res) => {
  res.render('contact', { page: 'contact', links });
});

app.post('/contact', (req, res) => {});

app.use('/', (req, res) => {
  res.redirect('/');
});

app.listen(port, (err) => {
  if (err) console.error(err);
  else console.log(`Listening on port ${port}`);
});
