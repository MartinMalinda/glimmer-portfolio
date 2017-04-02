export interface PortfolioItem {
  technologies: Array<Tech>;
  description: string;
  myWork: Array<string>;
  title: string;
  img: string;
  smallImg: string;
  projectType: ProjectType; 
  
  
  demoURL?: string;
  repoURL?: string;
  infoURL?: string;

  currentSrc?: string;
  didLoadLargeImg?: boolean;
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
  "Code" |
  "Consulting"

export default [
  {
    title: 'Scribe',
    technologies: ["Ember", "WordPress"],
    description: "Inovative theme for WordPress featuring instant transitions, efficient image loading, loading content in advance and real-time customization.",
    myWork: ['Content Strategy', 'Integrating Ember with WordPress', 'Quality Assurance', 'Performance optimizations', 'Marketing', 'Business planning'],
    img: 'http://unsplash.it/1001/1000',
    smallImg: 'https://unsplash.it/200/300',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Meetserenity.com',
    technologies: ["Gulp", "VanillaJS"],
    description: "Landing page for Serenity Themes. Extremely optimized to load as quickly as possible.",
    myWork: ['Content Strategy', 'Load performance optimizations', 'Interactive content'],
    img: 'http://unsplash.it/1025/1000',
    smallImg: 'https://unsplash.it/200/299',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Interactive UI for PriceFX',
    technologies: ["Ember", "Semantic UI", "Node.js"],
    description: "Interactive UI for leading SaaS pricing and CQP solution provider.",
    myWork: ['Analysis of large sets of data', 'Creating comprehensive UI', 'Testing', 'Interactive visualisations'],
    img: 'http://unsplash.it/1002/1000',
    smallImg: 'https://unsplash.it/200/301',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Autora',
    technologies: ["Ember", "Firebase", "Semantic UI", "Node.js", "SVG"],
    description: "Autora aims to be a collaborative writing platform. Autora will provide reactive environment where everyeone can easily orientate what's going on and join the fun. This should be achieved by making Autora a single page application built with EmberJS and using Firebase hosting which offers quick WebSockets based client-server communication.",
    myWork: ['Interactive web application', 'SVG animation', 'Real-time updates and sync'],
    img: 'http://unsplash.it/1003/1000',
    smallImg: 'https://unsplash.it/200/302',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Topmonks.com',
    technologies: ["Gulp", "Node.js", "SVG"],
    description: 'Landing page for software development company. It has advanced layout but it is still responsive and loading fast.',
    myWork: ['HTML/CSS coding', 'Animations', 'Tooling', 'Non-blocking CSS'],
    img: 'http://unsplash.it/1007/1000',
    smallImg: 'https://unsplash.it/200/303',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Personal portfolio',
    technologies: ["Glimmer", "Gulp"],
    description: 'This portfolio is a showcase of all my skills. It has been designed by code and made interactive with JavaScript and still highly optimized for all devices.',
    myWork: ['Content Strategy', 'Design by code' ,'HTML/CSS coding', 'Animations', 'Interactive User Interface', 'Performance optimizations'],
    img: 'http://unsplash.it/1004/1000',
    smallImg: 'https://unsplash.it/200/304',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Lukaslindner.cz',
    technologies: ['Ember', 'Shell'],
    description: 'Personal website of a famous czech Fashion artist. It features a unique gallery layout and zooming funtionality.',
    myWork: ['Creating a tailored web app', 'Prerendering logic'],
    img: 'http://unsplash.it/1013/1000',
    smallImg: 'https://unsplash.it/200/305',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Open Finance',
    technologies: ["GoogleMapsAPI"],
    description: "Open Finance is a singificant finance consulting company based in Prague. First version of the website has been done in late 2014 and changes to functionality and images have been introduced in 2015. Website is fully responsive and even though it is image heavy, it's size is not particularly high",
    myWork: ['Interactive Google Map', 'Responsive images', 'Animations'],
    img: 'http://unsplash.it/1005/1000',
    smallImg: 'https://unsplash.it/200/306',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Wisephora',
    technologies: ["Gulp"],
    description: 'Web for a conference held in Prague. I did early version of the website and set up tooling for all kinds of optimizations.',
    myWork: ['Tooling', 'Performance optimizations'],
    img: 'http://unsplash.it/1060/1000',
    smallImg: 'https://unsplash.it/200/307',
    projectType: 'Website',
    currentSrc: ''
  },{
    title: 'Pisusvetove.cz',
    technologies: ["WordPress"],
    description: 'I helped picking a theme and did multiple adjustments via CSS and JavaScript',
    myWork: ['Picking a WordPress theme', 'Gallery layout and style updates'],
    img: 'http://unsplash.it/1011/1000',
    smallImg: 'https://unsplash.it/200/308',
    projectType: 'Consulting',
    currentSrc: ''
  },{
    title: 'Tomashonz.com',
    technologies: ["WordPress", "PhotoSwipe"],
    description: 'I helped picking a theme an did multiple adjustments via CSS and JavaScript',
    myWork: ['Picking a WordPress theme', 'Implementing PhotoSwipe solution'],
    img: 'http://unsplash.it/1010/1000',
    smallImg: 'https://unsplash.it/200/309',
    projectType: 'Consulting',
    currentSrc: ''
  },{
    title: 'Microclimate data',
    technologies: ['Ember', 'Firebase', 'Semantic UI', 'SVG'],
    description: "Personal tool for analysing and presenting data for my Bachelor's degree project.",
    myWork: ['Saving data to Firebase', 'Implementing own charts via SVG', 'Algorithms for filtering and sorting'],
    img: 'http://unsplash.it/1011/1000',
    smallImg: 'https://unsplash.it/200/310',
    projectType: 'Code',
    currentSrc: ''

  }
];