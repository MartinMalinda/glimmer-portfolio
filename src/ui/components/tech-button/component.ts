import Component, {tracked} from '@glimmer/component';
import {Filter} from '../../../utils/types';

export default class TechButton extends Component {

  args: {
    name: string;
    filter: Filter;
    onclick: (Filter) => void;
  }

  @tracked('args')
  get extraClass() : string | void {
    const {name, filter} = this.args;
    if(filter.propName === 'technologies' && filter.value === name){
      return "active";
    }
  }

  toggleFilter() : void {

    let filter;

    if(this.extraClass === 'active'){
       filter = {
         propName: '',
         value: ''
       };
    } else {
      filter = {
        propName: 'technologies',
        value: this.args.name
      };
    }

    this.args.onclick(filter);

  }
};
