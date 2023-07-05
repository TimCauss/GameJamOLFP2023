//imports
import Phaser from "../lib/phaser.js";

//class Game - Scene principale
export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  Preload() {
    //chargement des images de fond:
    this.load.image("background", "assets/level/background.png");
  }

  create() {
    //On stock les dimensions du Game screen:

    const width = this.scale.width;
    const height = this.scale.height;

    //On ajoute le Background:
    //en 0x0 clé du Preloader.js 'Background1'
    this.add.image(0, 0, "background").setOrigin(0, 0);
  }

}
