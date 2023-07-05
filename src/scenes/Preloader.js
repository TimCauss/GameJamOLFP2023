import Phaser from "../lib/phaser.js";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  Preload() {
    //chargement des images de fond:
    this.load.image("Background1", "/assets/image/level/background.png");

    //chargement des image/animations du héro:
    this.load.atlas("hero", "/assets/image/character/hero.png");
  }

  create() {}

  update() {}
}
