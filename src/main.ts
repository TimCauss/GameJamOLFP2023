import Phaser from 'phaser'

//import des scenes:
import Game from './scenes/Game'
import Preloader from './scenes/Preloader'
import Interface from './scenes/Interface';
import GameOver from './scenes/GameOver';
import StartMenu from './scenes/StartMenu';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: "app",
	pixelArt: true,
	roundPixels: true,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { y: 2000 },
			debug: false,
		},
	},
	scene: [StartMenu, Preloader, Game, Interface, GameOver],
	scale: {
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1280,
		height: 720,
	},
};

export default new Phaser.Game(config);