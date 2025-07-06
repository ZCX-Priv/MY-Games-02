

var _parent;

//if(navigator.userAgent.indexOf("Firefox") != -1 ){
	//parent = '';
//}else{
	_parent = 'mygame';
//}

var game = new Phaser.Game(1920, 1080, Phaser.CANVAS, _parent, {}, true);

//ratio 1.484



//global variables - persistent across states
var projectInfo = new Object();
Sound.on = true;
projectInfo.alertSent = false;
projectInfo.tutorialPlayed = false;




var bootState = {

	init: function(){

		window.famobi_analytics.trackScreen("SCREEN_SPLASH");

		var clientWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
		var clientHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);


		document.getElementsByTagName("body")[0].style.backgroundColor = 'black';
		document.getElementsByTagName("body")[0].style.backgroundImage = "url(assets/img/bgLarge.png)";
		document.getElementsByTagName("body")[0].style.backgroundPosition = "center";
		document.getElementsByTagName("body")[0].style.backgroundSize = "cover";
        document.getElementsByTagName("body")[0].style.margin = 0;
        document.getElementsByTagName("body")[0].style.padding = 0;
        document.getElementById("mygame").style.maxWidth = '100%';
        //document.getElementById("game").style.minHeight = '100%';
        document.getElementById("mygame").style.maxHeight = '100%';


        if (!game.device.desktop) {
 			document.getElementById("mygame").style.minHeight = '100%';

        }else{
        	if(game.device.firefox){
        		//document.getElementById("mygame").style.maxHeight = clientHeight;

        		console.log("firefox only");

        		document.getElementsByTagName("body")[0].style.margin = 0;
        		document.getElementsByTagName("body")[0].style.padding = 0;

        		document.getElementById("mygame").style.width = '99vw';
        		document.getElementById("mygame").style.height = '99vh';
        		document.getElementById("mygame").style.margin = 0;


        	}else{
        		game.scale.pageAlignHorizontally = true;
        	}
        }

        //var margin = String(Math.abs(clientHeight - document.getElementById("game").clientHeight) / 2) + "px";
        //document.getElementById("game").style.marginTop = margin;

        //game.scale.pageAlignHorizontally = true;




		game.time.advancedTiming = true;


        game.scale.windowConstraints.bottom = "visual";
        //game.scale.windowConstraints.right = "visual";
        game.scale.pageAlignVertically = true;
        //game.scale.pageAlignHorizontally = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		//game.scale.maxHeight = clientHeight;
		//game.scale.maxWidth = clientHeight * 1024 / 690;
		//game.scale.forceOrientation(!1, !1);





        game.input.maxPointers = 1;
        game.stage.disableVisibilityChange = !1;


		//console.log("checking screen size");
		//console.log("game width: " + game.width);
		//console.log("game height: " + game.height);
		//console.log("client width: " + clientWidth);
		//console.log("client height: " + clientHeight);


	},

	preload: function(){

		//load preloader assets
		//this.load.image('bgL', 'assets/img/bgL.png');
		//this.load.image('bgP', 'assets/img/bgP.png');
		this.load.image('title', 'assets/img/title.png');
		this.load.image('rack', 'assets/img/rack.png');
		this.load.image('loaderBase', 'assets/img/loaderBase.png');
		this.load.image('loaderFill', 'assets/img/loaderFill.png');
		this.load.image('loaderHighlight', 'assets/img/loaderHighlight.png');
		//this.load.image('guiFrame', 'assets/img/frame.png');

	},

	create: function (){

		//start the preloader state
		game.state.start('load');
	}




}



game.state.add('load', loadState);
game.state.add('mainMenu', menuState);
game.state.add('play', playState);
game.state.add('boot', bootState);


game.state.start('boot');



