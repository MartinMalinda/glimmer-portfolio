import Component, { tracked } from '@glimmer/component';

export default class FilterInfo extends Component {
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
