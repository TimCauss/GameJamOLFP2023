import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "app",
  pixelArt: true,
  pysics: {
    default: "arcade",
    acracade: {
      gravity: 0,
      debug: true,
    },
  },
  scene: [Game], //Preloader, StartMenu, Game, Interface, GameOver
  scale: {
    autocenter: Phaser.scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT, // or FILL if you want to stretch the game
    width: 960,
    height: 640,
  },
};

export default new Phaser.Game(config);
