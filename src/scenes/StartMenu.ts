import Phaser from 'phaser'

//import des scenes:load
import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';


export default class StartMenu extends Phaser.Scene {
    constructor() {
        super(SceneKeys.StartMenu)
    }

    preload() {
        //Preload Start Menu
        this.load.image(TextureKeys.Background0, "./public/assets/level/background/play.png")

    }
    create() {
        const width = this.scale.width
        const height = this.scale.height
        this.add.tileSprite(0, 0, width, height, TextureKeys.Background0).setOrigin(0, 0)

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start(SceneKeys.Preloader)
        })
    }
}