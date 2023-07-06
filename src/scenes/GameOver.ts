import Phaser from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";



export default class GameOver extends Phaser.Scene {

    constructor() {
        super(SceneKeys.GameOver)
    }

    create() {
        const width = this.scale.width
        const height = this.scale.height
        this.add.tileSprite(0, 0, width, height, TextureKeys.BackgroundGO).setOrigin(0,0)

        this.input.keyboard.once('keydown-SPACE', () =>{
            this.scene.start(SceneKeys.Game)
        })

        this.sound.stopAll();
        this.sound.play('sound3');
    }

};