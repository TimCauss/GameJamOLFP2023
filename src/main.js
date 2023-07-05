import Phaser from "../src/lib/phaser.js";
import Preloader from "./scenes/Preloader.js";
import Game from "./scenes/Game.js";
import GameOver from "./scenes/GameOver.js";

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: [Preloader, Game, GameOver],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0,
      },
      debug: false,
    },
  },
});