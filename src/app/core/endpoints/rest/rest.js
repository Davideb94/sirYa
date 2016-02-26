(function (angular, _) { 'use strict';

    /**
     * Rest service.
     */
  
    angular.module('sirya.core.endpoints.rest', [])
        .service('rest', function ($rootScope) {
            var rest = this;
            rest.getUserWithId = function( id ){
            	return {	
            		id: 65,
            		type: "refugee",
            		name: "Mohammed",
            		surname: "Dalef",
            		birthDate: "10/5/2002",
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

        	};
        	rest.getSearchesFromUserId = function( id ){
        		return {
					user_id: 65,
					matched: [	//careful on what is an ARRAY and what is not.
						{
							search: {	
								id: 902,
								name: "Allah",
								surname: "Abdullah",
								birthPlace: "Damascus",
								tags: [ "woodmaker"],
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
									}
								]
							},
							matches:[ 
								{	
									id: 66,
									dateOfMatch: "01/02/2016",
									name: "Allah",
									surname: "Abdullah",
									birthDate: "22/1/2000",
									birthPlace: "Damascus",
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
								},{	
									id: 67,
									dateOfMatch: "02/02/2016",
									name: "Allah",
									surname: "Abdullahh",
									birthDate: "22/1/1999",
									birthPlace: "Damascus",
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
								},{	
									id: 68,
									dateOfMatch: "01/02/2016",
									name: "Alllah",
									surname: "Abdullah",
									birthDate: "22/1/1980",
									birthPlace: "Damascus",
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
										}
										
									],
									urlImage: "http://static01.mediaite.com/med/wp-content/uploads/2011/05/Picture-39.png"
								}
							]
						}

					],
					pending: [ 
						
							 {	
								id: 903,
								name: "Rafik",
								surname: "Abdullah",
								birthPlace: "Damascus",
								tags: [ "farmer"],
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
									}
								]
							}
					],

				}
        	} 
        });
})(window.angular, window._);
