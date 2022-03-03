import Route from '@ember/routing/route';
import pageTitle from 'ember-page-title/helpers/page-title';
import Greeting from 'eti-app/components/greeting';

export default class ApplicationRoute extends Route {
  public async model() {
    return { message: 'Hello' };
  }

  <template>
    {{pageTitle 'ETI + Glint'}}

    <Greeting @message={{@model.message}} />

    {{outlet}}
  </template>
}
