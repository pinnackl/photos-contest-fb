/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    app.baseUrl = '/nimda/';
  }

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
    app.set('storageName', "app-admin-storage");
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    // FIXME : Need to scroll top on page change
  };

  app.closeDrawer = function() {
    // app.$.paperDrawerPanel.closeDrawer();
  };

  app.loginSuccess = function (e) {
    console.log(e.detail);
  }

  app.loginCancel = function (e) {
  }

  app.appLogout = function (e) {
    FB.logout(function(response) {
      app.$.loginbtn1.disabled = false;
    });
  }

  window.addEventListener('fb-ready', function () {
    // console.log(app.$.loginbtn1);
    // app.$.loginbtn1.apiLoaded = true;
  });

  window.addEventListener('fb-role-login-success', function () {
    app.route = 'home';
    // if (app.route == 'home') {
    //   app.$.data.userLocation = [app.$.data.location, 'options', 'contests'].join('/');
    // }
  });

  window.addEventListener('fb-not-connected', function () {
    app.$.defaultPage.hidden = false;
    app.route = 'login';
  });

  window.addEventListener('fb-login-aborded', function () {
    app.$.defaultPage.hidden = false;
    app.route = 'no-right';
    app.$.loginbtn1.disabled = true;
    app.$.toast.text = 'You must be logged as administrator to see this page.';
    app.$.toast.show();
  });

})(document);
