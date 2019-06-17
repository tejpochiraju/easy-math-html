Game.grade1_1Blevel1=function(){};


Game.grade1_1Blevel1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "1.1B";
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("pinwheel1_1B",gradeSelected);
        

    },


	create:function(game){
        _this = this;
		
		 _this.amplify = null;
		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
        _this.sceneCount=0;
		
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.rno11 = 0;
        _this.vno11 = 0;
        _this.no2 = 0;
        _this.count=0;
         _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.opt1X=0;
        _this.opt1Y=0;
        _this.opt2X=0;
        _this.opt2Y=0;
        _this.opt3X=0;
        _this.opt3Y=0;
        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6];
        _this.qArray = _this.shuffle(_this.qArray);
        
        _this.qArray1 = new Array();
        _this.qArray1 = [4,5];
       _this.qArray1 = _this.shuffle(_this.qArray1);
        
        _this.qArray2 = new Array();
        _this.qArray2 = [6];
        _this.qArray2 = _this.shuffle(_this.qArray2);
       

		_this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg2');
		//_this.bg1.anchor.setTo(0.5);
		//_this.bg1.scale.setTo(1.05,1.12);

         _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        
       _this.backbtn = this.add.button(10,7,'grade11_backbtn',function(){console.log("here");},_this,0,1,2);
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

        _this.speakerbtn = this.add.button(590,9,'Level42A_CommonSpeakerBtn',function(){},this,1,0,2);
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(300,9,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1.2,1);


            this.timeDisplay = this.add.text(330,25,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';


           /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
            _this.dottedBox.name="dottedBox";
            _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
            _this.numTxt1.anchor.setTo(0.5);
            _this.numTxt1.scale.setTo(1.2,1.2);
            _this.numTxt1.align = 'center';
            _this.numTxt1.font = 'Alte Haas Grotesk';
            _this.numTxt1.fontSize = 10;
            _this.numTxt1.fill = '#ffffff';
            _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.dottedBox.addChild(_this.numTxt1);
        
            _this.numTxt2 = this.add.text(220,24, 'Fractions');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
         _this.generateStarsForTheScene(6);
				
				_this.getQuestion();
				_this.getVoice();

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
    
    

    getQuestion:function(target1)
    {

        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;


        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();

        _this.timer = null;
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, _this);

        //  Start the _this.timer running - _this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       // console.log("_this.no11 "+_this.no11);
        /* if(_this.no11<=2)
            {
				console.log("1");
                questno=_this.qArray[_this.no11];
            }
        else if(_this.no11<=4)
                {
					console.log("2");
					var temp = _this.no11-2;
                    questno=_this.qArray1[temp];
                }
               
         else if(_this.no11<=4)
                {
					console.log("3");
					var temp = _this.no11-4;
                    questno=_this.qArray2[temp];
                }*/
        //console.log("questno"+questno);

         _this.obj1Array = [];
         _this.obj2Array = [];
         _this.obj3Array = [];
         _this.obj4Array = [];

    	switch(_this.qArray[_this.no11])
       
    	{
    		case 1: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain11',270,260,"Level11B_MainStar"];
					_this.obj2Array = ['Level11B_Ans1',570,210,"Level11B_StarCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans2',640,370,"Level11B_StarWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans3',800,210,"Level11B_StarWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 2: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain12',270,280,"Level11B_MainCircle"];
					_this.obj2Array = ['Level11B_Ans22',600,200,"Level11B_CircleCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans21',660,370,"Level11B_CircleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans32',760,200,"Level11B_CircleWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);                                                                                                                                                                                                                                                                                                                                                                                                                                              
    				break;
    		case 3: 
					_this.questionid = 1;
                    _this.obj1Array = ['Level11B_flagmain51',270,290,"Level11B_MainBlueSquare"];
                    _this.obj2Array = ['Level11B_Ans51',610,230,"Level11B_BlueSquareCorrectMissingPiece"];
                    _this.obj3Array = ['Level11B_Ans52',730,400,"Level11B_BlueSquareWrongMissingPiece"];
                    _this.obj4Array = ['Level11B_Ans53',800,230,"Level11B_BlueSquareWrongMissingPiece"];
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
                    break;
    		case 4: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain41',270,260,"Level11B_MainTriangle"];
					_this.obj2Array = ['Level11B_Ans43',680,180,"Level11B_TriangleCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans41',830,315,"Level11B_TriangleWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans42',590,400,"Level11B_TriangleWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 5: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain31',270,270,"Level11B_MainOctagon"];
					_this.obj2Array = ['Level11B_Ans23',620,370,"Level11B_OctagonCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans31',740,200,"Level11B_OctagonWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans33',830,370,"Level11B_OctagonWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
    		case 6: 
					_this.questionid = 1;
					_this.obj1Array = ['Level11B_flagmain61',270,280,"Level11B_MainPirpleSquare"];
					_this.obj2Array = ['Level11B_Ans63',700,400,"Level11B_PirpleSquareCorrectMissingPiece"];
					_this.obj3Array = ['Level11B_Ans61',600,250,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.obj4Array = ['Level11B_Ans62',750,250,"Level11B_PirpleSquareWrongMissingPiece"];
					_this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array);
    				break;
             
    	}
        
    },
     gotoQuestion:function(obj1Array,obj2Array,obj3Array,obj4Array){
		 // _this.getVoice();
		 _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
		_this.flagGroup1 = _this.add.group();
		
	    _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        _this.b1.anchor.setTo(0.5);
        _this.b1.name = obj1Array[3];
        _this.b1.inputEnabled = true;
    	_this.b1.input.useHandCursor = true;
       
        _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
        _this.b2.anchor.setTo(0.5);
        _this.b2.name =  obj2Array[3];
        _this.b2.inputEnabled = true;
    	_this.b2.input.useHandCursor = true;
          
         
         _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
        _this.b3.anchor.setTo(0.5);
        _this.b3.name = obj3Array[3];
        _this.b3.inputEnabled = true;
    	_this.b3.input.useHandCursor = true;  
		
	    _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
        _this.b4.anchor.setTo(0.5);
        _this.b4.name = obj4Array[3];
        _this.b4.inputEnabled = true;
    	_this.b4.input.useHandCursor = true;
		
		_this.addListeners();
		_this.opt1X = _this.b2.x;
    	_this.opt1Y = _this.b2.y;

    	_this.opt2X = _this.b3.x;
    	_this.opt2Y = _this.b3.y;

    	_this.opt3X = _this.b4.x;
    	_this.opt3Y = _this.b4.y;
		
		_this.flagGroup1.add(_this.b1);
    	_this.flagGroup1.add(_this.b2);
    	_this.flagGroup1.add(_this.b3);
    	_this.flagGroup1.add(_this.b4);
		
		_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
		 tween.onComplete.add(function(){

       _this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
		_this.AnsTimerCount++;
			
		}, _this); 
	  _this.timer.start();
		}, _this); 
	 
	 },
    
    
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-15, 12, 'starAnim1');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=15;
                    _this.starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },

    addQuestion:function(no2)
    {
       /* //console.log(_this.no2);
        
        var lineAnim2 = _this.add.sprite(_this.world.centerX,-20,'Level11B_headingLine');
        lineAnim2.anchor.setTo(0.5);
        lineAnim2.scale.setTo(1.041,1);
        text = _this.add.text(0, 5,'Level11B_  Colour 1/4th part of the whole  ');
        text.anchor.set(0.5);
        text.align = 'center';

        text.font = 'Comic Sans MS';
        text.fontSize = 25;
        //text.fontWeight = 'bold';
        text.fill = '#FFFFFF';

        text.setShadow(0, 0,'Level11B_rgba(0, 0, 0, 0)', 0);
        lineAnim2.addChild(text);
        // text.visible=false;
        // questionBackground.visible=false;

        switch(_this.qArray[_this.no2])  
        {
            case 1:text.setText(selctedLang.lastSceneQuestion1);break;
            case 2:text.setText(selctedLang.lastSceneQuestion2);break;
            case 3:text.setText(selctedLang.lastSceneQuestion3);break;
            case 4:text.setText(selctedLang.lastSceneQuestion4);break;
            case 5:text.setText(selctedLang.lastSceneQuestion5);break;
            case 6:text.setText(selctedLang.lastSceneQuestion6);break;
//            case 7:text.setText(selctedLang.lastSceneQuestion7);break;
//                            case 8:text.setText(selctedLang.lastSceneQuestion8);break;
//                            case 9:text.setText(selctedLang.lastSceneQuestion9);break;
//                            case 10:text.setText(selctedLang.lastSceneQuestion10);break;
//                            case 11:text.setText(selctedLang.lastSceneQuestion11);break;
//                            case 12:text.setText(selctedLang.lastSceneQuestion12);break;
//                            case 13:text.setText(selctedLang.lastSceneQuestion13);break;
//                            case 14:text.setText(selctedLang.lastSceneQuestion14);break;
                
        }
        var tween = _this.add.tween(lineAnim2);
        tween.to({ y: 545 }, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
            //_this.addEventListeners();*/
           
            _this.time.events.add(900, function(){
     //            lineAnim2.destroy();
                var tween = _this.add.tween(_this.flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(_this.changeQuestion, _this);


            }, _this);
            
        //}, _this);
    },
    
    update:function(){

    },

	/*
    gotoFirstQuestion:function(){
    	_this.no11++;
    	_this.mainFlag = _this.add.sprite(270,230,'Level11B_flagmain11');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(570,280,'Level11B_Ans1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.name = 'right_this.Answer';
    	_this.opt2 = _this.add.sprite(730,280,'Level11B_Ans2');
    	_this.opt2.anchor.setTo(0.5);
    	
    	_this.opt3 = _this.add.sprite(890,280,'Level11B_Ans3');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no11==1)
        {
            _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
        

        //         var tween = _this.add.tween(windmillGroup);
        // tween.to({ x: 0}, 0,'Linear', true, 0);
        tween.onComplete.add(function(){
       // _this.addQuestion(_this.count);

     }, _this);               
    },

    gotoSecondQuestion:function(){
        
    	_this.no11++;
    	_this.mainFlag = _this.add.sprite(270,280,'Level11B_flagmain12');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(585,280,'Level11B_Ans21');
    	_this.opt1.anchor.setTo(0.5);
    	_this.opt2 = _this.add.sprite(755,280,'Level11B_Ans22');
    	_this.opt2.anchor.setTo(0.5);
    _this.opt2.name = 'right_this.Answer';
    	_this.opt3 = _this.add.sprite(890,280,'Level11B_Ans32');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no11==1)
        {
            _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
    	    _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
    	    _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
    	    _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },

    gotoThirdQuestion:function(){
       
    		_this.no11++;
    	_this.mainFlag = _this.add.sprite(270,290,'Level11B_flagmain51');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(570,280,'Level11B_Ans51');
    	_this.opt1.anchor.setTo(0.5);
    	  _this.opt1.name = 'right_this.Answer';
    
    	_this.opt2 = _this.add.sprite(730,280,'Level11B_Ans52');
    	_this.opt2.anchor.setTo(0.5);
          
    	
    	_this.opt3 = _this.add.sprite(880,280,'Level11B_Ans53');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
            if(_this.no11==1)
        {
           _this.getVoice(_this.no11);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },

    gotoFourthQuestion:function(){
        
    	_this.rno11++;
    	_this.mainFlag = _this.add.sprite(270,260,'Level11B_flagmain41');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(545,280,'Level11B_Ans41');
    	_this.opt1.anchor.setTo(0.5);
    
    	_this.opt2 = _this.add.sprite(665,280,'Level11B_Ans42');
    	_this.opt2.anchor.setTo(0.5);
    	
    	_this.opt3 = _this.add.sprite(865,280,'Level11B_Ans43');
    	_this.opt3.anchor.setTo(0.5);
            _this.opt3.name = 'right_this.Answer';

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no1==1)
        {
           _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
           },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },


    gotoFifthQuestion:function(){
      
    _this.rno11++;
    	_this.mainFlag = _this.add.sprite(270,260,'Level11B_flagmain31');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(585,280,'Level11B_Ans31');
    	_this.opt1.anchor.setTo(0.5);
    	_this.opt2 = _this.add.sprite(740,280,'Level11B_Ans23');
    	_this.opt2.anchor.setTo(0.5);
            _this.opt2.name = 'right_this.Answer';
    	_this.opt3 = _this.add.sprite(890,280,'Level11B_Ans33');
    	_this.opt3.anchor.setTo(0.5);

    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no1==1)
        {
           _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    },


    gotoSixthQuestion:function(){
       
    	_this.vno11++;
    	_this.mainFlag = _this.add.sprite(270,270,'Level11B_flagmain61');
    	_this.mainFlag.anchor.setTo(0.5);
    	_this.opt1 = _this.add.sprite(570,280,'Level11B_Ans61');
    	_this.opt1.anchor.setTo(0.5);
    	
    
    	_this.opt2 = _this.add.sprite(720,280,'Level11B_Ans62');
    	_this.opt2.anchor.setTo(0.5);
    	
    	_this.opt3 = _this.add.sprite(880,280,'Level11B_Ans63');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.name = 'right_this.Answer';

    	
    	_this.opt1X = _this.opt1.x;
    	_this.opt1Y = _this.opt1.y;

    	
    	_this.opt2X = _this.opt2.x;
    	_this.opt2Y = _this.opt2.y;

    	
    	_this.opt3X = _this.opt3.x;
    	_this.opt3Y = _this.opt3.y;

        
    	

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.mainFlag);
    	_this.flagGroup1.add(_this.opt1);
    	_this.flagGroup1.add(_this.opt2);
    	_this.flagGroup1.add(_this.opt3);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        if(_this.no1==1)
        {
            _this.getVoice(_this.no1);
            _this.time.events.add(4000,function(){
                _this.opt1.inputEnabled = true;
                _this.opt1.input.useHandCursor = true;
                _this.opt2.inputEnabled = true;
                _this.opt2.input.useHandCursor = true;
                _this.opt3.inputEnabled = true;
                _this.opt3.input.useHandCursor = true;
                _this.addListeners();
            },_this);
        }
        else
        {
            _this.opt1.inputEnabled = true;
            _this.opt1.input.useHandCursor = true;
            _this.opt2.inputEnabled = true;
            _this.opt2.input.useHandCursor = true;
            _this.opt3.inputEnabled = true;
            _this.opt3.input.useHandCursor = true;
            _this.addListeners();
        }
    	//tween.onComplete.add(_this.addListeners, _this);
    },
     */
 
    addListeners:function()
    {
    	_this.b2.input.enableDrag(true);
    	_this.b3.input.enableDrag(true);
    	_this.b4.input.enableDrag(true);


    	_this.b2.events.onDragStart.add(_this.onDragStart, _this);
    	_this.b2.events.onDragStop.add(_this.onDragStop, _this);

    	_this.b3.events.onDragStart.add(_this.onDragStart, _this);
    	_this.b3.events.onDragStop.add(_this.onDragStop, _this);

    	_this.b4.events.onDragStart.add(_this.onDragStart, _this);
    	_this.b4.events.onDragStop.add(_this.onDragStop, _this);
    },

	changeQuestion:function()
	{
		_this.flagGroup1.destroy();
		_this.no11++;
		if(_this.no11<6)
		{
			
            _this.count++;
			_this.getQuestion();
		}
		else
		{
			//console.log("gameEnd");
				//_this.input.enabled = false;
				// text = _this.add.text(_this.world.centerX, 450,'Level11B_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level11B_rgba(0, 0, 0, 0.5)', 0);
            

    
       /*     // _this.no1++;
    	_this.b1 = _this.add.sprite(300,300,'Level11B_flagmain31');
    	_this.b1.anchor.setTo(0.5);
    	_this.b2 = _this.add.sprite(620,300,'Level11B_Ans31');
    	_this.b2.anchor.setTo(0.5);
    	_this.b3 = _this.add.sprite(770,300,'Level11B_Ans23');
    	_this.b3.anchor.setTo(0.5);
            _this.b3.name = 'right_this.Answer';
    	_this.b4 = _this.add.sprite(920,300,'Level11B_Ans33');
    	_this.b4.anchor.setTo(0.5);

    	_this.opt1X = _this.b2.x;
    	_this.opt1Y = _this.b2.y;

    	_this.opt2X = _this.b3.x;
    	_this.opt2Y = _this.b3.y;

    	_this.opt3X = _this.b4.x;
    	_this.opt3Y = _this.b4.y;
		
    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.b1);
    	_this.flagGroup1.add(_this.b2);
    	_this.flagGroup1.add(_this.b3);
    	_this.flagGroup1.add(_this.b4);

    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.addListeners, _this);
        if(_this.no1==1)
        {
           // _this.getVoice(_this.no1);
           // _this.time.events.add(4000,function(){
                _this.b2.inputEnabled = true;
                _this.b2.input.useHandCursor = true;
                _this.b3.inputEnabled = true;
                _this.b3.input.useHandCursor = true;
                _this.b4.inputEnabled = true;
                _this.b4.input.useHandCursor = true;
                _this.addListeners();
           // },_this);
        }
        else
        {
            _this.b2.inputEnabled = true;
            _this.b2.input.useHandCursor = true;
            _this.b3.inputEnabled = true;
            _this.b3.input.useHandCursor = true;
            _this.b4.inputEnabled = true;
            _this.b4.input.useHandCursor = true;
            _this.addListeners();
        }*/
               _this.state.start('grade1_1BScore');
//   baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            _this.speakerbtn.destroy();
//            _this.starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            _this.speakerbtn.visible=false;
//            _this.starsGroup1.visible=false;
		}
	},
    updateTimer:function() {
     _this.counterForTimer++;
     //console.log("lololil"+counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 this.minutes =  this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 this.minutes =  this.minutes+1;
                   
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
             this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
     this.timeDisplay.setText(_this.minutes+':' + this.seconds);
 
//timer.setText(minutes + ':'+ seconds );
},

    removeCelebration1:function()
	{
		//console.log("removeCeleb");
        if(_this.timer1)
            {
            _this.timer1.stop();
            }
		_this.celebration1 = false;
		//_this.celebAnim1.destroy();
        _this.addQuestion(_this.count);
		//var tween = _this.add.tween(_this.flagGroup1);
    	//tween.to({ x: -1000 }, 0,'Linear', true, 0);
    	//tween.onComplete.add(_this.changeQuestion, _this);
		
	},

	correctAns1:function(target)
	{
		_this.timer.stop();
		_this.timer = null;
		
		_this.noofAttempts++;
		var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: _this.savedVar,
					id_question: _this.questionid,  
					pass: "Yes",
					time2answer: _this.AnsTimerCount,
					attempts: _this.noofAttempts,
					date_time_submission: currentTime, 
					access_token: window.acctkn 
				}
			
		//absdsjsapi.saveAssessment(saveAsment);

        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        _this.AnsTimerCount=0;
		
		//console.log("correct"+target.name);
		//console.log("correct");
        _this.speakerbtn.inputEnabled=false;
		//_this.input.enabled = false;
        
        _this.b2.inputEnabled=false;
        _this.b3.inputEnabled=false;
        _this.b4.inputEnabled=false;
       
        _this.anim5 = target.animations.add('playAnim');
        _this.anim5.play();

		_this.celebration1 = true;
		//_this.celebAnim1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'Level11B_celeb');
     	_this.cmusic1 = _this.add.audio('celebr');
		_this.cmusic1.play();

       // score+=10;
//        scoretext.setText(selctedLang.score+' : '+score);

		//_this.celebAnim1.smoothed=true;
        //_this.clickSound.play();
		_this.time.events.add(500, _this.removeCelebration1, _this);
           
        //console.log(_this.count);
        var starAnim = _this.starsGroup.getChildAt(_this.count);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();      
         target.events.onInputDown.removeAll();
	},


    wrongAns1:function(target)
	{
		_this.noofAttempts++;
        //score-=5;
//        scoretext.setText(selctedLang.score+' : '+score);
		//console.log("wrong");
		_this.shake.shake(10, target);
		_this.wmusic1 = _this.add.audio('waudio');
		_this.wmusic1.play();
        //_this.clickSound.play();
         target.events.onInputDown.removeAll();
	},


    onDragStart:function(target){
		
		var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drag", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
			
    	//console.log("startdrag");
    	targetCoordinatesX = target.x;
    	targetCoordinatesY = target.y;
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
    },

    onDragStop:function(target){

            console.log(target.name);
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "drop", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
			
    	if (_this.checkOverlap(_this.b1, target))
    	{
           // if(target.name=='rightAnswer')

    		if(
                target.name=='Level11B_StarCorrectMissingPiece'
                ||target.name=='Level11B_CircleCorrectMissingPiece'
                ||target.name=='Level11B_OctagonCorrectMissingPiece'
                ||target.name=='Level11B_TriangleCorrectMissingPiece'
                ||target.name=='Level11B_BlueSquareCorrectMissingPiece'
                ||target.name=='Level11B_PirpleSquareCorrectMissingPiece'
            )
    		{
                _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
    			//console.log("correct"+_this.b1);
    			target.destroy();
    			_this.b1.frame = 1;
    			_this.correctAns1(_this.b1);
    		}
    		else
    		{
    			//console.log("wrong");
    			if(target == _this.b2)
    			{
    				target.x = _this.opt1X;
    				target.y = _this.opt1Y;
    			}
    			else if(target == _this.b3)
    			{
    				target.x = _this.opt2X;
    				target.y = _this.opt2Y;
    			}
    			else if(target == _this.b4)
    			{
    				target.x = _this.opt3X;
    				target.y = _this.opt3Y;
    			}

    			_this.wrongAns1(target);
    		}
    	}
    	else
    	{
    		if(target == _this.b2)
    			{
    				target.x = _this.opt1X;
    				target.y = _this.opt1Y;
    			}
    			else if(target == _this.b3)
    			{
    				target.x = _this.opt2X;
    				target.y = _this.opt2Y;
    			}
    			else if(target == _this.b4)
    			{
    				target.x = _this.opt3X;
    				target.y = _this.opt3Y;
    			}
    	}
    	
    },

	checkOverlap:function(spriteA, spriteB) 
	{

	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    

    getVoice:function()
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", "questionSounds/1.1B/English/1.1A2.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", "questionSounds/1.1B/Hindi/1.1A2.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", "questionSounds/1.1B/Kannada/1.1A2.mp3");
        }
		else
        {
            _this.src.setAttribute("src", "questionSounds/1.1B/Odiya/1.1A2.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
    },
    
    shutdown:function()
    {
        _this.stopVoice();
    }

};