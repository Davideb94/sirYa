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
            			name:"Maaloula,Syria",
            			position:{
            				lat: "33.843760",
            				lng: "36.549163",

            			},
            			time:{
            				start: "15/10/2014",
            				end: "1/11/2014"
            			}
            		},{ name:"Ankara,Turkey",
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
            	};

            	var second = {
            		id: 69,
            		type: "refugee",
            		name: "BisanII",
            		surname: "Roh",
            		birthDate: "14/08/1999",
            		birthPlace: "Aleppo",
            		contacts: {
            			telephone: "+355 0692713555",
            			address: "Via di Novoli 6, Florence, Italy.",
            			email: "BisaIIRoh@gmail.it"
            		},
            		tags: [ "piercing", "paintress","football"],
            		places: [
            		{	
            			name:"Aleppo, Syria",
            			position:{
            				lat: "36.202321",
            				lng: "37.154141"
            			},
            			time:{
            				start: "15/11/2014",
            				end: "1/12/2014"
            			}
            		},{ 
            			name:"Florence,Italy",
            			position:{
            				lat: "43.792588",
            				lng: "11.230480"
            			},
            			time:{
            				start: "3/7/2015",
            				end: "2/12/2015"
            			}
            		}

            		],
            		urlImage: "http://api.ning.com/files/DtcI2O2Ry7A3sJC*20pqDTg-lpa1rqrJKAM0v1BlbUD1hVeD0mHZ*v1HC3voVW-Y4EDvdgRywpDu4goy4eZtCk4W3MLHTWBt/1082135461.jpeg"

            	};
            	var third = {
            		id: 145,
            		type: "refugee",
            		name: "Arxhel",
            		surname: "Sulejmani",
            		birthDate: "17/01/1996",
            		birthPlace: "Damascus",
            		contacts: {
            			telephone: "+339 32555122212",
            			address: "Badensche Str. 555 , Berlin, Deutchland.",
            			email: "arxhelsulejmani96@life.de"
            		},
            		tags: [ "football", "cooker"],
            		places: [
            		{	name:"Damascus,Syria",
            			position:{
            				lat: "34.140638",
            				lng: "36.753715"
            			},
            			time:{
            				start: "15/10/2014",
            				end: "1/11/2014"
            			}
            		},{
            			name:"Tirana,Albania",
            			position:{
            				lat: "41.332524",
            				lng: "19.828637"
            			},
            			time:{
            				start: "2/6/2015",
            				end: "13.340396"
            			}
            		}

            		],
            		urlImage: "http://i.huffpost.com/gen/1746871/thumbs/o-ABDULLAH-DEGHAYES-570.jpg?3"
            	};

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
										name:"Amman,Palestine",
										position:{
											lat: "31.908817",
											lng: "35.952101"
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
											name:"Damascus,Syria",
											position:{
												lat: "33.521195",
												lng: "36.300402"
											},
											time:{
												start: "15/10/2014",
												end: "1/11/2014"
											}
										},{
											name:"Ankara,Turkey",
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
											name:"Maaloula,Syria",
											position:{
												lat: "33.8508639",
												lng: "36.5177259"
											},
											time:{
												start: "15/10/2014",
												end: "1/11/2014"
											}
										},{
											name:"Ankara,Turkey",
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
											name:"Jabadeen,Syria",
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
										name:"Al Qisa,Syria",
										position:{
											lat: "33.491975",
											lng: "36.600324"
										},
										time:{
											start: "15/10/2014",
											end: "1/11/2014"
										}
									}
								]
							}
					],

				};
				var second = {
					user_id: 69,
					matched: [	//careful on what is an ARRAY and what is not.
						{
							search: {	
								id: 355,
								name: "Bisan",
								surname: "Roh",
								birthPlace: "Aleppo",
								tags: [ "engineer"],
								places: [
									{
										name:"Pisa,Italy",
										position:{
											lat: "43.711558",
											lng: "10.402228"
										},
										time:{
											start: "15/10/2015",
											end: "1/11/2015"
										}
									}
								]
							},
							matches:[ 
								{	
									id: 663,
									dateOfMatch: "01/02/2016",
									name: "Bisan",
									surname: "Roh",
									birthDate: "22/1/1968",
									birthPlace: "Aleppo",
									tags: [ "engineer", "mechanical"],
									places: [
										{
											name:"Dresden,Germany",
											position:{
												lat: "51.047133",
												lng: "13.772179"
											},
											time:{
												start: "15/10/2014",
												end: "1/11/2014"
											}
										},{
											name:"Leipzig,Germany",
											position:{
												lat: "51.285565",
												lng: "12.345777"
											},
											time:{
												start: "2/6/2015",
												end: "9/12/2015"
											}
										}
										
									],
									urlImage: "http://www.wazala.org/photos/Syria/Syrian_Man~medium.jpg"
								},{	
									id: 9665,
									dateOfMatch: "02/02/2016",
									name: "Bisan",
									surname: "Roh",
									birthDate: "22/1/1999",
									birthPlace: "Damascus",
									tags: [ "scars", "carpenter"],
									places: [
										{
											name:"Szarvas,Hungary",
											position:{
												lat: "46.8508639",
												lng: "20.5177259"
											},
											time:{
												start: "14/6/2015",
												end: "1/8/2015"
											}
										},
										
									],
									urlImage: "https://vice-images.vice.com/images/articles/crops/2015/10/01/canada-doing-everything-it-can-to-make-it-difficult-for-syrian-refugees-to-come-here-1443719935-crop_mobile.jpg?resize=*:*&output-quality=75"
								},{	
									id: 758,
									dateOfMatch: "02/02/2016",
									name: "BisanI",
									surname: "Roh",
									birthDate: "22/1/1974",
									birthPlace: "Aleppo",
									tags: ["engineer"],
									places: [
										{
											name:"Maaloula,Syria",
											position:{
												lat: "33.8508639",
												lng: "36.5177259"
											},
											time:{
												start: "15/6/2014",
												end: "16/6/2014"
											}
										}
										
									],
									urlImage: "http://www.myrecordjournal.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=ixC5$x_L_NhwA$mFZAHjYM$daE2N3K4ZzOUsqbU5sYuOzSLkziTsftbKhJM5pcjEWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg"
								}
							]
						}

					],
			 				pending: [ 
						
							 {	
								id: 903,
								name: "Esat",
								surname: "Roh",
								birthPlace: "Damascus",
								tags: [ "farmer"],
								places: [
									{
										name:"Warsaw,Polonia",
										position:{
											lat: "52.145244",
											lng: "21.073751"
										},
										time:{
											start: "15/10/2014",
											end: "1/11/2014"
										}
									}
								]
							}
					],

				};
				
				var third = {
					user_id: 145,
					matched: [	//careful on what is an ARRAY and what is not.
						{
							search: {	
								id: ,
								name: "Elsion",
								surname: "Sulejmani",
								birthPlace: "Aleppo",
								tags: [ "pictor"],
								places: [
									{
										name:"Hanover,Germany",
										position:{
												lat: "52.385453",
												lng: "9.733478"
											},
										time:{
												start: "3/10/2014",
												end: "7/10/2014"
											}
									}
								]
							},
							matches:[ 
								{	
									id:144 ,
									dateOfMatch: "01/02/2015",
									name: "Elsion",
									surname: "Sulejmani",
									birthDate: "28/2/1989",
									birthPlace: "Aleppo",
									tags: [ "pictor", "Deejay"],
									places: [
										{
											name:"Hanover,Germany",
											position:{
												lat: "52.385453",
												lng: "9.733478"
											},
											time:{
												start: "3/10/2014",
												end: "7/10/2014"
											}
										},{
											name:"Stuttgart,Germany",
											position:{
												lat: "48.794213",
												lng: "9.190896"
											},
											time:{
												start: "1/11/2014",
												end: "9/11/2014"
											}
										}
										
									],
									urlImage: "http://api.ning.com/files/DtcI2O2Ry7AvX-B8xD-ilJDw*jUzr6RWhfn4DnshfPClr4g*I18Z6QJOTQl4CMdtShwQnETLivWZJmyu5BTZuuGPwcWaM8Dr/1082135390.jpeg"
								},{	
									id: 765,
									dateOfMatch: "02/02/2015",
									name: "Elsion",
									surname: "Sulejmani",
									birthDate: "22/1/2004",
									birthPlace: "Damascus",
									tags: [ "scars", "carpenter"],
									places: [
										{
											name:"Budapest,Hungary",
											position:{
												lat: "47.476859",
												lng: "19.072605"
											},
											time:{
												start: "14/6/2015",
												end: "1/8/2015"
											}
										},
										
									],
									urlImage: "http://cdn1.pri.org/sites/default/files/story/images/MKCoursin_PRI106.jpg"
								},
							]
						}

					],
							pending: [ 
						
							 {	
								id: 875,
								name: "Moulud",
								surname: "Sulejmani",
								birthPlace: "Aleppo",
								tags: [ "translator"],
								places: [
									{
										name:"Aleppo,Syria",
										position:{
											lat: "36.195657",
											lng: "37.142696"
										},
										time:{
											start: "15/7/2014",
											end: "25/7/2014"
										}
									}
								]
							}
					],

				};

        	} 
        });
	
})(window.angular, window._);
