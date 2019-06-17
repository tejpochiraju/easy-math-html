Game.unity16_2level1=function(){};


Game.unity16_2level1.prototype={


    init:function(game)
	{
		_this = this;
		//telInitializer.gameIdInit("unity10_2_3",1);
	},
    
	create:function(game){
    _this.amplify = null;
       _this.z=0;
      _this.y=740;
       _this.NoOfRabbit = -2;
        _this.YellowAnimInc = 0;
        _this.GreenAnimInc = 0;
        _this.BlueAnimInc = 0;
        _this.BlueAnimIncEx = 0;
        _this.GreenAnimIncEx = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.someVar = 0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.checkMangoes = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
        _this.toDisplayNoPad = 0;
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
         _this.checkNumber1 = 0
        _this.checkNumber2 = 0
        _this.blueLevelEnable = false;
        _this.animArraylength = 9;
        _this.qArrays = _this.shuffle( _this.qArrays);
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);
        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();
        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'grade162_bg1');
        _this.navBar = _this.add.sprite(0,0,'grade162_TopBar');
        _this.navBar.scale.setTo(1,1);
        _this.timebg = _this.add.sprite(300,5,'grade162_timebg');
        _this.questBox = _this.add.sprite(100,50,'grade162_1_Box');
        _this.questBox.scale.setTo(0.8,0.9);

        _this.box1 = _this.add.sprite(890,355,'grade62_box1');
        _this.box1.scale.setTo(0.8,0.8);
        _this.box1.anchor.setTo(0.5);

         _this.box2 = _this.add.sprite(890,180,'grade62_box1');
        _this.box2.scale.setTo(0.8,0.8);
        _this.box2.anchor.setTo(0.5);

        _this.timeDisplay = _this.add.text(325,20, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(5,5,'grade11_backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(gradeSelected == 1)
              _this.state.start('grade1levelSelectionScreen',true,false); 
            else if(gradeSelected == 2)
              _this.state.start('grade2levelSelectionScreen',true,false); 
            else
              _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'Level42A_CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
			_this.getVoice();
        },_this);
        
       

         _this.numBoxNum1 = _this.add.sprite(865,320,'grade162_greenNumbers');
        _this.numBox1Pressed = true;
         _this.numBoxNum2 = _this.add.sprite(865,145,'grade162_greenNumbers');
        //_this.numBox2Pressed = true;
        //_this.numBoxNum1.frame  = 1;
       _this.numBoxNum1.visible = false;
              _this.numBoxNum2.visible = false;

        _this.dblDigit=0;
      _this.generateStarsForTheScene(6);
         // _this.no1++;
       // _this.getVoice(); 
        
        _this.getQuestion();
		//_this.getVoice();
    },
amplifyMedia:function(mediaElem, multiplier) {
      var context = new (window.AudioContext || window.webkitAudioContext),
          result = {
            context: context,
            source: context.createMediaElementSource(mediaElem),
            gain: context.createGain(),
            media: mediaElem,
            amplify: function(multiplier) { result.gain.gain.value = multiplier; },
            getAmpLevel: function() { return result.gain.gain.value; }
          };
      result.source.connect(result.gain);
      result.gain.connect(context.destination);
      result.amplify(multiplier);

      return result;
  },
  
  stopVoice:function()
  {   
   

     if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
			
		if(_this.celebrationSound)
		{
			if(_this.celebrationSound.isPlaying)
			{
				_this.celebrationSound.stop();
				_this.celebrationSound = null;
			}
		}

  },
  
    updateTimer:function() {
     _this.counterForTimer++;
    // //////console.log("lololil"+_this.counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 _this.minutes =  _this.minutes+1;
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
	            _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
      _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },

    getQuestion:function(target)
    {  ////console.log("get Question "+_this.no1);
        _this.timer = _this.time.create(false);
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;
          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        //////console.log(" _this.no1"+ _this.no1);
        // _this.no1 = 1;
   //  //console.log("Q "+_this.qArrays[_this.no1]);
            switch( _this.qArrays[ _this.no1])
    	{
    		case 1: 
        _this.gotoFirstQuestion();
            break;
        case 2: _this.gotoSecondQuestion();
            break;
        case 3: _this.gotoThirdQuestion();
            break;
        case 4: _this.gotoFourthQuestion();
            break;
        case 5: _this.gotoFifthQuestion();
            break;
        case 6: _this.gotoSixthQuestion();
            break;
            case 7: _this.gotoSeventhQuestion();
            break;
            case 8: _this.gotoEighthQuestion();
            break;
            case 9: _this.gotoNinthQuestion();
            break;
        case 10: _this.gotoTenthQuestion();
            break;
    	}
     _this.questionid = 1;
    },
    
rabbitFirst:function(){

if(_this.NoOfRabbit==_this.selectedAns)
         {
        //console.log("o o o o o o o o ");
        _this.rabbitBegin.kill();
        _this.cloudBegin.destroy();

                //console.log("o o o o o o o o ");


        }
        else{

_this.rabbitBegin = _this.add.sprite(40,290,'grade162_1_RabitAnim');
                    _this.rabbitBegin.scale.setTo(0.6,0.6);
                    _this.rabbitBegin.animations.add('grade162_1_RabitAnim');
                    _this.rabbitBegin.animations.play('grade162_1_RabitAnim',5,true);
     
                    _this.cloudBegin = _this.add.sprite(90,120,'grade162_1_thinkingCloud');
                    _this.cloudBegin.animations.add('grade162_1_thinkingCloud',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
                    _this.cloudBegin.animations.play('grade162_1_thinkingCloud',20);
     
                    _this.carrotInsidecloud();

_this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
          //_this.checkCount = 2;
     _this.count = 1;
   
//console.log("checkCount"+_this.checkCount);
                                      //console.log("Count"+_this.count);
                                    }

},

 gotoFirstQuestion:function(){
       _this.getVoice();                 
_this.y=740;
  _this.carrotBackGroup = _this.add.group();
        _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<9;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

                    _this.questOneNum1 = _this.add.sprite(117,58.5,'grade162_greenNumbers');
                    _this.questOneNum1.frame=8;
                    _this.questOneNum1.scale.setTo(0.65,0.65);
                    _this.questOneNum1.fontSize = 1;
                   // _this.q1 = _this.add.audio('q1');
                    //_this.q1.play();


        _this.dblDigit=0;

                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=1;
                    _this.questOneNum2.scale.setTo(0.65,0.65);
                    _this.questOneNum2.fontSize = 1;
                    _this.divideSymbol = _this.add.sprite(154.5,58.5,'grade162_divide');
                    _this.divideSymbol.fontSize = 1;
                    _this.divideSymbol.scale.setTo(0.65,0.65);

                    _this.rabbitFirst();
     
                    _this.carrotGroup = _this.add.group();
                    _this.x = 410;
                    _this.x1 = -45;
                    _this.x2 = -495;
                    for(var i=0;i<9;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;

            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
        }//console.log("/////////////////////////////////////////////////");
                _this.CarrotCount = 2;
_this.m = 0;
        _this.checkCount = 2;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=4;
     _this.remainder=1
     }, 
    gotoSecondQuestion:function(){
 
   _this.getVoice();                      
_this.y=740;
      _this.carrotBackGroup = _this.add.group();
        _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<8;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.
                      x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

                    _this.questOneNum1 = _this.add.sprite(117,58.5,'grade162_greenNumbers');
                    _this.questOneNum1.frame=7;
                    _this.questOneNum1.scale.setTo(0.65,0.65);
                    _this.questOneNum1.fontSize = 5;
                            _this.dblDigit=0;

                      _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=2;
                    _this.questOneNum2.fontSize = 5;
_this.questOneNum2.scale.setTo(0.65,0.65);
                    
                    _this.divideSymbol = _this.add.sprite(154.5,58.5,'grade162_divide');
                     _this.divideSymbol.fontSize = 5;
_this.divideSymbol.scale.setTo(0.65,0.65);
         _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                    _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<8;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
                      if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
          _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 3;
_this.m = 0;
        _this.checkCount = 3;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=2;
     _this.remainder=2;
        }
        
     }, 
    gotoThirdQuestion:function(){
    	                       
     _this.getVoice();                    
		_this.y=740;
      _this.carrotBackGroup = _this.add.group();
         _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<14;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }
  
       
					_this.questOneNum1 = _this.add.group();
                    _this.questOne = _this.add.sprite(105,58.5,'grade162_greenNumbers');
                    _this.questOne.frame=0;
                   _this.questOne.scale.setTo(0.7,0.7);

                    _this.questOne.fontSize = 2;
					_this.questOneNum1.add(_this.questOne);

                    _this.questOneNum11 = _this.add.sprite(128,58.5,'grade162_greenNumbers');
                    _this.questOneNum11.frame=3;
                    _this.questOneNum11.fontSize = 18;
_this.questOneNum11.scale.setTo(0.65,0.65);
                    _this.questOneNum1.add(_this.questOneNum11);
                            _this.dblDigit=1;

                   /* _this.q1 = _this.add.audio('q1');
                    _this.q1.play();
*/
                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=2;
                    _this.questOneNum2.fontSize = 5;
_this.questOneNum2.scale.setTo(0.65,0.65);
                    
                    _this.divideSymbol = _this.add.sprite(156,58.5,'grade162_divide');                     _this.divideSymbol.fontSize = 5;
_this.divideSymbol.scale.setTo(0.65,0.65);
                            _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<14;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 3;
_this.m = 0;
        _this.checkCount = 3;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=4;
          _this.remainder=2;

        }
        
     }, 

      gotoFourthQuestion:function(){
          _this.getVoice();                   
                         
_this.y=740;
      _this.carrotBackGroup = _this.add.group();
         _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<11;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }
_this.questOneNum1 = _this.add.group();
                    _this.questOne = _this.add.sprite(105,58.5,'grade162_greenNumbers');
                    _this.questOne.frame=0;
                   _this.questOne.scale.setTo(0.7,0.7);

                    _this.questOne.fontSize = 2;
          _this.questOneNum1.add(_this.questOne);

                    _this.questOneNum11 = _this.add.sprite(128,58.5,'grade162_greenNumbers');
                    _this.questOneNum11.frame=0;
                    _this.questOneNum11.fontSize = 18;
_this.questOneNum11.scale.setTo(0.65,0.65);
                    _this.questOneNum1.add(_this.questOneNum11);
                            _this.dblDigit=1;

                   /* _this.q1 = _this.add.audio('q1');
                    _this.q1.play();
*/
                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=4;
                    _this.questOneNum2.fontSize = 5;
_this.questOneNum2.scale.setTo(0.65,0.65);
                    
                    _this.divideSymbol = _this.add.sprite(156,58.5,'grade162_divide');                     _this.divideSymbol.fontSize = 5;
_this.divideSymbol.scale.setTo(0.65,0.65);
                 _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<11;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 5;
_this.m = 0;
        _this.checkCount = 5;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=2;
          _this.remainder=1;

        }
        
     }, 

     gotoFifthQuestion:function(){
                           
          _this.getVoice();               
_this.y=740;

      _this.carrotBackGroup = _this.add.group();
         _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<18;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

                    _this.questOneNum1 = _this.add.group();
                    _this.questOne = _this.add.sprite(105,58.5,'grade162_greenNumbers');
                    _this.questOne.frame=0;
                   _this.questOne.scale.setTo(0.7,0.7);

                    _this.questOne.fontSize = 2;
          _this.questOneNum1.add(_this.questOne);

                    _this.questOneNum11 = _this.add.sprite(128,58.5,'grade162_greenNumbers');
                    _this.questOneNum11.frame=7;
                    _this.questOneNum11.fontSize = 18;
_this.questOneNum11.scale.setTo(0.65,0.65);
                    _this.questOneNum1.add(_this.questOneNum11);
                            _this.dblDigit=1;

                   /* _this.q1 = _this.add.audio('q1');
                    _this.q1.play();
*/
                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=4;
                    _this.questOneNum2.fontSize = 5;
_this.questOneNum2.scale.setTo(0.65,0.65);
                    
                    _this.divideSymbol = _this.add.sprite(156,58.5,'grade162_divide');                     _this.divideSymbol.fontSize = 5;
_this.divideSymbol.scale.setTo(0.65,0.65);
                
                         _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<18;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;

            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 5;
_this.m = 0;
        _this.checkCount = 5;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=3;
     _this.remainder=3;
        }
        
     }, 

     gotoSixthQuestion:function(){

     	   _this.getVoice();                    
                         
_this.y=740;
      _this.carrotBackGroup = _this.add.group();
         _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<7;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

                   _this.questOneNum1 = _this.add.sprite(117,58.5,'grade162_greenNumbers');
                    _this.questOneNum1.frame=6;
                    _this.questOneNum1.scale.setTo(0.65,0.65);
                    _this.questOneNum1.fontSize = 1;
                   _this.dblDigit=0;

                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=1;
                    _this.questOneNum2.scale.setTo(0.65,0.65);
                    _this.questOneNum2.fontSize = 1;
                    _this.divideSymbol = _this.add.sprite(154.5,58.5,'grade162_divide');
                    _this.divideSymbol.fontSize = 1;
                    _this.divideSymbol.scale.setTo(0.65,0.65);
                          _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<7;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 2;
_this.m = 0;
        _this.checkCount = 2;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=3;
          _this.remainder=1;

        }
        
     }, 

     gotoSeventhQuestion:function(){
_this.y=740;
             _this.getVoice();            
                             
      _this.carrotBackGroup = _this.add.group();
        _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<5;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

                    _this.questOneNum1 = _this.add.sprite(117,58.5,'grade162_greenNumbers');
                    _this.questOneNum1.frame=4;
                    _this.questOneNum1.scale.setTo(0.65,0.65);
                    _this.questOneNum1.fontSize = 1;
                   _this.dblDigit=0;

                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=2;
                    _this.questOneNum2.scale.setTo(0.65,0.65);
                    _this.questOneNum2.fontSize = 1;
                    _this.divideSymbol = _this.add.sprite(154.5,58.5,'grade162_divide');
                    _this.divideSymbol.fontSize = 1;
                    _this.divideSymbol.scale.setTo(0.65,0.65);
                    
                         _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<5;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 3;
_this.m = 0;
        _this.checkCount = 3;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=1;
          _this.remainder=2;
          //console.log("remainder"+_this.remainder);

        }
        
     }, 

     gotoEighthQuestion:function(){
     	                       
          _this.getVoice();                   
        _this.y = 740;

      _this.carrotBackGroup = _this.add.group();
         _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<12;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

                    _this.questOneNum1 = _this.add.group();
                    _this.questOne = _this.add.sprite(105,58.5,'grade162_greenNumbers');
                    _this.questOne.frame=0;
                   _this.questOne.scale.setTo(0.7,0.7);

                    _this.questOne.fontSize = 2;
          _this.questOneNum1.add(_this.questOne);

                    _this.questOneNum11 = _this.add.sprite(128,58.5,'grade162_greenNumbers');
                    _this.questOneNum11.frame=1;
                    _this.questOneNum11.fontSize = 18;
_this.questOneNum11.scale.setTo(0.65,0.65);
                    _this.questOneNum1.add(_this.questOneNum11);
                            _this.dblDigit=1;

                   /* _this.q1 = _this.add.audio('q1');
                    _this.q1.play();
*/
                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=4;
                    _this.questOneNum2.fontSize = 5;
_this.questOneNum2.scale.setTo(0.65,0.65);
                    
                    _this.divideSymbol = _this.add.sprite(156,58.5,'grade162_divide');                     _this.divideSymbol.fontSize = 5;
_this.divideSymbol.scale.setTo(0.65,0.65);
                
                          _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<12;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 5;
_this.m = 0;
        _this.checkCount = 5;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=2;
          _this.remainder=2;

        }
        
     }, 

     gotoNinthQuestion:function(){
     	   _this.getVoice();                     
                         
        _this.y = 740;

      _this.carrotBackGroup = _this.add.group();
         _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<18;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

 _this.questOneNum1 = _this.add.group();
                    _this.questOne = _this.add.sprite(105,58.5,'grade162_greenNumbers');
                    _this.questOne.frame=0;
                   _this.questOne.scale.setTo(0.7,0.7);

                    _this.questOne.fontSize = 2;
          _this.questOneNum1.add(_this.questOne);

                    _this.questOneNum11 = _this.add.sprite(128,58.5,'grade162_greenNumbers');
                    _this.questOneNum11.frame=7;
                    _this.questOneNum11.fontSize = 18;
_this.questOneNum11.scale.setTo(0.65,0.65);
                    _this.questOneNum1.add(_this.questOneNum11);
                            _this.dblDigit=1;

                   /* _this.q1 = _this.add.audio('q1');
                    _this.q1.play();
*/
                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=3;
                    _this.questOneNum2.fontSize = 5;
_this.questOneNum2.scale.setTo(0.65,0.65);
                    
                    _this.divideSymbol = _this.add.sprite(156,58.5,'grade162_divide');                     _this.divideSymbol.fontSize = 5;
_this.divideSymbol.scale.setTo(0.65,0.65);
                
                        _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<18;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 4;
_this.m = 0;
        _this.checkCount = 4;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=4;
          _this.remainder=2;

        }
        
     }, 

     gotoTenthQuestion:function(){

     	 _this.getVoice();                       
                         
_this.y=740;
      _this.carrotBackGroup = _this.add.group();
         _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
        for(var i=0;i<3;i++)
        {
            if(i<7){
                
                _this.carrot = _this.carrotBackGroup.create(_this.x,100,'grade162_1_carrot');  
                _this.carrot.scale.setTo(0.45,0.45);
                _this.carrot.anchor.setTo(0.5);
            }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotBackGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
            
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
        
        }

                   _this.questOneNum1 = _this.add.sprite(117,58.5,'grade162_greenNumbers');
                    _this.questOneNum1.frame=2;
                    _this.questOneNum1.scale.setTo(0.65,0.65);
                    _this.questOneNum1.fontSize = 1;
                   _this.dblDigit=0;

                    _this.questOneNum2 = _this.add.sprite(214,58.5,'grade162_greenNumbers');
                    _this.questOneNum2.frame=1;
                    _this.questOneNum2.scale.setTo(0.65,0.65);
                    _this.questOneNum2.fontSize = 1;
                    _this.divideSymbol = _this.add.sprite(154.5,58.5,'grade162_divide');
                    _this.divideSymbol.fontSize = 1;
                    _this.divideSymbol.scale.setTo(0.65,0.65);
                    

                         _this.rabbitFirst();

                    _this.carrotGroup = _this.add.group();
                     _this.x = 410;
        _this.x1 = -45;
        _this.x2 = -495;
                    for(var i=0;i<3;i++)
                    {
                     if(i<7){
                
                     _this.carrot = _this.carrotGroup.create(_this.x,100,'grade162_1_carrot');  
                     _this.carrot.scale.setTo(0.45,0.45);
                     _this.carrot.anchor.setTo(0.5);
                      }
          if(i>=7 && i<13)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x1,180,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
        if(i>=13 && i<20)
                {
                    _this.carrot = _this.carrotGroup.create(_this.x2,260,'grade162_1_carrot');  
                    _this.carrot.scale.setTo(0.45,0.45);
                    _this.carrot.anchor.setTo(0.5);
                }
           
            _this.x+=70;
            _this.x1+=70;
            _this.x2+=70;
            _this.carrot.frame = 1;
            
            _this.carrot.inputEnabled = true;
            _this.carrot.input.useHandCursor = true;
            _this.carrot.events.onInputDown.add(_this.carrotClicked1,_this);
            _this.CarrotCount = 2;
_this.m = 0;
        _this.checkCount = 2;
     _this.count = 1;
     _this.NoOfRabbit=0;
     _this.selectedAns=1;
          _this.remainder=1;

        }
        
     }, 
    carrotInsidecloud:function()
    {
         _this.carrotCloudGroup = _this.add.group();
        _this.x = 170;
        _this.x1 = 10;
        _this.x2 = -200;
        for(var i=0;i<9;i++)
        {
            if(i<4){
                
                _this.carrotC = _this.carrotCloudGroup.create(_this.x,190,'grade162_1_carrot');  
                _this.carrotC.scale.setTo(0.4,0.4);
                _this.carrotC.anchor.setTo(0.5);
            }
          if(i>=4 && i<8)
                {
                    _this.carrotC = _this.carrotCloudGroup.create(_this.x1,260,'grade162_1_carrot');  
                    _this.carrotC.scale.setTo(0.4,0.4);
                    _this.carrotC.anchor.setTo(0.5);
                }
             if(i>=8 )
                {
                    _this.carrotC = _this.carrotCloudGroup.create(_this.x1,230,'grade162_1_carrot');  
                    _this.carrotC.scale.setTo(0.4,0.4);
                    _this.carrotC.anchor.setTo(0.5);
                }
            _this.x+=40;
            _this.x1+=40;
            _this.x2+=40;
            _this.carrotC.frame = 1;
            _this.carrotC.visible = false;
        }
    
    },
 carrotClicked1:function(target){
 	_this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();

        _this.vx = target.x;   
        _this.vy = target.y; 
          target.input.enableDrag(true);

        ////console.log(" target " +target.name);
        ////console.log(" yellowCoin.y " +_this.yaxis);
       
        target.events.onDragStop.add(

            function(target){
               // for(var j =0;j<_this.carrotCloudGroup.length;j++)
              
_this.clickSound = _this.add.audio('Tap');
        _this.clickSound.play();

               for(var j =0;j<_this.CarrotCount;j++)
			     {

                 if(_this.checkOverlap(target,_this.cloudBegin))
                     {

                         if(_this.carrotCloudGroup.getChildAt(j).visible == false)
                             {

                                 if(_this.checkCount ==_this.count)
                                     {
                                     	 
                                     	 
                                      //console.log("checkCount  is "+_this.checkCount);
                                      //console.log("Count"+_this.count);
                                      //console.log("carrot Count"+_this.CarrotCount);
                                      //console.log("_this.y"+_this.y);
                                      //console.log("_this.numGroup"+_this.numGroup);


                                           setTimeout(function(){ _this.carrotCloudGroup.getChildAt(0).visible = false; 
                                          _this.carrotCloudGroup.getChildAt(1).visible = false; 
                                          _this.carrotCloudGroup.getChildAt(2).visible = false; 
                                          _this.carrotCloudGroup.getChildAt(3).visible = false; 
                                          _this.carrotCloudGroup.getChildAt(4).visible = false; 
                                          _this.carrotCloudGroup.getChildAt(5).visible = false; 

                                              }, 50);
                                      _this.cloudBegin.kill();
                                     _this.cloudBegin = _this.add.sprite(100,120,'grade162_1_thinkingCloud');
                                     _this.cloudBegin.animations.add('grade162_1_thinkingCloud',[17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]);
                                     _this.cloudBegin.animations.play('grade162_1_thinkingCloud',20);    
                                      _this.clickSound = _this.add.audio('CarrotBite');
                                      _this.clickSound.play();           
                                                    //  _this.cloudBegin.destroy();

                                  setTimeout(function(){ _this.cloudBegin.destroy(); },500);
                                  setTimeout(function(){ _this.rabbitFirst(); },2100);

                                  //_this.carrotCloudGroup.getChildAt(j).visible = false;
           
                                  _this.rabbitBegin.kill();
                               _this.grade16_1_Rabitidle = _this.add.sprite(340,370,'grade162_1_Rabitidle');
                               _this.grade16_1_Rabitidle.scale.setTo(0.5,0.5);
                               _this.grade16_1_Rabitidle.animations.add('grade162_1_Rabitidle',[0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,12]); 
                                _this.grade16_1_Rabitidle.animations.play('grade162_1_Rabitidle',20);  
                               _this.grade16_1_Rabitidle.x=50;
                                _this.grade16_1_Rabitidle.y=290;

_this.time.events.add(500, function(){


                                var M1 = this.add.tween(_this.grade16_1_Rabitidle);
                                M1.to({ x:_this.y-100 ,y:290}, 2000, 'Linear', true, 0);
                                 _this.clickSound = _this.add.audio('Rabbit');
                                      _this.clickSound.play();

             }, _this);

                               
                                setTimeout(function(){ 
if(_this.NoOfRabbit==1){
                                _this.rabbitBegin1 = _this.add.sprite(_this.y,290,'grade162_1_RabitAnim');
                                _this.rabbitBegin1.scale.setTo(0.6,0.6);
                                _this.rabbitBegin1.animations.add('grade162_1_RabitAnim');
                                _this.rabbitBegin1.animations.play('grade162_1_RabitAnim',5,true);
      }
      if(_this.NoOfRabbit==2){
                                _this.rabbitBegin2 = _this.add.sprite(_this.y,290,'grade162_1_RabitAnim');
                                _this.rabbitBegin2.scale.setTo(0.6,0.6);
                                _this.rabbitBegin2.animations.add('grade162_1_RabitAnim');
                                _this.rabbitBegin2.animations.play('grade162_1_RabitAnim',5,true);
      }
       if(_this.NoOfRabbit==3){
                                _this.rabbitBegin3 = _this.add.sprite(_this.y,290,'grade162_1_RabitAnim');
                                _this.rabbitBegin3.scale.setTo(0.6,0.6);
                                _this.rabbitBegin3.animations.add('grade162_1_RabitAnim');
                                _this.rabbitBegin3.animations.play('grade162_1_RabitAnim',5,true);
      }
      if(_this.NoOfRabbit==4){
                                _this.rabbitBegin4 = _this.add.sprite(_this.y,290,'grade162_1_RabitAnim');
                                _this.rabbitBegin4.scale.setTo(0.6,0.6);
                                _this.rabbitBegin4.animations.add('grade162_1_RabitAnim');
                                _this.rabbitBegin4.animations.play('grade162_1_RabitAnim',5,true);
     }
     if(_this.NoOfRabbit==5){
                                _this.rabbitBegin5 = _this.add.sprite(_this.y,290,'grade162_1_RabitAnim');
                                _this.rabbitBegin5.scale.setTo(0.6,0.6);
                                _this.rabbitBegin5.animations.add('grade162_1_RabitAnim');
                                _this.rabbitBegin5.animations.play('grade162_1_RabitAnim',5,true);
     }
     if(_this.NoOfRabbit==6){
                                _this.rabbitBegin6 = _this.add.sprite(_this.y,290,'grade162_1_RabitAnim');
                                _this.rabbitBegin6.scale.setTo(0.6,0.6);
                                _this.rabbitBegin6.animations.add('grade162_1_RabitAnim');
                                _this.rabbitBegin6.animations.play('grade162_1_RabitAnim',5,true);
     }
                                },2500);
                                setTimeout(function(){ 

                               _this.grade16_1_Rabitidle.kill();
                               },2500);
                               //console.log("rabbitFirst");

 _this.y-=85;

                              _this.NoOfRabbit+=1;
                              //console.log("_this.NoOfRabbit"+_this.NoOfRabbit);
                              //console.log("_this.selectedAns"+_this.selectedAns);
                             /* _this.box1.inputEnabled = true;
                             _this.box1.input.useHandCursor = true;
							
                             _this.box1.events.onInputDown.add(function(){
                            */ /*	if(_this.NoOfRabbit==_this.selectedAns)
                                          {*/
                  	if(_this.NoOfRabbit==_this.selectedAns){ 
        	 		              _this.box1.frame=1;

            _this.addNumberPad();
        	 	}
_this.box1.inputEnabled = true;
_this.box1.input.useHandCursor = true;
_this.box1.events.onInputDown.add(function()
        {
        		if(_this.NoOfRabbit==_this.selectedAns){ 
_this.box1.frame=1;
          _this.box2.frame=0;
          _this.numBox1Pressed=true;
                    //_this.numBox2Pressed=false;

                            //_this.numGroup.destroy();

            //_this.addNumberPad();
        	 	}
        	else if(_this.NoOfRabbit<_this.selectedAns){
        		_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.wmusic=_this.add.audio('waudio');
            _this.wmusic.play();
        }
            
        	 	},this);

_this.box2.inputEnabled = true;
_this.box2.input.useHandCursor = true;
_this.box2.events.onInputDown.add(function()
        {
          
            if(_this.NoOfRabbit==_this.selectedAns){ 
              _this.box1.frame=0;
          _this.box2.frame=1;
          _this.numBox2Pressed=true;
                    _this.numBox1Pressed=false;

              //_this.numGroup.destroy();
            //_this.addNumberPad();
            }
          else if(_this.NoOfRabbit<_this.selectedAns){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.wmusic=_this.add.audio('waudio');
            _this.wmusic.play();
        }
            
            },this);
/*
        	 if(_this.NoOfRabbit<_this.selectedAns){
        	 	_this.box1.events.onInputDown.add(function()
        {
 _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.wmusic=_this.add.audio('waudio');
            _this.wmusic.play();

       
        
},this);}
        	 	else{ 
        	 		
            _this.addNumberPad();
        	 	}*/
                             	      }
                           
                                 _this.count++;
                                  target.visible = false;
                                  //console.log("j "+j);
                                   _this.m+=1;


                                  _this.carrotCloudGroup.getChildAt(j).visible = true; 
                                    //console.log("m="+_this.m);
                                  break;
                             }
                              
                     }

                                                    

                 }
            target.events.onDragStop.removeAll();
             target.x = _this.vx;
             target.y = _this.vy;  
         },_this);


 },

 wrongAns:function(target)
  {
    _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click",
                    res_id: "level12_TickMark",
                    access_token: window.acctkn
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   
          
       
        _this.timer1.stop();  
         _this.wrong = false;
        _this.basketback.visible = false;
        
     _this.shake.shake(10,  _this.basket);
     _this.wmusic = _this.add.audio('waudio');
     _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }

        _this.time.events.add(500, function(){ target.events.onInputDown.removeAll();
          _this.getQuestion();},_this);
  },
      
  checkOverlap:function(spriteA, spriteB) 
{

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

},
    addNumberPad:function(){
_this.z+=1;  
//console.log("z="+_this.z);      //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBackground = this.add.sprite(480,505,'Level162_numBG');    
            _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
        _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 120;
        for(var i=2;i<11;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'grade162_numberbox1');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
                     //_this.numGroup.visible=false;

            if(i<11)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Oh Whale';
            _this.numTxt.fontSize = 45;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#000000';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild( _this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            _this.x+=70;
        }
  
 _this.eraser = _this.numGroup.create(_this.x+30,507,'grade162_eraser');
        _this.eraser.anchor.setTo(0.5);
      // _this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+90,507,'grade162_tick');
        _this.rightbtn.anchor.setTo(0.5);
              // _this.rightbtn.scale.setTo(0.5);

        _this.rightbtn.name = "rightbtn";
        //_this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
         _this.numGroup.y = 50;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
       _this.eraser.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
     _this.eraser.frame =1;
      setTimeout(function(){ _this.eraser.frame = 0;
          }, 200);


                if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = false;

                }
              if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;

                }
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
_this.rightbtn.frame =1;
      setTimeout(function(){ _this.rightbtn.frame = 0;
          }, 200);
      


            
             //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.selectedAns1  && _this.remainder== _this.selectedAns2 )  
                {
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.count1++;

                      _this.tween1 = _this.add.tween(_this.numGroup);

                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                           _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                }
            else
                { 
 _this.waudio = _this.add.audio('waudio');
                    _this.waudio.play();
                     _this.numBoxNum1.visible = false;
                                          _this.numBoxNum2.visible = false;
                                          _this.box1.frame=1;
                                          _this.numBox1Pressed=true;
                                          _this.numBox2Pressed=false;

                  }
        },this);
       
      
    },
    
     numClicked:function(target)
     {
         
           ////console.log(target.name);
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
if(_this.numBox1Pressed){
          _this.numBoxNum1.visible = true;
                    _this.numBoxNum2.visible = false;

             _this.selectedAns1 = target.name-2;
             _this.numBoxNum1.frame = target.name-3;



_this.box1.frame = 0;
//_this.box2.frame = 1;
          //  _this.numBox1Pressed = false;


             //console.log("numbo1pressed");
            //console.log("selectedAns1"+_this.selectedAns1);

         }
        
         if(_this.numBox2Pressed){
          _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name-2;
             _this.numBoxNum2.frame = target.name-3;
             ////console.log("numbo2pressed");
            ////console.log("selectedAns2"+_this.selectedAns2);
            _this.box2.frame = 0;
            _this.numBox1Pressed = false;

         }
         
         if(_this.numBoxNum1.visible && _this.numBox1Pressed== true){
             _this.box2.frame = 1;
           _this.box1.frame = 0;
                                         //console.log("numbo2pressed------------");

            _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
                                           //console.log("numbo2presseddddddddd-------------");

         }
    },
    
    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
 },
    getVoice:function(){
        ////console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
           //console.log(selctedLang);
            _this.playQuestionSound = document.createElement('audio');
      _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
            {
                    
                    
                case 1:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_2.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "questionSounds/16.2/Odiya/16.2K.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                        break;
                case 2:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_3.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "questionSounds/16.2/Odiya/16.2L.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
	
                        break;
                case 3:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_3.mp3");
                        }
					   else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2L.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                        break;
                case 4:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_5.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_5.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_5.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2N.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                        break;
                case 5:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_5.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_5.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_5.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2N.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                        break;
                case 6:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_2.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2K.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                        break; 
                case 7:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_3.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2L.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                            break;
                case 8:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_5.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_5.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_5.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2N.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                            break;
                case 9:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_4.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_4.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_4.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2M.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                        break;
                case 10:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/English/Game16.2_2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Hindi/Game16.2_2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/16.2/Kannada/Game16.2_2.mp3");
                        }
						else
						{
						  _this.src.setAttribute("src", "/questionSounds/16.2/Odiya/16.2K.mp3");
						  _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
						}
                        break;
            }
        _this.playQuestionSound.appendChild(_this.src);
    _this.playQuestionSound.play();
        },

    removeEverthing:function() 
    {
//console.log("npppppppp")

         _this.no1++;
        //console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
            // _this.no1++;
                              
              _this.wrong = true;
            //////console.log("here its");
             _this.timer1.stop();
                _this.count =0;
                _this.box1.frame = 0;
                _this.box2.frame = 0;

                _this.y=740;
                _this.grade16_1_Rabitidle.destroy();
                if(_this.NoOfRabbit==1){
                _this.rabbitBegin1.destroy();
            _this.numGroup.destroy();

                }
                if(_this.NoOfRabbit==2){
                _this.rabbitBegin1.destroy();
                _this.rabbitBegin2.destroy();
            _this.numGroup.destroy();

                }
                if(_this.NoOfRabbit==3){
                _this.rabbitBegin1.destroy();
                _this.rabbitBegin2.destroy();
                _this.rabbitBegin3.destroy();
            _this.numGroup.destroy();

                }
                if(_this.NoOfRabbit==4){
                _this.rabbitBegin1.destroy();
                _this.rabbitBegin2.destroy();
                _this.rabbitBegin3.destroy();
                _this.rabbitBegin4.destroy();
            _this.numGroup.destroy();

                }
                if(_this.NoOfRabbit==5){
                _this.rabbitBegin1.destroy();
                _this.rabbitBegin2.destroy();
                _this.rabbitBegin3.destroy();
                _this.rabbitBegin4.destroy();
                _this.rabbitBegin5.destroy();
            _this.numGroup.destroy();

                }
                if(_this.NoOfRabbit==6){
                _this.rabbitBegin1.destroy();
                _this.rabbitBegin2.destroy();
                _this.rabbitBegin3.destroy();
                _this.rabbitBegin4.destroy();
                                _this.rabbitBegin5.destroy();

                _this.rabbitBegin6.destroy();
            _this.numGroup.destroy();


                }

//_this.questOneNum1.visible=false;
_this.questOneNum1.destroy();
if(_this.questOneNum11)
	_this.questOneNum11.destroy();

/*if(_this.dblDigit==1){
_this.questOneNum11.visible=false;
}*/
                    //_this.questOneNum2.visible=false; 
                    _this.questOneNum2.destroy(); 
                    _this.divideSymbol.destroy();

_this.carrotBackGroup.destroy();
_this.carrotGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
_this.numBox1Pressed=true;
_this.numBox2Pressed=false;
            _this.selectedAns = " ";/*


           */ 
_this.rabbitBegin.destroy();
_this.rabbitBegin1.destroy();
_this.cloudBegin.destroy();



           _this.getQuestion();
            
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null; 
            _this.counterForTimer = null;
             //_this.stopVoice();
            _this.state.start('unity16_2Score');
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=15;
					 _this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	/*correctAns:function()
	{
        _this.noofAttempts++;
          
            
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
     //  telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
            //target.events.onInputDown.removeAll();
            // _this.stopVoice();
        
        	       _this.speakerbtn.inputEnabled=false;
                    _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                   // //////console.log(starAnim);
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                    _this.celebr = _this.add.audio('celebr');
                     _this.celebr.play();
                     _this.anim4.play();

                     _this.count1++;
                    
                    _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
},
wrongAns:function(target)
	{
        _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click",
                    res_id: "level12_TickMark",
                    access_token: window.acctkn
               } 
               
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   
          
       
        _this.timer1.stop();	
         _this.wrong = false;
        _this.basketback.visible = false;
        
		 _this.shake.shake(10,  _this.basket);
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
         _this.w = 8;
        _this.checkMangoes = 0;
        for(var i =0;i<9;i++){
          _this.objectGroup.getChildAt(i).visible = false;
        }
        _this.time.events.add(500, function(){ target.events.onInputDown.removeAll();_this.getQuestion();},_this);
	},*/
      
    update:function(){

    },
    
  
       /* stopVoice:function(){
            if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
				_this.playQuestionSound.pause();
				_this.playQuestionSound.currentTime = 0.0;
			}
			_this.playQuestionSound = null;
			_this.src = null;
		}
			
		if(_this.celebrationSound)
		{
			if(_this.celebrationSound.isPlaying)
			{
				_this.celebrationSound.stop();
				_this.celebrationSound = null;
			}
		}
            
        },
*/
      shutdown:function()
        {
            //_this.stopVoice();
        }
};