Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	// create loading screen


	// load everything
	game.load.tilemap('background-tiles', 'assets/img/background.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('background', 'assets/img/background.png');
	game.load.image('purple', 'assets/img/purple.png');
	game.load.spritesheet('tacocat', 'assets/img/tacocat.png', 75, 53, 2);
    },

    create: function () {
	game.state.start('Menu');
    }
};
