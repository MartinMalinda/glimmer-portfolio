import Component, { tracked } from '@glimmer/component';

export default class PortfolioThumbnail extends Component {

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

    let classList = [];

    if(this.args.img === this.args.activeItem.smallImg) {
      classList.push('active');
    }

    if(!this.isVisible) {
      classList.push('hidden');
    }

    return classList.join(' ');
  }

  didInsertElement() {
    console.count();
  }
};
