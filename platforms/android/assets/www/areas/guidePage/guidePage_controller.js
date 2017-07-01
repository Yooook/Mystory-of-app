// 引导页的逻辑
angular.module('guidePage.controller', ['guidePage.service'])
  .controller('GuidePageCtrl', function($scope, GuidePageFty,$state) {
 //  	var mySwiper = new Swiper('.swiper-container', {
	// 	autoplay: 5000,//可选选项，自动滑动
	// })
	     //引导页slide初始化
    var guideSlide = new Swiper('#guideSlide', {
      pagination: '.swiper-pagination',
      onSlideChangeEnd: function(swiper){
        var index = guideSlide.activeIndex+1;
        if(index==2||index==3){
          var item = $("#tips-"+index);
          if(item.hasClass("hidden")){
            item.removeClass("hidden");
            item.addClass("guide-show");
          }
        }
      }
    });

    //跳转到首页面
    document.getElementById("close").addEventListener("click",function(event){

      localStorage["isFirst"]=true;
      $state.go('tab.home');
    },false);

    //跳转到首页面
    //$scope.func_goHome=function(){
    //  $state.go('tab.home');
    //}

  })
