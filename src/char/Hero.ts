import Phaser from "phaser";

import HeroAnimKeys from "../consts/HeroAnimKeys";



declare global {
    namespace Phaser.GameObjects {
        interface GameObjectFactory {
            hero(
                x: number,
                y: number,
                texture: string,
                frame?: string | number
            ): Hero;
        }
    }
}


//class Hero:
//Nous pourrons ici configurer notre héro avant de l'appeller dans la scene.
export default class Hero extends Phaser.Physics.Arcade.Sprite {

    constructor(scene: Phaser.Scene, x: number,
        y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);


        this.anims.play(HeroAnimKeys.HeroRun);

        //On l'ajoute à la physique de la scene
        scene.physics.add.existing(this)
    }


}


//GameObjcet Factory de Phaser
Phaser.GameObjects.GameObjectFactory.register("hero", function (
    this: Phaser.GameObjects.GameObjectFactory,
    x: number,
    y: number,
    texture: string,
    frame?: string | number
) {
    const sprite = new Hero(this.scene, x, y, texture, frame);

    this.displayList.add(sprite);
    this.updateList.add(sprite);

    this.scene.physics.world.enableBody(
        sprite,
        Phaser.Physics.Arcade.DYNAMIC_BODY
    );

    return sprite;
});
