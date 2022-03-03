declare module 'ember-page-title/helpers/page-title' {
  import Helper from '@glint/environment-ember-loose/ember-component/helper';

  export default class PageTitle extends Helper<{
    PositionalArgs: [title: string];
    Return: void;
  }> {}
}
