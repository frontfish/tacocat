Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	game.stage.backgroundColor = '#cdf';

	game.add.sprite(50, 50, 'tacocat', 1);
    },

    update: function () {

    },
};
