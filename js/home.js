$(document).ready(function(){
  
  "use strict";
  /* start the nav */
  
  $(".nav .links ul li a").on("click",function(){
    
    $("html,body").animate({
    
       scrollTop: $("." + $(this).attr("id")).offset().top + 2,
    
    },1000,function(){
    
     $(this).addClass("active");
    
    });
    
  });
  
   $(window).on("scroll",function(){
   
   $(".body > div").each(function () {
   
   if($(window).scrollTop() > $(this).offset().top)
   {
   	$($(this).data("active")).addClass("active").parent().siblings().find("a").removeClass("active");
   }
   
   });
  
  });
  
  /* end the nav */
  /* start the skills */
  
  $(".skills > div span:last-of-type").each(function () {
  
    $(this).animate({
    
    width: $(this).data("width"),
    
    },1600);
  
  });
  
  /* end the skills */

});