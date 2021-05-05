import { r as registerInstance, h } from './index-c2c2ebef.js';

const App = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // componentWillLoad() {
  //     AuthSvc.verifyEmailLink(location.href);
  // }
  render() {
    return (h("ion-app", null, h("ion-router", { useHash: false }, h("ion-route", { url: "/auth", component: "page-auth" }), h("ion-route", { url: "/", component: "page-home" }), h("ion-route", { url: "/about", component: "page-about" }), h("ion-route", { url: "/home", component: "tabs-root" }, h("ion-route", { url: "/", component: "tabs-home" }, h("ion-route", { component: "tabs-home" })), h("ion-route", { url: "/user", component: "tabs-dashboard" }, h("ion-route", { component: "tabs-dashboard" })))), h("app-menu", null), h("ion-nav", { id: "main" })));
  }
};

export { App as app_root };
