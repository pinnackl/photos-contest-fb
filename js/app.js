(function (window, document) {
	'use strict';
	var app = document.querySelector('#app');
		app.verbose = true;

	if (app.verbose)
		console.info("Loading App");

	// Sets app default base URL
	app.baseUrl = '/';
	if (window.location.port === '') {  // if production
		// Uncomment app.baseURL below and
		// set app.baseURL to '/your-pathname/' if running from folder in production
		app.baseUrl = '/';
	}

	// Listen for template bound event to know when bindings
	// have resolved and content has been stamped to the page
	app.addEventListener('dom-change', function() {
		console.log('Our app is ready to rock!');
	});

	window.addEventListener('WebComponentsReady', function(e) {
		if (app.verbose) {
			console.log("  ________________________________________    ");
			console.log("/ The current running aplication is in     \\ ");
			console.log("\\ verbose mode.                            / ");
			console.log("  ----------------------------------------    ");
			console.log("         \\   ^__^                            ");
			console.log("          \\  (oo)\\_______                   ");
			console.log("             (__)\\       )\\/\\              ");
			console.log("                 ||----w |                    ");
			console.log("                 ||     ||                    ");
		}
	});

	// Scroll page to top and expand header
	// app.scrollPageToTop = function() {
	// 	// FIXME : Need to scroll top on page change
	// };

	// app.closeDrawer = function() {
	// 	app.$.paperDrawerPanel.closeDrawer();
	// };
})(window, document);