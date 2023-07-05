import Phaser from "phaser";

import HeroAnimKeys from "../consts/HeroAnimKeys";
import TextureKeys from "../consts/TextureKeys";


const createHeroAnims = (anims: Phaser.Animations.AnimationManager) => {
    //Animation du héro

    //Run:----------------------
    anims.create({
        key: HeroAnimKeys.HeroRun,
        //generate frames:
        frames: anims.generateFrameNames(TextureKeys.TextureHero, {
            start: 0,
            end: 9,
            prefix: "Run__",
            zeroPad: 3,
            suffix: ".png",
        }),
        frameRate: 25,
        repeat: -1,
    });
};

export default createHeroAnims;