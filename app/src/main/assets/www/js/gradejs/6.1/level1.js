Game.grade6_1level1=function(){};
var no22;
var no11;
var qArrays;
var circleanim00;
var circleanimfirstAnim;
var anim11;
var circleanim201;
var countboth=0;
var countboth1=0;
var count;
var count1;
var firstmonarr;
var firsttuearr;
var firstwedarr;
var months;
var celebration;
var monthJan;
var flagGroup11;
var backbg;
var voice;
var monday;
var val;
var anim1;
var anim2;
var framesChange;
var dayflag=0;
var days=0;
var voices=new Array();

var correctflag=0;
var correctflag1=0;

Game.grade6_1level1.prototype={
        init:function(game)
    {

        _this = this;
        
        _this.gameid = "6.1";
        
       /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("time6_1",gradeSelected);
    },

    
	create:function(game){
		
		_this.amplify = null;
		 _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
    var background;
    var click3;

    var celebAnim1;
    var click4;
     var rightCount ;
    var wronggraphics1,wronggraphics2,wronggraphics3,wronggraphics4;


    var anim5;
    var wmusic;
    var flagmain11Anim;
    var count;

    var clickSound;
    var starsGroup1;

    var flagmain11Anim;
    var starsGroup;
        

        noofAttempts=0;
		AnsTimerCount=0;
		_this.sceneCount = 0;
        voices = null;
        voice = null;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        rightCount = 0;
       
        no11 = 0;
         no22 = 0;
        count=0;
         count1=0;
        celebration= false;
        qArrays = new Array();
        qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
        qArrays = this.shuffle(qArrays);
        voices=["Monday","Tuesday","Wednesday","Thursday","Friday","Sunday","firstDay","lastDay","firstMonday","firstTuesday","firstWednesday","lastSunday","lastSaturday","lastFriday","first2Days","last2Days","SelectMonth","selectYear"];
        
        

        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

        background = this.add.tileSprite(0,-2,this.world.width,this.world.height, 'Level61_bg2');
      
	    _this.TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
      
	   _this.backbtn = _this.add.sprite(10,7,'grade11_backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            //_this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(630,7,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           this.getVoice();
            
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
			
        
            this.generateStarsForTheScene(6);
   
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
   

    getQuestion:function()
    {
        
        this.stopvoice();
        
        noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

		timer = this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);

		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		timer.start();
        
		 _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
		_this.timer1.start();
  
        voices=this.shuffle(voices);
  
        //voice="SelectMonth";//voice[0];
        this.getVoice();
        //console.log("voice is=="+voice);
    	//console.log("get"+qArrays[no11]);
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        //this.getVoice();
  /*      _this.speakerbtn.events.onInputDown.add(function(){
            this.getVoice();
        },this);*/
    	switch(qArrays[no11])
       //switch(no11)
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
            case 9: this.gotoNinethQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
            case 11: this.gotoEleventhQuestion();
    				break;
            case 12: this.gotoTwelvethQuestion();
    				break;
            
          
    	}
        
    },
  
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX, 12, 'starAnim1');
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

    addQuestion:function(no22)
    {
      
           //console.log("here");
       
          /* this.time.events.add(900, function(){
               //console.log("destroyyyyy");
               
     
               
                var tween = this.add.tween(flagGroup1);
           tween.to({ x: -1000 }, 0, 'Linear', true, 0);
           tween.onComplete.add(this.changeQuestion, this);


            }, this);*/
            
        //}, this);
        this.time.events.add(1000, function(){
        this.changeQuestion();
        }, this);
    },
    
    update:function(){

    },

    gotoFirstQuestion:function(){
        //january
    	no11++;
       
        
        _this.questionid = 1;
        
        //this.getVoice();
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);

        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];

        months = this.add.sprite(340,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=0;
        months.name = "january";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(115,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            correctflag++;
            
            if(voices[0]=="firstDay")
                this.checkAns(whiteNum1,"mongrp",5,"firstDay");
            else
                this.checkAns(whiteNum1,"mongrp",5,"firstMonday");
        },this);
        
        whiteNum2= this.add.sprite(215,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            correctflag++;
            
            if(voices[0]=="firstDay")
                this.checkAns(whiteNum2,"tuegrp",5,"firstDay");
            else
                this.checkAns(whiteNum2,"tuegrp",5,"firstTuesday");
        },this);
        
        whiteNum3= this.add.sprite(315,210,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            if(voices[0]=="firstDay")
                this.checkAns(whiteNum3,"wedgrp",5,"firstDay");
            else
                this.checkAns(whiteNum3,"wedgrp",5,"firstWednesday");
        },this);
        
        whiteNum4= this.add.sprite(415,210,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"thugrp",4);
        },this);
        
        whiteNum5= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"frigrp",4);
        },this);
        
        whiteNum6= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"satgrp",4);
        },this);
        
        redNum7= this.add.sprite(715,210,'Level61_redNum');
    	redNum7.scale.setTo(0.95,1);
        redNum7.frame=7;
        redNum7.inputEnabled=true;
        redNum7.input.useHandCursor = true;
        redNum7.events.onInputDown.add(function(){
            redNum7.inputEnabled=false;
            this.checkAns(redNum7,"sungrp",4);
        },this);
        
        whiteNum8= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"mongrp",5);
        },this);
        
       whiteNum9= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"tuegrp",5);
        },this);
        
        whiteNum10= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"wedgrp",5);
        },this);
        
        whiteNum11= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"thugrp",4);
        },this);
        
        whiteNum12= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"frigrp",4);
        },this);
        
        whiteNum13= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"satgrp",4);
        },this);
        
        redNum14= this.add.sprite(715,260,'Level61_redNum');
    	redNum14.scale.setTo(0.95,1);
        redNum14.frame=14;
        redNum14.inputEnabled=true;
        redNum14.input.useHandCursor = true;
        redNum14.events.onInputDown.add(function(){
            redNum14.inputEnabled=false;
            this.checkAns(redNum14,"sungrp",4);
        },this);
        
        whiteNum15= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"mongrp",5);
        },this);
        
        whiteNum16= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"tuegrp",5);
        },this);
        
        whiteNum17= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"wedgrp",5);
        },this);
        
        whiteNum18= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"thugrp",4);
        },this);
        
        whiteNum19= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"frigrp",4);
        },this);
        
        whiteNum20= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"satgrp",4);
        },this);
        
        redNum21= this.add.sprite(715,310,'Level61_redNum');
    	redNum21.scale.setTo(0.95,1);
        redNum21.frame=21;
        redNum21.inputEnabled=true;
        redNum21.input.useHandCursor = true;
        redNum21.events.onInputDown.add(function(){
            redNum21.inputEnabled=false;
            this.checkAns(redNum21,"sungrp",4);
        },this);
        
        whiteNum22= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"mongrp",5);
        },this);
        
        whiteNum23= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"tuegrp",5);
        },this);
        
        whiteNum24= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"wedgrp",5);
        },this);
        
       whiteNum25= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"thugrp",4);
        },this);
        
        whiteNum26= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"frigrp",4,"lastFriday");
        },this);
        
        whiteNum27= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"satgrp",4,"lastSaturday");
        },this);
        
        redNum28= this.add.sprite(715,360,'Level61_redNum');
    	redNum28.scale.setTo(0.95,1);
        redNum28.frame=28;
        redNum28.inputEnabled=true;
        redNum28.input.useHandCursor = true;
        redNum28.events.onInputDown.add(function(){
            redNum28.inputEnabled=false;
            this.checkAns(redNum28,"sungrp",4,"lastSunday");
        },this);
        
        whiteNum29= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"mongrp",5);
        },this);
 
        whiteNum30= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum30,"tuegrp",5);
        },this);
        
        whiteNum31= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum31,"wedgrp",5);
        },this);
        
        circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(redNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(redNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(redNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(redNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
        
    	//flagGroup1.x = 1000;
      
    	//var tween = this.add.tween(flagGroup1);
    	//tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        //tween.onComplete.add(function(){
      
    // }, this);                  
    	    
    },
    
    gotoSecondQuestion:function(){
      _this.questionid = 1;
        //february
    	no11++;
        
       // this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(340,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=1;
        months.name="february";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(415,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            correctflag++;
            this.checkAns(whiteNum1,"thugrp",4,"firstDay");
        },this);
        
        whiteNum2= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            correctflag++;
            this.checkAns(whiteNum2,"frigrp",4);
        },this);
        
        whiteNum3= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"satgrp",4);
        },this);
        
        redNum4= this.add.sprite(715,210,'Level61_redNum');
    	redNum4.scale.setTo(0.95,1);
        redNum4.frame=4;
        redNum4.inputEnabled=true;
        redNum4.input.useHandCursor = true;
        redNum4.events.onInputDown.add(function(){
            redNum4.inputEnabled=false;
            this.checkAns(redNum4,"sungrp",4);
        },this);
        
        whiteNum5= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"mongrp",4,"firstMonday");
        },this);
        
        whiteNum6= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"tuegrp",4,"firstTuesday");
        },this);
        
        whiteNum7= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"wedgrp",4,"firstWednesday");
        },this);
        
        whiteNum8= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"thugrp",4);
        },this);
        
        whiteNum9= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"frigrp",4);
        },this);
        
        whiteNum10= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"satgrp",4);
        },this);
        
        redNum11= this.add.sprite(715,260,'Level61_redNum');
    	redNum11.scale.setTo(0.95,1);
        redNum11.frame=11;
        redNum11.inputEnabled=true;
        redNum11.input.useHandCursor = true;
        redNum11.events.onInputDown.add(function(){
            redNum11.inputEnabled=false;
            this.checkAns(redNum11,"sungrp",4);
        },this);
        
        whiteNum12= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"mongrp",4);
        },this);
        
        whiteNum13= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"tuegrp",4);
        },this);
        
        whiteNum14= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"wedgrp",4);
        },this);
        
        whiteNum15= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"thugrp",4);
        },this);
        
        whiteNum16= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"frigrp",4);
        },this);
        
        whiteNum17= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"satgrp",4);
        },this);
        
        redNum18= this.add.sprite(715,310,'Level61_redNum');
    	redNum18.scale.setTo(0.95,1);
        redNum18.frame=18;
        redNum18.inputEnabled=true;
        redNum18.input.useHandCursor = true;
        redNum18.events.onInputDown.add(function(){
            redNum18.inputEnabled=false;
            this.checkAns(redNum18,"sungrp",4);
        },this);
        
        whiteNum19= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"mongrp",4);
        },this);
        
        whiteNum20= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"tuegrp",4);
        },this);
        
        whiteNum21= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"wedgrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"thugrp",4);
        },this);
        
        whiteNum23= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"frigrp",4,"lastFriday");
        },this);
        
        whiteNum24= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"satgrp",4,"lastSaturday");
        },this);
        
       redNum25= this.add.sprite(715,360,'Level61_redNum');
    	redNum25.scale.setTo(0.95,1);
        redNum25.frame=25;
        redNum25.inputEnabled=true;
        redNum25.input.useHandCursor = true;
        redNum25.events.onInputDown.add(function(){
            redNum25.inputEnabled=false;
            this.checkAns(redNum25,"sungrp",4,"lastSunday");
        },this);
        
        whiteNum26= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"mongrp",4);
        },this);
        
        whiteNum27= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum27,"tuegrp",4);
        },this);
        
        whiteNum28= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum28,"wedgrp",4);
        },this);
        
       
        circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
       
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(redNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(redNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(redNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(redNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(circleanimfirstAnim);
        
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
        
        
    	//flagGroup1.x = 1000;
      
    	//var tween = this.add.tween(flagGroup1);
    	//tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
       // tween.onComplete.add(function(){
      
     //}, this);                
    	    
    },
    
    gotoThirdQuestion:function(){
        _this.questionid = 1;
        //march
    	no11++;
        
      //  this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        
        months = this.add.sprite(350,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=2;
        months.name = "march";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(415,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            correctflag++;
            this.checkAns(whiteNum1,"thugrp",5,"firstDay");
        },this);
        
        whiteNum2= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            correctflag++;
            this.checkAns(whiteNum2,"frigrp",5);
        },this);
        
        whiteNum3= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"satgrp",5);
        },this);
        //whiteNum3.events.onInputDown.add(this.wrongAns,this);
        
        redNum4= this.add.sprite(715,210,'Level61_redNum');
    	redNum4.scale.setTo(0.95,1);
        redNum4.frame=4;
        redNum4.inputEnabled=true;
        redNum4.input.useHandCursor = true;
        redNum4.events.onInputDown.add(function(){
            redNum4.inputEnabled=false;
            this.checkAns(redNum4,"sungrp",4);
        },this);
        //redNum4.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum5= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"mongrp",4,"firstMonday");
        },this);
        //whiteNum5.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum6= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"tuegrp",4,"firstTuesday");
        },this);
        //whiteNum6.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum7= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"wedgrp",4,"firstWednesday");
        },this);
        //whiteNum7.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum8= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"thugrp",5);
        },this);
       // whiteNum8.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum9= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"frigrp",5);
        },this);
        //whiteNum9.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum10= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"satgrp",5);
        },this);
        //whiteNum10.events.onInputDown.add(this.wrongAns,this);
        
        redNum11= this.add.sprite(715,260,'Level61_redNum');
    	redNum11.scale.setTo(0.95,1);
        redNum11.frame=11;
        redNum11.inputEnabled=true;
        redNum11.input.useHandCursor = true;
        redNum11.events.onInputDown.add(function(){
            redNum11.inputEnabled=false;
            this.checkAns(redNum11,"sungrp",4);
        },this);
        //redNum11.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum12= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"mongrp",4);
        },this);
        //whiteNum12.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum13= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"tuegrp",4);
        },this);
        //whiteNum13.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum14= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"wedgrp",4);
        },this);
        //whiteNum14.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum15= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"thugrp",5);
        },this);
       // whiteNum15.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum16= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"frigrp",5);
        },this);
        //whiteNum16.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum17= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"satgrp",5);
        },this);
       // whiteNum17.events.onInputDown.add(this.wrongAns,this);
        
        redNum18= this.add.sprite(715,310,'Level61_redNum');
    	redNum18.scale.setTo(0.95,1);
        redNum18.frame=18;
        redNum18.inputEnabled=true;
        redNum18.input.useHandCursor = true;
        redNum18.events.onInputDown.add(function(){
            redNum18.inputEnabled=false;
            this.checkAns(redNum18,"sungrp",4);
        },this);
        //redNum18.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum19= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"mongrp",4);
        },this);
        //whiteNum19.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum20= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"tuegrp",4);
        },this);
        //whiteNum20.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum21= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"wedgrp",4);
        },this);
        //whiteNum21.events.onInputDown.add(this.wrongAns,this);
        
        
        whiteNum22= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"thugrp",5);
        },this);
        //whiteNum22.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum23= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"frigrp",5);
        },this);
        //whiteNum23.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum24= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"satgrp",5);
        },this);
        //whiteNum24.events.onInputDown.add(this.wrongAns,this);
        
       redNum25= this.add.sprite(715,360,'Level61_redNum');
    	redNum25.scale.setTo(0.95,1);
        redNum25.frame=25;
        redNum25.inputEnabled=true;
        redNum25.input.useHandCursor = true;
        redNum25.events.onInputDown.add(function(){
            redNum25.inputEnabled=false;
            this.checkAns(redNum25,"sungrp",4,"lastSunday");
        },this);
       // redNum25.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum26= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"mongrp",4);
        },this);
        //whiteNum26.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum27= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"tuegrp",4);
        },this);
       // whiteNum27.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum28= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"wedgrp",4);
        },this);
       // whiteNum28.events.onInputDown.add(this.wrongAns,this);
         
         whiteNum29= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"thugrp",5);
        },this);
       // whiteNum29.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum30= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum30,"frigrp",5,"lastFriday");
        },this);
        //whiteNum30.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum31= this.add.sprite(615,410,'Level61_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum31,"satgrp",5,"lastSaturday");
        },this);
        //whiteNum31.events.onInputDown.add(this.wrongAns,this);
        
        
       circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(redNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(redNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(redNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(redNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);   */    
    	    
    },
    
    gotoFourthQuestion:function(){
        _this.questionid = 1;
        //April
    	no11++;
        
        //this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(350,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=3;
        months.name = "april";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        redNum1= this.add.sprite(715,210,'Level61_redNum');
    	redNum1.scale.setTo(0.95,1);
        redNum1.frame=1;
        redNum1.name="april"
        redNum1.inputEnabled=true;
        redNum1.input.useHandCursor = true;
        redNum1.events.onInputDown.add(function(){
            redNum1.inputEnabled=false;
            correctflag++;
            this.checkAns(redNum1,"sungrp",5,"firstDay");
        },this);
        
        //redNum1.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum2= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            correctflag++;
            this.checkAns(whiteNum2,"mongrp",5,"firstMonday");
        },this);
        //whiteNum2.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum3= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"tuegrp",4,"firstTuesday");
        },this);
        //whiteNum3.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum4= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"wedgrp",4,"firstWednesday");
        },this);
        //whiteNum4.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum5= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"thugrp",4);
        },this);
        //whiteNum5.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum6= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            whiteNum6.inputEnabled=false;
            this.checkAns(whiteNum6,"frigrp",4);
        },this);
        //whiteNum6.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum7= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"satgrp",4);
        },this);
        //whiteNum7.events.onInputDown.add(this.wrongAns,this);
        
        redNum8= this.add.sprite(715,260,'Level61_redNum');
    	redNum8.scale.setTo(0.95,1);
        redNum8.frame=8;
        redNum8.inputEnabled=true;
        redNum8.input.useHandCursor = true;
        redNum8.events.onInputDown.add(function(){
            redNum8.inputEnabled=false;
            this.checkAns(redNum8,"sungrp",5);
        },this);
       // redNum8.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum9= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"mongrp",5);
        },this);
        //whiteNum9.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum10= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"tuegrp",4);
        },this);
        //whiteNum10.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum11= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"wedgrp",4);
        },this);
        //whiteNum11.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum12= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"thugrp",4);
        },this);
        //whiteNum12.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum13= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            whiteNum13.inputEnabled=false;
            this.checkAns(whiteNum13,"frigrp",4);
        },this);
        //whiteNum13.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum14= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"satgrp",4);
        },this);
        //whiteNum14.events.onInputDown.add(this.wrongAns,this);
        
        redNum15= this.add.sprite(715,310,'Level61_redNum');
    	redNum15.scale.setTo(0.95,1);
        redNum15.frame=15;
        redNum15.inputEnabled=true;
        redNum15.input.useHandCursor = true;
        redNum15.events.onInputDown.add(function(){
            redNum15.inputEnabled=false;
            this.checkAns(redNum15,"sungrp",5);
        },this);
       // redNum15.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum16= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"mongrp",5);
        },this);
        //whiteNum16.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum17= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"tuegrp",4);
        },this);
       // whiteNum17.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum18= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"wedgrp",4);
        },this);
        //whiteNum18.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum19= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"thugrp",4);
        },this);
        //whiteNum19.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum20= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            whiteNum20.inputEnabled=false;
            this.checkAns(whiteNum20,"frigrp",4);
        },this);
        //whiteNum20.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum21= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"satgrp",4);
        },this);
        //whiteNum21.events.onInputDown.add(this.wrongAns,this);
        
        
        redNum22= this.add.sprite(715,360,'Level61_redNum');
    	redNum22.scale.setTo(0.95,1);
        redNum22.frame=22;
        redNum22.inputEnabled=true;
        redNum22.input.useHandCursor = true;
        redNum22.events.onInputDown.add(function(){
            redNum22.inputEnabled=false;
            this.checkAns(redNum22,"sungrp",5);
        },this);
        //redNum22.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum23= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"mongrp",5);
        },this);
        //whiteNum23.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum24= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"tuegrp",4);
        },this);
        //whiteNum24.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum25= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"wedgrp",4);
        },this);
       // whiteNum25.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum26= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"thugrp",4);
        },this);
        //whiteNum26.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum27= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            whiteNum27.inputEnabled=false;
            this.checkAns(whiteNum27,"frigrp",4,"lastFriday");
        },this);
       // whiteNum27.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum28= this.add.sprite(615,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
           
            this.checkAns(whiteNum28,"satgrp",4,"lastSaturday");
        },this);
       // whiteNum28.events.onInputDown.add(this.wrongAns,this);
        
        redNum29= this.add.sprite(715,410,'Level61_redNum');
    	redNum29.scale.setTo(0.95,1);
        redNum29.frame=29;
        redNum29.inputEnabled=true;
        redNum29.input.useHandCursor = true;
        redNum29.events.onInputDown.add(function(){
            redNum29.inputEnabled=false;
            correctflag1++;
            this.checkAns(redNum29,"sungrp",5,"lastSunday");
        },this);
       // redNum29.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum30= this.add.sprite(115,210,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
             correctflag1++;
            this.checkAns(whiteNum30,"mongrp",5);
        },this);
        //whiteNum30.events.onInputDown.add(this.wrongAns,this);
        
      
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(redNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(redNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(redNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(redNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(redNum29);
        flagGroup1.add(whiteNum30);
        //flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);    */       
    	    
    },
    
    gotoFifthQuestion:function(){
   _this.questionid = 1;
        //may
    	no11++;
        
    //    this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);

        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(350,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=4;
       months.name = "may";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
       months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
       year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
       year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(215,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
       whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            whiteNum1.inputEnabled=false;
            correctflag++;
            if(voices[0]=="firstDay")
               this.checkAns(whiteNum1,"tuegrp",5,"firstDay");
            else
               this.checkAns(whiteNum1,"tuegrp",5,"firstTuesday");
        },this);
        
        whiteNum2= this.add.sprite(315,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            whiteNum2.inputEnabled=false;
            correctflag++;
            this.checkAns(whiteNum2,"wedgrp",5,"firstWednesday");
        },this);
        
        whiteNum3= this.add.sprite(415,210,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            whiteNum3.inputEnabled=false;
            this.checkAns(whiteNum3,"thugrp",5);
        },this);
        
        whiteNum4= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            whiteNum4.inputEnabled=false;
            this.checkAns(whiteNum4,"frigrp",4);
        },this);
        
        whiteNum5= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            whiteNum5.inputEnabled=false;
            this.checkAns(whiteNum5,"satgrp",4);
        },this);
        
        redNum6= this.add.sprite(715,210,'Level61_redNum');
    	redNum6.scale.setTo(0.95,1);
        redNum6.frame=6;
        redNum6.inputEnabled=true;
        redNum6.input.useHandCursor = true;
        redNum6.events.onInputDown.add(function(){
            redNum6.inputEnabled=false;
            this.checkAns(redNum6,"sungrp",4);
        },this);
        
        whiteNum7= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            whiteNum7.inputEnabled=false;
            this.checkAns(whiteNum7,"mongrp",4,"firstMonday");
        },this);
        
        whiteNum8= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            whiteNum8.inputEnabled=false;
            this.checkAns(whiteNum8,"tuegrp",5);
        },this);
        
       whiteNum9= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            whiteNum9.inputEnabled=false;
            this.checkAns(whiteNum9,"wedgrp",5);
        },this);
        
        whiteNum10= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            whiteNum10.inputEnabled=false;
            this.checkAns(whiteNum10,"thugrp",5);
        },this);
        
        whiteNum11= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            whiteNum11.inputEnabled=false;
            this.checkAns(whiteNum11,"frigrp",4);
        },this);
        
        whiteNum12= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            whiteNum12.inputEnabled=false;
            this.checkAns(whiteNum12,"satgrp",4);
        },this);
        
        redNum13= this.add.sprite(715,260,'Level61_redNum');
    	redNum13.scale.setTo(0.95,1);
        redNum13.frame=13;
        redNum13.inputEnabled=true;
        redNum13.input.useHandCursor = true;
        redNum13.events.onInputDown.add(function(){
            redNum13.inputEnabled=false;
            this.checkAns(redNum13,"sungrp",4);
        },this);
        
        whiteNum14= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            whiteNum14.inputEnabled=false;
            this.checkAns(whiteNum14,"mongrp",4);
        },this);
        
        whiteNum15= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            whiteNum15.inputEnabled=false;
            this.checkAns(whiteNum15,"tuegrp",5);
        },this);
        
        whiteNum16= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            whiteNum16.inputEnabled=false;
            this.checkAns(whiteNum16,"wedgrp",5);
        },this);
        
        whiteNum17= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            whiteNum17.inputEnabled=false;
            this.checkAns(whiteNum17,"thugrp",5);
        },this);
        
        whiteNum18= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            whiteNum18.inputEnabled=false;
            this.checkAns(whiteNum18,"frigrp",4);
        },this);
        
        whiteNum19= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            whiteNum19.inputEnabled=false;
            this.checkAns(whiteNum19,"satgrp",4);
        },this);
        
        redNum20= this.add.sprite(715,310,'Level61_redNum');
    	redNum20.scale.setTo(0.95,1);
        redNum20.frame=20;
        redNum20.inputEnabled=true;
        redNum20.input.useHandCursor = true;
        redNum20.events.onInputDown.add(function(){
            redNum20.inputEnabled=false;
            this.checkAns(redNum20,"sungrp",4);
        },this);
        
        whiteNum21= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            whiteNum21.inputEnabled=false;
            this.checkAns(whiteNum21,"mongrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            whiteNum22.inputEnabled=false;
            this.checkAns(whiteNum22,"tuegrp",5);
        },this);
        
        whiteNum23= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            whiteNum23.inputEnabled=false;
            this.checkAns(whiteNum23,"wedgrp",5);
        },this);
        
        whiteNum24= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            whiteNum24.inputEnabled=false;
            this.checkAns(whiteNum24,"thugrp",5);
        },this);
        
       whiteNum25= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            whiteNum25.inputEnabled=false;
            this.checkAns(whiteNum25,"frigrp",4,"lastFriday");
        },this);
        
        whiteNum26= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            whiteNum26.inputEnabled=false;
            this.checkAns(whiteNum26,"satgrp",4,"lastSaturday");
        },this);
        
        redNum27= this.add.sprite(715,360,'Level61_redNum');
    	redNum27.scale.setTo(0.95,1);
        redNum27.frame=27;
        redNum27.inputEnabled=true;
        redNum27.input.useHandCursor = true;
        redNum27.events.onInputDown.add(function(){
            redNum27.inputEnabled=false;
            this.checkAns(redNum27,"sungrp",4,"lastSunday");
        },this);
        
        whiteNum28= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            whiteNum28.inputEnabled=false;
            this.checkAns(whiteNum28,"mongrp",4);
        },this);
        
        whiteNum29= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            whiteNum29.inputEnabled=false;
            this.checkAns(whiteNum29,"tuegrp",5);
        },this);
        
        whiteNum30= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            whiteNum30.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum30,"wedgrp",5);
        },this);
        
        whiteNum31= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            whiteNum31.inputEnabled=false;
            correctflag1++;
            this.checkAns(whiteNum31,"thugrp",5);
        },this);
        
          circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
       
       circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
       
       circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
       
       circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(redNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(redNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(redNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(redNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);   */
    },
    
    gotoSixthQuestion:function(){
      
          _this.questionid = 1;
        //june
    	no11++;
        
        //this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(350,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=5;
        months.name = "june";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum1,"frigrp",5,"firstDay");
        },this);
        //whiteNum1.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum2= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
         whiteNum2.events.onInputDown.add(function(){
             correctflag++;
            this.checkAns(whiteNum2,"satgrp",5);
        },this);
        //whiteNum2.events.onInputDown.add(this.wrongAns,this);
        
        redNum3= this.add.sprite(715,210,'Level61_redNum');
    	redNum3.scale.setTo(0.95,1);
        redNum3.frame=3;
        redNum3.inputEnabled=true;
        redNum3.input.useHandCursor = true;
         redNum3.events.onInputDown.add(function(){
            this.checkAns(redNum3,"sungrp",4);
        },this);
        //redNum3.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum4= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            this.checkAns(whiteNum4,"mongrp",4,"firstMonday");
        },this);
        //whiteNum4.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum5= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            this.checkAns(whiteNum5,"tuegrp",4,"firstTuesday");
        },this);
        //whiteNum5.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum6= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            this.checkAns(whiteNum6,"wedgrp",4,"firstWednesday");
        },this);
        //whiteNum6.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum7= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            this.checkAns(whiteNum7,"thugrp",4);
        },this);
        //whiteNum7.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum8= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            this.checkAns(whiteNum8,"frigrp",5);
        },this);
       // whiteNum8.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum9= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            this.checkAns(whiteNum9,"satgrp",5);
        },this);
        //whiteNum9.events.onInputDown.add(this.wrongAns,this);
        
        redNum10= this.add.sprite(715,260,'Level61_redNum');
    	redNum10.scale.setTo(0.95,1);
        redNum10.frame=10;
        redNum10.inputEnabled=true;
        redNum10.input.useHandCursor = true;
        redNum10.events.onInputDown.add(function(){
            this.checkAns(redNum10,"sungrp",4);
        },this);
        //redNum10.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum11= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            this.checkAns(whiteNum11,"mongrp",4);
        },this);
        //whiteNum11.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum12= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            this.checkAns(whiteNum12,"tuegrp",4);
        },this);
        //whiteNum12.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum13= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            this.checkAns(whiteNum13,"wedgrp",4);
        },this);
        //whiteNum13.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum14= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            this.checkAns(whiteNum14,"thugrp",4);
        },this);
        //whiteNum14.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum15= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            this.checkAns(whiteNum15,"frigrp",5);
        },this);
       // whiteNum15.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum16= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            this.checkAns(whiteNum16,"satgrp",5);
        },this);
        //whiteNum16.events.onInputDown.add(this.wrongAns,this);
        
        redNum17= this.add.sprite(715,310,'Level61_redNum');
    	redNum17.scale.setTo(0.95,1);
        redNum17.frame=17;
        redNum17.inputEnabled=true;
        redNum17.input.useHandCursor = true;
        redNum17.events.onInputDown.add(function(){
            this.checkAns(redNum17,"sungrp",4);
        },this);
       // redNum17.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum18= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            this.checkAns(whiteNum18,"mongrp",4);
        },this);
        //whiteNum18.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum19= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            this.checkAns(whiteNum19,"tuegrp",4);
        },this);
        //whiteNum19.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum20= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            this.checkAns(whiteNum20,"wedgrp",4);
        },this);
        //whiteNum20.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum21= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            this.checkAns(whiteNum21,"thugrp",4);
        },this);
        //whiteNum21.events.onInputDown.add(this.wrongAns,this);
        
        
        whiteNum22= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            this.checkAns(whiteNum22,"frigrp",5);
        },this);
        //whiteNum22.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum23= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            this.checkAns(whiteNum23,"satgrp",5);
        },this);
        //whiteNum23.events.onInputDown.add(this.wrongAns,this);
        
        redNum24= this.add.sprite(715,360,'Level61_redNum');
    	redNum24.scale.setTo(0.95,1);
        redNum24.frame=24;
        redNum24.inputEnabled=true;
        redNum24.input.useHandCursor = true;
        redNum24.events.onInputDown.add(function(){
            this.checkAns(redNum24,"sungrp",4,"lastSunday");
        },this);
        //redNum24.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum25= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            this.checkAns(whiteNum25,"mongrp",4);
        },this);
       // whiteNum25.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum26= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            this.checkAns(whiteNum26,"tuegrp",4);
        },this);
        //whiteNum26.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum27= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            this.checkAns(whiteNum27,"wedgrp",4);
        },this);
       // whiteNum27.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum28= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            this.checkAns(whiteNum28,"thugrp",4);
        },this);
       // whiteNum28.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum29= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum29,"frigrp",5,"lastFriday");
        },this);
       // whiteNum29.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum30= this.add.sprite(615,410,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum30,"satgrp",5,"lastSaturday");
        },this);
        //whiteNum30.events.onInputDown.add(this.wrongAns,this);
       
        circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(redNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(redNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(redNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(redNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);   */
    	    
    },
    
    gotoSeventhQuestion:function(){
        _this.questionid = 1;
        //july
    	no11++;
        
       // this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        
        months = this.add.sprite(350,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=6;
        months.name = "july";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
      months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
      year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        redNum1= this.add.sprite(715,210,'Level61_redNum');
    	redNum1.scale.setTo(0.95,1);
        redNum1.frame=1;
       redNum1.name="july";
        redNum1.inputEnabled=true;
        redNum1.input.useHandCursor = true;
        redNum1.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(redNum1,"sungrp",5,"firstDay");
        },this);
        
        whiteNum2= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum2,"mongrp",5,"firstMonday");
        },this);
        
        whiteNum3= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            this.checkAns(whiteNum3,"tuegrp",5,"firstTuesday");
        },this);
        
        whiteNum4= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            this.checkAns(whiteNum4,"wedgrp",4,"firstWednesday");
        },this);
        
        whiteNum5= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            this.checkAns(whiteNum5,"thugrp",4);
        },this);
        
        whiteNum6= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            this.checkAns(whiteNum6,"frigrp",4);
        },this);
        
        whiteNum7= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            this.checkAns(whiteNum7,"satgrp",4);
        },this);
        
        redNum8= this.add.sprite(715,260,'Level61_redNum');
    	redNum8.scale.setTo(0.95,1);
        redNum8.frame=8;
        redNum8.inputEnabled=true;
        redNum8.input.useHandCursor = true;
        redNum8.events.onInputDown.add(function(){
            this.checkAns(redNum8,"sungrp",5);
        },this);
        
       whiteNum9= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            this.checkAns(whiteNum9,"mongrp",5);
        },this);
        
        whiteNum10= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            this.checkAns(whiteNum10,"tuegrp",5);
        },this);
        
        whiteNum11= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            this.checkAns(whiteNum11,"wedgrp",4);
        },this);
        
        whiteNum12= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            this.checkAns(whiteNum12,"thugrp",4);
        },this);
        
        whiteNum13= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            this.checkAns(whiteNum13,"frigrp",4);
        },this);
        
        whiteNum14= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            this.checkAns(whiteNum14,"satgrp",4);
        },this);
        
        redNum15= this.add.sprite(715,310,'Level61_redNum');
    	redNum15.scale.setTo(0.95,1);
        redNum15.frame=15;
        redNum15.inputEnabled=true;
        redNum15.input.useHandCursor = true;
        redNum15.events.onInputDown.add(function(){
            this.checkAns(redNum15,"sungrp",5);
        },this);
        
        whiteNum16= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            this.checkAns(whiteNum16,"mongrp",5);
        },this);
        
        whiteNum17= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            this.checkAns(whiteNum17,"tuegrp",5);
        },this);
        
        whiteNum18= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            this.checkAns(whiteNum18,"wedgrp",4);
        },this);
        
        whiteNum19= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            this.checkAns(whiteNum19,"thugrp",4);
        },this);
        
        whiteNum20= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            this.checkAns(whiteNum20,"frigrp",4);
        },this);
        
        whiteNum21= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            this.checkAns(whiteNum21,"satgrp",4);
        },this);
        
        
        redNum22= this.add.sprite(715,360,'Level61_redNum');
    	redNum22.scale.setTo(0.95,1);
        redNum22.frame=22;
        redNum22.inputEnabled=true;
        redNum22.input.useHandCursor = true;
        redNum22.events.onInputDown.add(function(){
            this.checkAns(redNum22,"sungrp",5);
        },this);
        
        whiteNum23= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            this.checkAns(whiteNum23,"mongrp",5);
        },this);
        
        whiteNum24= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            this.checkAns(whiteNum24,"tuegrp",5);
        },this);
        
       whiteNum25= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            this.checkAns(whiteNum25,"wedgrp",4);
        },this);
        
        whiteNum26= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            this.checkAns(whiteNum26,"thugrp",4);
        },this);
        
        whiteNum27= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            this.checkAns(whiteNum27,"frigrp",4,"lastFriday");
        },this);
        
        whiteNum28= this.add.sprite(615,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            
            this.checkAns(whiteNum28,"satgrp",4,"lastSaturday");
        },this);
        
        redNum29= this.add.sprite(715,410,'Level61_redNum');
    	redNum29.scale.setTo(0.95,1);
        redNum29.frame=29;
        redNum29.inputEnabled=true;
        redNum29.input.useHandCursor = true;
        redNum29.events.onInputDown.add(function(){
            
            this.checkAns(redNum29,"sungrp",5,"lastSunday");
        },this);
        
        whiteNum30= this.add.sprite(115,210,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum30,"mongrp",5);
        },this);
        
        whiteNum31= this.add.sprite(215,210,'Level61_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum31,"tuegrp",5);
        },this);
        
       
       circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
        
       
       circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
       
       circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
       
       circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(redNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(redNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(redNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(redNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(redNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
//    	flagGroup1.x = 1000;
//      
//    	var tween = this.add.tween(flagGroup1);
//    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
//      
//        tween.onComplete.add(function(){
//      
//     }, this);                
    	    
    },
	  
    gotoEighthQuestion:function(){
      
         _this.questionid = 1; 
        //August
    	no11++;
        
        //this.getVoice();
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(350,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=7;
        months.name = "august";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(315,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            correctflag++;
            if(voices[0]=="firstDay")
                    this.checkAns(whiteNum1,"wedgrp",5,"firstDay");
            else
                this.checkAns(whiteNum1,"wedgrp",5,"firstWednesday");
        },this);
        //whiteNum1.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum2= this.add.sprite(415,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum2,"thugrp",5);
        },this);
        //whiteNum2.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum3= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            this.checkAns(whiteNum3,"frigrp",5);
        },this);
        //whiteNum3.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum4= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            this.checkAns(whiteNum4,"satgrp",4);
        },this);
        //whiteNum4.events.onInputDown.add(this.wrongAns,this);
        
        redNum5= this.add.sprite(715,210,'Level61_redNum');
    	redNum5.scale.setTo(0.95,1);
        redNum5.frame=5;
        redNum5.inputEnabled=true;
        redNum5.input.useHandCursor = true;
        redNum5.events.onInputDown.add(function(){
            this.checkAns(redNum5,"sungrp",4);
        },this);
        //redNum5.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum6= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            this.checkAns(whiteNum6,"mongrp",4,"firstMonday");
        },this);
        //whiteNum6.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum7= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            this.checkAns(whiteNum7,"tuegrp",4,"firstTuesday");
        },this);
        //whiteNum7.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum8= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            this.checkAns(whiteNum8,"wedgrp",5);
        },this);
       // whiteNum8.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum9= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            this.checkAns(whiteNum9,"thugrp",5);
        },this);
        //whiteNum9.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum10= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            this.checkAns(whiteNum10,"frigrp",5);
        },this);
        //whiteNum10.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum11= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            this.checkAns(whiteNum11,"satgrp",4);
        },this);
        //whiteNum11.events.onInputDown.add(this.wrongAns,this);
        
        redNum12= this.add.sprite(715,260,'Level61_redNum');
    	redNum12.scale.setTo(0.95,1);
        redNum12.frame=12;
        redNum12.inputEnabled=true;
        redNum12.input.useHandCursor = true;
        redNum12.events.onInputDown.add(function(){
            this.checkAns(redNum12,"sungrp",4);
        },this);
        //redNum12.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum13= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            this.checkAns(whiteNum13,"mongrp",4);
        },this);
        //whiteNum13.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum14= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            this.checkAns(whiteNum14,"tuegrp",4);
        },this);
        //whiteNum14.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum15= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            this.checkAns(whiteNum15,"wedgrp",5);
        },this);
       // whiteNum15.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum16= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            this.checkAns(whiteNum16,"thugrp",5);
        },this);
        //whiteNum16.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum17= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            this.checkAns(whiteNum17,"frigrp",5);
        },this);
       // whiteNum17.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum18= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            this.checkAns(whiteNum18,"satgrp",4);
        },this);
        //whiteNum18.events.onInputDown.add(this.wrongAns,this);
        
        redNum19= this.add.sprite(715,310,'Level61_redNum');
    	redNum19.scale.setTo(0.95,1);
        redNum19.frame=19;
        redNum19.inputEnabled=true;
        redNum19.input.useHandCursor = true;
        redNum19.events.onInputDown.add(function(){
            this.checkAns(redNum19,"sungrp",4);
        },this);
        //redNum19.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum20= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            this.checkAns(whiteNum20,"mongrp",4);
        },this);
        //whiteNum20.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum21= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            this.checkAns(whiteNum21,"tuegrp",4);
        },this);
        //whiteNum21.events.onInputDown.add(this.wrongAns,this);
        
        
        whiteNum22= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            this.checkAns(whiteNum22,"wedgrp",5);
        },this);
        //whiteNum22.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum23= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            this.checkAns(whiteNum23,"thugrp",5);
        },this);
        //whiteNum23.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum24= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            this.checkAns(whiteNum24,"frigrp",5);
        },this);
        //whiteNum24.events.onInputDown.add(this.wrongAns,this);
        
       whiteNum25= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            this.checkAns(whiteNum25,"satgrp",4,"lastSaturday");
        },this);
       // whiteNum25.events.onInputDown.add(this.wrongAns,this);
        
        redNum26= this.add.sprite(715,360,'Level61_redNum');
    	redNum26.scale.setTo(0.95,1);
        redNum26.frame=26;
        redNum26.inputEnabled=true;
        redNum26.input.useHandCursor = true;
        redNum26.events.onInputDown.add(function(){
            this.checkAns(redNum26,"sungrp",4,"lastSunday");
        },this);
        //redNum26.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum27= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            this.checkAns(whiteNum27,"mongrp",4);
        },this);
       // whiteNum27.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum28= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            this.checkAns(whiteNum28,"tuegrp",4);
        },this);
       // whiteNum28.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum29= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            this.checkAns(whiteNum29,"wedgrp",5);
        },this);
       // whiteNum29.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum30= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum30,"thugrp",5);
        },this);
        //whiteNum30.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum31= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum31,"frigrp",5,"lastFriday");
        },this);
        //whiteNum31.events.onInputDown.add(this.wrongAns,this);
        
       circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(redNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(redNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(redNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(redNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);*/                
    	    
    },
    
    gotoNinethQuestion:function(){
       _this.questionid = 1;
        //september
    	no11++;
        
        //this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);

        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];

        months = this.add.sprite(330,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=8;
      months.name = "september";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
      months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
      year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
      year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
       whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum1,"satgrp",5,"firstDay");
        },this);
        
        redNum2= this.add.sprite(715,210,'Level61_redNum');
    	redNum2.scale.setTo(0.95,1);
        redNum2.frame=2;
        redNum2.inputEnabled=true;
        redNum2.input.useHandCursor = true;
        redNum2.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(redNum2,"sungrp",5);
        },this);
        
        whiteNum3= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            this.checkAns(whiteNum3,"mongrp",4,"firstMonday");
        },this);
        
        whiteNum4= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            this.checkAns(whiteNum4,"tuegrp",4,"firstTuesday");
        },this);
        
        whiteNum5= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            this.checkAns(whiteNum5,"wedgrp",4,"firstWednesday");
        },this);
        
        whiteNum6= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            this.checkAns(whiteNum6,"thugrp",4);
        },this);
        
        whiteNum7= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            this.checkAns(whiteNum7,"frigrp",4);
        },this);
        
        whiteNum8= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            this.checkAns(whiteNum8,"satgrp",5);
        },this);
        
       redNum9= this.add.sprite(715,260,'Level61_redNum');
    	redNum9.scale.setTo(0.95,1);
        redNum9.frame=9;
        redNum9.inputEnabled=true;
        redNum9.input.useHandCursor = true;
        redNum9.events.onInputDown.add(function(){
            this.checkAns(redNum9,"sungrp",5);
        },this);
        
        whiteNum10= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            this.checkAns(whiteNum10,"mongrp",4);
        },this);
        
        whiteNum11= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            this.checkAns(whiteNum11,"tuegrp",4);
        },this);
        
        whiteNum12= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            this.checkAns(whiteNum12,"wedgrp",4);
        },this);
        
        whiteNum13= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            this.checkAns(whiteNum13,"thugrp",4);
        },this);
        
        whiteNum14= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            this.checkAns(whiteNum14,"frigrp",4);
        },this);
        
        whiteNum15= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            this.checkAns(whiteNum15,"satgrp",5);
        },this);
        
        redNum16= this.add.sprite(715,310,'Level61_redNum');
    	redNum16.scale.setTo(0.95,1);
        redNum16.frame=16;
        redNum16.inputEnabled=true;
        redNum16.input.useHandCursor = true;
        redNum16.events.onInputDown.add(function(){
            this.checkAns(redNum16,"sungrp",5);
        },this);
        
        whiteNum17= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            this.checkAns(whiteNum17,"mongrp",4);
        },this);
        
        whiteNum18= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            this.checkAns(whiteNum18,"tuegrp",4);
        },this);
        
        whiteNum19= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            this.checkAns(whiteNum19,"wedgrp",4);
        },this);
        
        whiteNum20= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            this.checkAns(whiteNum20,"thugrp",4);
        },this);
        
        whiteNum21= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            this.checkAns(whiteNum21,"frigrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            this.checkAns(whiteNum22,"satgrp",5);
        },this);
        
        redNum23= this.add.sprite(715,360,'Level61_redNum');
    	redNum23.scale.setTo(0.95,1);
        redNum23.frame=23;
        redNum23.inputEnabled=true;
        redNum23.input.useHandCursor = true;
        redNum23.events.onInputDown.add(function(){
            this.checkAns(redNum23,"sungrp",5);
        },this);
        
        whiteNum24= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            this.checkAns(whiteNum24,"mongrp",4);
        },this);
        
       whiteNum25= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            this.checkAns(whiteNum25,"tuegrp",4);
        },this);
        
        whiteNum26= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            this.checkAns(whiteNum26,"wedgrp",4);
        },this);
        
        whiteNum27= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            this.checkAns(whiteNum27,"thugrp",4);
        },this);
        
        whiteNum28= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            this.checkAns(whiteNum28,"frigrp",4,"lastFriday");
        },this);
        
        whiteNum29= this.add.sprite(615,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum29,"satgrp",5,"lastSaturday");
        },this);
        
        redNum30= this.add.sprite(715,410,'Level61_redNum');
    	redNum30.scale.setTo(0.95,1);
        redNum30.frame=30;
        redNum30.inputEnabled=true;
        redNum30.input.useHandCursor = true;
        redNum30.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(redNum30,"sungrp",5,"lastSunday");
        },this);
        
      circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
       
       circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
       
       circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
       
       circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(redNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(redNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(redNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(redNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(redNum30);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);    */               
    	    
    },
    
    gotoTenthQuestion:function(){
         _this.questionid = 1;
        //october
    	no11++;
        
      //  this.getVoice();
        
       framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        
        months = this.add.sprite(350,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=9;
        months.name = "october";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(115,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            correctflag++;
            if(voices[0]=="firstDay")
            this.checkAns(whiteNum1,"mongrp",5,"firstDay");
            else
                this.checkAns(whiteNum1,"mongrp",5,"firstMonday");
        },this);
        
        whiteNum2= this.add.sprite(215,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum2,"tuegrp",5,"firstTuesday");
        },this);
        
        whiteNum3= this.add.sprite(315,210,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            this.checkAns(whiteNum3,"wedgrp",5,"firstWednesday");
        },this);
        
        whiteNum4= this.add.sprite(415,210,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            this.checkAns(whiteNum4,"thugrp",4);
        },this);
        
        whiteNum5= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            this.checkAns(whiteNum5,"frigrp",4);
        },this);
        
        whiteNum6= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            this.checkAns(whiteNum6,"satgrp",4);
        },this);
        
        redNum7= this.add.sprite(715,210,'Level61_redNum');
    	redNum7.scale.setTo(0.95,1);
        redNum7.frame=7;
        redNum7.inputEnabled=true;
        redNum7.input.useHandCursor = true;
        redNum7.events.onInputDown.add(function(){
            this.checkAns(redNum7,"sungrp",4);
        },this);
        
        whiteNum8= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            this.checkAns(whiteNum8,"mongrp",5);
        },this);
        
       whiteNum9= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            this.checkAns(whiteNum9,"tuegrp",5);
        },this);
        
        whiteNum10= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            this.checkAns(whiteNum10,"wedgrp",5);
        },this);
        
        whiteNum11= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            this.checkAns(whiteNum11,"thugrp",4);
        },this);
        
        whiteNum12= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            this.checkAns(whiteNum12,"frigrp",4);
        },this);
        
        whiteNum13= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            this.checkAns(whiteNum13,"satgrp",4);
        },this);
        
        redNum14= this.add.sprite(715,260,'Level61_redNum');
    	redNum14.scale.setTo(0.95,1);
        redNum14.frame=14;
        redNum14.inputEnabled=true;
        redNum14.input.useHandCursor = true;
        redNum14.events.onInputDown.add(function(){
            this.checkAns(redNum14,"sungrp",4);
        },this);
        
        whiteNum15= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            this.checkAns(whiteNum15,"mongrp",5);
        },this);
        
        whiteNum16= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            this.checkAns(whiteNum16,"tuegrp",5);
        },this);
        
        whiteNum17= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            this.checkAns(whiteNum17,"wedgrp",5);
        },this);
        
        whiteNum18= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            this.checkAns(whiteNum18,"thugrp",4);
        },this);
        
        whiteNum19= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            this.checkAns(whiteNum19,"frigrp",4);
        },this);
        
        whiteNum20= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            this.checkAns(whiteNum20,"satgrp",4);
        },this);
        
        redNum21= this.add.sprite(715,310,'Level61_redNum');
    	redNum21.scale.setTo(0.95,1);
        redNum21.frame=21;
        redNum21.inputEnabled=true;
        redNum21.input.useHandCursor = true;
        redNum21.events.onInputDown.add(function(){
            this.checkAns(redNum21,"sungrp",4);
        },this);
        
        whiteNum22= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            this.checkAns(whiteNum22,"mongrp",5);
        },this);
        
        whiteNum23= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            this.checkAns(whiteNum23,"tuegrp",5);
        },this);
        
        whiteNum24= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            this.checkAns(whiteNum24,"wedgrp",5);
        },this);
        
       whiteNum25= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            this.checkAns(whiteNum25,"thugrp",4);
        },this);
        
        whiteNum26= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            this.checkAns(whiteNum26,"frigrp",4,"lastFriday");
        },this);
        
        whiteNum27= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            this.checkAns(whiteNum27,"satgrp",4,"lastSaturday");
        },this);
        
        redNum28= this.add.sprite(715,360,'Level61_redNum');
    	redNum28.scale.setTo(0.95,1);
        redNum28.frame=28;
        redNum28.inputEnabled=true;
        redNum28.input.useHandCursor = true;
        redNum28.events.onInputDown.add(function(){
            this.checkAns(redNum28,"sungrp",4,"lastSunday");
        },this);
        
        whiteNum29= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            this.checkAns(whiteNum29,"mongrp",5);
        },this);
 
        whiteNum30= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum30,"tuegrp",5);
        },this);
        
        whiteNum31= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum31,"wedgrp",5);
        },this);
        
        circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
       
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
        
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(redNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(redNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(redNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(redNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(whiteNum31);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this); */  
    },
    
    gotoEleventhQuestion:function(){
       _this.questionid = 1;
        //november
    	no11++;
        
       // this.getVoice();
        
       framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        
        months = this.add.sprite(330,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=10;
        months.name = "november";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
        year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
        year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(415,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
        whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum1,"thugrp",4,"firstDay");
        },this);
        
        whiteNum2= this.add.sprite(515,210,'Level61_whiteNum');
    	whiteNum2.scale.setTo(0.95,1);
        whiteNum2.frame=2;
        whiteNum2.inputEnabled=true;
        whiteNum2.input.useHandCursor = true;
        whiteNum2.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum2,"frigrp",4);
        },this);
        
        whiteNum3= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            this.checkAns(whiteNum3,"satgrp",4);
        },this);
        
        redNum4= this.add.sprite(715,210,'Level61_redNum');
    	redNum4.scale.setTo(0.95,1);
        redNum4.frame=4;
        redNum4.inputEnabled=true;
        redNum4.input.useHandCursor = true;
        redNum4.events.onInputDown.add(function(){
            this.checkAns(redNum4,"sungrp",4);
        },this);
        
        whiteNum5= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            this.checkAns(whiteNum5,"mongrp",4,"firstMonday");
        },this);
        
        whiteNum6= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            this.checkAns(whiteNum6,"tuegrp",4,"firstTuesday");
        },this);
        
        whiteNum7= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            this.checkAns(whiteNum7,"wedgrp",4,"firstWednesday");
        },this);
        
        whiteNum8= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            this.checkAns(whiteNum8,"thugrp",4);
        },this);
        
        whiteNum9= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum9.scale.setTo(0.95,1);
        whiteNum9.frame=9;
        whiteNum9.inputEnabled=true;
        whiteNum9.input.useHandCursor = true;
        whiteNum9.events.onInputDown.add(function(){
            this.checkAns(whiteNum9,"frigrp",4);
        },this);
        
        whiteNum10= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            this.checkAns(whiteNum10,"satgrp",4);
        },this);
        
        redNum11= this.add.sprite(715,260,'Level61_redNum');
    	redNum11.scale.setTo(0.95,1);
        redNum11.frame=11;
        redNum11.inputEnabled=true;
        redNum11.input.useHandCursor = true;
        redNum11.events.onInputDown.add(function(){
            this.checkAns(redNum11,"sungrp",4);
        },this);
        
        whiteNum12= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            this.checkAns(whiteNum12,"mongrp",4);
        },this);
        
        whiteNum13= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            this.checkAns(whiteNum13,"tuegrp",4);
        },this);
        
        whiteNum14= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            this.checkAns(whiteNum14,"wedgrp",4);
        },this);
        
        whiteNum15= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            this.checkAns(whiteNum15,"thugrp",4);
        },this);
        
        whiteNum16= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum16.scale.setTo(0.95,1);
        whiteNum16.frame=16;
        whiteNum16.inputEnabled=true;
        whiteNum16.input.useHandCursor = true;
        whiteNum16.events.onInputDown.add(function(){
            this.checkAns(whiteNum16,"frigrp",4);
        },this);
        
        whiteNum17= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            this.checkAns(whiteNum17,"satgrp",4);
        },this);
        
        redNum18= this.add.sprite(715,310,'Level61_redNum');
    	redNum18.scale.setTo(0.95,1);
        redNum18.frame=18;
        redNum18.inputEnabled=true;
        redNum18.input.useHandCursor = true;
        redNum18.events.onInputDown.add(function(){
            this.checkAns(redNum18,"sungrp",4);
        },this);
        
        whiteNum19= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            this.checkAns(whiteNum19,"mongrp",4);
        },this);
        
        whiteNum20= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            this.checkAns(whiteNum20,"tuegrp",4);
        },this);
        
        whiteNum21= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            this.checkAns(whiteNum21,"wedgrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            this.checkAns(whiteNum22,"thugrp",4);
        },this);
        
        whiteNum23= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum23.scale.setTo(0.95,1);
        whiteNum23.frame=23;
        whiteNum23.inputEnabled=true;
        whiteNum23.input.useHandCursor = true;
        whiteNum23.events.onInputDown.add(function(){
            this.checkAns(whiteNum23,"frigrp",4);
        },this);
        
        whiteNum24= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            this.checkAns(whiteNum24,"satgrp",4,"lastSaturday");
        },this);
        
       redNum25= this.add.sprite(715,360,'Level61_redNum');
    	redNum25.scale.setTo(0.95,1);
        redNum25.frame=25;
        redNum25.inputEnabled=true;
        redNum25.input.useHandCursor = true;
        redNum25.events.onInputDown.add(function(){
            this.checkAns(redNum25,"sungrp",4,"lastSunday");
        },this);
        
        whiteNum26= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            this.checkAns(whiteNum26,"mongrp",4);
        },this);
        
        whiteNum27= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            this.checkAns(whiteNum27,"tuegrp",4);
        },this);
        
        whiteNum28= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            this.checkAns(whiteNum28,"wedgrp",4);
        },this);
         
         whiteNum29= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum29,"thugrp",4);
        },this);
       // whiteNum29.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum30= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum30.scale.setTo(0.95,1);
        whiteNum30.frame=30;
        whiteNum30.inputEnabled=true;
        whiteNum30.input.useHandCursor = true;
        whiteNum30.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum30,"frigrp",4,"lastFriday");
        },this);
        //whiteNum30.events.onInputDown.add(this.wrongAns,this);
        
       
       circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
        
        circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
        
        circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
        
        circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(whiteNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(redNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(whiteNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(redNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(whiteNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(redNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(whiteNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(redNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(whiteNum30);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
       
        
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);   */
    },
    
    gotoTwelvethQuestion:function(){
     _this.questionid = 1;
        //december
    	no11++;
        
      //  this.getVoice();
        
        framesChange=new Array();
        framesChange = [1,2,3,4,5,6];
        framesChange = this.shuffle(framesChange);
        
       
        
        backbg = this.add.sprite(70,60,'Level61_c1');
    	backbg.scale.setTo(0.97,1.05);
        backbg.frame=framesChange[0];
        
        months = this.add.sprite(330,122,'Level61_months');
        months.scale.setTo(1,1.2);
        months.frame=11;
        months.name = "december";
        months.inputEnabled=true;
        months.input.useHandCursor = true;
        months.events.onInputDown.add(function(){
            this.checkAns(months);
        },this);
        //months.events.onInputDown.add(this.correctAns,this);
        
        year = this.add.sprite(500,125,'Level61_year');
        year.scale.setTo(1,1);
       year.value="111";
        year.inputEnabled=true;
        year.input.useHandCursor = true;
       year.events.onInputDown.add(function(){
            this.checkAns(year);
        },this);
        //year.events.onInputDown.add(this.wrongAns,this);
        
        monday= this.add.sprite(115,165,'Level61_monday');
    	monday.scale.setTo(0.95,1);
        monday.inputEnabled=true;
        monday.input.useHandCursor = true;
        //monday.events.onInputDown.add(this.wrongAns,this);
        
        Tuesday= this.add.sprite(215,165,'Level61_Tuesday');
    	Tuesday.scale.setTo(0.95,1);
        Tuesday.inputEnabled=true;
        Tuesday.input.useHandCursor = true;
        //Tuesday.events.onInputDown.add(this.wrongAns,this);
        
        wednesday= this.add.sprite(315,165,'Level61_wednesday');
    	wednesday.scale.setTo(0.95,1);
        wednesday.inputEnabled=true;
        wednesday.input.useHandCursor = true;
        //wednesday.events.onInputDown.add(this.wrongAns,this);
        
        thusday= this.add.sprite(415,165,'Level61_thusday');
    	thusday.scale.setTo(0.95,1);
        thusday.inputEnabled=true;
        thusday.input.useHandCursor = true;
        //thusday.events.onInputDown.add(this.wrongAns,this);
        
        friday= this.add.sprite(515,165,'Level61_friday');
    	friday.scale.setTo(0.95,1);
        friday.inputEnabled=true;
        friday.input.useHandCursor = true;
        //friday.events.onInputDown.add(this.wrongAns,this);
        
        saturday= this.add.sprite(615,165,'Level61_saturday');
    	saturday.scale.setTo(0.95,1);
        saturday.inputEnabled=true;
        saturday.input.useHandCursor = true;
        //saturday.events.onInputDown.add(this.wrongAns,this);
        
        sunday= this.add.sprite(715,165,'Level61_sunday');
    	sunday.scale.setTo(0.95,1);
        sunday.inputEnabled=true;
        sunday.input.useHandCursor = true;
        //sunday.events.onInputDown.add(this.wrongAns,this);
        
        whiteNum1= this.add.sprite(615,210,'Level61_whiteNum');
    	whiteNum1.scale.setTo(0.95,1);
        whiteNum1.frame=1;
       whiteNum1.name="firstdayy"
        whiteNum1.inputEnabled=true;
        whiteNum1.input.useHandCursor = true;
        whiteNum1.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(whiteNum1,"satgrp",5,"firstDay");
        },this);
        
        redNum2= this.add.sprite(715,210,'Level61_redNum');
    	redNum2.scale.setTo(0.95,1);
        redNum2.frame=2;
        redNum2.inputEnabled=true;
        redNum2.input.useHandCursor = true;
        redNum2.events.onInputDown.add(function(){
            correctflag++;
            this.checkAns(redNum2,"sungrp",5);
        },this);
        
        whiteNum3= this.add.sprite(115,260,'Level61_whiteNum');
    	whiteNum3.scale.setTo(0.95,1);
        whiteNum3.frame=3;
        whiteNum3.inputEnabled=true;
        whiteNum3.input.useHandCursor = true;
        whiteNum3.events.onInputDown.add(function(){
            this.checkAns(whiteNum3,"mongrp",5,"firstMonday");
        },this);
        
        whiteNum4= this.add.sprite(215,260,'Level61_whiteNum');
    	whiteNum4.scale.setTo(0.95,1);
        whiteNum4.frame=4;
        whiteNum4.inputEnabled=true;
        whiteNum4.input.useHandCursor = true;
        whiteNum4.events.onInputDown.add(function(){
            this.checkAns(whiteNum4,"tuegrp",4,"firstTuesday");
        },this);
        
        whiteNum5= this.add.sprite(315,260,'Level61_whiteNum');
    	whiteNum5.scale.setTo(0.95,1);
        whiteNum5.frame=5;
        whiteNum5.inputEnabled=true;
        whiteNum5.input.useHandCursor = true;
        whiteNum5.events.onInputDown.add(function(){
            this.checkAns(whiteNum5,"wedgrp",4,"firstWednesday");
        },this);
        
        whiteNum6= this.add.sprite(415,260,'Level61_whiteNum');
    	whiteNum6.scale.setTo(0.95,1);
        whiteNum6.frame=6;
        whiteNum6.inputEnabled=true;
        whiteNum6.input.useHandCursor = true;
        whiteNum6.events.onInputDown.add(function(){
            this.checkAns(whiteNum6,"thugrp",4);
        },this);
        
        whiteNum7= this.add.sprite(515,260,'Level61_whiteNum');
    	whiteNum7.scale.setTo(0.95,1);
        whiteNum7.frame=7;
        whiteNum7.inputEnabled=true;
        whiteNum7.input.useHandCursor = true;
        whiteNum7.events.onInputDown.add(function(){
            this.checkAns(whiteNum7,"frigrp",4);
        },this);
        
        whiteNum8= this.add.sprite(615,260,'Level61_whiteNum');
    	whiteNum8.scale.setTo(0.95,1);
        whiteNum8.frame=8;
        whiteNum8.inputEnabled=true;
        whiteNum8.input.useHandCursor = true;
        whiteNum8.events.onInputDown.add(function(){
            this.checkAns(whiteNum8,"satgrp",5);
        },this);
        
       redNum9= this.add.sprite(715,260,'Level61_redNum');
    	redNum9.scale.setTo(0.95,1);
        redNum9.frame=9;
        redNum9.inputEnabled=true;
        redNum9.input.useHandCursor = true;
        redNum9.events.onInputDown.add(function(){
            this.checkAns(redNum9,"sungrp",5);
        },this);
        
        whiteNum10= this.add.sprite(115,310,'Level61_whiteNum');
    	whiteNum10.scale.setTo(0.95,1);
        whiteNum10.frame=10;
        whiteNum10.inputEnabled=true;
        whiteNum10.input.useHandCursor = true;
        whiteNum10.events.onInputDown.add(function(){
            this.checkAns(whiteNum10,"mongrp",5);
        },this);
        
        whiteNum11= this.add.sprite(215,310,'Level61_whiteNum');
    	whiteNum11.scale.setTo(0.95,1);
        whiteNum11.frame=11;
        whiteNum11.inputEnabled=true;
        whiteNum11.input.useHandCursor = true;
        whiteNum11.events.onInputDown.add(function(){
            this.checkAns(whiteNum11,"tuegrp",4);
        },this);
        
        whiteNum12= this.add.sprite(315,310,'Level61_whiteNum');
    	whiteNum12.scale.setTo(0.95,1);
        whiteNum12.frame=12;
        whiteNum12.inputEnabled=true;
        whiteNum12.input.useHandCursor = true;
        whiteNum12.events.onInputDown.add(function(){
            this.checkAns(whiteNum12,"wedgrp",4);
        },this);
        
        whiteNum13= this.add.sprite(415,310,'Level61_whiteNum');
    	whiteNum13.scale.setTo(0.95,1);
        whiteNum13.frame=13;
        whiteNum13.inputEnabled=true;
        whiteNum13.input.useHandCursor = true;
        whiteNum13.events.onInputDown.add(function(){
            this.checkAns(whiteNum13,"thugrp",4);
        },this);
        
        whiteNum14= this.add.sprite(515,310,'Level61_whiteNum');
    	whiteNum14.scale.setTo(0.95,1);
        whiteNum14.frame=14;
        whiteNum14.inputEnabled=true;
        whiteNum14.input.useHandCursor = true;
        whiteNum14.events.onInputDown.add(function(){
            this.checkAns(whiteNum14,"frigrp",4);
        },this);
        
        whiteNum15= this.add.sprite(615,310,'Level61_whiteNum');
    	whiteNum15.scale.setTo(0.95,1);
        whiteNum15.frame=15;
        whiteNum15.inputEnabled=true;
        whiteNum15.input.useHandCursor = true;
        whiteNum15.events.onInputDown.add(function(){
            this.checkAns(whiteNum15,"satgrp",5);
        },this);
        
        redNum16= this.add.sprite(715,310,'Level61_redNum');
    	redNum16.scale.setTo(0.95,1);
        redNum16.frame=16;
        redNum16.inputEnabled=true;
        redNum16.input.useHandCursor = true;
        redNum16.events.onInputDown.add(function(){
            this.checkAns(redNum16,"sungrp",5);
        },this);
        
        whiteNum17= this.add.sprite(115,360,'Level61_whiteNum');
    	whiteNum17.scale.setTo(0.95,1);
        whiteNum17.frame=17;
        whiteNum17.inputEnabled=true;
        whiteNum17.input.useHandCursor = true;
        whiteNum17.events.onInputDown.add(function(){
            this.checkAns(whiteNum17,"mongrp",5);
        },this);
        
        whiteNum18= this.add.sprite(215,360,'Level61_whiteNum');
    	whiteNum18.scale.setTo(0.95,1);
        whiteNum18.frame=18;
        whiteNum18.inputEnabled=true;
        whiteNum18.input.useHandCursor = true;
        whiteNum18.events.onInputDown.add(function(){
            this.checkAns(whiteNum18,"tuegrp",4);
        },this);
        
        whiteNum19= this.add.sprite(315,360,'Level61_whiteNum');
    	whiteNum19.scale.setTo(0.95,1);
        whiteNum19.frame=19;
        whiteNum19.inputEnabled=true;
        whiteNum19.input.useHandCursor = true;
        whiteNum19.events.onInputDown.add(function(){
            this.checkAns(whiteNum19,"wedgrp",4);
        },this);
        
        whiteNum20= this.add.sprite(415,360,'Level61_whiteNum');
    	whiteNum20.scale.setTo(0.95,1);
        whiteNum20.frame=20;
        whiteNum20.inputEnabled=true;
        whiteNum20.input.useHandCursor = true;
        whiteNum20.events.onInputDown.add(function(){
            this.checkAns(whiteNum20,"thugrp",4);
        },this);
        
        whiteNum21= this.add.sprite(515,360,'Level61_whiteNum');
    	whiteNum21.scale.setTo(0.95,1);
        whiteNum21.frame=21;
        whiteNum21.inputEnabled=true;
        whiteNum21.input.useHandCursor = true;
        whiteNum21.events.onInputDown.add(function(){
            this.checkAns(whiteNum21,"frigrp",4);
        },this);
        
        
        whiteNum22= this.add.sprite(615,360,'Level61_whiteNum');
    	whiteNum22.scale.setTo(0.95,1);
        whiteNum22.frame=22;
        whiteNum22.inputEnabled=true;
        whiteNum22.input.useHandCursor = true;
        whiteNum22.events.onInputDown.add(function(){
            this.checkAns(whiteNum22,"satgrp",5);
        },this);
        
        redNum23= this.add.sprite(715,360,'Level61_redNum');
    	redNum23.scale.setTo(0.95,1);
        redNum23.frame=23;
        redNum23.inputEnabled=true;
        redNum23.input.useHandCursor = true;
        redNum23.events.onInputDown.add(function(){
            this.checkAns(redNum23,"sungrp",5);
        },this);
        
        whiteNum24= this.add.sprite(115,410,'Level61_whiteNum');
    	whiteNum24.scale.setTo(0.95,1);
        whiteNum24.frame=24;
        whiteNum24.inputEnabled=true;
        whiteNum24.input.useHandCursor = true;
        whiteNum24.events.onInputDown.add(function(){
            this.checkAns(whiteNum24,"mongrp",5);
        },this);
        
       whiteNum25= this.add.sprite(215,410,'Level61_whiteNum');
    	whiteNum25.scale.setTo(0.95,1);
        whiteNum25.frame=25;
        whiteNum25.inputEnabled=true;
        whiteNum25.input.useHandCursor = true;
        whiteNum25.events.onInputDown.add(function(){
            this.checkAns(whiteNum25,"tuegrp",4);
        },this);
        
        whiteNum26= this.add.sprite(315,410,'Level61_whiteNum');
    	whiteNum26.scale.setTo(0.95,1);
        whiteNum26.frame=26;
        whiteNum26.inputEnabled=true;
        whiteNum26.input.useHandCursor = true;
        whiteNum26.events.onInputDown.add(function(){
            this.checkAns(whiteNum26,"wedgrp",4);
        },this);
        
        whiteNum27= this.add.sprite(415,410,'Level61_whiteNum');
    	whiteNum27.scale.setTo(0.95,1);
        whiteNum27.frame=27;
        whiteNum27.inputEnabled=true;
        whiteNum27.input.useHandCursor = true;
        whiteNum27.events.onInputDown.add(function(){
            this.checkAns(whiteNum27,"thugrp",4);
        },this);
        
        whiteNum28= this.add.sprite(515,410,'Level61_whiteNum');
    	whiteNum28.scale.setTo(0.95,1);
        whiteNum28.frame=28;
        whiteNum28.inputEnabled=true;
        whiteNum28.input.useHandCursor = true;
        whiteNum28.events.onInputDown.add(function(){
            this.checkAns(whiteNum28,"frigrp",4,"lastFriday");
        },this);
        
        whiteNum29= this.add.sprite(615,410,'Level61_whiteNum');
    	whiteNum29.scale.setTo(0.95,1);
        whiteNum29.frame=29;
        whiteNum29.inputEnabled=true;
        whiteNum29.input.useHandCursor = true;
        whiteNum29.events.onInputDown.add(function(){
            
            this.checkAns(whiteNum29,"satgrp",5,"lastSaturday");
        },this);
        
        redNum30= this.add.sprite(715,410,'Level61_redNum');
    	redNum30.scale.setTo(0.95,1);
        redNum30.frame=30;
        redNum30.inputEnabled=true;
        redNum30.input.useHandCursor = true;
        redNum30.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(redNum30,"sungrp",5,"lastSunday");
        },this);
        
        whiteNum31= this.add.sprite(115,210,'Level61_whiteNum');
    	whiteNum31.scale.setTo(0.95,1);
        whiteNum31.frame=31;
        whiteNum31.inputEnabled=true;
        whiteNum31.input.useHandCursor = true;
        whiteNum31.events.onInputDown.add(function(){
            correctflag1++;
            this.checkAns(whiteNum31,"mongrp",5);
        },this);
        
       circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
        circleanimfirstAnim.scale.setTo(0.74,1);
        circleanimfirstAnim.alpha=0;
       
       
       circleanim00=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
        circleanim00.scale.setTo(0.74,1);
        circleanim00.alpha=0;
       
       circleanim101=this.add.sprite(50, 100, 'anim1','a1');
        circleanim101.scale.setTo(0.8,1.1);
        circleanim101.alpha=0;
       
       circleanim201=this.add.sprite(50, 100, 'anim1','a1');
        circleanim201.scale.setTo(0.5,1.1);
        circleanim201.alpha=0;
    
        flagGroup1 = this.add.group();
        flagGroup1.add(backbg);
        flagGroup1.add(months);
        flagGroup1.add(year);
        flagGroup1.add(monday);
        flagGroup1.add(Tuesday);
        flagGroup1.add(wednesday);
        flagGroup1.add(thusday);
        flagGroup1.add(friday);
        flagGroup1.add(saturday);
        flagGroup1.add(sunday);
        flagGroup1.add(whiteNum1);
        flagGroup1.add(redNum2);
        flagGroup1.add(whiteNum3);
        flagGroup1.add(whiteNum4);
        flagGroup1.add(whiteNum5);
        flagGroup1.add(whiteNum6);
        flagGroup1.add(whiteNum7);
        flagGroup1.add(whiteNum8);
        flagGroup1.add(redNum9);
        flagGroup1.add(whiteNum10);
        flagGroup1.add(whiteNum11);
        flagGroup1.add(whiteNum12);
        flagGroup1.add(whiteNum13);
        flagGroup1.add(whiteNum14);
        flagGroup1.add(whiteNum15);
        flagGroup1.add(redNum16);
        flagGroup1.add(whiteNum17);
        flagGroup1.add(whiteNum18);
        flagGroup1.add(whiteNum19);
        flagGroup1.add(whiteNum20);
        flagGroup1.add(whiteNum21);
        flagGroup1.add(whiteNum22);
        flagGroup1.add(redNum23);
        flagGroup1.add(whiteNum24);
        flagGroup1.add(whiteNum25);
        flagGroup1.add(whiteNum26);
        flagGroup1.add(whiteNum27);
        flagGroup1.add(whiteNum28);
        flagGroup1.add(whiteNum29);
        flagGroup1.add(redNum30);
        flagGroup1.add(whiteNum31);
        flagGroup1.add(circleanimfirstAnim);
        flagGroup1.add(circleanim00);
        flagGroup1.add(circleanim101);
        flagGroup1.add(circleanim201);
        
        
    	/*flagGroup1.x = 1000;
      
    	var tween = this.add.tween(flagGroup1);
    	tween.to({ x: 0 }, 0, 'Linear', true, 0);
      
        tween.onComplete.add(function(){
      
     }, this);      */         
    	    
    },
    
	changeQuestion:function()
	{
		
		if(no11<6)
		{
			_this.timer1.stop();
            count++;
			this.getQuestion();
		}
		else
		{
			_this.timer1.stop();
			_this.timer1 = null;
			////console.log("gameEnd");
            this.state.start('grade6_1Score');

		}
	},

   
	removeCelebration:function()
             {
                 
            //console.log("index"+voices[0]);
        //console.log("index"+voices);
         var index = voices.indexOf(voices[0]);   
        if (index > -1) {
                voices.splice(index, 1);
            }
        //console.log("index"+voices[0]);
        //console.log("index"+voices);
              celebration = false; 
                    count1++;
 
                 
                    if(no11<6)
               {
							
                            this.time.events.add(1000,function(){
								_this.timer1.stop();
                                flagGroup1.destroy();
                                this.getQuestion();
                            },this);
               }
               else 
               {
                            this.time.events.add(1000,function(){
								_this.timer1.stop();
								_this.timer1 = null;
                                this.state.start('grade6_1Score');
                            },this); 
               }

 },
	correctAns:function(target)
	{
		//console.log("correct11");
        _this.speakerbtn.inputEnabled=false;
         
                if(timer)
                    {
                        timer.stop();
					   timer = null; 
                    }
					
				_this.currentTime = window.timeSaveFunc();
						var saveAsment = 
						{ 
							id_game_play: _this.savedVar,
							id_question: _this.questionid,  
							pass: "Yes",
							time2answer: AnsTimerCount,
							attempts: noofAttempts,
							date_time_submission: _this.currentTime, 
							access_token: window.acctkn 
						}
				
				//absdsjsapi.saveAssessment(saveAsment);

                telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
        
        countboth=0;
        countboth1=0;
        correctflag=0;
        correctflag1=0;

        
		celebration = true;
		
        
                this.clickSound = this.add.audio('ClickSound');
            this.clickSound.play();
     	this.cmusic = this.add.audio('celebr');
		this.cmusic.play();

		 
        
        this.time.events.add(500, this.removeCelebration, this);


		//console.log(target);
        //target.tint = 0xA9A9A9;
		
        
    
        var starAnim = starsGroup.getChildAt(count1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();    
       //this.input.enabled = false;
        //this.disableListeners();
       
		//target.events.onInputDown.removeAll();
	},
    
    wrongAns:function()
	{
       // //console.log("wrongsdfdfdsf"+target.name);
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        //console.log(target);
        //target.tint = 0xA9A9A9;
        //target=tuegrp.getChildAt(0);
		shake.shake(10, target);
                
                this.clickSound = this.add.audio('ClickSound');
            this.clickSound.play();
		this.wmusic = this.add.audio('waudio');
		this.wmusic.play();
        	
	},
    
    checkAns:function(target,group,len,extraparam)
    {
         noofAttempts++;
          //var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,  
				date_time_event: _this.currentTime, 
				event_type: "click",
				res_id: "Level61_"+target.frame,
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);
        target.events.onInputDown.removeAll();
                                                    //voices[0]="last2Days";
        this.clickSound = this.add.audio('ClickSound');
        this.clickSound.play();
        var circleanim=new Array();
        var circleanimg2=new Array();
        target.inputEnabled=false;
        //console.log("extraparam=="+extraparam);
        //console.log("targetframe=="+target.frame);
        switch(voices[0])
        {
            case "Monday" : if(group=="mongrp")
                            { 
                                for(var m=0;m<len;m++)
                                {
                                    circleanim.push(this.add.sprite(0, 0, 'Level61_g3','Symbol 1 copy 14 instance 10000'));
                                    circleanim[m].name="name"+m;
                                    circleanim[m].scale.setTo(0.74,0.85);
                                    circleanim[m].x=target.x+28;//140;
                                    circleanim[m].y=target.y+3;//215+(dayflag*50);
                                    circleanim[m].smoothed = true;
                                    var circleanim1=circleanim[m].animations.add('anim31');
                                    circleanim1.play(10,false); 
                                }
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10, target);
                            }
                            break;
            case "Tuesday" :if(group=="tuegrp")
                            {
                                 for(var m=0;m<len;m++)
                                {
                                    circleanim.push(this.add.sprite(0, 0, 'Level61_g3','Symbol 1 copy 14 instance 10000'));
                                    circleanim[m].name="name"+m;
                                    circleanim[m].scale.setTo(0.74,0.85);
                                    circleanim[m].x=target.x+28;//140;
                                    circleanim[m].y=target.y+3;//215+(dayflag*50);
                                    circleanim[m].smoothed = true;
                                    var circleanim1=circleanim[m].animations.add('anim31');
                                    circleanim1.play(10,false); 
                                }
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10, target);
                            }
                            break;
          case "Wednesday" :if(group=="wedgrp")
                            {
                                 for(var m=0;m<len;m++)
                                {
                                    circleanim.push(this.add.sprite(0, 0, 'Level61_g3','Symbol 1 copy 14 instance 10000'));
                                    circleanim[m].name="name"+m;
                                    circleanim[m].scale.setTo(0.74,0.85);
                                    circleanim[m].x=target.x+28;//140;
                                    circleanim[m].y=target.y+3;//215+(dayflag*50);
                                    circleanim[m].smoothed = true;
                                    var circleanim1=circleanim[m].animations.add('anim31');
                                    circleanim1.play(10,false); 
                                }
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10, target);
                            }
                            break;
            case "Thursday" :if(group=="thugrp")
                             {
                                 for(var m=0;m<len;m++)
                                {
                                    circleanim.push(this.add.sprite(0, 0, 'Level61_g3','Symbol 1 copy 14 instance 10000'));
                                    circleanim[m].name="name"+m;
                                    circleanim[m].scale.setTo(0.74,0.85);
                                    circleanim[m].x=target.x+28;//140;
                                    circleanim[m].y=target.y+3;//215+(dayflag*50);
                                    circleanim[m].smoothed = true;
                                    var circleanim1=circleanim[m].animations.add('anim31');
                                    circleanim1.play(10,false); 
                                }
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                               this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10, target);
                            }
                            break;
            case "Friday" : if(group=="frigrp")
                            {
                                 for(var m=0;m<len;m++)
                                {
                                    circleanim.push(this.add.sprite(0, 0, 'Level61_g3','Symbol 1 copy 14 instance 10000'));
                                    circleanim[m].name="name"+m;
                                    circleanim[m].scale.setTo(0.74,0.85);
                                    circleanim[m].x=target.x+28;//140;
                                    circleanim[m].y=target.y+3;//215+(dayflag*50);
                                    circleanim[m].smoothed = true;
                                    var circleanim1=circleanim[m].animations.add('anim31');
                                    circleanim1.play(10,false); 
                                }
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanim);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                               this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10, target);
                            }
                            break;
           
            case "Sunday" : if(group=="sungrp")
                            {
                                 for(var m=0;m<len;m++)
                                {
                                    circleanimg2.push(this.add.sprite(0, 0, 'Level61_g2','Symbol 1 copy 15 instance 10000'));
                                    circleanimg2[m].name="name"+m;
                                    circleanimg2[m].scale.setTo(0.74,0.85);
                                    circleanimg2[m].x=target.x+28;//140;
                                    circleanimg2[m].y=target.y+3;//215+(dayflag*50);
                                    circleanimg2[m].smoothed = true;
                                    var circleanim1g2=circleanimg2[m].animations.add('anim31');
                                    circleanim1g2.play(10,false); 
                                }
                                dayflag++;
                                if(dayflag==len)
                                {
                                    dayflag=0;
                                    this.correctAns(circleanimg2);
                                }
                            }
                            else
                            {
                                target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10, target);
                            }
                            break;
            case "firstDay" :    if(target.frame==1 && extraparam=="firstDay")
                                 {
                                    //console.log("targetname=="+target.name);
                                    if(target.name=="april" || target.name=="july")
                                    {
                                        
                                       var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
                                        circleanimfirstAnim.scale.setTo(0.74,1);
                                   // circleanimfirstAnim.alpha=0;  
                                    circleanimfirstAnim.alpha=1;
                                    circleanimfirstAnim.x=target.x+29;
                                    circleanimfirstAnim.y=target.y;
                                    circleanimfirstAnim.smoothed = true;
                                    var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                    circleanim1firstAnim.play(10,false);
                                    this.correctAns();
                                      
                                    }
                                     else{
                                         var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                    circleanimfirstAnim.scale.setTo(0.74,1);
                                   // circleanimfirstAnim.alpha=0;  
                                    circleanimfirstAnim.alpha=1;
                                    circleanimfirstAnim.x=target.x+29;
                                    circleanimfirstAnim.y=target.y;
                                    circleanimfirstAnim.smoothed = true;
                                    var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                    circleanim1firstAnim.play(10,false);
                                    this.correctAns();
                                     }
                                     
                                     
                                  
                                 }
                               
                            else
                            {
                                target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                            }
                                
         
                 break;
                  
                
            case "lastDay" : if(months.name == "january"||months.name == "march"||months.name == "may"||months.name =="august"||months.name == "october"||months.name == "july"||months.name == "december")
                             {
                                 if(target.frame==31){
                                     var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                     circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+20;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                  this.correctAns();
                                }
                             
                                    
                                 else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                             }
                             
                             if(months.name == "february")
                             {
                                 if(target.frame==28){
                                     var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                     circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+20;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                  this.correctAns();
                                }
                                    
                                 else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                             }
                             if(months.name == "june"||months.name == "november"||months.name == "april")
                             {
                                 if(target.frame==30){
                                      var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                 circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+20;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                     this.correctAns();
                             }
                                 else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                             }
                                 if(months.name == "september"){
                                     if(target.frame==30){
                                     var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
                                         circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+20;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                  this.correctAns();
                                 }
                                      else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                             }
                    
                           
                            
                            break;
        case "firstMonday" :if(extraparam=="firstMonday")
                                {
                                    extraparam=null;
                                    var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                     circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+29;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                   this.correctAns();
                                }
                               else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                                break;
        case "firstTuesday":if(extraparam=="firstTuesday")
                                {
                                    extraparam=null;
                                    var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                     circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+29;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                   this.correctAns();
                                }
                               else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                                break;
        case "firstWednesday":if(extraparam=="firstWednesday")
                                {
                                    extraparam=null;
                                    var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                     circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+29;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                   this.correctAns();
                                }
                               else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                                break;
                
        case "lastSunday":if(extraparam=="lastSunday")
                                {
                                    extraparam=null;
                                     circleanim00.alpha=1;
                                circleanim00.x=target.x+30;
                                circleanim00.y=target.y;
                                circleanim00.smoothed = true;
                                var circleanim1=circleanim00.animations.add('anim31');
                                circleanim1.play(10,false);
                                   this.correctAns();
                                }
                               else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                                break;
        case "lastSaturday":if(extraparam=="lastSaturday")
                                {
                                    extraparam=null;
                                    var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                    circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+20;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                   this.correctAns();
                                }
                               else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                                break;
        case "lastFriday":if(extraparam=="lastFriday")
                                {
                                    extraparam=null;
                                    var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                    circleanimfirstAnim.alpha=1;
                                circleanimfirstAnim.x=target.x+20;
                                circleanimfirstAnim.y=target.y;
                                circleanimfirstAnim.smoothed = true;
                                var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                circleanim1firstAnim.play(10,false);
                                   this.correctAns();
                                }
                               else
                                    {
                                        target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                                    }
                                break;
        case "first2Days":
                            countboth++;
                            //target.inputEnabled=true;
                            if(countboth==2)
                                {
                                   if(correctflag==2)
                                   { 
                                       
                                       if(group=="sungrp")
                                        {
                                            var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
                                        }
                                       else
                                        {
                                            circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                        }
                                    
                                    circleanimfirstAnim.alpha=1;
                                    circleanimfirstAnim.x=target.x+20;
                                    circleanimfirstAnim.y=target.y;
                                    circleanimfirstAnim.smoothed = true;
                                    var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                    circleanim1firstAnim.play(10,false);
                                    this.correctAns();
                                    correctflag=0;
                                    countboth=0;
                                   
                                   }
                                    else
                                    {
                                        countboth--;
                                        target.inputEnabled=true;
                                       this.wmusic = this.add.audio('waudio');
		                              this.wmusic.play();
                                        shake.shake(10,target);
                                    }
                                }
                                
                            else if(countboth<2)
                                    {
                                        if(group=="sungrp")
                                        {
                                            circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
                                        }
                                        else
                                        {
                                            circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                        }
                                            
                                            
                                            circleanimfirstAnim.alpha=1;
                                            circleanimfirstAnim.x=target.x+20;
                                            circleanimfirstAnim.y=target.y;
                                            circleanimfirstAnim.smoothed = true;
                                            var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                            circleanim1firstAnim.play(10,false);
                                        if(correctflag==0)
                                        {
                                            circleanimfirstAnim.visible=false;
                                            countboth=0;
                                            target.inputEnabled=true;
                                            this.wmusic = this.add.audio('waudio');
		                                      this.wmusic.play();
                                            shake.shake(10,target);
                                        }
                                
                                    }
                               
                                break;
        case "last2Days":
                            countboth1++;
                            //target.inputEnabled=true;
                            if(countboth1==2)
                                {
                                    
                                   if(correctflag1==2)
                                   { 
                                       if(group=="sungrp")
                                        {
                                            var circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
                                        }
                                       else
                                        {
                                            circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                        }
                                    
                                    circleanimfirstAnim.alpha=1;
                                    circleanimfirstAnim.x=target.x+20;
                                    circleanimfirstAnim.y=target.y;
                                    circleanimfirstAnim.smoothed = true;
                                    var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                    circleanim1firstAnim.play(10,false);
                                        this.correctAns();
                                       correctflag1=0;
                                       countboth1=0;
                                   }
                                    else
                                    {
                                        countboth1--;
                                        target.inputEnabled=true;
                                        this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                        shake.shake(10,target);
                                    }
                                }
                            else if(countboth1<2)
                                    {
                                         if(group=="sungrp")
                                        {
                                            circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g2','Symbol 1 copy 15 instance 10000');
                                        }
                                        else
                                        {
                                            circleanimfirstAnim=this.add.sprite(100, 100, 'Level61_g3','Symbol 1 copy 14 instance 10000');
                                        }
                                            circleanimfirstAnim.alpha=1;
                                            circleanimfirstAnim.x=target.x+20;
                                            circleanimfirstAnim.y=target.y;
                                            circleanimfirstAnim.smoothed = true;
                                            var circleanim1firstAnim=circleanimfirstAnim.animations.add('anim31');
                                            circleanim1firstAnim.play(10,false);
                                        if(correctflag1==0)
                                        {
                                            circleanimfirstAnim.visible=false;
                                            countboth1=0;
                                            target.inputEnabled=true;
                                            this.wmusic = this.add.audio('waudio');
		                              this.wmusic.play();
                                        shake.shake(10,target);
                                        }
                                       
                                        
                                    }
                               
                                break;
                
        case "SelectMonth":if(target.name == "january"||target.name == "february"||target.name == "march"||target.name == "april"||target.name == "may"||target.name == "june"||target.name == "july"||target.name =="august"||target.name == "september"||target.name == "october"||target.name == "november"||target.name == "december")
                                {
                                     circleanim101.alpha=1;
                                    circleanim101.scale.setTo(0.9,1);
                                circleanim101.x=target.x-20;
                                circleanim101.y=target.y;
                                circleanim101.smoothed = true;
                                var circleanimx=circleanim101.animations.add('anim31');
                                circleanimx.play(10,false);
                                  this.correctAns();
                                }
                            else
                            {
                                target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                            }
                            break;
        case "selectYear":if(target.value=="111")
                                {
                                    circleanim201.alpha=1;
                                circleanim201.x=target.x-15;
                                circleanim201.y=target.y-2;
                                circleanim201.smoothed = true;
                                var circleanimy=circleanim201.animations.add('anim31');
                                circleanimy.play(10,false);
                                  this.correctAns();
                                }
                            else
                            {
                                target.inputEnabled=true;
                                this.wmusic = this.add.audio('waudio');
		                          this.wmusic.play();
                                shake.shake(10,target);
                            }
                            break;
                
       
                
        }
         
        
    },
    
    stopvoice:function(){
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
	
    getVoice:function(){
        this.stopvoice();
       //console.log("getVoice "+qArrays[no11]);
                                //voices[0]="last2Days";
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
         switch(voices[0])
         {
            case "Monday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EMonday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HMonday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KMonday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_6.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "Tuesday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/ETuesday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HTuesday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KTuesday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_7.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "Wednesday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EWednesday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HWednesday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KWednesday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_8.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "Thursday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EThursday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HThursday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KThursday.mp3");
                            }
							else 
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_10.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "Friday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EFriday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HFriday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KFriday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_11.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
           
            case "Sunday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/ESunday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HSunday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KSunday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_9.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            
            
            case "firstDay":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EfirstDay.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HfirstDay.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KfirstDay.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_4.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "lastDay":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/ElastDay.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HlastDay.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KlastDay.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_5.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "firstMonday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EfirstMonday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HfirstMonday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KfirstMonday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_12.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "firstTuesday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EfirstTuesday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HfirstTuesday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KfirstTuesday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_13.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "firstWednesday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EfirstWednesday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HfirstWednesday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KfirstWednesday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_14.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "lastSunday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/ElastSunday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HlastSunday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KlastSunday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_3.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "lastSaturday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/ElastSaturday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HlastSaturday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KlastSaturday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_10.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "lastFriday":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/ElastFriday.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HlastFriday.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KlastFriday.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_16.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "first2Days":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/Efirst2Days.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/Hfirst2Days.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/Kfirst2Days.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_17.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "last2Days":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/Elast2Days.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/Hlast2Days.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/Klast2Days.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_18.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "SelectMonth": if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/ESelectMonth.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HSelectMonth.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KSelectMonth.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_1.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
            case "selectYear":if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/EselectYear.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/HselectYear.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/KselectYear.mp3");
                            }
							else
                            {
                                _this.src.setAttribute("src", "questionSounds/6.1/6.1_2.mp3");
								_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
        }
         _this.playQuestionSound.appendChild(_this.src);
        this.playQuestionSound.play();
    },
    
    shutdown :function(){
        this.stopvoice();
    no22 = null;
    no11 = null;
    qArrays = null;
    circleanim00 = null;
    circleanimfirstAnim = null;
    anim11 = null;
    circleanim201 = null;
    countboth = null;
    countboth1 = null;
    count = null;
    count1 = null;
    _this.speakerbtn = null;
    firstmonarr = null;
    firsttuearr = null;
    firstwedarr = null;
    months = null;
    celebration = null;
    monthJan = null;
    flagGroup11 = null;
    backbg = null;
    voice = null;
    monday = null;
    val = null;
    anim1 = null;
    anim2 = null;
    framesChange = null;
    dayflag = null;
    days = null;
    voices = null;
    correctflag = null;
    correctflag1 = null;
        
    }
   
};        