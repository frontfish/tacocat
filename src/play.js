Game.Play = function (game) { };

Game.Play.prototype = {
    create: function () {
	game.stage.backgroundColor = '#cdf';

	game.map = game.add.tilemap('background-tiles');
	game.map.addTilesetImage('background');
	game.map.addTilesetImage('purple');
	game.map.addTilesetImage('tacocat');
//	game.layer = game.map.createLayer('Object Layer 1');
	game.layer = game.map.createLayer('Tiles');
	game.layer.resizeWorld();

	game.map.setCollisionBetween(2, 3, true, game.layer);

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.gravity.y = 5000;
	game.physics.arcade.TILE_BIAS = 20;

	game.tacocat = game.add.sprite(50, 50, 'tacocat', 1);
//	game.tacocat = game.map.createFromObjects('Object Layer 1', 4, 'tacocat', 1, true)[0];
	game.physics.arcade.enable(game.tacocat);
	game.tacocat.body.collideWorldBounds = true;
	game.tacocat.canJump = function () { return game.tacocat.body.blocked.down };
	game.tacocat.speed = 400;
	game.tacocat.jumpSpeed = 1100;
	game.tacocat.anchor.x = 0.5;
	game.tacocat.body.setSize(56, 32, 0, 18);
	game.camera.follow(game.tacocat, Phaser.Camera.FOLLOW_PLATFORMER);


	game.keys = game.input.keyboard.createCursorKeys();
	game.keys.up.onDown.add(function () {
	    if (game.tacocat.canJump()) {
		game.tacocat.body.velocity.y = 0 - game.tacocat.jumpSpeed;
	    }
	}, this);
    },

    update: function () {
	game.physics.arcade.collide(game.tacocat, game.layer);

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
	game.debug.body(game.layer);
    },
};
