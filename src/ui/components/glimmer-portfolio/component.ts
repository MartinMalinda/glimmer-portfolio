import Component, { tracked } from "@glimmer/component";
import { PortfolioItem, data, Portfolio } from "../../../utils/data";

export interface Filter {
  propName: string;
  value: string | Array<string>;
}

interface EventTarget extends HTMLElement {
  currentSrc: string;
}

export default class GlimmerPortfolio extends Component {
  @tracked portfolioData : Portfolio = [];
  @tracked active : number = 0;
  @tracked isRightColumnExpanded : boolean = false;
  @tracked bgPositionY : number = 0;
  @tracked filterBy : Filter = {
    propName: '',
    value: ''
  };

  constructor(options){
    super(options);

    this.portfolioData = data;
  }

  @tracked('isRightColumnExpanded')
  get extraColumnClass() : string {
    if(this.isRightColumnExpanded){
      return 'expanded';
    }

    return '';
  }

  @tracked('active', 'portfolioData')
  get activePortfolioItem() : PortfolioItem {
    return this.portfolioData[this.active];
  }

  @tracked('activePortfolioItem')
  get showBlurredImage() : boolean {
    return !this.activePortfolioItem.didLoadLargeImg;
  }

  updateActiveItem(item : PortfolioItem) : void {
    this.active = this.portfolioData.indexOf(item);
  }

  updateFilter(filterBy : Filter) : void {
    this.filterBy = filterBy;
  }

  toggleLeftColumn() : void {
    this.isRightColumnExpanded = !this.isRightColumnExpanded;
  }

  saveLoadedSrc(item : PortfolioItem, event : Event) : void {
    const {currentSrc} = <HTMLImageElement>event.target;

    this.portfolioData = this.updatePortfolio(item, {currentSrc});
  }

  largeImgLoaded() : void {
    this.portfolioData = this.updatePortfolio(this.activePortfolioItem, {didLoadLargeImg: true});
  }

  moveRightColumnBackground(event : MouseEvent) : void {
    const {clientY} = event;
    const currentTarget = <HTMLElement>event.currentTarget;
    
    let height : number = currentTarget.offsetHeight;
    let y = clientY - currentTarget.offsetTop;
    this.bgPositionY = parseInt(((y / height) * 100).toFixed(0));
  }

  updatePortfolio(item : PortfolioItem, newData : Object) : Portfolio {
    const newItem = {
      ...item,
      ...newData
    };

    const newPortfolioData = this.portfolioData.slice(0);

    newPortfolioData[this.portfolioData.indexOf(item)] = newItem;

    return newPortfolioData;
  }

}
