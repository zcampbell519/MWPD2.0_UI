(function(){
    MTWPApp.service("ImagesService",function($http){
        return {
            getImages: function(){
                return $http.get('/images/buildslider')
            }
        }
    })
})