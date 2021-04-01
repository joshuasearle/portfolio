export type RouteObj = {
  path: string;
  name: string;
  element: JSX.Element;
};

export type RouteName = {
  path: string;
  name: string;
}

export enum Technology {
  JavaScript,
  React,
  Nodejs,
  TypeScript,
  Webpack,
  Websockets,
  Java,
  Python,
  HTML,
  CSS,
  Bootstrap,
  Angular, 
  Chartjs,
  Redux,
  Mongodb,
  GoogleCloudFunctions,
  Express
}

export type Project = {
  name: string;
  description: string;
  link?: string;
  source: string;
  technologies: Technology[];
}