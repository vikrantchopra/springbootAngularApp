(function () {
    'use strict';
    
    angular
    .module('hello')
    .controller('HelloController', HelloController);
    
    //HelloController.$inject = ['$http'];
    
    
    
    function HelloController(HelloService) {console.log("Inside Controller");
    	var vm = this;
    	vm.message = getMessage();
    	vm.id = getId();
    	vm.greeting = getGreeting();
    	
    	function getMessage() {
    		HelloService.getMessage().then(function(message) {
    			vm.message = message;
    		})
    	}
    	
    	function getId() {
    		HelloService.getId().then(function(id) {
    			vm.id = id;
    		})
    	}
    	
    	function getGreeting() {
    		HelloService.getGreeting().then(function(greeting) {
    			vm.greeting = greeting;
    		})
    	}
    			
    }
    
})();
