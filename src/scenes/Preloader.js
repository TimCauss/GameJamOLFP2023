import { createHeroAnims } from "../anims/heroAnims.js";
import Phaser from "../lib/phaser.js";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  Preload() {
    //chargement des images de fond:
    this.load.image('background', 'assets/level/background.png');

    //chargement des image/animations du héro:
    this.load.atlas(
      "hero-jump-run",
      "/assets/image/character/hero-jumpandrun.png",
      "/assets/image/character/hero-jumpandrun.json"
    );
  }

  create() {
    //createHeroAnims(this.anims);

    this.scene.start("game");
  }
}
