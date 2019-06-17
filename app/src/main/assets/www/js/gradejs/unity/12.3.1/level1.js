Game.unity12_3_1level1=function(){};

Game.unity12_3_1level1.prototype ={
    
    init:function(game)
    {
       _this= this;
       telInitializer.gameIdInit("multiplication12_3_1",gradeSelected);
       
    },
    
	create:function(game)
    {
        _this.x = null;
        _this.y = null;

        _this.sceneCount = 0;
        
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.selectedAns = "";
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.no11 = 0;
        
        _this.background;
        _this.click3;
        _this.click4;
        _this.rightCount ;
        _this.opt1;
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
        _this.multiplication;
        _this.starsGroup;
       
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        _this.increament;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.checkEgg =1;
        _this.celebration= false;
        
        _this.greenNumbers =null;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8];
        
        //_this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity12_3_1BG_01');
        
        _this.navBar = _this.add.sprite(0,0,'Unity12_3_1navBar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(5,5,'unity1_1backbtn',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,5,'unity1_1CommonSpeakerBtn');
       
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            _this.getVoice();

        },_this);
        
        _this.timebg = _this.add.sprite(300,5,'Unity12_3_1timebg');
        //_this.topicOutline = _this.add.sprite(70,5,'Unity12_3_1topicOutline');
        //_this.practice = _this.add.sprite(78,10,'Unity12_3_1practice');
        //_this.topic = _this.add.sprite(165,10,'Unity12_3_1topic');
        
        _this.timeDisplay = _this.add.text(325,20,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'Oh Whale';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
    
        //language selection sounds
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
    
        if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", "questionSounds/12.3.1/English/12.3.1.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", "questionSounds/12.3.1/Hindi/12.3.1.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", "questionSounds/12.3.1/Kannada/12.3.1.mp3");
        }
        else
        {
            _this.src.setAttribute("src", "questionSounds/12.3.1/Odiya/12.3.1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        _this.Tap =_this.add.audio('tap');
        _this.eggCrack =_this.add.audio('eggCrack');
        
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
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
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
    
    getQuestion:function(target)
    {
    	//console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);
        
       
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.questionid=1;
       
        
        _this.addEgg = 0;
        
    	/*switch(_this.qArrays[_this.no11])
    	{
    		case 1: _this.gotoFirstQuestion();
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
    	}*/
        
        _this.gotoFirstQuestion();
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
                //console.log("here");
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
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
        
		for (var i = 0; i < count; i++)
		{
			_this.starsGroup.create(_this.world.centerX-15, 10, 'unity1_1starAnim');
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

    addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },
    
    onDragStart:function(target)
    {
       //console.log("onDragStart");
        
        //_this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level12.3.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
       /* if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }*/
        // _this.currentTime = window.timeSaveFunc();
        _this.saveAsment = 
        { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn 
        }

        //absdsjsapi.saveAssessment(_this.saveAsment);
        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
         
        target.input.enableDrag(true);
        _this.click1 = this.add.audio('ClickSound');
        _this.click1.play();
        
        _this.vx = target.x;   
        _this.vy = target.y; 

        target.events.onDragStop.add(function(target)
        {
            //console.log("target.key:"+target.key);
            ////console,log("SmallEggGrp :"+_this.SmallEggGrp.getChildAt(i));
            
            _this.click1 = this.add.audio('snapSound');
            _this.click1.play();

            if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(0)) && (_this.SmallEggGrp.getChildAt(0).visible == false))||
                (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(1)) && (_this.SmallEggGrp.getChildAt(1).visible == false))||
                (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(2)) && (_this.SmallEggGrp.getChildAt(2).visible == false))|| 
                (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(3)) && (_this.SmallEggGrp.getChildAt(3).visible == false))|| 
                (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(4)) && (_this.SmallEggGrp.getChildAt(4).visible == false)))&& _this.addEgg == 0 
              )
            { 
                
                if(_this.randomno==5)
                {
                    _this.SmallEggGrp.getChildAt(0).visible = true;
                    _this.SmallEggGrp.getChildAt(1).visible = true;
                    _this.SmallEggGrp.getChildAt(2).visible = true;
                    _this.SmallEggGrp.getChildAt(3).visible = true;
                    _this.SmallEggGrp.getChildAt(4).visible = true;
                     
                    _this.SmallEgg1.frame = 1;
                    _this.SmallEgg2.frame = 1;
                    _this.SmallEgg3.frame = 1;
                    _this.SmallEgg4.frame = 1;
                    _this.SmallEgg5.frame = 1;
                    
                    _this.SmallEgg1_Glow_five.frame = 0;
                    
                    _this.SmallEgg2_glow1_five.frame = 1;
                    _this.SmallEgg2_glow1_five.visible = true;
                     
    
                }
                else if(_this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(0).visible = true;
                    _this.SmallEggGrp.getChildAt(1).visible = true;
                    _this.SmallEggGrp.getChildAt(2).visible = true;
                    _this.SmallEggGrp.getChildAt(3).visible = true;
                     
                    _this.SmallEgg1.frame = 1;
                    _this.SmallEgg2.frame = 1;
                    _this.SmallEgg3.frame = 1;
                    _this.SmallEgg4.frame = 1;
                    
                    _this.SmallEgg1_Glow_four.frame = 0;
                    _this.SmallEgg2_glow1_four.frame=1;
                    _this.SmallEgg2_glow1_four.visible=true;
        
                 }
                
                else if(_this.randomno==3)
                 {
                    _this.SmallEggGrp.getChildAt(0).visible = true;
                    _this.SmallEggGrp.getChildAt(1).visible = true;
                    _this.SmallEggGrp.getChildAt(2).visible = true;
                     
                    _this.SmallEgg1.frame = 1;
                    _this.SmallEgg2.frame = 1;
                    _this.SmallEgg3.frame = 1;
                     
                    _this.SmallEgg1_Glow_three.frame = 0;
                    
                     _this.SmallEgg2_glow1_three.frame=1;
                     _this.SmallEgg2_glow1_three.visible=true;
    
                 }
                else if(_this.randomno==2)
                 {
                    _this.SmallEggGrp.getChildAt(0).visible = true;
                    _this.SmallEggGrp.getChildAt(1).visible = true;
                     
                    _this.SmallEgg1.frame = 1;
                    _this.SmallEgg2.frame = 1;
                  
                   
                    _this.SmallEgg1_Glow_two.frame = 0;
                     
                    _this.SmallEgg2_glow1_two.frame=1;
                    _this.SmallEgg2_glow1_two.visible=true;
                    
                 }
                else
                 {
                    _this.SmallEggGrp.getChildAt(0).visible = true;
                 
                    _this.SmallEgg1.frame = 1;
                     
                    _this.SmallEgg1_Glow.frame = 0;
                    _this.SmallEgg2_glow1.frame=1;
                    _this.SmallEgg2_glow1.visible=true;
                
                 }
    
                _this.addEgg ++;
            
            }
            
            else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(5)) && (_this.SmallEggGrp.getChildAt(5).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(6)) && (_this.SmallEggGrp.getChildAt(6).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(7)) && (_this.SmallEggGrp.getChildAt(7).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(8)) && (_this.SmallEggGrp.getChildAt(8).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(9)) && (_this.SmallEggGrp.getChildAt(9).visible == false)))&&
                    _this.addEgg == 1
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    if( _this.randomno==5)
                    {
                        _this.SmallEggGrp.getChildAt(5).visible = true;
                        _this.SmallEggGrp.getChildAt(6).visible = true;
                        _this.SmallEggGrp.getChildAt(7).visible = true;
                        _this.SmallEggGrp.getChildAt(8).visible = true;
                        _this.SmallEggGrp.getChildAt(9).visible = true;
                         
                        _this.SmallEgg6.frame = 1;
                        _this.SmallEgg7.frame = 1;
                        _this.SmallEgg8.frame = 1;
                        _this.SmallEgg9.frame = 1;
                        _this.SmallEgg10.frame = 1;
                    
                        _this.SmallEgg2_glow1_five.frame = 0;
                         
                        _this.SmallEgg3_glow1_five.frame=1;
                        _this.SmallEgg3_glow1_five.visible=true;
                        
                    }
                    else if( _this.randomno==4)
                    {
                        _this.SmallEggGrp.getChildAt(5).visible = true;
                        _this.SmallEggGrp.getChildAt(6).visible = true;
                        _this.SmallEggGrp.getChildAt(7).visible = true;
                        _this.SmallEggGrp.getChildAt(8).visible = true;
                        //_this.SmallEggGrp.getChildAt(9).visible = true;
                         
                        _this.SmallEgg6.frame = 1;
                        _this.SmallEgg7.frame = 1;
                        _this.SmallEgg8.frame = 1;
                        _this.SmallEgg9.frame = 1;
          
                        _this.SmallEgg2_glow1_four.frame = 0;
                         
                        _this.SmallEgg3_glow1_four.frame=1;
                        _this.SmallEgg3_glow1_four.visible=true;
                        
                     }
                    
                    else if( _this.randomno==3)
                     {
                        _this.SmallEggGrp.getChildAt(5).visible = true;
                        _this.SmallEggGrp.getChildAt(6).visible = true;
                        _this.SmallEggGrp.getChildAt(7).visible = true;
                        //_this.SmallEggGrp.getChildAt(8).visible = true;
                        //_this.SmallEggGrp.getChildAt(9).visible = true;
                         
                        _this.SmallEgg6.frame = 1;
                        _this.SmallEgg7.frame = 1;
                        _this.SmallEgg8.frame = 1;

                        _this.SmallEgg2_glow1_three.frame = 0;
                         
                        _this.SmallEgg3_glow1_three.frame=1;
                        _this.SmallEgg3_glow1_three.visible=true;
                        
                     }
                    else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(5).visible = true;
                        _this.SmallEggGrp.getChildAt(6).visible = true;
                   
                        _this.SmallEgg6.frame = 1;
                        _this.SmallEgg7.frame = 1;
        
                        _this.SmallEgg2_glow1_two.frame = 0;
                         
                        _this.SmallEgg3_glow1_two.frame = 1;
                        _this.SmallEgg3_glow1_two.visible=true;
           
                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(5).visible = true;
                        
                        _this.SmallEgg6.frame = 1;
                        //_this.SmallEgg2_glow1.frame=1;
                    
                        _this.SmallEgg2_glow1.frame = 0;
                         
                        _this.SmallEgg3_glow1.frame=1;
                        _this.SmallEgg3_glow1.visible=true;
                        
                     }
                    _this.addEgg++;
                }
            else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(10)) && (_this.SmallEggGrp.getChildAt(10).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(11)) && (_this.SmallEggGrp.getChildAt(11).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(12)) && (_this.SmallEggGrp.getChildAt(12).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(13)) && (_this.SmallEggGrp.getChildAt(13).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(14)) && (_this.SmallEggGrp.getChildAt(14).visible == false)))&&
                    _this.addEgg == 2
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    if( _this.randomno==5)
                     {
                        _this.SmallEggGrp.getChildAt(10).visible = true;
                        _this.SmallEggGrp.getChildAt(11).visible = true;
                        _this.SmallEggGrp.getChildAt(12).visible = true;
                        _this.SmallEggGrp.getChildAt(13).visible = true;
                        _this.SmallEggGrp.getChildAt(14).visible = true;
                         
                        _this.SmallEgg11.frame = 1;
                        _this.SmallEgg12.frame = 1;
                        _this.SmallEgg13.frame = 1;
                        _this.SmallEgg14.frame = 1;
                        _this.SmallEgg15.frame = 1;
 
                        _this.SmallEgg3_glow1_five.frame = 0;
                         
                        _this.SmallEgg4_glow1_five.frame=1;
                        _this.SmallEgg4_glow1_five.visible=true;
 
                     }
                    else if( _this.randomno==4)
                     {
                        _this.SmallEggGrp.getChildAt(10).visible = true;
                        _this.SmallEggGrp.getChildAt(11).visible = true;
                        _this.SmallEggGrp.getChildAt(12).visible = true;
                        _this.SmallEggGrp.getChildAt(13).visible = true;
                        //_this.SmallEggGrp.getChildAt(14).visible = true;
                         
                        _this.SmallEgg11.frame = 1;
                        _this.SmallEgg12.frame = 1;
                        _this.SmallEgg13.frame = 1;
                        _this.SmallEgg14.frame = 1;
     
                        _this.SmallEgg3_glow1_four.frame = 0;
                         
                        _this.SmallEgg4_glow1_four.frame=1;
                        _this.SmallEgg4_glow1_four.visible=true;
                        
                     }
                    else if( _this.randomno==3)
                     {
                        _this.SmallEggGrp.getChildAt(10).visible = true;
                        _this.SmallEggGrp.getChildAt(11).visible = true;
                        _this.SmallEggGrp.getChildAt(12).visible = true;
                        //_this.SmallEggGrp.getChildAt(13).visible = true;
                        //_this.SmallEggGrp.getChildAt(14).visible = true;
                         
                        _this.SmallEgg11.frame = 1;
                        _this.SmallEgg12.frame = 1;
                        _this.SmallEgg13.frame = 1;
                       
                        _this.SmallEgg3_glow1_three.frame = 0;
                         
                        _this.SmallEgg4_glow1_three.frame=1;
                        _this.SmallEgg4_glow1_three.visible=true;
                    
                     }
                    else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(10).visible = true;
                        _this.SmallEggGrp.getChildAt(11).visible = true;
                      
                        _this.SmallEgg11.frame = 1;
                        _this.SmallEgg12.frame = 1;
                    
                        _this.SmallEgg3_glow1_two.frame = 0;
                         
                        _this.SmallEgg4_glow1_two.frame=1;
                        _this.SmallEgg4_glow1_two.visible=true;

                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(10).visible = true;
                       
                        _this.SmallEgg11.frame = 1;
                 
                        _this.SmallEgg3_glow1.frame = 0;
                         
                        _this.SmallEgg4_glow1.frame=1;
                        _this.SmallEgg4_glow1.visible=true;

                     }
                    _this.addEgg++;
                } 
            else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(15)) && (_this.SmallEggGrp.getChildAt(15).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(16)) && (_this.SmallEggGrp.getChildAt(16).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(17)) && (_this.SmallEggGrp.getChildAt(17).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(18)) && (_this.SmallEggGrp.getChildAt(18).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(19)) && (_this.SmallEggGrp.getChildAt(19).visible == false)))&&
                    _this.addEgg == 3
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    if(_this.randomno==5)
                     {
                        _this.SmallEggGrp.getChildAt(15).visible = true;
                        _this.SmallEggGrp.getChildAt(16).visible = true;
                        _this.SmallEggGrp.getChildAt(17).visible = true;
                        _this.SmallEggGrp.getChildAt(18).visible = true;
                        _this.SmallEggGrp.getChildAt(19).visible = true;
                         
                        _this.SmallEgg16.frame = 1;
                        _this.SmallEgg17.frame = 1;
                        _this.SmallEgg18.frame = 1;
                        _this.SmallEgg19.frame = 1;
                        _this.SmallEgg20.frame = 1;
   
                        _this.SmallEgg4_glow1_five.frame = 0;
                         
                        _this.SmallEgg5_glow1_five.frame=1;
                        _this.SmallEgg5_glow1_five.visible=true;
                     }
                     else if(_this.randomno==4)
                     {
                        _this.SmallEggGrp.getChildAt(15).visible = true;
                        _this.SmallEggGrp.getChildAt(16).visible = true;
                        _this.SmallEggGrp.getChildAt(17).visible = true;
                        _this.SmallEggGrp.getChildAt(18).visible = true;
          
                        _this.SmallEgg16.frame = 1;
                        _this.SmallEgg17.frame = 1;
                        _this.SmallEgg18.frame = 1;
                        _this.SmallEgg19.frame = 1;
              
                        _this.SmallEgg4_glow1_four.frame = 0;
                         
                        _this.SmallEgg5_glow1_four.frame=1;
                        _this.SmallEgg5_glow1_four.visible=true;
                     }
                    else if(_this.randomno==3)
                     {
                        _this.SmallEggGrp.getChildAt(15).visible = true;
                        _this.SmallEggGrp.getChildAt(16).visible = true;
                        _this.SmallEggGrp.getChildAt(17).visible = true;

                        _this.SmallEgg16.frame = 1;
                        _this.SmallEgg17.frame = 1;
                        _this.SmallEgg18.frame = 1;
  
                        _this.SmallEgg4_glow1_three.frame = 0;
                         
                        _this.SmallEgg5_glow1_three.frame=1;
                        _this.SmallEgg5_glow1_three.visible=true;
                        
                     }
                     else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(15).visible = true;
                        _this.SmallEggGrp.getChildAt(16).visible = true;

                        _this.SmallEgg16.frame = 1;
                        _this.SmallEgg17.frame = 1;
 
                        _this.SmallEgg4_glow1_two.frame = 0;
                         
                        _this.SmallEgg5_glow1_two.frame=1;
                        _this.SmallEgg5_glow1_two.visible=true;

                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(15).visible = true;
                  
                        _this.SmallEgg16.frame = 1;
             
                        _this.SmallEgg4_glow1.frame = 0;
                        _this.SmallEgg5_glow1.frame=1;
                        _this.SmallEgg5_glow1.visible=true;
                     }
                    _this.addEgg++;
                }
            else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(20)) && (_this.SmallEggGrp.getChildAt(20).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(21)) && (_this.SmallEggGrp.getChildAt(21).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(22)) && (_this.SmallEggGrp.getChildAt(22).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(23)) && (_this.SmallEggGrp.getChildAt(23).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(24)) && (_this.SmallEggGrp.getChildAt(24).visible == false)))&&
                    _this.addEgg == 4
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    if(_this.randomno==5)
                     {
                        _this.SmallEggGrp.getChildAt(20).visible = true;
                        _this.SmallEggGrp.getChildAt(21).visible = true;
                        _this.SmallEggGrp.getChildAt(22).visible = true;
                        _this.SmallEggGrp.getChildAt(23).visible = true;
                        _this.SmallEggGrp.getChildAt(24).visible = true;
                         
                        _this.SmallEgg21.frame = 1;
                        _this.SmallEgg22.frame = 1;
                        _this.SmallEgg23.frame = 1;
                        _this.SmallEgg24.frame = 1;
                        _this.SmallEgg25.frame = 1;
          
                        _this.SmallEgg5_glow1_five.frame = 0;
                        _this.SmallEgg6_glow1_five.frame=1;
                        _this.SmallEgg6_glow1_five.visible=true;
                     }
                   else if(_this.randomno==4)
                     {
                        _this.SmallEggGrp.getChildAt(20).visible = true;
                        _this.SmallEggGrp.getChildAt(21).visible = true;
                        _this.SmallEggGrp.getChildAt(22).visible = true;
                        _this.SmallEggGrp.getChildAt(23).visible = true;
               
                        _this.SmallEgg21.frame = 1;
                        _this.SmallEgg22.frame = 1;
                        _this.SmallEgg23.frame = 1;
                        _this.SmallEgg24.frame = 1;

                        _this.SmallEgg5_glow1_four.frame = 0;
                         
                        _this.SmallEgg6_glow1_four.frame=1;
                        _this.SmallEgg6_glow1_four.visible=true;
                     }
                    else if(_this.randomno==3)
                     {
                        _this.SmallEggGrp.getChildAt(20).visible = true;
                        _this.SmallEggGrp.getChildAt(21).visible = true;
                        _this.SmallEggGrp.getChildAt(22).visible = true;
                       // _this.SmallEggGrp.getChildAt(23).visible = true;
               
                        _this.SmallEgg21.frame = 1;
                        _this.SmallEgg22.frame = 1;
                        _this.SmallEgg23.frame = 1;
                        //_this.SmallEgg24.frame = 1;

                        _this.SmallEgg5_glow1_three.frame = 0;
                         
                        _this.SmallEgg6_glow1_three.frame=1;
                        _this.SmallEgg6_glow1_three.visible=true;
                     }
                    else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(20).visible = true;
                        _this.SmallEggGrp.getChildAt(21).visible = true;

                        _this.SmallEgg21.frame = 1;
                        _this.SmallEgg22.frame = 1;
 
                        _this.SmallEgg5_glow1_two.frame = 0;
                        _this.SmallEgg6_glow1_two.frame=1;
                        _this.SmallEgg6_glow1_two.visible=true;
                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(20).visible = true;
                        _this.SmallEgg21.frame = 1;

                        _this.SmallEgg5_glow1.frame = 0;
                         
                        _this.SmallEgg6_glow1.frame=1;
                        _this.SmallEgg6_glow1.visible=true;

                     }
                    _this.addEgg++;
                }
            else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(25)) && (_this.SmallEggGrp.getChildAt(25).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(26)) && (_this.SmallEggGrp.getChildAt(26).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(27)) && (_this.SmallEggGrp.getChildAt(27).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(28)) && (_this.SmallEggGrp.getChildAt(28).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(29)) && (_this.SmallEggGrp.getChildAt(29).visible == false)))&&
                    _this.addEgg == 5
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    if(_this.randomno==5)
                     {
                        _this.SmallEggGrp.getChildAt(25).visible = true;
                        _this.SmallEggGrp.getChildAt(26).visible = true;
                        _this.SmallEggGrp.getChildAt(27).visible = true;
                        _this.SmallEggGrp.getChildAt(28).visible = true;
                        _this.SmallEggGrp.getChildAt(29).visible = true;
                         
                        _this.SmallEgg26.frame = 1;
                        _this.SmallEgg27.frame = 1;
                        _this.SmallEgg28.frame = 1;
                        _this.SmallEgg29.frame = 1;
                        _this.SmallEgg30.frame = 1;
                  
                        _this.SmallEgg6_glow1_five.frame = 0;
                         
                        _this.SmallEgg7_glow1_five.frame=1;
                        _this.SmallEgg7_glow1_five.visible=true;

                     }
                    else if(_this.randomno==4)
                     {
                        _this.SmallEggGrp.getChildAt(25).visible = true;
                        _this.SmallEggGrp.getChildAt(26).visible = true;
                        _this.SmallEggGrp.getChildAt(27).visible = true;
                        _this.SmallEggGrp.getChildAt(28).visible = true;
   
                        _this.SmallEgg26.frame = 1;
                        _this.SmallEgg27.frame = 1;
                        _this.SmallEgg28.frame = 1;
                        _this.SmallEgg29.frame = 1;
       
                        _this.SmallEgg6_glow1_four.frame = 0;
                         
                        _this.SmallEgg7_glow1_four.frame=1;
                        _this.SmallEgg7_glow1_four.visible=true;
                     }
                    else if(_this.randomno==3)
                     {
                        _this.SmallEggGrp.getChildAt(25).visible = true;
                        _this.SmallEggGrp.getChildAt(26).visible = true;
                        _this.SmallEggGrp.getChildAt(27).visible = true;

                        _this.SmallEgg26.frame = 1;
                        _this.SmallEgg27.frame = 1;
                        _this.SmallEgg28.frame = 1;
    
                        _this.SmallEgg6_glow1_three.frame = 0;
                         
                        _this.SmallEgg7_glow1_three.frame=1;
                        _this.SmallEgg7_glow1_three.visible=true;
                     }
                    else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(25).visible = true;
                        _this.SmallEggGrp.getChildAt(26).visible = true;

                        _this.SmallEgg26.frame = 1;
                        _this.SmallEgg27.frame = 1;
                         
                        _this.SmallEgg6_glow1_two.frame = 0;
                         
                        _this.SmallEgg7_glow1_two.frame=1;
                        _this.SmallEgg7_glow1_two.visible=true;
                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(25).visible = true;
         
                        _this.SmallEgg26.frame = 1;
    
                        _this.SmallEgg6_glow1.frame = 0;
                         
                        _this.SmallEgg7_glow1.frame=1;
                        _this.SmallEgg7_glow1.visible=true;

                     }
                    
                    _this.addEgg++;
                }
            else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(30)) && (_this.SmallEggGrp.getChildAt(30).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(31)) && (_this.SmallEggGrp.getChildAt(31).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(32)) && (_this.SmallEggGrp.getChildAt(32).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(33)) && (_this.SmallEggGrp.getChildAt(33).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(34)) && (_this.SmallEggGrp.getChildAt(34).visible == false)))&&
                    _this.addEgg == 6
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    if(_this.randomno==5)
                    {
                        _this.SmallEggGrp.getChildAt(30).visible = true;
                        _this.SmallEggGrp.getChildAt(31).visible = true;
                        _this.SmallEggGrp.getChildAt(32).visible = true;
                        _this.SmallEggGrp.getChildAt(33).visible = true;
                        _this.SmallEggGrp.getChildAt(34).visible = true;
                         
                        _this.SmallEgg30.frame = 1;
                        _this.SmallEgg31.frame = 1;
                        _this.SmallEgg32.frame = 1;
                        _this.SmallEgg33.frame = 1;
                        _this.SmallEgg34.frame = 1;
                    
                        _this.SmallEgg7_glow1_five.frame = 0;
                         
                        _this.SmallEgg8_glow1_five.frame=1;
                        _this.SmallEgg8_glow1_five.visible=true;
                    }
                    else if(_this.randomno==4)
                    {
                        _this.SmallEggGrp.getChildAt(30).visible = true;
                        _this.SmallEggGrp.getChildAt(31).visible = true;
                        _this.SmallEggGrp.getChildAt(32).visible = true;
                        _this.SmallEggGrp.getChildAt(33).visible = true;
                     
                        _this.SmallEgg30.frame = 1;
                        _this.SmallEgg31.frame = 1;
                        _this.SmallEgg32.frame = 1;
                        _this.SmallEgg33.frame = 1;
  
                        _this.SmallEgg7_glow1_four.frame = 0;
                         
                        _this.SmallEgg8_glow1_four.frame=1;
                        _this.SmallEgg8_glow1_four.visible=true;
                    }
                   else if(_this.randomno==3)
                    {
                        _this.SmallEggGrp.getChildAt(30).visible = true;
                        _this.SmallEggGrp.getChildAt(31).visible = true;
                        _this.SmallEggGrp.getChildAt(32).visible = true;
 
                        _this.SmallEgg30.frame = 1;
                        _this.SmallEgg31.frame = 1;
                        _this.SmallEgg32.frame = 1;
                    
                        _this.SmallEgg7_glow1_three.frame = 0;
                         
                        _this.SmallEgg8_glow1_three.frame=1;
                        _this.SmallEgg8_glow1_three.visible=true;
                    }
                    else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(30).visible = true;
                        _this.SmallEggGrp.getChildAt(31).visible = true;

                        _this.SmallEgg30.frame = 1;
                        _this.SmallEgg31.frame = 1;
                 
                        _this.SmallEgg7_glow1_two.frame = 0;
                         
                        _this.SmallEgg8_glow1_two.frame=1;
                        _this.SmallEgg8_glow1_two.visible=true;
                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(30).visible = true;

                        _this.SmallEgg30.frame = 1;

                        _this.SmallEgg7_glow1.frame = 0;
                        _this.SmallEgg8_glow1.frame=1;
                        _this.SmallEgg8_glow1.visible=true;
                     }
                    _this.addEgg++;
                }
            else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(35)) && (_this.SmallEggGrp.getChildAt(35).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(36)) && (_this.SmallEggGrp.getChildAt(36).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(37)) && (_this.SmallEggGrp.getChildAt(37).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(38)) && (_this.SmallEggGrp.getChildAt(38).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(39)) && (_this.SmallEggGrp.getChildAt(39).visible == false)))&&
                    _this.addEgg == 7
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    
                    if(_this.randomno==5)
                    {
                        _this.SmallEggGrp.getChildAt(35).visible = true;
                        _this.SmallEggGrp.getChildAt(36).visible = true;
                        _this.SmallEggGrp.getChildAt(37).visible = true;
                        _this.SmallEggGrp.getChildAt(38).visible = true;
                        _this.SmallEggGrp.getChildAt(39).visible = true;
                         
                        _this.SmallEgg36.frame = 1;
                        _this.SmallEgg37.frame = 1;
                        _this.SmallEgg38.frame = 1;
                        _this.SmallEgg39.frame = 1;
                        _this.SmallEgg40.frame = 1;
              
                        _this.SmallEgg8_glow1_five.frame = 0;
                         
                        _this.SmallEgg9_glow1_five.frame=1;
                        _this.SmallEgg9_glow1_five.visible=true;
                    }
                   else if(_this.randomno==4)
                    {
                        _this.SmallEggGrp.getChildAt(35).visible = true;
                        _this.SmallEggGrp.getChildAt(36).visible = true;
                        _this.SmallEggGrp.getChildAt(37).visible = true;
                        _this.SmallEggGrp.getChildAt(38).visible = true;
                 
                        _this.SmallEgg36.frame = 1;
                        _this.SmallEgg37.frame = 1;
                        _this.SmallEgg38.frame = 1;
                        _this.SmallEgg39.frame = 1;
           
                        _this.SmallEgg8_glow1_four.frame = 0;
                        _this.SmallEgg9_glow1_four.frame=1;
                        _this.SmallEgg9_glow1_four.visible=true;
                    }
                    if(_this.randomno==3)
                    {
                        _this.SmallEggGrp.getChildAt(35).visible = true;
                        _this.SmallEggGrp.getChildAt(36).visible = true;
                        _this.SmallEggGrp.getChildAt(37).visible = true;
                        
                        _this.SmallEgg36.frame = 1;
                        _this.SmallEgg37.frame = 1;
                        _this.SmallEgg38.frame = 1;

                        _this.SmallEgg8_glow1_three.frame = 0;
                        
                        _this.SmallEgg9_glow1_three.frame=1;
                        _this.SmallEgg9_glow1_three.visible=true;
                    }
                    else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(35).visible = true;
                        _this.SmallEggGrp.getChildAt(36).visible = true;
                        
                        _this.SmallEgg36.frame = 1;
                        _this.SmallEgg37.frame = 1;
   
                        _this.SmallEgg8_glow1_two.frame = 0;
                         
                        _this.SmallEgg9_glow1_two.frame=1;
                        _this.SmallEgg9_glow1_two.visible=true;
                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(35).visible = true;
                    
                        _this.SmallEgg36.frame = 1;
      
                        _this.SmallEgg8_glow1.frame = 0;
                         
                        _this.SmallEgg9_glow1.frame=1;
                        _this.SmallEgg9_glow1.visible=true;
                     }
                    _this.addEgg++;
                }
             else if(
                    ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(40)) && (_this.SmallEggGrp.getChildAt(40).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(41)) && (_this.SmallEggGrp.getChildAt(41).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(42)) && (_this.SmallEggGrp.getChildAt(42).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(43)) && (_this.SmallEggGrp.getChildAt(43).visible == false))||
                    (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(44)) && (_this.SmallEggGrp.getChildAt(44).visible == false)))&&
                    _this.addEgg == 8
                  )
                { 
                    //console.log("target.name hittttttttttttttt:"+target.name);
                    
                    if(_this.randomno==5)
                     {
                        _this.SmallEggGrp.getChildAt(40).visible = true;
                        _this.SmallEggGrp.getChildAt(41).visible = true;
                        _this.SmallEggGrp.getChildAt(42).visible = true;
                        _this.SmallEggGrp.getChildAt(43).visible = true;
                        _this.SmallEggGrp.getChildAt(44).visible = true;
                         
                        _this.SmallEgg41.frame = 1;
                        _this.SmallEgg42.frame = 1;
                        _this.SmallEgg43.frame = 1;
                        _this.SmallEgg44.frame = 1;
                        _this.SmallEgg45.frame = 1;
                         
                        //_this.SmallEgg9_glow1.frame = 0;
                         
                        //_this.SmallEgg9_glow1.five.frame = 0;

                     }
                    else if(_this.randomno==4)
                     {
                        _this.SmallEggGrp.getChildAt(40).visible = true;
                        _this.SmallEggGrp.getChildAt(41).visible = true;
                        _this.SmallEggGrp.getChildAt(42).visible = true;
                        _this.SmallEggGrp.getChildAt(43).visible = true;
                       
                        _this.SmallEgg41.frame = 1;
                        _this.SmallEgg42.frame = 1;
                        _this.SmallEgg43.frame = 1;
                        _this.SmallEgg44.frame = 1;
                         
                        //_this.SmallEgg9_glow1.frame = 0;
                         
                        //_this.SmallEgg9_glow1.four.frame = 0;

                     }
                    else if(_this.randomno==3)
                     {
                        _this.SmallEggGrp.getChildAt(40).visible = true;
                        _this.SmallEggGrp.getChildAt(41).visible = true;
                        _this.SmallEggGrp.getChildAt(42).visible = true;
                    
                        _this.SmallEgg41.frame = 1;
                        _this.SmallEgg42.frame = 1;
                        _this.SmallEgg43.frame = 1;
  
                        //_this.SmallEgg9_glow1.frame = 0;
                         
                       // _this.SmallEgg9_glow1.three.frame = 0;

                     }
                    else if(_this.randomno==2)
                     {
                        _this.SmallEggGrp.getChildAt(40).visible = true;
                        _this.SmallEggGrp.getChildAt(41).visible = true;
            
                        _this.SmallEgg41.frame = 1;
                        _this.SmallEgg42.frame = 1;

                        //_this.SmallEgg9_glow1.frame = 0;
                     }
                    else
                     {
                        _this.SmallEggGrp.getChildAt(40).visible = true;
                      
                        _this.SmallEgg41.frame = 1;

                        //_this.SmallEgg9_glow1.frame = 0;
                     }
                    _this.addEgg++;
                }
            
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            //console.log("SecondNumbers and addEgg ::"+_this.SecondNumbers.frame,_this.addEgg);
            
            if(_this.SecondNumbers.frame == _this.addEgg-1)
            {
                _this.addEgg = -1;
                
                _this.eggCrack.play();
     
                _this.SmallEgg1_Glow.frame = 0;
                _this.SmallEgg1_Glow_two.frame = 0;
                _this.SmallEgg1_Glow_three.frame = 0;
                _this.SmallEgg1_Glow_four.frame = 0;
                _this.SmallEgg1_Glow_five.frame = 0;
                
                _this.SmallEgg2_glow1.frame = 0;
                _this.SmallEgg2_glow1_two.frame = 0;
                _this.SmallEgg2_glow1_three.frame = 0;
                _this.SmallEgg2_glow1_four.frame = 0;
                _this.SmallEgg2_glow1_five.frame = 0;
                
                _this.SmallEgg3_glow1.frame = 0;
                _this.SmallEgg3_glow1_two.frame = 0;
                _this.SmallEgg3_glow1_three.frame = 0;
                _this.SmallEgg3_glow1_four.frame = 0;
                _this.SmallEgg3_glow1_five.frame = 0;
                
                _this.SmallEgg4_glow1.frame = 0;
                _this.SmallEgg4_glow1_two.frame = 0;
                _this.SmallEgg4_glow1_three.frame = 0;
                _this.SmallEgg4_glow1_four.frame = 0;
                _this.SmallEgg4_glow1_five.frame = 0;
                
                _this.SmallEgg5_glow1.frame = 0;
                _this.SmallEgg5_glow1_two.frame = 0;
                _this.SmallEgg5_glow1_three.frame = 0;
                _this.SmallEgg5_glow1_four.frame = 0;
                _this.SmallEgg5_glow1_five.frame = 0;
                
                _this.SmallEgg6_glow1.frame = 0;
                _this.SmallEgg6_glow1_two.frame = 0;
                _this.SmallEgg6_glow1_three.frame = 0;
                _this.SmallEgg6_glow1_four.frame = 0;
                _this.SmallEgg6_glow1_five.frame = 0;
                
                _this.SmallEgg7_glow1.frame = 0;
                _this.SmallEgg7_glow1_two.frame = 0;
                _this.SmallEgg7_glow1_three.frame = 0;
                _this.SmallEgg7_glow1_four.frame = 0;
                _this.SmallEgg7_glow1_five.frame = 0;
                
                _this.SmallEgg8_glow1.frame = 0;
                _this.SmallEgg8_glow1_two.frame = 0;
                _this.SmallEgg8_glow1_three.frame = 0;
                _this.SmallEgg8_glow1_four.frame = 0;
                _this.SmallEgg8_glow1_five.frame = 0;
                
                _this.SmallEgg9_glow1.frame = 0;
                _this.SmallEgg9_glow1_two.frame = 0;
                _this.SmallEgg9_glow1_three.frame = 0;
                _this.SmallEgg9_glow1_four.frame = 0;
                _this.SmallEgg9_glow1_five.frame = 0;
            }

        },_this);
          
    },

    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        //_this.selectedAns=null;
        _this.questionNo = 1;
        _this.increament++;
        _this.randomno = Math.ceil(Math.random() * 5);
      
        //console.log("randomno length :"+_this.randomno);
        
        _this.addNumberPad();
    
        //egg box
        _this.Eggbox= _this.add.sprite(_this.world.centerX-200,_this.world.centerY-10,'Unity12_3_1Egg_box');
        _this.Eggbox.anchor.setTo(0.5);
        _this.Eggbox.scale.setTo(1,1);
        
       _this.Eggbox.visible = false;
      
        //small egg behind egg box 
        _this.SmallEgg1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-180,'Unity12_3_1SmallEgg');
        _this.SmallEgg1.anchor.setTo(0.5);
        _this.SmallEgg1.scale.setTo(1,1);
        _this.SmallEgg1.frame = 0;
        _this.SmallEgg1.name = "SmallEgg1";
        _this.SmallEgg1.visible=false;
        
        // glow
        _this.SmallEgg1_Glow = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-180,'Unity12_3_1oneGlow');
        _this.SmallEgg1_Glow.anchor.setTo(0.5);
        _this.SmallEgg1_Glow.scale.setTo(1,1);
        //_this.SmallEgg1_Glow.frame = 0;
        _this.SmallEgg1_Glow.name = "SmallEgg1_Glow";
        _this.SmallEgg1_Glow.visible=false;
        
        _this.SmallEgg1_Glow_two = _this.add.sprite(_this.world.centerX-349,_this.world.centerY-180,'Unity12_3_1twoGlow');
        _this.SmallEgg1_Glow_two.anchor.setTo(0.5);
        _this.SmallEgg1_Glow_two.scale.setTo(1,1);
        //_this.SmallEgg1_Glow_two.frame = 0;
        _this.SmallEgg1_Glow_two.name = "SmallEgg1_Glow_two";
        _this.SmallEgg1_Glow_two.visible=false;
        
        _this.SmallEgg1_Glow_three = _this.add.sprite(_this.world.centerX-330,_this.world.centerY-180,'Unity12_3_1threeGlow');
        _this.SmallEgg1_Glow_three.anchor.setTo(0.5);
        _this.SmallEgg1_Glow_three.scale.setTo(1,1);
        //_this.SmallEgg1_Glow_three.frame = 0;
        _this.SmallEgg1_Glow_three.name = "SmallEgg1_Glow_three";
        _this.SmallEgg1_Glow_three.visible=false;
        
        _this.SmallEgg1_Glow_four = _this.add.sprite(_this.world.centerX-310,_this.world.centerY-180,'Unity12_3_1fourGlow');
        _this.SmallEgg1_Glow_four.anchor.setTo(0.5);
        _this.SmallEgg1_Glow_four.scale.setTo(1,1);
        //_this.SmallEgg1_Glow_four.frame = 0;
        _this.SmallEgg1_Glow_four.name = "SmallEgg1_Glow_four";
       _this.SmallEgg1_Glow_four.visible=false;
        
        _this.SmallEgg1_Glow_five = _this.add.sprite(_this.world.centerX-292,_this.world.centerY-180,'Unity12_3_1fiveGlow');
        _this.SmallEgg1_Glow_five.anchor.setTo(0.5);
        _this.SmallEgg1_Glow_five.scale.setTo(1,1);
        //_this.SmallEgg1_Glow_five.frame = 0;
        _this.SmallEgg1_Glow_five.name = "SmallEgg1_Glow_five";
        _this.SmallEgg1_Glow_five.visible=false;
        
        
        /******************************/
       
        _this.SmallEgg2 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY-180,'Unity12_3_1SmallEgg');
        _this.SmallEgg2.anchor.setTo(0.5);
        _this.SmallEgg2.scale.setTo(1,1);
        _this.SmallEgg2.frame = 0;
        _this.SmallEgg2.name = "SmallEgg2";
        _this.SmallEgg2.visible=false;
        
        _this.SmallEgg3 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-180,'Unity12_3_1SmallEgg');
        _this.SmallEgg3.anchor.setTo(0.5);
        _this.SmallEgg3.scale.setTo(1,1);
        _this.SmallEgg3.frame = 0;
        _this.SmallEgg3.name = "SmallEgg3";
        _this.SmallEgg3.visible=false;
        
        _this.SmallEgg4 =_this.add.sprite(_this.world.centerX-254,_this.world.centerY-180,'Unity12_3_1SmallEgg');
        _this.SmallEgg4.anchor.setTo(0.5);
        _this.SmallEgg4.scale.setTo(1,1);
        _this.SmallEgg4.frame = 0;
        _this.SmallEgg4.name = "SmallEgg4";
        _this.SmallEgg4.visible=false;
        
        _this.SmallEgg5 =_this.add.sprite(_this.world.centerX-215,_this.world.centerY-180,'Unity12_3_1SmallEgg');
        _this.SmallEgg5.anchor.setTo(0.5);
        _this.SmallEgg5.scale.setTo(1,1);
        _this.SmallEgg5.frame = 0;
        _this.SmallEgg5.name = "SmallEgg5";
        _this.SmallEgg5.visible=false;
        
        
        /*******************************************/
        
        _this.SmallEgg6 =_this.add.sprite(_this.world.centerX-368,_this.world.centerY-142,'Unity12_3_1SmallEgg');
        _this.SmallEgg6.anchor.setTo(0.5);
        _this.SmallEgg6.scale.setTo(1,1);
        _this.SmallEgg6.frame = 0;
        _this.SmallEgg6.name = "SmallEgg6";
        _this.SmallEgg6.visible=false;
        
        //glow
        _this.SmallEgg2_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-142,'Unity12_3_1oneGlow');
        _this.SmallEgg2_glow1.anchor.setTo(0.5);
        _this.SmallEgg2_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg2_glow1.name = "SmallEgg2_glow";
        _this.SmallEgg2_glow1.visible=false;
        
        _this.SmallEgg2_glow1_two = _this.add.sprite(_this.world.centerX-350,_this.world.centerY-142,'Unity12_3_1twoGlow');
        _this.SmallEgg2_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg2_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg2_glow1_two.name = "SmallEgg2_glow_two";
        _this.SmallEgg2_glow1_two.visible=false;

        _this.SmallEgg2_glow1_three = _this.add.sprite(_this.world.centerX-330,_this.world.centerY-142,'Unity12_3_1threeGlow');
        _this.SmallEgg2_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg2_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg2_glow1_three.name = "SmallEgg2_glow_three";
        _this.SmallEgg2_glow1_three.visible=false;
        
        _this.SmallEgg2_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-142,'Unity12_3_1fourGlow');
        _this.SmallEgg2_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg2_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_four.frame = 0;
        _this.SmallEgg2_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg2_glow1_four.visible=false;
        
        _this.SmallEgg2_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY-142,'Unity12_3_1fiveGlow');
        _this.SmallEgg2_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg2_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_five.frame = 0;
        _this.SmallEgg2_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg2_glow1_five.visible=false;

       
        _this.SmallEgg7 =_this.add.sprite(_this.world.centerX-330,_this.world.centerY-142,'Unity12_3_1SmallEgg');
        _this.SmallEgg7.anchor.setTo(0.5);
        _this.SmallEgg7.scale.setTo(1,1);
        _this.SmallEgg7.frame = 0;
        _this.SmallEgg7.name = "SmallEgg7";
        _this.SmallEgg7.visible=false;
        
        _this.SmallEgg8 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-142,'Unity12_3_1SmallEgg');
        _this.SmallEgg8.anchor.setTo(0.5);
        _this.SmallEgg8.scale.setTo(1,1);
        _this.SmallEgg8.frame = 0;
        _this.SmallEgg8.name = "SmallEgg8";
        _this.SmallEgg8.visible=false;
        
        _this.SmallEgg9 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY-142,'Unity12_3_1SmallEgg');
        _this.SmallEgg9.anchor.setTo(0.5);
        _this.SmallEgg9.scale.setTo(1,1);
        _this.SmallEgg9.frame = 0;
        _this.SmallEgg9.name = "SmallEgg9";
        _this.SmallEgg9.visible=false;
        
        _this.SmallEgg10 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY-142,'Unity12_3_1SmallEgg');
        _this.SmallEgg10.anchor.setTo(0.5);
        _this.SmallEgg10.scale.setTo(1,1);
        _this.SmallEgg10.frame = 0;
        _this.SmallEgg10.name = "SmallEgg10";
        _this.SmallEgg10.visible=false;
        
        /*****************************************/
        
        _this.SmallEgg11 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-105,'Unity12_3_1SmallEgg');
        _this.SmallEgg11.anchor.setTo(0.5);
        _this.SmallEgg11.scale.setTo(1,1);
        _this.SmallEgg11.frame = 0;
        _this.SmallEgg11.name = "SmallEgg11";
        _this.SmallEgg11.visible=false;
        
        //glow
        _this.SmallEgg3_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-105,'Unity12_3_1oneGlow');
        _this.SmallEgg3_glow1.anchor.setTo(0.5);
        _this.SmallEgg3_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg3_glow1.name = "SmallEgg2_glow";
        _this.SmallEgg3_glow1.visible=false;

        _this.SmallEgg3_glow1_two = this.add.sprite(_this.world.centerX-350,_this.world.centerY-105,'Unity12_3_1twoGlow');
        _this.SmallEgg3_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg3_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg3_glow1_two.name = "SmallEgg2_glow_two";
        _this.SmallEgg3_glow1_two.visible=false;
        
        _this.SmallEgg3_glow1_three = this.add.sprite(_this.world.centerX-330,_this.world.centerY-105,'Unity12_3_1threeGlow');
        _this.SmallEgg3_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg3_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg3_glow1_three.name = "SmallEgg2_glow_three";
        _this.SmallEgg3_glow1_three.visible=false;
        
        _this.SmallEgg3_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-105,'Unity12_3_1fourGlow');
        _this.SmallEgg3_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg3_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg3_glow1_four.frame = 0;
        _this.SmallEgg3_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg3_glow1_four.visible=false;
        
        _this.SmallEgg3_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY-105,'Unity12_3_1fiveGlow');
        _this.SmallEgg3_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg3_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg3_glow1_five.frame = 0;
        _this.SmallEgg3_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg3_glow1_five.visible=false;

        
        _this.SmallEgg12 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY-105,'Unity12_3_1SmallEgg');
        _this.SmallEgg12.anchor.setTo(0.5);
        _this.SmallEgg12.scale.setTo(1,1);
        _this.SmallEgg12.frame = 0;
        _this.SmallEgg12.name = "SmallEgg12";
        _this.SmallEgg12.visible=false;
        
        _this.SmallEgg13 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-105,'Unity12_3_1SmallEgg');
        _this.SmallEgg13.anchor.setTo(0.5);
        _this.SmallEgg13.scale.setTo(1,1);
        _this.SmallEgg13.frame = 0;
        _this.SmallEgg13.name = "SmallEgg13";
        _this.SmallEgg13.visible=false;
        
        _this.SmallEgg14 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY-105,'Unity12_3_1SmallEgg');
        _this.SmallEgg14.anchor.setTo(0.5);
        _this.SmallEgg14.scale.setTo(1,1);
        _this.SmallEgg14.frame = 0;
        _this.SmallEgg14.name = "SmallEgg14";
        _this.SmallEgg14.visible=false;
        
        _this.SmallEgg15 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY-105,'Unity12_3_1SmallEgg');
        _this.SmallEgg15.anchor.setTo(0.5);
        _this.SmallEgg15.scale.setTo(1,1);
        _this.SmallEgg15.frame = 0;
        _this.SmallEgg15.name = "SmallEgg15";
        _this.SmallEgg15.visible=false;
        
        /****************************************/
        
        _this.SmallEgg16 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-65,'Unity12_3_1SmallEgg');
        _this.SmallEgg16.anchor.setTo(0.5);
        _this.SmallEgg16.scale.setTo(1,1);
        _this.SmallEgg16.frame = 0;
        _this.SmallEgg16.visible=false;
        _this.SmallEgg16.name = "SmallEgg16";
        
        //glow
        _this.SmallEgg4_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-65,'Unity12_3_1oneGlow');
        _this.SmallEgg4_glow1.anchor.setTo(0.5);
        _this.SmallEgg4_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg4_glow1.name = "SmallEgg4_glow";
        _this.SmallEgg4_glow1.visible=false;
        
        _this.SmallEgg4_glow1_two = this.add.sprite(_this.world.centerX-350,_this.world.centerY-65,'Unity12_3_1twoGlow');
        _this.SmallEgg4_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg4_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg4_glow1_two.name = "SmallEgg4_glow_two";
        _this.SmallEgg4_glow1_two.visible=false;
        
        _this.SmallEgg4_glow1_three = this.add.sprite(_this.world.centerX-330,_this.world.centerY-65,'Unity12_3_1threeGlow');
        _this.SmallEgg4_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg4_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg4_glow1_three.name = "SmallEgg4_glow_three";
        _this.SmallEgg4_glow1_three.visible=false;
        
        _this.SmallEgg4_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-65,'Unity12_3_1fourGlow');
        _this.SmallEgg4_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg4_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg4_glow1_four.frame = 0;
        _this.SmallEgg4_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg4_glow1_four.visible=false;
        
        _this.SmallEgg4_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY-65,'Unity12_3_1fiveGlow');
        _this.SmallEgg4_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg4_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg4_glow1_five.frame = 0;
        _this.SmallEgg4_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg4_glow1_five.visible=false;
        
        _this.SmallEgg17 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY-65,'Unity12_3_1SmallEgg');
        _this.SmallEgg17.anchor.setTo(0.5);
        _this.SmallEgg17.scale.setTo(1,1);
        _this.SmallEgg17.frame = 0;
        _this.SmallEgg17.visible=false;
        _this.SmallEgg17.name = "SmallEgg17";
        
        _this.SmallEgg18 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-65,'Unity12_3_1SmallEgg');
        _this.SmallEgg18.anchor.setTo(0.5);
        _this.SmallEgg18.scale.setTo(1,1);
        _this.SmallEgg18.frame = 0;
        _this.SmallEgg18.visible=false;
        _this.SmallEgg18.name = "SmallEgg18";
        
        _this.SmallEgg19 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY-65,'Unity12_3_1SmallEgg');
        _this.SmallEgg19.anchor.setTo(0.5);
        _this.SmallEgg19.scale.setTo(1,1);
        _this.SmallEgg19.frame = 0;
        _this.SmallEgg19.visible=false;
        _this.SmallEgg19.name = "SmallEgg19";
        
        _this.SmallEgg20 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY-65,'Unity12_3_1SmallEgg');
        _this.SmallEgg20.anchor.setTo(0.5);
        _this.SmallEgg20.scale.setTo(1,1);
        _this.SmallEgg20.frame = 0;
        _this.SmallEgg20.visible=false;
        _this.SmallEgg20.name = "SmallEgg20";
        
        /******************************************/
        
        _this.SmallEgg21 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-27,'Unity12_3_1SmallEgg');
        _this.SmallEgg21.anchor.setTo(0.5);
        _this.SmallEgg21.scale.setTo(1,1);
        _this.SmallEgg21.frame = 0;
        _this.SmallEgg21.visible=false;
        _this.SmallEgg21.name = "SmallEgg21";
        
        //glow
        _this.SmallEgg5_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY-27,'Unity12_3_1oneGlow');
        _this.SmallEgg5_glow1.anchor.setTo(0.5);
        _this.SmallEgg5_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg5_glow1.name = "SmallEgg4_glow";
        _this.SmallEgg5_glow1.visible=false;
        
        _this.SmallEgg5_glow1_two = this.add.sprite(_this.world.centerX-350,_this.world.centerY-27,'Unity12_3_1twoGlow');
        _this.SmallEgg5_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg5_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg5_glow1_two.name = "SmallEgg4_glow_two";
        _this.SmallEgg5_glow1_two.visible=false;
        
        _this.SmallEgg5_glow1_three = this.add.sprite(_this.world.centerX-330,_this.world.centerY-27,'Unity12_3_1threeGlow');
        _this.SmallEgg5_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg5_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg5_glow1_three.name = "SmallEgg4_glow_three";
        _this.SmallEgg5_glow1_three.visible=false;
        
        _this.SmallEgg5_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY-27,'Unity12_3_1fourGlow');
        _this.SmallEgg5_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg5_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg5_glow1_four.frame = 0;
        _this.SmallEgg5_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg5_glow1_four.visible=false;
        
        _this.SmallEgg5_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY-27,'Unity12_3_1fiveGlow');
        _this.SmallEgg5_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg5_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg5_glow1_five.frame = 0;
        _this.SmallEgg5_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg5_glow1_five.visible=false;
        
        _this.SmallEgg22 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY-27,'Unity12_3_1SmallEgg');
        _this.SmallEgg22.anchor.setTo(0.5);
        _this.SmallEgg22.scale.setTo(1,1);
        _this.SmallEgg22.frame = 0;
        _this.SmallEgg22.visible=false;
        _this.SmallEgg22.name = "SmallEgg22";
        
        _this.SmallEgg23 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY-27,'Unity12_3_1SmallEgg');
        _this.SmallEgg23.anchor.setTo(0.5);
        _this.SmallEgg23.scale.setTo(1,1);
        _this.SmallEgg23.frame = 0;
        _this.SmallEgg23.visible=false;
        _this.SmallEgg23.name = "SmallEgg23";
        
        _this.SmallEgg24 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY-27,'Unity12_3_1SmallEgg');
        _this.SmallEgg24.anchor.setTo(0.5);
        _this.SmallEgg24.scale.setTo(1,1);
        _this.SmallEgg24.frame = 0;
        _this.SmallEgg24.visible=false;
        _this.SmallEgg24.name = "SmallEgg24";
        
        _this.SmallEgg25 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY-27,'Unity12_3_1SmallEgg');
        _this.SmallEgg25.anchor.setTo(0.5);
        _this.SmallEgg25.scale.setTo(1,1);
        _this.SmallEgg25.frame = 0;
        _this.SmallEgg25.visible=false;
        _this.SmallEgg25.name = "SmallEgg25";
        
        /***********************************/
        
        _this.SmallEgg26 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+12,'Unity12_3_1SmallEgg');
        _this.SmallEgg26.anchor.setTo(0.5);
        _this.SmallEgg26.scale.setTo(1,1);
        _this.SmallEgg26.frame = 0;
        _this.SmallEgg26.visible=false;
        _this.SmallEgg26.name = "SmallEgg16";
        
         //glow
        _this.SmallEgg6_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+12,'Unity12_3_1oneGlow');
        _this.SmallEgg6_glow1.anchor.setTo(0.5);
        _this.SmallEgg6_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg6_glow1.name = "SmallEgg6_glow";
        _this.SmallEgg6_glow1.visible=false;
        
        _this.SmallEgg6_glow1_two = this.add.sprite(_this.world.centerX-350,_this.world.centerY+12,'Unity12_3_1twoGlow');
        _this.SmallEgg6_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg6_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg6_glow1_two.name = "SmallEgg6_glow_two";
        _this.SmallEgg6_glow1_two.visible=false;
             
        _this.SmallEgg6_glow1_three = this.add.sprite(_this.world.centerX-330,_this.world.centerY+12,'Unity12_3_1threeGlow');
        _this.SmallEgg6_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg6_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg6_glow1_three.name = "SmallEgg6_glow_three";
        _this.SmallEgg6_glow1_three.visible=false;
        
        _this.SmallEgg6_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY+12,'Unity12_3_1fourGlow');
        _this.SmallEgg6_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg6_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg6_glow1_four.frame = 0;
        _this.SmallEgg6_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg6_glow1_four.visible=false;
        
        _this.SmallEgg6_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY+12,'Unity12_3_1fiveGlow');
        _this.SmallEgg6_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg6_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg6_glow1_five.frame = 0;
        _this.SmallEgg6_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg6_glow1_five.visible=false;
        
        _this.SmallEgg27 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+12,'Unity12_3_1SmallEgg');
        _this.SmallEgg27.anchor.setTo(0.5);
        _this.SmallEgg27.scale.setTo(1,1);
        _this.SmallEgg27.frame = 0;
        _this.SmallEgg27.visible=false;
        _this.SmallEgg27.name = "SmallEgg27";
        
        _this.SmallEgg28 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY+12,'Unity12_3_1SmallEgg');
        _this.SmallEgg28.anchor.setTo(0.5);
        _this.SmallEgg28.scale.setTo(1,1);
        _this.SmallEgg28.frame = 0;
        _this.SmallEgg28.visible=false;
        _this.SmallEgg28.name = "SmallEgg28";
        
        _this.SmallEgg29 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY+12,'Unity12_3_1SmallEgg');
        _this.SmallEgg29.anchor.setTo(0.5);
        _this.SmallEgg29.scale.setTo(1,1);
        _this.SmallEgg29.frame = 0;
        _this.SmallEgg29.visible=false;
        _this.SmallEgg29.name = "SmallEgg29";
        
        _this.SmallEgg30 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY+12,'Unity12_3_1SmallEgg');
        _this.SmallEgg30.anchor.setTo(0.5);
        _this.SmallEgg30.scale.setTo(1,1);
        _this.SmallEgg30.frame = 0;
        _this.SmallEgg30.visible=false;
        _this.SmallEgg30.name = "SmallEgg30";
        
        /**************************************************/
        
        _this.SmallEgg31 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+50,'Unity12_3_1SmallEgg');
        _this.SmallEgg31.anchor.setTo(0.5);
        _this.SmallEgg31.scale.setTo(1,1);
        _this.SmallEgg31.frame = 0;
        _this.SmallEgg31.visible=false;
        _this.SmallEgg31.name = "SmallEgg19";
        
        //glow
        _this.SmallEgg7_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+50,'Unity12_3_1oneGlow');
        _this.SmallEgg7_glow1.anchor.setTo(0.5);
        _this.SmallEgg7_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg7_glow1.name = "SmallEgg6_glow";
        _this.SmallEgg7_glow1.visible=false;

        
        _this.SmallEgg7_glow1_two = this.add.sprite(_this.world.centerX-350,_this.world.centerY+50,'Unity12_3_1twoGlow');
        _this.SmallEgg7_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg7_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg7_glow1_two.name = "SmallEgg6_glow_two";
        _this.SmallEgg7_glow1_two.visible=false;

        
        _this.SmallEgg7_glow1_three = this.add.sprite(_this.world.centerX-330,_this.world.centerY+50,'Unity12_3_1threeGlow');
        _this.SmallEgg7_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg7_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg7_glow1_three.name = "SmallEgg6_glow_three";
        _this.SmallEgg7_glow1_three.visible=false;
        
        _this.SmallEgg7_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY+50,'Unity12_3_1fourGlow');
        _this.SmallEgg7_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg7_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg7_glow1_four.frame = 0;
        _this.SmallEgg7_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg7_glow1_four.visible=false;
        
        _this.SmallEgg7_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY+50,'Unity12_3_1fiveGlow');
        _this.SmallEgg7_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg7_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg7_glow1_five.frame = 0;
        _this.SmallEgg7_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg7_glow1_five.visible=false;
        
        
        _this.SmallEgg32 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+50,'Unity12_3_1SmallEgg');
        _this.SmallEgg32.anchor.setTo(0.5);
        _this.SmallEgg32.scale.setTo(1,1);
        _this.SmallEgg32.frame = 0;
        _this.SmallEgg32.visible=false;
        _this.SmallEgg32.name = "SmallEgg32";
        
        _this.SmallEgg33 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY+50,'Unity12_3_1SmallEgg');
        _this.SmallEgg33.anchor.setTo(0.5);
        _this.SmallEgg33.scale.setTo(1,1);
        _this.SmallEgg33.frame = 0;
        _this.SmallEgg33.visible=false;
        _this.SmallEgg33.name = "SmallEgg33";
        
        _this.SmallEgg34 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY+50,'Unity12_3_1SmallEgg');
        _this.SmallEgg34.anchor.setTo(0.5);
        _this.SmallEgg34.scale.setTo(1,1);
        _this.SmallEgg34.frame = 0;
        _this.SmallEgg34.visible=false;
        _this.SmallEgg34.name = "SmallEgg34";
        
        _this.SmallEgg35 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY+50,'Unity12_3_1SmallEgg');
        _this.SmallEgg35.anchor.setTo(0.5);
        _this.SmallEgg35.scale.setTo(1,1);
        _this.SmallEgg35.frame = 0;
        _this.SmallEgg35.visible=false;
        _this.SmallEgg35.name = "SmallEgg35";
        
        /****************************************************/
        
        _this.SmallEgg36 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+86,'Unity12_3_1SmallEgg');
        _this.SmallEgg36.anchor.setTo(0.5);
        _this.SmallEgg36.scale.setTo(1,1);
        _this.SmallEgg36.frame = 0;
        _this.SmallEgg36.visible=false;
        _this.SmallEgg36.name = "SmallEgg22";
        
         //glow
        _this.SmallEgg8_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+86,'Unity12_3_1oneGlow');
        _this.SmallEgg8_glow1.anchor.setTo(0.5);
        _this.SmallEgg8_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg8_glow1.name = "SmallEgg8_glow";
        _this.SmallEgg8_glow1.visible=false;

        _this.SmallEgg8_glow1_two = this.add.sprite(_this.world.centerX-350,_this.world.centerY+86,'Unity12_3_1twoGlow');
        _this.SmallEgg8_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg8_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg8_glow1_two.name = "SmallEgg8_glow_two";
        _this.SmallEgg8_glow1_two.visible=false;;

        _this.SmallEgg8_glow1_three = this.add.sprite(_this.world.centerX-330,_this.world.centerY+86,'Unity12_3_1threeGlow');
        _this.SmallEgg8_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg8_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg8_glow1_three.name = "SmallEgg8_glow_three";
        _this.SmallEgg8_glow1_three.visible=false;
        
        _this.SmallEgg8_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY+86,'Unity12_3_1fourGlow');
        _this.SmallEgg8_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg8_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg8_glow1_four.frame = 0;
        _this.SmallEgg8_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg8_glow1_four.visible=false;
        
        _this.SmallEgg8_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY+86,'Unity12_3_1fiveGlow');
        _this.SmallEgg8_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg8_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg8_glow1_five.frame = 0;
        _this.SmallEgg8_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg8_glow1_five.visible=false;

        _this.SmallEgg37 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+86,'Unity12_3_1SmallEgg');
        _this.SmallEgg37.anchor.setTo(0.5);
        _this.SmallEgg37.scale.setTo(1,1);
        _this.SmallEgg37.frame = 0;
        _this.SmallEgg37.visible=false;
        _this.SmallEgg37.name = "SmallEgg37";
        
        _this.SmallEgg38 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY+86,'Unity12_3_1SmallEgg');
        _this.SmallEgg38.anchor.setTo(0.5);
        _this.SmallEgg38.scale.setTo(1,1);
        _this.SmallEgg38.frame = 0;
        _this.SmallEgg38.visible=false;
        _this.SmallEgg38.name = "SmallEgg38";
        
        _this.SmallEgg39 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY+86,'Unity12_3_1SmallEgg');
        _this.SmallEgg39.anchor.setTo(0.5);
        _this.SmallEgg39.scale.setTo(1,1);
        _this.SmallEgg39.frame = 0;
        _this.SmallEgg39.visible=false;
        _this.SmallEgg39.name = "SmallEgg39";
        
        _this.SmallEgg40 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY+86,'Unity12_3_1SmallEgg');
        _this.SmallEgg40.anchor.setTo(0.5);
        _this.SmallEgg40.scale.setTo(1,1);
        _this.SmallEgg40.frame = 0;
        _this.SmallEgg40.visible=false;
        _this.SmallEgg40.name = "SmallEgg40";
        
        /****************************************/
        
        _this.SmallEgg41 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+124,'Unity12_3_1SmallEgg');
        _this.SmallEgg41.anchor.setTo(0.5);
        _this.SmallEgg41.scale.setTo(1,1);
        _this.SmallEgg41.frame = 0;
        _this.SmallEgg41.visible=false;
        _this.SmallEgg41.name = "SmallEgg25";
        
         //glow
        _this.SmallEgg9_glow1 = _this.add.sprite(_this.world.centerX-368,_this.world.centerY+124,'Unity12_3_1oneGlow');
        _this.SmallEgg9_glow1.anchor.setTo(0.5);
        _this.SmallEgg9_glow1.scale.setTo(1,1);
        //_this.SmallEgg2_glow1.frame = 0;
        _this.SmallEgg9_glow1.name = "SmallEgg8_glow";
        _this.SmallEgg9_glow1.visible=false;
        

        _this.SmallEgg9_glow1_two = this.add.sprite(_this.world.centerX-350,_this.world.centerY+124,'Unity12_3_1twoGlow');
        _this.SmallEgg9_glow1_two.anchor.setTo(0.5);
        _this.SmallEgg9_glow1_two.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_two.frame = 0;
        _this.SmallEgg9_glow1_two.name = "SmallEgg8_glow_two";
        _this.SmallEgg9_glow1_two.visible=false;
        
        
        _this.SmallEgg9_glow1_three = this.add.sprite(_this.world.centerX-330,_this.world.centerY+124,'Unity12_3_1threeGlow');
        _this.SmallEgg9_glow1_three.anchor.setTo(0.5);
        _this.SmallEgg9_glow1_three.scale.setTo(1,1);
        //_this.SmallEgg2_glow1_three.frame = 0;
        _this.SmallEgg9_glow1_three.name = "SmallEgg8_glow_three";
        _this.SmallEgg9_glow1_three.visible=false;
        
        _this.SmallEgg9_glow1_four= _this.add.sprite(_this.world.centerX-310,_this.world.centerY+124,'Unity12_3_1fourGlow');
        _this.SmallEgg9_glow1_four.anchor.setTo(0.5);
        _this.SmallEgg9_glow1_four.scale.setTo(1,1);
        //_this.SmallEgg9_glow1_four.frame = 0;
        _this.SmallEgg9_glow1_four.name = "SmallEgg2_glow_three";
        _this.SmallEgg9_glow1_four.visible=false;
        
        _this.SmallEgg9_glow1_five= _this.add.sprite(_this.world.centerX-292,_this.world.centerY+124,'Unity12_3_1fiveGlow');
        _this.SmallEgg9_glow1_five.anchor.setTo(0.5);
        _this.SmallEgg9_glow1_five.scale.setTo(1,1);
        //_this.SmallEgg9_glow1_five.frame = 0;
        _this.SmallEgg9_glow1_five.name = "SmallEgg2_glow_three";
        _this.SmallEgg9_glow1_five.visible=false;
        
        _this.SmallEgg42 = _this.add.sprite(_this.world.centerX-330,_this.world.centerY+124,'Unity12_3_1SmallEgg');
        _this.SmallEgg42.anchor.setTo(0.5);
        _this.SmallEgg42.scale.setTo(1,1);
        _this.SmallEgg42.frame = 0;
        _this.SmallEgg42.visible=false;
        _this.SmallEgg42.name = "SmallEgg42";
        
        _this.SmallEgg43 = _this.add.sprite(_this.world.centerX-290,_this.world.centerY+124,'Unity12_3_1SmallEgg');
        _this.SmallEgg43.anchor.setTo(0.5);
        _this.SmallEgg43.scale.setTo(1,1);
        _this.SmallEgg43.frame = 0;
        _this.SmallEgg43.visible=false;
        _this.SmallEgg43.name = "SmallEgg43";
        
        _this.SmallEgg44 = _this.add.sprite(_this.world.centerX-254,_this.world.centerY+124,'Unity12_3_1SmallEgg');
        _this.SmallEgg44.anchor.setTo(0.5);
        _this.SmallEgg44.scale.setTo(1,1);
        _this.SmallEgg44.frame = 0;
        _this.SmallEgg44.visible=false;
        _this.SmallEgg44.name = "SmallEgg44";
        
        _this.SmallEgg45 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY+124,'Unity12_3_1SmallEgg');
        _this.SmallEgg45.anchor.setTo(0.5);
        _this.SmallEgg45.scale.setTo(1,1);
        _this.SmallEgg45.frame = 0;
        _this.SmallEgg45.visible=false;
        _this.SmallEgg45.name = "SmallEgg45";
        /*********************************************/
        
        //drag egg
        _this.SmallEgg1_1 = _this.add.sprite(_this.world.centerX-350,_this.world.centerY+230,'Unity12_3_1SmallEgg');
        _this.SmallEgg1_1.anchor.setTo(0.5);
        _this.SmallEgg1_1.scale.setTo(1,1);
        _this.SmallEgg1_1.name = "SmallEgg1_1";
        //_this.SmallEgg1_1.visible=false;
        
        _this.SmallEgg1_2 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY+230,'Unity12_3_1SmallEgg');
        _this.SmallEgg1_2.anchor.setTo(0.5);
        _this.SmallEgg1_2.scale.setTo(1,1);
        _this.SmallEgg1_2.name = "SmallEgg1_2";
        //_this.SmallEgg1_2.visible=false;
       
        _this.SmallEgg1_3 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+230,'Unity12_3_1SmallEgg');
        _this.SmallEgg1_3.anchor.setTo(0.5);
        _this.SmallEgg1_3.scale.setTo(1,1);
        _this.SmallEgg1_3.name = "SmallEgg1_3";
        //_this.SmallEgg1_3.visible=false;
        
        _this.SmallEgg1_4 = _this.add.sprite(_this.world.centerX-275,_this.world.centerY+230,'Unity12_3_1SmallEgg');
        _this.SmallEgg1_4.anchor.setTo(0.5);
        _this.SmallEgg1_4.scale.setTo(1,1);
        _this.SmallEgg1_4.name = "SmallEgg1_4";
        //_this.SmallEgg1_4.visible=false;
        
        _this.SmallEgg1_5 = _this.add.sprite(_this.world.centerX-250,_this.world.centerY+230,'Unity12_3_1SmallEgg');
        _this.SmallEgg1_5.anchor.setTo(0.5);
        _this.SmallEgg1_5.scale.setTo(1,1);
        _this.SmallEgg1_5.name = "SmallEgg1_5";
        //_this.SmallEgg1_5.visible=false;
       
        if(_this.randomno == 4)
        {
            _this.SmallEgg1_5.visible = false;
        }
            
        else if(_this.randomno == 3)
        {
            _this.SmallEgg1_5.visible = false;
            _this.SmallEgg1_4.visible = false;
        }
        else if(_this.randomno == 2)
        {
            _this.SmallEgg1_5.visible = false;
            _this.SmallEgg1_4.visible = false;
            _this.SmallEgg1_3.visible = false;
        }
        else if(_this.randomno == 1)
        {
            _this.SmallEgg1_5.visible = false;
            _this.SmallEgg1_4.visible = false;
            _this.SmallEgg1_3.visible = false;
            _this.SmallEgg1_2.visible = false;
        }
                
        _this.SmallEggGrp = _this.add.group();
        _this.DragEggGrp = _this.add.group();
        
        _this.SmallEggGrp.add(_this.SmallEgg1);
        _this.SmallEggGrp.add(_this.SmallEgg2);
        _this.SmallEggGrp.add(_this.SmallEgg3);
        _this.SmallEggGrp.add(_this.SmallEgg4);
        _this.SmallEggGrp.add(_this.SmallEgg5);
        _this.SmallEggGrp.add(_this.SmallEgg6);
        _this.SmallEggGrp.add(_this.SmallEgg7);
        _this.SmallEggGrp.add(_this.SmallEgg8);
        _this.SmallEggGrp.add(_this.SmallEgg9);
        _this.SmallEggGrp.add(_this.SmallEgg10);
        _this.SmallEggGrp.add(_this.SmallEgg11);
        _this.SmallEggGrp.add(_this.SmallEgg12);
        _this.SmallEggGrp.add(_this.SmallEgg13);
        _this.SmallEggGrp.add(_this.SmallEgg14);
        _this.SmallEggGrp.add(_this.SmallEgg15);
        _this.SmallEggGrp.add(_this.SmallEgg16);
        _this.SmallEggGrp.add(_this.SmallEgg17);
        _this.SmallEggGrp.add(_this.SmallEgg18);
        _this.SmallEggGrp.add(_this.SmallEgg19);
        _this.SmallEggGrp.add(_this.SmallEgg20);
        _this.SmallEggGrp.add(_this.SmallEgg21);
        _this.SmallEggGrp.add(_this.SmallEgg22);
        _this.SmallEggGrp.add(_this.SmallEgg23);
        _this.SmallEggGrp.add(_this.SmallEgg24);
        _this.SmallEggGrp.add(_this.SmallEgg25);
        _this.SmallEggGrp.add(_this.SmallEgg26);
        _this.SmallEggGrp.add(_this.SmallEgg27);
        _this.SmallEggGrp.add(_this.SmallEgg28);
        _this.SmallEggGrp.add(_this.SmallEgg29);
        _this.SmallEggGrp.add(_this.SmallEgg30);
        _this.SmallEggGrp.add(_this.SmallEgg31);
        _this.SmallEggGrp.add(_this.SmallEgg32);
        _this.SmallEggGrp.add(_this.SmallEgg33);
        _this.SmallEggGrp.add(_this.SmallEgg34);
        _this.SmallEggGrp.add(_this.SmallEgg35);
        _this.SmallEggGrp.add(_this.SmallEgg36);
        _this.SmallEggGrp.add(_this.SmallEgg37);
        _this.SmallEggGrp.add(_this.SmallEgg38);
        _this.SmallEggGrp.add(_this.SmallEgg39);
        _this.SmallEggGrp.add(_this.SmallEgg40);
        _this.SmallEggGrp.add(_this.SmallEgg41);
        _this.SmallEggGrp.add(_this.SmallEgg42);
        _this.SmallEggGrp.add(_this.SmallEgg43);
        _this.SmallEggGrp.add(_this.SmallEgg44);
        _this.SmallEggGrp.add(_this.SmallEgg45);
        
        _this.DragEggGrp.add(_this.SmallEgg1_1);
        _this.DragEggGrp.add(_this.SmallEgg1_2);
        _this.DragEggGrp.add(_this.SmallEgg1_3);
        _this.DragEggGrp.add(_this.SmallEgg1_4);
        _this.DragEggGrp.add(_this.SmallEgg1_5);
      
        var graphics = this.add.graphics(0, 0);
        graphics.lineStyle(2, 0x0000FF, 0);
        graphics.beginFill(0xFF700B, 0);
      
       
        graphics.addChild(_this.DragEggGrp);
        //graphics.alpha = 0;
        graphics.inputEnabled = true;
        graphics.visible = false;
        graphics.input.priorityID = 1;
        graphics.events.onInputDown.add(_this.onDragStart,_this);
        
        // bulb glow
        _this.EggVisiblebtn = _this.add.sprite(_this.world.centerX+400,_this.world.centerY-250,'Unity12_3_1bulb');
        _this.EggVisiblebtn.anchor.setTo(0.5);
        _this.EggVisiblebtn.scale.setTo(0.7,0.7);
        
        _this.anim= _this.EggVisiblebtn.animations.add('walk');
        _this.anim.play(10, true);
        
        _this.EggVisiblebtn.inputEnabled = true;
        _this.EggVisiblebtn.events.onInputDown.add(function()
        {
            //console.log("click button ");
            _this.MovePadnumber = _this.add.tween(_this.addNumberPadGrp).to( { x: 250 }, 1500, "Quart.easeOut");
            _this.MovePadnumber.start();
            
            _this.click1 = this.add.audio('ClickSound');
            _this.click1.play();
            
             _this.time.events.add(1500, function()
             {
                    _this.Eggbox.visible = true;
                 
                    if(_this.randomno == 4)
                    {
                        graphics.drawRect(_this.world.centerX-370,_this.world.centerY+200, 60, 50);
                        _this.SmallEgg1_Glow_four.frame=1;
                        _this.SmallEgg1_Glow_four.visible=true;
                    }
                    else if(_this.randomno == 3)
                    {
                        graphics.drawRect(_this.world.centerX-370,_this.world.centerY+200, 60, 50);
                        _this.SmallEgg1_Glow_three.frame=1;
                        _this.SmallEgg1_Glow_three.visible=true;

                    }
                    else if(_this.randomno == 2)
                    {
                        graphics.drawRect(_this.world.centerX-370,_this.world.centerY+200, 60, 50);
                        _this.SmallEgg1_Glow_two.frame=1;
                        _this.SmallEgg1_Glow_two.visible=true;

                    }
                    else if(_this.randomno == 1)
                    {
                        graphics.drawRect(_this.world.centerX-370,_this.world.centerY+200, 35, 50);
                        _this.SmallEgg1_Glow.frame=1;
                        _this.SmallEgg1_Glow.visible=true;
                    }
                    else
                    {
                        graphics.drawRect(_this.world.centerX-370,_this.world.centerY+200, 85, 50);
                        _this.SmallEgg1_Glow_five.frame = 1;
                        _this.SmallEgg1_Glow_five.visible=true;
                    }

                 
                    graphics.visible = true;
                 
             }, this);
           
        },_this);
    },
    
    addNumberPad:function()
    {
        //console.log("addNumberPad");
    
        _this.pressed = 0;
        _this.dragged = false;

        _this.Numberbox= _this.add.sprite(_this.world.centerX,_this.world.centerY+20,'Unity12_3_1Number_box');
        _this.Numberbox.anchor.setTo(0.5)
        _this.Numberbox.scale.setTo(1,1);
        _this.Numberbox.name="Unity12_3_1Number_box";
        
        _this.AnswerGrp = _this.add.group();
        _this.addNumberPadGrp = _this.add.group();
        
        //_this.shuffleNumbers();
        
        // number multiplication
        _this.framesChange = [1,2,3,4,5];
        _this.framesChange = this.shuffle(_this.framesChange);

        _this.FirstNumbers = _this.add.sprite(_this.world.centerX-110,_this.world.centerY-140,'Unity12_3_1greenNumbers');
        _this.FirstNumbers.name="FirstNumbers";
        _this.FirstNumbers.anchor.setTo(0.5);
    	//_this.FirstNumbers.scale.setTo(0.7,0.7);
   
        _this.FirstNumbers.frame = _this.framesChange[0];
       
        _this.framesChange1 = [1,2,3,4,5,7,8,9];
        _this.framesChange1 = _this.shuffle(_this.framesChange1);

        _this.SecondNumbers = _this.add.sprite(_this.world.centerX-30,_this.world.centerY-140,'Unity12_3_1greenNumbers');
        _this.SecondNumbers.name="SecondNumbers";
        _this.SecondNumbers.anchor.setTo(0.5);
    	//_this.SecondNumbers.scale.setTo(0.7,0.7);
        _this.SecondNumbers.frame = _this.framesChange1[0]-1;
        /*********************************************************/
        
        _this.FirstNumbers.frame =(_this.randomno-1);
        
        //console.log("first no b4=="+_this.randomno);
        //console.log("second no b4=="+_this.framesChange1[0]);

        _this.multiplication =_this.randomno *_this.framesChange1[0];
        //console.log("Multiplication no =="+_this.multiplication);
    
        _this.Multiplicationsign=_this.add.sprite(_this.world.centerX-70,_this.world.centerY-140,'Unity12_3_1Multiplicationsign');
        _this.Multiplicationsign.name="Unity12_3_1Multiplicationsign";
        _this.Multiplicationsign.anchor.setTo(0.5);
        //_this.Multiplicationsign.scale.setTo(1,1);
      
        _this.EqualSymbol = _this.add.sprite(_this.world.centerX+10,_this.world.centerY-140,'Unity12_3_1EqualSymbol');
        _this.EqualSymbol.name="Unity12_3_1EqualSymbol";
        _this.EqualSymbol.anchor.setTo(0.5);
       
        _this.txtbox =_this.add.sprite(_this.world.centerX+90,_this.world.centerY-145,'Unity12_3_1Txtbox');
        _this.txtbox.name="AnswerBox";
        _this.txtbox.anchor.setTo(0.5);
        _this.txtbox.scale.setTo(0.8,0.8);
        
        // numbers 0 to 9
        _this.calNum1=this.add.sprite(_this.world.centerX-90,_this.world.centerY-53,'Unity12_3_1Numbers');
        _this.calNum1.name="1";
        _this.calNum1.anchor.setTo(0.5);
        _this.calNum1.scale.setTo(0.7,0.7);
        _this.calNum1.frame = 1;
        _this.calNum1.inputEnabled=true;
        _this.calNum1.input.useHandCursor = true;
        _this.calNum1.events.onInputDown.add(_this.numClicked,_this);
        
        _this.calNum2=_this.add.sprite(_this.world.centerX,_this.world.centerY-53,'Unity12_3_1Numbers');
        _this.calNum2.name="2";
        _this.calNum2.anchor.setTo(0.5);
        _this.calNum2.scale.setTo(0.7,0.7);
        _this.calNum2.frame=2;
        _this.calNum2.inputEnabled=true;
        _this.calNum2.input.useHandCursor = true;
        _this.calNum2.events.onInputDown.add(_this.numClicked,_this);
       
        _this.calNum3=_this.add.sprite(_this.world.centerX+90,_this.world.centerY-53,'Unity12_3_1Numbers');
        _this.calNum3.name="3";
        _this.calNum3.anchor.setTo(0.5);
        _this.calNum3.scale.setTo(0.7,0.7);
        _this.calNum3.frame=3;
        _this.calNum3.inputEnabled=true;
        _this.calNum3.input.useHandCursor = true;
        _this.calNum3.events.onInputDown.add(_this.numClicked,_this);
       
        _this.calNum4=_this.add.sprite(_this.world.centerX-90,_this.world.centerY+30,'Unity12_3_1Numbers');
        _this.calNum4.name="4";
        _this.calNum4.anchor.setTo(0.5);
        _this.calNum4.scale.setTo(0.7,0.7);
        _this.calNum4.frame=4;
        _this.calNum4.inputEnabled=true;
        _this.calNum4.input.useHandCursor = true;
        _this.calNum4.events.onInputDown.add(_this.numClicked,_this);
       
        _this.calNum5=_this.add.sprite(_this.world.centerX,_this.world.centerY+30,'Unity12_3_1Numbers');
        _this.calNum5.name="5";
        _this.calNum5.anchor.setTo(0.5);
        _this.calNum5.scale.setTo(0.7,0.7);
        _this.calNum5.frame=5;
        _this.calNum5.inputEnabled=true;
        _this.calNum5.input.useHandCursor = true;
        _this.calNum5.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum6=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+30,'Unity12_3_1Numbers');
        _this.calNum6.name="6";
        _this.calNum6.anchor.setTo(0.5);
        _this.calNum6.scale.setTo(0.7,0.7);
        _this.calNum6.frame=6;
        _this.calNum6.inputEnabled=true;
        _this.calNum6.input.useHandCursor = true;
        _this.calNum6.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum7=_this.add.sprite(_this.world.centerX-90,_this.world.centerY+115,'Unity12_3_1Numbers');
        _this.calNum7.name="7";
        _this.calNum7.anchor.setTo(0.5);
        _this.calNum7.scale.setTo(0.7,0.7);
        _this.calNum7.frame=7;
        _this.calNum7.inputEnabled=true;
        _this.calNum7.input.useHandCursor = true;
        _this.calNum7.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum8=_this.add.sprite(_this.world.centerX,_this.world.centerY+115,'Unity12_3_1Numbers');
        _this.calNum8.name="8";
        _this.calNum8.anchor.setTo(0.5);
        _this.calNum8.scale.setTo(0.7,0.7);
        _this.calNum8.frame = 8;
        _this.calNum8.inputEnabled=true;
        _this.calNum8.input.useHandCursor = true;
        _this.calNum8.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum9=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+115,'Unity12_3_1Numbers');
        _this.calNum9.name="9";
        _this.calNum9.anchor.setTo(0.5);
        _this.calNum9.scale.setTo(0.7,0.7);
        _this.calNum9.frame=9;
        _this.calNum9.inputEnabled=true;
        _this.calNum9.input.useHandCursor = true;
        _this.calNum9.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum0=_this.add.sprite(_this.world.centerX-90,_this.world.centerY+200,'Unity12_3_1Numbers');
        _this.calNum0.name="0";
        _this.calNum0.anchor.setTo(0.5);
        _this.calNum0.scale.setTo(0.7,0.7);
        _this.calNum0.frame = 0;
        _this.calNum0.inputEnabled=true;
        _this.calNum0.input.useHandCursor = true;
        _this.calNum0.events.onInputDown.add(_this.numClicked,_this);

        //console.log("pressed== :"+_this.pressed);
        
        _this.enterTxt = _this.add.text(-2,1, _this.selectedAns);
        _this.enterTxt.anchor.setTo(0.5);
        //_this.enterTxt.scale.setTo(0.9,1);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "myfont";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fontSize = 70;
        _this.enterTxt.fill = '#0199a3';
        _this.enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox.addChild(_this.enterTxt);
        
        _this.AnswerGrp.add(_this.txtbox);
        
        _this.eraser=_this.add.sprite(_this.world.centerX+2,_this.world.centerY+205,'Unity12_3_1Eraser');
        _this.eraser.name="Eraser";
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.4,1.4);
        _this.eraser.frame = 0;
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
        _this.eraser.events.onInputDown.add(function(){
            _this.click1 = this.add.audio('ClickSound');
            _this.click1.play();
            _this.eraser.frame=1;
            _this.enterTxt.setText("");
            _this.selectedAns="";
            
            _this.time.events.add(500, function(){
                _this.eraser.frame=0;
            },this);
            _this.txtbox.frame = 0;

        },this);
       
        _this.tick =_this.add.sprite(_this.world.centerX+90,_this.world.centerY+205,'Unity12_3_1Tick');
        _this.tick.name="tick";
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.4,1.4);
        _this.tick.frame = 0;
        _this.tick.inputEnabled=true;
        _this.tick.input.useHandCursor = true;
        
        _this.tick.events.onInputDown.add(function(){
            _this.noofAttempts++;
            _this.tick.frame=1;
           _this.click1 = this.add.audio('ClickSound');
            _this.click1.play();
            
            //console.log("selectedAns :"+_this.selectedAns);
            //console.log("Answer :"+_this.multiplication);
            
            _this.time.events.add(500, function(){
                _this.tick.frame=0;
            if(_this.selectedAns==_this.multiplication||_this.selectedAns=="0"+_this.multiplication||_this.selectedAns=="00"+_this.multiplication)  
            {
                //console.log("correct");
                //target.events.onInputDown.removeAll();
                 if(_this.timer)
                {
                    _this.timer.stop();
                    _this.timer = null;
                }

                telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                
                _this.speakerbtn.inputEnabled=false;
                _this.celebration = true;

                _this.click3 = _this.add.audio('ClickSound');
                _this.click3.play();

                _this.cmusic = _this.add.audio('celebr');
                _this.cmusic.play();
            
                /*********************************************/
                
                _this.time.events.add(2000, _this.removeEverthing, _this);

                _this.staranim = _this.starsGroup.getChildAt(_this.count1);
                _this.staranim.smoothed = false;
                _this.anim4 = _this.staranim.animations.add('star');
                _this.anim4.play();
        
                _this.selectedAns = "";
            }
            else
            {
                //console.log("wrong");
                
                _this.selectedAns = "";
                _this.enterTxt.setText("");
                
                _this.addNumberPadGrp.x = _this.addNumberPadGrp.x+480;
                _this.addNumberPadGrp.y = _this.addNumberPadGrp.y+270;
                _this.addNumberPadGrp.pivot.setTo(this.world.centerX,this.world.centerY);

                var tween = _this.add.tween(_this.addNumberPadGrp);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.addNumberPadGrp);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.addNumberPadGrp);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.addNumberPadGrp);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.addNumberPadGrp.angle = 0;
                                     _this.addNumberPadGrp.x = _this.addNumberPadGrp.x-480;
                                     _this.addNumberPadGrp.y = _this.addNumberPadGrp.y-270;
                                    _this.addNumberPadGrp.pivot.setTo(0,0);
                                }, _this);
                            }, _this);
                        }, _this);
                }, _this);
                
               /*  var tween = _this.add.tween(_this.FirstNumbers);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.FirstNumbers);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.FirstNumbers);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.FirstNumbers);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.FirstNumbers.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.SecondNumbers);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.SecondNumbers);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.SecondNumbers);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.SecondNumbers);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.SecondNumbers.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.Multiplicationsign);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.Multiplicationsign);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.Multiplicationsign);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.Multiplicationsign);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.Multiplicationsign.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.EqualSymbol);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.EqualSymbol);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.EqualSymbol);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.EqualSymbol);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.EqualSymbol.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.txtbox);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.txtbox);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.txtbox);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.txtbox);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.txtbox.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.calNum1);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum1);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum1);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum1);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum1.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.calNum2);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum2);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum2);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum2);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum2.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.calNum3);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum3);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum3);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum3);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum3.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.calNum4);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum4);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum4);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum4);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum4.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.calNum5);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum5);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum5);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum5);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum5.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.calNum6);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum6);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum6);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum6);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum6.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.calNum7);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum7);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum7);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum7);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum7.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.calNum8);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum8);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum8);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum8);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum8.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.calNum9);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum9);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum9);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum9);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum9.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.calNum0);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.calNum0);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.calNum0);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.calNum0);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.calNum0.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                var tween = _this.add.tween(_this.eraser);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.eraser);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.eraser);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.eraser);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.eraser.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);
                
                 var tween = _this.add.tween(_this.tick);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                       var tween1 = _this.add.tween(_this.tick);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.tick);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.tick);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.tick.angle = 0;
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);*/
                
                
                _this.click4 = _this.add.audio('ClickSound');
                _this.click4.play();

                _this.wmusic = _this.add.audio('waudio');
                _this.wmusic.play();

                _this.timer1.stop();

            }

            },this);
        },this);
        
        
        _this.addNumberPadGrp.add(_this.Numberbox);
        _this.addNumberPadGrp.add(_this.FirstNumbers);
        _this.addNumberPadGrp.add(_this.SecondNumbers);
        
        _this.addNumberPadGrp.add(_this.Multiplicationsign);
        _this.addNumberPadGrp.add(_this.EqualSymbol);
        _this.addNumberPadGrp.add(_this.AnswerGrp);
        
        _this.addNumberPadGrp.add(_this.calNum1);
        _this.addNumberPadGrp.add(_this.calNum2);
        _this.addNumberPadGrp.add(_this.calNum3);
        _this.addNumberPadGrp.add(_this.calNum4);
        _this.addNumberPadGrp.add(_this.calNum5);
        _this.addNumberPadGrp.add(_this.calNum6);
        _this.addNumberPadGrp.add(_this.calNum7);
        _this.addNumberPadGrp.add(_this.calNum8);
        _this.addNumberPadGrp.add(_this.calNum9);
        _this.addNumberPadGrp.add(_this.calNum0);
        _this.addNumberPadGrp.add(_this.eraser);
        _this.addNumberPadGrp.add(_this.tick);

    },
    
    numClicked:function(target)
    {
        //console.log("numClicked name"+target.name);
       // target.frame = 1;
        _this.click4 = _this.add.audio('ClickSound');
                _this.click4.play();
        if(_this.selectedAns.length<2)
        {
            _this.selectedAns += target.name;
            _this.AnswerGrp.getByName("AnswerBox").getChildAt(0).setText(_this.selectedAns);
        }
    },
    
 	changeQuestion:function()
	{
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    }, 
    
    removeEverthing:function() 
    {
        
        //console.log("removeEverthing");
        _this.wrong = true;
        _this.checkEgg = 0;
        //console.log("checkEgg :"+_this.checkEgg);
      
        _this.no11++;
        _this.addEgg++;
        _this.count1++;
        //console.log("Question Number :"+_this.no11);
        
        _this.Eggbox.visible = false;
        
        _this.SmallEgg1_Glow.visible=false;
        _this.SmallEgg1_Glow_two.visible=false;
        _this.SmallEgg1_Glow_three.visible=false;
        _this.SmallEgg1_Glow_four.visible=false;
        _this.SmallEgg1_Glow_five.visible=false;

        _this.SmallEgg2_glow1.visible=false;
        _this.SmallEgg2_glow1_two.visible=false;
        _this.SmallEgg2_glow1_three.visible=false;
        _this.SmallEgg2_glow1_four.visible=false;
        _this.SmallEgg2_glow1_five.visible=false;

        _this.SmallEgg3_glow1.visible=false;
        _this.SmallEgg3_glow1_two.visible=false;
        _this.SmallEgg3_glow1_three.visible=false;
        _this.SmallEgg3_glow1_four.visible=false;
        _this.SmallEgg3_glow1_five.visible=false;

        _this.SmallEgg4_glow1.visible=false;
        _this.SmallEgg4_glow1_two.visible=false;
        _this.SmallEgg4_glow1_three.visible=false;
        _this.SmallEgg4_glow1_four.visible=false;
        _this.SmallEgg4_glow1_five.visible=false;

        _this.SmallEgg5_glow1.visible=false;
        _this.SmallEgg5_glow1_two.visible=false;
        _this.SmallEgg5_glow1_three.visible=false;
        _this.SmallEgg5_glow1_four.visible=false;
        _this.SmallEgg5_glow1_five.visible=false;

        _this.SmallEgg6_glow1.visible=false;;
        _this.SmallEgg6_glow1_two.visible=false;
        _this.SmallEgg6_glow1_three.visible=false;
        _this.SmallEgg6_glow1_four.visible=false;
        _this.SmallEgg6_glow1_five.visible=false;

        _this.SmallEgg7_glow1.visible=false;
        _this.SmallEgg7_glow1_two.visible=false;
        _this.SmallEgg7_glow1_three.visible=false;
        _this.SmallEgg7_glow1_four.visible=false;
        _this.SmallEgg7_glow1_five.visible=false;

        _this.SmallEgg8_glow1.visible=false;
        _this.SmallEgg8_glow1_two.visible=false;
        _this.SmallEgg8_glow1_three.visible=false;
        _this.SmallEgg8_glow1_four.visible=false;
        _this.SmallEgg8_glow1_five.visible=false;

        _this.SmallEgg9_glow1.visible=false;
        _this.SmallEgg9_glow1_two.visible=false;
        _this.SmallEgg9_glow1_three.visible=false;
        _this.SmallEgg9_glow1_four.visible=false;
        _this.SmallEgg9_glow1_five.visible=false;

        if(_this.no11<6)
        {
            _this.timer1.stop();

            //console.log("inside removeEverthing");

            _this.AnswerGrp.destroy();
            _this.SmallEggGrp.destroy();
            _this.DragEggGrp.destroy();
            _this.addNumberPadGrp.destroy();
            //_this.Eggbox.destroy();
            _this.Eggbox.visible = false;

            _this.tick.events.onInputDown.removeAll();
        
            _this.eraser.events.onInputDown.removeAll();

            _this.calnum1=null;
            _this.calnum2=null;
            _this.calnum3=null;
            _this.calnum4=null;
            _this.calnum5=null;
            _this.calnum6=null;
            _this.calnum7=null;
            _this.calnum8=null;
            _this.calnum9=null;
            _this.calnum0=null;

            _this.SmallEgg1=null;_this.SmallEgg2=null;_this.SmallEgg3=null;
            _this.SmallEgg4=null;_this.SmallEgg5=null;_this.SmallEgg6=null;
            _this.SmallEgg7=null;_this.SmallEgg8=null;_this.SmallEgg9=null;
            _this.SmallEgg10=null;_this.SmallEgg11=null;_this.SmallEgg12=null;
            _this.SmallEgg13=null;_this.SmallEgg14=null;_this.SmallEgg15=null;
            _this.SmallEgg16=null;_this.SmallEgg17=null;_this.SmallEgg18=null;
            _this.SmallEgg19=null;_this.SmallEgg20=null;_this.SmallEgg21=null;
            _this.SmallEgg22=null;_this.SmallEgg23=null;_this.SmallEgg24=null;
            _this.SmallEgg25=null;_this.SmallEgg26=null;_this.SmallEgg27=null;
            _this.SmallEgg28=null;_this.SmallEgg29=null;_this.SmallEgg30=null;
            _this.SmallEgg31=null;_this.SmallEgg32=null;_this.SmallEgg33=null;
            _this.SmallEgg34=null;_this.SmallEgg35=null;_this.SmallEgg36=null;
            _this.SmallEgg37=null;_this.SmallEgg38=null;_this.SmallEgg39=null;
            _this.SmallEgg40=null;_this.SmallEgg41=null;_this.SmallEgg42=null;
            _this.SmallEgg43=null;_this.SmallEgg44=null;_this.SmallEgg45=null;
            
            _this.SmallEgg1_Glow.visible=false;
            _this.SmallEgg1_Glow_two.visible=false;
            _this.SmallEgg1_Glow_three.visible=false;
            _this.SmallEgg1_Glow_four.visible=false;
            _this.SmallEgg1_Glow_five.visible=false;

            _this.SmallEgg2_glow1.visible=false;
            _this.SmallEgg2_glow1_two.visible=false;
            _this.SmallEgg2_glow1_three.visible=false;
            _this.SmallEgg2_glow1_four.visible=false;
            _this.SmallEgg2_glow1_five.visible=false;

            _this.SmallEgg3_glow1.visible=false;
            _this.SmallEgg3_glow1_two.visible=false;
            _this.SmallEgg3_glow1_three.visible=false;
            _this.SmallEgg3_glow1_four.visible=false;
            _this.SmallEgg3_glow1_five.visible=false;

            _this.SmallEgg4_glow1.visible=false;
            _this.SmallEgg4_glow1_two.visible=false;
            _this.SmallEgg4_glow1_three.visible=false;
            _this.SmallEgg4_glow1_four.visible=false;
            _this.SmallEgg4_glow1_five.visible=false;

            _this.SmallEgg5_glow1.visible=false;
            _this.SmallEgg5_glow1_two.visible=false;
            _this.SmallEgg5_glow1_three.visible=false;
            _this.SmallEgg5_glow1_four.visible=false;
            _this.SmallEgg5_glow1_five.visible=false;

            _this.SmallEgg6_glow1.visible=false;;
            _this.SmallEgg6_glow1_two.visible=false;
            _this.SmallEgg6_glow1_three.visible=false;
            _this.SmallEgg6_glow1_four.visible=false;
            _this.SmallEgg6_glow1_five.visible=false;

            _this.SmallEgg7_glow1.visible=false;
            _this.SmallEgg7_glow1_two.visible=false;
            _this.SmallEgg7_glow1_three.visible=false;
            _this.SmallEgg7_glow1_four.visible=false;
            _this.SmallEgg7_glow1_five.visible=false;

            _this.SmallEgg8_glow1.visible=false;
            _this.SmallEgg8_glow1_two.visible=false;
            _this.SmallEgg8_glow1_three.visible=false;
            _this.SmallEgg8_glow1_four.visible=false;
            _this.SmallEgg8_glow1_five.visible=false;

            _this.SmallEgg9_glow1.visible=false;
            _this.SmallEgg9_glow1_two.visible=false;
            _this.SmallEgg9_glow1_three.visible=false;
            _this.SmallEgg9_glow1_four.visible=false;
            _this.SmallEgg9_glow1_five.visible=false;
            
            _this.getQuestion(); 
        }
        else
        {
            _this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('unity12_3_1Score');
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
        //console.log("question Array :"+_this.qArrays[_this.no11]);
     
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArrays[_this.no11])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:
            case 7:
            case 8: if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", "questionSounds/12.3.1/English/12.3.1.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/12.3.1/Hindi/12.3.1.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", "questionSounds/12.3.1/Kannada/12.3.1.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", "questionSounds/12.3.1/Odiya/12.3.1.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    }

};