import Phaser from "../lib/phaser.js";

export default class Hero extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);

    //Créer le héro:
    scene.add
      .sprite(0, 0, "hero-jump-run")
      .setOrigin(0.5, 1)
      
      //play("heroJumpAnim")

  }
}