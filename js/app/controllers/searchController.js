function SearchController($scope){  
    console.log("It's running")
    // TODO: Get from API: 
        $scope.SearchParams={
            Products:{
                BuildingMaterials:{
                    DisplayName:"Building and Industrial Materials",
                    SearchIsVisible: false,
                    Items: [
                        "Dimensional Lumber",
                        "Engineered Studs",
                        "Plywood",
                        "Beams and timbers",
                        "Trusses",
                        "Cross-laminated timber",
                        "Siding",
                        "Glulams",
                        "Siding",
                        "Log homes and roundwood",
                        "Pulp Chips"
                    ],
                    SelectedItems:[]
                },
                Interior:{
                    DisplayName:"Interior Products",
                    SearchIsVisible: false,
                    Items: [
                        "Cabinets and Countertops",
                        "Doors and Windows",
                        "Flooring",
                        "Moulding and Millwork",
                        "Furniture",
                        "Particleboard"
                    ],
                    SelectedItems:[]
                },
                Outdoor:{
                    DisplayName:"Outdoor Living/Landscape",
                    SearchIsVisible: false,
                    Items: [
                        "Cedar Items",
                        "Decking",
                        "Fencing",
                        "Posts, Poles and Rails",
                        "Bark and Mulch",
                        "Compost and Soil Amendments",
                        "Erosion Control",
                        "Animal Bedding"
                                
                    ],
                    SelectedItems:[]
                },
                Energy:{
                    DisplayName:"Energy/Fuelwood",
                    SearchIsVisible: false,
                    Items: [
                        "Pellets",
                        "Firewood",
                        "Firelogs",
                        "Chips",
                        "BBQ Items"
                    ],
                    SelectedItems:[]
                },
                Other:{
                    DisplayName:"Other Woodcraft",
                    SearchIsVisible:false,
                    Items: [
                        "Specialty (incl:arts, crafts, musical, toys, etc.)",
                        "Signs",
                        "Sporting Goods"
                    ],
                    SelectedItems:[]
                }
            },
            Advanced:{
                Species:{
                    DisplayName:"Woodtype and Species",
                    SearchIsVisible:false,
                    Items: [
                        "Beatle Kill/Blue Stain",
                        "Cedar",
                        "Fir",
                        "Larch",
                        "Pine",
                        "Spruce",
                        "Hardwoods",
                        "Urban Tree Wood",
                        "Reclaimed/Salvaged Wood",
                        "Recycled Content"
                    ],
                    SelectedItems:[]
                },
                Certified:{
                    DisplayName:"Certification and Sustainable Product",
                    SearchIsVisible: false,
                    Items: [
                        "Forest Stewardship Council"
                    ],
                    SelectedItems:[]
                }
            },
            Facilities:{
                SearchString:""
            }
        }

        // updates the selected items
        $scope.UpdateSelectedItems=function($event, product, selectedItems){
            
            var element = angular.element($event.currentTarget);
            if(element[0].checked){
                selectedItems.push(product);
            }else{
                selectedItems=selectedItems.filter(p=>p!==product);
            }
            console.log(selectedItems);
            
        }

        $scope.Clear=function(){
            $scope.SearchParams.Products.forEach(object => {
                object.SelectedItems=[]
            });
            $scope.SearchParams.Advanced.forEach(object=>{
                object.SelectedItems=[];
            });
            $scope.SearchParams.Facilities.SearchString="";
        }

        $scope.Submit=function(){
            console.log($scope.SearchParams)
        }

}