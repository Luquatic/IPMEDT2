var timeline="";
var i=1;

$(document).ready(function()
{
	main();
	getPercentageSite();
	ouders();
	raceBtn();
	popupKarten();
});

function main()
{
	$("#autoF1").css("display","none");
	$("#circlesContainer").css("display","none");
	window.addEventListener('scroll', function()
	{
		var posAuto = $('#auto').offset().top;
		var posF1 =$('#autoF1').offset().top;

		var posAuto2 = $('#autoHidden1').offset().top;
		var posAuto1 = $('#autoHidden2').offset().top;

		var icon1 = $('#icon1').offset().top;
		var icon2 = $('#icon2').offset().top;
		var icon3 = $('#icon3').offset().top;
		var icon4 = $('#icon4').offset().top;
		var finishLijn = $('.finishLijn').offset().top;



				if (posAuto<posAuto1){

			$('#innerContainer').css("position","absolute");
			$('#TLContentContainer').css("left","30%");
			TLContentContainer
			console.log("onder auto");

			$('#auto').css("opacity","0");
			$('#autoHidden2').css("opacity","100");


		}
		if(posAuto>posAuto1 && posF1<posAuto2){
			$('#auto').css("opacity","100");
			$('#autoHidden2').css("opacity","100");
			$('#innerContainer').css("position","fixed");
			$('#innerContainer').css("top","0%");
			$("#TLContentContainer").css("left","3%");
			$('#autoHidden1').css("opacity", "0");
			$('#autoHidden2').css("opacity", "0");
			$('#autoF1').css("opacity", "100");


		}

		if(posAuto<posAuto2){
			$('#autoF1').css("opacity","100");



		}
		if(posAuto>posAuto1){


		}



		if(posF1>posAuto2 ){

			$('#autoF1').css("opacity", "0");
			$('#auto').css("opacity", "0");
			$('#autoHidden1').css("opacity", "100");
			$('#innerContainer').css("position", "absolute");
			$('#TLContentContainer').css("left","30%");
			$('#innerContainer').css("top", "2900%");
		}
		if(posAuto<posAuto2){
			//$('#auto').css("opacity", "100");

		//	$("#innerContainer").css("position","fixed");
			//$("#innerContainer").css("top","0%");


		}


		if(posAuto<icon1)
		{
			timeline="normal";
			$("#tekstContainer").css("display", "none");

			$('#autoF1').css("opacity","0");
			$('#icon11').css("opacity", "0");
			$('#icon1').css("opacity", "100");

			$('#popupOuders').css("display", "none");
            $('#popupKarten').css("display", "none");
			$('#popupF3').css("display", "none");
			$('#popupF1').css("display", "none");

		}

		//OUDERS
		if (posAuto>icon1 && posAuto<icon2)
		{
			timeline="normal";
			$("#lijntjesContainer").hide();
			$("#pageOuders").css("display", "block");
			$("#tekstContainer").css("display", "block");
			$(".icon").css("width","350px");

			$('#autoF1').css("opacity","0");
			$('#icon31').css("opacity", "0");
			$('#icon3').css("opacity", "100");
			$('#icon21').css("opacity", "0");
			$('#icon2').css("opacity", "100");
			$('#icon11').css("opacity", "100");
			$('#icon1').css("opacity", "0");

			$('#popupOuders').css("display", "block");
            $('#popupKarten').css("display", "none");

		}

		//KARTEN

		if (posAuto>icon2 && posAuto<icon3 )
		{
			timeline="kart";
			$('#autoF1').css("opacity","0");
			$("#autoF1").css("opacity","0");
			$("#lijntjesContainer").show();
			$("#kartVullijn").show();
			$("#pageOuders").css("display", "none");
			$('#icon31').css("opacity", "0");
			$('#icon3').css("opacity", "100");
			$('#icon2').css("opacity", "0");
			$('#icon21').css("opacity", "100");

			$('#popupOuders').css("display", "none");
            $('#popupKarten').css("display", "block");
			$('#popupF3').css("display", "none");

		}

		//F3
		if(posAuto>icon3 &&posAuto<icon4)
		{
			scrollF3();
			$("#auto").css("opacity","0");
			$("#autoF1").fadeIn();
			timeline="normal";
			$("#arrowDown").show();
			$("#lijntjesContainer").hide();
			$("#kartVullijn").hide();
			//$('#auto').css("top", "-100%");
			//$('#autoF1').css("top", 0);
			$('#circlesContainer').css("display", "none");
			$('#F1Container').css("display", "none");

			$('#icon4').css("opacity", "100");
			$('#icon41').css("opacity", "0");
			$('#icon31').css("opacity", "100");
			$('#icon3').css("opacity", "0");

			$('#popupF3').css("display", "block");
      $('#popupKarten').css("display", "none");
			$('#popupF1').css("display", "none");


		}

		//F1
		if(posAuto>icon4)
		{
			timeline="customFinish";
			$("#auto").css("opacity","0");
			$("#autoF1").fadeIn();
		   $('#icon4').css("opacity", "0");
		   $('#icon41').css("opacity", "100");
		   $("#TLContent").css("top", '-20%');
		   $("#F1Container").css("display", 'block');
		   $("#circlesContainer").css("display","block");
		   $('#deelPagina2').css("display", "block");

			$('#popupF3').css("display", "none");
			$('#popupF1').css("display", "block");

		}
		if(posAuto>finishLijn){
			$('#deelPagina2').css("display", "none");
			$('.titel').css("display", "none");
			$('#popupF1').css("display", "none");
		}






		//Normale tijdlijn
		if (timeline=="normal"){
			initTimelineNormal();
		}

		// Kart tijdlijn
		if(timeline=="kart"){
		initTimelineKart()
		}

		//Kleine aanpassingen tijdlijn  finish

		if(timeline=="customFinish"){
		initTimelineNormal();
		customTimelineFinish();
		}
	});
}

function initTimelineNormal(){
	var clickCounter=0;

	fillLineNormal();
	$("#TLImage1").css("top", '20%');
	$("#TLImage2").css("top", '40%');
	$("#TLImage3").css("top", '60%');
	$("#TLImage4").css("top", '80%');
	$("#TLImage5").css("top", '100%');
	$( "#arrowUp").off( "click" );
	$("#TLContent").css("top" ,"0%");

	$("#arrowDown").click(function(){
		$("#TLContent").css("top" ,"-20%");
		clickCounter=1;

		if (clickCounter==1){
		$("#arrowUp").click(function(){
			$("#TLContent").css("top","0%");
			});
		}
	});

}

function initTimelineKart(){

	fillLineKart();
	$("#TLImage1").css("top", '-10%');
	$("#TLImage2").css("top", '10%');
	$("#TLImage3").css("top", '90%');
	$("#TLImage4").css("top", '110%');
	$("#TLImage5").css("top", '130%');
	$("#vullijn").css("height", "10%");
	$("#TLContent").css("top", '0%');

	$("#arrowUp").click(function(){
		$("#TLContent").css("top", '20%');
	});

	$("#arrowDown").click(function(){
		$("#TLContent").css("top", '-40%');
	});

}

function customTimelineFinish(){
	$("#TLContent").css("top", '-20%');
	$('#arrowUp').click(function(){
		$("#TLContent").css("top" ,"0%");
	});

	$('#arrowDown').click(function(){
		$("#TLContent").css("top" ,"-20%");
	});
}

function scrollF3()
{
	var perc = 2;
	var begin = $('#auto').offset().top;
	var eind = $('#icon4').offset().top;
	perc = ((begin / eind) * 100) - 75;

	if(perc < 4)
	{
		$("#formule3").css("position", "absolute");
		$("#formule3").css("width", "100%");
		$("#formule3").css("top", perc + "%");
	}

	if(perc > 4 && perc < 21)
	{
		$("#formule3").css("position", "fixed");
		$("#formule3").css("width", "50%");
		$("#formule3").css("top", perc + 5 + "%");
		$("#blokkenContainer").show();
	}

	if(perc > 21)
	{
		$("#formule3").css("position", "absolute");
		$("#formule3").css("width", "100%");
		$("#formule3").css("top", perc + 63 + "%");
	}

	if(perc > 22)
	{
		$("#formule3").css("position", "absolute");
		$("#formule3").css("width", "100%");
		$("#formule3").css("top", 85 + "%");
		$("#blokkenContainer").hide();
	}
}

function fillLineKart()
{
	$(document).on('scroll', function()
	{
		var percentage = 0;
		var Beginpos= $('#auto').offset().top;
	 	var Eindpos= $('#icon3').offset().top;
		var getPercentage = function()
		{
			percentage = ((Beginpos / Eindpos) * 100 - 67) * 3;

			if(percentage < 13)
			{
				$("#blok1 > h1").text("2006");
				$("#blok1 > p").text("Op 8 jarige leeftijd deed Max mee aan de Miniklasse van het Belgisch kampioenschap. Hij werd kampioen door alle 21 races te winnen.");
				$("#blok1").css("display", "inline-block");
				$("#blok1").css({"border": "4px solid #AF4040", "background": "rgba(30, 30, 30, 0.7)"});
			}

			if(percentage > 13 && percentage < 26)
			{
				$("#blok2 > h1").text("2007");
				$("#blok2 > p").text("In 2007 won hij twee kampioenschappen, zowel in België als in Nederland. In België reed hij een hogere klasse dan het jaar daarvoor.");
				$("#blok1").css("display", "inline-block");
				$("#blok2").css("display", "inline-block");
				$("#blok2").css({"border": "4px solid #AF4040", "background": "rgba(30, 30, 30, 0.7)"});
			}

			if(percentage > 26 && percentage < 39)
			{
				$("#blok3 > h1").text("2008");
				$("#blok3 > p").text("In 2008 kwam hij uit in drie kampioenschappen. Opnieuw in de Rotax Mini Max klasse won hij 16 van de 18 races.");
				$("#blok3").css("display", "inline-block");
				$("#blok3").css({"border": "4px solid #AF4040", "background": "rgba(30, 30, 30, 0.7)"});
			}

			if(percentage > 39 && percentage < 52)
			{
				$("#blok4 > h1").text("2009");
				$("#blok4 > p").text("Vanwege zijn leeftijd kwam hij in 2009 noodgedwongen weer in dezelfde kampioenschappen uit als in 2008 en won ze allemaal.");
				$("#blok4").css("display", "inline-block");
				$("#blok4").css({"border": "4px solid #AF4040", "background": "rgba(30, 30, 30, 0.7)"});
			}

			if(percentage > 52 && percentage < 65)
			{
				$("#blok1 > h1").text("2010");
				$("#blok1 > p").text("In 2010 was Max oud genoeg om uit te komen in de KF3-klasse. Door heel Europa deed hij mee aan diverse kampioenschappen.");
				$("#blok1").css("display", "inline-block");
				$("#blok1").css({"border": "4px solid #7070AF", "background": "rgba(30, 30, 30, 0.8)"});
			}

			if(percentage > 65 && percentage < 78)
			{
				$("#blok2 > h1").text("2011");
				$("#blok2 > p").text("Dezelfde klasse werd gereden in 2011. Hoewel hij een weekend van de WSK Euro Series miste vanwege een blessure, schreef hij het op zijn naam.");
				$("#blok2").css("display", "inline-block");
				$("#blok2").css({"border": "4px solid #7070AF", "background": "rgba(30, 30, 30, 0.8)"});
			}

			if(percentage > 78 && percentage < 87)
			{
				$("#blok3 > h1").text("2012");
				$("#blok3 > p").text("Max begon dit jaar in de KF2-klasse en mocht later meedoen aan de hoogste klasse in het karten: de KF1.");
				$("#blok3").css("display", "inline-block");
				$("#blok3").css({"border": "4px solid #7070AF", "background": "rgba(30, 30, 30, 0.8)"});
			}

			if(percentage > 87)
			{
				$("#blok4 > h1").text("2013");
				$("#blok4 > p").text("Het jaar 2013 was voor Max de grootste in zijn kart carieëre. Hij werd kampioen in alle kartkampioenschappen waar hij aan meedeed, waaronder wereldkampioen.");
				$("#blok4").css("display", "inline-block");
				$("#blok4").css({"border": "4px solid #7070AF", "background": "rgba(30, 30, 30, 0.8)"});
			}
			console.log(percentage);
			return percentage + "%";
		}
		$("#kartVullijn").css("height", getPercentage());
	});
}

function popupKarten() {


		$("#popupKarten > h2").text("2006");
        $("#popupKarten > p").text("Op 8 jarige leeftijd deed Max mee aan de Miniklasse van het Belgisch kampioenschap. Hij werd kampioen door alle 21 races te winnen.");
        $("#vorigeBtn").css("display", "none");





        $("#volgendeBtn").click(function(){
            i++;

            console.log("i=="+i);


	 if (i == 2) {
        $("#popupKarten > h2").text("2007");
        $("#popupKarten > p").text("In 2007 won hij twee kampioenschappen, zowel in België als in Nederland. In België reed hij een hogere klasse dan het jaar daarvoor.");
        $("#vorigeBtn").css("display", "block");

		$("#vorigeBtn").click(function(){
		$("#popupKarten > h2").text("2006");
        $("#popupKarten > p").text("Op 8 jarige leeftijd deed Max mee aan de Miniklasse van het Belgisch kampioenschap. Hij werd kampioen door alle 21 races te winnen.");
        $("#vorigeBtn").css("display", "none");

		});

    }

    if (i == 3) {
        $("#popupKarten > h2").text("2008");
        $("#popupKarten > p").text("In 2008 kwam hij uit in drie kampioenschappen. Opnieuw in de Rotax Mini Max klasse won hij 16 van de 18 races.");

		$("#vorigeBtn").click(function(){
        $("#popupKarten > h2").text("2007");
        $("#popupKarten > p").text("In 2007 won hij twee kampioenschappen, zowel in België als in Nederland. In België reed hij een hogere klasse dan het jaar daarvoor.");
        $("#vorigeBtn").css("display", "block");

		});

    }

    if (i == 4) {
        $("#popupKarten > h2").text("2009");
        $("#popupKarten > p").text("Vanwege zijn leeftijd kwam hij in 2009 noodgedwongen weer in dezelfde kampioenschappen uit als in 2008 en won ze allemaal.");

		$("#vorigeBtn").click(function(){
       $("#popupKarten > h2").text("2008");
        $("#popupKarten > p").text("In 2008 kwam hij uit in drie kampioenschappen. Opnieuw in de Rotax Mini Max klasse won hij 16 van de 18 races.");
        $("#vorigeBtn").css("display", "block");

		});

    }

    if (i == 5) {
        $("#popupKarten > h2").text("2010");
        $("#popupKarten > p").text("In 2010 was Max oud genoeg om uit te komen in de KF3-klasse. Door heel Europa deed hij mee aan diverse kampioenschappen.");

		$("#vorigeBtn").click(function(){
		$("#popupKarten > h2").text("2009");
        $("#popupKarten > p").text("Vanwege zijn leeftijd kwam hij in 2009 noodgedwongen weer in dezelfde kampioenschappen uit als in 2008 en won ze allemaal.");

		});

    }

    if (i == 6) {
        $("#popupKarten > h2").text("2011");
        $("#popupKarten > p").text("Dezelfde klasse werd gereden in 2011. Hoewel hij een weekend van de WSK Euro Series miste vanwege een blessure, schreef hij het op zijn naam.");

		$("#vorigeBtn").click(function(){
  $("#popupKarten > h2").text("2010");
        $("#popupKarten > p").text("In 2010 was Max oud genoeg om uit te komen in de KF3-klasse. Door heel Europa deed hij mee aan diverse kampioenschappen.");
		});
    }

    if (i == 7) {
        $("#popupKarten > h2").text("2012");
        $("#popupKarten > p").text("Max begon dit jaar in de KF2-klasse en mocht later meedoen aan de hoogste klasse in het karten: de KF1.");

        		$("#vorigeBtn").click(function(){
        $("#popupKarten > h2").text("2011");
        $("#popupKarten > p").text("Dezelfde klasse werd gereden in 2011. Hoewel hij een weekend van de WSK Euro Series miste vanwege een blessure, schreef hij het op zijn naam.");
		});

    }

    if (i == 8) {
        $("#popupKarten > h2").text("2013");
        $("#popupKarten > p").text("Het jaar 2013 was voor Max de grootste in zijn kart carieëre. Hij werd kampioen in alle kartkampioenschappen waar hij aan meedeed, waaronder wereldkampioen.");

        $("#volgendeBtn").css("display", "none");
    }
        });


}
function fillLineNormal(){
	$(document).on('scroll', function()
	{
		var curPos= $('#auto').offset().top;
		var maxPos= $('.finishLijn').offset().top;
		var getPercentage = function()
		{
			var percentage= (curPos/maxPos) * 100;


			if (percentage>90){
				$("#txtContainer1").css("top", "-80%");
				$("#txtContainer2").css("top", "-75%");
				$(".circle1").css("background-color","lightgrey");
				$(".circle2").css("background-color","black");
				$(".titel").css("display","block");

			}
			else{
				$("#txtContainer1").css("top", "27%");
				$("#txtContainer2").css("top", "20%");
				$(".circle1").css("background-color","black");
				$(".circle2").css("background-color","lightgrey");

			}
	return percentage + "%";
		}
		$("#vullijn").css("height", getPercentage() );
	});

}
function scroll2(){


	$("#F1Container").on('wheel', function(e) {


		var delta = e.originalEvent.deltaY;

		if (delta > 0) {

			$("#deelPagina2").css("top", "-33%");
			$("#deelPagina1").css("top", "-33%");

			$(".circle1").css("background-color","lightgrey");
			$(".circle2").css("background-color","black");
		}
		else{
			$("#deelPagina2").css("top", "0%");
			$("#deelPagina1").css("top", "0%");
			$(".circle1").css("background-color","black");
			$(".circle2").css("background-color","lightgrey");

		}
	});
}


function scroll(){
	var counter=0;
	$("#F1Container").on('wheel', function(e) {

	var delta = e.originalEvent.deltaY;

	if (delta > 0) {

		counter=1;
		if (counter==1){
			$("#deelPagina2").css("top", "-33%");
			$("#deelPagina1").css("top", "-33%");

			$(".circle1").css("background-color","lightgrey");
			$(".circle2").css("background-color","black");
			if (delta>0){
			counter=2;


			}
		}
		if(counter==2){

			if (delta>0){

			}

		}
		if(delta<0){

			$("#deelPagina2").css("top", "0%");
			$("#deelPagina1").css("top", "0%");

		}

	}
	});
}

function getPercentageSite(){

	var getMax = function(){
		return $("#pageIntrofilmpje").height() ;
    }

    var getValue = function(){
        return $(window).scrollTop();
    }

  $(document).on('scroll', function(){
	var getPercentageAuto = function()
	{
		var percentage= (getValue()/getMax()) * 100;

		if(percentage > 98 && percentage < 100 && $("#myVideo").get(0).paused)
		{
			$("#myVideo")[0].play();
		}

		if(percentage < 50 || percentage > 150)
		{
			$("#myVideo")[0].pause();
		}

		if (percentage >100){
			$("#homePage").css("display","none");
			$("#homePage").css("background-color","white");
		}
		if (percentage <100){
			$("#homePage").css("display","block");
			$("#homePage").css("background-color","");
		};
		if(percentage>200){
			$("#auto").css("position","fixed");

		}
		if(percentage<200) {
		//	$("#auto").css("position","absolute");
			$("#innerContainer").css("position","absolute");
			$("#TLContentContainer").css("left","30%");


		}
		return percentage + "%";
	}
	//Als ik de deze log weghaalt doet die het niet meer,weet niet waarom?
	console.log("percentage is"+getPercentageAuto());
	resize();
  });
}

$(window).resize(function()
{
	resize();

});

function resize()
{

	$("#auto").css("left", (($(window).width() - $("#auto").width()) * 0.75-12));
	$("#auto").css("top", (($(window).height() - $("#auto").width()) /2));
	$("#autoF1").css("left", (($(window).width() - 200) * 0.75));
	$("#autoF1").css("top", (($(window).height() - 466) /2));


	//$("#autoHidden2").css("top", (($('#pageRacebaan').height() - $("#autoHidden1").width()) /2));
}

function ouders () {

	var josImg = 1;
	var sophieHover = 1;
	var josHover = 1;

	$("#sophieImgDiv").click(function() {
		if (josImg == 1) {
			$("#sophieImgDiv").css("width", '23%');
			$("#josImgDiv").css("width", '13%');
			$("#josImgDiv").css("position", 'relative');
			$("#josImgDiv").css("right", '2%');
			$("#tekstJos").css("display", 'none');
			$("#tekstSophie").css("display", 'block');
			josImg = 2;
			josHover = 2;
			sophieHover = 2;
			$(this).removeClass('imageBigger');
		}
	});

	$("#sophieImgDiv").hover(function() {
		if (sophieHover == 1) {
			$(this).toggleClass("imageBigger");
		}
	});

	$("#josImgDiv").click(function() {
		if (josImg == 2) {
			$("#josImgDiv").css("width", '30%');
			$("#sophieImgDiv").css("width", '10%');
			$("#sophieImgDiv").css("position", 'relative');
			$("#sophieImgDiv").css("right", '8%');
			$("#tekstSophie").css("display", 'none');
			$("#tekstJos").css("display", 'block');
			josImg = 1;
			josHover = 1
			sophieHover = 1;
			$(this).removeClass('imageBiggerJos');
		}
	});

	$("#josImgDiv").hover(function() {
		if (josHover == 2) {
			$(this).toggleClass("imageBiggerJos");
		}
	});
}

function raceBtn() {
	$(".raceBtn").click(function() {
		$(this).parent('.popup').toggleClass("closePopup");
		console.log('test');
	});
}
