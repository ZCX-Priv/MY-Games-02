
		var Sound = function(){

			this.on = true;
		}


		Sound.Play = function(type, volume){
		
			

			if (typeof(volume)==='undefined') {
				volume = 1;
			}

			if (Sound.on) {			
				var sound = new Phaser.Sound(game, type, volume);
				sound.play();
				//console.log("playing sound: " + type);				
			}
		}