  var battleSound = document.getElementById("battlenoise")
  var sound = document.getElementById("back-noise");
  var back = document.getElementById("soldier-select");  
  var chosenPlayer = "";
  var chosenEnemy = "";
  var attack;
  var p1health;
  var p2health;
  var p3health;
  var p4health;
  // var p1 = {};
  // var p2 = {};
  // var p3 = {};
  // var p4 = {};
  var isActive;
  var enemyHealth;
  var enemyCounter;

	function restart(){

	}

	function attack(){
	  $("#enemy-bar").css("width", enemyHp);
      $("#my-bar").css("width", myHp);
	}

	function layout(){}

	$("#marco").on("click", function(){
		sound.src = select;
		this.src = marco.select;
		setTimeout(function() {
		$("#health").css("opacity", "1.0");
		p1.src = marco.img;
		p1health = marco.health;
		attack = marco.attack;
		p2.src = eri.img;
		p2health = eri.health;
		p3.src = tarma.img;
		p3health = tarma.health;
		p4.src = fio.img;
		p4health = fio.health;		
		// Object.assign(p1, marco);

		// Object.assign(p2, eri);

		// Object.assign(p3, tarma);

		// Object.assign(p4, fio);
		console.log(p4.attack);
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
		p1.src = eri.img;
		p2.src = marco.img;
		p3.src = tarma.img;
		p4.src = fio.img;
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
		p1.src = tarma.img;
		p1health = tarma.health;
		p2.src = eri.img;
		p2health = eri.health;
		p3.src = marco.img;
		p3health = marco.health;
		p4.src = fio.img;
		p4health = fio.health;
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
		p1.src = fio.img;
		p1health = fio.health;
		p2.src = eri.img;
		p2health = eri.health;
		p3.src = tarma.img;
		p3health = tarma.health;
		p4.src = marco.img;
		p4health = marco.health;
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
	});

	$(".p3").on("click", function(){
		$("#attack").removeClass("disabled");
		$("#attack").addClass("active");
		isActive = true;
	});

	$(".p4").on("click", function(){
		$("#attack").removeClass("disabled");
		$("#attack").addClass("active");
		isActive = true;
	});


	$("#attack").on("click", function(){
		if (isActive){
			;
		}

		else return;
	});
