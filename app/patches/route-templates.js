import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';
import { getComponentTemplate } from '@ember/component';

const oldInit = Route.prototype.init;
Route.prototype.init = function () {
  oldInit.call(this);

  let template = getComponentTemplate(this.constructor);
  if (template) {
    let name = this._debugContainerKey.split(':')[1];
    getOwner(this).register(`template:${name}`, template);
  }
};
