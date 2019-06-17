Game.unity4_3_1level1=function(){};

Game.unity4_3_1level1.prototype ={
    
    init:function(game)
    {
        _this= this;
        telInitializer.gameIdInit("Comparison4_3_1",gradeSelected);

    },
    
	create:function(game)
    {
        _this.amplify = null;
        
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.CaterpillarGrp;
        //_this.correct;

        _this.sceneCount = 0;
        
        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;
        
        _this.background;
        _this.click3;
        _this.click4;
        _this.rightCount ;
        
        _this.opt1;
        _this.opt2;
        _this.opt3;
        
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
      
        _this.starsGroup;
       
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity4_3_1BG_01');
        
         _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'grade11_backbtn',function(){},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
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
    
        //language selection sounds
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
    
        if(window.languageSelected=="English")
        {
            _this.src.setAttribute("src", "questionSounds/4.3.1/English/4.3.mp3");
        }
        else if(window.languageSelected=="Hindi")
        {
            _this.src.setAttribute("src", "questionSounds/4.3.1/Hindi/4.3.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", "questionSounds/4.3.1/Kannada/4.3.mp3");
        }
        else
        {
            _this.src.setAttribute("src", "questionSounds/4.3.1/Odiya/4.3.1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
        
        _this.time.events.repeat(Phaser.Timer.SECOND * 8, 8, this.createBall, this);
    },
    
    createBall:function()
    {
        this.bubble = this.add.audio('bubble');
        _this.bubble.play();
    },
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes = _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes = _this.minutes+1;
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
        _this.questionid = 1;
        
        //_this.no11 = 0;
        
    	switch(_this.qArrays[_this.no11])
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
    	}
        
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
       
        _this.noofAttempts++;
        
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level4.3.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
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
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        
        target.input.enableDrag(true);

        _this.click1 = this.add.audio('ClickSound');
        _this.click1.play();

        target.events.onDragStop.add(function(target)
        {
            _this.click1 = this.add.audio('snapSound');
            _this.click1.play();
            
            //console.log("target.key :"+target.key);
            
            for(var i=0;i<_this.dropboxGrp.length;i++)
            {
                if(_this.checkOverlap(target,_this.graphics1) && (target.name == 'tick1'))
                {
                    //console.log("target.name:"+target.name);

                    //_this.dropboxGrp.getChildAt(0).loadTexture(target.key,0,false);
                    
                    _this.correctAns();
                    
                    target.x = _this.dropbox.x;
                    target.y = _this.dropbox.y;
                    
                   //_this.dropbox.frame = 5;
                    
                    _this.drop= _this.dropbox.animations.add('walk');
                    _this.drop.play(10,true);
                    
                    //target.visible = false;
                    target.inputEnabled = false;
                    target.input.enableDrag(false);
                    target.events.onInputDown.removeAll(); 
                    
                    break;
                }
                else if(_this.checkOverlap(target,_this.graphics1) && (target.name != 'tick1'))
                {
                    _this.wrongAns();
                    target.events.onDragStop.removeAll(); 
                   
                    target.x = _this.vx;   
                    target.y = _this.vy;
    
                }
                else
                {
                    target.events.onDragStop.removeAll(); 
                   
                    target.x = _this.vx;   
                    target.y = _this.vy;
                }
            }
            
            target.events.onDragStop.removeAll(); 
         
        },_this);    
    },
    
    gotoFirstQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 1;
        
         //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //options 
        _this.opt1 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);

        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
            
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
    gotoSecondQuestion:function()
    {                                  
        //console.log("gotoSecondQuestion");
        _this.questionNo=2;
       
       // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt1 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
       // _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
           // _this.numberGrp.add(_this.dropboxGrp);
            
            _this.graphics1 = _this.add.graphics(100, 100);
            
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
    
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
   
    gotoThirdQuestion:function()
    {
        //console.log("gotoThirdQuestion");
        _this.questionNo = 3;
       
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt2 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);

        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
     
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);

            _this.graphics1.alpha = 0;
            
       },this);
         
    },
   
    gotoFourthQuestion:function()
    {
        //console.log("gotoFourthQuestion");
        _this.questionNo = 4;
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "3");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "1");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt1 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        //_this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
       // _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            
            _this.graphics1 = _this.add.graphics(100, 100);
    
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);

            _this.graphics1.alpha = 0;
            
       },this);
         
    },

    gotoFifthQuestion:function()
    {
        //console.log("gotoFifthQuestion");
        _this.questionNo = 5;
    
         // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "6");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt3 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);

        _this.opt1 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
    
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
            
            _this.graphics1.alpha = 0;
            
       },this);
         
    },

    gotoSixthQuestion:function()
    {
        //console.log("gotoSixthQuestion");
        _this.questionNo = 6;
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "4");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
    
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt3 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
       
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
    gotoSeventhQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 7;
        
       // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "7");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt2 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt1 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.opt3 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);
    
            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
        
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
    gotoEighthQuestion:function()
    {  
        //console.log("gotoFirstQuestion");
        _this.questionNo = 98;
        
        // number box
        _this.numberbox1= _this.add.sprite(_this.world.centerX-230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox1.anchor.setTo(0.5);
        _this.numberbox1.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "2");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox1.addChild(_this.text);
        
        _this.numberbox2= _this.add.sprite(_this.world.centerX+230,_this.world.centerY-50,'Unity4_3_1NumberPopupBox');
        _this.numberbox2.anchor.setTo(0.5);
        _this.numberbox2.scale.setTo(1,1);
        
        _this.text = this.add.text(0, 0, "8");
        _this.text.font = "myfont";
        _this.text.fill = "#025459";
        _this.text.fontWeight = 'normal';
        _this.text.anchor.set(0.5);
        _this.text.fontSize = 70;
        _this.numberbox2.addChild(_this.text);
        
        //drop place
        _this.dropbox= _this.add.sprite(_this.world.centerX,_this.world.centerY-50,'Unity4_3_1dropbox');
        _this.dropbox.anchor.setTo(0.5);
        _this.dropbox.scale.setTo(1,1);
        
        //options 
        _this.opt3 = _this.add.sprite(_this.world.centerX-230,_this.world.centerY+180, 'Unity4_3_1Crocodile_GreateThan');
    	_this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,1);
        _this.opt3.name = 'tick3';
        
        _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
        _this.opt3.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.opt2 = _this.add.sprite(_this.world.centerX,_this.world.centerY+150, 'Unity4_3_1Crocodile_Equal');
    	_this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,1);
        _this.opt2.name = 'tick2';
        
        _this.opt2.inputEnabled = true;
        _this.opt2.input.useHandCursor = true;
        _this.opt2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.opt1 = _this.add.sprite(_this.world.centerX+230,_this.world.centerY+180, 'Unity4_3_1Crocodile_LessThan');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1);
        _this.opt1.name = 'tick1';
        
        _this.opt1.inputEnabled = true;
        _this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.onDragStart,_this);
     
        _this.numberGrp = _this.add.group();
        _this.dropboxGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.numberGrp.add(_this.numberbox1);
        _this.numberGrp.add(_this.numberbox2);
        
        _this.dropboxGrp.add(_this.dropbox);
        
        _this.optionGrp.add(_this.opt1);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt3);
                
        _this.numberGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numberGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.optionGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optionGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.dropboxGrp.x = 1000;
        _this.tween = _this.add.tween(_this.dropboxGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.tween.onComplete.add(function()
        {
            _this.graphics1 = _this.add.graphics(100, 100);

            // draw a rectangle
            _this.graphics1.lineStyle(2, 0x0000FF, 1);
            _this.graphics1.drawRect(300, 70, 160, 100);
        
            _this.graphics1.alpha = 0;
            
       },this);
         
    },
    
 	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            //console.log("gameEnd");
            _this.stopVoice();
            //_this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        //console.log("correct Answer");
        //console.log("_this.questionNo :"+_this.questionNo);
        //console.log("_thisdropbox.frame :"+_this.dropbox.frame);
    
        //_this.dropbox.frame = 1;
       // target.frame = 1;
        
        //_this.wrong = true;
        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();

        _this.time.events.add(2000, _this.removeEverthing, _this);

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(); 
	},

    wrongAns:function(target)
	{
        //console.log("wrong");
        
        _this.wrong = false;
        
        _this.noofAttempts++;
        
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level4.3.1_",  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.timer3 = _this.time.create(false);
        
        //  Set a TimerEvent to occur after 2 seconds
        /*_this.time.events.add(1500, function()
        {
            _this.numberGrp.destroy();
            _this.optionGrp.destroy();
            _this.dropboxGrp.destroy();
            _this.graphicsGrp.destroy();;
            _this.getQuestion();
            
        }, this);*/
      

        _this.shake.shake(10, _this.dropbox);
        
        _this.click4 = _this.add.audio('ClickSound');
        _this.click4.play();
        
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        _this.timer1.stop();
	},
    
    removeEverthing:function() 
    {
        //console.log("removeEverthing");
        _this.wrong = true;
        //_this.dropbox.frame = 0;
        
        _this.drop.stop();
        
        _this.no11++;
        _this.count1++;
        //console.log("Question Number :"+_this.no11);
        
        if(_this.no11<6)
        {
           // wrong = true;
            _this.timer1.stop();
            
            _this.MaintweenDestroy = _this.add.tween(_this.numberGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.optionGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.dropboxGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.count =0;
                _this.numberGrp.destroy();
                _this.optionGrp.destroy();
                _this.dropboxGrp.destroy();
              
                _this.getQuestion();
            },_this);  
        }
        else
        {
            //_this.stopVoice();
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('unity4_3_1Score');
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
        //console.log("fffffff"+_this.qArrays[_this.no11]);
        
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
                        _this.src.setAttribute("src", "questionSounds/4.3.1/English/4.3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/4.3.1/Hindi/4.3.mp3");
                    }
                   else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", "questionSounds/4.3.1/Kannada/4.3.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", "questionSounds/4.3.1/Odiya/4.3.1.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
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

    shutdown:function()
    {
        _this.stopVoice();

        if(this.bubble)
        {
            if(this.bubble.isPlaying)
            {
                this.bubble.stop();
                this.bubble = null;
            }
        }
    }

};