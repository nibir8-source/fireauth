import { r as registerInstance, h } from './index-c2c2ebef.js';
import { N as Navbar } from './functional-16057211.js';

const pageHomeCss = "page-home{}";

const PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Navbar, { title: "Home" }));
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };
