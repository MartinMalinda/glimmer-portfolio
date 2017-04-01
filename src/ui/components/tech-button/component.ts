import Component, {tracked} from '@glimmer/component';

export default class TechButton extends Component {
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
