Game.grade4levelSelectionScreen=function(game){
	
};

Game.grade4levelSelectionScreen.prototype={

	init:function()
	{
		_this = this;
		//console.log("sync telemetry"+navigator.connection.type);
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			absdsjsapi.syncTelemetryData();
		}

		document.addEventListener("online", _this.syncTelFunc, false);
	},
			
	syncTelFunc:function()
	{
		if(navigator.connection.type!="none" && navigator.connection.type!="unknown" && navigator.connection.type!=null && navigator.connection.type!="undefined")
		{
			console.log("sync telemetry"+navigator.connection.type);
			absdsjsapi.syncTelemetryData();
		}
	},
	
	create:function(game){

		console.log(_this.world);
		
		_this.input.enabled = true;
		_this.tween = null;
		_this.tap = false;
		//adding bg, title to the scene.
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'gameselectBg');
		
		_this.gradeBackBtn = _this.add.sprite(10,3,'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.input.priorityID = 1;
		_this.gradeBackBtn.events.onInputDown.add(function(target){
			target.events.onInputDown.removeAll();
			//_this.cache.destroy();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
			
			_this.state.start('gradeSelectionScreen',true,false);
		},_this);
		
		
		_this.grade4VolumeGroup = _this.add.group();
		
		
		_this.addGrade4VolumeTopic();
		

		_this.grade4VolumeGroup.x = 0;
		_this.grade4VolumeGroup.y = 0;
		
		
		
		
		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xF7D519, 0);
		_this.graphicsBg.drawRect(0,0,960,600);
		_this.graphicsBg.boundsPadding = 0;
		
		
		
		_this.mask = _this.add.graphics();
        _this.mask.position.x = 0;   
        _this.mask.position.y = 35;   
        _this.mask.beginFill(0, 1);   
        _this.mask.moveTo(0, 0);   
        _this.mask.lineTo(960, 0);   
        _this.mask.lineTo(960, 505);   
        _this.mask.lineTo(0, 505);   
        _this.mask.lineTo(0, 0);   
        _this.mask.endFill();   
        _this.graphicsBg.mask = _this.mask;
		
	
		_this.graphicsBg.addChild(_this.grade4VolumeGroup);
		
		
		
		_this.swipeUpFlag = true;
		_this.swipeDownFlag = false;
		_this.page = document.getElementById("body"); 
		_this.mc = new Hammer(_this.page);
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:true });

			_this.mc.on("swipeleft", function () { 
				//console.log('swipeleft');
			}); 
          
           _this.mc.on("swiperight", function () { 
				//console.log('swiperight');
			});
			
			_this.mc.on("swipeup", function (v) { 
				//console.log(v);
				
				
			//	if(swipeUpFlag)
			//	{
					//game.input.enabled = false;

					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y-(v.distance*(v.overallVelocity*2/-1))}, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeDownFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -182;
						}
						
						//game.input.enabled = true;
					}, _this);
					_this.tween.onUpdateCallback(function(){
						_this.tap = false;
						if(_this.graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -182;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
					
			//	}
			}); 
			
			_this.mc.on("swipedown", function (v) { 
				
			//	if(swipeDownFlag)
			//	{
					//game.input.enabled = false;
					_this.tween = game.add.tween(_this.graphicsBg);
					_this.tween.to({ y: _this.graphicsBg.y+(v.distance*(v.overallVelocity*2)) }, 0, 'Linear', true, 0);
					_this.tween.onComplete.add(function(){
					//	swipeUpFlag = true;
						_this.tween = null;
						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						//game.input.enabled = true;
					}, _this);
					
					_this.tween.onUpdateCallback(function(){
						tap = false;
						if(_this.graphicsBg.y>=0)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							_this.tween.stop();
							//_this.tween = null;
							//game.input.enabled = true;
						}
					},_this);
			//	}
			});

			_this.input.onDown.add(function(){
				if(_this.tween)
				{
					if(_this.tween.isRunning)
					{
						_this.tween.stop();
						//_this.tween = null;
					}
				}
				_this.graphicsBg.inputEnabled = true;
				_this.graphicsBg.input.enableDrag();
				_this.graphicsBg.input.allowHorizontalDrag = false;

				_this.graphicsBg.events.onDragUpdate.add(function(){
					_this.tap = false;
					if(_this.tween)
					{
						if(_this.tween.isRunning)
						{
							_this.tween.stop();
							//_this.tween = null;
						}
					}
					if(_this.graphicsBg.y>=10)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = 0;
							//tween.stop();
							//game.input.enabled = true;
						}
					else if(_this.graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -182;
							//tween.stop();
							//game.input.enabled = true;
						}
				},_this);

				_this.graphicsBg.events.onDragStop.add(function(e){
					_this.tap = false;
					//console.log(e);
					if(_this.tween)
					{
						//if(tween.isRunning)
						_this.tween.stop();
						//_this.tween = null;
					}

						if(_this.graphicsBg.y>=0)
						{
						//	swipeDownFlag = false;
							_this.graphicsBg.y = 0;
						}
						else if(_this.graphicsBg.y<=-182)
						{
							//swipeUpFlag = false;
							_this.graphicsBg.y = -182;
						}
					
				},_this);

			},_this);
		
		_this.input.onTap.add(function(){
			//console.log("tap");
			_this.tap = true;
			_this.time.events.add(300, function(){
				_this.time.events.removeAll();
				_this.tap = false;
				//console.log("tapfalse");
			},_this);
		},_this);
	},
	
	
	addGrade4VolumeTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		//_this.topicTitleText = _this.add.sprite(200, 83, 'volumeTitleTxt');
		//_this.topicTitleText.anchor.setTo(0.5);

		_this.topicTitleText = this.add.text(185, 85, ' \n '+window.selctedLang.volumeTitle+' \n ');
		_this.topicTitleText.anchor.setTo(0.5);
		_this.topicTitleText.align = 'center';
		
				
		_this.topicTitleText.font = 'gradefont';
		_this.topicTitleText.fontSize = 26;
		_this.topicTitleText.fontWeight = 'normal';
		_this.topicTitleText.fill = 'black';

		_this.topicTitleText.wordWrap = true;
		_this.topicTitleText.wordWrapWidth = 500;
		//_this.topicTitleText.setTextBounds(0,0,500,500);
		//_this.topicTitleText.padding.set(50, 50);
		
		
		//_this.topicTitleText.useAdvancedWrap  = true;
		

		//_this.topicTitleText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		//topicBg.drawRoundedRect(0,0,805,400,30);
		_this.topicBg.drawRoundedRect(0,0,850,600,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.volumes4_1AScreen = _this.add.sprite(100,120,'volumes4_1AScreen');
		//_this.volumes4_1AScreenTxt = _this.add.sprite(175, 250, 'volume4_1A');
		//_this.volumes4_1AScreenTxt.anchor.setTo(0.5);

		_this.volumes4_1AScreenTxt = this.add.text(175, 255, ' \n '+window.selctedLang.volume4_1ADesc+' \n ');
		_this.volumes4_1AScreenTxt.anchor.setTo(0.5);
		_this.volumes4_1AScreenTxt.align = 'center';
		
				
		_this.volumes4_1AScreenTxt.font = 'gradefont';
		_this.volumes4_1AScreenTxt.fontSize = 20;
		_this.volumes4_1AScreenTxt.fontWeight = 'normal';
		_this.volumes4_1AScreenTxt.fill = 'black';

		_this.volumes4_1AScreenTxt.wordWrap = true;
		_this.volumes4_1AScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_1AScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_1AScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_1AScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_1AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		  
		  
		_this.volumes4_1AScreen.inputEnabled = true;
		  _this.volumes4_1AScreen.input.useHandCursor = true;
		  _this.volumes4_1AScreen.events.onInputDown.add(function(target){
			   _this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_1Alevel1',true,false);
				}
			},_this);
		   
		  },_this);
		
		_this.volumes4_1BScreen = _this.add.sprite(300,120,'volumes4_1BScreen');
		//_this.volumes4_1BScreenTxt = _this.add.sprite(375, 250, 'volume4_1B');
		//_this.volumes4_1BScreenTxt.anchor.setTo(0.5);

		_this.volumes4_1BScreenTxt = this.add.text(375, 255, ' \n '+window.selctedLang.volume4_1BDesc+' \n ');
		_this.volumes4_1BScreenTxt.anchor.setTo(0.5);
		_this.volumes4_1BScreenTxt.align = 'center';
		
				
		_this.volumes4_1BScreenTxt.font = 'gradefont';
		_this.volumes4_1BScreenTxt.fontSize = 20;
		_this.volumes4_1BScreenTxt.fontWeight = 'normal';
		_this.volumes4_1BScreenTxt.fill = 'black';

		_this.volumes4_1BScreenTxt.wordWrap = true;
		_this.volumes4_1BScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_1BScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_1BScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_1BScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_1BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_1BScreen.inputEnabled = true;
		_this.volumes4_1BScreen.input.useHandCursor = true;
		_this.volumes4_1BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_1Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_1CScreen = _this.add.sprite(500,120,'volumes4_1CScreen');
		//_this.volumes4_1CScreenTxt = _this.add.sprite(575, 250, 'volume4_1C');
		//_this.volumes4_1CScreenTxt.anchor.setTo(0.5);

		_this.volumes4_1CScreenTxt = this.add.text(575, 255, ' \n '+window.selctedLang.volume4_1CDesc+' \n ');
		_this.volumes4_1CScreenTxt.anchor.setTo(0.5);
		_this.volumes4_1CScreenTxt.align = 'center';
		
				
		_this.volumes4_1CScreenTxt.font = 'gradefont';
		_this.volumes4_1CScreenTxt.fontSize = 20;
		_this.volumes4_1CScreenTxt.fontWeight = 'normal';
		_this.volumes4_1CScreenTxt.fill = 'black';

		_this.volumes4_1CScreenTxt.wordWrap = true;
		_this.volumes4_1CScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_1CScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_1CScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_1CScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_1CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_1CScreen.inputEnabled = true;
		_this.volumes4_1CScreen.input.useHandCursor = true;
		_this.volumes4_1CScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_1Clevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_2AScreen = _this.add.sprite(700,120,'volumes4_2AScreen');
		//_this.volumes4_2AScreenTxt = _this.add.sprite(775, 250, 'volume4_2A');
		//_this.volumes4_2AScreenTxt.anchor.setTo(0.5);

		_this.volumes4_2AScreenTxt = this.add.text(775, 255, ' \n '+window.selctedLang.volume4_2ADesc+' \n ');
		_this.volumes4_2AScreenTxt.anchor.setTo(0.5);
		_this.volumes4_2AScreenTxt.align = 'center';
		
				
		_this.volumes4_2AScreenTxt.font = 'gradefont';
		_this.volumes4_2AScreenTxt.fontSize = 20;
		_this.volumes4_2AScreenTxt.fontWeight = 'normal';
		_this.volumes4_2AScreenTxt.fill = 'black';

		_this.volumes4_2AScreenTxt.wordWrap = true;
		_this.volumes4_2AScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_2AScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_2AScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_2AScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_2AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_2AScreen.inputEnabled = true;
		_this.volumes4_2AScreen.input.useHandCursor = true;
		_this.volumes4_2AScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_2Alevel1',true,false);
				}
			},_this);
			
		},_this);
		
		_this.volumes4_2BScreen = _this.add.sprite(100,320,'volumes4_2BScreen');
		//_this.volumes4_2BScreenTxt = _this.add.sprite(175, 450, 'volume4_2B');
		//_this.volumes4_2BScreenTxt.anchor.setTo(0.5);

		_this.volumes4_2BScreenTxt = this.add.text(175, 455, ' \n '+window.selctedLang.volume4_2BDesc+' \n ');
		_this.volumes4_2BScreenTxt.anchor.setTo(0.5);
		_this.volumes4_2BScreenTxt.align = 'center';
		
				
		_this.volumes4_2BScreenTxt.font = 'gradefont';
		_this.volumes4_2BScreenTxt.fontSize = 20;
		_this.volumes4_2BScreenTxt.fontWeight = 'normal';
		_this.volumes4_2BScreenTxt.fill = 'black';

		_this.volumes4_2BScreenTxt.wordWrap = true;
		_this.volumes4_2BScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_2BScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_2BScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_2BScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_2BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_2BScreen.inputEnabled = true;
		_this.volumes4_2BScreen.input.useHandCursor = true;
		_this.volumes4_2BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_2Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_2CScreen = _this.add.sprite(300,320,'volumes4_2CScreen');
		//_this.volumes4_2CScreenTxt = _this.add.sprite(375, 450, 'volume4_2C');
		//_this.volumes4_2CScreenTxt.anchor.setTo(0.5);

		_this.volumes4_2CScreenTxt = this.add.text(375, 455, ' \n '+window.selctedLang.volume4_2CDesc+' \n ');
		_this.volumes4_2CScreenTxt.anchor.setTo(0.5);
		_this.volumes4_2CScreenTxt.align = 'center';
		
				
		_this.volumes4_2CScreenTxt.font = 'gradefont';
		_this.volumes4_2CScreenTxt.fontSize = 20;
		_this.volumes4_2CScreenTxt.fontWeight = 'normal';
		_this.volumes4_2CScreenTxt.fill = 'black';

		_this.volumes4_2CScreenTxt.wordWrap = true;
		_this.volumes4_2CScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_2CScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_2CScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_2CScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_2CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		
		_this.volumes4_2CScreen.inputEnabled = true;
		_this.volumes4_2CScreen.input.useHandCursor = true;
		_this.volumes4_2CScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_2Clevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_3AScreen = _this.add.sprite(500,320,'volumes4_3AScreen');
		//_this.volumes4_3AScreenTxt = _this.add.sprite(575, 450, 'volume4_3A');
		//_this.volumes4_3AScreenTxt.anchor.setTo(0.5);

		_this.volumes4_3AScreenTxt = this.add.text(575, 455, ' \n '+window.selctedLang.volume4_3ADesc+' \n ');
		_this.volumes4_3AScreenTxt.anchor.setTo(0.5);
		_this.volumes4_3AScreenTxt.align = 'center';
		
				
		_this.volumes4_3AScreenTxt.font = 'gradefont';
		_this.volumes4_3AScreenTxt.fontSize = 20;
		_this.volumes4_3AScreenTxt.fontWeight = 'normal';
		_this.volumes4_3AScreenTxt.fill = 'black';

		_this.volumes4_3AScreenTxt.wordWrap = true;
		_this.volumes4_3AScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_3AScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_3AScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_3AScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_3AScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_3AScreen.inputEnabled = true;
		_this.volumes4_3AScreen.input.useHandCursor = true;
		_this.volumes4_3AScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_3Alevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_3BScreen = _this.add.sprite(700,320,'volumes4_3BScreen');
		//_this.volumes4_3BScreenTxt = _this.add.sprite(775, 450, 'volume4_3B');
		//_this.volumes4_3BScreenTxt.anchor.setTo(0.5);

		_this.volumes4_3BScreenTxt = this.add.text(775, 455, ' \n '+window.selctedLang.volume4_3BDesc+' \n ');
		_this.volumes4_3BScreenTxt.anchor.setTo(0.5);
		_this.volumes4_3BScreenTxt.align = 'center';
		
				
		_this.volumes4_3BScreenTxt.font = 'gradefont';
		_this.volumes4_3BScreenTxt.fontSize = 20;
		_this.volumes4_3BScreenTxt.fontWeight = 'normal';
		_this.volumes4_3BScreenTxt.fill = 'black';

		_this.volumes4_3BScreenTxt.wordWrap = true;
		_this.volumes4_3BScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_3BScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_3BScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_3BScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_3BScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_3BScreen.inputEnabled = true;
		_this.volumes4_3BScreen.input.useHandCursor = true;
		_this.volumes4_3BScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_3Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.volumes4_3CScreen = _this.add.sprite(100,520,'volumes4_3CScreen');
		//_this.volumes4_3CScreenTxt = _this.add.sprite(175, 650, 'volume4_3C');
		//_this.volumes4_3CScreenTxt.anchor.setTo(0.5);

		_this.volumes4_3CScreenTxt = this.add.text(175, 655, ' \n '+window.selctedLang.volume4_3CDesc+' \n ');
		_this.volumes4_3CScreenTxt.anchor.setTo(0.5);
		_this.volumes4_3CScreenTxt.align = 'center';
		
				
		_this.volumes4_3CScreenTxt.font = 'gradefont';
		_this.volumes4_3CScreenTxt.fontSize = 20;
		_this.volumes4_3CScreenTxt.fontWeight = 'normal';
		_this.volumes4_3CScreenTxt.fill = 'black';

		_this.volumes4_3CScreenTxt.wordWrap = true;
		_this.volumes4_3CScreenTxt.wordWrapWidth = 500;
		//_this.volumes4_3CScreenTxt.setTextBounds(0,0,500,500);
		//_this.volumes4_3CScreenTxt.padding.set(50, 50);
		
		
		//_this.volumes4_3CScreenTxt.useAdvancedWrap  = true;
		

		//_this.volumes4_3CScreenTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		
		_this.volumes4_3CScreen.inputEnabled = true;
		_this.volumes4_3CScreen.input.useHandCursor = true;
		_this.volumes4_3CScreen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					
					_this.state.start('grade4_3Clevel1',true,false);
				}
			},_this);
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.volumes4_1AScreenTxt.frame = 1;
			_this.volumes4_1BScreenTxt.frame = 1;
			_this.volumes4_1CScreenTxt.frame = 1;
			_this.volumes4_2AScreenTxt.frame = 1;
			_this.volumes4_2BScreenTxt.frame = 1;
			_this.volumes4_2CScreenTxt.frame = 1;
			_this.volumes4_3AScreenTxt.frame = 1;
			_this.volumes4_3BScreenTxt.frame = 1;
			_this.volumes4_3CScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.volumes4_1AScreenTxt.frame = 2;
			_this.volumes4_1BScreenTxt.frame = 2;
			_this.volumes4_1CScreenTxt.frame = 2;
			_this.volumes4_2AScreenTxt.frame = 2;
			_this.volumes4_2BScreenTxt.frame = 2;
			_this.volumes4_2CScreenTxt.frame = 2;
			_this.volumes4_3AScreenTxt.frame = 2;
			_this.volumes4_3BScreenTxt.frame = 2;
			_this.volumes4_3CScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.volumes4_1AScreenTxt.frame = 0;
			_this.volumes4_1BScreenTxt.frame = 0;
			_this.volumes4_1CScreenTxt.frame = 0;
			_this.volumes4_2AScreenTxt.frame = 0;
			_this.volumes4_2BScreenTxt.frame = 0;
			_this.volumes4_2CScreenTxt.frame = 0;
			_this.volumes4_3AScreenTxt.frame = 0;
			_this.volumes4_3BScreenTxt.frame = 0;
			_this.volumes4_3CScreenTxt.frame = 0;
		}
		
		_this.grade4VolumeGroup.add(_this.topicTxtBg);
		_this.grade4VolumeGroup.add(_this.topicTitleText);
		_this.grade4VolumeGroup.add(_this.topicBg);
		_this.grade4VolumeGroup.add(_this.volumes4_1AScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_1AScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_1BScreen);		
		_this.grade4VolumeGroup.add(_this.volumes4_1BScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_1CScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_1CScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_2AScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_2AScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_2BScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_2BScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_2CScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_2CScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_3AScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_3AScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_3BScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_3BScreenTxt);
		_this.grade4VolumeGroup.add(_this.volumes4_3CScreen);
		_this.grade4VolumeGroup.add(_this.volumes4_3CScreenTxt);
		
	},
	
	addGrade1LengthTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(215,83,'lengthTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.length2_1AScreen = _this.add.sprite(100,120,'length2_1AScreen');
		_this.length2_1AScreenTxt = _this.add.sprite(175, 250, 'length2_1A');
		_this.length2_1AScreenTxt.anchor.setTo(0.5);
		
		
		_this.length2_1AScreen.inputEnabled = true;
		_this.length2_1AScreen.name = "Length 2.1 A";
		_this.length2_1AScreen.input.useHandCursor = true;
		_this.length2_1AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_1Alevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_1BScreen = _this.add.sprite(300,120,'length2_1BScreen');
		_this.length2_1BScreenTxt = _this.add.sprite(375, 250, 'length2_1B');
		_this.length2_1BScreenTxt.anchor.setTo(0.5);
		
		_this.length2_1BScreen.inputEnabled = true;
		_this.length2_1BScreen.input.useHandCursor = true;
		_this.length2_1BScreen.name = "Length 2.1 B";
		_this.length2_1BScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_1Blevel1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_2Screen = _this.add.sprite(500,120,'length2_2Screen');
		_this.length2_2ScreenTxt = _this.add.sprite(575, 250, 'length2_2');
		_this.length2_2ScreenTxt.anchor.setTo(0.5);
		
		_this.length2_2Screen.inputEnabled = true;
		_this.length2_2Screen.name = "Length 2.2";
		_this.length2_2Screen.input.useHandCursor = true;
		_this.length2_2Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_2level1',true,false);
				}
			},_this);
		},_this);
		
		_this.length2_3Screen = _this.add.sprite(700,115,'game2.3ScreenShot');
		_this.length2_3ScreenTxt = _this.add.sprite(775, 250, 'length2_3');
		_this.length2_3ScreenTxt.anchor.setTo(0.5);
		
		_this.length2_3Screen.inputEnabled = true;
		_this.length2_3Screen.name = "Length 2.3";
		_this.length2_3Screen.input.useHandCursor = true;
		_this.length2_3Screen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){

				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade2_3level1',true,false);
				}
			},_this);
		},_this);
		


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.length2_1AScreenTxt.frame = 1;
			_this.length2_1BScreenTxt.frame = 1;
			_this.length2_2ScreenTxt.frame = 1;
			_this.length2_3ScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.length2_1AScreenTxt.frame = 2;
			_this.length2_1BScreenTxt.frame = 2;
			_this.length2_2ScreenTxt.frame = 2;
			_this.length2_3ScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.length2_1AScreenTxt.frame = 0;
			_this.length2_1BScreenTxt.frame = 0;
			_this.length2_2ScreenTxt.frame = 0;
			_this.length2_3ScreenTxt.frame = 0;
		}
		
		
		
		_this.grade1LengthGroup.add(_this.topicTxtBg);
		_this.grade1LengthGroup.add(_this.topicTitleText);
		_this.grade1LengthGroup.add(_this.topicBg);
		_this.grade1LengthGroup.add(_this.length2_1AScreen);
		_this.grade1LengthGroup.add(_this.length2_1AScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_1BScreen);
		_this.grade1LengthGroup.add(_this.length2_1BScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_2Screen);
		_this.grade1LengthGroup.add(_this.length2_2ScreenTxt);
		_this.grade1LengthGroup.add(_this.length2_3Screen);
		_this.grade1LengthGroup.add(_this.length2_3ScreenTxt);
		
		
	},
	
	addGrade1WeightTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(200,83,'weightTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_1Screen = _this.add.sprite(100,120,'game3.1ScreenShot');
		_this.weight3_1ScreenTxt = _this.add.sprite(185, 255, 'weight3_1');
		_this.weight3_1ScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_1Screen.inputEnabled = true;
		_this.weight3_1Screen.input.useHandCursor = true;
		_this.weight3_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2AScreen = _this.add.sprite(300,120,'game3.2AScreenShot');
		_this.weight3_2AScreenTxt = _this.add.sprite(385, 255, 'weight3_2A');
		_this.weight3_2AScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2AScreen.inputEnabled = true;
		_this.weight3_2AScreen.input.useHandCursor = true;
		_this.weight3_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Alevel1',true,false);
				}
			},_this);
		},_this);


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.weight3_1ScreenTxt.frame = 1;
			_this.weight3_2AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.weight3_1ScreenTxt.frame = 2;
			_this.weight3_2AScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.weight3_1ScreenTxt.frame = 0;
			_this.weight3_2AScreenTxt.frame = 0;
		}
		
		
		_this.grade1WeightGroup.add(_this.topicTxtBg);
		_this.grade1WeightGroup.add(_this.topicTitleText);
		_this.grade1WeightGroup.add(_this.topicBg);
		_this.grade1WeightGroup.add(_this.weight3_1Screen);
		_this.grade1WeightGroup.add(_this.weight3_1ScreenTxt);
		_this.grade1WeightGroup.add(_this.weight3_2AScreen);
		_this.grade1WeightGroup.add(_this.weight3_2AScreenTxt);
		
	},

	addGrade1TimeTopic:function()
	{
		_this.topicTxtBg = _this.add.graphics(100, 60);
		_this.topicTxtBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicTxtBg.beginFill(0xF7D519, 1);
		_this.topicTxtBg.drawRoundedRect(0,0,170,100,10);
		_this.topicTxtBg.boundsPadding = 0;
		
		_this.topicTitleText = _this.add.sprite(200,83,'weightTitleTxt');
		_this.topicTitleText.anchor.setTo(0.5);
		
		
		_this.topicBg = _this.add.graphics(75, 100);
		_this.topicBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.topicBg.beginFill(0xF7D519, 1);
		_this.topicBg.drawRoundedRect(0,0,805,200,30);
		_this.topicBg.boundsPadding = 0;
		
		_this.weight3_1Screen = _this.add.sprite(100,120,'game3.1ScreenShot');
		_this.weight3_1ScreenTxt = _this.add.sprite(185, 255, 'weight3_1');
		_this.weight3_1ScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_1Screen.inputEnabled = true;
		_this.weight3_1Screen.input.useHandCursor = true;
		_this.weight3_1Screen.events.onInputDown.add(function(target){
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_1level1',true,false);
				}
			},_this);
		},_this);
		
		_this.weight3_2AScreen = _this.add.sprite(300,120,'game3.2AScreenShot');
		_this.weight3_2AScreenTxt = _this.add.sprite(385, 255, 'weight3_2A');
		_this.weight3_2AScreenTxt.anchor.setTo(0.5);
		
		_this.weight3_2AScreen.inputEnabled = true;
		_this.weight3_2AScreen.input.useHandCursor = true;
		_this.weight3_2AScreen.events.onInputDown.add(function(target){
			
			_this.time.events.add(300, function(){
				
				if(_this.tap)
				{
					
					_this.time.events.removeAll();
					target.events.onInputDown.removeAll();
					_this.clickSound = _this.add.audio('ClickSound');
					_this.clickSound.play();
					_this.state.start('grade3_2Alevel1',true,false);
				}
			},_this);
		},_this);

		


		if(window.languageSelected=="Hindi")
		{
			_this.topicTitleText.frame = 1;
			_this.weight3_1ScreenTxt.frame = 1;
			_this.weight3_2AScreenTxt.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.topicTitleText.frame = 2;
			_this.weight3_1ScreenTxt.frame = 2;
			_this.weight3_2AScreenTxt.frame = 2;
		}
		else
		{
			_this.topicTitleText.frame = 0;
			_this.weight3_1ScreenTxt.frame = 0;
			_this.weight3_2AScreenTxt.frame = 0;
		}
		
		
		_this.grade1TimeGroup.add(_this.topicTxtBg);
		_this.grade1TimeGroup.add(_this.topicTitleText);
		_this.grade1TimeGroup.add(_this.topicBg);
		_this.grade1TimeGroup.add(_this.weight3_1Screen);
		_this.grade1TimeGroup.add(_this.weight3_1ScreenTxt);
		_this.grade1TimeGroup.add(_this.weight3_2AScreen);
		_this.grade1TimeGroup.add(_this.weight3_2AScreenTxt);
		
	},
	
	shutdown:function()
	{
		if(_this.mc)
		{
			_this.mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL , enable:false });
		}
		document.removeEventListener("online", _this.syncTelFunc, false);
		/*_this.clickSound = null;
		_this.mc = null;
		//_this = null;
		_this.tween = null;
		_this.tap = null;
		_this.background = null;
		_this.gradeBackBtn = null;
		_this.grade1FractionGroup = null;
		_this.grade1LengthGroup = null;
		_this.grade1WeightGroup = null;
		_this.graphicsBg = null;
		_this.mask = null;
		_this.swipeUpFlag = null;
		_this.swipeDownFlag = null;
		_this.page = null; 
		_this.input.onDown.removeAll();
		_this.input.onTap.removeAll();
		_this.time.events.removeAll();
		
		_this.topicTxtBg = null;
		_this.topicTitleText = null;
		_this.topicBg = null;
		
		_this.fractions1_1AScreen.events.onInputDown.removeAll();
		_this.fractions1_1AScreen = null;
		_this.fractions1_1AScreenTxt = null;
		
		_this.length2_1AScreen.events.onInputDown.removeAll();
		_this.length2_1AScreen = null;
		_this.length2_1AScreenTxt = null;
		
		_this.length2_1BScreen.events.onInputDown.removeAll();
		_this.length2_1BScreen = null;
		_this.length2_1BScreenTxt = null;
		
		_this.length2_2Screen.events.onInputDown.removeAll();
		_this.length2_2Screen = null;
		_this.length2_2ScreenTxt = null;
		
		_this.length2_3Screen.events.onInputDown.removeAll();
		_this.length2_3Screen = null;
		_this.length2_3ScreenTxt = null;
		
		_this.weight3_1Screen.events.onInputDown.removeAll();
		_this.weight3_1Screen = null;
		_this.weight3_1ScreenTxt = null;
		
		_this.weight3_2AScreen.events.onInputDown.removeAll();
		_this.weight3_2AScreen = null;
		_this.weight3_2AScreenTxt = null;
		
		console.log(_this.world);

		_this = null;*/

		/*_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		_this = null;*/
	}
	
};