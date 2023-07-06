import Phaser, { Scene } from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import createHeroAnims from "../anims/HeroAnims";

export default class Preload extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Prelaoder)
    }

    preload() {

        //preload des images des backgrounds:
        this.load.image(TextureKeys.Background1, "public/assets/level/background/bg_colored_forest.png")

        //preload des images des elements de décours:
        this.load.image(TextureKeys.Cloud1, 'public/assets/level/Elements/cloud1.png')

        //Preload des sprites et du spriteSheet:
        this.load.atlas(TextureKeys.TextureHero, "public/assets/char/hero/hero-sprite.png", "public/assets/char/hero/hero-sprite.json")
    }

    create() {
        createHeroAnims(this.anims);
        this.scene.start(SceneKeys.Game);
    }
}