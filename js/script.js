/*menu móvel*/
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
/*redes sociais móveis*/
$(function(){
  var flag=0;
  
  $('.share').on('click',function(){
   if(flag == 0)
    {
      $(this).siblings('.one').animate({
      top:'208px',
      left:'50%',
    },200);
    
     $(this).siblings('.two').delay(200).animate({
      top:'260px',
      left:'30%'
    },200);
    
     $(this).siblings('.three').delay(300).animate({
      top:'260px',
      left:'70%'
    },200);
              
    $('.one i,.two i, .three i').delay(500).fadeIn(200);  
      flag = 1;
    }
    
    
  else{
    $('.one, .two, .three').animate({
        top:'300px',
        left:'90%'
      },200);
      
  $('.one i,.two i, .three i').delay(500).fadeOut(200);
      flag = 0;
    }
  });
});