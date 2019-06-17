Game.unity7_1_2level1=function(){};




Game.unity7_1_2level1.prototype={


     init:function(game)
    {
         _this = this;
        
        _this.gameid = "7.1.2";
        telInitializer.gameIdInit("CoinMachine7_1_1",gradeSelected);
        

    },
    
	create:function(game){
       
	   _this.amplify = null;
	   _this.eraserclicked=0;
        _this.YellowAnimInc = 0;
        _this.GreenAnimInc = 0;
        _this.counts=0;
        _this.BlueAnimInc = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.total=0;
        _this.total1=0;
        _this.counterForTimer = 0;
        _this.checkMangoes = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
        _this.rightAns1 = "";
        randarr = new Array();
        yellowCoinArray = new Array();
        _this.toDisplayNoPad = 0;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.displayNumber1 = 0
        _this.displayNumber2 = 0
        _this.displayNumber3 = 0
        _this.displayNumber4 = 0
        _this.animArraylength = 9;
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level321_bg1');
            _this.navBar = _this.add.sprite(0,0,'Level321_navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(300,6,'Level321_timebg');
             /*_this.topicOutline = _this.add.sprite(70,5,'Level321_topicOutline');
             _this.practice = _this.add.sprite(78,10,'Level321_practice');
            
        var numTxt2 = this.add.text(210,24, 'Addition');
            numTxt2.anchor.setTo(0.5);
            numTxt2.align = 'center';
            numTxt2.font = 'Alte Haas Grotesk';
            numTxt2.fontSize = 20;
            numTxt2.fill = '#ffffff';
            numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
        
             _this.timeDisplay = _this.add.text(325,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(5,5,'Level321_CommonBackBtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'Level321_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        
        _this.coinPannel = _this.add.sprite(70,50,'Level321_coinMachinePannel');
       // _this.Pannel = _this.add.sprite(628,105,'Level321_pannel1');
        _this.Pannel = _this.add.sprite(628,105,'Level721_pannel1');
        
        _this.LeverGreen = _this.add.sprite(140,60,'Level321_LeverGreen');
         _this.LeverGreen.name = "LeverGreen";
        _this.LeverBlue = _this.add.sprite(300,60,'Level321_LeverBlue');
         _this.LeverBlue.name ="LeverBlue";
        _this.LeverYellow = _this.add.sprite(465,60,'Level321_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
        
        _this.Levercoin1 = _this.add.sprite(485,160,'Level321_coin1Anim');
        _this.Levercoin1.visible = false;
        
      _this.Levercoin10 = _this.add.sprite(315,168,'Level321_coin10Anim');
        _this.Levercoin10.visible = false; 

        _this.Level321_OneToHundred1 = _this.add.sprite(152,55,'Level321_OneToHundred');
        _this.Level321_OneToHundred10 = _this.add.sprite(315,55,'Level321_OneToHundred');
        _this.Level321_OneToHundred10.frame = 1;
        _this.Level321_OneToHundred100 = _this.add.sprite(478,55,'Level321_OneToHundred');
        _this.Level321_OneToHundred100.frame = 2;
        
        
        _this.LeverBlueNumber = _this.add.sprite(152,83,'Level321_numberSmall');
         _this.LeverBlueNumber.frame = 1;
        _this.LeverGreenNumber = _this.add.sprite(315,83,'Level321_numberSmall');
        _this.LeverGreenNumber.frame = 1;
        _this.LeverYellowNumber = _this.add.sprite(478,83,'Level321_numberSmall');
        _this.LeverYellowNumber.frame = 1;
        
        _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(652,278,'Level321_numberBox1');
         _this.numBox1.name = "numBox1";
		 _this.numBox1.inputEnabled = true;
         _this.numBox1.events.onInputDown.add(_this.numberBoxClicked,_this);
         _this.numBox2 = _this.add.sprite(723,278,'Level321_numberBox1');
		 _this.numBox2.inputEnabled = true;
         _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(792,278,'Level321_numberBox1');
		 _this.numBox3.inputEnabled = true;
         _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);
         _this.numBox3.name = "numBox3";
        //_this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox3);
        
       

        _this.numBoxNum1 = _this.add.sprite(665,280,'Level321_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(1,1);
        //_this.numBoxNum1.frame  = 1;
        _this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(732,280,'Level321_numberSmall');
         _this.numBox2Pressed = false;
        _this.numBoxNum2.scale.setTo(1,1);
        //_this.numBoxNum2.frame  = 1;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(803,280,'Level321_numberSmall');
         _this.numBox3Pressed = false;
        _this.numBoxNum3.scale.setTo(1,1);
        //_this.numBoxNum3.frame  = 1;
        _this.numBoxNum3.visible = false;
        
         _this.coinDisplay();
        
        //_this.plusSign = _this.add.sprite(610,200,'Level321_plusSign');
        _this.plusSign = _this.add.sprite(610,200,'Level721_plusSign');
        
         _this.generateStarsForTheScene(6);
        //  _this.no1++;
        _this.getVoice();
        _this.getQuestion();
    },
    coinDisplay:function(){
        _this.yellowcoin=this.add.sprite(475,210,'Level321_Coin1');
        _this.yellowcoin.visible=true;
        _this.Coin1 = _this.add.sprite(0,0,'Level321_Coin1');
        _this.Coin1.visible = false;
        _this.bluecoin=this.add.sprite(310,210,'Level321_Coin10');
        _this.bluecoin.visible=true;
        _this.Coin10 = _this.add.sprite(310,210,'Level321_Coin10');
        _this.Coin10.visible = false;
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
      
     
        _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
     
     
      _this.askNumber1 = _this.add.sprite(795,120,'Level321_numberSmall');
         //_this.askNumber1.frame = 1;
         _this.askNumber1.scale.setTo(1.3,1.3);
        
        
        _this.askNumber2 = _this.add.sprite(795,190,'Level321_numberSmall');
        //_this.askNumber2.frame = 1;
         _this.askNumber2.scale.setTo(1.3,1.3);
        
        _this.askNumber3 = _this.add.sprite(725,120,'Level321_numberSmall');
        // _this.askNumber3.frame = 1;
         _this.askNumber3.scale.setTo(1.3,1.3);
        
        _this.askNumber4 = _this.add.sprite(725,190,'Level321_numberSmall');
        //_this.askNumber4.frame = 1;
         _this.askNumber4.scale.setTo(1.3,1.3);
     
     
     
        
       // _this.timer = _this.time.create(false);
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;
          //  Set a TimerEvent to occur after 2 seconds
         /* _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();*/
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.AnsTimerCount++;
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
     
                  _this.yellowcoin.destroy();
                    _this.Coin1.destroy();
                _this.bluecoin.destroy();
                    _this.Coin10.destroy();
     
                    
                   // _this.numGroup.destroy();
        //////console.log(" _this.no1"+ _this.no1);
         //_this.no1 = 1;
    	switch( _this.qArrays[_this.no1])      
    	{
                
    		case 1: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 6;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                    _this.displayNumber3 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 5;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                    _this.toDisplayNoPad = 57; 
                    _this.rightAns = 68;
                    
    				break;
    		case 2: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 5;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                    _this.displayNumber3 = 6;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 7;
                    },this);
                    _this.displayNumber4 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =2;
                    },this);
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 77;
    				break;
    		case 3: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 5;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 75;
    				break;
    		case 4: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 2;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                
                    _this.displayNumber3 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 6;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 74;
    				break;
    		case 5: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 2;
                    },this);
                    _this.displayNumber2 = 5;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =6;
                    },this);
                    
                    _this.displayNumber3 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 46;
    				break;
    		case 6: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 2;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 6;
                    },this);
                    _this.displayNumber4 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =2;
                    },this);
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 62;
    				break;
            case 7: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 6;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    },this);
                    _this.displayNumber4 = 6;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =7;
                    },this);
                
                    _this.toDisplayNoPad = 9;
                    _this.rightAns = 87;
    				break;
            case 8: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 6;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 7;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                
                    _this.toDisplayNoPad = 10;
                    _this.rightAns = 67;
    				break;
            case 9: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 6;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    },this);
                    _this.displayNumber4 = 4;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =5;
                    },this);
                
                    _this.toDisplayNoPad = 5;
                    _this.rightAns = 76;
    				break;
          case 10: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 5;
                    },this);
                    _this.displayNumber2 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =2;
                    },this);
                
                    _this.displayNumber3 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                
                    _this.toDisplayNoPad = 2;
                    _this.rightAns = 55;
    				break;
        case 11: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 3;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 6;
                    _this.rightAns = 54;
    				break;
        case 12: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 2;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 3;
                    },this);
                    _this.displayNumber2 = 6;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =7;
                    },this);
                
                    _this.displayNumber3 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 5;
                    },this);
                    _this.displayNumber4 = 1;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =2;
                    },this);
                
                    _this.toDisplayNoPad = 13;
                    _this.rightAns = 58;
    				break; 
        case 13: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                    },this);
                    _this.displayNumber2 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =4;
                    },this);
                
                    _this.displayNumber3 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    },this);
                    _this.displayNumber4 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =3;
                    },this);
                
                    _this.toDisplayNoPad = 8;
                    _this.rightAns = 36;
    				break; 
        case 14: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 3;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                    },this);
                    _this.displayNumber2 = 4;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =5;
                    },this);
                
                    _this.displayNumber3 = 5;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 6;
                    },this);
                    _this.displayNumber4 = 3;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =4;
                    },this);
                
                    _this.toDisplayNoPad = 11;
                    _this.rightAns = 87;
    				break;
        case 15: _this.questionid = "7.1_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.displayNumber1 = 4;
                    _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 5;
                    },this);
                    _this.displayNumber2 = 2;
                    _this.time.events.add(500, function(){
                    _this.askNumber2.frame =3;
                    },this);
                
                    _this.displayNumber3 = 1;
                    _this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    },this);
                    _this.displayNumber4 = 5;
                    _this.time.events.add(500, function(){
                    _this.askNumber4.frame =6;
                    },this);
                
                    _this.toDisplayNoPad = 7;
                    _this.rightAns = 66;
    				break;
           
    	}
     ////console.log("no1"+_this.no1);
     _this.assign1=_this.displayNumber1-1;
     _this.assign=_this.displayNumber2-1;
     _this.assign3=_this.displayNumber3-1;
     _this.assign4=_this.displayNumber4-1;
     ////console.log("first num"+ Number(_this.assign1+1));
     ////console.log("second num"+ Number(_this.assign+1));
     _this.addYellowCoins();
    },
  inputDownFunctionForLeverAndBox :function(){
      
      _this.Coin1 = _this.add.sprite(475,210,'Level321_Coin1');
      _this.Coin1.visible = false;
      _this.Coin10 = _this.add.sprite(310,220,'Level321_Coin10');
      _this.Coin10.visible = false;
      //_this.Coin1.frame=7;
      
      _this.LeverYellow.inputEnabled = true;
      _this.LeverYellow.input.useHandCursor = true;
	    _this.LeverYellowanim = _this.LeverYellow.animations.add('Level321_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
      _this.LeverYellowanim.play(2,true);
      _this.LeverYellow.events.onInputDown.add(_this.leve1Clicked,_this);
     
       _this.LeverBlue.inputEnabled = false;
       //_this.LeverBlue.input.useHandCursor = true;
       _this.LeverBlue.events.onInputDown.add(_this.leve1Clicked,_this); 
     
       _this.LeverGreen.inputEnabled = true;
       _this.LeverGreen.input.useHandCursor = true;
       _this.LeverGreen.events.onInputDown.add(_this.leve1Clicked,_this);
	   
	 
     

  },
    
 
  numberBoxClicked:function(target){
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        if(target.name=="numBox2"){
            _this.numBox2Pressed = true;
            _this.numBox2.frame = 1;
            _this.numBox3Pressed =false;
            _this.numBox3.frame =0;
            _this.numBox1Pressed =false;
            _this.numBox1.frame =0;
        }else if(target.name=="numBox3"){
            _this.numBox3Pressed = true;
            _this.numBox3.frame = 1;
            _this.numBox2Pressed =false;
            _this.numBox2.frame =0;
            _this.numBox1Pressed =false;
            _this.numBox1.frame =0;
        }else if(target.name=="numBox1"){
            _this.numBox1Pressed = true;
            _this.numBox1.frame = 1;
            _this.numBox2Pressed =false;
            _this.numBox2.frame =0;
            _this.numBox3Pressed =false;
            _this.numBox3.frame =0;
        }
        
       /* if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            _this.addNumberPad();
        }*/
    },
   
    leve1Clicked:function(target,frame){
        
         ////console.log("Im Clicked "+target.name);
        if(target.name == "LeverYellow"){
             
            if(_this.YellowAnimInc<_this.displayNumber2){
              _this.LeverYellow.animations.add('Level321_LeverYellow',[0,1,2,3,4,0]);
              _this.LeverYellow.animations.play('Level321_LeverYellow');  
               _this.coinFall = _this.add.audio('coinFall');
               _this.coinFall.play();
                 _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level321_coin1Anim',_this.animArrayCoin1);
                 _this.Levercoin1.animations.play('Level321_coin1Anim');
                 _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
                      _this.LeverYellowNumber.frame++;
                      _this.Coin1.visible = true;
                      _this.Levercoin1.visible = false;
                      _this.Coin1.frame =  _this.YellowAnimInc;
                      _this.YellowAnimInc++;
                       _this.animArrayCoin1.pop();
                     ////console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                }, this);
            }
        }
        if(target.name == "LeverBlue"){
             
            if(_this.BlueAnimInc<_this.displayNumber4){
                
                _this.LeverBlue.animations.add('Level321_LeverBlue',[0,1,2,3,4,0]);
                _this.LeverBlue.animations.play('Level321_LeverBlue');
                _this.coinFall = _this.add.audio('coinFall');
                _this.coinFall.play();
                 _this.Levercoin10.visible = true;
                _this.Levercoin10.animations.add('Level321_coin10Anim',_this.animArrayCoin10);
                 _this.Levercoin10.animations.play('Level321_coin10Anim');
                 _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
                      _this.LeverGreenNumber.frame++;
                      _this.Coin10.visible = true;
                      _this.Coin10.frame =  _this.BlueAnimInc;
                     _this.Levercoin10.visible = false;
                      _this.BlueAnimInc++;
                       _this.animArrayCoin10.pop();
                     ////console.log("_this.BlueAnimInc "+_this.BlueAnimInc);
                      ////console.log(_this.BlueAnimInc);
                        ////console.log(Number(_this.assign4+1));
                     
                     if(_this.BlueAnimInc==(Number(_this.assign4+1)))
           
                        {
                       // console.log("im here hre hre");
                        ////console.log(_this.BlueAnimInc);
                        ////console.log(Number(_this.assign4+1)-1);
            
                        _this.addNumberPad();
                        _this.numBox3.frame = 1;
                         _this.numBox3Pressed = true;
                         _this.toCheckNumberPad = false;
                            _this.displayNopad = true;
                            _this.LeverBlue.inputEnabled = false;
                        
                    }
                }, this);
            }
           
        }
        
        if(_this.YellowAnimInc==(Number(_this.assign+1)-1))
            {
                _this.LeverBlue.inputEnabled = true;
				_this.LeverBlueanim = _this.LeverBlue.animations.add('Level321_LeverBlue',["Symbol 19 instance 10005","Symbol 19 instance 10000"]);
                _this.LeverBlueanim.play(2,true);
                _this.LeverYellow.inputEnabled = false;
				 
                
            }

        
         
         _this.Allnumbers();
   
    
   
    },
    
    Allnumbers:function(){
        ////console.log("vami")
        if((Number(_this.assign1+1))==1)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=190;
                         }
                     if((Number(_this.assign1+1))==2)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=171;
                         }
                     if((Number(_this.assign1+1))==3)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=152;
                         }
                     if((Number(_this.assign1+1))==4)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=133;
                         }
                     if((Number(_this.assign1+1))==5)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=114;
                         }
                     if((Number(_this.assign1+1))==6)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=95;
                         }
                     if((Number(_this.assign1+1))==7)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=82;
                         }
                     if((Number(_this.assign1+1))==8)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin1.x=475;
                            _this.Coin1.y=55;
                         }
        //===================
        
        
        if((Number(_this.assign3+1))==1)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                            _this.Coin10.x=310;
                            _this.Coin10.y=190;
                         }
                     if((Number(_this.assign3+1))==2)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=171;
                         }
                     if((Number(_this.assign3+1))==3)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=152;
                         }
                     if((Number(_this.assign3+1))==4)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=133;
                         }
                     if((Number(_this.assign3+1))==5)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=114;
                         }
                     if((Number(_this.assign3+1))==6)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=95;
                         }
                     if((Number(_this.assign3+1))==7)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=82;
                         }
                     if((Number(_this.assign3+1))==8)
                         {
                             
                            // _this.Coin1.addChild(_this.yellowcoin);
                             _this.Coin10.x=310;
                            _this.Coin10.y=55;
                         }
                    
    },
    
    addYellowCoins:function(){
        
                _this.yellowcoin.x=475;
                _this.yellowcoin.y=210;
        
                _this.bluecoin.x=310;
                _this.bluecoin.y=210;
        
        _this.numDisplay();
          
        //////console.log(randarr[randarr.length-1].x);
        //////console.log(randarr[randarr.length-1].y-17);
        ////console.log("lengthx="+_this.yellowcoin.x);
        ////console.log("lengthy="+_this.yellowcoin.y);
    },
    
    numDisplay:function(){
        
        ////console.log("display coins");
        ////console.log("first num"+ Number(_this.assign1+1));
     ////console.log("second num"+ Number(_this.assign+1));
         ////console.log("third num"+ Number(_this.assign3+1));
     ////console.log("fourth num"+ Number(_this.assign4+1));
       
        _this.coinDisplay();
        
        
        if((Number(_this.assign1+1))==1)
            {
            _this.yellowcoin.frame=0;
            }
        else if((Number(_this.assign1+1))==2)
            {
            _this.yellowcoin.frame=1;
            }
        else if((Number(_this.assign1+1))==3)
            {
            _this.yellowcoin.frame=2;
            }
        else if((Number(_this.assign1+1))==4)
            {
            _this.yellowcoin.frame=3;
            }
        else if((Number(_this.assign1+1))==5)
            {
            _this.yellowcoin.frame=4;
            }
        else if((Number(_this.assign1+1))==6)
            {
            _this.yellowcoin.frame=5;
            }
        else if((Number(_this.assign1+1))==7)
            {
            _this.yellowcoin.frame=6;
            }
        else if((Number(_this.assign1+1))==8)
            {
            _this.yellowcoin.frame=7;
            }
       //===========
       
        
        
        if((Number(_this.assign3+1))==1)
            {
            _this.bluecoin.frame=0;
            }
        else if((Number(_this.assign3+1))==2)
            {
            _this.bluecoin.frame=1;
            }
        else if((Number(_this.assign3+1))==3)
            {
            _this.bluecoin.frame=2;
            }
        else if((Number(_this.assign3+1))==4)
            {
            _this.bluecoin.frame=3;
            }
        else if((Number(_this.assign3+1))==5)
            {
            _this.bluecoin.frame=4;
            }
        else if((Number(_this.assign3+1))==6)
            {
            _this.bluecoin.frame=5;
            }
        else if((Number(_this.assign3+1))==7)
            {
            _this.bluecoin.frame=6;
            }
        else if((Number(_this.assign3+1))==8)
            {
            _this.bluecoin.frame=7;
            }
        
        
        
        
    },
    addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,505,'Level321_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'Level321_NumberKey');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1,'');
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
        _this.eraser = _this.numGroup.create(_this.x+30,508,'Level321_erase','Symbol 14 copy 5 instance 10000');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.20,1.20);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+95,508,'Level321_rightmark','Symbol 14 copy instance 10000');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.20,1.20);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
			 _this.eraserclicked=1;
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             
             _this.eraser.frame=1;
             if(_this.numBox1Pressed){
					_this.numBox1.frame = 1;
                    _this.numBox1Pressed = true;
                    _this.numBoxNum1.visible = false;
                }
                else if(_this.numBox2Pressed){
					_this.numBox2.frame = 1;
                    _this.numBox2Pressed = true;
                    _this.numBoxNum2.visible = false;
                }
                else if(_this.numBox3Pressed)
                {
					_this.numBox3.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.numBoxNum3.visible = false;
                }
             
             if(_this.numBoxNum1.visible ==false || _this.numBoxNum2.visible==false || _this.numBoxNum3.visible==false  ){
                 this.time.events.add(500,function(){
                      _this.eraser.frame=0;                
                 },this);
                 
             }

                
             
                     
                
                    
                    
                    _this.toCheckNumberPad = false;
             
             
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){
             _this.rightbtn.frame=1;
             _this.noofAttempts++;
			 
             
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             
             _this.time.events.add(1000, function(){
                 _this.rightbtn.frame=0;
             },_this);
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
             ////console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.rightAns)  
                {
                    ////console.log("correct");
                    _this.eraserclicked=0;
                    /*this.AnsTimerCount=_this.minutes+':' + _this.seconds;
                        this.currentTime = window.timeSaveFunc();
                        this.saveAsment = 
                   { 
                    id_game_play: this.savedVar,
                    id_question: this.questionid,  
                    pass: "yes",
                    time2answer: this.AnsTimerCount,
                    attempts: this.noofAttempts,
                    date_time_submission: this.currentTime, 
                    access_token: window.acctkn 
                   }*/
                    
                    _this.questionid = 1;
                    telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                    
                    counts=1;
                    target.events.onInputDown.removeAll();
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.count1++;
                    
                   // _this.yellowcoin.frame=_this.yellowcoin.frame+10;
                    _this.glowAnim();
                    //_this.Coin1.frame =_this.Coin1.frame+10 ;
                   // _this.Coin10.frame =_this.Coin10.frame+10 ;
                   
                    
                    _this.numBoxNum1.visible = false;
                _this.numBoxNum2.visible = false;
                _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 0;
                    _this.numBox3Pressed = true;
                    _this.numBox1Pressed = false;
                    _this.numBox2Pressed = false;
                    _this.toCheckNumberPad = false;
                    
                    
                    
                    
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                }
            else
                { 
                    ////console.log("wrong");
                    	_this.eraserclicked=0;
                        _this.animArrayCoin1=new Array();
                    _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                    _this.animArrayCoin10=new Array();
                    _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                    _this.total=1;
                    _this.total1=1;
					_this.numBoxNum1.visible = false;
                    _this.numBoxNum2.visible = false;
                    _this.numBoxNum3.visible = false;
                    _this.numBox1.frame = 0;
                    _this.numBox3.frame = 0;
                    _this.numBox2.frame = 0;
                     
                    
                    
                    _this.yellowcoin.destroy();
                    _this.bluecoin.destroy();
                    _this.Coin1.destroy();
                    _this.Coin10.destroy();
                    _this.numGroup.destroy();
                    _this.numDisplay();
                    _this.toCheckNumberPad = false;
         
                  _this.shake.shake(10, _this.shakeGroup);
                    _this.selectedAns = " ";
                    _this.waudio = _this.add.audio('waudio');
                    _this.waudio.play();
                    
                    _this.YellowAnimInc= 0;
                    _this.BlueAnimInc= 0;
                    _this.LeverYellowNumber.frame= 1;
                    _this.LeverBlueNumber.frame= 1;
                    _this.LeverGreenNumber.frame= 1;
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = false;
                    ////console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                    _this.inputDownFunctionForLeverAndBox();
                     _this.numBoxNum1.visible = false;
                     _this.numBoxNum2.visible = false;
                     _this.numBoxNum3.visible = false;
                }
  
        },this);
       
        if(_this.displayNopad){
            ////console.log("llllllllllllllllllllllll");
            _this.numGroup.y = 50;
             _this.displayNopad = false;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        }
        
    },
    
    glowAnim:function(){
        //_this.Coin1.visible = false;
       //_this.yellowcoin.destroy();
        //_this.Coin1.destroy();
       
        ////console.log("first num"+ Number(_this.assign1+1));
     ////console.log("second num"+ Number(_this.assign+1));
        if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=11;
                            }
                    if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                ////console.log("glow");
                                _this.yellowcoin.frame=17;
                            }
                    if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=14;
                            }
                    if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=13;
                            }
                    if(((Number(_this.assign1+1))==1)&&((Number(_this.assign+1))==5))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
                    if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==6)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==5)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
                    if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=14;
                            }
                    if(((Number(_this.assign1+1))==2)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=13;
                            }
                    if(((Number(_this.assign1+1))==2)&&((Number(_this.assign+1))==6))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=17;
                            }
                    if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
                    if(((Number(_this.assign1+1))==3)&&((Number(_this.assign+1))==4))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=16;
                            }
                    if(((Number(_this.assign1+1))==4)&&((Number(_this.assign+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.yellowcoin.frame=15;
                            }
        //=================
                    
        if(((Number(_this.assign3+1))==4)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==6)&&((Number(_this.assign4+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                ////console.log("glow");
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==4)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==5)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==5)&&((Number(_this.assign4+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==2)&&((Number(_this.assign4+1))==6))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=17;
                            }
                    if(((Number(_this.assign3+1))==3)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==3)&&((Number(_this.assign4+1))==4))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=16;
                            }
                    if(((Number(_this.assign3+1))==2)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=14;
                            }
                    if(((Number(_this.assign3+1))==3)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=14;
                            }
                    if(((Number(_this.assign3+1))==4)&&((Number(_this.assign4+1))==1))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=14;
                            }
                    if(((Number(_this.assign3+1))==1)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=12;
                            }
                    if(((Number(_this.assign3+1))==5)&&((Number(_this.assign4+1))==3))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=17;
                            }
                    if(((Number(_this.assign3+1))==1)&&((Number(_this.assign4+1))==5))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=15;
                            }
                    if(((Number(_this.assign3+1))==2)&&((Number(_this.assign4+1))==2))
                            {
                              // _this.yellowcoin.destroy();
                               // _this.Coin1.destroy();
                                _this.bluecoin.frame=13;
                            }
    },
    
     numClicked:function(target){
         
           ////console.log(target.name);
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
       
        
        if(_this.numBox2Pressed){
             
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
             
             if(_this.selectedAns2>=0){
                 _this.numBox2.frame = 1;
                 _this.numBox1.frame = 0;
                 _this.numBox3.frame = 0;
                 _this.numBox1Pressed=false;
                 _this.numBox2Pressed=true;
                 _this.numBox3Pressed=false;
             }
            
         }
        else if(_this.numBox3Pressed)
             {
                 ////console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name+1;
                 
				 if(_this.selectedAns3>=0 && _this.eraserclicked==0){
                     _this.numBox2.frame = 1;
                     _this.numBox1.frame = 0;
                     _this.numBox3.frame = 0;
                     _this.numBox1Pressed = false;
                     _this.numBox2Pressed = true;
                     _this.numBox3Pressed = false;
                 }else{
                     if(_this.eraserclicked==0){
	                     _this.numBox2.frame = 0;
	                     _this.numBox1.frame = 0;
	                     _this.numBox3.frame = 1;
	                     _this.numBox1Pressed = false;
	                     _this.numBox2Pressed = false;
	                     _this.numBox3Pressed = true;
				    }
                 }
             }
         ////console.log("1 "+_this.selectedAns1);
         ////console.log("2 "+_this.selectedAns2);
         ////console.log("3 "+_this.selectedAns3);
        
         
         /*if(_this.numBox2Pressed == true){
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
            _this.numBox1Pressed = true;
             _this.numBox2Pressed == false;
         }*/
         
         ////console.log("1 "+this.numBox1Pressed);
         ////console.log("2 "+this.numBox2Pressed);
         ////console.log("3 "+this.numBox3Pressed);
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
    
    removeEverthing:function() 
    {
         _this.no1++;
        
        _this.askNumber1.destroy();
        _this.askNumber2.destroy();
        _this.askNumber3.destroy();
        _this.askNumber4.destroy();

        _this.noofAttempts=0;
      _this.AnsTimerCount=0;
        
        ////console.log("index="+_this.qArrays);
        //qArrays[0]=randomno;
        _this.qArrays.splice(0,1);
        ////console.log("index="+_this.qArrays);
        
        //////console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
            // _this.no1++;
              _this.wrong = true;
            //////console.log("here its");
             _this.timer1.stop();
                _this.count =0;
                 _this.sceneCount++;
            _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.rightAns = 503;
             _this.numBox3Pressed = false;
             _this.Levercoin1.visible = false;
             _this.Levercoin10.visible = false;
            _this.LeverGreenNumber.frame = 1;
            _this.LeverYellowNumber.frame = 1;
            _this.LeverBlueNumber.frame = 1;
            _this.BlueAnimInc = 0;
            _this.YellowAnimInc = 0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
           
            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
            _this.getQuestion();
            
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity7_1_2Score');
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'Level321_starAnim');
            
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
    
	
    update:function(){

    },
    
    getVoice:function(){
        //////console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
            {
                    
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", "questionSounds/3.2.1/English/Game 7.1.2.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", "questionSounds/3.2.1/Hindi/Game 7.1.2.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", "questionSounds/3.2.1/Kannada/Game 7.1.2.mp3");
                        }
						else
                        {
                            _this.src.setAttribute("src", "questionSounds/3.2.1/Odiya/7.1.2.mp3");
							_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            }
        _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
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
	
        stopVoice:function(){
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
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
            
        },
    
    shutdown:function(){
         _this.stopVoice();
        /*
         delete _this.YellowAnimInc;
        delete _this.GreenAnimInc;
        delete _this.counts;
        delete _this.BlueAnimInc;
        delete _this.noofAttempts;
		delete _this.AnsTimerCount;   
        delete _this.sceneCount;
        delete _this.seconds;
        delete _this.minutes;
        delete _this.total;
        delete _this.counterForTimer;
        delete _this.selectedAns;
        delete _this.selectedAns1;
        delete _this.selectedAns2;
        delete _this.selectedAns3;
        delete _this.rightAns;
        delete randar;
        delete yellowCoinArray;
        delete _this.toDisplayNoPad;
        delete _this.displayNopad;
        delete _this.toCheckNumberPad;
         delete _this.no1;
         delete _this.qArrays;
        delete _this.displayNumber1;
        delete _this.displayNumber2;
        delete _this.animArraylength;
        delete _this.count;
        delete _this.count1;
        delete _this.shake;
        delete _this.bg1;
        delete _this.navBar;
        delete _this.timebg;
        delete _this.topicOutline;
        delete _this.practice;
        delete _this.timeDisplay;
        delete _this.backbtn;
        delete _this.speakerbtn;
        delete _this.clickSound;
        delete _this.coinPannel;
        delete _this.Pannel;
        delete _this.LeverGreen;
        delete _this.LeverBlue;
        delete _this.LeverYellow;
        delete _this.Levercoin1;
        delete _this.Level321_OneToHundred1;
        delete _this.Level321_OneToHundred10;
        delete _this.Level321_OneToHundred100;
        delete _this.LeverBlueNumber;
        delete _this.LeverGreenNumber;
        delete _this.LeverYellowNumber;
        delete _this.numBox1;
        delete _this.numBox2;
        delete _this.numBox3;
        delete _this.askNumber1;
        delete _this.askNumber2;
        delete _this.askNumber3;
        delete _this.askNumber4;
        delete _this.numBoxNum1;
        delete _this.numBoxNum2;
        delete _this.numBoxNum3;
        delete _this.plusSign;
        delete _this.animArrayCoin1;
        delete _this.animArrayCoin10;
*/
       
		
        
    }


    
};