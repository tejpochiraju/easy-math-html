Game.grade1_2CScore=function(game){

};
var background;
var score;
Game.grade1_2CScore.prototype={
	create:function(game){
		
		this.bg = this.add.tileSprite(0,-80,this.world.width,this.world.height,'CommonBackground');
		this.bg.scale.setTo(1,1.5);
		
		
		var homeBtn = this.add.sprite(this.world.centerX-150,this.world.centerY,'CommonHomeBtn');
		homeBtn.scale.setTo(2,2);
		homeBtn.anchor.setTo(0.5);
		homeBtn.inputEnabled = true;
		homeBtn.events.onInputDown.add(function(){
			//this.cache.destroy();
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade3levelSelectionScreen'); 
			},this);
		
		
		var nextBtn = this.add.sprite(this.world.centerX+150,this.world.centerY,'CommonNextBtn');    
		nextBtn.scale.setTo(2,2);
        nextBtn.anchor.setTo(0.5);	
		nextBtn.inputEnabled = true;
		nextBtn.events.onInputDown.add(function()
		{
			var click = this.add.audio('ClickSound');
            click.play();
			//this.cache.destroy();
			this.state.start('grade2_4Alevel1'); 
		},this);
		
		
//		scoretext = this.add.text(this.world.centerX, this.world.centerY-90, selctedLang.levelComplete);
//		scoretext.scale.setTo(1.5);
//		scoretext.anchor.setTo(0.5);
//		scoretext.align = 'center';
//
//		scoretext.font = 'Comic Sans MS';
//		scoretext.fontSize = 40;
//		//text.fontWeight = 'bold';
//		scoretext.fill = '#FFFFFF';
//
//		scoretext.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        
        
                replay = this.add.button(this.world.centerX,this.world.centerY,'CommonReplayBtn',null,this,0,1,2);
		        replay.scale.setTo(2,2);
		        replay.anchor.setTo(0.5);
                replay.inputEnabled = true;
		        replay.input.useHandCursor = true; 
                replay.events.onInputDown.add(function(){ 
                    var click = this.add.audio('ClickSound');
            click.play();
                    this.state.start('grade1_2Clevel1');
                 },this);
        
//        scoretext9= this.add.text(this.world.centerX-10, 270, selctedLang.Replay);
//
//				 scoretext9.anchor.set(0.5);
//				 scoretext9.align = 'center';
//
//				 scoretext9.font = 'Arial Black';
//				 scoretext9.fontSize = 25;
//				 //scoretext7.fontWeight = 'bold';
//				 scoretext9.fill = '#FFFFFF';
//
//				 scoretext9.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
		
		localStorage.setItem('Score', JSON.stringify(score));
        
	},

	update:function(game){

	},

};