Game.grade1_1Alevel1=function(){

};



Game.grade1_1Alevel1.prototype={
	
	init:function(game)
	{
		_this = this;
		telInitializer.gameIdInit("pinwheel1_1A",gradeSelected);
	},
	
	create:function(game){
		
		_this.amplify = null;

		_this.questionid = null;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
		_this.firstTime = true;
		_this.sceneCount = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
		
		//_this.playQuestionSound = null;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.rno11 = 0;
        _this.vno11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		_this.timer1 = null;
		_this.starsGroup = null;
		_this.flagGroup = null;
		
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8];
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.qArrays1 = new Array();
        _this.qArrays1 = [9,10,11,12];
        _this.qArrays1 = _this.shuffle(_this.qArrays1);
        
        _this.qArrays2 = new Array();
        _this.qArrays2 = [13,14,15];
        _this.qArrays2 = _this.shuffle(_this.qArrays2);

      
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');


        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
		
		_this.backbtn = this.add.button(10,7,'grade11_backbtn',function(){console.log("here");},_this,0,1,2);
		//_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
		_this.backbtn.inputEnabled = true;


		_this.backbtn.events.onInputDown.add(function()
		{
			//_this.cache.destroy();
			console.log("back");
			_this.backbtn.events.onInputDown.removeAll();
			_this.stopVoice();
			
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
				_this.state.start('grade1levelSelectionScreen',true,false); 
			else
				_this.state.start('grade2levelSelectionScreen',true,false); 

		},_this);

		 _this.speakerbtn = this.add.button(595,7,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
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


        	this.timeDisplay = this.add.text(332,25,_this.minutes + ' : '+ this.seconds);
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
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
			*/
		
		 _this.generateStarsForTheScene(6);


		_this.getQuestion();
          
    },
    
     shuffle: function(array) 
	 {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
		{
            
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
    
     
     

    getQuestion:function()
    {    
		_this.obj1Array = [];
		_this.obj2Array = [];
		_this.obj3Array = [];
		_this.sceneCount++;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;

		 _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
  		_this.timer1.start();

        
         if(_this.no11<=1)
            {
                _this.questno=_this.qArrays[_this.no11];
            }
        else if(_this.rno11<=1)
                {
                    _this.questno=_this.qArrays1[_this.rno11];
                }
               
         else if(_this.vno11<=1)
                {
                    _this.questno=_this.qArrays2[_this.vno11];
                }
        //console.log("questno"+questno);
    	switch(_this.questno)
       {
    		case 1: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg1o1','Level11A_triangleExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg1o2','Level11A_trianglenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg1o3','Level11A_trianglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 2: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg2o1','Level11A_rectanglenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg2o2','Level11A_rectangleExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg2o3','Level11A_rectanglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 3: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg3o1','Level11A_circlenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg3o2','Level11A_circlenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg3o3','Level11A_circleExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 4: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg4o1','Level11A_squarenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg4o2','Level11A_squareExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg4o3','Level11A_squarenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 5: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg5o1','Level11A_triangleExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg5o2','Level11A_trianglenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg5o3','Level11A_trianglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 6: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg6o1','Level11A_rectanglenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg6o2','Level11A_rectangleExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg6o3','Level11A_rectanglenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    		case 7: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg7o1','Level11A_circlenotExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg7o2','Level11A_circlenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg7o3','Level11A_circleExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 8: 
					
					_this.no11++;
					_this.obj1Array = [190,280,'flg8o1','Level11A_squareExactlyhalfdivided'];
					_this.obj2Array = [490,280,'flg8o2','Level11A_squarenotExactlyhalfdivided'];
					_this.obj3Array = [790,280,'flg8o3','Level11A_squarenotExactlyhalfdivided'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 9: 
					
					_this.rno11++;
					_this.obj1Array = [190,280,'flg9o1','Level11A_triangleExactlydivided3parts'];
					_this.obj2Array = [490,280,'flg9o2','Level11A_trianglenotExactlydivided3parts'];
					_this.obj3Array = [790,280,'flg9o3','Level11A_trianglenotExactlydivided3parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 10: 
					
					_this.rno11++;
					_this.obj1Array = [190,290,'flg10o1','Level11A_rectangleExactlydivided3parts'];
					_this.obj2Array = [490,280,'flg10o2','Level11A_rectanglenotExactlydivided3parts'];
					_this.obj3Array = [790,280,'flg10o3','Level11A_rectanglenotExactlydivided3parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 11: 
					
					_this.rno11++;
					_this.obj1Array = [190,280,'flg11o1','Level11A_circleExactlydivided3parts'];
					_this.obj2Array = [490,280,'flg11o2','Level11A_circlenotExactlydivided3parts'];
					_this.obj3Array = [790,280,'flg11o3','Level11A_circlenotExactlydivided3parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 12: 
					
					_this.rno11++;
					_this.obj1Array = [190,280,'flg12o1','Level11A_squarenotExactlydivided3parts'];
					_this.obj2Array = [490,280,'flg12o2','Level11A_squarenotExactlydivided3parts'];
					_this.obj3Array = [790,280,'flg12o3','Level11A_squareExactlydivided3parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 13: 
					
					_this.vno11++;
					_this.obj1Array = [190,280,'flg13o1','Level11A_rectangleExactlydivided4parts'];
					_this.obj2Array = [490,280,'flg13o2','Level11A_rectanglenotExactlydivided4parts'];
					_this.obj3Array = [790,280,'flg13o3','Level11A_rectanglenotExactlydivided4parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
            case 14: 
					
					_this.vno11++;
					_this.obj1Array = [190,280,'flg14o1','Level11A_circleExactlydivided4parts'];
					_this.obj2Array = [490,280,'flg14o2','Level11A_circlenotExactlydivided4parts'];
					_this.obj3Array = [790,280,'flg14o3','Level11A_circlenotExactlydivided4parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;            
            case 15: 
					
					_this.vno11++;
					_this.obj1Array = [190,280,'flg15o1','Level11A_squareExactlydivided4parts'];
					_this.obj2Array = [490,280,'flg15o2','Level11A_squarenotExactlydivided4parts'];
					_this.obj3Array = [790,280,'flg15o3','Level11A_squarenotExactlydivided4parts'];
					_this.gotoFirstQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array);
    				break;
    	}

    	_this.questionid = 1;
        
    },
    
   
    gotoFirstQuestion:function(obj1Array,obj2Array,obj3Array){
		
		_this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();
		
		
		
    	//_this.no11++;
		_this.speakerbtn.inputEnabled = true;
		if(_this.firstTime)
		{
			_this.firstTime = false;
			_this.getVoice();
		}
		
    	_this.opt1 = _this.add.sprite(obj1Array[0],obj1Array[1],obj1Array[2]);
    	_this.opt1.anchor.setTo(0.5);
		_this.opt1.name = obj1Array[3];
        
    	_this.opt2 = _this.add.sprite(obj2Array[0],obj2Array[1],obj2Array[2]);
    	_this.opt2.anchor.setTo(0.5);
		_this.opt2.name = obj2Array[3];
       
    	_this.opt3 = _this.add.sprite(obj3Array[0],obj3Array[1],obj3Array[2]);
    	_this.opt3.anchor.setTo(0.5);
		_this.opt3.name = obj3Array[3];
        
		_this.flagGroup = _this.add.group();

    	_this.flagGroup.add(_this.opt1);
    	_this.flagGroup.add(_this.opt2);
    	_this.flagGroup.add(_this.opt3);
    	

    	_this.flagGroup.x = 1000;
    	_this.tween = _this.add.tween(_this.flagGroup);
    	_this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.tween.onComplete.add(function(){
			_this.tween = null;
			
			_this.addListeners();
			
     }, _this);      
    },
	
	
    addListeners:function()
	{
		_this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.checkAns,_this);
			
		_this.opt2.inputEnabled = true;
    	_this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.checkAns,_this);
			
		_this.opt3.inputEnabled = true;
    	_this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.checkAns,_this);
	},
	
	removeListeners:function()
	{
		_this.opt1.inputEnabled = false;
		_this.opt1.input.useHandCursor = false;
        _this.opt1.events.onInputDown.removeAll();
			
		_this.opt2.inputEnabled = false;
    	_this.opt2.input.useHandCursor = false;
        _this.opt2.events.onInputDown.removeAll();
			
		_this.opt3.inputEnabled = false;
    	_this.opt3.input.useHandCursor = false;
        _this.opt3.events.onInputDown.removeAll();
	},
	
	
	removeCelebration:function()
	{
		_this.count1++;
		if(_this.timer1)
			{
			_this.timer1.stop();
			}
		_this.speakerbtn.inputEnabled = false;
		if(_this.no11<=1||_this.rno11<=1||_this.vno11<=1)
		{
            //console.log("addq");
            //_this.addQuestion(_this.count1);
			
			_this.tween = _this.add.tween(_this.flagGroup);
				_this.tween.to({ x: -1000 }, 0, 'Linear', true, 0);
				_this.tween.onComplete.add(
				function()
				{
					_this.tween = null;
					_this.destroyEverything();
					_this.getQuestion();
				}, _this);			
		}
		else
		{
			_this.stopVoice();
			_this.state.start('grade1_1AScore',true,false);
		}		
	},
 
	checkAns:function(target)
	{
		_this.clickSound = _this.add.audio('ClickSound');
		_this.clickSound.play();
		
		_this.noofAttempts++;

		//*****************this is called whenever there is a click event on a object******************
		_this.currentTime = window.timeSaveFunc();
		_this.interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
		//absdsjsapi.saveInteractEvent(_this.interactEvent);
			
		
		if(target.name == "Level11A_triangleExactlyhalfdivided"
			||target.name == "Level11A_rectangleExactlyhalfdivided"
			||target.name == "Level11A_circleExactlyhalfdivided"
			||target.name == "Level11A_squareExactlyhalfdivided"
			||target.name == "Level11A_triangleExactlydivided3parts"
			||target.name == "Level11A_rectangleExactlydivided3parts"
			||target.name == "Level11A_circleExactlydivided3parts"
			||target.name == "Level11A_squareExactlydivided3parts"
			||target.name == "Level11A_triangleExactlydivided4parts"
			||target.name == "Level11A_rectangleExactlydivided4parts"
			||target.name == "Level11A_circleExactlydivided4parts"
			||target.name == "Level11A_squareExactlydivided4parts"
			)
		{
			
			_this.removeListeners();
			
			if(_this.timer)
			{
				_this.timer.stop();
				_this.timer = null;
			}


			//*****************this is called whenever the user clicks on the right answer******************
			/*_this.currentTime = window.timeSaveFunc();
			_this.saveAsment = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				pass: "yes",
				time2answer: _this.AnsTimerCount,
				attempts: _this.noofAttempts,
				date_time_submission: _this.currentTime, 
				access_token: window.acctkn 
			}
				
			absdsjsapi.saveAssessment(_this.saveAsment);*/


			telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
		
			_this.anim = target.animations.add('flag1');
			_this.anim.play();
			_this.anim.onComplete.add(
			function(target)
			{
				target.frame = target.animations.frameTotal-1;
				target.tint = 0xA9A9A9;
				_this.anim = null;
				
				_this.celebrationSound = _this.add.audio('celebr');
				_this.celebrationSound.play();
				
				_this.starAnim = _this.starsGroup.getChildAt(_this.count1);
				_this.anim = _this.starAnim.animations.add('star');
				_this.anim.play();
				_this.anim.onComplete.add(
				function()
				{
					_this.anim = null;
					_this.removeCelebration();
					
				},this);
			},this);
		}
		else
		{
			target.tint = 0xA9A9A9;
        
			_this.shake.shake(10, target);
			
			_this.wrongSound = _this.add.audio('waudio');
			_this.wrongSound.play();
				//_this.disableListeners();
			target.events.onInputDown.removeAll();
			
			
			/*_this.currentTime = window.timeSaveFunc();
			_this.saveAsment = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				pass: "no",
				time2answer: _this.AnsTimerCount,
				attempts: _this.noofAttempts,
				date_time_submission: _this.currentTime, 
				access_token: window.acctkn 
			}
				
			absdsjsapi.saveAssessment(_this.saveAsment);*/
		}
	},

	destroyEverything:function()
	{
		
		_this.flagGroup.destroy();
		_this.opt1.destroy();
		_this.opt2.destroy();
		_this.opt3.destroy();
		
		_this.flagGroup = null;
		_this.opt1 = null;
		_this.opt2 = null;
		_this.opt3 = null;
	},
	
	getVoice:function()
	{	
		_this.stopVoice();	

		
		
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
		
		
		if(window.languageSelected == "English")
		{
			_this.src.setAttribute("src", "questionSounds/1.1A/English/1.1A1.mp3");
		}
		else if(window.languageSelected == "Hindi")
		{
			_this.src.setAttribute("src", "questionSounds/1.1A/Hindi/1.1A1.mp3");
		}
		else if(window.languageSelected == "Kannada")
		{
			_this.src.setAttribute("src", "questionSounds/1.1A/Kannada/1.1A1.mp3");
		}
		else
		{
			_this.src.setAttribute("src", "questionSounds/1.1A/Odiya/1.1A1.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
		}
		
		
		_this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();

		
		
		//amp.amplify(3);
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
		// _timer1.stop();
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
		
		/*//_this.playQuestionSound.remove();
		//_this.src.remove();

		_this.playQuestionSound=null;
		_this.src = null;
		
		
		
		_this.background = null;
		_this.tween = null;
		_this.time.events.removeAll();
		_this.playQuestionSound = null;
		_this.celebrationSound = null;
		_this.clickSound = null;
				
		
		_this.noofAttempts = null;
		_this.AnsTimerCount = null;
		_this.firstTime = null;
		
		_this.shake = null;
		
        _this.rightCount = null;
        _this.no11 = null;
        _this.rno11 = null;
        _this.vno11 = null;
        _this.no22 = null;
        _this.count=null;
        _this.count1=null;
        _this.celebration= null;
		
		_this.starsGroup = null;
		_this.flagGroup = null;
		
        _this.qArrays = null;
        _this.qArrays1 = null;
        _this.qArrays2 = null;
        

      
        _this.background = null;
		
		_this.backbtn.events.onInputDown.removeAll();
		_this.backbtn = null;
		
		_this.speakerbtn.events.onInputDown.removeAll();
		_this.speakerbtn = null;
		
		_this.obj1Array = null;
		_this.obj1Array = null;
		_this.obj1Array = null;
		
		_this.opt1.inputEnabled = false;
		_this.opt1.events.onInputDown.removeAll();
        _this.opt1 = null;
			
		_this.opt2.inputEnabled = false;
    	_this.opt2.events.onInputDown.removeAll();
        _this.opt2 = null;
			
		_this.opt3.inputEnabled = false;
    	_this.opt3.events.onInputDown.removeAll();
        _this.opt3 = null;

        _this.world.removeAll();
		
		_this = null;*/
	}

	
	
};