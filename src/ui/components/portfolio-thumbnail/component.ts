import Component, { tracked } from '@glimmer/component';
import { PortfolioItem, Filter } from "../../../utils/types";


export default class PortfolioThumbnail extends Component {

  args: {
    filterBy: Filter;
    model: PortfolioItem;
    img: string;
    activeItem: PortfolioItem;
  }

  @tracked('args')
  get isVisible() : boolean {
    const {filterBy, model} = this.args;
    const {isArray} = Array;
    const filterData = model[filterBy.propName];

    if(isArray(filterData)){
      return filterData.find(value => value === filterBy.value);
    } else if (typeof filterData === 'string'){
      return filterData === filterBy.value;
    }

    return true;
  }

  @tracked('args', 'isVisible')
  get className() : string {

    let classList : Array<string> = [];

    if(this.args.model.title === this.args.activeItem.title) {
      classList.push('active');
    }

    if(!this.isVisible) {
      classList.push('hidden');
    }

    return classList.join(' ');
  }
};
