// 主页的逻辑
angular.module('topic.controller', ['topic.service'])
  .controller('TopicCtrl', function($scope, TopicFty,$state) {
  	
  	// 暴露数据函数
  	getHeaderSliderData();
  	 // 监听视图完全加载之后的事件
    $scope.$on('$ionicView.afterEnter', function (e) {
      initHeaderSlide();
    });
  	function getHeaderSliderData() {
  		$scope.headerSlideData = [
  			{
  				alt:' 这里是第一页',
  				src:'./img/mime/bg1.png'
  			},
  			{
  				alt:' 这里是第一页',
  				src:'./img/mime/bg22.png'
  			},
  			{
  				alt:' 这里是第一页',
  				src:'./img/mime/bg21.png'
  			}
  		]
  	}
  	function initHeaderSlide() {
  		var headerSwiper = new Swiper('#headerSlider',{
  			 slidesPerView: 1,
		     paginationClickable: true,
		     centeredSlides: true,
		     autoplay: 2000,
		     autoplayDisableOnInteraction: false,
		     loop: true,
		     // 如果需要分页器
		     pagination: '.swiper-pagination',
		     // 改变自动更新
		     observer:true,
		     observeParents:true

  		});
  	}
  })
