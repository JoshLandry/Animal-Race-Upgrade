
	function Animal(name, speed, focus) {
		this.name = name;
		this.speed = speed;
		this.focus = focus;
		this.position = 0;
		this.advance = function() {
			if(this.focus > (Math.random() * 10) ) {
				this.position += this.speed;
				var msg = this.name + " is at " + this.position
				$('div').append('<p>' + msg + '</p>');
				if (this.position >= 100) {
					var winner = this.name + " is the winner!"
					$('div').append('<p>' + winner + '</p>');
				}
			}
		};
		

	}
	var tortoise, rabbit;
	var rabbitName = "Joey";
	var tortoiseName = "Homey";



	$('button').on('click', function() {
		rabbitName = $('#Rabbit').val();
		tortoiseName = $('#Turtle').val();
		tortoise = new Animal(rabbitName, 3, 8);
		rabbit = new Animal(tortoiseName, 8, 3);
		alert("You'll see a report for each time an animal advances.  Rabbit sometimes gets distracted...");
		while( (rabbit.position < 100) && (tortoise.position < 100) ) {
			rabbit.advance();
			tortoise.advance();
		}
		$('div').append('<p> The race is over. </p>')
	});

		
	