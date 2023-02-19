import Phaser from "phaser";
import sky from '../assets/sky.png'
import bird from '../assets/bird.png'
import game from '../main'

export default class FlappyBirdScene extends Phaser.Scene {
    width:any = game.config.width
    height:any = game.config.height
    constructor() {
        super("FlappyBird");
    }

    preload() {
        this.load.image("bird", bird);
        this.load.image("sky", sky);
    }

    create() {
        this.add.image(0, 0, "sky").setOrigin(0, 0);
        this.add.sprite( this.width / 10, this.height / 2, 'bird');
    }

    update() { }

}