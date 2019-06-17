var Game={};

Game.boot=function(){
	
};

Game.boot.prototype={
	
	preload:function(){
		
		_this = this;
		_this.cache.destroy();		
		
		_this.load.json('translations', 'json/commonJson/lang.json');
				
		//_this.load.image('preloadBar','assets/commonAssets/progressBar.png');

		

		_this.load.image('loadingBg1','assets/commonAssets/loadingBg1.png');
		_this.load.image('loadingBg2','assets/commonAssets/loadingBg2.png');
		_this.load.image('singleCarrotForLoading','assets/commonAssets/singleCarrotForLoading.png');
		_this.load.atlas('loadingTankAnim','assets/commonAssets/loadingTankAnim.png','assets/commonAssets/loadingTankAnim.json');
		_this.load.atlas('loadingGlassAnim','assets/commonAssets/loadingGlassAnim.png','assets/commonAssets/loadingGlassAnim.json');
		_this.load.atlas('loadingBottleAnim','assets/commonAssets/loadingBottleAnim.png','assets/commonAssets/loadingBottleAnim.json');
		_this.load.atlas('loadingTimeAnim','assets/commonAssets/loadingTimeAnim.png','assets/commonAssets/loadingTimeAnim.json');
		_this.load.atlas('loadingFishAnim2','assets/commonAssets/loadingFishAnim2.png','assets/commonAssets/loadingFishAnim2.json');
		_this.load.atlas('rabitSittingAnim','assets/commonAssets/rabitSittingAnim.png','assets/commonAssets/rabitSittingAnim.json');
		_this.load.atlas('rabitEatingAnim','assets/commonAssets/rabitEatingAnim.png','assets/commonAssets/rabitEatingAnim.json');
		_this.load.atlas('rabitJumpAnim','assets/commonAssets/rabitJumpAnim.png','assets/commonAssets/rabitJumpAnim.json');


		_this.load.image('CommonBackground','assets/commonAssets/commonBg.png');
		
		_this.load.atlas('CommonAssets','assets/commonAssets/phaserTest.png','assets/commonAssets/phaserTest.json');	
      	
	},

	create:function(){
		_this.bg = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'CommonAssets','commonBg');
		_this.bg.scale.setTo(1,1.5);
		
		_this.game.input.maxPointers = 1;

		//this.Input.MOUSE_OVERRIDES_TOUCH = 1;
		//_this.game.input.multiInputOverride = Phaser.Input.TOUCH_OVERRIDES_MOUSE;

		//_this.game.input.touch.preventDefault = true;

		_this.game.stage.disableVisibilityChange=true;
		
		//setting scale and orientation for the game.
		_this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        _this.scale.pageAlignHorizontally = true;
        _this.scale.pageAlignVertically = true;
        _this.scale.updateLayout(true);
        _this.scale.forceOrientation(false, true);
		
		
		
		var translations = _this.cache.getJSON('translations');
		
		if(window.languageSelected == "Hindi")
		{
			window.selctedLang = translations.hn;
		}
		else if(window.languageSelected == "Kannada")
		{
			window.selctedLang = translations.kan;
		}
		else if(window.languageSelected == "Odiya")
		{
			window.selctedLang = translations.od;
		}
		else
		{
			window.selctedLang = translations.en;
		}
		this.game.add.text(0, 0, "hack", {font:"1px myfont", fill:"#FFFFFF"});
		this.game.add.text(0, 0, "hack", {font:"1px gradefont", fill:"#FFFFFF"});

		//sounds = [ 'loadingSound' ];

		//this.sound.setDecodedCallback(sounds, 
		//	function()
		//	{
				_this.state.start('preloader',true,false);
		//	}, this);
					
					
	},
	
	shutdown:function()
	{
		_this = null;
	}
	
}