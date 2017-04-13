import Component, { tracked } from '@glimmer/component';
import { ProjectType, Filter } from '../../../utils/types';

export default class FilterInfo extends Component {

  args: {
    filterBy: Filter;
    onFilterUpdate: (Filter) => void;
  }

  @tracked showInstructions : boolean = false;

  constructor(options) {
    super(options);

    if(typeof window !== 'undefined'){
      this.showInstructions = window.innerWidth < 769;
    }
  }

  @tracked('args')
  get filteringByTechnologies() : boolean {
    return this.args.filterBy.propName === 'technologies';
  }

  @tracked('args')
  get withoutFilter() : boolean {
    return this.args.filterBy.propName === '';
  }

  updateFilter(value : ProjectType) : void {

    let propName = value ? 'projectType' : '';

    const newFilter : Filter = {
      propName,
      value
    };

    this.args.onFilterUpdate(newFilter);
  }
};
