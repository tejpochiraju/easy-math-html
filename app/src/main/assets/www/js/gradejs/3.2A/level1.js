Game.grade3_2Alevel1=function(){};


Game.grade3_2Alevel1.prototype={


     init:function(game)
    {
        _this = this;
        
        /*_this.gameid = "3.2A";
        
        _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        */

        telInitializer.gameIdInit("weight3_2A",gradeSelected);

    },



	create:function(game){   


         _this.amplify = null;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;

		_this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=0;
		
        _this.no1=0;
       //_this.qArrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,
       //48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
        
        //_this.qArrays = [52,
        //48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
       //_this.qArrays = _this.shuffle(_this.qArrays);

       _this.qArrays = [];

        _this.count = 0;
        _this.count1 = 0;
        _this.objAdded = 0;
        _this.objArray = [
        ['Level32A_Can','Level32A_Ball',40,10,10,3,'Level32A_Can'],['Level32A_Book','Level32A_Can',20,40,5,10,'Level32A_Book'],['Level32A_Can','Level32A_Comb',40,5,10,2,'Level32A_Comb'],['Level32A_Eraser','Level32A_Can',5,40,2,10,'Level32A_Eraser'],['Level32A_Glass','Level32A_Can',10,40,3,10,'Level32A_Can'],['Level32A_Mug','Level32A_Can',20,40,5,10,'Level32A_Mug'],['Level32A_Can','Level32A_Key',40,5,10,2,'Level32A_Can'],['Level32A_Pappaya','Level32A_Can',30,40,7,10,'Level32A_Pappaya'],['Level32A_Can','Level32A_Carrot',40,5,10,1,'Level32A_Can'],['Level32A_Coin','Level32A_Can',5,40,1,10,'Level32A_Coin'],['Level32A_Can','Level32A_Pencil',40,5,10,2,'Level32A_Can'],['Level32A_ScrewDriver','Level32A_Can',10,40,3,10,'Level32A_ScrewDriver'],['Level32A_Can','Level32A_Shoe',40,15,10,4,'Level32A_Shoe'],
            
        ['Level32A_Ball','Level32A_Book',10,25,3,6,'Level32A_Ball'],['Level32A_Comb','Level32A_Ball',5,20,2,5,'Level32A_Comb'],['Level32A_Ball','Level32A_Eraser',20,5,5,2,'Level32A_Ball'],['Level32A_Glass','Level32A_Ball',10,20,3,5,'Level32A_Glass'],['Level32A_Ball','Level32A_Mug',10,25,3,6,'Level32A_Mug'],['Level32A_Key','Level32A_Ball',5,20,2,5,'Level32A_Key'],['Level32A_Ball','Level32A_Pappaya',10,30,3,7,'Level32A_Ball'],['Level32A_Pencil','Level32A_Ball',5,20,2,5,'Level32A_Pencil'],['Level32A_Ball','Level32A_ScrewDriver',20,8,5,2,'Level32A_Ball'],['Level32A_Shoe','Level32A_Ball',10,20,3,5,'Level32A_Shoe'],['Level32A_Ball','Level32A_Carrot',20,5,5,1,'Level32A_Carrot'],['Level32A_Ball','Level32A_Shoe',20,5,5,1,'Level32A_Ball'],
            
        ['Level32A_Book','Level32A_Comb',25,5,6,2,'Level32A_Book'],['Level32A_Eraser','Level32A_Book',5,25,2,6,'Level32A_Eraser'],['Level32A_Book','Level32A_Glass',25,10,6,3,'Level32A_Book'],['Level32A_Mug','Level32A_Book',10,25,3,6,'Level32A_Mug'],['Level32A_Book','Level32A_Key',25,5,6,2,'Level32A_Book'],['Level32A_Book','Level32A_Pappaya',20,40,5,10,'Level32A_Book'],['Level32A_Pencil','Level32A_Book',5,25,2,6,'Level32A_Book'],['Level32A_Book','Level32A_ScrewDriver',25,8,6,2,'Level32A_ScrewDriver'],['Level32A_Shoe','Level32A_Book',10,25,3,6,'Level32A_Book'],['Level32A_Book','Level32A_Carrot',25,5,6,1,'Level32A_Carrot'],['Level32A_Coin','Level32A_Book',5,25,1,6,'Level32A_Coin'],
            
        ['Level32A_Eraser','Level32A_Glass',5,20,2,5,'Level32A_Eraser'],['Level32A_Eraser','Level32A_Mug',5,20,2,5,'Level32A_Mug'],['Level32A_Eraser','Level32A_Key',15,5,4,2,'Level32A_Eraser'],['Level32A_Eraser','Level32A_Pappaya',5,30,2,8,'Level32A_Pappaya'],['Level32A_Eraser','Level32A_Pencil',15,5,4,2,'Level32A_Eraser'],['Level32A_Eraser','Level32A_ScrewDriver',10,20,3,5,'Level32A_ScrewDriver'],['Level32A_Eraser','Level32A_Shoe',10,25,3,6,'Level32A_Eraser'],['Level32A_Eraser','Level32A_Carrot',5,20,1,5,'Level32A_Carrot'],['Level32A_Eraser','Level32A_Coin',15,5,3,1,'Level32A_Coin'],
            
        ['Level32A_Glass','Level32A_Mug',10,25,3,6,'Level32A_Mug'],['Level32A_Glass','Level32A_Key',15,5,3,2,'Level32A_Glass'],['Level32A_Glass','Level32A_Pappaya',10,30,3,7,'Level32A_Glass'],['Level32A_Glass','Level32A_Pencil',15,5,4,2,'Level32A_Pencil'],['Level32A_Glass','Level32A_ScrewDriver',20,10,5,3,'Level32A_ScrewDriver'],['Level32A_Glass','Level32A_Shoe',10,20,3,5,'Level32A_Shoe'],['Level32A_Glass','Level32A_Carrot',20,10,5,2,'Level32A_Glass'],['Level32A_Glass','Level32A_Coin',20,5,5,1,'Level32A_Coin'],
            
        ['Level32A_Mug','Level32A_Key',20,5,5,2,'Level32A_Key'],['Level32A_Mug','Level32A_Pappaya',10,30,3,8,'Level32A_Mug'],['Level32A_Mug','Level32A_Pencil',20,5,5,2,'Level32A_Pencil'],['Level32A_Mug','Level32A_ScrewDriver',20,10,5,3,'Level32A_Mug'],['Level32A_Mug','Level32A_Shoe',10,20,3,5,'Level32A_Shoe'],
            
        ['Level32A_Key','Level32A_Pappaya',5,30,2,8,'Level32A_Pappaya'],['Level32A_Key','Level32A_Pencil',15,5,4,2,'Level32A_Pencil'],['Level32A_Key','Level32A_ScrewDriver',5,20,1,5,'Level32A_ScrewDriver'],['Level32A_Key','Level32A_Shoe',5,20,1,5,'Level32A_Key'],['Level32A_Key','Level32A_Carrot',5,20,1,5,'Level32A_Carrot'],['Level32A_Key','Level32A_Coin',20,5,5,1,'Level32A_Key'],
            
        ['Level32A_Pappaya','Level32A_Glass',25,10,6,3,'Level32A_Pappaya'],['Level32A_Pappaya','Level32A_Pencil',25,5,6,1,'Level32A_Pencil'],['Level32A_Pappaya','Level32A_ScrewDriver',30,10,7,3,'Level32A_ScrewDriver'],['Level32A_Pappaya','Level32A_Shoe',30,10,7,3,'Level32A_Pappaya'],['Level32A_Pappaya','Level32A_Carrot',30,10,7,3,'Level32A_Carrot'],['Level32A_Pappaya','Level32A_Coin',30,5,7,1,'Level32A_Coin'],
        ['Level32A_Pencil','Level32A_Glass',5,20,1,5,'Level32A_Glass'],['Level32A_Pencil','Level32A_ScrewDriver',5,20,1,5,'Level32A_ScrewDriver'],['Level32A_Pencil','Level32A_Shoe',5,20,1,5,'Level32A_Shoe'],
        ['Level32A_ScrewDriver','Level32A_Glass',10,25,2,6,'Level32A_Glass'],['Level32A_ScrewDriver','Level32A_Shoe',10,25,2,6,'Level32A_ScrewDriver'],
        ['Level32A_Shoe','Level32A_Glass',25,10,6,2,'Level32A_Glass'],['Level32A_Carrot','Level32A_Coin',20,5,5,1,'Level32A_Coin']
        ];
        
       
        
        /*_this.weightArray = [
            [40,20],[40,20],[40,10],[40,10],[40,20],[40,20],[40,30],[40,10],[40,30],[40,10],[40,20],[40,20],
            [20,20],[20,20],[20,10],[20,10],[20,20],[20,20],[20,30],[20,10],[20,30],[20,10],[20,20],[20,20],
            [20,20],[20,20],[20,10],[20,10],[20,20],[20,20],[20,30],[20,10],[20,30],[20,10],[20,20],[20,20],
        ];
        
        
        
        _this.angleArray = [[10,5]];*/
		
		var temp1Array = [0,4,6,8,10,15,17,21,24,25,27,29,31,33,37,38,39,40,41,43,45,46,50,51,56,57,58,60,62,63,64,67,70,71,72,73];
        temp1Array = _this.shuffle(temp1Array);
        var temp2Array = [1,2,3,5,7,9,11,12,13,14,16,18,19,20,22,23,26,28,30,32,34,35,36,42,44,47,48,49,52,53,54,55,59,61,65,66,68,69,74,75];
        temp2Array = _this.shuffle(temp2Array);
  
        _this.qArrays.push(temp1Array[0]);
        _this.qArrays.push(temp1Array[1]);
        _this.qArrays.push(temp1Array[2]);
        _this.qArrays.push(temp2Array[0]);
        _this.qArrays.push(temp2Array[1]);
        _this.qArrays.push(temp2Array[2]);
        
        _this.qArrays = _this.shuffle(_this.qArrays);
		
		
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

       
        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level32A_gameBg');
       
        /*var backbtn = _this.add.button(5,1,'Level32A_CommonBackBtn',function(){
			_this.stopAllVoice();
			_this.state.start('grade1levelSelectionScreen');
		},_this,1,0,2);*/
		
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
        
        //_this.no1++;
       // _this.getQuestion();
         //_this.Voice1(10);
        //_this.input.enabled = false;
        
        
        _this.gotoFirstQuestion();

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
		
		
    	//console.log("get"+_this.no1);
        _this.stopAllVoice();
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
        var q = 0;
        
        if(_this.no1<4)
        {
           // console.log("if");
            q = _this.qArrays[_this.no1]; 
            _this.no1++;
        }
        else if(_this.no1>3&&_this.no1<8)
        {
            //console.log("else")
            q = _this.qArrays1[no2]; 
            _this.no1++;
            no2++;
        }
        else
        {
            q = _this.qArrays2[no3];
            _this.no1++;
            no3++;
        }
        
    	switch(q)      
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
            case 9: _this.gotoNinthQuestion();
    				break;
            case 10: _this.gotoTenthQuestion();
    				break;
            case 11: _this.gotoEleventhQuestion();
    				break;
            case 12: _this.gotoTwevelvethQuestion();
    				break;
            case 13: _this.gotoThirteenthQuestion();
    				break;
            case 14: _this.gotoFourteenthQuestion();
    				break;
            case 15: _this.gotoFifteenthQuestion();
    				break;
            case 16: _this.gotoSixteenthQuestion();
    				break;
            case 17: _this.gotoSeventeenthQuestion();
    				break;
            case 18: _this.gotoEightteenthQuestion();
    				break;
    	}
      
    },
     
   
    removeEverthing:function() 
    {
         
        if(_this.count<5)
        {
            _this.count1++;
            _this.count++;
            _this.wrongFlag = false;
            var MaintweenDestroy = _this.add.tween(_this.objGroup);
            MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
              _this.objGroup.destroy();  
            },_this);
            
            var MaintweenDestroy1 = _this.add.tween(_this.scale1Group);
            MaintweenDestroy1.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy1.onComplete.add(function(){
              _this.scale1Group.destroy();  
            },_this);
            
            var MaintweenDestroy2 = _this.add.tween(_this.scale2Group);
            MaintweenDestroy2.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy2.onComplete.add(function(){
              _this.scale2Group.destroy();  
              _this.gotoFirstQuestion();
            },_this);
            
           // _this.getQuestion();    
        }
        else
        {
           // console.log("gameover");
            _this.objGroup.destroy();
            _this.scale1Group.destroy();
            _this.scale2Group.destroy();
             _this.stopVoice();
            _this.state.start('grade3_2AScore',true,false);
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    

    checkCorrectAns:function(target){
		_this.noofAttempts++;
			var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
        _this.speakerbtn.inputEnabled=false;
        //console.log(target.name);
       // target.frame = 1;
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        if(target.name == _this.rightAns)
        {
        //console.log("wrong");
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
            
       // absdsjsapi.saveAssessment(saveAsment);

       telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
		
           // console.log("right");
            
            var anim = target.animations.add('glow');
            anim.play(12);
             _this.celebr = _this.add.audio('celebr');
            _this.celebr.play();
            object1.events.onInputDown.removeAll(); 
            object2.events.onInputDown.removeAll();
                    
            var starAnim = _this.starsGroup.getChildAt(_this.count1);
            var anim4 = starAnim.animations.add('star');
            anim4.play();
            anim.onComplete.add(function(){_this.removeEverthing();},_this);
        }
        else
        {
            _this.speakerbtn.inputEnabled=true;
            _this.speakerbtn.input.useHandCursor=true;
            shake.shake(10, target);
             _this.waudio = _this.add.audio('waudio');
           	_this.waudio.play();
           // _this.wrongFlag = true;
            //object1.events.onInputDown.removeAll(); 
           // object2.events.onInputDown.removeAll();
           /* _this.time.events.add(500, function()
            {
                //_this.objGroup.destroy();
                //_this.scale1Group.destroy();
                //_this.scale2Group.destroy();
               // _this.gotoFirstQuestion();
               // _this.weightScale2.angle = 0;
                var tween = _this.add.tween(_this.weightScale2);
                tween.to({ angle: 0}, 0, 'Linear', true, 0);
                var tween1 = _this.add.tween(_this.scale1Group);
                    tween1.to({ y: 0}, 0, 'Linear', true, 0);
                var tween2 = _this.add.tween(_this.scale2Group);
                    tween2.to({ y: 0}, 0, 'Linear', true, 0);
                tween2.onComplete.add(function(){
                    _this.objGroup.destroy();
                _this.scale1Group.destroy();
                _this.scale2Group.destroy();
                _this.gotoFirstQuestion();
                    
                },_this);
                
            },_this);*/

           /* var currentTime = window.timeSaveFunc();
                var saveAsment = 
                { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid,   
                    pass: "no",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: currentTime, 
                    access_token: window.acctkn 
                }
            
            absdsjsapi.saveAssessment(saveAsment);*/
        }
        
       // console.log(selectedAns);
        
    },
    
    
    gotoFirstQuestion:function(){
		_this.noofAttempts = 0;
        _this.sceneCount++;
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
		
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
        _this.getVoice();
        _this.objAdded = 0;
        _this.scale1Empty = true;
        _this.scale2Empty = true;
        _this.objGroup = _this.add.group();
        _this.scale1Group = _this.add.group();
        _this.scale2Group = _this.add.group();
    /*
        _this.mainSprite = _this.add.sprite(560,192,'Level32A_shoe');
        _this.mainSprite.anchor.setTo(0.5);
        _this.mainSprite.name = "shoe";
        _this.mainSprite.width -= 8;*/
        
        _this.weightScale1 = _this.add.sprite(_this.world.centerX,49,'Level32A_weight2');
        _this.weightScale1.anchor.setTo(0.5,0);
        
        _this.weightScale2 = _this.add.sprite(_this.world.centerX,128,'Level32A_weight1');
        _this.weightScale2.anchor.setTo(0.5,0.5);
        
        _this.weightScale3 = _this.add.sprite(150,112,'Level32A_weight3');
        
        var graphics = _this.add.graphics(35, 200);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,100,150);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        _this.weightScale3.addChild(graphics);
             
        _this.weightScale4 = _this.add.sprite(650,112,'Level32A_weight3');
        
        var graphics1 = _this.add.graphics(35, 200);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,100,150);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        _this.weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
        object1 = _this.add.sprite(_this.world.centerX-80,350,_this.objArray[_this.qArrays[_this.count]][0]);
        object1.name = _this.objArray[_this.qArrays[_this.count]][0];
        
        _this.rightAns = _this.objArray[_this.qArrays[_this.count]][6];
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
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
			
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            tempX = object1.x;
            tempY = object1.y;
            object1.input.enableDrag();
            object1.events.onDragStop.add(function(target){
			
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
			
                object1.input.disableDrag();
                object1.events.onDragStop.removeAll();
                if(_this.checkOverlap(object1,_this.weightScale3.getChildAt(0))&&_this.scale1Empty)
                {
                    _this.scale1Empty = false;
                    _this.scale1Group.add(object1);
                    _this.scale1Group.bringToTop(_this.weightScale3);
                    object1.x = 240;
                    object1.y = _this.weightScale3.y+350;
                    if(object1.name == "Pencil"||object1.name == "Key"||object1.name == "ScrewDriver"||object1.name == "Carrot"||object1.name == "Coin")
                    {
                        object1.angle -= 10;
                        object1.x += 20;
                        object1.y -= 10;
                    }
                    _this.snapSound = _this.add.audio('snapSound');
           					_this.snapSound.play();
                    object1.events.onInputDown.removeAll();
                    _this.tweenTheMachineRight(_this.weightScale2,_this.scale1Group,_this.scale2Group,_this.objArray[_this.qArrays[_this.count]][2],_this.objArray[_this.qArrays[_this.count]][4]);
                }
                else if(_this.checkOverlap(object1,_this.weightScale4.getChildAt(0))&&_this.scale2Empty)
                {
                    _this.scale2Empty = false;
                    _this.scale2Group.add(object1);
                    _this.scale2Group.bringToTop(_this.weightScale4);
                    object1.x = 740;
                    object1.y = _this.weightScale4.y+350;
                    if(object1.name == "Pencil"||object1.name == "Key"||object1.name == "ScrewDriver"||object1.name == "Carrot"||object1.name == "Coin")
                    {
                        object1.angle -= 10;
                        object1.x += 20;
                        object1.y -= 10;
                    }
                    _this.snapSound = _this.add.audio('snapSound');
           					_this.snapSound.play();
                    object1.events.onInputDown.removeAll();
                    
                    _this.tweenTheMachineLeft(_this.weightScale2,_this.scale1Group,_this.scale2Group,_this.objArray[_this.qArrays[_this.count]][2],_this.objArray[_this.qArrays[_this.count]][4]);
                }
                else
                {
                    object1.x = tempX;
                    object1.y = tempY;
                }


            },_this);
            
        },_this);
        //obj1.addChild(object1);
        
        object2 = _this.add.sprite(_this.world.centerX+100,350,_this.objArray[_this.qArrays[_this.count]][1]);
        object2.name = _this.objArray[_this.qArrays[_this.count]][1];
        object2.anchor.setTo(0.5,1);
       // obj2.addChild(object2);
        object2.inputEnabled = true;
        object2.input.useHandCursor = true;
        object2.events.onInputDown.add(function(target){
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
			
            //console.log("times");
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            tempX = object2.x;
            tempY = object2.y;
            object2.input.enableDrag();
            object2.events.onDragStop.add(function(target){
			
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
                object2.input.disableDrag();
                object2.events.onDragStop.removeAll();
                if(_this.checkOverlap(object2,_this.weightScale3.getChildAt(0))&&_this.scale1Empty)
                {
                    //console.log("hit");
                    _this.scale1Empty = false;
                    _this.scale1Group.add(object2);
                    _this.scale1Group.bringToTop(_this.weightScale3);
                    object2.x = 240;
                    object2.y = _this.weightScale3.y+350;
                    if(object2.name == "Pencil"||object2.name == "Key"||object2.name == "ScrewDriver"||object2.name == "Carrot"||object2.name == "Coin")
                    {
                        object2.angle -= 10;
                        object2.x += 20;
                        object2.y -= 10;
                    }
                     _this.snapSound = _this.add.audio('snapSound');
           					_this.snapSound.play();
                    object2.events.onInputDown.removeAll();
                    _this.tweenTheMachineRight(_this.weightScale2,_this.scale1Group,_this.scale2Group,_this.objArray[_this.qArrays[_this.count]][3],_this.objArray[_this.qArrays[_this.count]][5]);
                }
                else if(_this.checkOverlap(object2,_this.weightScale4.getChildAt(0))&&_this.scale2Empty)
                {
                   // console.log("hit");
                    _this.scale2Empty = false;
                    _this.scale2Group.add(object2);
                    _this.scale2Group.bringToTop(_this.weightScale4);
                    object2.x = 740;
                    object2.y = _this.weightScale4.y+350;
                    if(object2.name == "Pencil"||object2.name == "Key"||object2.name == "ScrewDriver"||object2.name == "Carrot"||object2.name == "Coin")
                    {
                        object2.angle -= 10;
                        object2.x += 20;
                        object2.y -= 10;
                    }
                     _this.snapSound = _this.add.audio('snapSound');
           					_this.snapSound.play();
                    object2.events.onInputDown.removeAll();
                    _this.tweenTheMachineLeft(_this.weightScale2,_this.scale1Group,_this.scale2Group,_this.objArray[_this.qArrays[_this.count]][3],_this.objArray[_this.qArrays[_this.count]][5]);
                }
                else
                {
                    object2.x = tempX;
                    object2.y = tempY;
                }


            },_this);
            
        },_this);
        
        //_this.objGroup.add(object1);
       // _this.objGroup.add(object2);
        
        _this.objGroup.add(_this.weightScale1);
        _this.objGroup.add(_this.weightScale2);
        
        _this.scale1Group.add(_this.weightScale3);
        _this.scale2Group.add(_this.weightScale4);
        
        
        //_this.bringToTop(_this.weightScale2);

     /*   var tween = _this.add.tween(_this.weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = _this.add.tween(_this.weightScale3);
            tween1.to({ y: _this.weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = _this.add.tween(_this.weightScale4);
            tween2.to({ y: _this.weightScale4.y+40}, 0, 'Linear', true, 1000);
        */   
        if(!_this.wrongFlag)
        {
            _this.objGroup.x = 1000;
            _this.scale1Group.x = 1000;
            _this.scale2Group.x = 1000;
            object1.x = object1.x+900;
            object2.x = object2.x+900;
            var Maintween = _this.add.tween(_this.objGroup);
            Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            var Maintween1 = _this.add.tween(_this.scale1Group);
            Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
            var Maintween2 = _this.add.tween(_this.scale2Group);
            Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
            var Maintween3 = _this.add.tween(object1);
            Maintween3.to({ x: object1.x-900}, 0, 'Linear', true, 0);
            var Maintween4 = _this.add.tween(object2);
            Maintween4.to({ x: object2.x-900}, 0, 'Linear', true, 0);
        }
      
     },
    
    


    getVoice:function(){
       _this.stopVoice();   
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.count])
        {
            case 0:
            case 4:
            case 6:
            case 8:
            case 10:
            case 15:
            case 17:
            case 21:
            case 24:
            case 25:
            case 29:
            case 31:
            case 33:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 43:
            case 45:
            case 46:
            case 50:
            case 51:
            case 57:
            case 58:
            case 60:
            case 62:
            case 63:
            case 64:
            case 67:
            case 70:
            case 71:
            case 72:
            case 73:
            case 27:
            case 56:
                    _this.questionid = 1;
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/Eng_3.2A1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/Hin_3.2A1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/Kan_3.2A1.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/3.2_A1.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 1:
            case 2:
            case 3:
            case 5:
            case 7:
            case 9:
            case 11:
            case 12:
            case 13:
            case 14:
            case 16:
            case 19:
            case 20:
            case 22:
            case 23:
            case 26:
            case 28:
            case 30:
            case 32:
            case 34:
            case 35:
            case 36:
            case 42:
            case 44:
            case 47:
            case 48:
            case 49:
            case 52:
            case 53:
            case 54:
            case 55:
            case 59:
            case 61:
            case 65:
            case 66:
            case 68:
            case 69:
            case 74:
            case 75:
            case 18:
                    _this.questionid = 2;
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/Eng_3.2A2.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/Hin_3.2A2.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/Kan_3.2A2.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", "questionSounds/3.2A/3.2_A2.mp3");
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

     
   
    tweenTheMachineLeft:function(w2,w3,w4,weight,angle)
    {
        
        var tween = _this.add.tween(w2);
            tween.to({ angle: w2.angle+angle}, 0, 'Linear', true, 0);
        var tween1 = _this.add.tween(w3);
            tween1.to({ y: w3.y-weight}, 0, 'Linear', true, 0);
        var tween2 = _this.add.tween(w4);
            tween2.to({ y: w4.y+weight}, 0, 'Linear', true, 0);
       
        _this.objAdded++;
        if(_this.objAdded>=2)
        {
             object1.events.onInputDown.add(_this.checkCorrectAns,_this);   
             object2.events.onInputDown.add(_this.checkCorrectAns,_this);   
        }
    },
    
    tweenTheMachineRight:function(w2,w3,w4,weight,angle)
    {
        
        var tween = _this.add.tween(w2);
            tween.to({ angle: w2.angle-angle}, 0, 'Linear', true, 0);
        var tween1 = _this.add.tween(w3);
            tween1.to({ y: w3.y+weight}, 0, 'Linear', true, 0);
        var tween2 = _this.add.tween(w4);
            tween2.to({ y: w4.y-weight}, 0, 'Linear', true, 0);
        
        _this.objAdded++;
        if(_this.objAdded>=2)
        {
             object1.events.onInputDown.add(_this.checkCorrectAns,_this);   
             object2.events.onInputDown.add(_this.checkCorrectAns,_this);   
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

    shutdown:function()
    {
         _this.stopVoice();
    }

    
};