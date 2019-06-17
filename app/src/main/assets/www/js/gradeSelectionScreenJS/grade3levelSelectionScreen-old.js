Game.grade3levelSelectionScreen=function(game){
	//var this.tween,this.tap;
	//var this.grade3FractionGroup,this.grade3LengthGroup,this.grade3WeightGroup;
};

Game.grade3levelSelectionScreen.prototype={
	
	init:function()
	{
		
	},

	

	create:function(game){
		var _this = this;
		
		this.input.enabled = true;
		this.tween = null;
		this.tap = false;
		
		//adding bg, title to the scene.
		this.background = this.add.tileSprite(0,0,this.world.width,this.world.height, 'gameselectBg');
		
		this.gradeBackBtn = this.add.sprite(10,3,'gradeSceneBackBtn');
		this.gradeBackBtn.inputEnabled = true;
		this.gradeBackBtn.input.useHandCursor = true;
		this.gradeBackBtn.input.priorityID = 1;
		this.gradeBackBtn.events.onInputDown.add(function(target){
			target.events.onInputDown.removeAll();
			//this.cache.destroy();
			this.click = this.add.audio('ClickSound');
            this.click.play();
			
			this.state.start('gradeSelectionScreen');
		},this);
		
		
		this.grade3FractionGroup = this.add.group();
		this.grade3LengthGroup = this.add.group();
		this.grade3WeightGroup = this.add.group();
		
		this.addGrade3FractionTopic();
		this.addGrade3LengthTopic();
		this.addGrade3WeightTopic();

		this.grade3FractionGroup.x = 0;
		this.grade3FractionGroup.y = 0;
		
		this.grade3LengthGroup.x = 0;
		this.grade3LengthGroup.y = 450;
		
		this.grade3WeightGroup.x = 0;
		this.grade3WeightGroup.y = 900;
		
		
		this.graphicsBg = this.add.graphics(0, 0);
		this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		this.graphicsBg.beginFill(0xF7D519, 0);
		this.graphicsBg.drawRect(0,0,960,1620);
		this.graphicsBg.boundsPadding = 0;
		
		
		this.mask = this.add.graphics();
        this.mask.position.x = 0;   
        this.mask.position.y = 35;   
        this.mask.beginFill(0, 1);   
        this.mask.moveTo(0, 0);   
        this.mask.lineTo(960, 0);   
        this.mask.lineTo(960, 505);   
        this.mask.lineTo(0, 505);   
        this.mask.lineTo(0, 0);   
        this.mask.endFill();   
        this.graphicsBg.mask = this.mask;
		
		
		
		
		this.graphicsBg.addChild(this.grade3FractionGroup);
		this.graphicsBg.addChild(this.grade3LengthGroup);
		this.graphicsBg.addChild(this.grade3WeightGroup);
		
		
		this.swipeUpFlag = true;
		this.swipeDownFlag = false;
		this.page = document.getElementById("body"); 
		this.mc = new Hammer(this.page);
			this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });

			this.mc.on("swipeleft", function () { 
				//console.log('swipeleft');
			}); 
          
           this.mc.on("swiperight", function () { 
				//console.log('swiperight');
			});
			
			this.mc.on("swipeup", function (v) { 
				//console.log(v);
				
				
			//	if(this.swipeUpFlag)
			//	{
					//game.input.enabled = false;

					this.tween = game.add.tween(_this.graphicsBg);
					this.tween.to({ y: _this.graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					this.tween.onComplete.add(function(){
					//	this.swipeDownFlag = true;
						if(_this.graphicsBg.y<=-900)
						{
							//this.swipeUpFlag = false;
							_this.graphicsBg.y = -900;
						}
						
						//game.input.enabled = true;
					}, this);
					this.tween.onUpdateCallback(function(){
						this.tap = false;
						if(_this.graphicsBg.y<=-900)
						{
							//this.swipeUpFlag = false;
							_this.graphicsBg.y = -900;
							//this.tween.stop();
							//game.input.enabled = true;
						}
					},this);
					
			//	}
			}); 
			
			this.mc.on("swipedown", function (v) { 
				
			//	if(this.swipeDownFlag)
			//	{
					//game.input.enabled = false;
					this.tween = game.add.tween(_this.graphicsBg);
					this.tween.to({ y: _this.graphicsBg.y+(v.distance*(v.overallVelocity*2)) }, 0, 'Linear', true, 0);
					this.tween.onComplete.add(function(){
					//	this.swipeUpFlag = true;
						if(_this.graphicsBg.y>=0)
						{
						//	this.swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						//game.input.enabled = true;
					}, this);
					
					this.tween.onUpdateCallback(function(){
						this.tap = false;
						if(_this.graphicsBg.y>=0)
						{
							//this.swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							//this.tween.stop();
							//game.input.enabled = true;
						}
					},this);
			//	}
			});

			this.input.onDown.add(function(){
				if(this.tween)
				{
					if(this.tween.isRunning)
						this.tween.stop();
				}
				this.graphicsBg.inputEnabled = true;
				this.graphicsBg.input.enableDrag();
				this.graphicsBg.input.allowHorizontalDrag = false;

				this.graphicsBg.events.onDragUpdate.add(function(){
					this.tap = false;
					if(this.tween)
					{
						if(this.tween.isRunning)
							this.tween.stop();
					}
					if(this.graphicsBg.y>=10)
						{
							//this.swipeUpFlag = false;
							this.graphicsBg.y = 0;
							//this.tween.stop();
							//game.input.enabled = true;
						}
					else if(this.graphicsBg.y<=-910)
						{
							//this.swipeUpFlag = false;
							this.graphicsBg.y = -900;
							//this.tween.stop();
							//game.input.enabled = true;
						}
				},this);

				this.graphicsBg.events.onDragStop.add(function(e){
					this.tap = false;
					//console.log(e);
					if(this.tween)
					{
						//if(this.tween.isRunning)
							this.tween.stop();
					}

						if(this.graphicsBg.y>=0)
						{
						//	this.swipeDownFlag = false;
							this.graphicsBg.y = 0;
						}
						else if(this.graphicsBg.y<=-900)
						{
							//this.swipeUpFlag = false;
							this.graphicsBg.y = -900;
						}
					
				},this);

			},this);
		
		this.input.onTap.add(function(){
			//console.log("this.tap");
			this.tap = true;
			this.time.events.add(300, function(){
				this.tap = false;
				//console.log("tapfalse");
			},this);
		},this);
	},
	
	
	addGrade3FractionTopic:function()
	{
		var topicTxtBg = this.add.graphics(100, 60);
		topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicTxtBg.beginFill(0xF7D519, 1);
		topicTxtBg.drawRoundedRect(0,0,170,100,10);
		topicTxtBg.boundsPadding = 0;
		
		var topicTitleText = this.add.text(185, 85, selctedLang.fractionTitle);
		topicTitleText.anchor.setTo(0.5);
		topicTitleText.align = 'center';

		topicTitleText.font = 'Comic Sans MS';
		topicTitleText.fontSize = 27;
		//topicTitleText.fontWeight = 'bold';
		topicTitleText.fill = '#361F0A';

		topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		var topicBg = this.add.graphics(75, 100);
		topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicBg.beginFill(0xF7D519, 1);
		topicBg.drawRoundedRect(0,0,805,400,30);
		topicBg.boundsPadding = 0;
		
		 var fractions1_1BScreen = this.add.sprite(100,120,'fractions1_1Screen');
		  var fractions1_1BScreenTxt = this.add.text(175, 250, selctedLang.fraction1_1BDesc);
		  fractions1_1BScreenTxt.anchor.setTo(0.5);
		  fractions1_1BScreenTxt.align = 'left';

		  fractions1_1BScreenTxt.font = 'Comic Sans MS';
		  fractions1_1BScreenTxt.fontSize = 20;
		  //fractions1_1ScreenTxt.fontWeight = 'bold';
		  fractions1_1BScreenTxt.fill = '#361F0A';

		  fractions1_1BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		  
		  fractions1_1BScreen.inputEnabled = true;
		  fractions1_1BScreen.input.useHandCursor = true;
		  fractions1_1BScreen.events.onInputDown.add(function(target){
		   //this.state.start('grade1_1preloader');
		   //console.log("hit1");
		   //console.log("this"+event,e);
		   this.time.events.add(300, function(){
			//console.log("hitfront");
			if(this.tap)
			{
			 console.log("hit");
			 /*var currentTime = window.timeSaveFunc();
			 var interactEvent = 
			 { 
			  id_game_play: "levelSelectionScreen", 
			  id_question: target.name,  
			  date_time_event: currentTime, 
			  event_type: "click", 
			  res_id: target.name+" button", 
			  access_token: window.acctkn 
			 } 
			  
			 absdsjsapi.saveInteractEvent(interactEvent);
			 */
			 //this.cache.destroy();
			target.events.onInputDown.removeAll();
			var click = this.add.audio('ClickSound');
			click.play();
			 this.state.start('grade1_1Blevel1');
			}
		   },this);
		  },this);
		
		var fractions1_2AScreen = this.add.sprite(300,120,'fractions1_2AScreen');
		var fractions1_2AScreenTxt = this.add.text(375, 250, selctedLang.fraction1_2ADesc);
		fractions1_2AScreenTxt.anchor.setTo(0.5);
		fractions1_2AScreenTxt.align = 'left';

		fractions1_2AScreenTxt.font = 'Comic Sans MS';
		fractions1_2AScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		fractions1_2AScreenTxt.fill = '#361F0A';

		fractions1_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		fractions1_2AScreen.inputEnabled = true;
		fractions1_2AScreen.input.useHandCursor = true;
		fractions1_2AScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade1_2Alevel1');
				}
			},this);
		},this);
		
		var fractions1_2BScreen = this.add.sprite(500,120,'fractions1_2BScreen');
		var fractions1_2BScreenTxt = this.add.text(575, 250, selctedLang.fraction1_2BDesc);
		fractions1_2BScreenTxt.anchor.setTo(0.5);
		fractions1_2BScreenTxt.align = 'left';

		fractions1_2BScreenTxt.font = 'Comic Sans MS';
		fractions1_2BScreenTxt.fontSize = 20;
		//fractions1_2ScreenTxt.fontWeight = 'bold';
		fractions1_2BScreenTxt.fill = '#361F0A';

		fractions1_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		fractions1_2BScreen.inputEnabled = true;
		fractions1_2BScreen.input.useHandCursor = true;
		fractions1_2BScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade1_2Blevel1');
				}
			},this);
		},this);
		
		var fractions1_2CScreen = this.add.sprite(700,120,'fractions1_2CScreen');
		var fractions1_2CScreenTxt = this.add.text(775, 250, selctedLang.fraction1_2CDesc);
		fractions1_2CScreenTxt.anchor.setTo(0.5);
		fractions1_2CScreenTxt.align = 'left';

		fractions1_2CScreenTxt.font = 'Comic Sans MS';
		fractions1_2CScreenTxt.fontSize = 20;
		//fractions1_2ScreenTxt.fontWeight = 'bold';
		fractions1_2CScreenTxt.fill = '#361F0A';

		fractions1_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		fractions1_2CScreen.inputEnabled = true;
		fractions1_2CScreen.input.useHandCursor = true;
		fractions1_2CScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade1_2Clevel1');
				}
			},this);
			
		},this);
		
		
		
		this.grade3FractionGroup.add(topicTxtBg);
		this.grade3FractionGroup.add(topicTitleText);
		this.grade3FractionGroup.add(topicBg);
		this.grade3FractionGroup.add(fractions1_1BScreen);
		this.grade3FractionGroup.add(fractions1_1BScreenTxt);
		this.grade3FractionGroup.add(fractions1_2AScreen);		
		this.grade3FractionGroup.add(fractions1_2AScreenTxt);
		this.grade3FractionGroup.add(fractions1_2BScreen);
		this.grade3FractionGroup.add(fractions1_2BScreenTxt);
		this.grade3FractionGroup.add(fractions1_2CScreen);
		this.grade3FractionGroup.add(fractions1_2CScreenTxt);
		
	},
	
	addGrade3LengthTopic:function()
	{
		var topicTxtBg = this.add.graphics(100, 60);
		topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicTxtBg.beginFill(0xF7D519, 1);
		topicTxtBg.drawRoundedRect(0,0,170,100,10);
		topicTxtBg.boundsPadding = 0;
		
		var topicTitleText = this.add.text(185, 85, selctedLang.lengthTitle);
		topicTitleText.anchor.setTo(0.5);
		topicTitleText.align = 'center';

		topicTitleText.font = 'Comic Sans MS';
		topicTitleText.fontSize = 27;
		//topicTitleText.fontWeight = 'bold';
		topicTitleText.fill = '#361F0A';

		topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		var topicBg = this.add.graphics(75, 100);
		topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicBg.beginFill(0xF7D519, 1);
		topicBg.drawRoundedRect(0,0,805,400,30);
		topicBg.boundsPadding = 0;
		
		var length2_4AScreen = this.add.sprite(100,120,'length2_4AScreen');
		var length2_4AScreenTxt = this.add.text(175, 250, selctedLang.length2_4ADesc);
		length2_4AScreenTxt.anchor.setTo(0.5);
		length2_4AScreenTxt.align = 'left';

		length2_4AScreenTxt.font = 'Comic Sans MS';
		length2_4AScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		length2_4AScreenTxt.fill = '#361F0A';

		length2_4AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		length2_4AScreen.inputEnabled = true;
		length2_4AScreen.input.useHandCursor = true;
		length2_4AScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade2_4Alevel1');
				}
			},this);
		},this);
		
		var length2_4BScreen = this.add.sprite(300,120,'length2_4BScreen');
		var length2_4BScreenTxt = this.add.text(375, 250, selctedLang.length2_4BDesc);
		length2_4BScreenTxt.anchor.setTo(0.5);
		length2_4BScreenTxt.align = 'left';

		length2_4BScreenTxt.font = 'Comic Sans MS';
		length2_4BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		length2_4BScreenTxt.fill = '#361F0A';

		length2_4BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		length2_4BScreen.inputEnabled = true;
		length2_4BScreen.input.useHandCursor = true;
		length2_4BScreen.events.onInputDown.add(function(target){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade2_4Blevel1');
				}
			},this);
		},this);
		
		

		this.grade3LengthGroup.add(topicTxtBg);
		this.grade3LengthGroup.add(topicTitleText);
		this.grade3LengthGroup.add(topicBg);
		this.grade3LengthGroup.add(length2_4AScreen);
		this.grade3LengthGroup.add(length2_4AScreenTxt);
		this.grade3LengthGroup.add(length2_4BScreen);
		this.grade3LengthGroup.add(length2_4BScreenTxt);
		
		
	},
	
	addGrade3WeightTopic:function()
	{
		var topicTxtBg = this.add.graphics(100, 60);
		topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicTxtBg.beginFill(0xF7D519, 1);
		topicTxtBg.drawRoundedRect(0,0,170,100,10);
		topicTxtBg.boundsPadding = 0;
		
		var topicTitleText = this.add.text(185, 85, selctedLang.weightTitle);
		topicTitleText.anchor.setTo(0.5);
		topicTitleText.align = 'center';

		topicTitleText.font = 'Comic Sans MS';
		topicTitleText.fontSize = 27;
		//topicTitleText.fontWeight = 'bold';
		topicTitleText.fill = '#361F0A';

		topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		var topicBg = this.add.graphics(75, 100);
		topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicBg.beginFill(0xF7D519, 1);
		topicBg.drawRoundedRect(0,0,805,400,30);
		topicBg.boundsPadding = 0;
		
		var weight3_2BScreen = this.add.sprite(100,120,'weight3_2BScreen');
		var weight3_2BScreenTxt = this.add.text(175, 250, selctedLang.weight3_2BDesc);
		weight3_2BScreenTxt.anchor.setTo(0.5);
		weight3_2BScreenTxt.align = 'left';

		weight3_2BScreenTxt.font = 'Comic Sans MS';
		weight3_2BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_2BScreenTxt.fill = '#361F0A';

		weight3_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_2BScreen.inputEnabled = true;
		weight3_2BScreen.input.useHandCursor = true;
		weight3_2BScreen.events.onInputDown.add(function(target){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade3_2Blevel1');
				}
			},this);
		},this);
		
		var weight3_2CScreen = this.add.sprite(300,120,'weight3_2CScreen');
		var weight3_2CScreenTxt = this.add.text(375, 250, selctedLang.weight3_2CDesc);
		weight3_2CScreenTxt.anchor.setTo(0.5);
		weight3_2CScreenTxt.align = 'left';

		weight3_2CScreenTxt.font = 'Comic Sans MS';
		weight3_2CScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_2CScreenTxt.fill = '#361F0A';

		weight3_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_2CScreen.inputEnabled = true;
		weight3_2CScreen.input.useHandCursor = true;
		weight3_2CScreen.events.onInputDown.add(function(target){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade3_2Clevel1');
				}
			},this);
		},this);
		
		var weight3_2DScreen = this.add.sprite(500,120,'weight3_2DScreen');
		var weight3_2DScreenTxt = this.add.text(575, 250, selctedLang.weight3_2DDesc);
		weight3_2DScreenTxt.anchor.setTo(0.5);
		weight3_2DScreenTxt.align = 'left';

		weight3_2DScreenTxt.font = 'Comic Sans MS';
		weight3_2DScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_2DScreenTxt.fill = '#361F0A';

		weight3_2DScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_2DScreen.inputEnabled = true;
		weight3_2DScreen.input.useHandCursor = true;
		weight3_2DScreen.events.onInputDown.add(function(target){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade3_2Dlevel1');
				}
			},this);
		},this);
		
		var weight3_3AScreen = this.add.sprite(700,120,'weight3_3AScreen');
		var weight3_3AScreenTxt = this.add.text(775, 250, selctedLang.weight3_3ADesc);
		weight3_3AScreenTxt.anchor.setTo(0.5);
		weight3_3AScreenTxt.align = 'left';

		weight3_3AScreenTxt.font = 'Comic Sans MS';
		weight3_3AScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_3AScreenTxt.fill = '#361F0A';

		weight3_3AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_3AScreen.inputEnabled = true;
		weight3_3AScreen.input.useHandCursor = true;
		weight3_3AScreen.events.onInputDown.add(function(target){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade3_3Alevel1');
				}
			},this);
		},this);
		
		var weight3_3B1Screen = this.add.sprite(100,320,'weight3_3B1Screen');
		var weight3_3B1ScreenTxt = this.add.text(175, 450, selctedLang.weight3_3B1Desc);
		weight3_3B1ScreenTxt.anchor.setTo(0.5);
		weight3_3B1ScreenTxt.align = 'left';

		weight3_3B1ScreenTxt.font = 'Comic Sans MS';
		weight3_3B1ScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_3B1ScreenTxt.fill = '#361F0A';

		weight3_3B1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_3B1Screen.inputEnabled = true;
		weight3_3B1Screen.input.useHandCursor = true;
		weight3_3B1Screen.events.onInputDown.add(function(target){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade3_3B1level1');
				}
			},this);
		},this);
		
		var weight3_3B2Screen = this.add.sprite(300,320,'weight3_3B2Screen');
		var weight3_3B2ScreenTxt = this.add.text(375, 450, selctedLang.weight3_3B2Desc);
		weight3_3B2ScreenTxt.anchor.setTo(0.5);
		weight3_3B2ScreenTxt.align = 'left';

		weight3_3B2ScreenTxt.font = 'Comic Sans MS';
		weight3_3B2ScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_3B2ScreenTxt.fill = '#361F0A';

		weight3_3B2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_3B2Screen.inputEnabled = true;
		weight3_3B2Screen.input.useHandCursor = true;
		weight3_3B2Screen.events.onInputDown.add(function(target){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(this.tap)
				{
					console.log("hit");
					/*var currentTime = window.timeSaveFunc();
					var interactEvent = 
					{ 
						id_game_play: "levelSelectionScreen", 
						id_question: target.name,  
						date_time_event: currentTime, 
						event_type: "click", 
						res_id: target.name+" button", 
						access_token: window.acctkn 
					} 
						
					absdsjsapi.saveInteractEvent(interactEvent);
					*/
					//this.cache.destroy();
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade3_3B2level1');
				}
			},this);
		},this);
		
		
		this.grade3WeightGroup.add(topicTxtBg);
		this.grade3WeightGroup.add(topicTitleText);
		this.grade3WeightGroup.add(topicBg);
		this.grade3WeightGroup.add(weight3_2BScreen);
		this.grade3WeightGroup.add(weight3_2BScreenTxt);
		this.grade3WeightGroup.add(weight3_2CScreen);
		this.grade3WeightGroup.add(weight3_2CScreenTxt);
		this.grade3WeightGroup.add(weight3_2DScreen);
		this.grade3WeightGroup.add(weight3_2DScreenTxt);
		this.grade3WeightGroup.add(weight3_3AScreen);
		this.grade3WeightGroup.add(weight3_3AScreenTxt);
		this.grade3WeightGroup.add(weight3_3B1Screen);
		this.grade3WeightGroup.add(weight3_3B1ScreenTxt);
		this.grade3WeightGroup.add(weight3_3B2Screen);
		this.grade3WeightGroup.add(weight3_3B2ScreenTxt);
		
	}
	
	
};