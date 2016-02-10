(function (window, document) {
	'use strict';
	var app = document.querySelector('#app');
		app.verbose = false;

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
		app.set('storageName', "app-storage");
	});

	// window.addEventListener('WebComponentsReady', function(e) {
	// 	if (app.verbose) {
	// 		console.log("  ________________________________________    ");
	// 		console.log("/ The current running aplication is in     \\ ");
	// 		console.log("\\ verbose mode.                            / ");
	// 		console.log("  ----------------------------------------    ");
	// 		console.log("         \\   ^__^                            ");
	// 		console.log("          \\  (oo)\\_______                   ");
	// 		console.log("             (__)\\       )\\/\\              ");
	// 		console.log("                 ||----w |                    ");
	// 		console.log("                 ||     ||                    ");
	// 	}
	// });

	document.addEventListener('updateShowcase',function(data){
	  document.querySelector('participant-showcase').participant = data.detail;
	})

	document.addEventListener('changePage',function(data){
	  document.querySelector("neon-animated-pages").selected = (data.detail == "participantShowcase") ? "participantShowcase" : "participantProfile";
	  if(data.detail == "participantProfile"){
	  	document.querySelector('participant-profile').location = [document.querySelector('participant-profile').storage.firebase, 'users'].join('/');
	  }
	})

	// Scroll page to top and expand header
	// app.scrollPageToTop = function() {
	// 	// FIXME : Need to scroll top on page change
	// };

	// app.closeDrawer = function() {
	// 	app.$.paperDrawerPanel.closeDrawer();
	// };
})(window, document);