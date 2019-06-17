Game.grade4levelSelectionScreen=function(game){
	var tween,tap;
	var grade4VolumeGroup,grade4LengthGroup,grade4WeightGroup;
};
/*grade4FractionGroup*/
Game.grade4levelSelectionScreen.prototype={
	
	init:function()
	{
		
	},

	

	create:function(game){
		this.input.enabled = true;	
		tween = null;
		tap = false;
		
		//adding bg, title to the scene.
		var background = this.add.sprite(0,0, 'gameselectBg');
		
		var gradeBackBtn = this.add.sprite(10,3,'gradeSceneBackBtn');
		gradeBackBtn.inputEnabled = true;
		gradeBackBtn.input.useHandCursor = true;
		gradeBackBtn.input.priorityID = 1;
		gradeBackBtn.events.onInputDown.add(function(target){
			target.events.onInputDown.removeAll();
			//this.cache.destroy();
			var click = this.add.audio('ClickSound');
            click.play();
			this.state.start('gradeSelectionScreen');
		},this);
		
		
		grade4VolumeGroup = this.add.group();
		/*grade4LengthGroup = this.add.group();
		grade4WeightGroup = this.add.group();*/
		
		this.addGrade4VolumeTopic();
		/*this.addGrade4LengthTopic();
		this.addGrade4WeightTopic();*/

		grade4VolumeGroup.x = 0;
		grade4VolumeGroup.y = 0;
		
		/*grade4LengthGroup.x = 0;
		grade4LengthGroup.y = 450;
		
		grade4WeightGroup.x = 0;
		grade4WeightGroup.y = 900;*/
		
		
		var graphicsBg = this.add.graphics(0, 0);
		graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		graphicsBg.beginFill(0xF7D519, 0);
		graphicsBg.drawRect(0,0,960,600);
		graphicsBg.boundsPadding = 0;
		
		
		var mask = this.add.graphics();
        mask.position.x = 0;   
        mask.position.y = 35;   
        mask.beginFill(0, 1);   
        mask.moveTo(0, 0);   
        mask.lineTo(960, 0);   
        mask.lineTo(960, 505);   
        mask.lineTo(0, 505);   
        mask.lineTo(0, 0);   
        mask.endFill();   
        graphicsBg.mask = mask;
		
		
		
		
		graphicsBg.addChild(grade4VolumeGroup);
		//graphicsBg.addChild(grade4LengthGroup);
		//graphicsBg.addChild(grade4WeightGroup);
		
		
		var swipeUpFlag = true;
		var swipeDownFlag = false;
		var page = document.getElementById("body"); 
		var mc = new Hammer(page);
			mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });

			mc.on("swipeleft", function () { 
				//console.log('swipeleft');
			}); 
          
           mc.on("swiperight", function () { 
				//console.log('swiperight');
			});
			
			mc.on("swipeup", function (v) { 
				//console.log(v);
				
				
			//	if(swipeUpFlag)
			//	{
					//game.input.enabled = false;

					tween = game.add.tween(graphicsBg);
					tween.to({ y: graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					tween.onComplete.add(function(){
					//	swipeDownFlag = true;
						if(graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							graphicsBg.y = -182;
						}
						
						//game.input.enabled = true;
					}, this);
					tween.onUpdateCallback(function(){
						tap = false;
						if(graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							graphicsBg.y = -182;
							//tween.stop();
							//game.input.enabled = true;
						}
					},this);
					
			//	}
			}); 
			
			mc.on("swipedown", function (v) { 
				
			//	if(swipeDownFlag)
			//	{
					//game.input.enabled = false;
					tween = game.add.tween(graphicsBg);
					tween.to({ y: graphicsBg.y+(v.distance*(v.overallVelocity*2)) }, 0, 'Linear', true, 0);
					tween.onComplete.add(function(){
					//	swipeUpFlag = true;
						if(graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							graphicsBg.y = 0;
						}
						//game.input.enabled = true;
					}, this);
					
					tween.onUpdateCallback(function(){
						tap = false;
						if(graphicsBg.y>=0)
						{
							//swipeUpFlag = false;
							graphicsBg.y = 0;
							//tween.stop();
							//game.input.enabled = true;
						}
					},this);
			//	}
			});

			this.input.onDown.add(function(){
				if(tween)
				{
					if(tween.isRunning)
						tween.stop();
				}
				graphicsBg.inputEnabled = true;
				graphicsBg.input.enableDrag();
				graphicsBg.input.allowHorizontalDrag = false;

				graphicsBg.events.onDragUpdate.add(function(){
					//console.log(graphicsBg.y);
					tap = false;
					if(tween)
					{
						if(tween.isRunning)
							tween.stop();
					}
					if(graphicsBg.y>=10)
						{
							//swipeUpFlag = false;
							graphicsBg.y = 0;
							//tween.stop();
							//game.input.enabled = true;
						}
					else if(graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							graphicsBg.y = -182;
							//tween.stop();
							//game.input.enabled = true;
						}
				},this);

				graphicsBg.events.onDragStop.add(function(e){
					tap = false;
					//console.log(e);
					if(tween)
					{
						//if(tween.isRunning)
							tween.stop();
					}

						if(graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							graphicsBg.y = 0;
						}
						else if(graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							graphicsBg.y = -182;
						}
					
				},this);

			},this);
		
		this.input.onTap.add(function(){
			//console.log("tap");
			tap = true;
			this.time.events.add(300, function(){
				tap = false;
				//console.log("tapfalse");
			},this);
		},this);
	},
	
	
	addGrade4VolumeTopic:function()
	{
		var topicTxtBg = this.add.graphics(100, 60);
		topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicTxtBg.beginFill(0xF7D519, 1);
		topicTxtBg.drawRoundedRect(0,0,170,100,10);
		topicTxtBg.boundsPadding = 0;
		
		var topicTitleText = this.add.text(185, 85, selctedLang.volumeTitle);
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
		//topicBg.drawRoundedRect(0,0,805,400,30);
		topicBg.drawRoundedRect(0,0,850,600,30);
		topicBg.boundsPadding = 0;
		
		 var volumes4_1AScreen = this.add.sprite(100,120,'volumes4_1AScreen');
		  var volumes4_1AScreenTxt = this.add.text(175, 250, selctedLang.volume4_1ADesc);
		  volumes4_1AScreenTxt.anchor.setTo(0.5);
		  volumes4_1AScreenTxt.align = 'left';

		  volumes4_1AScreenTxt.font = 'Comic Sans MS';
		  volumes4_1AScreenTxt.fontSize = 20;
		  //fractions1_1ScreenTxt.fontWeight = 'bold';
		  volumes4_1AScreenTxt.fill = '#361F0A';

		  volumes4_1AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		  
		  volumes4_1AScreen.inputEnabled = true;
		  volumes4_1AScreen.input.useHandCursor = true;
		  volumes4_1AScreen.events.onInputDown.add(function(target){
		   //this.state.start('grade1_1preloader');
		   //console.log("hit1");
		   //console.log("this"+event,e);
		   this.time.events.add(300, function(){
			//console.log("hitfront");
			if(tap)
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
			 this.state.start('grade4_1Alevel1');
			}
		   },this);
		  },this);
		
		var volumes4_1BScreen = this.add.sprite(300,120,'volumes4_1BScreen');
		var volumes4_1BScreenTxt = this.add.text(375, 250, selctedLang.volume4_1BDesc);
		volumes4_1BScreenTxt.anchor.setTo(0.5);
		volumes4_1BScreenTxt.align = 'left';

		volumes4_1BScreenTxt.font = 'Comic Sans MS';
		volumes4_1BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		volumes4_1BScreenTxt.fill = '#361F0A';

		volumes4_1BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		volumes4_1BScreen.inputEnabled = true;
		volumes4_1BScreen.input.useHandCursor = true;
		volumes4_1BScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade4_1Blevel1');
				}
			},this);
		},this);
		
		var volumes4_1CScreen = this.add.sprite(500,120,'volumes4_1CScreen');
		var volumes4_1CScreenTxt = this.add.text(575, 250, selctedLang.volume4_1CDesc);
		volumes4_1CScreenTxt.anchor.setTo(0.5);
		volumes4_1CScreenTxt.align = 'left';

		volumes4_1CScreenTxt.font = 'Comic Sans MS';
		volumes4_1CScreenTxt.fontSize = 20;
		//fractions1_2ScreenTxt.fontWeight = 'bold';
		volumes4_1CScreenTxt.fill = '#361F0A';

		volumes4_1CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		volumes4_1CScreen.inputEnabled = true;
		volumes4_1CScreen.input.useHandCursor = true;
		volumes4_1CScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					target.events.onInputDown.removeAll();
					var click = this.add.audio('ClickSound');
					click.play();
					this.state.start('grade4_1Clevel1');
				}
			},this);
		},this);
		
		var volumes4_2AScreen = this.add.sprite(700,120,'volumes4_2AScreen');
		var volumes4_2AScreenTxt = this.add.text(775, 250, selctedLang.volume4_2ADesc);
		volumes4_2AScreenTxt.anchor.setTo(0.5);
		volumes4_2AScreenTxt.align = 'left';

		volumes4_2AScreenTxt.font = 'Comic Sans MS';
		volumes4_2AScreenTxt.fontSize = 20;
		//fractions1_2ScreenTxt.fontWeight = 'bold';
		volumes4_2AScreenTxt.fill = '#361F0A';

		volumes4_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		volumes4_2AScreen.inputEnabled = true;
		volumes4_2AScreen.input.useHandCursor = true;
		volumes4_2AScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade42A_level1');
				}
			},this);
			
		},this);
		
		var volumes4_2BScreen = this.add.sprite(100,320,'volumes4_2BScreen');
		var volumes4_2BScreenTxt = this.add.text(175, 450, selctedLang.volume4_2BDesc);
		volumes4_2BScreenTxt.anchor.setTo(0.5);
		volumes4_2BScreenTxt.align = 'left';

		volumes4_2BScreenTxt.font = 'Comic Sans MS';
		volumes4_2BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		volumes4_2BScreenTxt.fill = '#361F0A';

		volumes4_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		volumes4_2BScreen.inputEnabled = true;
		volumes4_2BScreen.input.useHandCursor = true;
		volumes4_2BScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade4_2Blevel1');
				}
			},this);
		},this);
		
		var volumes4_2CScreen = this.add.sprite(300,320,'volumes4_2CScreen');
		var volumes4_2CScreenTxt = this.add.text(375, 450, selctedLang.volume4_2CDesc);
		volumes4_2CScreenTxt.anchor.setTo(0.5);
		volumes4_2CScreenTxt.align = 'left';

		volumes4_2CScreenTxt.font = 'Comic Sans MS';
		volumes4_2CScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		volumes4_2CScreenTxt.fill = '#361F0A';

		volumes4_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		volumes4_2CScreen.inputEnabled = true;
		volumes4_2CScreen.input.useHandCursor = true;
		volumes4_2CScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade4_2Clevel1');
				}
			},this);
		},this);
		
		var volumes4_3AScreen = this.add.sprite(500,320,'volumes4_3AScreen');
		var volumes4_3AScreenTxt = this.add.text(575, 450, selctedLang.volume4_3ADesc);
		volumes4_3AScreenTxt.anchor.setTo(0.5);
		volumes4_3AScreenTxt.align = 'left';

		volumes4_3AScreenTxt.font = 'Comic Sans MS';
		volumes4_3AScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		volumes4_3AScreenTxt.fill = '#361F0A';

		volumes4_3AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		volumes4_3AScreen.inputEnabled = true;
		volumes4_3AScreen.input.useHandCursor = true;
		volumes4_3AScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade4_3Alevel1');
				}
			},this);
		},this);
		
		var volumes4_3BScreen = this.add.sprite(700,320,'volumes4_3BScreen');
		var volumes4_3BScreenTxt = this.add.text(775, 450, selctedLang.volume4_3BDesc);
		volumes4_3BScreenTxt.anchor.setTo(0.5);
		volumes4_3BScreenTxt.align = 'left';

		volumes4_3BScreenTxt.font = 'Comic Sans MS';
		volumes4_3BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		volumes4_3BScreenTxt.fill = '#361F0A';

		volumes4_3BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		volumes4_3BScreen.inputEnabled = true;
		volumes4_3BScreen.input.useHandCursor = true;
		volumes4_3BScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade4_3Blevel1');
					
				}
			},this);
		},this);
		
		var volumes4_3CScreen = this.add.sprite(100,520,'volumes4_3CScreen');
		var volumes4_3CScreenTxt = this.add.text(175, 650, selctedLang.volume4_3CDesc);
		volumes4_3CScreenTxt.anchor.setTo(0.5);
		volumes4_3CScreenTxt.align = 'left';

		volumes4_3CScreenTxt.font = 'Comic Sans MS';
		volumes4_3CScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		volumes4_3CScreenTxt.fill = '#361F0A';

		volumes4_3CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		volumes4_3CScreen.inputEnabled = true;
		volumes4_3CScreen.input.useHandCursor = true;
		volumes4_3CScreen.events.onInputDown.add(function(target){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade4_3Clevel1');
				}
			},this);
		},this);
		
		grade4VolumeGroup.add(topicTxtBg);
		grade4VolumeGroup.add(topicTitleText);
		grade4VolumeGroup.add(topicBg);
		grade4VolumeGroup.add(volumes4_1AScreen);
		grade4VolumeGroup.add(volumes4_1AScreenTxt);
		grade4VolumeGroup.add(volumes4_1BScreen);		
		grade4VolumeGroup.add(volumes4_1BScreenTxt);
		grade4VolumeGroup.add(volumes4_1CScreen);
		grade4VolumeGroup.add(volumes4_1CScreenTxt);
		grade4VolumeGroup.add(volumes4_2AScreen);
		grade4VolumeGroup.add(volumes4_2AScreenTxt);
		grade4VolumeGroup.add(volumes4_2BScreen);
		grade4VolumeGroup.add(volumes4_2BScreenTxt);
		grade4VolumeGroup.add(volumes4_2CScreen);
		grade4VolumeGroup.add(volumes4_2CScreenTxt);
		grade4VolumeGroup.add(volumes4_3AScreen);
		grade4VolumeGroup.add(volumes4_3AScreenTxt);
		grade4VolumeGroup.add(volumes4_3BScreen);
		grade4VolumeGroup.add(volumes4_3BScreenTxt);
		grade4VolumeGroup.add(volumes4_3CScreen);
		grade4VolumeGroup.add(volumes4_3CScreenTxt);
		
	},
	
	
	
	
	
/*****************************************************************************************************************************************************/
	
	
	addGrade3LengthTopic:function()
	{
		var topicTxtBg = this.add.graphics(100, 60);
		topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicTxtBg.beginFill(0xF7D519, 1);
		topicTxtBg.drawRoundedRect(0,0,170,100,10);
		topicTxtBg.boundsPadding = 0;
		
		var topicTitleText = this.add.text(185, 85, ' LENGTH ');
		//topicTitleText.anchor.setTo(0.5);
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
		
		var volumes4_2BScreen = this.add.sprite(100,120,'volumes4_2BScreen');
		var volumes4_2BScreenTxt = this.add.text(100, 240, ' Length 2.4 A ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		volumes4_2BScreenTxt.align = 'left';

		volumes4_2BScreenTxt.font = 'Comic Sans MS';
		volumes4_2BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		volumes4_2BScreenTxt.fill = '#361F0A';

		volumes4_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		volumes4_2BScreen.inputEnabled = true;
		volumes4_2BScreen.input.useHandCursor = true;
		volumes4_2BScreen.events.onInputDown.add(function(){
			//this.state.start('grade1_1preloader');
			//console.log("hit1");
			//console.log("this"+event,e);
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade2_4Apreloader');
				}
			},this);
		},this);
		
		var length2_4BScreen = this.add.sprite(300,120,'length2_4BScreen');
		var length2_4BScreenTxt = this.add.text(300, 240, ' Length 2.4 B ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		length2_4BScreenTxt.align = 'left';

		length2_4BScreenTxt.font = 'Comic Sans MS';
		length2_4BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		length2_4BScreenTxt.fill = '#361F0A';

		length2_4BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		length2_4BScreen.inputEnabled = true;
		length2_4BScreen.input.useHandCursor = true;
		length2_4BScreen.events.onInputDown.add(function(){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade2_4Bpreloader');
				}
			},this);
		},this);
		
		

		grade3LengthGroup.add(topicTxtBg);
		grade3LengthGroup.add(topicTitleText);
		grade3LengthGroup.add(topicBg);
		grade3LengthGroup.add(volumes4_2BScreen);
		grade3LengthGroup.add(volumes4_2BScreenTxt);
		grade3LengthGroup.add(length2_4BScreen);
		grade3LengthGroup.add(length2_4BScreenTxt);
		
		
	},
	
	addGrade3WeightTopic:function()
	{
		var topicTxtBg = this.add.graphics(100, 60);
		topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		topicTxtBg.beginFill(0xF7D519, 1);
		topicTxtBg.drawRoundedRect(0,0,130,100,10);
		topicTxtBg.boundsPadding = 0;
		
		var topicTitleText = this.add.text(100, 67, ' WEIGHT ');
		//topicTitleText.anchor.setTo(0.5);
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
		var weight3_2BScreenTxt = this.add.text(100, 240, ' Weight 3.2 B ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		weight3_2BScreenTxt.align = 'left';

		weight3_2BScreenTxt.font = 'Comic Sans MS';
		weight3_2BScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_2BScreenTxt.fill = '#361F0A';

		weight3_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_2BScreen.inputEnabled = true;
		weight3_2BScreen.input.useHandCursor = true;
		weight3_2BScreen.events.onInputDown.add(function(){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade3_2Bpreloader');
				}
			},this);
		},this);
		
		var weight3_2CScreen = this.add.sprite(300,120,'weight3_2CScreen');
		var weight3_2CScreenTxt = this.add.text(300, 240, ' Weight 3.2 C ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		weight3_2CScreenTxt.align = 'left';

		weight3_2CScreenTxt.font = 'Comic Sans MS';
		weight3_2CScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_2CScreenTxt.fill = '#361F0A';

		weight3_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_2CScreen.inputEnabled = true;
		weight3_2CScreen.input.useHandCursor = true;
		weight3_2CScreen.events.onInputDown.add(function(){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade3_2Cpreloader');
				}
			},this);
		},this);
		
		var weight3_2DScreen = this.add.sprite(500,120,'weight3_2DScreen');
		var weight3_2DScreenTxt = this.add.text(500, 240, ' Weight 3.2 D ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		weight3_2DScreenTxt.align = 'left';

		weight3_2DScreenTxt.font = 'Comic Sans MS';
		weight3_2DScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_2DScreenTxt.fill = '#361F0A';

		weight3_2DScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_2DScreen.inputEnabled = true;
		weight3_2DScreen.input.useHandCursor = true;
		weight3_2DScreen.events.onInputDown.add(function(){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade3_2Dpreloader');
				}
			},this);
		},this);
		
		var weight3_3AScreen = this.add.sprite(700,120,'weight3_3AScreen');
		var weight3_3AScreenTxt = this.add.text(700, 240, ' Weight 3.3 A ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		weight3_3AScreenTxt.align = 'left';

		weight3_3AScreenTxt.font = 'Comic Sans MS';
		weight3_3AScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_3AScreenTxt.fill = '#361F0A';

		weight3_3AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_3AScreen.inputEnabled = true;
		weight3_3AScreen.input.useHandCursor = true;
		weight3_3AScreen.events.onInputDown.add(function(){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade3_3Apreloader');
				}
			},this);
		},this);
		
		var weight3_3B1Screen = this.add.sprite(100,320,'weight3_3B1Screen');
		var weight3_3B1ScreenTxt = this.add.text(100, 440, ' Weight 3.3 B1 ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		weight3_3B1ScreenTxt.align = 'left';

		weight3_3B1ScreenTxt.font = 'Comic Sans MS';
		weight3_3B1ScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_3B1ScreenTxt.fill = '#361F0A';

		weight3_3B1ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_3B1Screen.inputEnabled = true;
		weight3_3B1Screen.input.useHandCursor = true;
		weight3_3B1Screen.events.onInputDown.add(function(){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade3_3B1preloader');
				}
			},this);
		},this);
		
		var weight3_3B2Screen = this.add.sprite(300,320,'weight3_3B2Screen');
		var weight3_3B2ScreenTxt = this.add.text(300, 440, ' Weight 3.3 B2 ');
		//fractions1_1ScreenTxt.anchor.setTo(0.5);
		weight3_3B2ScreenTxt.align = 'left';

		weight3_3B2ScreenTxt.font = 'Comic Sans MS';
		weight3_3B2ScreenTxt.fontSize = 20;
		//fractions1_1ScreenTxt.fontWeight = 'bold';
		weight3_3B2ScreenTxt.fill = '#361F0A';

		weight3_3B2ScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		weight3_3B2Screen.inputEnabled = true;
		weight3_3B2Screen.input.useHandCursor = true;
		weight3_3B2Screen.events.onInputDown.add(function(){
			this.time.events.add(300, function(){
				//console.log("hitfront");
				if(tap)
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
					this.state.start('grade3_3B2preloader');
				}
			},this);
		},this);
		
		
		grade3WeightGroup.add(topicTxtBg);
		grade3WeightGroup.add(topicTitleText);
		grade3WeightGroup.add(topicBg);
		grade3WeightGroup.add(weight3_2BScreen);
		grade3WeightGroup.add(weight3_2BScreenTxt);
		grade3WeightGroup.add(weight3_2CScreen);
		grade3WeightGroup.add(weight3_2CScreenTxt);
		grade3WeightGroup.add(weight3_2DScreen);
		grade3WeightGroup.add(weight3_2DScreenTxt);
		grade3WeightGroup.add(weight3_3AScreen);
		grade3WeightGroup.add(weight3_3AScreenTxt);
		grade3WeightGroup.add(weight3_3B1Screen);
		grade3WeightGroup.add(weight3_3B1ScreenTxt);
		grade3WeightGroup.add(weight3_3B2Screen);
		grade3WeightGroup.add(weight3_3B2ScreenTxt);
		
	}
	
	
};