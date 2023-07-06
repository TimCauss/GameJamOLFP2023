import Phaser from 'phaser'
import SceneKeys from '../consts/SceneKeys'
import TextureKeys from '../consts/TextureKeys'
import HeroAnimKeys from '../consts/HeroAnimKeys'

import "../char/Hero";
import Hero from '../char/Hero';

import eventsCenter from '../utils/EventsCenter';


export default class Game extends Phaser.Scene {

    private background1!: Phaser.GameObjects.TileSprite;

    private ennemy1!: Phaser.GameObjects.Image;

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

        //On ajoute le backgrounden Tilesprite pour le repeat.
        this.background1 = this.add.tileSprite(0, 0, width, height, TextureKeys.Background1)
            .setOrigin(0, 0).setScrollFactor(0, 0);


        //On ajoute un obstacle :
        this.ennemy1 = this.add.image(Phaser.Math.Between(500, 1500), height - 80, TextureKeys.Enemy1)
        this.ennemy1.scale = 5;
        this.physics.add.existing(this.ennemy1, true)

        this.hero = this.add.hero(width * 0.1, height - 500, HeroAnimKeys.HeroRun, undefined);
        this.hero.scale = 0.5


        //On ajoute les collisions entre le héro et les obstacles:
        //this.physics.add.collider(this.hero, this.ennemy1, () => { eventsCenter.emit('', 1) }, undefined,this)
        this.physics.add.overlap(this.hero, this.ennemy1, () => { console.log("test"); }, undefined, this)

        //On ajoute la camera qui suit le héro, on décal son offset de 500px pour placer le héro à gauche de la scene:
        this.cameras.main.startFollow(this.hero, undefined, undefined, undefined, -500)
        this.cameras.main.setBounds(0, 0, Number.MAX_SAFE_INTEGER, height)


        this.scene.run(SceneKeys.Interface)

    }

    update(time: number, delta: number) {

        //mise à jour de la position du background:
        this.background1.setTilePosition(this.cameras.main.scrollX);

        this.hero.update(time, delta, this.cursors)

    }


}