export interface PortfolioItem {
  technologies: Array<Tech>;
  description: string;
  myWork: Array<string>;
  title: string;
  img: string;
  projectType: ProjectType; 
  
  demoURL?: string;
  repoURL?: string;
  infoURL?: string;

  expanded?: boolean;
}

export type Tech =
  "Ember" |
  "Firebase" |
  "Semantic UI" |
  "Node.js" |
  "SVG" |
  "Gulp" |
  "Glimmer" |
  "WordPress" |
  "GoogleMapsAPI"

export type ProjectType = 
  "Website" |
  "Addon" |
  "Consulting"

export default [
  {
    title: 'Scribe',
    technologies: ["Ember", "WordPress"],
    description: "Inovative theme for WordPress featuring instant transitions, efficient image loading, loading content in advance and real-time customization.",
    myWork: ['Content Strategy', 'Integrating Ember with WordPress', 'Quality Assurance', 'Performance optimizations', 'Marketing', 'Business planning'],
    img: 'http://lorempixel.com/1001/1000',
  },{
    title: 'Interactive UI for PriceFX',
    technologies: ["Ember", "Semantic UI", "Node.js"],
    description: "Interactive UI for leading SaaS pricing and CQP solution provider.",
    myWork: ['Analysis of large sets of data', 'Creating comprehensive UI', 'Testing', 'Interactive visualisations'],
    img: 'http://lorempixel.com/1002/1000',
  },{
    title: 'Autora',
    technologies: ["Ember", "Firebase", "Semantic UI", "Node.js", "SVG"],
    description: "Autora aims to be a collaborative writing platform. Autora will provide reactive environment where everyeone can easily orientate what's going on and join the fun. This should be achieved by making Autora a single page application built with EmberJS and using Firebase hosting which offers quick WebSockets based client-server communication.",
    myWork: ['Interactive web application', 'SVG animation', 'Real-time updates and sync'],
    img: 'http://lorempixel.com/1003/1000',
  },{
    title: 'Topmonks.com',
    technologies: ["Gulp", "Node.js", "SVG"],
    description: 'Landing page for software development company. It has advanced layout but it is still responsive and loading fast.',
    myWork: ['HTML/CSS coding', 'Animations', 'Tooling', 'Non-blocking CSS'],
    img: 'http://lorempixel.com/1007/1000',
  },{
    title: 'Personal portfolio',
    technologies: ["Glimmer", "Gulp", "Node.js"],
    description: 'This portfolio is a showcase of all my skills. It has been designed by code and made interactive with JavaScript and still highly optimized for all devices.',
    myWork: ['Content Strategy', 'Design by code' ,'HTML/CSS coding', 'Animations', 'Interactive User Interface', 'Performance optimizations'],
    img: 'http://lorempixel.com/1004/1000',
  },{
    title: 'Open Finance',
    technologies: ["GoogleMapsAPI"],
    description: "Open Finance is a singificant finance consulting company based in Prague. First version of the website has been done in late 2014 and changes to functionality and images have been introduced in 2015. Website is fully responsive and even though it is image heavy, it's size is not particularly high",
    myWork: ['Interactive Google Map', 'Responsive images', 'Animations'],
    img: 'http://lorempixel.com/1005/1000',
  },{
    title: 'Wisephora',
    technologies: ["Gulp"],
    description: 'Web for a conference held in Prague. I did early version of the website and set up tooling for all kinds of optimizations.',
    myWork: ['Tooling', 'Performance optimizations'],
    img: 'http://lorempixel.com/606/600',
  }
];