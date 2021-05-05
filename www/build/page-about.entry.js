import { r as registerInstance, h } from './index-c2c2ebef.js';
import { N as Navbar } from './functional-16057211.js';

const pageAboutCss = "page-about{}";

const PageAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Navbar, { title: "About" }));
  }
};
PageAbout.style = pageAboutCss;

export { PageAbout as page_about };
