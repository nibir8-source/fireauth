import { r as registerInstance, h } from './index-c2c2ebef.js';
import { N as Navbar } from './functional-16057211.js';

const tabsDashboardCss = "tabs-dashboard{}";

const TabsDashboard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Navbar, { title: "Dashboard" }));
  }
};
TabsDashboard.style = tabsDashboardCss;

export { TabsDashboard as tabs_dashboard };
