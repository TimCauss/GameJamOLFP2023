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
        this.load.image(TextureKeys.Background1, "public/assets/level/background/ciel.png")
        //muraille 
        this.load.image(TextureKeys.Sol1, "public/assets/level/background/muraille.png")

        //preload de l'image de Coin
        this.load.image(TextureKeys.Coin1, "public/assets/level/background/coin.png")

        //preload des images des elements de décours:
        this.load.image(TextureKeys.Cloud1, 'public/assets/level/Elements/cloud1.png')

        //preload futu ennemi :
        this.load.image(TextureKeys.Enemy1, 'public/assets/level/Elements/blade_1.png')

        //Preload des sprites et du spriteSheet:
        this.load.atlas(TextureKeys.TextureHero, "public/assets/char/hero/hero-sprite.png", "public/assets/char/hero/hero-sprite.json")

        this.load.audio('background', 'assets/sfx/musique-de-fond.ogg');         
    }

    create() {
        createHeroAnims(this.anims);
        this.scene.start(SceneKeys.Game);

        const musique_de_fond = this.sound.add('background');
        musique_de_fond.play();

    }
}