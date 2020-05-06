(function(){
    MTWPApp.directive('slider',function($timeout){
        return {
            replace: true,
            scope: {
                images: '='
            },
            link: function(scope, elem, attrs) {},
            templateUrl: 'templates/slider.html'
        }
    })
})()