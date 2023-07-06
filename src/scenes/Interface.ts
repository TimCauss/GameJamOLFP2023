import Phaser from "phaser";
import SceneKeys from "../consts/SceneKeys";
import eventsCenter from "../utils/EventsCenter";



export default class Interface extends Phaser.Scene {

    private width!: number;
    private height!: number;

    private textMeters!: Phaser.GameObjects.Text;
    private vieRestante!: Phaser.GameObjects.Text;

    constructor() {
        super(SceneKeys.Interface)
    };

    private updateMeters(meters: number) {
        this.textMeters.setText(Math.round(meters).toString())
    }

    private updateVie(value: number) {
        this.vieRestante.setText(value.toString())
    }

    create() {
        eventsCenter.on('meter-count', this.updateMeters, this);
        //eventCenter.on('vie-perdue', this.updateVie, this); //TODO

        this.width = this.scale.width;
        this.height = this.scale.height;

        //Compteur de mètre UI:
        this.add.rectangle(20, 20, 200, 50, 0x000000, 150)
        this.textMeters = this.add.text(20, 15, '0');
        this.add.text(100, 15, 'm');


        //Compteur de mètre UI:
        this.add.rectangle(this.width - 75, 20, 150, 50, 0x000000, 150)
        this.add.text(this.width - 130, 15, 'vie:');
        this.vieRestante = this.add.text(this.width - 70, 15, '3');
    }


}