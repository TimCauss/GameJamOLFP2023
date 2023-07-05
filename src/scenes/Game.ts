import Phaser from 'phaser'
import SceneKeys from '../consts/SceneKeys'
import TextureKeys from '../consts/TextureKeys'
import HeroAnimKeys from '../consts/HeroAnimKeys'


export default class Game extends Phaser.Scene {

    private background1!: Phaser.GameObjects.TileSprite

    private hero!: Phaser.GameObjects.Sprite

    constructor() {
        super(SceneKeys.Game)
    }

    create() {

        //On stock la largeur et la hauteur de la scene
        const width = this.scale.width;
        const height = this.scale.height;


        //On ajoute le backgrounden Tilesprite pour le repeat.
        this.background1 = this.add.tileSprite(0, 0, width, height, TextureKeys.Background1)
            .setOrigin(0, 0).setScrollFactor(0, 0);

        this.hero = this.add.sprite(width * 0.1, height-52, TextureKeys.TextureHero).play(HeroAnimKeys.HeroRun)
        this.hero.scale = 0.5
    }

    update() {

        //mise à jour de la position du background:
        this.background1.setTilePosition(this.cameras.main.scrollX);
    }

}