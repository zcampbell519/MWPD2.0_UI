(function(){
    MTWPApp.component("mtwpContent",{
        controller:function(){
            console.log(this.page)
        },
        bindings:{
            page: '<'
        },
        
        templateUrl: "'"+this.page+"'"
        //template:'<h1>page</h1>'
    })
})()