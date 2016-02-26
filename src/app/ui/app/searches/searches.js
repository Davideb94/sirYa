(function(angular) {
	'use strict';

	/**
	 * ui app module.
	 */
	angular.module('sirya.ui.app.searches', [])
	.controller('SearchesCtrl', function($scope, rest) {
		var self = this;
        // self.user = sirya.ui.common.services.api.returnUser();
        self.user = rest.getUserWithId();
        self.searches = rest.getSearchesFromUserId();

        console.log( rest.getUserWithId() );
        console.log( rest.getSearchesFromUserId() );
	});
})(window.angular);
