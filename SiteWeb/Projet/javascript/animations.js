$(document).ready(function() {
    $("li.menu").hover(function() {
        $(this).css('background-color', '#759DB8');
    }, function() {
        $(this).css('background-color', '#757A8A');
    })
	$("li.menu a").hover(function() {
		$(this).css('color','gold');
    }, function() {
		$(this).css('color','white');
    })
	$("div#images img").mouseover(function(){
		$(this).animate({width: '+=200'});
	});
	$("div#images img").mouseout(function(){
		$(this).animate({width: '-=200'});
	});
	$("textarea#chat").bind("DOMSubtreeModified",function(){
		$("textarea#chat").css('backgroundColor', 'white');
		$("textarea#chat").animate({backgroundColor: 'rgb(235, 235, 228)'}, 500);
	});
	$( "li.LIdata" ).hover(function() {
		$( this ).append( $( "<img src='../img/profil.png' class='img'/>" ) );
	}, function() {
		$( this ).find( "img:last" ).remove();
	});
});