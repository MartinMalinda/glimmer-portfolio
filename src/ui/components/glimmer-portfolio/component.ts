import Component, { tracked } from "@glimmer/component";
import data, { PortfolioItem } from "../../../utils/data";

interface filter {
  propName: string;
  value: any;
}

export default class GlimmerPortfolio extends Component {
  @tracked portfolioData : Array<PortfolioItem>;
  @tracked active : number = 0;
  @tracked isRightColumnExpanded : boolean = false;
  @tracked filterBy : filter = {
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
    this.isRightColumnExpanded = !this.isRightColumnExpanded;
  }
}
