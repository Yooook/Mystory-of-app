// 路由模块
angular.module('route', ['guidePage.route','home.route','tabs.route','mime.route','flame.route','topic.route'])

.config(function($stateProvider, $urlRouterProvider) {
  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/home');
  $urlRouterProvider.otherwise('/guidePage');

});
