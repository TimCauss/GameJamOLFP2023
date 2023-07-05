import Phaser from 'phaser'
import SceneKeys from '../consts/SceneKeys'
import TextureKeys from '../consts/TextureKeys'

export default class Game extends Phaser.Scene {

    private background1!: Phaser.GameObjects.TileSprite

    constructor() {
        super(SceneKeys.Game)
    }

    create() {

        //On stock la largeur et la hauteur de la scene
        const width = this.scale.width;
        const height = this.scale.height;


        //On ajoute le background
        this.background1 = this.add.tileSprite(0, 0, width, height, TextureKeys.Background1)
            .setOrigin(0, 0).setScrollFactor(0, 0);
    }

    update() {

        //mise à jour de la position du background:
        this.background1.setTilePosition(this.cameras.main.scrollX);
    }

}
