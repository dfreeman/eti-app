import Component from '@glint/environment-ember-loose/glimmer-component';

export interface GreetingSignature {
  Args: {
    message: string;
    target?: string;
  }
}

export default class Greeting extends Component<GreetingSignature> {
  private get target(): string {
    return this.args.target ?? 'world';
  }

  <template>
    {{@message}}, {{this.target}}!
  </template>
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Greeting: typeof Greeting;
  }
}
