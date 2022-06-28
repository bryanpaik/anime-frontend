const { Titlebar } = require("custom-electron-titlebar");
const { Color } = require("custom-electron-titlebar/dist/common/color");

window.addEventListener('DOMContentLoaded', () => {
  // Title bar implemenation
  new Titlebar({
    menu: null,
    backgroundColor: Color.fromHex("#303030")
  });
});
