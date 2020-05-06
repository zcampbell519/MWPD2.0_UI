(function(){
    MTWPApp.component("mtwpHeader",{
        templateUrl:"header.html",
        controller: function HeaderController($scope, $location){
            $scope.showmenu=false;

            $scope.$watch(
                function(){$location.path()},
                function(){
                    console.log("path changed");
                    switch($location.path()){
                        case '/':
                            $scope.Home=true;
                            $scope.Ask=false;
                            $scope.Why=false;
                            $scope.Build=false;
                            $scope.About=false;
                            break;
                        case '/about':
                            $scope.Home=false;
                            $scope.Ask=false;
                            $scope.Why=false;
                            $scope.Build=false;
                            $scope.About=true;
                            break;
                        case '/ask':
                            $scope.Home=false;
                            $scope.Ask=true;
                            $scope.Why=false;
                            $scope.Build=false;
                            $scope.About=false;
                            break;
                        case '/why':
                            $scope.Home=false;
                            $scope.Ask=false;
                            $scope.Why=true;
                            $scope.Build=false;
                            $scope.About=false;
                            break;
                        case '/build':
                            $scope.Home=false;
                            $scope.Ask=false;
                            $scope.Why=false;
                            $scope.Build=true;
                            $scope.About=false;
                            break;
                        default:
                            $scope.Home=false;
                            $scope.Ask=false;
                            $scope.Why=false;
                            $scope.Build=false;
                            $scope.About=false;
                            break;
                    }
                }
            )
            
            
        }
    })
})()