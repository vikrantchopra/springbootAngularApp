(function () {
    'use strict';

    angular
        .module('hello')
        .service('HelloService', HelloService);

    /*function HelloService($http) {console.log("Inside Service")
    	this.get = function() {console.log("Inside Service get()")
    		return $http.get('http://test-routes.herokuapp.com/test/hello')
    	}
    }*/
    
    function HelloService($http) {
    	var service = {
    			getMessage: getMessage,
    			getId: getId,
    			getGreeting: getGreeting
            };
            return service;
            
            function getMessage() {
			     return $http.get('http://test-routes.herokuapp.com/test/hello')
					.then(function(res) {
						// return the enveloped data
						return res.data.message;
					})
            }
            
            function getId() {
            	return $http.get('/resource')
            			.then(function(res) {
            				return res.data.id;
            			})
            }
            
            function getGreeting() {
            	return $http.get('/resource')
    			.then(function(res) {console.log("Content: " + res.data.content)
    				return res.data.content;
    			})
            }
    }

})();