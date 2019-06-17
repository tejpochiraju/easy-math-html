Game.grade4_3Alevel1=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var fillingJarGroup;
var crocsGroup;
var tickMark;
var objGroup;
var rightOrderArray = [];
var glowOrderArray = [];
var no1;
var count;
var count1;
var qArrays = [];
var graphics;
var tweenCount;

var selectedAns = "";
var rightAns = "";
var counterText;
var countIncrement = 0;
var questionNo;
var mainSprite;
var smallJar = 0;
var shakeObjectGroup;
var b1;
var b2;
var b3;
var b4;
 var  equation;
var eqnum;
var wrong;
var timeforlng=0;

var enterTxt;

var noofAttempts;
var timer;
var AnsTimerCount;

var gameid;

Game.grade4_3Alevel1.prototype={

    init:function(game)
    {
        _this = this;
        
        _this.gameid = "4.3A";
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("volume4_3A",gradeSelected);
        
    },


	create:function(game){
		_this.amplify = null;

        noofAttempts=0;
        AnsTimerCount=0;
        
        _this.sceneCount = 0;
        
        wrong = true;
        no1=0;
         _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;

        countIncrement = 0;
        smallJar = 0;
        timeforlng=0;
        selectedAns = "";
        rightAns = "";

       // qArrays = [1,3,5,7,9,11];
        qArrays = [1,2,3,4,5,6,7,8];
        qArrays = this.shuffle(qArrays);
        count=0;
        count1=0;
        tweenCount = 0;
		noofAttempts=0;
		AnsTimerCount=0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        

        bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg1');
       

		_this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
		
		/*var backbtn = this.add.button(5,1,'Level43A_CommonBackBtn',function(){
		this.stopVoice();
		countIncrement = 0;
		enterTxt.setText("");
		selectedAns="";
		this.state.start('grade4levelSelectionScreen');
		},this,1,0,2);

       _this.speakerbtn = this.add.button(908,1,'Level43A_CommonSpeakerBtn',function(){
			this.getVoice(1);
		},this,1,0,2);*/
		
		
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
            _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = this.add.button(595,7,'Level42A_CommonSpeakerBtn',function(){},this,1,0,2);
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
           
            _this.getVoice(1);
            
        },_this);

        _this.timebg=this.add.sprite(300,7,'Level42B_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1.2,1);


            this.timeDisplay = this.add.text(330,23,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';


            /*_this.dottedBox=this.add.sprite(70,7,'dottedBox');
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
        
            _this.numTxt2 = this.add.text(220,24, 'Volume');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
		
        
       /* graphics = this.add.graphics(0, 400);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,960,120);		
		graphics.boundsPadding = 0;
		graphics.alpha=0;*/
		
		
        
        this.generateStarsForTheScene(6);
        
       // no1++;
        this.getQuestion();

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

    getQuestion:function(target)
    {   
		noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

         _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
  _this.timer1.start();

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();


        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        //console.log("get"+no1);
		//no1 = 8;
		_this.questionid = 1;
    	switch(qArrays[no1])      
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
            case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEighthQuestion();
    				break;
            case 9: this.gotoNinthQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
            case 11: this.gotoEleventhQuestion();
    				break;
            case 12: this.gotoTwevelvethQuestion();
    				break;
           
    	}
        
    },
    
    addQuestion:function(no2)
    {
          //////console.log("here");
           this.time.events.add(2000, function(){
  
           var tween = this.add.tween(flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(this.changeQuestion, this);


            }, this);
    },
    
    gotoFirstQuestion:function(){
        
        questionNo = 1;
        
        //console.log("Question number "+questionNo);
        eqnum = 0;
		_this.firstValue = 50;
		_this.secondValue = 20;
         objGroup = this.add.group();
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
        
     
         b2 = this.add.sprite(590,445,'Level43A_1000A');
         b2.anchor.setTo(0.5,1);
         b2.name = "1000A";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(580,215,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
        
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
        
        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
       if(wrong)
            {

                shakeObjectGroup.x = 1000;
                b3.x = 1000;
                var Maintween = this.add.tween(shakeObjectGroup);
                Maintween.to({ x: 0}, 0,'Linear', true, 0);
                var Maintween1 = this.add.tween(b3);
                Maintween1.to({ x: 220}, 0,'Linear', true, 0);
            }
                counterText.setText("0");
           
        
     },
    
    gotoSecondQuestion:function(){
        
          questionNo = 2;
        eqnum = 1;
		_this.firstValue = 50;
		_this.secondValue = " "+5;
          // console.log("Question number "+questionNo);
         fillingJarGroup = this.add.group();
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_250A');
         b2.anchor.setTo(0.5,1);
         b2.name = "250A";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(590,306,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);
         
        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
        
     },
    gotoThirdQuestion:function(){
       
          questionNo = 3;
         eqnum = 2; 
		_this.firstValue = 50;
		_this.secondValue = " "+4;		 
       // console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_200A');
         b2.anchor.setTo(0.5,1);
         b2.name = "200A";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(590,335,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
        
     },
    gotoFourthQuestion:function(){
        
          questionNo = 4;
        eqnum = 3;
		_this.firstValue = 50;
		_this.secondValue = 10;
        //  console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_50Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "50Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_500A');
         b2.anchor.setTo(0.5,1);
         b2.name = "500A";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(585,259,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
        
     }, 
    gotoFifthQuestion:function(){
        
          questionNo = 5;
         eqnum = 4;
		 _this.firstValue = 100;
		_this.secondValue = " "+2;
         // console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_100Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "100Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_200A');
         b2.anchor.setTo(0.5,1);
         b2.name = "500A";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(590,335,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
        
     }, 
    gotoSixthQuestion:function(){
        
          questionNo = 6;
        smallJar = 0
         eqnum = 5;
		 _this.firstValue = 100;
		_this.secondValue = 10;
         // console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(300,415,'Level43A_100Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "100Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_1000A');
         b2.anchor.setTo(0.5,1);
         b2.name = "1000A";
      
         b3 = this.add.sprite(230,440,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(580,215,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 220}, 0,'Linear', true, 0);
        }
        counterText.setText("0");
        
     },
    gotoSeventhQuestion:function(){
         
         questionNo = 7;
         smallJar = 0;
         eqnum = 6;
		 _this.firstValue = 250;
		_this.secondValue = " "+2;
        //  console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_500A');
         b2.anchor.setTo(0.5,1);
         b2.name = "500A";
      
         b3 = this.add.sprite(160,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(585,259,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
            }
        counterText.setText("0");
        
     },
    gotoEighthQuestion:function(){
         
         questionNo = 8;
         smallJar = 0;
		 _this.firstValue = 250;
		_this.secondValue = " "+4;
   // console.log("Question number "+questionNo);
         eqnum = 7;
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_250Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "250Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_1000A');
         b2.anchor.setTo(0.5,1);
         b2.name = "1000A";
      
         b3 = this.add.sprite(160,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(580,212,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
      
        if(wrong){
            
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 160}, 0,'Linear', true, 0);
        }
         counterText.setText("0");
        
     },
    gotoNinthQuestion:function(){
         
         questionNo = 9;
         smallJar = 0;
         eqnum = 8;
		 _this.firstValue = 500;
		_this.secondValue = " "+2;
        // console.log("Question number "+questionNo);
         shakeObjectGroup = this.add.group();
         b1 = this.add.sprite(260,415,'Level43A_500Q');
         b1.anchor.setTo(0.5,1);
         b1.name = "500Q";
         if(no1==0)
         {
            this.getVoice();
            this.time.events.add(11000,function(){
                b1.inputEnabled = true;
    	        b1.input.useHandCursor = true;
                b1.events.onInputDown.add(this.onTapfillTheContainer,this);
            },this); 
         }
         else
         {
             b1.inputEnabled = true;
    	     b1.input.useHandCursor = true;
             b1.events.onInputDown.add(this.onTapfillTheContainer,this);
         }
     
         b2 = this.add.sprite(590,440,'Level43A_1000A');
         b2.anchor.setTo(0.5,1);
         b2.name = "1000A";
      
         b3 = this.add.sprite(150,430,'Level43A_incBox');
         b3.anchor.setTo(0.5,1);
         b3.name = "incBox";
            
         b4 = this.add.sprite(580,212,'Level43A_arrow');
         b4.anchor.setTo(0.5,1);
         b4.name = "arrow";
     
         counterText = this.add.text(-1.5,-50,'Level43A_');
            //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'myfont';
        counterText.fontSize = 30;
        counterText.fontWeight = 'normal';
            //text.fontWeight = 'bold';
        counterText.fill = '#65B4C3';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        b3.addChild(counterText);


        shakeObjectGroup.add(b1);
        shakeObjectGroup.add(b2);
        shakeObjectGroup.add(b4);
        console.log("wrong"+!wrong);
      
        if(wrong){
            shakeObjectGroup.x = 1000;
            b3.x = 1000;
            var Maintween = this.add.tween(shakeObjectGroup);
            Maintween.to({ x: 0}, 0,'Linear', true, 0);
            var Maintween1 = this.add.tween(b3);
            Maintween1.to({ x: 150}, 0,'Linear', true, 0);
        }
            counterText.setText("0");
      
        
     },
    
onTapfillTheContainer:function(target)
    {
		/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
       // console.log("Im pressed");
        countIncrement++;
        if(questionNo == 1)
            {
                  _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 20)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 135}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 345}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        if(questionNo == 2)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 5)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 250;
                    }
            }
        if(questionNo == 3)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 4)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 200;
                    }
            }
        if(questionNo == 4)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
               b2.frame=countIncrement;
               counterText.setText(countIncrement);
                if(countIncrement == 10)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 500;
                    }
            }
        if(questionNo == 5)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(countIncrement == 1)
                    b2.frame=countIncrement+1;
                if(countIncrement ==2)
                    b2.frame=countIncrement+2;
                counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 200;
                    }
            } 
        if(questionNo == 6)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                smallJar +=2;
                //console.log("smallJar"+smallJar);
                    b2.frame=smallJar;
                  counterText.setText(countIncrement);
                
                if(countIncrement == 10)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 130}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        if(questionNo == 7)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(countIncrement==1)
                    b2.frame=countIncrement+4;
                if(countIncrement ==2)
                    b2.frame=countIncrement+8;
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 110}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 500;
                    }
            }
        if(questionNo == 8)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(countIncrement==1)
                    b2.frame=countIncrement+4;
                if(countIncrement ==2)
                    b2.frame=countIncrement+8;
                if(countIncrement==3)
                    b2.frame=countIncrement+12;
                if(countIncrement ==4)
                    b2.frame=countIncrement+16;
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 4)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 200}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 350}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 110}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        
         if(questionNo == 9)
            {
                   _this.waterFill = _this.add.audio('waterFill');
            _this.waterFill.play();
                if(countIncrement==1)
                    b2.frame=countIncrement+9;
                if(countIncrement ==2)
                    b2.frame=countIncrement+18;
                
                 counterText.setText(countIncrement);
                
                if(countIncrement == 2)
                    {
                        b1.inputEnabled = false;
                        
                        var Maintween = this.add.tween(b1);
                        Maintween.to({ x: 190}, 0,'Linear', true, 0);
                        
                        var Maintween1 = this.add.tween(b2);
                        Maintween1.to({ x: 355}, 0,'Linear', true, 0);
                        
                         var Maintween3 = this.add.tween(b3);
                        Maintween3.to({ x: 85}, 0,'Linear', true, 0);
                        
                        var Maintween4 = this.add.tween(b4);
                        Maintween4.to({ x: 350}, 0,'Linear', true, 0);
                        
                        Maintween4.onComplete.add(this.displayEquation,this);
                        rightAns  = 1000;
                    }
            }
        
    },
displayEquation:function()
    {
         
        /*counterText = this.add.text(520,300,'Level43A_');
        //titletext.scale.setTo(1.5);
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';

        counterText.font = 'Alte Haas Grotesk';
        counterText.fontSize = 32;
            //text.fontWeight = 'bold';
        counterText.fill = '#FFFFFF';

        counterText.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        counterText.setText(smallJar+" ml x "+countIncrement+" =");
        this.addNumberPad();*/
		
		 /*equation = this.add.sprite(600,325,'Level43A_equation');
         equation.anchor.setTo(0.5,1);
         equation.frame = eqnum;
         equation.name = "equation";
         shakeObjectGroup.add(equation);*/
         
	     this.addNumberPad();
		 if(qArrays[no1] ==5 || qArrays[no1] == 6 ||qArrays[no1]==7 || qArrays[no1]==8 || qArrays[no1]==9){
			  if(window.languageSelected=="English"){
			 
			kgTxt0 = this.add.text(585,300, _this.firstValue+" ml x "+_this.secondValue+" = ");
            kgTxt = this.add.text(560,300);
            kgTxt1 = this.add.text(800,300, "ml");
			//kgTxt.font = 'myfont';
			kgTxt0.font = 'myfont';
			kgTxt1.font = 'myfont';
			//kgTxt.fontWeight = 'normal';
			kgTxt1.fontWeight = 'normal'
			//kgTxt.fontSize = 25;
			kgTxt0.fontSize = 40;
			kgTxt1.fontSize = 45;
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt0 = this.add.text(575,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(557,305, "मि.ली ");
				kgTxt1 = this.add.text(810,305, "मि.ली ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
			}
          else if(window.languageSelected=="Kannada"){
			  kgTxt0 = this.add.text(580,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(561,305, " ಮಿ.ಲೀ ");
				kgTxt1 = this.add.text(810,305, " ಮಿ.ಲೀ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 16;
				kgTxt1.fontSize = 16;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else {
				kgTxt0 = this.add.text(575,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(557,305, "ମି.ଲି  ");
				kgTxt1 = this.add.text(810,305, "ମି.ଲି  ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 40;
				kgTxt.fontSize = 18;
				kgTxt1.fontSize = 18;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		 }
		 else
		 {
		 if(window.languageSelected=="English"){
			 
			kgTxt0 = this.add.text(588,300, _this.firstValue+" ml x "+_this.secondValue+" = ");
            kgTxt = this.add.text(560,300);
            kgTxt1 = this.add.text(800,300, "ml");
			//kgTxt.font = 'myfont';
			kgTxt0.font = 'myfont';
			kgTxt1.font = 'myfont';
			//kgTxt.fontWeight = 'normal';
			kgTxt1.fontWeight = 'normal'
			//kgTxt.fontSize = 25;
			kgTxt0.fontSize = 40;
			kgTxt1.fontSize = 40;
		 }
         else if(window.languageSelected=="Hindi"){
				kgTxt0 = this.add.text(585,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(559,305, "मि.ली ");
				kgTxt1 = this.add.text(810,305, "मि.ली ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
			}
          else if(window.languageSelected=="Kannada"){
			    kgTxt0 = this.add.text(579,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(552,305, " ಮಿ.ಲೀ ");
				kgTxt1 = this.add.text(810,305, " ಮಿ.ಲೀ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 16;
				kgTxt1.fontSize = 16;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		   else {

				kgTxt0 = this.add.text(585,300, _this.firstValue+"  "+"    x "+_this.secondValue+" = ");
				kgTxt = this.add.text(559,305, "ମି.ଲି ");
				kgTxt1 = this.add.text(810,305, "ମି.ଲି ");
				kgTxt0.font = 'myfont';
				kgTxt.font = 'Comic Sans MS';
				kgTxt1.font = 'Comic Sans MS';
				kgTxt0.fontSize = 38;
				kgTxt.fontSize = 17;
				kgTxt1.fontSize = 17;
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';
				kgTxt.fill = '#ffffff';
		   }
		 }
		   
		
		kgTxt0.anchor.setTo(0.5);
		//kgTxt.anchor.setTo(0.5);
		kgTxt1.anchor.setTo(0.5);
        kgTxt0.align = 'center';
        //kgTxt.align = 'center';
        kgTxt1.align = 'center';

       // kgTxt.font = 'Comic Sans MS';
       // kgTxt.font = 'myfont';
        
		kgTxt0.fontWeight = 'normal'
            //text.fontWeight = 'bold';
        kgTxt0.fill = '#ffffff';
        kgTxt1.fill = '#ffffff';

        kgTxt0.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
        kgTxt1.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
		
		 shakeObjectGroup.add(kgTxt0);
		 shakeObjectGroup.add(kgTxt);
		 shakeObjectGroup.add(kgTxt1);
       /*if(window.languageSelected == "English"){
		equation.frame = eqnum;
	   }
	   else if(window.languageSelected == "Hindi")
	   {
		equation.frame = eqnum+1;
	   }else{
		equation.frame = eqnum+2;
	   }*/
       
        
    },
    
    addNumberPad:function(){
        
        numGroup = this.add.group();
        objGroup = this.add.group();
        var x = 80;
        var bottomBar=numGroup.create(0,470,'bottomBar');
        bottomBar.name="bottomBar";
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,505,'Level43A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.frame=i;

            
            /*var numTxt = this.add.text(-2,1, i);
            titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';
           // numTxt.visible=false;
            numTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=70;
        }
        
        


        var txtbox = this.add.sprite(735,300,'Level43A_AnswerBox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "AnswerBox";
        objGroup.add(txtbox);
        var wrongbtn = numGroup.create(x+10,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
       // wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+75,505,'tick');
        rightbtn.anchor.setTo(0.5);
       // rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.scale.setTo(1.1,1.1);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
        enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        txtbox.name = "txtbox";
        //numGroup.add(txtbox);
        
        numGroup.y = 50;
		var tween = this.add.tween(numGroup);
		tween.to({ y: 0 }, 0, 'Linear', true, 0); 
			
        wrongbtn.events.onInputDown.add(function(target){_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();var currentTime = window.timeSaveFunc();
		/*	var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
			
			wrongbtn.frame = 1;enterTxt.setText("");selectedAns="";
                                                  this.time.events.add(1000, function(){wrongbtn.frame = 0},this);
                                                  },this);
        
        rightbtn.events.onInputDown.add(function(target){
			noofAttempts++;
			/*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
			
            //console.log("right btn");
            _this.speakerbtn.inputEnabled=false;
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            rightbtn.frame = 1;
             this.time.events.add(1000, function(){rightbtn.frame = 0},this);
            console.log(selectedAns);
            console.log(rightAns);
            if(selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns)  
                {
					target.events.onInputDown.removeAll();
                     if(_this.timer1)
            {
            _this.timer1.stop();
            }
                    if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }

                     var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: currentTime, 
                            access_token: window.acctkn 
                        }
                
               // absdsjsapi.saveAssessment(saveAsment);

               telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
                    
                    //var anim = equation.animations.add('equation');
                    //anim.play(1);
                    _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
                    var starAnim = starsGroup.getChildAt(count1);
                   // console.log(starAnim);
                    starAnim.smoothed = false;
                    var anim4 = starAnim.animations.add('star');
                    anim4.play();
                    //anim.onComplete.add(function(){this.removeEverthing();},this);
                   // this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                    //equation.frame = eqnum+1;
                    txtbox.frame = 1;
                  /*  var tween = this.add.tween(equation.scale);
                    tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);*/
                    var tween1 = this.add.tween(txtbox.scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    tween1.onComplete.add(function(){
                      
                       // equation.frame = eqnum;
                        //txtbox.frame = 0;
                        
                        /*var tween1 = this.add.tween(equation.scale);
                        tween1.to({ x:1 , y:1}, 300,'Linear', true, 0);*/
                        var tween2 = this.add.tween(txtbox.scale);
                        tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                          
                     tween2.onComplete.add(function(){
                         var tween1 = this.add.tween(txtbox.scale);
                         tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    tween1.onComplete.add(function(){
                             var tween2 = this.add.tween(txtbox.scale);
                             tween2.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    },this);
                    },this);
                    },this);
					var tween1 = this.add.tween(numGroup);
                    tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                    this.time.events.add(2000, function(){this.removeEverthing();},this);
                }
            else
                {
					//noofAttempts++;
                    _this.speakerbtn.inputEnabled=true;
                    _this.speakerbtn.input.useHandCursor=true;
                   // console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10, txtbox);
                    _this.wmusic = this.add.audio('waudio');
            _this.wmusic.play();
                    //aiyoh.play();
                   // this.time.events.add(2000, function(){this.backToOriginalPosition();},this);
  
                }
        },this);
			
    },
    
     numClicked:function(target){
       // console.log(target.name);
       // target.frame = 1;
	   /*var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name,
				access_token: window.acctkn 
			} 
			absdsjsapi.saveInteractEvent(interactEvent);*/
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        if(selectedAns.length<4)
        {
            selectedAns += target.frame;
            objGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },
    
    removeEverthing:function() 
    {
      //  gameBoxGroup.destroy();
      //  crocsGroup.destroy();
      //  objGroup.destroy();
        no1++;
       // console.log("--------------------------"+no1);
        if(no1<6)
        {
            //no1++;
            wrong = true;
            var MaintweenDestroy = this.add.tween(shakeObjectGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            
            var MaintweenDestroy1 = this.add.tween(b3);
            MaintweenDestroy1.to({ x: -1000}, 0,'Linear', true, 0);
            
//            var MaintweenDestroy2 = this.add.tween(equation);
//            MaintweenDestroy2.to({ x: -1000}, 0,'Linear', true, 0); 
            
            var MaintweenDestroy2 = this.add.tween(numGroup);
            MaintweenDestroy2.to({ x: -1000}, 0,'Linear', true, 0); 
			
			var MaintweenDestroy3 = this.add.tween(objGroup);
            MaintweenDestroy3.to({ x: -1000}, 0,'Linear', true, 0);
            
            MaintweenDestroy.onComplete.add(function(){
                 b3.destroy();
                //equation.destroy();
               objGroup.destroy();
               numGroup.destroy();
                count =0;
                shakeObjectGroup.destroy();
                counterText.setText("");
                selectedAns = '';
                countIncrement = 0;
                this.getQuestion();
            },this);
            
               
            tweenCount=0;
           // this.getQuestion(); 
 
               
        }
        else
        {
           // //console.log("gameover");
            selectedAns = '';
            countIncrement = 0;
           // this.stopVoice();
            this.state.start('grade4_3AScore');
        }
    },
    backToOriginalPosition:function(){
       
//        var MaintweenDestroy = this.add.tween(shakeObjectGroup);
//            MaintweenDestroy.to({ x: -100}, 0,'Linear', true, 0);
//        
//        var MaintweenDestroy1 = this.add.tween(b3);
//            MaintweenDestroy1.to({ x: 160}, 0,'Linear', true, 0);
        selectedAns = 0;
        countIncrement = 0;
       /*shakeObjectGroup.destroy();
       b3.destroy();
       equation.destroy();
       objGroup.destroy();*/
       // numGroup.destroy();
       // wrong = false;
       // this.addNumberPad();
        //this.getQuestion();
        
    },
    
    
    checkAns:function(target){
       // //console.log("here");
        objGroup.destroy();
       // target.events.onInputDown.removeAll();
        
        var tween = this.add.tween(gameBoxGroup);
    	tween.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){

        }, this);
       
        var tween1 = this.add.tween(crocsGroup);
    	tween1.to({ y: 100 }, 0,'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween1.onComplete.add(function(){
             //this.checkFortheRightOrder();
            _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
             var starAnim = starsGroup.getChildAt(count1);
               // //console.log(starAnim);
                starAnim.smoothed = false;
                var anim4 = starAnim.animations.add('star');
                anim4.play();
                anim4.onComplete.add(function(){this.addGlowtoTheSprite();},this);
            count1++;
            
        }, this);
        

        
    },
    
    
  
    
    checkFortheRightOrder:function(target){
        target.frame = 1;
        _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
        target.events.onInputDown.removeAll();
        var wrongBox = this.add.group();
        var wrongBoxArray = [];
        var indexArray = [];
        var rightCount = 0;
        var selectedFrameArray = [];
        var objTovisible = [];
        var wrongXpos = [];
        var wrongYpos = [];
        wrongBox.x = gameBoxGroup.x;
        wrongBox.y = gameBoxGroup.y;
       // //console.log(gameBoxGroup.children.length);
        
        
        for(var i=0;i<gameBoxGroup.children.length;i++)
        {
           // //console.log("for");
           // //console.log(gameBoxGroup.getChildAt(i).frameName,rightOrderArray[i]);
            if(gameBoxGroup.getChildAt(i).frameName == rightOrderArray[i])
            {
              // //console.log("right");
               rightCount++;
                selectedFrameArray.push(gameBoxGroup.getChildAt(i).frameName);
            }
            else
            {
                //gameBoxGroup.getChildAt(i).frameName = rightOrderArray[i];
               // //console.log(gameBoxGroup.getChildAt(i).frameName);
                count--;
                gameBoxGroup.getChildAt(i).visible = false;
                selectedFrameArray.push("blank");
                objTovisible.push(gameBoxGroup.getChildAt(i).frameName);
                wrongBoxArray.push(gameBoxGroup.getChildAt(i).frameName);
                indexArray.push(i);
                wrongXpos.push(gameBoxGroup.getChildAt(i).x);
                wrongYpos.push(gameBoxGroup.getChildAt(i).y);
            }
        }
        
        for(var j=0;j<wrongBoxArray.length;j++)
        {
           //wrongBox.add(wrongBoxArray[j]); 
            var wBox = wrongBox.create(0,0,'Level43A_gameBox');
            wBox.anchor.setTo(0.435,0.42);
            wBox.x = wrongXpos[j];
            wBox.y = wrongYpos[j];
            wBox.frameName = wrongBoxArray[j];
        }
        shake.shake(10,wrongBox);
       
         this.time.events.add(1000, function(){

          
            wrongBox.destroy();
             
            for(var j=0;j<gameBoxGroup.children.length;j++)
            {
                gameBoxGroup.getChildAt(j).visible = true;
                gameBoxGroup.getChildAt(j).frameName = selectedFrameArray[j];
            }
            for(var k=0;k<objTovisible.length;k++)
            {
                 objGroup.getByName(objTovisible[k]).visible = true;  
            }
            
            //this.addGlowtoTheSprite();
             if(rightCount>=4)
                 {
                     
                 }
             else
                 {
                     target.frame = 0;
                 }
            
         }, this);
        if(rightCount>=4)
        {
            
            for(var k=0;k<gameBoxGroup.children.length;k++)
            {
                gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.removeAll();
            }
            
            this.checkAns();
        }
        else
        {
              _this.wmusic = this.add.audio('waudio');
            _this.wmusic.play();
         
        }
        
    },
    
    addGlowtoTheSprite:function(target){
      //  //console.log("Glow");
        gameBoxGroup.getChildAt(glowOrderArray[0]).removeChildren();
        var glow = this.add.sprite(0,0,'Level43A_glow');
        glow.anchor.setTo(0.495);

        gameBoxGroup.getChildAt(glowOrderArray[0]).addChild(glow);  
        var anim = glow.animations.add('glow');
        anim.play(100,1);
        this.time.events.add(1000, function(){
            
            anim.stop();
            gameBoxGroup.getChildAt(glowOrderArray[1]).removeChildren();
            gameBoxGroup.getChildAt(glowOrderArray[1]).addChild(glow);
            
            anim.play(100,1);
            
            this.time.events.add(1000, function(){
            
            anim.stop();
            gameBoxGroup.getChildAt(glowOrderArray[2]).removeChildren();
            gameBoxGroup.getChildAt(glowOrderArray[2]).addChild(glow);
            
            anim.play();
            
            
            this.time.events.add(1000, function(){
            
                    anim.stop();
                    gameBoxGroup.getChildAt(glowOrderArray[3]).removeChildren();
                    gameBoxGroup.getChildAt(glowOrderArray[3]).addChild(glow);

                    anim.play();

                this.time.events.add(1000, function(){this.removeEverthing();},this);
                


                },this);
            
            
            },this);
            
            
            
        },this);
        
    },
    
  
   
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX-15, 12,'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=15;
					starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	correctAns:function(target)
	{
		////console.log("correct");
        //_this.speakerbtn.inputEnabled=false;
        	
        anim =target.animations.add('flag1');
        anim.play();
		celebration = true;
		
     	_this.cmusic = this.add.audio('celebr');
		_this.cmusic.play();

        this.time.events.add(500, this.removeCelebration, this);


		////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = starsGroup.getChildAt(count1);
		////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        		
   		target.events.onInputDown.removeAll();
	},


    wrongAns:function(target)
	{
       // //console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
       // //console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, target);
		_this.wmusic = this.add.audio('waudio');
            _this.wmusic.play();
        	//this.disableListeners();
        target.events.onInputDown.removeAll();
	},
    
    removeCelebration:function()
	{
		////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		////console.log("no"+no1);
		//this.input.enabled = true;
			
		     count1++;
		//if(rightCount<=0)
		//{		
          //  //console.log("vamitha");
            
			if(no1<1)
			{
            //    //console.log("addq");
                 this.addQuestion(count1);
			}
			else
			{
			//	//console.log("gameEnd");
                this.state.start('grade4_3AScore');
				//this.state.start('level2');
			}

	},
    
    
	changeQuestion:function()
	{
		flagGroup1.destroy();
		if(no1<20)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			////console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450,'Level43A_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0.5)', 0);
            

    
       
               this.state.start('level2');
              //baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            speaker1.visible=false;
//            starsGroup1.visible=false;
		}
	},


    

    
    update:function(){

    },
    
    /*getVoice:function(){
        this.stopVoice();
        switch(qArrays[no1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:if(window.languageSelected=="English")
                        Eng_43A1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_43B1.play();
                    else
                        Kan_43A1.play();
                    break;
        }
    },
    
    stopVoice:function(){
        Eng_43A1.stop();
        Hin_43B1.stop();
        Kan_43A1.stop();
    }*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');


       if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", "questionSounds/4.3A/English/4.3A1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", "questionSounds/4.3A/Hindi/4.3A1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", "questionSounds/4.3A/Kannada/4.3A1.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", "questionSounds/4.3A/Odiya/4.3A1.mp3");
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
                 console.log("stop"); 
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
        /*delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1;
        delete count;
        delete count1;
        delete qArrays;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete selectedAns2;
        delete rightAns;
        delete mainSprite;
        delete  _this.speakerbtn;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete q1Array;
        delete q2Array;
        delete q3Array;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete object1,object2,object3,object4,object5,object6,object7,object8,object9;
        delete timelang;

        delete timer;
        delete noofAttempts;
        delete AnsTimerCount;
        delete enterTxt,enterTxt2;

        delete gameid,_this.questionid;*/
    }
    
};