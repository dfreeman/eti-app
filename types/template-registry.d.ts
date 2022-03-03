import Helper from '@glint/environment-ember-loose/ember-component/helper';

declare class PageTitle extends Helper<{
  PositionalArgs: [title: string];
  Return: void;
}> {}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'page-title': typeof PageTitle;
  }
}
