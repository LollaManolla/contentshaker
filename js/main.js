//navigation
$(document).ready(function () {
	//Navigation
	// on click open
	$('.hamburger').click(function () {
		$( ".hamburger" ).hide();
		$( ".cross" ).show();
		$( "body" ).addClass('body-menu-open');
		$( ".b-header" ).addClass('menu-open');
		$('.b-header__menuwrapper').slideToggle('slow');
	});
	// on click close
	$('.cross').click(function () {
		$( ".hamburger" ).show();
		$( ".cross" ).hide();
		$( "body" ).removeClass('body-menu-open');
		$( ".b-header" ).removeClass('menu-open');
		$('.b-header__menuwrapper').slideToggle('slow');
	});



	//end navigation

	//load more
	$( ".c-btn-loadmore" ).click(function() {
		$( "#loadmore" ).slideToggle( "slow", function() {
		});
	});




	//equal heights
	/* Thanks to CSS Tricks for pointing out this bit of jQuery
	http://css-tricks.com/equal-height-blocks-in-rows/
	It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

	equalheight = function(container){

		var currentTallest = 0,
		currentRowStart = 0,
		rowDivs = new Array(),
		$el,
		topPosition = 0;
		$(container).each(function() {

			$el = $(this);
			$($el).height('auto')
			topPostion = $el.position().top;

			if (currentRowStart != topPostion) {
				for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {
				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}

	$(window).load(function() {
		equalheight('.b-list .article .article-title');
	});

	$(window).resize(function(){
		equalheight('.b-list .article .article-title');
	});

	////reload page so JS menu can work
	$(window).bind('resize', function(e)
	{
		if (window.RT) clearTimeout(window.RT);
		window.RT = setTimeout(function()
		{
			this.location.reload(false); // false to get page from cache
		}, 100);
	});

});
