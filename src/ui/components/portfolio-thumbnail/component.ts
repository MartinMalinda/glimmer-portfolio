import Component, { tracked } from '@glimmer/component';

export default class PortfolioThumbnail extends Component {

  @tracked('args')
  get isVisible() : boolean {
    const {filterBy, model} = this.args;
    const filterData = model[filterBy.propName];
    if(filterData && filterData.length){
      return filterData.find(value => value === filterBy.value);
    }

    return true;
  }

  @tracked('args', 'isVisible')
  get className() : string {

    let classList = [];

    if(this.args.img === this.args.activeItem.img) {
      classList.push('active');
    }

    if(!this.isVisible) {
      classList.push('hidden');
    }

    return classList.join(' ');
  }
};
