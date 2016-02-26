(function (angular) { 'use strict';

  /**
   * Services Module.
   */

  var module = angular.module('sirya.ui.common.services', []);

  module.service( 'MapManager', function($rootScope){
  	var self = this;
  	self.maps = {};

	self.initPlatform = function(){
		self.platform = new H.service.Platform({
			app_id: 'liAZSQ5xRMA53r02qXJL',
			app_code: 'ws_4Eaq5WZxH4irVuIKDIQ',
			useCIT: true,
			useHTTPS: true
		});
	}

  	self.initService = function(){
  		self.initPlatform();

  	}
	self.initService();



  	// self.test = function(){
  	// 	return	"loooool";
  	// }

  	self.createGroup = function( map_id ){
  		self.markersGroup[ map_id ] = new H.map.Group();
  		self.maps[ map_id ].addObject(group);
  	}



  	self.createMap = function( map_id ){


		var defaultLayers = self.platform.createDefaultLayers();

		// self.maps.push( new H.Map( document.getElementById( 'map'+id ), defaultLayers.normal.map ) );
		self.maps[ map_id ] =  new H.Map( document.getElementById( 'map' + map_id ), defaultLayers.normal.map ) ;


		self.maps[ map_id ].behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents( self.maps[ map_id ] ));
		self.maps[ map_id ].setCenter( { lat: "33.8508639" , lng: "36.5177259" } , false);
		self.maps[ map_id ].setZoom( 6, false );

		// self.ui = H.ui.UI.createDefault(self.map, defaultLayers);

	}

	self.addMarkers = function( map_id , positions){

	}

	self.addMarker = function( map_id ){

	}




  });


})(window.angular);



