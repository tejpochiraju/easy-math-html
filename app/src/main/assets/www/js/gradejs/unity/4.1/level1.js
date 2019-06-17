Game.unity14_1level1=function(){};
var group2;
var graphics1,graphics2,graphics3,graphicsa,graphicsb,graphicsc,graphicsgrid,graphicsgrid2;
var groupvertical,grouphorizontal,grouphorizontal2;
//var enterTxt;
var shakeGroup;
var count;
var horiznum,vertinum;
var deletesarr;
Game.unity14_1level1.prototype={
     init:function(game)
    {
        _this = this;
        telInitializer.gameIdInit("unity14_1",gradeSelected);
        
        _this.gameid = "14.1";
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.snapSound = _this.add.audio('snapSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');

    },
    
    create:function(game){
        _this.shake = new Phaser.Plugin.Shake(game);
         game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();
        _this.flag="question2";
        _this.wrongflag=0;
        _this.sceneCount=0;
        _this.amplify = null;
      /*  _this.verticallen=0;
        _this.nextline=0;
        _this.no1=0;
        _this.next=0;
        _this.first=0;
        _this.pos=0;
        _this.posh=0;
        _this.second=0;
        _this.counth1=0;
        _this.col=0;
        _this.row=0;
        _this.cols=0;
        _this.rowsh=0;
        _this.colsh=0;
        _this.rows=0;
        _this.third=0;
        _this.fourth=0;
        _this.fifth=0;
        _this.correctflag=0;
        _this.verticalcount=0;
        _this.horizontalcount=0;
        _this.greencubesets=0;
        _this.yellowgrids=0;
        _this.dragv=-1;
        _this.dragh=-1;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.qArrays = [1,2,3,4,5,6];
         // _this.qArrays = _this.shuffle( _this.qArrays);
        _this.randomarray = [11,12,13,14,15];
        _this.randomarray = _this.shuffle( _this.randomarray);
      
        _this.gridarray = new Array();
        _this.blankarray = new Array();
        _this.gridarraynew = new Array();
        _this.displgrid = new Array();
        _this.selectedarray = new Array();
        _this.countcorrect=0;
        _this.shake = new Phaser.Plugin.Shake(game);
         game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level14_background');
            _this.navBar = _this.add.sprite(0,0,'Level14_navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(300,5,'Level14_timebg');
             _this.topicOutline = _this.add.sprite(70,5,'Level14_topicOutline');
             _this.practice = _this.add.sprite(78,10,'Level14_practice');
             var numTxt2 = this.add.text(223,24, 'Multiplication');
            numTxt2.anchor.setTo(0.5);
            numTxt2.align = 'center';
            numTxt2.font = 'Alte Haas Grotesk';
            numTxt2.fontWeight = 'normal';
            numTxt2.fontSize = 20;
            numTxt2.fill = '#ffffff';
            numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        
        
             _this.timeDisplay = _this.add.text(325,20, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(5,5,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            
            _this.clickSound.play();
           // _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        _this.generateStarsForTheScene(6);
        //  _this.no1++;
        _this.getVoice();*/
      //   count=0;
        //_this.generateStarsForTheScene(6);
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.countcorrect=0;
        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level14_background');
            _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(300,6,'Level42B_timer');
             _this.timebg.scale.setTo(1.2,1);
            // _this.topicOutline = _this.add.sprite(70,5,'Level14_topicOutline');
             //_this.practice = _this.add.sprite(78,10,'Level14_practice');
             /*var numTxt2 = this.add.text(223,24, 'Multiplication');
            numTxt2.anchor.setTo(0.5);
            numTxt2.align = 'center';
            numTxt2.font = 'Alte Haas Grotesk';
            numTxt2.fontWeight = 'normal';
            numTxt2.fontSize = 20;
            numTxt2.fill = '#ffffff';
            numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
        
             _this.timeDisplay = _this.add.text(325,20, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            //_this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(5,5,'grade11_backbtn');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
      // _this.speakerbtn.inputEnabled = true;
        /*_this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);*/
        _this.no1=0;
        _this.generateStarsForTheScene(6);
        this.getVoice();
        _this.getQuestion();
        
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
    
    updateTimer:function() {
     _this.counterForTimer++;
    // ////console.log("lololil"+_this.counterForTimer);
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
    {  
        _this.verticallen=0;
        _this.nextline=0;
         deletesarr=new Array();
        _this.next=0;
        _this.first=0;
        _this.pos=0;
        _this.posh=0;
        _this.second=0;
        _this.counth1=0;
        _this.col=0;
        _this.row=0;
        _this.cols=0;
        _this.rowsh=0;
        _this.colsh=0;
        _this.rows=0;
        _this.third=0;
        _this.fourth=0;
        _this.fifth=0;
        _this.correctflag=0;
        _this.verticalcount=0;
        _this.horizontalcount=0;
        _this.greencubesets=0;
        _this.yellowgrids=0;
        _this.dragv=-1;
        _this.dragh=-1;
        _this.dragh2=-1;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.qArrays = [1,2,3,4,5,6];
        //  _this.qArrays = _this.shuffle( _this.qArrays);
        _this.randomarray = [11,12,13,14,15];
        _this.randomarray = _this.shuffle( _this.randomarray);
        _this.randomarray2 = [6,8,9];
       // _this.randomarray = _this.shuffle( _this.randomarray);
      
        _this.gridarray = new Array();
        _this.blankarray = new Array();
        _this.gridarraynew = new Array();
        _this.displgrid = new Array();
        _this.selectedarray = new Array();
       // _this.countcorrect=0;
        

           
        //  _this.no1++;
       // _this.getVoice();
        
        //console.log("get Question "+_this.no1);
       // _this.getVoice();
        this.sceneCount++;
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
        _this.speakerbtn.events.onInputDown.add(function(){
            this.clickSound.play();
            this.getVoice();
        },this);
        
        _this.questionid = 1;
        
        /*tick = this.add.sprite(38,513,'Level14_tickBtn');
        tick.name="Level14_tickBtn";
        tick.frameName='Symbol 14 copy instance 10000';
        tick.anchor.setTo(0.5);
        tick.scale.setTo(1,1);
        tick.inputEnabled=false;
        
        tick.events.onInputDown.removeAll();
        tick.events.onInputDown.add(function(){
            tick.frameName='Symbol 14 copy instance 10001';
            this.noofAttempts++;
            tick.inputEnabled=false;
            this.clickSound.play();
            //console.log("correctflag=="+_this.correctflag);
            if(_this.correctflag == 3){
                this.correctAns();
            }else{
                this.wrongAns();
            }
        },this);*/
        
        //grid = this.add.sprite(380,50,'Level14_grid');
        //grid.height-=30;
        
        _this.sidegrid = this.add.sprite(40,85,'Level14_sidegrid');
        _this.sidegrid.scale.setTo(1,0.90);
        
        for(var f=0;f<3;f++){
            _this.greencubeset = this.add.sprite(52,95,'Level14_greencubeset');
            
                _this.greencubeset.inputEnabled=true;
                _this.greencubeset.input.enableDrag(true);
                _this.greencubeset.name="greencubeset";
                _this.greencubeset.events.onDragStart.add(this.onDragStart, this);
                _this.greencubeset.events.onDragStop.add(this.onDragStop, this);
            
            
        }
        
       if(_this.no1==3 || _this.no1==4 || _this.no1==5){//if(_this.no1==3 || _this.no1==4 || _this.no1==5){
           _this.gridarea = this.add.sprite(235,105,'Level14_gridarea');
        _this.gridarea.scale.setTo(0.95,0.95);
           graphicsgrid = this.add.graphics(294,155);
        graphicsgrid.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsgrid.beginFill(0xFF700B, 1);
        graphicsgrid.drawRect(0,0,100,120);     //0,0,55,55
        graphicsgrid.boundsPadding = 0;
        graphicsgrid.alpha=0;
        graphicsgrid.name="graphicsgrid";
       }
        
        
        
        
        
        
        this.addNumberPad();
        switch(this.qArrays[_this.no1]){
            case 1 : 
            case 2 : 
            case 3 : this.gotoquestion2();
                     break;
            case 4 : 
            case 5 : 
            case 6 : this.gotoquestion1();
                     break;
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
    
    gotoquestion1:function(){
        
        _this.flag="question1";
        _this.no1++;
        _this.first++;
        
        _this.firstno = _this.randomarray[0];
        if(_this.firstno == 11){
            _this.firstno = 12;
        }
        //console.log("_this.firstno=="+_this.firstno);
        _this.randomarray = _this.shuffle(_this.randomarray);
        _this.secondno = _this.randomarray[0];
        
        if(_this.no1 == 4){
            _this.firstno = 13;
            _this.secondno = 11;
        }
        else if(_this.no1 == 5){
            _this.firstno = 14;
            _this.secondno = 12;
        }
        else if(_this.no1 == 6){
            _this.firstno = 15;
            _this.secondno = 13;
        }
        
        _this.gridh1 = this.add.sprite(233,80,'Level14_gridh');
        _this.gridh1.scale.setTo(1.7,1.7);
        
        
        
        
        _this.gridv1 = this.add.sprite(210,105,'Level14_gridv');
        _this.gridv1.scale.setTo(1.7,1.65);
        
        _this.rightans = _this.firstno * _this.secondno;
        
        //console.log("_this.secondno=="+_this.secondno);
        _this.addyellowh =(_this.firstno - 10);
        _this.addyellowv = (_this.secondno - 10);
        _this.multiplyans = _this.firstno * _this.secondno;
        _this.remainder = _this.multiplyans - 100;
        //console.log("remainder=="+_this.remainder);
        horiznum = this.add.text(700,93,_this.firstno);
        horiznum.fill = '#65B4C3';
        horiznum.font = "myfont";
        horiznum.fontSize = 35;
        horiznum.fontWeight="normal";
        
        
        vertinum = this.add.text(780,93,_this.secondno);
        vertinum.fill = '#65B4C3';
        vertinum.font = "myfont";
        vertinum.fontSize = 35;
        vertinum.fontWeight="normal";
        
        groupvertical = this.add.group();
        grouphorizontal = this.add.group();
        for(var yellowh=0;yellowh<_this.addyellowh;yellowh++){
            _this.Level14_gridjointvadd = this.add.sprite(464+(yellowh*23),105,'Level14_gridjointv');//440
            _this.Level14_gridjointvadd.scale.setTo(0.95,0.95);
            _this.yellowgrid1 = this.add.sprite(470+(yellowh*23),80,'Level14_yellowgrid');
            _this.yellowgrid1.scale.setTo(1.3,1.3); 
            graphicsvertical = this.add.graphics(0,0);
            graphicsvertical.x = 464+(yellowh*23);
            graphicsvertical.y = 107;
            graphicsvertical.lineStyle(1, 0xFFFFFF, 0.8);
            graphicsvertical.beginFill(0xFF700B, 1);
            graphicsvertical.drawRect(0,0,20,220);      //0,0,55,55
            graphicsvertical.boundsPadding = 0;
            graphicsvertical.alpha=0;
            graphicsvertical.name="graphicsvertical";

            groupvertical.add(graphicsvertical);
            
        }
        for(var yellowv=0;yellowv<_this.addyellowv;yellowv++){
            _this.Level14_gridjointhadd = this.add.sprite(235,346+(yellowv*24),'Level14_gridjointh');//234,321+(yellowv*20)
            _this.Level14_gridjointhadd.scale.setTo(0.95,0.95);
            _this.yellowgrid2 = this.add.sprite(210,352+(yellowv*24),'Level14_yellowgrid');
            _this.yellowgrid2.scale.setTo(1.30,1.30);
            graphicshorizontal = this.add.graphics(0,0);
            graphicshorizontal.x = 210;
            graphicshorizontal.y = 346+(yellowv*24);
            graphicshorizontal.lineStyle(1, 0xFFFFFF, 0.8);
            graphicshorizontal.beginFill(0xFF700B, 1);
            graphicshorizontal.drawRect(0,0,220,22);        //0,0,55,55
            graphicshorizontal.boundsPadding = 0;
            graphicshorizontal.alpha=0;
            graphicshorizontal.name="graphicshorizontal";

            grouphorizontal.add(graphicshorizontal);
        }
        for(var l=0;l<_this.addyellowv;l++){
            for(var m=0;m<_this.addyellowh;m++){
                _this.singlegrid=this.add.sprite(464+(m*23),346+(l*24),'Level14_singlegrid');
                _this.singlegrid.scale.setTo(0.95,0.95);
            }
        }
        for(var b=0;b<=_this.addyellowh;b++){
            _this.gridv = this.add.sprite(118,275,'Level14_gridv');
            _this.gridv.name="vertical";
            _this.gridv.inputEnabled=true;
            _this.gridv.input.enableDrag(true);
            _this.gridv.events.onDragStart.add(this.onDragStart, this);
            _this.gridv.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var b2=0;b2<=_this.addyellowv;b2++){
            _this.gridh = this.add.sprite(52,250,'Level14_gridh');
            _this.gridh.name="horizontal";
            _this.gridh.inputEnabled=true;
            _this.gridh.input.enableDrag(true);
            _this.gridh.events.onDragStart.add(this.onDragStart, this);
            _this.gridh.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var rem=0;rem<(_this.remainder+3);rem++){
            _this.yellowgrid = this.add.sprite(115,435,'Level14_yellowgrid');
            _this.yellowgrid.scale.setTo(1.15,1.15);
            _this.yellowgrid.name="yellowgrid";
            _this.yellowgrid.inputEnabled=true;
            _this.yellowgrid.input.enableDrag(true);
            _this.yellowgrid.events.onDragStart.add(this.onDragStart, this);
            _this.yellowgrid.events.onDragStop.add(this.onDragStop, this);
        }

    },
    
    gotoquestion2:function(){
        
        _this.flag="question2";
        //console.log("hai");
        _this.no1++;
        _this.first++;
        
        
        
        
        _this.firstno = _this.randomarray[0];
        
        //console.log("_this.firstno=="+_this.firstno);
        _this.randomarray = _this.shuffle(_this.randomarray);
        if(_this.no1==1){
            _this.firstno = 11;
            _this.secondno =_this.randomarray2[0];
        }
        else if(_this.no1==2){
            _this.firstno = 12;
            _this.secondno =_this.randomarray2[1];
        }
        else if(_this.no1==3){
            _this.firstno = 13;
            _this.secondno =_this.randomarray2[2];
        }
        
    //    _this.gridarea = this.add.sprite(234,105,'Level14_gridarea');
    //    _this.gridarea.scale.setTo(0.85,0.85);
        
        _this.gridh1 = this.add.sprite(233,80,'Level14_gridh');
        _this.gridh1.scale.setTo(1.7,1.7);
        
        
        
        for(var rl=0;rl<_this.secondno;rl++){
            for(var cl=0;cl<10;cl++){
                _this.singlegrid=this.add.sprite(235+(cl*23),107+(rl*24),'Level14_singlegrid');//234+(cl*20),105+(rl*20)
                _this.singlegrid.scale.setTo(0.97,0.97);//0.85,0.85
            }
        }
        
        
        
        
        _this.rightans = _this.firstno * _this.secondno;
        
        //console.log("_this.secondno=="+_this.secondno);
        _this.addyellowh =(_this.firstno - 10);
        _this.addyellowv = _this.secondno;
        _this.multiplyans = _this.firstno * _this.secondno;
        _this.remainder = _this.multiplyans;
        //console.log("remainder=="+_this.remainder);
        horiznum = this.add.text(700,90,_this.firstno);
        horiznum.fill = '#65B4C3';
        horiznum.font = "myfont";
        horiznum.fontSize = 40;
        horiznum.fontWeight="normal";
        
        
        vertinum = this.add.text(780,90,_this.secondno);
        vertinum.fill = '#65B4C3';
        vertinum.font = "myfont";
        vertinum.fontSize = 40;
        vertinum.fontWeight="normal";
        
        groupvertical = this.add.group();
        grouphorizontal2 = this.add.group();
        
        for(var yellowcols=0;yellowcols<_this.addyellowv;yellowcols++){
            _this.gridv1 = this.add.sprite(210,107+(yellowcols*24),'Level14_bluegrid');
            deletesarr.push(_this.gridv1);
            _this.gridv1.width-=1;
            _this.gridv1.height-=1;
           // _this.gridv1.scale.setTo(1.7,1.7);
        }
        
        for(var yellowrow=0;yellowrow<_this.addyellowv;yellowrow++){
        for(var yellowh=0;yellowh<_this.addyellowh;yellowh++){//_this.addyellowh
           // _this.Level14_gridjointvadd = this.add.sprite(440+(yellowh*20),105,'Level14_gridjointv');
           // _this.Level14_gridjointvadd.scale.setTo(0.85,0.85);
            
                _this.singlegrid=this.add.sprite(465+(yellowh*23),107+(yellowrow*24),'Level14_singlegrid');//434+(yellowh*20)
                _this.singlegrid.scale.setTo(0.97,0.97);//0.85,0.85
                
        
            _this.yellowgrid1 = this.add.sprite(470+(yellowh*23),80,'Level14_yellowgrid');//443+(yellowh*20)
            _this.yellowgrid1.scale.setTo(1.3,1.3);//1.1,1.1 
            
        }
            graphicshorizontal = this.add.graphics(0,0);
            graphicshorizontal.x = 240;
            graphicshorizontal.y = 109+(yellowrow*24);
            graphicshorizontal.lineStyle(1, 0xFFFFFF, 0.8);
            graphicshorizontal.beginFill(0xFF700B, 1);
            graphicshorizontal.drawRect(0,0,220,22);        //0,0,55,55
            graphicshorizontal.boundsPadding = 0;
            graphicshorizontal.alpha=0;
            graphicshorizontal.name="graphicshorizontal";

            grouphorizontal2.add(graphicshorizontal);
        }
        
        /*graphicsgrid2 = this.add.graphics(264,115);
        graphicsgrid2.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsgrid2.beginFill(0xFF700B, 1);
        graphicsgrid2.drawRect(0,0,90,90);      //0,0,55,55
        graphicsgrid2.boundsPadding = 0;
        graphicsgrid2.alpha=1;
        graphicsgrid2.name="graphicsgrid";*/
        /*for(var yellowv=0;yellowv<_this.addyellowv;yellowv++){
            _this.Level14_gridjointhadd = this.add.sprite(234,321+(yellowv*20),'Level14_gridjointh');
            _this.Level14_gridjointhadd.scale.setTo(0.85,0.85);
            _this.yellowgrid2 = this.add.sprite(210,327+(yellowv*20),'Level14_yellowgrid');
            _this.yellowgrid2.scale.setTo(1.15,1.15);
            graphicshorizontal = this.add.graphics(0,0);
            graphicshorizontal.x = 210;
            graphicshorizontal.y = 320+(yellowv*20);
            graphicshorizontal.lineStyle(1, 0xFFFFFF, 0.8);
            graphicshorizontal.beginFill(0xFF700B, 1);
            graphicshorizontal.drawRect(0,0,220,22);        //0,0,55,55
            graphicshorizontal.boundsPadding = 0;
            graphicshorizontal.alpha=0;
            graphicshorizontal.name="graphicshorizontal";

            grouphorizontal.add(graphicshorizontal);
        }*/
        /*for(var l=0;l<_this.addyellowv;l++){
            for(var m=0;m<_this.addyellowh;m++){
                _this.singlegrid=this.add.sprite(440+(m*20),321+(l*20),'Level14_singlegrid');
                _this.singlegrid.scale.setTo(0.85,0.85);
            }
        }*/
        for(var b=0;b<=_this.addyellowh;b++){
            _this.gridv = this.add.sprite(118,275,'Level14_gridv');
            _this.gridv.name="vertical";
            _this.gridv.inputEnabled=true;
            _this.gridv.input.enableDrag(true);
            _this.gridv.events.onDragStart.add(this.onDragStart, this);
            _this.gridv.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var b2=0;b2<=_this.addyellowv;b2++){
            _this.gridh = this.add.sprite(52,250,'Level14_gridh');
            _this.gridh.name="horizontal";
            _this.gridh.inputEnabled=true;
            _this.gridh.input.enableDrag(true);
            _this.gridh.events.onDragStart.add(this.onDragStart, this);
            _this.gridh.events.onDragStop.add(this.onDragStop, this);
        }
        
        for(var rem=0;rem<(_this.remainder);rem++){
            _this.yellowgrid = this.add.sprite(115,435,'Level14_yellowgrid');
            _this.yellowgrid.scale.setTo(1.15,1.15);
            _this.yellowgrid.name="yellowgrid";
            _this.yellowgrid.inputEnabled=true;
            _this.yellowgrid.input.enableDrag(true);
            _this.yellowgrid.events.onDragStart.add(this.onDragStart, this);
            _this.yellowgrid.events.onDragStop.add(this.onDragStop, this);
        }
    },
    getVoice:function(){
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", "questionSounds/14.1/English/Game 14.1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", "questionSounds/14.1/Hindi/Game 14.1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", "questionSounds/14.1/Kannada/Game 14.1.mp3");
        }else{
            _this.src.setAttribute("src", "questionSounds/14.1/Odiya/14.1.mp3");
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
            
            if(_this.amplify!=null)
            {
                _this.amplify.context.close();
                _this.amplify = null;
            }
        }

            
    },
    
    
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    fetchrandom: function(array){
         var count=0;
         ////console.log(array);
         for (var i=0;i<array.length;i++){
            
             if(array[i]!=0)
             {
                     count++;
                     _this.selectedarray.push(array[i]); 
                     if(count == 1){
                          return _this.selectedarray;
                     }
             } 
         }    
         
     },
    
    correctAns:function(){
        //console.log("correct");
       // _this.correctflag=0;
        
        _this.wrongflag=0;
        _this.cmusic.play();
        
        if(_this.timer1!=null)
        {
            _this.timer1.stop();
            _this.timer1 = null;
        }
        
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
        var starAnim = _this.starsGroup.getChildAt(_this.countcorrect);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();
        _this.countcorrect++;
        
        
        /*for(var rl=0;rl<_this.secondno;rl++){
            for(var cl=0;cl<10;cl++){
                _this.singlegrid.destroy();
            }
        }
        for(var yellowrow=0;yellowrow<_this.addyellowv;yellowrow++){
        for(var yellowh=0;yellowh<_this.addyellowh;yellowh++){//_this.addyellowh
           // _this.Level14_gridjointvadd = this.add.sprite(440+(yellowh*20),105,'Level14_gridjointv');
           // _this.Level14_gridjointvadd.scale.setTo(0.85,0.85);
            
                _this.singlegrid.destroy();
                
        
            _this.yellowgrid1.destroy();
            
        }
        }*/
        //_this.greencubeset.destroy();
       /* graphicsvertical.destroy();
        graphicshorizontal.destroy();
        graphicsgrid.destroy();
        
        for(var yellowh=0;yellowh<(_this.firstno-10);yellowh++){
            _this.Level14_gridjointvadd.destroy();
        }
        for(var yellowv=0;yellowv<(_this.secondno-10);yellowv++){
            _this.Level14_gridjointhadd.destroy();
        }
        
        _this.yellowgrid.destroy();
        _this.yellowgrid1.destroy();
        _this.yellowgrid2.destroy();
        for(var l=0;l<(_this.secondno-10);l++){
            for(var m=0;m<(_this.firstno-10);m++){
                _this.singlegrid.destroy();
            }
        }
        grouphorizontal.destroy();
        groupvertical.destroy();
        _this.verticalcount=0;
        _this.horizontalcount=0;
        _this.addyellowh=0;
        _this.addyellowv=0;
        _this.addyellowh2=0;
        _this.addyellowv2=0;
        _this.gridarea.destroy();
        _this.gridh.destroy();
        _this.gridh1.destroy();
        _this.gridv.destroy();
        _this.gridv1.destroy();
        _this.firstno=0;
        _this.secondno=0;
        _this.multiplyans=0;*/
       
            
       
        
        this.time.events.add(2000,function(){
            
           tick.frameName='Symbol 14 copy instance 10000';
           tick.events.onInputDown.removeAll();
           if(_this.no1<6)
            {
                if(_this.no1<4){
                    for(var lt=0;lt<_this.secondno;lt++){
                        deletesarr[lt].destroy();
                        
                    }
                }
                
                //this.time.events.add(500,function(){
                    
                    shakeGroup.destroy();
                    this.getQuestion();
                //},this);
                
            }
                else{
                _this.no1=0;
                this.stopVoice();   
                this.state.start('unity14_1Score'); 
            }
        },this);
    },
    
    wrongAns:function(){
        //console.log("wrong");
        _this.wrongflag++;
        _this.wmusic.play();
         
        shakeGroup.add(horiznum);
        shakeGroup.add(vertinum);
        shakeGroup.x =this.world.centerX+350;
        shakeGroup.y = this.world.centerY;
        shakeGroup.pivot.setTo(this.world.centerX+350,this.world.centerY);
        var tween = _this.add.tween(shakeGroup);
            tween.to({ angle: -10 }, 100, 'Linear', true, 0);
            tween.onComplete.add(function(){
            var tween1 = _this.add.tween(shakeGroup);
            tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
            tween1.onComplete.add(function(){
                var tween2 = _this.add.tween(shakeGroup);
                tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                tween2.onComplete.add(function(){
                    var tween3 = _this.add.tween(shakeGroup);
                    tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                    tween3.onComplete.add(function(){
                        shakeGroup.angle = 0;
                        shakeGroup.x = this.world.centerX-350;
                        shakeGroup.y = this.world.centerY;
                        shakeGroup.pivot.setTo(this.world.centerX-350,this.world.centerY);
                    }, _this);
                  }, _this);
                }, _this);
            }, _this);
    },
    
   addNumberPad:function(){
    
       pressed=0;
       dragged=false;
        
        shakeGroup=this.add.group();
        var boxbg = this.add.sprite(800,290,'Level14_calcibg');
        boxbg.name="Level14_calcibg";
        boxbg.anchor.setTo(0.5);
        boxbg.scale.setTo(0.65,0.65);
       
        var WhiteBox=this.add.sprite(800,120,'Level14_WhiteBox');
        WhiteBox.name="Level14_WhiteBox";
        WhiteBox.anchor.setTo(0.5);
        WhiteBox.scale.setTo(0.60,0.60);
        
       var equalSymbol=this.add.sprite(812,95,'Level14_equal');
       equalSymbol.name="Level14_equal";
       equalSymbol.scale.setTo(0.7,0.7);
       
       
       var multisymbol = this.add.sprite(742,95,'Level14_multiplication');
        multisymbol.scale.setTo(0.60,0.60);

        txtbox = this.add.sprite(880,120,'Level14_box','Symbol 30 copy instance 10000');
        txtbox.height-=10;
        txtbox.anchor.setTo(0.5);
        txtbox.name = "txtbox";
        
        enterTxt = this.add.text(-2,-2, selectedAns="");
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 40;
        enterTxt.fontWeight="normal";
            //text.fontWeight = 'bold';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
       
        var calNum1=this.add.sprite(718,205,'Level14_calNum');
        calNum1.name="Level14_calNum1";
        calNum1.anchor.setTo(0.5);
        calNum1.scale.setTo(0.73,0.73);
        calNum1.frame=1;
        calNum1.inputEnabled=true;
        calNum1.input.useHandCursor = true;
        calNum1.events.onInputDown.add(function(){
                _this.clickSound.play();
                txtbox.frame=1;
                //this.Tap.play();
               if(selectedAns.length<3){
                    selectedAns += calNum1.frame;
                    enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum2=this.add.sprite(801,205,'Level14_calNum');
        calNum2.name="Level14_calNum2";
        calNum2.anchor.setTo(0.5);
        calNum2.scale.setTo(0.73,0.73);
        calNum2.frame=2;
        calNum2.inputEnabled=true;
        calNum2.input.useHandCursor = true;
        calNum2.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
                selectedAns += calNum2.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum3=this.add.sprite(884,205,'Level14_calNum');
        calNum3.name="Level14_calNum3";
        calNum3.anchor.setTo(0.5);
        calNum3.scale.setTo(0.73,0.73);
        calNum3.frame=3;
        calNum3.inputEnabled=true;
        calNum3.input.useHandCursor = true;
        calNum3.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
            if(selectedAns.length<3){
                selectedAns += calNum3.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum4=this.add.sprite(718,285,'Level14_calNum');
        calNum4.name="Level14_calNum4";
        calNum4.anchor.setTo(0.5);
        calNum4.scale.setTo(0.73,0.73);
        calNum4.frame=4;
        calNum4.inputEnabled=true;
        calNum4.input.useHandCursor = true;
        calNum4.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
                selectedAns += calNum4.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum5=this.add.sprite(801,285,'Level14_calNum');
        calNum5.name="Level14_calNum5";
        calNum5.anchor.setTo(0.5);
        calNum5.scale.setTo(0.73,0.73);
        calNum5.frame=5;
        calNum5.inputEnabled=true;
        calNum5.input.useHandCursor = true;
        calNum5.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
                selectedAns += calNum5.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum6=this.add.sprite(884,285,'Level14_calNum');
        calNum6.name="Level14_calNum6";
        calNum6.anchor.setTo(0.5);
        calNum6.scale.setTo(0.73,0.73);
        calNum6.frame=6;
        calNum6.inputEnabled=true;
        calNum6.input.useHandCursor = true;
        calNum6.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
                selectedAns += calNum6.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum7=this.add.sprite(718,365,'Level14_calNum');
        calNum7.name="Level14_calNum7";
        calNum7.anchor.setTo(0.5);
        calNum7.scale.setTo(0.73,0.73);
        calNum7.frame=7;
        calNum7.inputEnabled=true;
        calNum7.input.useHandCursor = true;
        calNum7.events.onInputDown.add(function(){
            _this.clickSound.play();
           txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
                selectedAns += calNum7.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum8=this.add.sprite(801,365,'Level14_calNum');
        calNum8.name="Level14_calNum8";
        calNum8.anchor.setTo(0.5);
        calNum8.scale.setTo(0.73,0.73);
        calNum8.frame=8;
        calNum8.inputEnabled=true;
        calNum8.input.useHandCursor = true;
        calNum8.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
                selectedAns += calNum8.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum9=this.add.sprite(884,365,'Level14_calNum');
        calNum9.name="Level14_calNum9";
        calNum9.anchor.setTo(0.5);
        calNum9.scale.setTo(0.73,0.73);
        calNum9.frame=9;
        calNum9.inputEnabled=true;
        calNum9.input.useHandCursor = true;
        calNum9.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
                selectedAns += calNum9.frame;
                enterTxt.setText(selectedAns);
           }
        },this);
       
        var calNum0=this.add.sprite(718,445,'Level14_calNum');
        calNum0.name="Level14_calNum10";
        calNum0.anchor.setTo(0.5);
        calNum0.scale.setTo(0.73,0.73);
        calNum0.frame=0;
        calNum0.inputEnabled=true;
        calNum0.input.useHandCursor = true;
        calNum0.events.onInputDown.add(function(){
            _this.clickSound.play();
            txtbox.frame=1;
            //this.Tap.play();
           if(selectedAns.length<3){
               selectedAns += calNum0.frame;
               enterTxt.setText(selectedAns);
           }
                
        },this);
       
       //console.log("pressed=="+pressed);

            

       
            
            tick=this.add.sprite(885,445,'Level14_tickBtn');
        tick.name="Level14_rightBtn";
            tick.anchor.setTo(0.5);
            tick.scale.setTo(1.35,1.40);//0.66,0.66);
            tick.frame=0;
            tick.inputEnabled=true;
            tick.input.useHandCursor = true;
            tick.events.onInputDown.add(function(){
                this.noofAttempts++;
                _this.clickSound.play();
                 //tick.inputEnabled=false;
                 //console.log("selected ans=="+selectedAns);
                if(_this.rightans == selectedAns){
                    this.correctAns();
                }else{
                    //console.log("wwwwwwwwwwwwwww");
                    selectedAns="";
                    enterTxt.setText(selectedAns);
                    
                    this.wrongAns();
                }
                
            
                
                
                
                tick.frame=1;
                this.time.events.add(500, function(){
                    tick.frame=0;
                    
                    
                    
                    
            },this);
            },this);
       
            eraser=this.add.sprite(805,445,'Level14_eraser');
        eraser.name="Level14_eraser";
            eraser.anchor.setTo(0.5);
            eraser.scale.setTo(1.35,1.40);//0.66,0.66);
            eraser.frame=0;
            eraser.inputEnabled=true;
            eraser.input.useHandCursor = true;
            eraser.events.onInputDown.add(function(){
                _this.clickSound.play();
                selectedAns = "";
                enterTxt.setText(selectedAns);
              //  this.Tap.play();
                eraser.frame=1;
                this.time.events.add(500, function(){
                eraser.frame=0;
                },this);
                txtbox.frame=0;
                    
            },this);
        
     //   //console.log("txt frame=="+txtbox.frame);
        
        
       
       
       shakeGroup.add(boxbg);
       shakeGroup.add(WhiteBox);
       shakeGroup.add(multisymbol);
       shakeGroup.add(equalSymbol);
       shakeGroup.add(txtbox);
       shakeGroup.add(calNum1);
       shakeGroup.add(calNum2);
       shakeGroup.add(calNum3);
       shakeGroup.add(calNum4);
       shakeGroup.add(calNum5);
       shakeGroup.add(calNum6);
       shakeGroup.add(calNum7);
       shakeGroup.add(calNum8);
       shakeGroup.add(calNum9);
       shakeGroup.add(calNum0);
       shakeGroup.add(tick);
       shakeGroup.add(eraser);
       shakeGroup.visible=true;
        
   },
    
    onDragStart:function(target){
        _this.clickSound.play();
        //console.log("startdrag"+target.name);
        target.bringToTop(_this.gridarea);
        
    },
    
    onDragStop:function(target){//_this.Level14_gridjointvadd  groupvertical
        _this.snapSound.play();
        if(_this.flag=="question1"){
            if(this.checkOverlap(target,graphicsgrid)){
            //console.log("overlapeed");
            if(target.name == "greencubeset"){
                target.inputEnabled=false;
                _this.greencubesets++;
                if(_this.greencubesets == 1){
                    //console.log("in eeee");
                    target.x=235;//_this.gridarea.x;
                    target.y=105;//_this.gridarea.y;
                    target.scale.setTo(1.67,1.65);
                }else{
                    //_this.wmusic.play();
                    target.x=52;
                    target.y=95;
                }
            }
        }else{
           // _this.wmusic.play();
            target.x=52;
            target.y=95;
        } 
        }
        if(_this.flag=="question2" && target.name == "greencubeset"){
            target.x=52;
            target.y=95;
            _this.wmusic.play();
        }
        
        if(_this.flag=="question2" && target.name == "vertical"){
            target.x=118;
            target.y=275;
            _this.wmusic.play();
        }
        if(target.name=="vertical" && _this.flag=="question1"){
           // //console.log("vertical len=="+_this.verticalcount);
             if(_this.dragv == -1){
                    //console.log("no drag found");
                    target.x=118;
                    target.y=275;
                 _this.wmusic.play();
                }
           
            //console.log("group vertical length=="+groupvertical.length);
            
            if(this.checkOverlap(target,groupvertical.getChildAt(0)) ){
                
                _this.dragv++;
                
            }
            else if(this.checkOverlap(target,groupvertical.getChildAt(1)) ){
               
                _this.dragv++;
                
            }
            else if(this.checkOverlap(target,groupvertical.getChildAt(2)) ){
                
                _this.dragv++;
                
            }
            else if(this.checkOverlap(target,groupvertical.getChildAt(3)) ){
                
                _this.dragv++;
                
            }
            else if(this.checkOverlap(target,groupvertical.getChildAt(4)) ){
                
                _this.dragv++;
                
            }else{
                //console.log("i am no where");
                target.x=118;
                target.y=275;
                _this.wmusic.play();
            }
            




















































































             //console.log("drag here=========================="+_this.dragv);
            
            if(_this.dragv==0 && _this.dragv < _this.addyellowh){
                target.scale.setTo(1.67,1.65);
                    target.y = 106;
                    target.x=466;
                _this.verticalcount=target.x;
                _this.verticallen++;
                }else if(_this.dragv==1 && _this.dragv < _this.addyellowh){
                    target.scale.setTo(1.67,1.65);
                    target.y = 106;
                    target.x=490;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==2 && _this.dragv < _this.addyellowh){
                    target.scale.setTo(1.67,1.65);
                    target.y = 106;
                    target.x=514;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==3 && _this.dragv < _this.addyellowh){
                    target.scale.setTo(1.67,1.65);
                    target.y = 106;
                    target.x=538;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv==4 && _this.dragv < _this.addyellowh){
                    target.scale.setTo(1.67,1.65);
                    target.y = 106;
                    target.x=562;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                }else if(_this.dragv >= _this.addyellowh){
                    target.x=118;
                    target.y=275;
                    _this.verticalcount=target.x;
                    _this.verticallen++;
                    _this.wmusic.play();
                }
            
            
            target.inputEnabled=false;
           /* for(var g=0;g<groupvertical.length;g++){
                  
                //console.log("no whwrw if");
                if(this.checkOverlap(target,groupvertical.getChildAt(g))){
                    _this.dragv++;
                    ////console.log("vertical len=="+_this.verticallen);
                    //console.log("overlappped vertical"+groupvertical.getChildAt(g).name);
                        //console.log("matched vertical");
                        //
                        //console.log("in hgere"+(_this.addyellowh));
                        if(_this.dragv < _this.addyellowh){
                            
                            target.scale.setTo(1.47,1.48);
                            //console.log("drag flag=="+_this.dragv);
                           /* target.y = 105;
                            target.x=440+(_this.dragv * 20);*/
          /*                  if(_this.dragv==0 && g==0){
                                target.y = 105;
                                target.x=440;
                            }else if(_this.dragv==1){
                                target.y = 105;
                                target.x=460;
                            }else if(_this.dragv==2){
                                target.y = 105;
                                target.x=480;
                            }else if(_this.dragv==3){
                                target.y = 105;
                                target.x=500;
                            }if(_this.dragv==4){
                                target.y = 105;
                                target.x=520;
                            }
                            _this.verticalcount=target.x;
                             
                            
                            //console.log("vertical len=="+_this.verticallen);
                            //console.log("target x=="+target.x);
                            //console.log("target y=="+target.y);
                            target.inputEnabled=false;
                            
                        }else{
                            target.x=118;
                                target.y=275;
                        }
                     
                    _this.verticallen++;
                    
                }else if(_this.dragv == -1){
                    //console.log("return back");
                    target.x=118;
                                target.y=275;
                }else if(_this.dragv == (_this.addyellowh-1)){
                    //console.log("return back again");
                    target.x=118;
                                target.y=275;
                }
                //if(_this.dragv == -1)
            } */
            
            //console.log("draaaaaaaaaaaag vvvvvvvvvvv=="+_this.dragv);
            
            
          }else if(target.name=="horizontal" && _this.flag=="question1"){
              
              if(_this.dragh == -1){
                    //console.log("no drag found");
                    target.x=52;
                    target.y=250;
                }
           
            //console.log("group vertical length=="+grouphorizontal.length);
            
            if(this.checkOverlap(target,grouphorizontal.getChildAt(0)) ){
                
                _this.dragh++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal.getChildAt(1)) ){
               
                _this.dragh++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal.getChildAt(2)) ){
                
                _this.dragh++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal.getChildAt(3)) ){
                
                _this.dragh++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal.getChildAt(4)) ){
                
                _this.dragh++;
                
            }else{
                //console.log("i am no where");
                target.x=52;
                target.y=250;
                _this.wmusic.play();
            }














            
             //console.log("drag here=========================="+_this.dragv);
            
            if(_this.dragh==0 && _this.dragh < _this.addyellowv){              ///////240 105
                target.scale.setTo(1.67,1.73);
                    target.y = 346;//321
                    target.x=235;
                _this.horizontalcount=target.y;
                }else if(_this.dragh==1 && _this.dragh < _this.addyellowv){
                    target.scale.setTo(1.67,1.73);
                    target.y = 370;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh==2 && _this.dragh < _this.addyellowv){
                    target.scale.setTo(1.67,1.73);
                    target.y = 394;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh==3 && _this.dragh < _this.addyellowv){
                    target.scale.setTo(1.67,1.73);
                    target.y = 418;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh==4 && _this.dragh < _this.addyellowv){
                    target.scale.setTo(1.67,1.73);
                    target.y = 442;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh >= _this.addyellowv){
                    target.x=52;
                    target.y=250;
                    _this.wmusic.play();
                }
            
            
            target.inputEnabled=false;
             /* _this.dragh++;
              for(var g=0;g<grouphorizontal.length;g++){
                if(this.checkOverlap(target,grouphorizontal.getChildAt(g))){
                    //console.log("overlappped horizontal");
                        //console.log("matched horizontal");
                       // //console.log("in hgere"+_this.verticalcount);
                        //console.log("in hgere"+(_this.addyellowv));
                        if(_this.dragh < _this.addyellowv){
                            target.scale.setTo(1.47,1.48);
                            //console.log("drag flag=="+_this.dragh);
                            target.x = 234;
                            target.y = 321+(_this.dragh*20);
                            _this.horizontalcount=target.y;
                            //console.log("target x=="+target.x);
                            //console.log("target y=="+target.y);
                            target.inputEnabled=false;
                            //_this.verticalcount++;
                        }else{
                            target.x=52;
                                target.y=250;
                        }
                    
                }
            } */
          }else if(target.name=="horizontal" && _this.flag=="question2"){
              
              if(_this.dragh2 == -1){
                    //console.log("no drag found");
                    target.x=52;
                    target.y=250;
                }
           
            //console.log("group vertical length=="+grouphorizontal2.length);
            
            if(this.checkOverlap(target,grouphorizontal2.getChildAt(0)) ){
                
                _this.dragh2++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(1)) ){
               
                _this.dragh2++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(2)) ){
                
                _this.dragh2++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(3)) ){
                
                _this.dragh2++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(4)) ){
                
                _this.dragh2++;
                
            }
            else if(this.checkOverlap(target,grouphorizontal2.getChildAt(5)) ){
                
                _this.dragh2++;
                
            }else if(this.checkOverlap(target,grouphorizontal2.getChildAt(6)) ){
                
                _this.dragh2++;
                
            }else if(this.checkOverlap(target,grouphorizontal2.getChildAt(7)) ){
                
                _this.dragh2++;
                
            }else if(this.checkOverlap(target,grouphorizontal2.getChildAt(8)) ){
                
                _this.dragh2++;
                
            }else{
                //console.log("i am no where");
                target.x=52;
                target.y=250;
                _this.wmusic.play();
            }
            
             //console.log("drag here=========================="+_this.dragh2);
            //console.log("yellowrow===="+_this.secondno);
            if(_this.dragh2==0 && _this.dragh2 < _this.secondno){              ///////240 105
                target.scale.setTo(1.67,1.73);
                    target.y = 107;
                    target.x=235;
                _this.horizontalcount=target.y;
                }else if(_this.dragh2==1 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 131;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==2 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 155;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==3 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 179;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==4 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 203;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==5 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 227;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==6 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 251;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==7 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 275;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==8 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 299;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2==9 && _this.dragh2 < _this.secondno){
                    target.scale.setTo(1.67,1.73);
                    target.y = 323;
                    target.x=235;
                    _this.horizontalcount=target.y;
                }else if(_this.dragh2 >= _this.secondno){
                    target.x=52;
                    target.y=250;
                    _this.wmusic.play();
                }
            
            
            target.inputEnabled=false;
             /* _this.dragh++;
              for(var g=0;g<grouphorizontal.length;g++){
                if(this.checkOverlap(target,grouphorizontal.getChildAt(g))){
                    //console.log("overlappped horizontal");
                        //console.log("matched horizontal");
                       // //console.log("in hgere"+_this.verticalcount);
                        //console.log("in hgere"+(_this.addyellowv));
                        if(_this.dragh < _this.addyellowv){
                            target.scale.setTo(1.47,1.48);
                            //console.log("drag flag=="+_this.dragh);
                            target.x = 234;
                            target.y = 321+(_this.dragh*20);
                            _this.horizontalcount=target.y;
                            //console.log("target x=="+target.x);
                            //console.log("target y=="+target.y);
                            target.inputEnabled=false;
                            //_this.verticalcount++;
                        }else{
                            target.x=52;
                                target.y=250;
                        }
                    
                }
            } */
          }
        
        
        
         else if(target.name=="yellowgrid" && _this.flag=="question1"){
              
              //console.log("target x =="+target.x);
              //console.log("target y =="+target.y);
              //console.log("_this.addyellowh =="+_this.addyellowh);
              if((target.x > 50 && target.x < 650) && (target.y > 90 && target.y < 500)){
                  target.kill();
                
                  if(_this.verticalcount==0 && _this.horizontalcount==0){
                      //console.log("only yellow coin")
                      if(_this.row <= 9){
                          //console.log("row > 9");
                          
                          
                          
                          
                          if(_this.row == 0){
                               
                              _this.rowyp = 106;
                          }else if(_this.row == 1){
                              if(_this.col==0){
                                   _this.rowxp = 486;
                                  _this.rowyp = 131;
                              }else{
                                 // _this.rowxp = 440;
                                  
                                  _this.rowyp = 131;
                                 // _this.rowyp1=125;
                              }
                              
                          }else if(_this.row == 2){
                              if(_this.col==0){
                                   _this.rowxp = 486;
                                  _this.rowyp = 155;
                              }else{
                                  //_this.rowyp1 =145;
                                  _this.rowyp = 155;
                              }
                          }else if(_this.row == 3){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 179;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 179;
                              }
                          }else if(_this.row == 4){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 203;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 203;
                              }
                          }else if(_this.row == 5){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 227;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 227;
                              }
                          }else if(_this.row == 6){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 251;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 251;
                              }
                          }else if(_this.row == 7){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 275;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 275;
                              }
                          }else if(_this.row == 8){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 299;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 299;
                              }
                          }else if(_this.row == 9){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 323;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 323;
                              }
                          }
                      if(_this.col<_this.addyellowh){
                         //console.log("col less"+105+(_this.row*20));
                           //console.log("rowxp"+_this.rowxp);
                          //console.log("rowyp"+_this.rowyp);
                              if(_this.row>0 && _this.col==0){
                                // _this.yellowgrid=this.add.sprite(460+((_this.col)*20),105+(_this.row*20),'Level14_yellowgrid');
                                  _this.yellowgrid=this.add.sprite(486,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                 //_this.col=1;
                                  _this.col++; 
                                  _this.col++; 
                             }else{
//                                  _this.colg=_this.col;
                                 //if(_this.row==0){
                                 //    _this.yellowgrid=this.add.sprite(440+((_this.col)*20),_this.rowyp,'Level14_yellowgrid');
                                     //_this.yellowgrid=this.add.sprite(440+((_this.col)*20),105+(_this.row*20),'Level14_yellowgrid');
                                // }else{
                                     _this.yellowgrid=this.add.sprite(467+((_this.col)*23),_this.rowyp,'Level14_yellowgrid');
                                     //_this.yellowgrid=this.add.sprite(440+((_this.col)*20),105+(_this.row*20),'Level14_yellowgrid');
                                // }
                                
                                 
                                 _this.yellowgrid.scale.setTo(1.30,1.30);
                                 _this.col++; 
                              }
                          }else if(_this.col>=_this.addyellowh){
                              
                             
                              //console.log("row inc"+105+(_this.row*20));
                             // _this.yellowgrid=this.add.sprite(440,105+(_this.row*20),'Level14_yellowgrid');
                             _this.yellowgrid=this.add.sprite(466,_this.rowyp+24,'Level14_yellowgrid');
                            _this.yellowgrid.scale.setTo(1.30,1.30);
                               _this.row++;
                              // if(_this.addyellowh != 1)
                              _this.col=0;
                              
                          }
                          //_this.yellowgrid.scale.setTo(1.15,1.15);
                  }else{//234,321
                      //console.log("no rrr");
                      if(_this.cols<_this.firstno){
                              _this.yellowgrid=this.add.sprite(235+(_this.cols*23),345+(_this.rows*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.cols++; 
                              
                             // _this.row=0;
                          }else{
                              _this.rows++;
                              _this.yellowgrid=this.add.sprite(235,345+(_this.rows*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.cols=0;
                              
                          }
                  }
                  }else {
                      
                     // if(_this.verticalcount > 0){
                      //console.log("only yellow coin > 0"+_this.verticalcount);
                      //console.log("only yellow coin > 0"+_this.horizontalcount);
                      _this.addyellowh2=_this.addyellowh;
                      _this.addyellowv2=_this.addyellowv;
                            if(_this.verticalcount == 466){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-1;
                                  }
                                  _this.xpos=486;
                                  _this.xpos1=254;
                                  
                              } 
                              else if(_this.verticalcount == 490){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-2;
                                  }
                                  _this.xpos=510;
                                  _this.xpos1=274;
                                  
                              }
                              else if(_this.verticalcount == 514){
                                  _this.pos++;
                                  _this.xpos=534;
                                  _this.xpos1=294;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-3;
                                  }
                                  
                              }    
                              else if(_this.verticalcount == 538){
                                  _this.pos++;
                                  _this.xpos=558;
                                  _this.xpos1=314;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-4;
                                  }
                              }   
                              else if(_this.verticalcount == 562){
                                  _this.pos++;
                                  _this.xpos=582;
                                  _this.xpos1=334;
                                 if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-5;
                                  }
                              }
                              //console.log("nnnnnnnnnnnnnnnn========="+_this.row);
                      //console.log("vertical length==="+_this.verticallen);
                      //console.log("vertical addyellowh2==="+(_this.firstno-10));
                      if(_this.row <=9 && _this.dragv < (_this.firstno-11)){// && _this.col<_this.addyellowh){
                      //console.log("only 10");
                          
                          if(_this.row == 0){
                               
                              _this.rowyp = 106;
                          }else if(_this.row == 1 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 486;//460
                                  _this.rowyp = 131;//127
                              }else{
                                 // _this.rowxp = 440;
                                  
                                  _this.rowyp = 131;
                                 // _this.rowyp1=125;
                              }
                              
                          }else if(_this.row == 2 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 486;//460
                                  _this.rowyp = 155;
                              }else{
                                  //_this.rowyp1 =145;
                                  _this.rowyp = 155;
                              }
                          }else if(_this.row == 3 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 179;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 179;
                              }
                          }else if(_this.row == 4 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 203;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 203;
                              }
                          }else if(_this.row == 5 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 227;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 227;
                              }
                          }else if(_this.row == 6 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 251;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 251;
                              }
                          }else if(_this.row == 7 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 275;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 275;
                              }
                          }else if(_this.row == 8 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 299;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 299;
                              }
                          }else if(_this.row == 9 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 486;
                                  _this.rowyp = 323;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 323;
                              }
                          }
                          
                          
                          
                          
                          
                          
                              //console.log("in row 9=="+_this.addyellowh);
                           //console.log("in row 9 col=="+_this.col);
                          
                          
                          /*
                          else if(_this.row>0 && _this.col==0 && _this.yum == 1){
                                //   _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+20,'Level14_yellowgrid');
                                //  _this.yellowgrid.scale.setTo(1.15,1.15);
                                   _this.col++; 
                               }
                          
                          */
                          _this.yum = ((_this.firstno-10)- (_this.dragv+1));
                               //console.log("yum==="+_this.yum);
                           if(_this.col<_this.addyellowh){     
                              // //console.log("corr"+(_this.addyellowh - _this.verticallen));
                               
                               /*if(_this.row>0 && _this.col==0){
                                   _this.yellowgrid=this.add.sprite(_this.xpos+20,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.15,1.15);
                                 //_this.col=1;
                                  _this.col++; 
                                  _this.col++;
                               }else{
                                   _this.yellowgrid=this.add.sprite(_this.xpos+((_this.col)*20),_this.rowyp,'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.15,1.15);
                                   _this.col++; 
                               }*/
                               
                               if(_this.row>0 && _this.col==0 && _this.yum > 1){
                                   
                                   
                                   _this.yellowgrid=this.add.sprite(_this.xpos+23,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  _this.col++;
                               }else if(_this.row>0 && _this.col==0 && _this.yum == 1){
                                   
                                   
                                   _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  
                               }else{
                                   _this.yellowgrid=this.add.sprite(_this.xpos+((_this.col)*23),_this.rowyp,'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++;
                               }
                               
                             // _this.yellowgrid=this.add.sprite(_this.xpos+(_this.col*20),105+(_this.row*20),'Level14_yellowgrid');
                    /*  _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp,'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.15,1.15);
                              _this.col++;   */
                              
                             // _this.row=0;
                          }else if(_this.col>=_this.addyellowh){
                              //console.log("in wrrr"+_this.row);
                               
                              if(_this.row<9){
                                  
                                //console.log("yes");
                             // _this.yellowgrid=this.add.sprite(_this.xpos,105+(_this.row*20),'Level14_yellowgrid');
                               _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              
                             //  if(_this.addyellowh2 != 1)
                              
                              }
                             /* if(_this.row==8){
                                  //console.log("new line========================");
                                  _this.nextline=1;
                              }*/
                              _this.row++;
                              
                             _this.col=0;
                              
                          }
                  }else{//234,321
                      //console.log("in correct place"+_this.horizontalcount);
                    if(_this.rowsh < (_this.secondno-10)){
                      if(_this.horizontalcount == 346){
                                  _this.counth1++;
                                  //console.log("it is 234");
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-1;
                                  }
                                 // _this.xpos1=444;
                                 // _this.xpos1=321;
                                 
                              }
                              else if(_this.horizontalcount == 370){
                                 _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=341;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-2;
                                  }
                                  
                              }    
                              else if(_this.horizontalcount == 394){
                                  _this.counth1++;
                                  _this.posh++;
                                  //_this.xpos1=444;
                                  //_this.xpos1=361;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-3;
                                  }
                              }   
                              else if(_this.horizontalcount == 418){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=381;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-4;
                                  }
                              }
                      else if(_this.horizontalcount == 442){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=401;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-4;
                                  }
                              }else{
                                  _this.xpos1=235;
                                  _this.ypos1=346;//321
                              }
                      
                      //console.log("NEW"+(_this.firstno-10));
                      //console.log("cols"+_this.colsh);
                      //console.log("rows"+_this.rowsh);
                        //console.log("this next"+_this.rowsh);
                      
                     // if(_this.horizontalcount > 0 && _this.counth1 < (_this.hcount)){
                     /*if(_this.horizontalcount > 0 && _this.counth1 < (_this.hcount)){
                          _this.hcount = _this.firstno-10;
                      }else{
                          _this.hcount = _this.firstno;
                      }*/
                        //console.log("h count before"+_this.hcount);
                        //console.log("_this.next"+_this.next);
                          if(_this.horizontalcount ==346  && _this.next==0)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==370  && _this.next<=1)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==394  && _this.next<=2)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==418  && _this.next<=3)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==442  && _this.next<=4)
                            _this.hcount = _this.firstno-10;
                          else
                            _this.hcount = _this.firstno;
                        
                        //console.log("h count after"+_this.hcount);
                        //console.log("count h1"+_this.counth1);
                        if(_this.next>0 && _this.horizontalcount > 0){
                                _this.hcount--;  
                              }
                         //console.log("_this.hcount later"+_this.hcount);
                          if(_this.colsh<(_this.hcount)){
                              if(_this.counth1 <= (_this.hcount)){
                                  if(_this.horizontalcount == 346){
                                      if(_this.next==0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 346;
                                      }else{
                                          _this.xpos1 =254;
                                      }
                                 
                                  
                                //  _this.hcount = _this.firstno-10;
                                  }
                                  else if(_this.horizontalcount == 370){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 346;
                                    }else if(_this.next == 1){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }
                                        else{
                                        _this.xpos1 =254;
                                       // _this.ypos1 = 321;
                                    }
                                  } 
                                  
                                //  if(_this.next == 0)
                                  
                                 // else 
                                //  _this.ypos1 = 341;
                                //    if(_this.next > 0)
                                //  _this.hcount = _this.firstno-10;
                                  
                                  else if(_this.horizontalcount == 394){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 346;
                                      }else if(_this.next == 1 || _this.next == 2){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }else{
                                        _this.xpos1 = 254;
                                    }
                                  
                                //  _this.xpos1 = 444;
                                //  _this.ypos1 = 321;
                                  //_this.hcount = _this.firstno-10;
                                  }
                                  else if(_this.horizontalcount == 418){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 346;
                                      }else if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }else{
                                        _this.xpos1 = 254;
                                    }
                                  } 
                                  
                                  //_this.hcount = _this.firstno-10;
                                  
                                else if(_this.horizontalcount == 442){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 346;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4){
                                        _this.xpos1 = 487;
                                        _this.ypos1 = 346;
                                    }else{
                                        _this.xpos1 = 254;
                                    }
                                  } 
                                  
                                  //_this.hcount = _this.firstno-10;
                                  
                              }else{
                                  _this.xpos1 = 235;
                                  _this.ypos1 = 346;
                                  _this.hcount = _this.firstno;
                                  
                              }
                              //console.log("now xpos==========="+_this.xpos1);
                              //console.log("now ypos==========="+_this.ypos1);
                              _this.yellowgrid=this.add.sprite(_this.xpos1+(_this.colsh*23),_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.colsh++; 
                        
                             /* if(_this.horizontalcount == 1){
                                  _this.hcount = _this.firstno;
                                  _this.xpos1 = 204;
                              }*/
                              
                             // _this.row=0;
                          }else{
                             // _this.next=1;
                               _this.next++;
                            //console.log("in else now"+_this.horizontalcount);
                              //console.log("_this.next =="+_this.next);
                              
                              if(_this.horizontalcount == 346){
                                  _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  
                                  
                              }else if(_this.horizontalcount == 370){
                                  
                                  if(_this.next == 1){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if(_this.next > 1){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 394){
                                  
                                  if(_this.next == 1 || _this.next == 2){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if (_this.next > 2){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 418){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if (_this.next > 3){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 442){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 346;
                                  }else if (_this.next > 4){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 346;
                                  }
                                  
                                      
                              }else{
                                  _this.xpos1 = 235;
                                  
                                  _this.ypos1 = 346;
                                  
                              }
                             // if(_this.counth1 < (_this.hcount)){
                                  
                             // }/*else{
                               //   _this.xpos1 = 444;
                                //  _this.ypos1 = 321;
                                  
                             // }*/
                              _this.rowsh++;
                               if(_this.rowsh<(_this.secondno-10)){
                                   _this.yellowgrid=this.add.sprite(_this.xpos1,_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                               }
                              
                              _this.colsh=0;
                              _this.counth1=0;
                              
                          }
                      }
                      
                      
                      /*if(_this.cols<_this.firstno){
                              _this.yellowgrid=this.add.sprite(_this.xpos1+(_this.cols*20),321+(_this.rows*20),'Level14_yellowgrid');
                              _this.cols++; 
                              
                             // _this.row=0;
                          }else{
                              _this.rows++;
                              _this.yellowgrid=this.add.sprite(_this.xpos1,321+(_this.rows*20),'Level14_yellowgrid');
                              _this.cols=0;
                              
                          }*/
                  }
        }
            
           /* if(this.checkOverlap(target,graphicsvertical) || this.checkOverlap(target,_this.Level14_gridjointhadd)){
            else if(target.name=="vertical"){
            //console.log("in hgere"+_this.verticalcount);
            //console.log("in hgere"+_this.addyellowh);
            
            if(_this.verticalcount < _this.addyellowh){
                target.scale.setTo(1.47,1.48);
                target.x = 440+(_this.verticalcount*20);
                target.y = 105;
                target.inputEnabled=false;
            _this.verticalcount++;
            }else{
                target.x=118;
                    target.y=275;
            }
            //if(_this.secondno
        }else if(target.name=="horizontal"){
            //console.log("in horizon");
            
            if(_this.horizontalcount < _this.addyellowv){
                target.scale.setTo(1.47,1.48);
                target.x = 234;
                target.y = 321+(_this.horizontalcount*20);
                target.inputEnabled=false;
            _this.horizontalcount++;
            }else{
                target.x=52;
                    target.y=250;
            }
            //if(_this.secondno
        }
           } else{
                if(target.name=="vertical"){
                    target.x=118;
                    target.y=275;
                }else if(target.name=="horizontal"){
                    target.x=234;
                    target.y=321;
                }
                    
            
            }*/
              
              }else{
                  target.x=115;
                  target.y=435;
                  _this.wmusic.play();
              }
            }
          
    
        else if(target.name=="yellowgrid" && _this.flag=="question2"){
              //console.log("question2 yellowgrid");
              //console.log("target x =="+target.x);
              //console.log("target y =="+target.y);
              //console.log("_this.addyellowh =="+_this.addyellowh);
              if((target.x > 50 && target.x < 630) && (target.y > 0 && target.y < 350)){
                  target.kill();
                
                  if(_this.horizontalcount==0){
                      //console.log("only yellow coin");
                      if(_this.row <= 9){
                          if(_this.col<_this.firstno){
                              _this.yellowgrid=this.add.sprite(235+(_this.col*23),107+(_this.row*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.col++;
                          }else{
                              _this.row++;
                              _this.yellowgrid=this.add.sprite(235,107+(_this.row*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.col=0;
                              
                          }
                      }
                      
                    /*  if(_this.row <= 9){
                          //console.log("row > 9");
                          
                          
                          
                          
                          if(_this.row == 0){
                               
                              _this.rowyp = 105;
                          }else if(_this.row == 1){
                              if(_this.col==0){
                                   _this.rowxp = 460;
                                  _this.rowyp = 125;
                              }else{
                                 // _this.rowxp = 440;
                                  
                                  _this.rowyp = 125;
                                 // _this.rowyp1=125;
                              }
                              
                          }else if(_this.row == 2){
                              if(_this.col==0){
                                   _this.rowxp = 460;
                                  _this.rowyp = 150;
                              }else{
                                  //_this.rowyp1 =145;
                                  _this.rowyp = 150;
                              }
                          }else if(_this.row == 3){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 170;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 170;
                              }
                          }else if(_this.row == 4){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 190;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 190;
                              }
                          }else if(_this.row == 5){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 212;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 212;
                              }
                          }else if(_this.row == 6){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 235;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 235;
                              }
                          }else if(_this.row == 7){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 255;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 255;
                              }
                          }else if(_this.row == 8){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 277;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 277;
                              }
                          }else if(_this.row == 9){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 290;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 290;
                              }
                          }
                      if(_this.col<_this.addyellowh){
                         //console.log("col less"+105+(_this.row*20));
                           //console.log("rowxp"+_this.rowxp);
                          //console.log("rowyp"+_this.rowyp);
                              if(_this.row>0 && _this.col==0){
                                // _this.yellowgrid=this.add.sprite(460+((_this.col)*20),105+(_this.row*20),'Level14_yellowgrid');
                                  _this.yellowgrid=this.add.sprite(460,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.15,1.15);
                                 //_this.col=1;
                                  _this.col++; 
                                  _this.col++; 
                             }else{
//                                  _this.colg=_this.col;
                                 //if(_this.row==0){
                                 //    _this.yellowgrid=this.add.sprite(440+((_this.col)*20),_this.rowyp,'Level14_yellowgrid');
                                     //_this.yellowgrid=this.add.sprite(440+((_this.col)*20),105+(_this.row*20),'Level14_yellowgrid');
                                // }else{
                                     _this.yellowgrid=this.add.sprite(440+((_this.col)*20),_this.rowyp,'Level14_yellowgrid');
                                     //_this.yellowgrid=this.add.sprite(440+((_this.col)*20),105+(_this.row*20),'Level14_yellowgrid');
                                // }
                                
                                 
                                 _this.yellowgrid.scale.setTo(1.15,1.15);
                                 _this.col++; 
                              }
                          }else if(_this.col>=_this.addyellowh){
                              
                             
                              //console.log("row inc"+105+(_this.row*20));
                             // _this.yellowgrid=this.add.sprite(440,105+(_this.row*20),'Level14_yellowgrid');
                             _this.yellowgrid=this.add.sprite(440,_this.rowyp+20,'Level14_yellowgrid');
                            _this.yellowgrid.scale.setTo(1.15,1.15);
                               _this.row++;
                              // if(_this.addyellowh != 1)
                              _this.col=0;
                              
                          }
                          //_this.yellowgrid.scale.setTo(1.15,1.15);
                  }else{//234,321
                      //console.log("no rrr");
                      if(_this.cols<_this.firstno){
                              _this.yellowgrid=this.add.sprite(234+(_this.cols*20),321+(_this.rows*20),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.15,1.15);
                              _this.cols++; 
                              
                             // _this.row=0;
                          }else{
                              _this.rows++;
                              _this.yellowgrid=this.add.sprite(234,321+(_this.rows*20),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.15,1.15);
                              _this.cols=0;
                              
                          }
                  }*/
                  }else {
                      
                     // if(_this.verticalcount > 0){
                      //console.log("only yellow coin > 0"+_this.verticalcount);
                      //console.log("only yellow coin > 0"+_this.horizontalcount);
                      _this.addyellowh2=_this.addyellowh;
                      _this.addyellowv2=_this.addyellowv;
                            if(_this.verticalcount == 440){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-1;
                                  }
                                  _this.xpos=460;
                                  _this.xpos1=254;
                                  
                              } 
                              else if(_this.verticalcount == 460){
                                  _this.pos++;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-2;
                                  }
                                  _this.xpos=480;
                                  _this.xpos1=274;
                                  
                              }
                              else if(_this.verticalcount == 480){
                                  _this.pos++;
                                  _this.xpos=500;
                                  _this.xpos1=294;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-3;
                                  }
                                  
                              }    
                              else if(_this.verticalcount == 500){
                                  _this.pos++;
                                  _this.xpos=520;
                                  _this.xpos1=314;
                                  if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-4;
                                  }
                              }   
                              else if(_this.verticalcount == 520){
                                  _this.pos++;
                                  _this.xpos=540;
                                  _this.xpos1=334;
                                 if(_this.pos == 1){
                                      _this.addyellowh=_this.addyellowh-5;
                                  }
                              }
                              //console.log("nnnnnnnnnnnnnnnn========="+_this.row);
                      //console.log("vertical length==="+_this.verticallen);
                      //console.log("vertical addyellowh2==="+(_this.firstno-10));
                      if(_this.row <=9 && _this.dragv < (_this.firstno-11) && _this.flag=="question1"){// && _this.col<_this.addyellowh){
                      //console.log("only 10");
                          
                          if(_this.row == 0){
                               
                              _this.rowyp = 105;
                          }else if(_this.row == 1 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 460;
                                  _this.rowyp = 125;
                              }else{
                                 // _this.rowxp = 440;
                                  
                                  _this.rowyp = 125;
                                 // _this.rowyp1=125;
                              }
                              
                          }else if(_this.row == 2 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                   _this.rowxp = 460;
                                  _this.rowyp = 150;
                              }else{
                                  //_this.rowyp1 =145;
                                  _this.rowyp = 150;
                              }
                          }else if(_this.row == 3 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 170;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 170;
                              }
                          }else if(_this.row == 4 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 190;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 190;
                              }
                          }else if(_this.row == 5 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 212;
                              }else{
                                  //_this.rowxp = 440;
                                  _this.rowyp = 212;
                              }
                          }else if(_this.row == 6 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 235;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 235;
                              }
                          }else if(_this.row == 7 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 255;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 255;
                              }
                          }else if(_this.row == 8 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 277;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 277;
                              }
                          }else if(_this.row == 9 && _this.col<_this.addyellowh){
                              if(_this.col==0){
                                  _this.rowxp = 460;
                                  _this.rowyp = 290;
                              }else{
                                 // _this.rowxp = 440;
                                  _this.rowyp = 290;
                              }
                          }
                          
                          
                          
                          
                          
                          
                              //console.log("in row 9=="+_this.addyellowh);
                           //console.log("in row 9 col=="+_this.col);
                          
                          
                          /*
                          else if(_this.row>0 && _this.col==0 && _this.yum == 1){
                                //   _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+20,'Level14_yellowgrid');
                                //  _this.yellowgrid.scale.setTo(1.15,1.15);
                                   _this.col++; 
                               }
                          
                          */
                          _this.yum = ((_this.firstno-10)- (_this.dragv+1));
                               //console.log("yum==="+_this.yum);
                           if(_this.col<_this.addyellowh){     
                              // //console.log("corr"+(_this.addyellowh - _this.verticallen));
                               
                               /*if(_this.row>0 && _this.col==0){
                                   _this.yellowgrid=this.add.sprite(_this.xpos+20,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.15,1.15);
                                 //_this.col=1;
                                  _this.col++; 
                                  _this.col++;
                               }else{
                                   _this.yellowgrid=this.add.sprite(_this.xpos+((_this.col)*20),_this.rowyp,'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.15,1.15);
                                   _this.col++; 
                               }*/
                               
                               if(_this.row>0 && _this.col==0 && _this.yum > 1){
                                   
                                   
                                   _this.yellowgrid=this.add.sprite(_this.xpos+23,_this.rowyp,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  _this.col++;
                               }else if(_this.row>0 && _this.col==0 && _this.yum == 1){
                                   
                                   
                                   _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                                  _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++; 
                                  
                               }else{
                                   _this.yellowgrid=this.add.sprite(_this.xpos+((_this.col)*23),_this.rowyp,'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                                   _this.col++;
                               }
                               
                             // _this.yellowgrid=this.add.sprite(_this.xpos+(_this.col*20),105+(_this.row*20),'Level14_yellowgrid');
                    /*  _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp,'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.15,1.15);
                              _this.col++;   */
                              
                             // _this.row=0;
                          }else if(_this.col>=_this.addyellowh){
                              //console.log("in wrrr"+_this.row);
                               
                              if(_this.row<9){
                                  
                                //console.log("yes");
                             // _this.yellowgrid=this.add.sprite(_this.xpos,105+(_this.row*20),'Level14_yellowgrid');
                               _this.yellowgrid=this.add.sprite(_this.xpos,_this.rowyp+24,'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              
                             //  if(_this.addyellowh2 != 1)
                              
                              }
                             /* if(_this.row==8){
                                  //console.log("new line========================");
                                  _this.nextline=1;
                              }*/
                              _this.row++;
                              
                             _this.col=0;
                              
                          }
                  }else{//234,321
                      //console.log("in correct place"+_this.horizontalcount);
                    if(_this.rowsh < (_this.secondno)){
                      if(_this.horizontalcount == 107){
                                  _this.counth1++;
                                  //console.log("it is 234");
                                  _this.posh++;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-1;
                                  }
                                 // _this.xpos1=444;
                                 // _this.xpos1=321;
                                 
                              }
                              else if(_this.horizontalcount == 131){
                                 _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=341;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-2;
                                  }
                                  
                              }    
                              else if(_this.horizontalcount == 155){
                                  _this.counth1++;
                                  _this.posh++;
                                  //_this.xpos1=444;
                                  //_this.xpos1=361;
                                  if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-3;
                                  }
                              }   
                              else if(_this.horizontalcount == 179){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=381;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-4;
                                  }
                              }
                      else if(_this.horizontalcount == 203){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=401;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-5;
                                  }
                              }else if(_this.horizontalcount == 227){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=401;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-6;
                                  }
                              }else if(_this.horizontalcount == 251){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=401;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-7;
                                  }
                              }else if(_this.horizontalcount == 275){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=401;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-8;
                                  }
                              }else if(_this.horizontalcount == 299){
                                  _this.counth1++;
                                  _this.posh++;
                                 // _this.xpos1=444;
                                 // _this.xpos1=401;
                                 if(_this.posh == 1){
                                      _this.addyellowv=_this.addyellowv-9;
                                  }
                              }else{
                                  _this.xpos1=235;
                                  _this.ypos1=107;
                              }
                      
                      //console.log("NEW"+(_this.firstno-10));
                      //console.log("cols"+_this.colsh);
                      //console.log("rows"+_this.rowsh);
                        //console.log("this next"+_this.rowsh);
                      
                     // if(_this.horizontalcount > 0 && _this.counth1 < (_this.hcount)){
                     /*if(_this.horizontalcount > 0 && _this.counth1 < (_this.hcount)){
                          _this.hcount = _this.firstno-10;
                      }else{
                          _this.hcount = _this.firstno;
                      }*/
                        //console.log("h count before"+_this.hcount);
                        //console.log("_this.next"+_this.next);
                          if(_this.horizontalcount ==107  && _this.next==0)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==131  && _this.next<=1)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==155  && _this.next<=2)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==179  && _this.next<=3)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==203  && _this.next<=4)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==227  && _this.next<=5)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==251  && _this.next<=6)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==275  && _this.next<=7)
                            _this.hcount = _this.firstno-10;
                          else if(_this.horizontalcount ==299  && _this.next<=8)
                            _this.hcount = _this.firstno-10;
                          else
                            _this.hcount = _this.firstno;
                        
                        //console.log("h count after"+_this.hcount);
                        //console.log("count h1"+_this.counth1);
                        if(_this.next>0 && _this.horizontalcount > 0){
                                _this.hcount--;  
                              }
                         //console.log("_this.hcount later"+_this.hcount);
                          if(_this.colsh<(_this.hcount)){
                              if(_this.counth1 <= (_this.hcount)){
                                  if(_this.horizontalcount == 107){//321
                                      if(_this.next==0){
                                          _this.xpos1 = 467;//228
                                          _this.ypos1 = 107;
                                      }else{
                                          _this.xpos1 =257;
                                      }
                                 
                                  
                                //  _this.hcount = _this.firstno-10;
                                  }
                                  else if(_this.horizontalcount == 131){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1){
                                        _this.xpos1 = 489;//248
                                        _this.ypos1 = 107;
                                    }
                                        else{
                                        _this.xpos1 =259;
                                       // _this.ypos1 = 321;
                                    }
                                  } 
                                  
                                //  if(_this.next == 0)
                                  
                                 // else 
                                //  _this.ypos1 = 341;
                                //    if(_this.next > 0)
                                //  _this.hcount = _this.firstno-10;
                                  
                                  else if(_this.horizontalcount == 155){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 107;
                                      }else if(_this.next == 1 || _this.next == 2){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  
                                //  _this.xpos1 = 444;
                                //  _this.ypos1 = 321;
                                  //_this.hcount = _this.firstno-10;
                                  }
                                  else if(_this.horizontalcount == 179){
                                      if(_this.next == 0){
                                          _this.xpos1 = 467;
                                          _this.ypos1 = 107;
                                      }else if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                  
                                  //_this.hcount = _this.firstno-10;
                                  
                                else if(_this.horizontalcount == 203){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  }
                                  
                                else if(_this.horizontalcount == 227){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next == 5){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  }
                                  else if(_this.horizontalcount == 251){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next ==5 || _this.next ==6){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                  else if(_this.horizontalcount == 275){
                                      //console.log("inside==="+_this.next);
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next ==5 || _this.next==6 || _this.next==7){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        //console.log("in else nnnn");
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                  else if(_this.horizontalcount == 299){
                                    if(_this.next == 0){
                                        _this.xpos1 = 467;
                                        _this.ypos1 = 107;
                                    }else if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next ==4 || _this.next ==5 || _this.next==6 || _this.next==7 || _this.next==8){
                                        _this.xpos1 = 489;
                                        _this.ypos1 = 107;
                                    }else{
                                        _this.xpos1 = 259;
                                    }
                                  } 
                                  //_this.hcount = _this.firstno-10;
                                  
                              }else{
                                  _this.xpos1 = 235;
                                  _this.ypos1 = 107;
                                  _this.hcount = _this.firstno;
                                  
                              }
                              //console.log("now xpos==========="+_this.xpos1);
                              //console.log("now ypos==========="+_this.ypos1);
                              _this.yellowgrid=this.add.sprite(_this.xpos1+(_this.colsh*23),_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                              _this.yellowgrid.scale.setTo(1.30,1.30);
                              _this.colsh++; 
                        
                             /* if(_this.horizontalcount == 1){
                                  _this.hcount = _this.firstno;
                                  _this.xpos1 = 204;
                              }*/
                              
                             // _this.row=0;
                          }else{
                             // _this.next=1;
                               _this.next++;
                            //console.log("in else now"+_this.horizontalcount);
                              //console.log("_this.next =="+_this.next);
                              
                              if(_this.horizontalcount == 107){
                                  _this.xpos1 = 235;//234
                                      _this.ypos1 = 107;
                                  
                                  
                              }else if(_this.horizontalcount == 131){
                                  
                                  if(_this.next == 1){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if(_this.next > 1){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 155){
                                  
                                  if(_this.next == 1 || _this.next == 2){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 2){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 179){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 3){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 203){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 4){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 227){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 5){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 251){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5 || _this.next == 6){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 6){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 275){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5 || _this.next == 6 || _this.next==7){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 7){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else if(_this.horizontalcount == 299){
                                  
                                  if(_this.next == 1 || _this.next == 2 || _this.next == 3 || _this.next == 4 || _this.next == 5 || _this.next == 6 || _this.next==7 || _this.next==8){
                                      _this.xpos1 = 467;
                                      _this.ypos1 = 107;
                                  }else if (_this.next > 8){
                                      _this.xpos1 = 235;
                                      _this.ypos1 = 107;
                                  }
                                  
                                      
                              }else{
                                  _this.xpos1 = 235;
                                  
                                  _this.ypos1 = 107;
                                  
                              }
                             // if(_this.counth1 < (_this.hcount)){
                                  
                             // }/*else{
                               //   _this.xpos1 = 444;
                                //  _this.ypos1 = 321;
                                  
                             // }*/
                              _this.rowsh++;
                               if(_this.rowsh<(_this.secondno)){
                                   _this.yellowgrid=this.add.sprite(_this.xpos1,_this.ypos1+(_this.rowsh*24),'Level14_yellowgrid');
                                   _this.yellowgrid.scale.setTo(1.30,1.30);
                               }
                              
                              _this.colsh=0;
                              _this.counth1=0;
                              
                          }
                      }
                      
                      
                      /*if(_this.cols<_this.firstno){
                              _this.yellowgrid=this.add.sprite(_this.xpos1+(_this.cols*20),321+(_this.rows*20),'Level14_yellowgrid');
                              _this.cols++; 
                              
                             // _this.row=0;
                          }else{
                              _this.rows++;
                              _this.yellowgrid=this.add.sprite(_this.xpos1,321+(_this.rows*20),'Level14_yellowgrid');
                              _this.cols=0;
                              
                          }*/
                  }
        }
            
           /* if(this.checkOverlap(target,graphicsvertical) || this.checkOverlap(target,_this.Level14_gridjointhadd)){
            else if(target.name=="vertical"){
            //console.log("in hgere"+_this.verticalcount);
            //console.log("in hgere"+_this.addyellowh);
            
            if(_this.verticalcount < _this.addyellowh){
                target.scale.setTo(1.47,1.48);
                target.x = 440+(_this.verticalcount*20);
                target.y = 105;
                target.inputEnabled=false;
            _this.verticalcount++;
            }else{
                target.x=118;
                    target.y=275;
            }
            //if(_this.secondno
        }else if(target.name=="horizontal"){
            //console.log("in horizon");
            
            if(_this.horizontalcount < _this.addyellowv){
                target.scale.setTo(1.47,1.48);
                target.x = 234;
                target.y = 321+(_this.horizontalcount*20);
                target.inputEnabled=false;
            _this.horizontalcount++;
            }else{
                target.x=52;
                    target.y=250;
            }
            //if(_this.secondno
        }
           } else{
                if(target.name=="vertical"){
                    target.x=118;
                    target.y=275;
                }else if(target.name=="horizontal"){
                    target.x=234;
                    target.y=321;
                }
                    
            
            }*/
              
              }else{
                  target.x=115;
                  target.y=435;
                  _this.wmusic.play();
              }
          }
},
    
   
    

};