(function (root) {
	var TTT = root.TTT = (root.TTT || {});

	var UI = TTT.UI = function (game, grid) {
		this.game = game;
		this.grid = grid;

		this.tileEvents();
	}

	UI.prototype.tileEvents = function () {
		var tile = this;
		for (var i = 0; i < this.grid.length; i++ ){
			tile.turnOnEvent(i);
		};
	};

	UI.prototype.turnOnEvent = function (index){
		var tile = this;
		$(this.grid[index]).on('click', function(event) {
			var x = parseInt($(event.target).data("x"));
			var y = parseInt($(event.target).data("y"));
			tile.changeColor(x,y);
			tile.game.turn([x,y]);
			tile.turnOffEvent();
		});
	}

	UI.prototype.changeColor = function (x,y){
		var tile = this;
		if ( tile.game.isEmptyPos([x,y]) ){
			if (tile.game.player === "o"){
				$(event.target).css("background-color", "blue")
			}else{
				$(event.target).css("background-color", "red")
			}
		}
	};

	UI.prototype.turnOffEvent = function (){
		var tile = this;
		if ( tile.game.winner()) {
			 tile.grid.off('click');
		}
	};

})(this);