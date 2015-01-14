Game.Load = function (game) { };

Game.Load.prototype = {
    preload: function () {
	// create loading screen


	// load everything
	game.load.spritesheet('tacocat', 'assets/img/tacocat.png', 75, 53, 2);
    },

    create: function () {
	game.state.start('Menu');
    }
};
