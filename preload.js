const { Titlebar, Color } = require("custom-electron-titlebar");

window.addEventListener('DOMContentLoaded', () => {
  // Title bar implemenation
  new Titlebar({
    menu: null,
    backgroundColor: Color.fromHex("#262626")
  });
});
