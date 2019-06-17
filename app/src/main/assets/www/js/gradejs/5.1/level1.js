Game.grade5_1level1=function(){};

Game.grade5_1level1.prototype={

    init:function(game)
    {
       _this = this;
       
       /*_this.gameid = "5.1";
       
       _this.currentTime = window.timeSaveFunc();
       _this.saveGameplay = 
       {
          id_game:_this.gameid, 
          access_token:window.acctkn, 
          start_time:_this.currentTime
       } 
       _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

       telInitializer.gameIdInit("time5_1",gradeSelected);
    },
    
	create:function(game){

    _this.amplify = null;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
        
        _this.questionid = null;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=0;
        
        _this.timeadd=0;
        
        _this.mrngArrays =new Array();
        _this.dayArrays =new Array();
        _this.evngArrays =new Array();
        _this.nightArrays =new Array();
        _this.rightOrderArray =new Array();
        _this.glowOrderArray =new Array();
        _this.objGroup = null;
        _this.no1=0;
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle(_this.qArrays);
        //console.log("qarray "+qArrays);
        _this.mrngArrays = ["Level5.1_mrng1","Level5.1_mrng2","Level5.1_mrng3","Level5.1_mrng4","Level5.1_mrng5","Level5.1_mrng3"];
        _this.dayArrays = ["Level5.1_day1","Level5.1_day2","Level5.1_day3","Level5.1_day4","Level5.1_day5","Level5.1_day3"];
        _this.evngArrays = ["Level5.1_evng1","Level5.1_evng2","Level5.1_evng3","Level5.1_evng4","Level5.1_evng2","Level5.1_evng1"];
        _this.nightArrays = ["Level5.1_night1","Level5.1_night2","Level5.1_night3","Level5.1_night4","Level5.1_night1","Level5.1_night3"];
        
        _this.mrngArrays = this.shuffle(_this.mrngArrays);
        _this.dayArrays = this.shuffle(_this.dayArrays);
        _this.evngArrays = this.shuffle(_this.evngArrays);
        _this.nightArrays = this.shuffle(_this.nightArrays);
        

        _this.count=0;
        _this.count1=0;
        _this.tweenCount = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level5.1_bg1');
       
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
        
        _this.graphics = this.add.graphics(0, 400);
		_this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
		_this.graphics.beginFill(0xFF700B, 1);
		_this.graphics.drawRect(0,0,960,120);		
		_this.graphics.boundsPadding = 0;
		_this.graphics.alpha=0;
        
        
        if(window.languageSelected=="English")
            _this.timeadd=7000;
        else if(window.languageSelected=="Hindi")
            _this.timeadd=5000;
        else if(window.languageSelected=="Kannada")
            _this.timeadd=6000;
        else
          _this.timeadd=6000;
       // no1++;
        _this.getQuestion();

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

    getQuestion:function(target)
    {     
        _this.sceneCount++;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
        
        _this.stopVoice();
        _this.noofAttempts = 0;
        _this.AnsTimerCount=0;

		_this.timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);

		//  Start the _this.timer running - _this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();


     _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();
        
    //console.log("get "+_this.qArrays[_this.no1]);
        _this.speakerbtn.inputEnabled=true;       
       _this.speakerbtn.input.useHandCursor = true;
    	switch(_this.qArrays[_this.no1])      
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
    	}
        
    },
    
       
    addDragBoxes:function(){

    	//no1++;
         _this.crocsGroup = _this.add.group();
        _this.gameBoxGroup = _this.add.group();
        
        _this.x = 100;
        _this.x1 = 180;
       _this. y = 150;
        _this.y1 = 130;

        _this.box1 = _this.gameBoxGroup.create(160,200,'Level5.1_gameBox1');
        _this.box1.anchor.setTo(0.435,0.42); 
        _this.box1.name = "Level5.1_gameBox1";
        
        _this.box2 = _this.gameBoxGroup.create(360,200,'Level5.1_gameBox2');
        _this.box2.anchor.setTo(0.435,0.42); 
        _this.box2.name = "Level5.1_gameBox2";
        
        _this.box3 = _this.gameBoxGroup.create(560,200,'Level5.1_gameBox3');
        _this.box3.anchor.setTo(0.435,0.42);
        _this.box3.name = "Level5.1_gameBox3";
        
        _this.box4 = _this.gameBoxGroup.create(760,200,'Level5.1_gameBox4');
        _this.box4.anchor.setTo(0.435,0.42);
        _this.box4.name = "Level5.1_gameBox4";
        
        _this.gameBoxGroup.add(_this.box1);
        _this.gameBoxGroup.add(_this.box2);
        _this.gameBoxGroup.add(_this.box3);
        _this.gameBoxGroup.add(_this.box4);
        
         
        for(var k=0;k<_this.gameBoxGroup.children.length;k++)
        {
           _this.targetChild = _this.add.sprite(0,0,'Level5.1_allimg');
            //targetChild.frameName = gameBoxGroup.getChildAt(i).frameName;
            _this.targetChild.anchor.setTo(0.5);
            _this.targetChild.alpha = 0;
            _this.gameBoxGroup.getChildAt(k).addChild(_this.targetChild); 
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).inputEnabled = true;
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).input.useHandCursor = true;
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.add(_this.boxDragFunction,_this);
        }
         
    },
       
    addDragListener:function(target){
 
         //console.log("1111111111111111111111");
               _this.objGroup.bringToTop(target);
        _this.vx = target.x;   
        _this.vy = target.y; 
        
      /* // var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level24A_"+target.name, 
                access_token: window.acctkn 
            }  
            //absdsjsapi.saveInteractEvent(interactEvent);*/
        
        target.input.enableDrag(true);
        _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
        target.events.onDragStop.add(
            function(target){
                
           /*    // var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drop", 
                res_id: "Level24A_"+target.name,
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
                
              //console.log("if");
                for(var i=0;i<_this.gameBoxGroup.children.length;i++)
                {
                    
                      //console.log("if in");
                   // console.log(target.name);
                        if(_this.checkOverlap(target,_this.gameBoxGroup.getChildAt(i))&&_this.gameBoxGroup.getChildAt(i).frameName=="blank")
                        {
                            //console.log("hit");  
                            _this.gameBoxGroup.getChildAt(i).frameName = target.name;
                            target.visible = false;
                             _this.snapSound = _this.add.audio('snapSound');
                            _this.snapSound.play();
                            _this.count++;
                            break;
                           
                        }
                        else  
                        {
                           // target.x = vx;   
                           // target.y = vy; 
                        }
                       // target.events.onDragStop.removeAll(); 
                    
                    
                }
                target.events.onDragStop.removeAll(); 
                target.x = _this.vx;   
                target.y = _this.vy;
                ////console.log(count);
                if(_this.count>=4)
                {
                  /* tickMark.inputEnabled = true; 
                   tickMark.input.useHandCursor = true; 
                   tickMark.events.onInputDown.add(this.checkFortheRightOrder,this); */
                    _this.checkFortheRightOrder();
                }
                   
            },_this);
        
     },
    
    boxDragFunction:function(target){
   // console.log("1 "+target.frameName);   
   // console.log("2 "+target.parent.frameName);   
        target.frameName = target.parent.frameName;
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
    if(target.frameName!="blank")
    {
        //console.log("in");
       target.parent.frameName = "blank";
       target.alpha = 1;
        _this.vx = target.x;   
        _this.vy = target.y;
        
        /*//var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drag", 
                res_id: "Level51_"+target.parent.frameName, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/
        
       target.input.enableDrag(true);
        _this.gameBoxGroup.bringToTop(target.parent);
       
        target.events.onDragStop.add(
            function(target){
                
           /* //var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: _this.currentTime, 
                event_type: "drop", 
                res_id: "Level51_"+target.parent.frameName, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);*/

                for(var i=0;i< _this.gameBoxGroup.children.length;i++)
                {
                    //console.log("if"+target.frameName);
                    //console.log("iff"+target.parent.frameName);
                        if( _this.checkOverlap(target, _this.gameBoxGroup.getChildAt(i))&& _this.gameBoxGroup.getChildAt(i).frameName=="blank")
                        {
                           //console.log("hitttttt");
                            var frameName = target.frameName;
                            target.parent.frameName =  _this.gameBoxGroup.getChildAt(i).frameName;
                            _this.gameBoxGroup.getChildAt(i).frameName = frameName;
                            _this.snapSound = _this.add.audio('snapSound');
                            _this.snapSound.play();
                            break;
                           
                        }
                       else if(this.checkOverlap(target, _this.graphics))
                        {
                            //console.log("3");
                            target.parent.frameName = "blank";
                              _this.count--;
                            //tickMark.events.onInputDown.removeAll();
                            ////console.log(count);
                             _this.objGroup.getByName(target.frameName).visible = true;
                            break;
                      //  target.x = vx;   
                      //  target.y = vy; 
                        }else
                        {
                            //console.log("4")
                            target.parent.frameName = target.frameName;

                           // objGroup.getByName(target.frameName).visible = true;
                      //  target.x = vx;   
                      //  target.y = vy; 
                        }

                        
                    
                    
                }
                target.events.onDragStop.removeAll(); 
                target.alpha = 0;
                target.x = _this.vx;
                target.y = _this.vy;
                target.frameName = "blank";
                 _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox1"));          
                 _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox2"));          
                 _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox3"));          
                 _this.gameBoxGroup.bringToTop(_this.gameBoxGroup.getByName("Level5.1_gameBox4"));          
                          
                
            },_this);
       
        }
       
       
     },
    
    checkAns:function(target){
         
        if(_this.timer)
            {
                _this.timer.stop();
                _this.timer = null;
            }

            if(_this.timer1)
            {
                _this.timer1.stop();
                _this.timer1 = null;
            }
		  _this.currentTime = window.timeSaveFunc();
                var saveAsment = 
                { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid,   
                    pass: "Yes",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
                }
            
       // absdsjsapi.saveAssessment(saveAsment);


       telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
       // ////console.log("here");
        _this.objGroup.destroy();
       // target.events.onInputDown.removeAll();
        
             _this.speakerbtn.inputEnabled=false;
        
        _this.tween = this.add.tween(_this.gameBoxGroup);
    	_this.tween.to({ y: 75 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        _this.tween.onComplete.add(function(){

        }, _this);
       
        _this.tween1 = this.add.tween(_this.crocsGroup);
    	_this.tween1.to({ y: 75 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        _this.tween1.onComplete.add(function(){
             //this.checkFortheRightOrder();
            _this.cmusic = _this.add.audio('celebr');
            _this.cmusic.play();
            
             _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
               // ////console.log(starAnim);
                _this.starAnim.smoothed = false;
                _this.anim4 = _this.starAnim.animations.add('star');
                _this.anim4.play();
                _this.anim4.onComplete.add(function(){_this.addGlowtoTheSprite();},_this);
            _this.count1++;
            
        }, _this);
        

        
    },
       
    checkFortheRightOrder:function(target){
        //target.frame = 1;
       // ClickSound.play();
        //target.events.onInputDown.removeAll();
        _this.noofAttempts++;
        _this.wrongBox = _this.add.group();
        _this.wrongBoxArray = [];
        _this.wrongBoxParentArray = [];
        _this.indexArray = [];
        _this.rightCount = 0;
        _this.selectedFrameArray = [];
        _this.objTovisible = [];
        _this.wrongXpos = [];
        _this.wrongYpos = [];
        _this.wrongBox.x = _this.gameBoxGroup.x;
        _this.wrongBox.y = _this.gameBoxGroup.y;
       // ////console.log(gameBoxGroup.children.length);
        
        
        for(var i=0;i<_this.gameBoxGroup.children.length;i++)
        {
           // ////console.log("for");
           // ////console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(_this.gameBoxGroup.getChildAt(i).frameName == _this.rightOrderArray[i])
            {
              // ////console.log("right");
               _this.rightCount++;
                _this.selectedFrameArray.push(_this.gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
               // ////console.log(gameBoxGroup.getChildAt(i).frameName);
                _this.count--;
                _this.gameBoxGroup.getChildAt(i).visible = false;
                _this.selectedFrameArray.push("blank");
                _this.objTovisible.push(_this.gameBoxGroup.getChildAt(i).frameName);
                _this.wrongBoxArray.push(_this.gameBoxGroup.getChildAt(i).frameName);
                _this.wrongBoxParentArray.push(_this.gameBoxGroup.getChildAt(i).name);
                _this.indexArray.push(i);
                _this.wrongXpos.push(_this.gameBoxGroup.getChildAt(i).x);
                _this.wrongYpos.push(_this.gameBoxGroup.getChildAt(i).y);
            }
        }
        
        for(var j=0;j<_this.wrongBoxArray.length;j++)
        {
           //wrongBox.add(wrongBoxArray[j]); 
            _this.wBox = _this.wrongBox.create(0,0,_this.wrongBoxParentArray[j]);
            _this.wBox.anchor.setTo(0.435,0.42);
            _this.wBox.x = _this.wrongXpos[j];
            _this.wBox.y = _this.wrongYpos[j];
            _this.wBox.frameName = _this.wrongBoxArray[j];
        }
       /* var box1 = gameBoxGroup.create(170,200,'gameBox1');
        box1.anchor.setTo(0.435,0.42); 
        box1.name = "gameBox1";

        var box2 = gameBoxGroup.create(360,200,'gameBox2');
        box2.anchor.setTo(0.435,0.42); 
        box2.name = "gameBox2";
        
        var box3 = gameBoxGroup.create(560,200,'gameBox3');
        box3.anchor.setTo(0.435,0.42);
        box3.name = "gameBox3";
        
        var box4 = gameBoxGroup.create(760,200,'gameBox4');
        box4.anchor.setTo(0.435,0.42);
        box4.name = "gameBox4";
        
        wrongBox.add(box1);
        wrongBox.add(box2);
        wrongBox.add(box3);
        wrongBox.add(box4);*/
        // _this.noofAttempts++;
        _this.shake.shake(10,_this.wrongBox);
       
         _this.time.events.add(1000, function(){


            _this.wrongBox.destroy();
             
            for(var j=0;j<_this.gameBoxGroup.children.length;j++)
            {
                _this.gameBoxGroup.getChildAt(j).visible = true;
                _this.gameBoxGroup.getChildAt(j).frameName = _this.selectedFrameArray[j];
            }
             //console.log("object to visible "+objTovisible);
            for(var k=0;k<_this.objTovisible.length;k++)
            {
                 _this.objGroup.getByName(_this.objTovisible[k]).visible = true;  
            }
            
            //this.addGlowtoTheSprite();
             if(_this.rightCount>=4)
                 {
                     
                 }
             else
                 {
                     //target.frame = 0;
                 }
            
         }, _this);
        if(_this.rightCount>=4)
        {
            for(var k=0;k<_this.gameBoxGroup.children.length;k++)
            {
                _this.gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.removeAll();
            }
            
            _this.checkAns();
        }
        else
        {
           _this.wmusic = _this.add.audio('waudio');
            _this.wmusic.play();
                
        }
        
    },
    
    addGlowtoTheSprite:function(target){
      //  ////console.log("Glow");
        _this.gameBoxGroup.getChildAt(_this.glowOrderArray[0]).removeChildren();
        _this.glow = _this.add.sprite(11,18,'Level5.1_glow');
        _this.glow.anchor.setTo(0.495);

        _this.gameBoxGroup.getChildAt(_this.glowOrderArray[0]).addChild(_this.glow);  
        _this.anim = _this.glow.animations.add('Level5.1_glow');
        _this.anim.play(100,1);
        _this.time.events.add(1000, function(){
            
            _this.anim.stop();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[1]).removeChildren();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[1]).addChild(_this.glow);
            
            _this.anim.play(100,1);
            
            _this.time.events.add(1000, function(){
            
            _this.anim.stop();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[2]).removeChildren();
            _this.gameBoxGroup.getChildAt(_this.glowOrderArray[2]).addChild(_this.glow);
            
            _this.anim.play();
            
            
            _this.time.events.add(1000, function(){
            
                    _this.anim.stop();
                    _this.gameBoxGroup.getChildAt(_this.glowOrderArray[3]).removeChildren();
                    _this.gameBoxGroup.getChildAt(_this.glowOrderArray[3]).addChild(_this.glow);

                    _this.anim.play();

                _this.time.events.add(1000, function(){_this.removeEverthing();},_this);
                


                },_this);
            
            
            },_this);
            
            
            
        },_this);
        
    },
     
    removeEverthing:function() 
    {
      //  gameBoxGroup.destroy();
      //  crocsGroup.destroy();
      //  objGroup.destroy();
        _this.no1++;
        ////console.log("--------------------------"+no1);
        if(_this.no1<6)
        {
            _this.MaintweenDestroy = this.add.tween(_this.objGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            _this.MaintweenDestroy.onComplete.add(function(){
                _this.objGroup.destroy();
            },_this);
            _this.Maintween1Destroy = _this.add.tween(_this.gameBoxGroup);
            _this.Maintween1Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            _this.Maintween1Destroy.onComplete.add(function(){
                _this.gameBoxGroup.destroy();
            },_this);
            _this.Maintween2Destroy = _this.add.tween(_this.crocsGroup);
            _this.Maintween2Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            _this.Maintween2Destroy.onComplete.add(function(){
                _this.crocsGroup.destroy();
                
                _this.count =0;
            _this.tweenCount=0;
            _this.getQuestion(); 
                
            },_this);
 
               
        }
        else
        {
            _this.stopVoice();
           // ////console.log("gameover");
            _this.state.start('grade5_1Score');
        }
    },
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    gotoFirstQuestion:function(){
        
        _this.questionid = 1;
            //console.log("WOWOWOW "+no1);
         _this.addDragBoxes();
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = _this.nightArrays[_this.no1];

         _this.b2 = _this.add.sprite(375,505,_this.evngArrays[_this.no1]);
         _this.b2.anchor.setTo(0.5,1);
         _this.b2.name = _this.evngArrays[_this.no1];

         _this.b3 = _this.add.sprite(570,505,_this.dayArrays[_this.no1]);
         _this.b3.anchor.setTo(0.5,1);
         _this.b3.name = _this.dayArrays[_this.no1];
         
         _this.b4 = _this.add.sprite(770,505,_this.mrngArrays[_this.no1]);
         _this.b4.anchor.setTo(0.5,1);
         _this.b4.name = _this.mrngArrays[_this.no1];
               
         if(_this.no1==0)
         {
             _this.getVoice();
             _this.time.events.add(_this.timeadd,function(){
                 _this.b1.inputEnabled = true;
                 _this.b1.input.useHandCursor = true;
                 _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                 _this.b2.inputEnabled = true;
                 _this.b2.input.useHandCursor = true;
                 _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b3.inputEnabled = true;
                 _this.b3.input.useHandCursor = true;
                 _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b4.inputEnabled = true;
                 _this.b4.input.useHandCursor = true;
                 _this.b4.events.onInputDown.add(_this.addDragListener,_this);
             },_this);
         }
         else
         {
             _this.b1.inputEnabled = true;
             _this.b1.input.useHandCursor = true;
             _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
             _this.b2.inputEnabled = true;
             _this.b2.input.useHandCursor = true;
             _this.b2.events.onInputDown.add(_this.addDragListener,_this);
             _this.b3.inputEnabled = true;
             _this.b3.input.useHandCursor = true;
             _this.b3.events.onInputDown.add(_this.addDragListener,_this);
             _this.b4.inputEnabled = true;
             _this.b4.input.useHandCursor = true;
             _this.b4.events.onInputDown.add(_this.addDragListener,_this);
         }
        
         _this.objGroup.add(_this.b1);
         _this.objGroup.add(_this.b2);
         _this.objGroup.add(_this.b3);
         _this.objGroup.add(_this.b4);
         
         _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
         _this.glowOrderArray = [0,1,2,3];
        
        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
           
        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
            
     },
    
    gotoSecondQuestion:function(){
         _this.questionid = 1;
        //console.log("WOWOWOW "+no1);
        _this.addDragBoxes();
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(170,505,_this.dayArrays[_this.no1]);
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = _this.dayArrays[_this.no1];

         _this.b2 = _this.add.sprite(375,505,_this.nightArrays[_this.no1]);
         _this.b2.anchor.setTo(0.5,1);
         _this.b2.name = _this.nightArrays[_this.no1];
         
         _this.b3 = _this.add.sprite(570,505,_this.mrngArrays[_this.no1]);
         _this.b3.anchor.setTo(0.5,1);
         _this.b3.name = _this.mrngArrays[_this.no1];
         
         _this.b4 = _this.add.sprite(770,505,_this.evngArrays[_this.no1]);
         _this.b4.anchor.setTo(0.5,1);
         _this.b4.name = _this.evngArrays[_this.no1];
         
         if(_this.no1==0)
         {
             _this.getVoice();
             _this.time.events.add(_this.timeadd,function(){
                 _this.b1.inputEnabled = true;
                 _this.b1.input.useHandCursor = true;
                 _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                 _this.b2.inputEnabled = true;
                 _this.b2.input.useHandCursor = true;
                 _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b3.inputEnabled = true;
                 _this.b3.input.useHandCursor = true;
                 _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b4.inputEnabled = true;
                 _this.b4.input.useHandCursor = true;
                 _this.b4.events.onInputDown.add(_this.addDragListener,_this);
             },_this);
         }
         else
         {
             _this.b1.inputEnabled = true;
             _this.b1.input.useHandCursor = true;
             _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
             _this.b2.inputEnabled = true;
             _this.b2.input.useHandCursor = true;
             _this.b2.events.onInputDown.add(_this.addDragListener,_this);
             _this.b3.inputEnabled = true;
             _this.b3.input.useHandCursor = true;
             _this.b3.events.onInputDown.add(_this.addDragListener,_this);
             _this.b4.inputEnabled = true;
             _this.b4.input.useHandCursor = true;
             _this.b4.events.onInputDown.add(_this.addDragListener,_this);
         }
        
         _this.objGroup.add(_this.b1);
         _this.objGroup.add(_this.b2);
         _this.objGroup.add(_this.b3);
         _this.objGroup.add(_this.b4);
         
         _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
         _this.glowOrderArray = [0,1,2,3];
        
        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
           
        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },
    
    gotoThirdQuestion:function(){
         _this.questionid = 1;
      	_this.addDragBoxes();
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = _this.nightArrays[_this.no1];
       
         _this.b2 = _this.add.sprite(375,505,_this.dayArrays[_this.no1]);
         _this.b2.anchor.setTo(0.5,1);
         _this.b2.name = _this.dayArrays[_this.no1];
         
         _this.b3 = _this.add.sprite(570,505,_this.mrngArrays[_this.no1]);
         _this.b3.anchor.setTo(0.5,1);
         _this.b3.name = _this.mrngArrays[_this.no1];
         
         _this.b4 = _this.add.sprite(770,505,_this.evngArrays[_this.no1]);
         _this.b4.anchor.setTo(0.5,1);
         _this.b4.name = _this.evngArrays[_this.no1];
        
         
         if(_this.no1==0)
         {
             _this.getVoice();
             _this.time.events.add(_this.timeadd,function(){
                 _this.b1.inputEnabled = true;
                 _this.b1.input.useHandCursor = true;
                 _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                 _this.b2.inputEnabled = true;
                 _this.b2.input.useHandCursor = true;
                 _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b3.inputEnabled = true;
                 _this.b3.input.useHandCursor = true;
                 _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b4.inputEnabled = true;
                 _this.b4.input.useHandCursor = true;
                 _this.b4.events.onInputDown.add(_this.addDragListener,_this);
             },_this);
         }
         else
         {
             _this.b1.inputEnabled = true;
             _this.b1.input.useHandCursor = true;
             _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
             _this.b2.inputEnabled = true;
             _this.b2.input.useHandCursor = true;
             _this.b2.events.onInputDown.add(_this.addDragListener,_this);
             _this.b3.inputEnabled = true;
             _this.b3.input.useHandCursor = true;
             _this.b3.events.onInputDown.add(_this.addDragListener,_this);
             _this.b4.inputEnabled = true;
             _this.b4.input.useHandCursor = true;
             _this.b4.events.onInputDown.add(_this.addDragListener,_this);
         }
        
         _this.objGroup.add(_this.b1);
         _this.objGroup.add(_this.b2);
         _this.objGroup.add(_this.b3);
         _this.objGroup.add(_this.b4);
         
         _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
    	  _this.glowOrderArray = [0,1,2,3];   
        
        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
           
        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },
    
    gotoFourthQuestion:function(){
         _this.questionid = 1;
        //console.log("WOWOWOW "+no1,nightArrays[no1],evngArrays[no1],dayArrays[no1],mrngArrays[no1]);
        _this.addDragBoxes();

        
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = _this.nightArrays[_this.no1];

         _this.b2 = _this.add.sprite(375,505,_this.evngArrays[_this.no1]);
         _this.b2.anchor.setTo(0.5,1);
         _this.b2.name = _this.evngArrays[_this.no1];

         _this.b3 = _this.add.sprite(570,505,_this.dayArrays[_this.no1]);
         _this.b3.anchor.setTo(0.5,1);
         _this.b3.name = _this.dayArrays[_this.no1];

         
         _this.b4 = _this.add.sprite(770,505,_this.mrngArrays[_this.no1]);
         _this.b4.anchor.setTo(0.5,1);
         _this.b4.name = _this.mrngArrays[_this.no1];
        
         if(_this.no1==0)
         {
             _this.getVoice();
             _this.time.events.add(_this.timeadd,function(){
                 _this.b1.inputEnabled = true;
                 _this.b1.input.useHandCursor = true;
                 _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                 _this.b2.inputEnabled = true;
                 _this.b2.input.useHandCursor = true;
                 _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b3.inputEnabled = true;
                 _this.b3.input.useHandCursor = true;
                 _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b4.inputEnabled = true;
                 _this.b4.input.useHandCursor = true;
                 _this.b4.events.onInputDown.add(_this.addDragListener,_this);
             },_this);
         }
         else
         {
             _this.b1.inputEnabled = true;
             _this.b1.input.useHandCursor = true;
             _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
             _this.b2.inputEnabled = true;
             _this.b2.input.useHandCursor = true;
             _this.b2.events.onInputDown.add(_this.addDragListener,_this);
             _this.b3.inputEnabled = true;
             _this.b3.input.useHandCursor = true;
             _this.b3.events.onInputDown.add(_this.addDragListener,_this);
             _this.b4.inputEnabled = true;
             _this.b4.input.useHandCursor = true;
             _this.b4.events.onInputDown.add(_this.addDragListener,_this);
         }
        
         _this.objGroup.add(_this.b1);
         _this.objGroup.add(_this.b2);
         _this.objGroup.add(_this.b3);
         _this.objGroup.add(_this.b4);
         
         _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
    	  _this.glowOrderArray = [0,1,2,3];   
        
        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
           
        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },

    gotoFifthQuestion:function(){
        _this.questionid = 1;
       	_this.addDragBoxes();
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(170,505,_this.nightArrays[_this.no1]);
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = _this.nightArrays[_this.no1];
       
         _this.b2 = _this.add.sprite(375,505,_this.dayArrays[_this.no1]);
         _this.b2.anchor.setTo(0.5,1);
         _this.b2.name = _this.dayArrays[_this.no1];

         _this.b3 = _this.add.sprite(570,505,_this.evngArrays[_this.no1]);
         _this.b3.anchor.setTo(0.5,1);
         _this.b3.name = _this.evngArrays[_this.no1];

         
         _this.b4 = _this.add.sprite(770,505,_this.mrngArrays[_this.no1]);
         _this.b4.anchor.setTo(0.5,1);
         _this.b4.name =_this.mrngArrays[_this.no1];

         if(_this.no1==0)
         {
             _this.getVoice();
             _this.time.events.add(_this.timeadd,function(){
                 _this.b1.inputEnabled = true;
                 _this.b1.input.useHandCursor = true;
                 _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                 _this.b2.inputEnabled = true;
                 _this.b2.input.useHandCursor = true;
                 _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b3.inputEnabled = true;
                 _this.b3.input.useHandCursor = true;
                 _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b4.inputEnabled = true;
                 _this.b4.input.useHandCursor = true;
                 _this.b4.events.onInputDown.add(_this.addDragListener,_this);
             },_this);
         }
         else
         {
             _this.b1.inputEnabled = true;
             _this.b1.input.useHandCursor = true;
             _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
             _this.b2.inputEnabled = true;
             _this.b2.input.useHandCursor = true;
             _this.b2.events.onInputDown.add(_this.addDragListener,_this);
             _this.b3.inputEnabled = true;
             _this.b3.input.useHandCursor = true;
             _this.b3.events.onInputDown.add(_this.addDragListener,_this);
             _this.b4.inputEnabled = true;
             _this.b4.input.useHandCursor = true;
             _this.b4.events.onInputDown.add(_this.addDragListener,_this);
         }
        
         _this.objGroup.add(_this.b1);
         _this.objGroup.add(_this.b2);
         _this.objGroup.add(_this.b3);
         _this.objGroup.add(_this.b4);
         
         _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
    	  _this.glowOrderArray = [0,1,2,3];   
        
        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
       _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
           
        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
    },
    
    gotoSixthQuestion:function(){
         _this.questionid = 1;
       	_this.addDragBoxes();
         _this.objGroup = _this.add.group();
         _this.b1 = _this.add.sprite(170,505,_this.dayArrays[_this.no1]);
         _this.b1.anchor.setTo(0.5,1);
         _this.b1.name = _this.dayArrays[_this.no1];

         _this.b2 = _this.add.sprite(375,505,_this.nightArrays[_this.no1]);
         _this.b2.anchor.setTo(0.5,1);
         _this.b2.name = _this.nightArrays[_this.no1];
         
         _this.b3 = _this.add.sprite(570,505,_this.mrngArrays[_this.no1]);
         _this.b3.anchor.setTo(0.5,1);
         _this.b3.name = _this.mrngArrays[_this.no1];
         
         _this.b4 = _this.add.sprite(770,505,_this.evngArrays[_this.no1]);
         _this.b4.anchor.setTo(0.5,1);
         _this.b4.name = _this.evngArrays[_this.no1];

         if(_this.no1==0)
         {
             _this.getVoice();
             _this.time.events.add(_this.timeadd,function(){
                 _this.b1.inputEnabled = true;
                 _this.b1.input.useHandCursor = true;
                 _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
                 _this.b2.inputEnabled = true;
                 _this.b2.input.useHandCursor = true;
                 _this.b2.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b3.inputEnabled = true;
                 _this.b3.input.useHandCursor = true;
                 _this.b3.events.onInputDown.add(_this.addDragListener,_this);
                 _this.b4.inputEnabled = true;
                 _this.b4.input.useHandCursor = true;
                 _this.b4.events.onInputDown.add(_this.addDragListener,_this);
             },_this);
         }
         else
         {
             _this.b1.inputEnabled = true;
             _this.b1.input.useHandCursor = true;
             _this.b1.events.onInputDown.add(_this.addDragListener,_this); 
             _this.b2.inputEnabled = true;
             _this.b2.input.useHandCursor = true;
             _this.b2.events.onInputDown.add(_this.addDragListener,_this);
             _this.b3.inputEnabled = true;
             _this.b3.input.useHandCursor = true;
             _this.b3.events.onInputDown.add(_this.addDragListener,_this);
             _this.b4.inputEnabled = true;
             _this.b4.input.useHandCursor = true;
             _this.b4.events.onInputDown.add(_this.addDragListener,_this);
         }
        
         _this.objGroup.add(_this.b1);
         _this.objGroup.add(_this.b2);
         _this.objGroup.add(_this.b3);
         _this.objGroup.add(_this.b4);
         
         _this.rightOrderArray = [_this.mrngArrays[_this.no1],_this.dayArrays[_this.no1],_this.evngArrays[_this.no1],_this.nightArrays[_this.no1]];
    	  _this.glowOrderArray = [0,1,2,3];   
        
        _this.objGroup.x = 1000;
        _this.gameBoxGroup.x = 1000;
        _this.crocsGroup.x = 1000;
        _this.Maintween = _this.add.tween(_this.objGroup);
        _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
        _this.Maintween1 = _this.add.tween(_this.gameBoxGroup);
        _this.Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
           
        _this.Maintween2 = _this.add.tween(_this.crocsGroup);
        _this.Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
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

  
    update:function(){

    },

    getVoice:function(){
       _this.stopVoice();  
          
          _this.playQuestionSound = document.createElement('audio');
          _this.src = document.createElement('source');
                    console.log("voice "+window.languageSelected);
                    if(window.languageSelected == "English")
                      {
                           _this.src.setAttribute("src", "questionSounds/5.1/English/5.1_1.mp3");
                      }
                      else if(window.languageSelected == "Hindi")
                      {
                           _this.src.setAttribute("src", "questionSounds/5.1/Hindi/5.1_1.mp3");
                      }
                      else if(window.languageSelected == "Kannada")
                      {
                           _this.src.setAttribute("src", "questionSounds/5.1/Kannada/5.1_1.mp3");
                      } 
                      else
                      {
                         _this.src.setAttribute("src", "questionSounds/5.1/Odiya/5.1_1.mp3");
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
    
};