//Stretchy Navigation --- START

jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}
		//Stretchy Navigation --- END
		//Deplacement Bus
	$(window).scroll(function() {
		$('#bus').css('left', (($('html').scrollTop()/$(document).height())*100-25)+"%");
	});
		//Deplacement Tramway
	$(window).scroll(function() {
		$('#tramway').css('right', (($('html').scrollTop()/$(document).height())*100-50)+"%");
	});
		//Accueil animation
	$('#page1').hide();
	$('#portrait').on("click", function(){
		$('#accueil').fadeOut();
		$('#intro').fadeIn()
				   .css('max-height', '200%');
		$('#intro *').show();
	});

	$('#intro').on("click", function(){
		$('#intro *').hide();
		$('#intro').fadeOut()
				   .css('max-height','0%');
		$('#accueil').fadeIn();
	})
		});


		//JQUERY END

var angle = 0;
setInterval(function(){
	angle += 1;
	$(".fleur").css('-webkit-transform', 'rotate('+angle+'deg)')
        		.css('-moz-transform', 'rotate('+angle+'deg)')
        		.css('-ms-transform', 'rotate('+angle+'deg)');
}, 25);