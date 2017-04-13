export interface PortfolioItem {
  technologies: Array<string>;
  description: string;
  myWork: Array<string>;
  title: string;
  img: string;
  smallImg: string;
  projectType: string; 
  srcset: string;
  
  
  demoURL?: string;
  repoURL?: string;
  infoURL?: string;

  currentSrc?: string;
  didLoadLargeImg?: boolean;
  expanded?: boolean;
}

export interface Filter {
  propName: string;
  value: string | Array<string>;
}

export interface Portfolio extends Array<PortfolioItem> {}

export type Tech =
  'Ember' | 
  'Firebase' | 
  'Semantic UI' | 
  'SVG' |
  "VanillaJS" |
  'PhotoSwipe' |
  'Gulp' | 
  'Node.js'

export type ProjectType = "Code" | "Website"  | "Consulting";