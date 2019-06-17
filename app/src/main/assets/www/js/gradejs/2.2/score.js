Game.grade2_2Score=function(game){

};


Game.grade2_2Score.prototype={
	create:function(game){
		
		this.bg = this.add.tileSprite(0,-80,this.world.width,this.world.height,'CommonBackground');
		this.bg.scale.setTo(1,1.5);
		/*var homeBtn = this.add.button(this.world.centerX-150,this.world.centerY,'CommonHomeBtn',function(){
			this.state.start('grade1levelSelectionScreen');
		},this,1,0,2);
		homeBtn.scale.setTo(2,2);
		homeBtn.anchor.setTo(0.5);
		
		var nextBtn = this.add.button(this.world.centerX+150,this.world.centerY,'CommonNextBtn',function(){
			this.state.start('grade2_3preloader');
		},this,1,0,2);
         
		nextBtn.scale.setTo(2,2);
        nextBtn.anchor.setTo(0.5);*/
		
		var homeBtn = this.add.sprite(this.world.centerX-150,this.world.centerY,'CommonHomeBtn');
		homeBtn.scale.setTo(2,2);
		homeBtn.anchor.setTo(0.5);
		homeBtn.inputEnabled = true;
		homeBtn.events.onInputDown.add(function(){
			var click = this.add.audio('ClickSound');
            click.play();
			if(grade2Selected == false)
                  _this.state.start('grade1levelSelectionScreen',true,false); 
                else
                  _this.state.start('grade2levelSelectionScreen',true,false);  
		},this);
		
		var nextBtn = this.add.sprite(this.world.centerX+150,this.world.centerY,'CommonNextBtn');    
		nextBtn.scale.setTo(2,2);
        nextBtn.anchor.setTo(0.5);	
		nextBtn.inputEnabled = true;
		nextBtn.events.onInputDown.add(function(){
			//this.cache.destroy();
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('grade2_3level1'); 
		},this);
        
		//adding the replay button to the scene
        var replay = this.add.button(this.world.centerX,this.world.centerY,'CommonReplayBtn',null,this,0,1,2);
		replay.scale.setTo(2,2);
		replay.anchor.setTo(0.5);
        replay.inputEnabled = true;
		replay.input.useHandCursor = true; 
		
        replay.events.onInputDown.add(function(){ 
			replay.events.onInputDown.removeAll();	
			replay.inputEnabled = false;
			replay.input.useHandCursor = false;
			
			var click = this.add.audio('ClickSound');
            click.play();
			
            this.state.start('grade2_2level1');
        },this);
		
		//absdsjsapi.syncTelemetryData();
                   
	},

};