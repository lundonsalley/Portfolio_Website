const max = 5
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
  if(n>5){
    slideIndex=1, n=1;
  }
  console.log(n)
  console.log(slideIndex)
  for (i=1;i<=max;i++){
    if(i!=(n)){
      $("." + String(i)).css("display", "none");
    }else{
      $("." + String(i)).css("display", "block");
    }
  }

}

document.onclick = function check(e){ 
  switch("none"){
    case $(".1").css("display"):
      $("#vid1").get(0).pause();
    case $(".2").css("display"):
      $('#vid2').get(0).pause();
    case $(".3").css("display"):
      $('#vid3').get(0).pause();
    case $(".4").css("display"):
      $('#vid4').get(0).pause();
    case $(".5").css("display"):
      $('#vid5').get(0).pause();
  }
} 