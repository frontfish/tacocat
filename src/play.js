Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	game.stage.backgroundColor = '#cdf';

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 5000;

	game.tacocat = game.add.sprite(50, 50, 'tacocat', 1);
	game.physics.arcade.enable(game.tacocat);
	game.tacocat.body.collideWorldBounds = true;
	game.tacocat.canJump = function () { return game.tacocat.body.touching.down };
	game.tacocat.speed = 500;
	game.tacocat.jumpSpeed = 1000;
	game.tacocat.anchor.x = 0.5;
	game.tacocat.body.setSize(55, 30, 15, 17);

	game.floor = game.add.sprite(0, 320, 'tacocat');
	game.floor.scale.x = 9;
	game.physics.arcade.enable(game.floor);
	game.floor.body.immovable = true;
	game.floor.body.allowGravity = false;


	game.keys = game.input.keyboard.createCursorKeys();
	game.keys.up.onDown.add(function () {
	    if (game.tacocat.canJump()) {
		game.tacocat.body.velocity.y = 0 - game.tacocat.jumpSpeed;
	    }
	}, this);
    },

    update: function () {
	game.physics.arcade.collide(game.tacocat, game.floor);

	game.tacocat.body.velocity.x = 0;
	if (game.keys.left.isDown && !game.keys.right.isDown) {
	    game.tacocat.body.velocity.x = 0 - game.tacocat.speed;
	    game.tacocat.frame = 0;
	}
	else if (game.keys.right.isDown && !game.keys.left.isDown) {
	    game.tacocat.body.velocity.x = game.tacocat.speed;
	    game.tacocat.frame = 1;
	}
    },

    render: function () {
	game.debug.body(game.tacocat);
    },
};
