import Phaser from "../lib/phaser.js";

export default class Preloader extends Phaser.Scene {
    constructor() {
        super("Preload");
    }

    Preload() {
        this.load.image('Background1', "URL BACKGROUND1");
    }
    

}