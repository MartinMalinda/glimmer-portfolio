import Component, { tracked } from "@glimmer/component";
import data, { PortfolioItem } from "../../../utils/data";

interface filter {
  propName: string;
  value: any;
}

export default class GlimmerPortfolio extends Component {
  @tracked portfolioData : Array<PortfolioItem>;
  @tracked active : number = 0;
  @tracked isLeftColumnExpanded : boolean = false;
  @tracked filterBy : filter = {
    propName: '',
    value: ''
  };

  constructor(options){
    super(options);

    this.portfolioData = data;
  }

  @tracked('isLeftColumnExpanded')
  get extraLeftColumnClass() : string {
    if(this.isLeftColumnExpanded){
      return 'expanded';
    }

    return '';
  }

  @tracked('active')
  get activePortfolioItem() : PortfolioItem {
    return this.portfolioData[this.active];
  }

  updateActiveItem(item : PortfolioItem) : void {
    this.active = this.portfolioData.indexOf(item);
  }

  updateFilter(filterBy : filter) : void {
    this.filterBy = filterBy;
  }

  toggleLeftColumn() : void {
    this.isLeftColumnExpanded = !this.isLeftColumnExpanded;
  }
}
