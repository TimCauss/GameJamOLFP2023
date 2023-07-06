import Phaser from "phaser";
import SceneKeys from "../consts/SceneKeys";
import eventsCenter from "../utils/EventsCenter";



export default class Interface extends Phaser.Scene {

    private textMeters!: Phaser.GameObjects.Text;

    constructor() {
        super(SceneKeys.Interface)
    };

    private updateMeters(meters: number) {
        this.textMeters.setText(Math.round(meters).toString())
    }

    create() {
        eventsCenter.on('meter-count', this.updateMeters, this);

        //Compteur de mètre UI:
        this.add.rectangle(20, 20, 200, 50, 0x000)
        this.textMeters = this.add.text(20, 15, '0');
        this.add.text(100, 15, 'm');
    }


}