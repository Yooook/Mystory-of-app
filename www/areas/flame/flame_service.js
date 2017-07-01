// =主页的服务
angular.module('flame.service', [])
  .factory('FlameFty', function($http,$q) {
     return {
      // 刷新列表商品列表
      refreshGoodsList: function (message) {
        var obj_goodsListData = [
          {
            title: '分手了，怎么办？',
            src: './img/mime/12.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '什么是幸福？',
            src: './img/mime/13.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '怎么找话题和男朋友沟通啊',
            src: './img/mime/14.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '分手后如何正确挽回 ',
            src: './img/mime/18.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '求好人指导，我不知道我怎么办了',
            src: './img/mime/17.jpg',
            author: '小花',
            time: '2014-4-5',
          }
        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;
      },
      //下拉加载更多列表商品列表
      loadMoreGoodsList: function (message) {
        var obj_goodsListData =  [
          {
            title: '怎么维护自己的爱情 ',
            src: './img/mime/16.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '遇到这样的男人我该怎么办，求分析',
            src: './img/mime/12.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '至于吗23333',
            src: './img/mime/15.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '十年浪荡，回首情场生涯！ ',
            src: './img/mime/13.jpg',
            author: '小花',
            time: '2014-4-5',
          },
           {
            title: '男朋友生日送啥礼物呢 ',
            src: './img/mime/14.jpg',
            author: '小花',
            time: '2014-4-5',
          },

        ];

        var deferred = $q.defer();
        deferred.resolve(obj_goodsListData);
        return deferred.promise;
      },
      testPromise:function(){

        console.log("5");
        // 首先要定义一个延迟对象
        var deferred = $q.defer();
        // 模拟异步请求访问
        setTimeout(function(){
          console.log("6");
          deferred.resolve("abv");
        },5000);
        // 返回promise对象
        return deferred.promise;
      },
      getAllData:function(){
        console.log("这是getAllData方法");

        // $http的get请求
        $http.get("localhost:8081/areas/78").success(function(data,status,headers,config){

          }).error(function(reason,status,headers,config){

          });

        // $http的post请求
        $http.post("localhost:8081/areas",{typeNumber:10004}).success(function(data,status,headers,config){

        }).error(function(reason,status,headers,config){

        });

        // $http的跨域请求访问
        var obj={
          a:1,
          b:2
        }
        // 将对象转换成字符串
        var pms=JSON.stringify(obj);
        // 拼接数据请求访问地址
        var url=Global.SERVER_PATH+"/areas?message=pms&callback=JSON_CALLBACK";
        // 通过jsonp方式进行跨域访问
        $http.jsonp(url).success(function(data,status,headers,config){

        }).error(function(reason,status,headers,config){

        });


        // 普通jquery的写法
        //$.get("localhost:8081/areas/78",function(result){
        //
        //})
        //$.post("localhost:8081/areas/78",{},function(){
        //
        //})

      },
      deleteById:function(){
        console.log("这是deleteById方法");
      }
    };
  });
