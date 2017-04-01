import Component, { tracked } from '@glimmer/component';

export default class FilterInfo extends Component {
  @tracked('args')
  get extraClass() : string {
    if(this.args.filterBy.propName){
      return '';
    }

    return 'hidden';
  }
};
