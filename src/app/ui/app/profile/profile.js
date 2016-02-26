(function(angular) {
	'use strict';

	/**
	 * ui app module.
	 */
	angular.module('sirya.ui.app.profile', [])
	.controller('ProfileCtrl', function($scope, rest) {
		var self = this;
        
        self.user = rest.getUserWithId();
        self.searches = rest.getSearchesFromUserId();
        
        
	});
})(window.angular);
