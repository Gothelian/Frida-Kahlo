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
	
	//ANIMATION
	$('#chat').on('mouseenter', function(){
		$(this).css('background-image','url(images/animation1.gif)');
	}).on('mouseleave',function(){
		$(this).css('background-image','url(images/animation1.png)');
		});

/*	$('#').on('mouseenter', function(){
		$(this).css('background-image','url()');
	}).on('mouseleave',function(){
		$(this).css('background-image','url()');
	});*/
	
	
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
	});
		});


		//JQUERY END

//ANIMATION



var angle = 0;
setInterval(function(){
	angle += 1;
	$(".fleur").css('-webkit-transform', 'rotate('+angle+'deg)')
        		.css('-moz-transform', 'rotate('+angle+'deg)')
        		.css('-ms-transform', 'rotate('+angle+'deg)');
}, 25);