export type RouteObj = {
  path: string;
  name: string;
  element: JSX.Element;
};

export type RouteName = {
  path: string;
  name: string;
};

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
  Express,
}

export const techToString = (tech: Technology) => {
  if (tech === Technology.JavaScript) return 'JavaScript';
  if (tech === Technology.React) return 'React';
  if (tech === Technology.Nodejs) return 'Nodejs';
  if (tech === Technology.TypeScript) return 'TypeScript';
  if (tech === Technology.Webpack) return 'Webpack';
  if (tech === Technology.Websockets) return 'Websockets';
  if (tech === Technology.Java) return 'Java';
  if (tech === Technology.Python) return 'Python';
  if (tech === Technology.HTML) return 'HTML';
  if (tech === Technology.CSS) return 'CSS';
  if (tech === Technology.Bootstrap) return 'Bootstrap';
  if (tech === Technology.Angular) return 'Angular';
  if (tech === Technology.Chartjs) return 'Chartjs';
  if (tech === Technology.Mongodb) return 'Mongodb';
  if (tech === Technology.GoogleCloudFunctions) return 'GoogleCloudFunctions';
  if (tech === Technology.Express) return 'Express';
  if (tech === Technology.Redux) return 'Redux';
};

export type Project = {
  name: string;
  description: string;
  link?: string;
  source: string;
  technologies: Technology[];
  photo: any;
};
