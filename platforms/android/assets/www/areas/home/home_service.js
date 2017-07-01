// =主页的服务
angular.module('home.service', [])
  .factory('HomeFty', function($http,$q) {
    return {
      // 刷新列表商品列表
      refreshGoodsList: function (message) {
        var obj_goodsListData = [
          {
            name: 'Finch',
            src: './img/mime/avater.jpg',
            image:'./img/mime/12.jpg',
            time: 'November 05, 1955',
            like:'32',
            comments:'42',
            discribe:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item. . .'
          },
           {
            name: '- 阿雷丸号',
            src: './img/mime/avater1.jpg',
            image:'./img/mime/13.jpg',
            time: 'January  08, 1955',
            like:'52',
            comments:'14',
            discribe:' 原来所有的执著不过是自己的固执，伤感的旋律是在内心响起，断线的风筝仍要躲避大风，记忆的已深深埋在心里挥之不去. . .'
          },
           {
            name: '稚始稚終つ',
            src: './img/mime/avater2.jpg',
            image:'./img/mime/17.jpg',
            time: 'April 05, 1955',
            like:'332',
            comments:'24',
            discribe:'我不会说好听话，也不想多做挽留。如果想走，那么你随意，我敬你一杯，无我一身轻. . .'
          },
           {
           name: '时光蹉跎',
            src: './img/mime/avater3.jpg',
            image:'./img/mime/15.jpg',
            time: 'July 05, 1955',
            like:'342',
            comments:'45',
            discribe:'想念一个人的感觉，就像飞鸟渴望深海里的鱼，近在咫尺却遥不可及. . .'
          },
           {
            name: '我活得很好',
            src: './img/mime/avater4.jpg',
            image:'./img/mime/13.jpg',
            time: 'November 05, 1955',
            like:'33',
            comments:'1',
            discribe:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item. . .'
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
            name: '回首 泪依旧',
            src: './img/mime/avater5.jpg',
            image:'./img/mime/12.jpg',
            time: 'bruary 05, 1955',
            like:'32',
            comments:'4',
            discribe:'Miracles sometimes occur, but one has to work terribly for them. （ C. Weizmann ）. . .'
          },
           {
           name: '永恒的希翼︶',
            src: './img/mime/avater6.jpg',
            image:'./img/mime/13.jpg',
            time: 'November 05, 1955',
            like:'32',
            comments:'4',
            discribe:'A friend in need is a friend indeed患难见真情. . .'
          },
           {
            name: '时尚先生Esquire 潇洒小姐',
            src: './img/mime/avater.jpg',
            image:'./img/mime/14.jpg',
            time: 'bruary 05, 1955',
            like:'32',
            comments:'4',
            discribe:'If you do not learn to think when you are young, you may never learn如果你年轻时不学会思考，那就永远不会。. . .'
          },
           {
            name: '不⒉之言',
            src: './img/mime/avater7.jpg',
            image:'./img/mime/17.jpg',
            time: 'November 05, 1955',
            like:'32',
            comments:'4',
            discribe:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item. . .'
          },
           {
            name: '小明同学',
            src: './img/mime/avater8.jpg',
            image:'./img/mime/15.jpg',
            time: 'January  05, 1955',
            like:'32',
            comments:'4',
            discribe:'If there were less sympathy in the world, there would be less trouble in the world. . .'
          },
           {
            name: '゛浅时光 -',
            src: './img/mime/avater9.jpg',
            image:'./img/mime/16.jpg',
            time: 'November 05, 1955',
            like:'32',
            comments:'4',
            discribe:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item. . .'
          }

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
