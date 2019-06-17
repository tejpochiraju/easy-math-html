var telInitializer = {

	saveGameplayReturnedValue : null,
	gameID : null,

	gameIdInit:function(gameName,grade)
	{
		saveGameplayReturnedValue = null;
		gameID = null;

		if(gameName==null||gameName==""||gameName==undefined||gameName==NaN)
		{
			//alert("game name is not proper");
		}
		else if(grade==null||grade==""||grade==undefined||grade==NaN)
		{
			//alert("grade is not proper");
		}

		switch(gameName)
		{
			case "pinwheel1_1A":
							gameID = "NSF1.1A";
							break;
			case "length2_1A":
							gameID = "SSR2.1A";
							break;
			case "length2_1B":
							gameID = "SSR2.1B";
							break;
			case "length2_2":
							gameID = "ML2.2";
							break;
			case "length2_3":
							gameID = "ML2.3";
							break;
			case "weight3_1":
							gameID = "MW3.1";
							break;
			case "weight3_2A":
							gameID = "MW3.2A";
							break;
			case "time5_1":
							gameID = "MT5.1";
							break;
			case "time5_2":
							gameID = "MT5.2";
							break;
			case "time5_4":
							gameID = "MT5.4";
							break;
			case "unity1_1":
							gameID = "NSN1.1";
							break;
			case "unity1_2":
							gameID = "NSN1.2";
							break;
			case "unity1_3":
							gameID = "NSN1.3";
							break;
			case "unity1_4":
							gameID = "NSN1.4";
							break;
			case "unity1_5":
							gameID = "NSN1.5";
							break;
			case "unity1_6":
							gameID = "NSN1.6";
							break;
			case "unity1_7":
							gameID = "NSN1.7";
							break;
			case "sequence2_1_1":
							gameID = "NSS2.1";
							break;
			case "sequence2_1_1a":
							gameID = "NSS2.1a";
							break;
			case "sequence2_2_1":
							gameID = "NSS2.2";
							break;
			case "sequence2_2_1a":
							gameID = "NSS2.2a";
							break;
			case "sequence2_3_1":
							gameID = "NSS2.3";
							break;
			case "sequence2_3_1a":
							gameID = "NSS2.3a";
							break;
			case "sequence2_4_1":
							gameID = "NSS2.4";
							break;
			case "sequence2_4_1a":
							gameID = "NSS2.4a";
							break;
			case "sequence2_5_1":
							gameID = "NSS2.5";
							break;
			case "sequence2_5_1a":
							gameID = "NSS2.5a";
							break;
			case "sequence2_6_1":
							gameID = "NSS2.6";
							break;
			case "sequence2_7_3":
							gameID = "NSS2.7";
							break;
			case "sequence2_7_3a":
							gameID = "NSS2.7a";
							break;
			case "unity5_1":
							gameID = "NOA5.1";
							break;
			case "unity6_1":
							gameID = "NOA6.1";
							break;
			case "CoinMachine3_1_1":
							gameID = "NSPV3.1";
							break;
			case "CoinMachine3_2_1":
							gameID = "NSPV3.2";
							break;
			case "CoinMachine7_1_1":
							gameID = "NOA7.1";
							break;
			case "CoinMachine7_2_1":
							gameID = "NOA7.2";
							break;
			case "unity8_1":
							gameID = "NOS8.1";
							break;
			case "unity10_1_1":
							gameID = "NOS10.1";
							break;
			case "unity10_2_1":
							gameID = "NOS10.2";
							break;
			case "unity11_1":
							gameID = "NOM11.1";
							break;
			case "unity11_2":
							gameID = "NOM11.2";
							break;
			case "time6_1":
							gameID = "MT6.1";
							break;
			case "time6_2":
							gameID = "MT6.2";
							break;
			case "pinwheel1_1B":
							gameID = "NSF1.1B";
							break;
			case "pinwheel1_2A":
							gameID = "NSF1.2A";
							break;
			case "pinwheel1_2B":
							gameID = "NSF1.2B";
							break;
			case "pinwheel1_2C":
							gameID = "NSF1.2C";
							break;
			case "length2_4A":
							gameID = "ML2.4A";
							break;
			case "length2_4B":
							gameID = "ML2.4B";
							break;
			case "weight3_2B":
							gameID = "MW3.2B";
							break;
			case "weight3_2C":
							gameID = "MW3.2C";
							break;
			case "weight3_2D":
							gameID = "MW3.2D";
							break;
			case "weight3_3A":
							gameID = "MW3.3A";
							break;
			case "weight3_3B1":
							gameID = "MW3.3B1";
							break;
			case "weight3_3B2":
							gameID = "MW3.3B2";
							break;
			case "time7_1":
							gameID = "MT7.1";
							break;
			case "time7_2":
							gameID = "MT7.2";
							break;
			case "CoinMachine17_2":
							gameID = "NOD17.2";
							break;
			case "volume4_1A":
							gameID = "MV4.1A";
							break;
			case "volume4_1B":
							gameID = "MV4.1B";
							break;
			case "volume4_1C":
							gameID = "MV4.1C";
							break;
			case "volume4_2A":
							gameID = "MV4.2A";
							break;
			case "volume4_2B":
							gameID = "MV4.2B";
							break;
			case "volume4_2C":
							gameID = "MV4.2C";
							break;
			case "volume4_3A":
							gameID = "MV4.3A";
							break;
			case "volume4_3B":
							gameID = "MV4.3B";
							break;
			case "volume4_3C":
							gameID = "MV4.3C";
							break;
			case "Comparison4_1":
							gameID = "NSC4.1";
							break;
			case "Comparison4_2":
							gameID = "NSC4.2";
							break;
			case "Comparison4_3_1":
							gameID = "NSC4.3";
							break;
			case "unity4_4_1":
							gameID = "NSC4.4";
							break;
			case "unity4_5_1":
							gameID = "NSC4.5";
							break;
			case "unity4_6_1":
							gameID = "NSC4.6";
							break;
			case "multiplication12_1":
							gameID = "NOM12.1";
							break;
			case "unity12_2":
							gameID = "NOM12.2";
							break;
			case "multiplication12_3_1":
							gameID = "NOM12.3";
							break;
			case "unity13_1":
							gameID = "NOM13.1";
							break;
			case "unity14_1":
							gameID = "NOM14.1";
							break;
			case "unity14_2":
							gameID = "NOM14.2";
							break;
			case "unity15_1":
							gameID = "NOM15.1";
							break;
			case "Unity17_3":
							gameID = "NOD17.3";
							break;

		}

		////alert(gameID);

		if(gameID==null||gameID==""||gameID==undefined)
		{
			//alert("game id is not proper");
		}

		if(grade==1)
		{
			gameID = gameID + "-G1"; 
		}
		else if(grade==2)
		{
			gameID = gameID + "-G2"; 
		}
		else if(grade==3)
		{
			gameID = gameID + "-G3"; 
		}
		else if(grade==4)
		{
			gameID = gameID + "-G4"; 
		}

		telInitializer.tele_saveGamePlay(gameID);

	},

	tele_saveGamePlay:function(gameid)
	{
	    //saveGamePlay; /*local variable */
	    time = window.timeSaveFunc();
	    acss_token = window.acctkn;
	    var saveGameplay = 
	    { 
			id_game:gameid, 
			access_token:acss_token,
		 	start_time:time
	    } 

	    if(saveGameplay.id_game==null||saveGameplay.id_game==""||saveGameplay.id_game==undefined)
		{
			//alert("game id is not proper");
		}

	    saveGameplayReturnedValue = absdsjsapi.saveGameplay(saveGameplay);
	    ////alert(saveGameplayReturnedValue);
	},

	tele_interactEvent:function(gamePlay, access_token, time, question_id, event_type, res_id)
	{
	    var interactEvent = 
	    {
			id_game_play: gamePlay, 
			id_question: question_id,  
			date_time_event: time, 
			event_type: event_type, 
			res_id: res_id, 
			access_token: access_token 
	    } 
	    //absdsjsapi.saveInteractEvent(interactEvent);
	},

	tele_saveAssessment:function(question_id, pass_type, time_to_answer, attempts, screenCount)
	{

		gamePlay = saveGameplayReturnedValue;
		pass_type = "yes";
		time = window.timeSaveFunc();
		acss_token = window.acctkn;

		if(question_id==null||question_id==""||question_id==undefined)
		{
			//alert("question id is not proper");
		}
		else if(screenCount==null||screenCount==""||screenCount==undefined)
		{
			//alert("screenCount is not proper");
		}

		question_id = gameID + "-Q" + question_id + "#SCR-" + screenCount;

	    var saveAsment = 
	    { 
			id_game_play: gamePlay,
			id_question: question_id,  
			pass: pass_type,
			time2answer: time_to_answer,
			attempts: attempts,
			date_time_submission: time, 
			access_token: acss_token 
	    }

	    if(saveAsment.id_question==null||saveAsment.id_question==""||saveAsment.id_question==undefined)
		{
			//alert("question id is not proper");
		}
		else if(saveAsment.time2answer==null||saveAsment.time2answer==""||saveAsment.time2answer==undefined)
		{
			//alert("time to answer is not proper");
		}
		else if(saveAsment.attempts==null||saveAsment.attempts==""||saveAsment.attempts==undefined)
		{
			//alert("attempts to answer is not proper");
		}
		
	    
					
	    absdsjsapi.saveAssessment(saveAsment);

	},



};

