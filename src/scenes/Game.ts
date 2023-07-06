import Phaser from 'phaser'
import SceneKeys from '../consts/SceneKeys'
import TextureKeys from '../consts/TextureKeys'
import HeroAnimKeys from '../consts/HeroAnimKeys'

import "../char/Hero";
import Hero from '../char/Hero';

import eventsCenter from '../utils/EventsCenter';
import EnnemyControlsSettings from '../consts/EnemyConstrolsSettings';
import main from '../main';


export default class Game extends Phaser.Scene {

    private background1!: Phaser.GameObjects.TileSprite;

    private ground1!: Phaser.GameObjects.TileSprite;
    private ground2!: Phaser.GameObjects.TileSprite;

    private cloud1!: Phaser.GameObjects.Image;
    private cloud2!: Phaser.GameObjects.Image;
    private cloud3!: Phaser.GameObjects.Image;
    private montagne!: Phaser.GameObjects.TileSprite;
    private temple!: Phaser.GameObjects.Image;

    private ennemy1!: Phaser.GameObjects.Image;
    private ennemy2!: Phaser.GameObjects.Image;

    private hero!: Hero;

    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor() {
        super(SceneKeys.Game)
    }

    preload() {
        this.cursors = this.input.keyboard!.createCursorKeys();
    }

    create() {

        //On stock la largeur et la hauteur de la scene
        const width = this.scale.width;
        const height = this.scale.height;

        this.sound.add('sound1', { loop: true })
        this.sound.play('sound1');


        //On ajoute le backgrounden Tilesprite pour le repeat.
        this.background1 = this.add.tileSprite(0, 0, width, height, TextureKeys.Background1)
            .setOrigin(0, 0).setScrollFactor(0, 0);
        this.background1.scale = 4;
        this.montagne = this.add.tileSprite(400, 515, 394, 73, TextureKeys.Montagne).setScrollFactor(0,0)
        this.montagne.scale = 2;
        this.ground2 = this.add.tileSprite(0, height - 110, width * 2, 102, TextureKeys.Sol2).setScrollFactor(0, 0)
        this.ground1 = this.add.tileSprite(0, height, width * 2, 200, TextureKeys.Sol1).setScrollFactor(0, 0)

        //Groupe nuages:
        this.cloud1 = this.add.sprite(Phaser.Math.Between(100, 1500), Phaser.Math.Between(50, 500), TextureKeys.Cloud1);


        //this.cloud2 = this.add.sprite(Phaser.Math.Between(0, 1500), Phaser.Math.Between(100, 220), TextureKeys.Cloud2)
        this.temple = this.add.sprite(Phaser.Math.Between(1100, 1150), Phaser.Math.Between(550, 550), TextureKeys.Temple)





        //On ajoute un obstacle :
        this.ennemy1 = this.add.sprite(Phaser.Math.Between(1200, 1500), height - 150, TextureKeys.Enemy1)
        this.ennemy1.scale = 0.8;
        this.ennemy2 = this.add.sprite(Phaser.Math.Between(1000, 1500), height - 450, TextureKeys.Enemy1)
        this.ennemy2.scale = 0.8;
        this.physics.add.existing(this.ennemy1, true)
        this.physics.add.existing(this.ennemy2, true)

        this.hero = this.add.hero(width * 0.1, height - 500, HeroAnimKeys.HeroRun, undefined);
        this.hero.scale = 0.5


        //On ajoute les collisions entre le héro et les obstacles:
        //this.physics.add.collider(this.hero, this.ennemy1, () => { eventsCenter.emit('', 1) }, undefined,this)
        this.physics.add.overlap(this.hero, this.ennemy1, this.handleHeroEnnemyCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback, undefined, this)

        //On ajoute la camera qui suit le héro, on décal son offset de 500px pour placer le héro à gauche de la scene:
        this.cameras.main.startFollow(this.hero, undefined, undefined, undefined, -500)
        this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height)

        this.scene.run(SceneKeys.Interface)

    }

    update(time: number, delta: number) {

        //mise à jour de la position du background:
        this.background1.setTilePosition(this.cameras.main.scrollX);
        this.ground2.setTilePosition(this.cameras.main.scrollX * 0.8)
        this.ground1.setTilePosition(this.cameras.main.scrollX * 2.5);

        this.hero.update(time, delta, this.cursors)

        this.wrapEnnemy();


    }


    //Methode pour definir un event lors de la collision entre le héro et les ennemis:
    private handleHeroEnnemyCollision(obj1: Phaser.GameObjects.GameObject,
        obj2: Phaser.GameObjects.GameObject) {
        //obj1 hero
        //obj2 Piques

        const hero = obj1 as Hero

        //fonction clignote
        hero.setTint(0xff0000)
        this.time.delayedCall(100, () => { hero.clearTint() })

        hero.damage(EnnemyControlsSettings.Damage)



    }

    private wrapEnnemy() {
        const scrollX = this.cameras.main.scrollX;
        const rightEdge = scrollX + this.scale.width;

        if (this.ennemy1.x + this.ennemy1.width < scrollX) {
            this.ennemy1.x = Phaser.Math.Between(rightEdge + 100, rightEdge + 1000);
            const ennemy1Body = this.ennemy1.body as Phaser.Physics.Arcade.Body;
            ennemy1Body.updateFromGameObject();
        }
        if (this.ennemy2.x + this.ennemy1.width < scrollX) {
            this.ennemy2.x = Phaser.Math.Between(rightEdge + 100, rightEdge + 1000);
            const ennemy1Body = this.ennemy2.body as Phaser.Physics.Arcade.Body;
            ennemy1Body.updateFromGameObject();
        }
    }
}
