const app = angular.module("videoapp",[]);

app.directive("video",function(){
   return{
      
       restrict:"A",
       link:function(scope,element,attrs){
         var vidTag =document.createElement("video");
           vidTag.src = (attrs.video);
           console.log(vidTag);
           element[0].append(vidTag);
           vidTag.setAttribute("controls","");
           //vidTag.setAttribute("width",attrs.width);
           //vidTag.setAttribute("height",attrs.height);
           var currString = attrs.video;
           var currIndex  = currString.indexOf(".");
           var STR=currString.substring(currIndex+1);
           console.log(STR);
           vidTag.setAttribute("type","video/"+STR);
           
                   }
   } 
});