import Component, { tracked } from '@glimmer/component';

export default class DemoLink extends Component {

  args : {
    url: string;
  }

  @tracked('args')
  get bareURL() : string {
    return this.args.url
              .replace('http://', '')
              .replace('https://', '')
              .split('/')[0];
  }
};
