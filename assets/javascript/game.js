  var battleSound = document.getElementById("battlenoise");
  var sound = document.getElementById("back-noise");
  var back = document.getElementById("soldier-select");  
  var attack;
  var p1health;
  var p2health;
  var p3health;
  var p4health;
  var p2counter;
  var p3counter;
  var p4counter;
  var p1death;
  var p2death;
  var p3death;
  var p4death;
  var isActive;
  var isP2;
  var isP3;
  var isP4;
  var isP1alive = true;
  var isP2alive = true;
  var isP3alive = true;
  var isP4alive = true;

	function restart(){
		battlenoise.src = selection;
		$("#selection").css("z-index", "33");
		$("#soldier-select").css("width", "600px");
		back.src = soldier;
		$(".menu").css("z-index","-99");	
 		isP1alive = true;
   		isP2alive = true;
   		isP3alive = true;
   		isP4alive = true;	
   		var attack;
  		var p1health;
		  var p2health;
		  var p3health;
		  var p4health;
		  var p2counter;
		  var p3counter;
		  var p4counter;
		  var p1death;
		  var p2death;
		  var p3death;
		  var p4death;
		  var isActive;
		  var isP2;
		  var isP3;
		  var isP4;
		$("#attack").css("opacity",0);
		$("#gameplay").css("z-index",2);
		$("#health").css("opacity",0);

   	}


	function gameOver(){
	if (isP2alive == false && isP3alive == false && isP4alive == false){
		setTimeout(function(){
			back.src = complete;
			$("#gameplay").css("opacity",0);
			$("#health").css("opacity",0);
			battleSound.src = win;
		}, 1500);

		setTimeout(function(){
		$(".menu").css("z-index",99);	
		}, 2500);
	}
}

	$(".menu").on("click", function (){
		restart();
	});

	$("#marco").on("click", function(){
		sound.src = select;
		this.src = marco.select;
		setTimeout(function() {
		$("#health").css("opacity", "1.0");
		p1.src = char[0].img;
		player1.innerHTML = char[0].name;
		p1health = char[0].health;
		attack = char[0].attack;
		p1death = char[0].death;
		p2.src = char[1].img;
		p2health = char[1].health;
		p2counter = char[1].counter;
		player2.innerHTML = char[1].name;
		p2death = char[1].death;
		p3.src = char[2].img;
		p3health = char[2].health;
		p3.counter = char[2].counter;
		player3.innerHTML = char[2].name;
		p3death = char[2].death;
		p4.src = char[3].img;
		p4health = char[3].health;		
		p4.counter = char[3].counter;
		player4.innerHTML = char[3].name;
		p4death = char[3].death;
		back.src = background;
		$("#attack").css("opacity","1");
		$("#soldier-select").css("width", "800px");
		battleSound.src = battleSelect;
		$("#selection").css("z-index", "-99");
        }, 1000);
	});

	$("#eri").on("click", function(){
        sound.src = select;
        this.src = eri.select;
		setTimeout(function() {
		$("#health").css("opacity", "1.0");
		p1.src = char[1].img;
		player1.innerHTML = char[1].name;
		p1health = char[1].health;
		attack = char[1].attack;
		p1death = char[1].death;
		p2.src = char[0].img;
		p2health = char[0].health;
		p2counter = char[0].counter;
		player2.innerHTML = char[0].name;
		p2death = char[0].death;
		p3.src = char[2].img;
		p3health = char[2].health;
		p3.counter = char[2].counter;
		player3.innerHTML = char[2].name;
		p3death = char[2].death;
		p4.src = char[3].img;
		p4health = char[3].health;		
		p4.counter = char[3].counter;
		player4.innerHTML = char[3].name;
		p4death = char[3].death;
		back.src = background;
		$("#attack").css("opacity","1");
		$("#soldier-select").css("width", "800px");
		battleSound.src = battleSelect;
		$("#selection").css("z-index", "-99");
        }, 1000);
	});

	$("#tarma").on("click", function(){
		sound.src = select;
		this.src = tarma.select;
		setTimeout(function() {
		$("#health").css("opacity", "1.0");
		p1.src = char[2].img;
		player1.innerHTML = char[2].name;
		p1health = char[2].health;
		attack = char[2].attack;
		p1death = char[2].death;
		p2.src = char[1].img;
		p2health = char[1].health;
		p2counter = char[1].counter;
		player2.innerHTML = char[1].name;
		p2death = char[1].death;
		p3.src = char[0].img;
		p3health = char[0].health;
		p3.counter = char[0].counter;
		player3.innerHTML = char[0].name;
		p3death = char[0].death;
		p4.src = char[3].img;
		p4health = char[3].health;		
		p4.counter = char[3].counter;
		player4.innerHTML = char[3].name;
		p4death = char[3].death;
		back.src = background;
		$("#attack").css("opacity","1");
		$("#soldier-select").css("width", "800px");
		battleSound.src = battleSelect;
		$("#selection").css("z-index", "-99");
        }, 1000);
	});
	

	$("#fio").on("click", function(){
		sound.src = select;
		this.src = fio.select;
		setTimeout(function() {
		$("#health").css("opacity", "1.0");
		p1.src = char[3].img;
		player1.innerHTML = char[3].name;
		p1health = char[3].health;
		p1death = char[3].death;
		attack = char[3].attack;
		p2.src = char[1].img;
		p2health = char[1].health;
		p2counter = char[1].counter;
		player2.innerHTML = char[1].name;
		p2death = char[1].death;
		p3.src = char[2].img;
		p3health = char[2].health;
		p3.counter = char[2].counter;
		p3death = char[2].death;
		player3.innerHTML = char[2].name;
		p4.src = char[3].img;
		p4health = char[3].health;		
		p4.counter = char[3].counter;
		player4.innerHTML = char[3].name;
		p4death = char[3].death;
		back.src = background;
		$("#attack").css("opacity","1");
		$("#soldier-select").css("width", "800px");
		battleSound.src = battleSelect;
		$("#selection").css("z-index", "-99");
        }, 1000);
	});

	$(".p2").on("click", function(){
		$("#attack").removeClass("disabled");
		$("#attack").addClass("active");

		isActive = true;
		isP2 = true;
		enemy.src = p2.src;
		$("#enemy").css("opacity", 1);
		$("#p2").attr("src", "");
	});

	$(".p3").on("click", function(){
		$("#attack").removeClass("disabled");
		$("#attack").addClass("active");

		isActive = true;
		isP3 = true;
		enemy.src = p3.src;
		$("#enemy").css("opacity", 1);
		$("#p3").attr("src", "");
	});

	$(".p4").on("click", function(){
		$("#attack").removeClass("disabled");
		$("#attack").addClass("active");

		isActive = true;
		isP4 = true;
		enemy.src = p4.src;
		$("#enemy").css("opacity", 1);
		$("#p4").attr("src", "");
	});


	$("#attack").on("click", function(){
		if (isActive && isP2){
			var health = p2health - attack;
			$("#p2health").css("width", health);
			attack *= 2;
			p2health = health;
			var myhealth = p1health - p2counter;
			sound.src = explosion1;
			if (health > 0){
				setTimeout(function(){
				$("#p1health").css("width", myhealth);
				sound.src = explosion2;
				}, 800);
			p1health = myhealth;
			sound.src = explosion2;
			}
			else if (health <=0){
				enemy.src = p2death;
				setTimeout(function(){
					enemy.src = "";
					$("#enemy").css("opacity", 0);
				}, 2500);
				isP2 = false;
				isP2alive = false;
			}
			gameOver();

		}

		if (isActive && isP3){
			var health = p3health - attack;
			$("#p3health").css("width", health);
			attack *= 2;
			p3health = health;
			var myhealth = p1health - p3counter;
			if (health > 0){
				setTimeout(function(){
				$("#p2health").css("width", myhealth);
				sound.src = explosion2;
				}, 800);
			p1health = myhealth;
			sound.src = explosion2;
			}			
			if (health <=0){
				enemy.src = p3death;
				setTimeout(function(){
					enemy.src = "";
					$("#enemy").css("opacity", 0);
				}, 2500);
				isP3 = false;
				isP3alive = false;
			}
			gameOver();
	
			// if (isP2alive == false && isP3alive == false && isP4alive == false){
			// 	setTimeout(function(){
			// 		back.src = complete;
			// 		$("#gameplay").css("opacity",0);
			// 		$("#health").css("opacity",0);
			// }, 1500);
			// }
		}

		if (isActive && isP4){
			var health = p4health - attack;
			$("#p4health").css("width", health);
			attack *= 2;
			p4health = health;
			var myhealth = p1health - p4counter;
			if (health > 0){
				setTimeout(function(){
				$("#p1health").css("width", myhealth);
				sound.src = explosion2;
				}, 800);
			p1health = myhealth;
			}			
			if (health <=0){
				enemy.src = p4death;
				setTimeout(function(){
					enemy.src = "";
					$("#enemy").css("opacity", 0);
				}, 2500);
				isP4 = false;
				isP4alive = false;
			}
						gameOver();	
		}

		if(p1health <= 0){
		setTimeout(function(){
			$("#gameplay").css("opacity",0);
			$("#health").css("opacity",0);
			back.src = gameover;
		    battleSound.src = gameoversong;

		}, 1500);
				setTimeout(function(){
		$(".menu").css("z-index",99);	
		}, 2500);
		}

		else return;
	});

