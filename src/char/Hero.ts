import Phaser, { Scene } from "phaser";

import HeroAnimKeys from "../consts/HeroAnimKeys";
import eventsCenter from "../utils/EventsCenter";


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



        //Animation à la création:------------------------------------
        this.anims.play(HeroAnimKeys.HeroRun);


        //On l'ajoute à la physique de la scene
        scene.physics.add.existing(this)

        //HITBOX SECTION----------------------------------------------
        //on configure la physique du héro:
        const heroBody = this.body as Phaser.Physics.Arcade.Body;
        heroBody.debugBodyColor = 0x3cda25; //on met la couleur de la hitbox en verte afin de la reconnaitre facilement.
        //on rajoutera une configuration de la hitbox ici si necessaire :
        //heroBody.setSize(width, height);
        //heroBody.setOffset(x, y);
        heroBody.setCollideWorldBounds(true)

        //On set les limite de la scene pour le hero:
        const sceneHeight = scene.scale.height //hauteur de la scene
        heroBody.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, sceneHeight - 30)

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
