import Component, { tracked } from "@glimmer/component";
import { PortfolioItem, Portfolio } from "../../../utils/data";

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
  @tracked showPreview : boolean = false; // for mobile only

  constructor(options){
    super(options);

    let rawData = (<HTMLScriptElement>document.querySelectorAll('#glimmer-portfolio-data')[0]).innerText;
    this.portfolioData = JSON.parse(rawData);
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

  @tracked('bgPositionY', 'activePortfolioItem')
  get edgeCSSBackgroundFallback() : string {
    if(typeof (<HTMLElement>this.element).style.objectFit === 'undefined'){

      return `background:url('${this.activePortfolioItem.img}') 50% ${this.bgPositionY}%`;
    }

    return '';
  }

  updateActiveItem(item : PortfolioItem, event : Event) : void {
    let isDragging : boolean = (<HTMLElement>event.currentTarget).parentElement.classList.contains('dragging');
    if(!isDragging){
      this.active = this.portfolioData.indexOf(item);
      this.bgPositionY = 0;
    }
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

    const thumbnailSectionHeight = 200;
    
    let height : number = currentTarget.offsetHeight - thumbnailSectionHeight;
    let y = clientY - currentTarget.offsetTop;
    let percentage = parseInt(((y / height) * 100).toFixed(0));
    this.bgPositionY = percentage > 0 ? percentage : 0;
  }

  setPreviewMode(value : boolean) : void {
    this.showPreview = value;
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
