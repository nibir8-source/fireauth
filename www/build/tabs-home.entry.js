import { r as registerInstance, h } from './index-c2c2ebef.js';
import { N as Navbar } from './functional-16057211.js';

const tabsHomeCss = "tabs-home{}";

const TabsHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Navbar, { title: "Home" }));
  }
};
TabsHome.style = tabsHomeCss;

export { TabsHome as tabs_home };
