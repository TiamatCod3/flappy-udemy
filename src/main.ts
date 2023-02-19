import Phaser from 'phaser'

import FlappyBirdScene from './scenes/FlappyBirdScene'

const WIDTH = 800;
const HEIGHT = 600;

const config: Phaser.Types.Core.GameConfig = {
    //WebGL (Web Graphics library)
    type: Phaser.AUTO,
    width: WIDTH,
    height: HEIGHT,
    physics: {
        default: 'arcade',
    },
    scene: [FlappyBirdScene]
}
const game = new Phaser.Game(config)
export default game