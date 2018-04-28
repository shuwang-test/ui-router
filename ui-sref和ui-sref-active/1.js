angular
	.module('app', ['ui.router'])
	.config(function($locationProvider, $urlRouterProvider, $stateProvider) {
		$locationProvider.hashPrefix('')
		var helloState = {
			name: 'hello',
			url: '/hello',
			template: '<h1>hello</h1>'
		}
		var aboutState = {
			name: 'about',
			url: '/about',
			template: '<h1>about</h1>'
		}
		$stateProvider.state(helloState)
		$stateProvider.state(aboutState)
		$urlRouterProvider.otherwise('hello')
	})
