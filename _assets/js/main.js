// general js for the project that wouldn't be a reuseable component

$(window).on('scroll', function () {


	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  //console.log(isFirefox);

    var pixs = $(document).scrollTop(),
    pixs = pixs / 100,
    offset = 600,
    range = 100,
    calc = 1 - (pixs )/10;
      //console.log(pixs);
/**/
	if(isFirefox === false){

		$(".bv-banner-out").css({"-webkit-filter": "blur("+pixs+"px)","filter": "blur("+pixs+"px)","opacity": calc });

  }  else  { $(".bv-banner-out").css({"opacity": calc });}
});



/*
document.getElementById('bv-pin1').addEventListener('mouseover', function(){
    console.log('mouseover wird ausgeführt');
});
*/
var i;
var j;
var index_highest = 0;

var pins = ['genuss', 'natur', 'abenteuer', 'kultur'];
var coll = document.getElementsByClassName("bv-toggle");
var coll1 = document.getElementsByClassName("marker--genuss");
var coll2 = document.getElementsByClassName("marker--natur");
var coll3 = document.getElementsByClassName("marker--abenteuer");
var coll4 = document.getElementsByClassName("marker--kultur");


//console.log(coll.length);

/*

for (j = 0; j < 4; j++) {


	var elem+pins[j] = marker+j;

console.log(elem+pins[j]]);


	//pins[j] = document.getElementById('bv-pin'+j);
	//coll[j] = document.getElementById('bv-pin'+j);

	pins[j].addEventListener("click", function(){

		console.log('bv-pin'+j);

		for (var i = 1; i < coll[j].length; i++) {
				//pins[j].addEventListener("click", function(){});
				console.log(i);
			}
	});
}*/
/**/
document.getElementById('bv-pin1').addEventListener("click", function(){

	//console.log(zindex);
for (i = 1; i <= coll1.length; i++) {
	//var zindex = document.getElementById('genuss'+i).style.getPropertyValue("z-index");
  var elemGenuss = document.getElementById('genuss'+i);

  if (elemGenuss.style.display === "none") {
      elemGenuss.style.display = "block";
			elemGenuss.style.zIndex = 20+i;
			this.classList.add('bv-toggle-active');


    } else {
      elemGenuss.style.display = "none";
			elemGenuss.style.zIndex = 5;
			this.classList.remove('bv-toggle-active');

    }
  }
});


document.getElementById('bv-pin2').addEventListener("click", function(){

for (i = 1; i <= coll2.length; i++) {

  var elemNatur = document.getElementById('natur'+i);

  if (elemNatur.style.display === "none") {
      elemNatur.style.display = "block";
			this.classList.add('bv-toggle-active');

    } else {
      elemNatur.style.display = "none";
			this.classList.remove('bv-toggle-active');
    }
  }
});

document.getElementById('bv-pin3').addEventListener("click", function(){

for (i = 1; i <= coll3.length; i++) {

  var elemAbenteuer = document.getElementById('abenteuer'+i);


  if (elemAbenteuer.style.display === "none") {
      elemAbenteuer.style.display = "block";
			this.classList.add('bv-toggle-active');

    } else {
      elemAbenteuer.style.display = "none";
			this.classList.remove('bv-toggle-active');

    }
  }
});

document.getElementById('bv-pin4').addEventListener("click", function(){

for (i = 1; i <= coll4.length; i++) {

  var elemKultur = document.getElementById('kultur'+i);

  if (elemKultur.style.display === "none") {
      elemKultur.style.display = "block";
			this.classList.add('bv-toggle-active');
    } else {
      elemKultur.style.display = "none";
			this.classList.remove('bv-toggle-active');
    }
  }
});



//var index_highest = 0;
// more effective to have a class for the div you want to search and
// pass that to your selector
$("#genuss1,#genuss2,#genuss3,#genuss4").each(function() {
		// always use a radix when using parseInt
		var index_current = parseInt($(this).css("zIndex"), 10);
		if(index_current > index_highest) {
				index_highest = index_current;
		}
		console.log(index_current);
});

$("#natur1,#natur2,#natur3,#natur4").each(function() {
		// always use a radix when using parseInt
		var index_current = parseInt($(this).css("zIndex"), 10);
		if(index_current > index_highest) {
				index_highest = index_current;
		}
		console.log(index_current);
});

$("#abenteuer1,#abenteuer2,#abenteuer3").each(function() {
		// always use a radix when using parseInt
		var index_current = parseInt($(this).css("zIndex"), 10);
		if(index_current > index_highest) {
				index_highest = index_current;
		}
		console.log(index_current);
});

$("#kultur1,#kultur2,#kultur3").each(function() {
		// always use a radix when using parseInt
		var index_current = parseInt($(this).css("zIndex"), 10);
		if(index_current > index_highest) {
				index_highest = index_current;
		}
		console.log(index_current);
});
