import { r as registerInstance, h } from './index-c2c2ebef.js';

const appMenuCss = "app-menu{}";

const AppMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.appPages = [
      { title: "Home", url: "/", icon: "home" },
      { title: "About", url: "/about", icon: "person" },
      { title: "Tabs", url: "/home", icon: "person" }
    ];
  }
  render() {
    return (h("ion-menu", { side: "start", type: "overlay", contentId: "main" }, h("ion-content", null, h("ion-menu-toggle", null, h("ion-list", null, this.appPages.map((appPage) => (h("ion-item", { href: appPage.url }, h("ion-icon", { name: appPage.icon, slot: "start" }), h("ion-label", null, appPage.title)))))))));
  }
};
AppMenu.style = appMenuCss;

export { AppMenu as app_menu };
