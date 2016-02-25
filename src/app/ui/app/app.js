(function(angular) {
	'use strict';

	/**
	 * ui app module.
	 */
	angular.module('sirya.ui.app', [
			'sirya.ui.app.home'
		])
		.controller('AppCtrl', function($scope, Auth, $state, rest) {
			// if (!Auth.isConnected()) return $state.go('authentication.login');
			var self = this;
			// self.user = sirya.ui.common.services.api.returnUser();
			console.log( rest.getUser() );
		});
})(window.angular);
