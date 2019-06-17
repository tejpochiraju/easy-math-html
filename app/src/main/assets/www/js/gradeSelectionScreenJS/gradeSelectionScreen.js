Game.gradeSelectionScreen=function(){

};
var grade2Selected = false;
var gradeSelected = null;
var gradeScreen = false;
Game.gradeSelectionScreen.prototype={
	
	init:function()
	{
		_this = this;
		
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

	create:function(){		


		gradeSelected = null;	

		gradeScreen = true;	
		
		
		//adding bg, title to the scene.
		_this.game.stage.disableVisibilityChange=true;
		_this.input.enabled = true;
		
		_this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'gameselectBg');
		
		_this.gradeBackBtn = _this.add.sprite(10,3,'gradeSceneBackBtn');
		_this.gradeBackBtn.inputEnabled = true;
		_this.gradeBackBtn.input.useHandCursor = true;
		_this.gradeBackBtn.events.onInputDown.add(function(){navigator.app.exitApp();},_this);
		
		//adding grade clouds
		//_this.grade1Cloud = _this.add.sprite(220,170,'grade1Cloud');
		_this.grade1Cloud = _this.add.sprite(220,170,'gradeCloud');
		_this.grade1Cloud.anchor.setTo(0.5);
		_this.grade1Cloud.name = "grade1";
		_this.grade1Cloud.inputEnabled = true;
		_this.grade1Cloud.input.useHandCursor = true;
		//_this.grade1Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade1Cloud.events.onInputDown.add(_this.gradeSelected,_this);




		_this.grade1CloudTxt = this.add.text(210, 168, ' \n '+window.selctedLang.grade1+' \n ');
		_this.grade1CloudTxt.anchor.setTo(0.5);
		_this.grade1CloudTxt.align = 'center';
		
				
		_this.grade1CloudTxt.font = 'gradefont';
		_this.grade1CloudTxt.fontSize = 34;
		_this.grade1CloudTxt.fontWeight = 'normal';
		_this.grade1CloudTxt.fill = '#563814';

		_this.grade1CloudTxt.wordWrap = true;
		_this.grade1CloudTxt.wordWrapWidth = 500;
		//_this.grade1CloudTxt.setTextBounds(0,0,500,500);
		//_this.grade1CloudTxt.padding.set(50, 50);
		
		
		//_this.grade1CloudTxt.useAdvancedWrap  = true;
		

		//_this.grade1CloudTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);




		//_this.grade2Cloud = _this.add.sprite(750,190,'grade2Cloud');
		_this.grade2Cloud = _this.add.sprite(750,190,'gradeCloud');

		_this.grade2Cloud.anchor.setTo(0.5);
		_this.grade2Cloud.name = "grade2";
		_this.grade2Cloud.inputEnabled = true;
		_this.grade2Cloud.input.useHandCursor = true;
		//grade2Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade2Cloud.events.onInputDown.add(_this.gradeSelected,_this);
		
		
		
		_this.grade2CloudTxt = this.add.text(740, 188, ' \n '+window.selctedLang.grade2+' \n ');
		_this.grade2CloudTxt.anchor.setTo(0.5);
		_this.grade2CloudTxt.align = 'center';
		
				
		_this.grade2CloudTxt.font = 'gradefont';
		_this.grade2CloudTxt.fontSize = 34;
		_this.grade2CloudTxt.fontWeight = 'normal';
		_this.grade2CloudTxt.fill = '#563814';

		_this.grade2CloudTxt.wordWrap = true;
		_this.grade2CloudTxt.wordWrapWidth = 500;
		//_this.grade2CloudTxt.setTextBounds(0,0,500,500);
		//_this.grade2CloudTxt.padding.set(50, 50);
		
		
		//_this.grade2CloudTxt.useAdvancedWrap  = true;
		

		//_this.grade2CloudTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);




		//grade3Cloud = _this.add.sprite(_this.world.centerX,_this.world.centerY,'grade3Cloud');
		//_this.grade3Cloud = _this.add.sprite(250,400,'grade3Cloud');
		_this.grade3Cloud = _this.add.sprite(250,400,'gradeCloud');

		_this.grade3Cloud.anchor.setTo(0.5);
		_this.grade3Cloud.name = "grade3";
		_this.grade3Cloud.inputEnabled = true;
		_this.grade3Cloud.input.useHandCursor = true;
		//grade3Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade3Cloud.events.onInputDown.add(_this.gradeSelected,_this);


		_this.grade3CloudTxt = this.add.text(240, 398, ' \n '+window.selctedLang.grade3+' \n ');
		_this.grade3CloudTxt.anchor.setTo(0.5);
		_this.grade3CloudTxt.align = 'center';
		
				
		_this.grade3CloudTxt.font = 'gradefont';
		_this.grade3CloudTxt.fontSize = 34;
		_this.grade3CloudTxt.fontWeight = 'normal';
		_this.grade3CloudTxt.fill = '#563814';

		_this.grade3CloudTxt.wordWrap = true;
		_this.grade3CloudTxt.wordWrapWidth = 500;
		//_this.grade3CloudTxt.setTextBounds(0,0,500,500);
		//_this.grade3CloudTxt.padding.set(50, 50);
		
		
		//_this.grade3CloudTxt.useAdvancedWrap  = true;
		

		//_this.grade3CloudTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

		
		
		//grade4Cloud = _this.add.sprite(250,400,'grade4Cloud');
		//_this.grade4Cloud = _this.add.sprite(700,420,'grade4Cloud');
		_this.grade4Cloud = _this.add.sprite(700,420,'gradeCloud');

		_this.grade4Cloud.anchor.setTo(0.5);
		_this.grade4Cloud.name = "grade4";
		_this.grade4Cloud.inputEnabled = true;
		_this.grade4Cloud.input.useHandCursor = true;
		//grade4Cloud.events.onInputOver.add(_this.onMouseOver,_this);
		_this.grade4Cloud.events.onInputDown.add(_this.gradeSelected,_this);


		_this.grade4CloudTxt = this.add.text(690, 418, ' \n '+window.selctedLang.grade4+' \n ');
		_this.grade4CloudTxt.anchor.setTo(0.5);
		_this.grade4CloudTxt.align = 'center';
		
				
		_this.grade4CloudTxt.font = 'gradefont';
		_this.grade4CloudTxt.fontSize = 34;
		_this.grade4CloudTxt.fontWeight = 'normal';
		_this.grade4CloudTxt.fill = '#563814';

		_this.grade4CloudTxt.wordWrap = true;
		_this.grade4CloudTxt.wordWrapWidth = 500;
		//_this.grade4CloudTxt.setTextBounds(0,0,500,500);
		//_this.grade4CloudTxt.padding.set(50, 50);
		
		
		//_this.grade4CloudTxt.useAdvancedWrap  = true;
		

		//_this.grade4CloudTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
		

		_this.graphicsBg = _this.add.graphics(0, 0);
		_this.graphicsBg.lineStyle(0, 0xFFFFFF, 0.8);
		_this.graphicsBg.beginFill(0xF7D519, 0);
		_this.graphicsBg.drawRect(0,0,1920,540);
		_this.graphicsBg.boundsPadding = 0;

		if(window.languageSelected=="Hindi")
		{
			_this.grade1Cloud.frame = 1;
			_this.grade2Cloud.frame = 1;
			_this.grade3Cloud.frame = 1;
			_this.grade4Cloud.frame = 1;
		}
		else if(window.languageSelected=="Kannada")
		{
			_this.grade1Cloud.frame = 2;
			_this.grade2Cloud.frame = 2;
			_this.grade3Cloud.frame = 2;
			_this.grade4Cloud.frame = 2;
		}
		else
		{
			_this.grade1Cloud.frame = 0;
			_this.grade2Cloud.frame = 0;
			_this.grade3Cloud.frame = 0;
			_this.grade4Cloud.frame = 0;
		}
		
		_this.graphicsBg.addChild(_this.grade1Cloud);
		_this.graphicsBg.addChild(_this.grade2Cloud);
		_this.graphicsBg.addChild(_this.grade3Cloud);
		_this.graphicsBg.addChild(_this.grade4Cloud);


		_this.graphicsBg.addChild(_this.grade1CloudTxt);
		_this.graphicsBg.addChild(_this.grade2CloudTxt);
		_this.graphicsBg.addChild(_this.grade3CloudTxt);
		_this.graphicsBg.addChild(_this.grade4CloudTxt);

		
		
	},
	
	onMouseOver:function(target)
	{
		
		
	},
	
	gradeSelected:function(target)
	{
		
		_this.gradeBackBtn.events.onInputDown.removeAll();
		_this.grade1Cloud.events.onInputDown.removeAll();
		_this.grade2Cloud.events.onInputDown.removeAll();
		_this.grade3Cloud.events.onInputDown.removeAll();
		_this.grade4Cloud.events.onInputDown.removeAll();
		
		
		_this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();

      
		
		switch(target.name)
		{
			case "grade1" :
							gradeSelected = 1;
							grade2Selected = false;
							_this.state.start('grade1levelSelectionScreen',true,false);
							break;
			case "grade2" :
							gradeSelected = 2;
							grade2Selected = true;
							_this.state.start('grade2levelSelectionScreen',true,false);
							break;
			case "grade3" :
							gradeSelected = 3;
							grade2Selected = false;
							_this.state.start('grade3levelSelectionScreen',true,false);
							break;
			case "grade4" :
							gradeSelected = 4;
							grade2Selected = false;
							_this.state.start('grade4levelSelectionScreen',true,false);
							break;
		}
	},
	
	shutdown:function()
	{
		document.removeEventListener("online", _this.syncTelFunc, false);
		/*_this.gradeBackBtn.events.onInputDown.removeAll();
		_this.grade1Cloud.events.onInputDown.removeAll();
		_this.grade2Cloud.events.onInputDown.removeAll();
		_this.grade3Cloud.events.onInputDown.removeAll();
		_this.grade4Cloud.events.onInputDown.removeAll();
				

		_this.background = null;

		_this.gradeBackBtn = null;

		_this.grade1Cloud = null;
		
		_this.grade2Cloud = null;
		
		_this.grade3Cloud = null;

		_this.grade4Cloud = null;
		
		_this.graphicsBg = null;
		
		_this.clickSound = null;*/

		/*
		_this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

		//this = null;
		_this = null;*/
	}
	
};