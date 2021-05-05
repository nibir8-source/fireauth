import { r as registerInstance, h } from './index-c2c2ebef.js';

const tabsRootCss = "tabs-root{}";

const TabsRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("ion-tabs", null, h("ion-tab", { tab: "tabs-home" }, h("ion-nav", null)), h("ion-tab", { tab: "tabs-dashboard" }, h("ion-nav", null)), h("ion-tab-bar", { slot: "bottom" }, h("ion-tab-button", { tab: "tabs-home" }, h("ion-label", null, "Home"), h("ion-icon", { name: 'home' })), h("ion-tab-button", { tab: "tabs-dashboard" }, h("ion-label", null, "Dashboard"), h("ion-icon", { name: 'person' })))));
  }
};
TabsRoot.style = tabsRootCss;

export { TabsRoot as tabs_root };
