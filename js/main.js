var $win = $(window);
var $homeSection = $('.home-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$homeSection.css('background-position', 'center ' + scrollPos / 2 + 'px');

});



