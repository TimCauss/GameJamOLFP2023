import Phaser from "../src/lib/phaser.js";
import Game from "./scenes/Game.js";

export default new Phaser.Game({
  type: Phaser.AUTO,
  parent: "app",
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  scene: [Game],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 200,
      },
      debug: true,
    },
  },
});