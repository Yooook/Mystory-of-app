// 引导页功能
angular.module('home.controller', ['home.service'])
  .controller('HomeCtrl', function($scope, GuidePageFty,HomeFty,$window,$state,$stateParams,$ionicLoading) {

    // getHeaderSliderData();

    $scope.$on('$ionicView.afterEnter', function(e) {
      // initHeaderSlide();
      goTop();
    });


    // 头部滚动条数据
  // function getHeaderSliderData() {
  //     // $scope.headerSlideData = [
  //     //   {
  //     //     alt:' 这里是第一页',
  //     //     src:'./img/home/home-headerSlide-1.jpg'
  //     //   },
  //     //   {
  //     //     alt:' 这里是第一页',
  //     //     src:'./img/home/home-headerSlide-2.jpg'
  //     //   },
  //     //   {
  //     //     alt:' 这里是第一页',
  //     //     src:'./img/home/home-headerSlide-3.jpg'
  //     //   }
  //     // ]
  //   }

    // 初始化头部滚动条
    // function initHeaderSlide(){
    //   var headerSwiper = new Swiper('#headerSlider', {
    //     paginationClickable: true,
    //     autoplay: 2000,
    //     autoplayDisableOnInteraction: false,
    //     loop: true,
    //     // 如果需要分页器
    //     pagination: '.swiper-pagination',
    //     // 改变自动更新
    //     observer:true,
    //     observeParents:true
    //   });
    // }

    // 初始化京东头条滚动条
    // function initToutiaoSlide(){
    //   var toutiaoSwiper = new Swiper('#toutiaoSlider', {
    //     direction:'vertical',
    //     autoplay: 2000,
    //     loop: true
    //   });
    // }


    //回到顶部
    function goTop(){
      var bg=window.document.getElementById('home-content');
      var goTop = document.querySelector(".back_top");

      bg.addEventListener('scroll',function(){
        var top = bg.scrollTop;
        if(top>200){
          goTop.style.opacity = 1;
        }else{
          goTop.style.opacity = 0;
        }
      },false);

      goTop.onclick = function(){
        bg.scrollTop = 0;
      }
    };

        $scope.$on('$ionicView.afterEnter', function (e) {
           initTouTiaoSlide();
      });
      function initTouTiaoSlide() {
        var mySwiper = new Swiper('.swiper-container', {
        direction:'vertical',
          autoplay:2000,
          loop:true
      })
      }
       // 列表数据
    $scope.obj_goodsListData=[];
    $scope.pms_isMoreItemsAvailable=true;
    // 分页查询对象
    $scope.obj_pagingInfo = {
      amountMax: "",
      amountMin: "",
      billNum: "",
      createUser: "",
      dateFrom: "",
      dateTo: "",
      deptID: "",
      deptName: "",
      keyWord: "",
      loginName: "",
      billType: "",
      pageNum: 1,
      pageSize: 5,
      sortFlag: "0",
      sortType: "desc",
      typeNumber:""
    };


    // 事件监听
    $scope.$on('$ionicView.beforeEnter', function (e) {
      $scope.func_refreshGoodsList();
    });

    // 获取最新数据方法
    $scope.func_refreshGoodsList=function(){
      $scope.pms_isMoreItemsAvailable=true;
      $scope.obj_pagingInfo.pageNum=1;
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      var message=JSON.stringify($scope.obj_pagingInfo);
      // 通过方法获取promise对象
      var promise=HomeFty.refreshGoodsList(message);
      // 通过then方法触发状态监听
      promise.then(
        function(data){
          if(data==null){
            $scope.pms_isMoreItemsAvailable=false;
          }else {
            $scope.obj_goodsListData=data;
          }
        },
        function(reason){
        }
      ).finally(function(){
        // 停止广播ion-refresher
        $scope.$broadcast('scroll.refreshComplete');
      });
    }

    // 加载更多数据方法
    $scope.func_loadMoreGoodsList=function(){
      $ionicLoading.show({
        template: "加载中..."
      });


      $scope.obj_pagingInfo.pageNum=$scope.obj_pagingInfo.pageNum+1;
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      var message=JSON.stringify($scope.obj_pagingInfo);
      console.log(message);
      // 通过方法获取promise对象
      var promise=HomeFty.loadMoreGoodsList();
      // 通过then方法触发状态监听
      promise.then(
        function(data){
          if($scope.obj_pagingInfo.pageNum==4){
            $scope.pms_isMoreItemsAvailable=false;
          }
          if(data==null){
            $scope.pms_isMoreItemsAvailable=false;
          }else {
            $.each(data,function(i,item){
              $scope.obj_goodsListData.push(item);
              console.log(item);
            })
          }
        },
        function(reason){
        }
      ).finally(function(){
        $scope.$broadcast('scroll.infiniteScrollComplete');
        setTimeout(function(){
          $ionicLoading.hide();
        },1000)

      });
    }
  })

