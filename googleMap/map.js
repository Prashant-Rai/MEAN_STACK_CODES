const app = angular.module("mapapp",[]);

/*app.directive("mapScript",function(){
   return{
       restrict:"E",
       link:function(scope,element,attrs){
           
            var script = document.createElement("script");
           script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
           element[0].append(script);
           
           var script = document.createElement("script");
           script.src = "http://maps.google.com/maps/api/js";
           element[0].append(script);
           
           
           
            var script = document.createElement("script");
           script.src = "https://cdn.jsdelivr.net/gmap3/7.2.0/gmap3.min.js";
           element[0].append(script);
           console.log(element[0]);
           
       }
     } 
});*/
app.directive("ngMap",function(){
   return{

       restrict: "A",
       link:function(scope,element,attrs){
            element.css({ 'height': '650px', 'width': '100%'});
           
           element[0].classList.add("map");
            $('.map')
      .gmap3({
        center:[25.433992, 83.600229],
        zoom:14
      })
      .marker([
        {position:[25.433992, 83.600229]},
      ])
      .on('click', function (marker) {
        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
      });
       }
   } 
});