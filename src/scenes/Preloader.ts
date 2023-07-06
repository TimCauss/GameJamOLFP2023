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
        this.load.image(TextureKeys.Sol2, "public/assets/level/background/herbe.png")

        //cloud
        this.load.image(TextureKeys.Cloud1, "public/assets/level/Elements/nuage1.png");
        this.load.image(TextureKeys.Cloud2, "public/assets/level/Elements/nuage2.png");
        this.load.image(TextureKeys.Cloud3, "public/assets/level/Elements/nuage3.png");
        this.load.image(TextureKeys.Cloud1, "public/assets/level/Elements/nuage1.png");
        this.load.image(TextureKeys.Cloud1, "public/assets/level/Elements/nuage1.png");

        //preload de l'image de Coin
        this.load.image(TextureKeys.Coin1, "public/assets/level/background/coin.png")

        //preload futu ennemi :
        this.load.image(TextureKeys.Enemy1, 'public/assets/level/Elements/lanteene1.png')

        //Preload des sprites et du spriteSheet:
        this.load.atlas(TextureKeys.TextureHero, "public/assets/char/hero/hero-sprite.png", "public/assets/char/hero/hero-sprite.json")

        //Prelaod des musiques
        this.load.audio('sound1', 'public/assets/sfx/musique-de-fond.ogg', '2');
        this.load.audio('sound2', 'public/assets/sfx/jump.ogg');
        
    }

    create() {
        createHeroAnims(this.anims);
        this.scene.start(SceneKeys.Game);

        


    }
}