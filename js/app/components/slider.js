(function(){
    MTWPApp.controller("SliderController",['$scope','$http',
    function($scope,$http){
        console.log($("mtwp-slider").attr("imageFolder"))
    $http.get(`${$("mtwp-slider").attr("imageFolder")}`).then(function(data){
        $scope.images=[]
        var images=$('a',data.data);
        console.log(images);
        for(var i=0; i<images.length-1;i++){
            if(images[i].innerHTML!=='../'){
                $scope.images.push({
                    name: images[i].innerHTML,
                    src: images[i].href,
                    visible:false
                })
            }
        }
        $scope.currentIndex=0;
        $scope.next=function(){
            $scope.currentIndex < $scope.images.length-1 ? $scope.currentIndex++ : $scope.currentIndex=0;
        }
        $scope.prev=function(){
            $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex=$scope.images.length-1;
        }
        $scope.$watch('currentIndex',function(){
            $scope.images.forEach(function(image){
                image.visible=false;
            })
            
            $scope.images[$scope.currentIndex].visible=true;
        })
    })
    

    
}]).component('mtwpSlider',{
    templateUrl:"slider.html",
    controller: "SliderController",
    binding:{
        imageFolder:"="
    }
})
})()
