const max = 3
let slideIndex = 1;

$(document).ready(function(){
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  
  if(n<1){
    slideIndex=max, n=max;
  }
  if(n>max){
    slideIndex=1, n=1;
  }
  for (i=1;i<=max;i++){
    if(i!=(n)){
      $("." + String(i)).css("display", "none");
    }else{
      $("." + String(i)).css("display", "block");
    }
  }

}