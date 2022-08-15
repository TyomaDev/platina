(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
		$('.open_nav').toggleClass('display-none');
	})
	$('.open_nav>div:nth-child(1n)>a').on('click', function() {
		$('.bar').toggleClass('animate');
		$('.open_nav').toggleClass('display-none');
	})
})();

