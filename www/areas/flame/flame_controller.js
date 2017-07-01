// 主页的逻辑
angular.module('flame.controller', ['flame.service'])
  .controller('FlameCtrl', function($scope, FlameFty,$state,$stateParams,$ionicLoading) {
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
      var promise=FlameFty.refreshGoodsList(message);
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
        template: "正在载入数据，请稍后..."
      });


      $scope.obj_pagingInfo.pageNum=$scope.obj_pagingInfo.pageNum+1;
      $scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
      var message=JSON.stringify($scope.obj_pagingInfo);
      console.log(message);
      // 通过方法获取promise对象
      var promise=FlameFty.loadMoreGoodsList();
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
