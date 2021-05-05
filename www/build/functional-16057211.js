import { h } from './index-c2c2ebef.js';

const Navbar = ({ title }) => (h("ion-header", { class: "ion-no-border" },
  h("ion-toolbar", null,
    h("ion-title", null, title),
    h("ion-buttons", { slot: "end" },
      h("ion-menu-button", null)))));

export { Navbar as N };
