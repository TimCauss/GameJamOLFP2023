import Phaser, { Scene } from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";

export default class Preload extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Prelaoder)
    }

    preload() {

        //preload des image des backgrounds:
        this.load.image(TextureKeys.Background1, "assets/level/background/bg_colored_forest.png")
    }

    create() {
        this.scene.start(SceneKeys.Game);
    }
}