import Phaser, { Scene, Structs } from "phaser";

import HeroAnimKeys from "../consts/HeroAnimKeys";
import eventsCenter from "../utils/EventsCenter";
import HeroControlsSettings from "../consts/HeroControlsSettings";


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

    private heroBody!: Phaser.Physics.Arcade.Body;
    private jumpCount!: number;
    private distance!: number;

    constructor(scene: Phaser.Scene, x: number,
        y: number, texture: string, frame?: string | number) {
        super(scene, x, y, texture, frame);



        //Animation à la création:----------------------------------------------
        this.anims.play(HeroAnimKeys.HeroRun);


        //On l'ajoute à la physique de la scene
        scene.physics.add.existing(this)

        //HITBOX SECTION---------------------------------------------------------
        //on configure la physique du héro:
        this.heroBody = this.body as Phaser.Physics.Arcade.Body;
        this.heroBody.debugBodyColor = 0x3cda25; //on met la couleur de la hitbox en verte afin de la reconnaitre facilement.
        //on rajoutera une configuration de la hitbox ici si necessaire :
        //this.heroBody.setSize(width, height);
        //this.heroBody.setOffset(x, y);
        this.heroBody.setCollideWorldBounds(true)

        //On set les limite de la scene pour le hero:
        const sceneHeight = scene.scale.height //hauteur de la scene
        this.heroBody.world.setBounds(0, 0, Number.MAX_SAFE_INTEGER, sceneHeight - 30)

        //On lance l'auto run en ajoutant une velocité X :
        this.heroBody.setVelocityX(HeroControlsSettings.Speed)

        //On set les compteurs:
        this.jumpCount = 0;
        this.distance = 0;



    }


    update(time:number, delta:number, cursors: Phaser.Types.Input.Keyboard.CursorKeys) {

        if (!cursors) {
            return;
        }

        //Si hero au contact d'une surface on set son animation en "course":
        if (this.heroBody.velocity.y === 0) {
            this.anims.play(HeroAnimKeys.HeroRun, true)
            this.jumpCount = 0;
        }

        //On check si le héro avance
        if (this.heroBody.velocity.x > 0) { //si le héro avance:
            this.distance += 0.01
            eventsCenter.emit('meter-count', this.distance)           //On lance la méthode 
        }


        //TOUCHE UP POUR JUMP :----------------------------------------------------
        if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.actionCooldown('jump')) {
            this.jump()
        }


    }


    //Methode du Jump:
    private jump() {
        this.jumpCount++
        this.anims.play(HeroAnimKeys.HeroJump, true)
        this.heroBody.setVelocityY(HeroControlsSettings.Jump)
    }


    //Methode du cooldown des actions:---------------------------------------------
    private actionCooldown(action: string) {
        switch (action) {
            case 'jump':
                if (this.jumpCount === HeroControlsSettings.JumpCountMax) {
                    return false;
                } else {
                    return true
                }
        }

        return true;
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
