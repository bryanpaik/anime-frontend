const customTitlebar = require("custom-electron-titlebar");

window.addEventListener('DOMContentLoaded', () => {
  // Title bar implemenation
  new customTitlebar.Titlebar({
    menu: null,
    backgroundColor: customTitlebar.Color.TRANSPARENT
  });
});
