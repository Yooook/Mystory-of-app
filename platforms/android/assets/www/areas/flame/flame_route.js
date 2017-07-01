// 主页路由
angular.module('flame.route', ['flame.controller'])

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('tab.flame', {
        url: '/flame',
        views: {
          'tab-flame': {
              templateUrl: 'areas/flame/flame.html',
              controller: 'FlameCtrl'
          }
        }
      })

  });
