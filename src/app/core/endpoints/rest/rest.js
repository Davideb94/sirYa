(function (angular, _) { 'use strict';

    /**
     * Rest service.
     */
    angular.module('sirya.core.endpoints.rest', [])
        .service('rest', function ($rootScope) {
            var rest = this;
            rest.getUser = function(){
            	return {	
            		id: 66,
            		type: "refugee",
            		name: "Allah",
            		surname: "Abdullah",
            		birthDate: "22/1/2000",
            		birthPlace: "Damascus",
            		contacts: {
            			telephone: "+34657158008",
            			address: "Calle Canalejas 74, Seville, Spain. Ring at 2 izq.",
            			email: "allah@notinmyname.org"
            		},
            		tags: [ "tattoo", "woodmaker"],
            		places: [
            		{
            			position:{
            				lat: "33.8508639",
            				lng: "36.5177259"
            			},
            			time:{
            				start: "15/10/2014",
            				end: "1/11/2014"
            			}
            		},{
            			position:{
            				lat: "39.9966035",
            				lng: "32.8177151"
            			},
            			time:{
            				start: "2/6/2015",
            				end: "9/12/2015"
            			}
            		}

            		],
            		urlImage: "http://static01.mediaite.com/med/wp-content/uploads/2011/05/Picture-39.png"
            	}

        	}
        });
})(window.angular, window._);
