$(document).ready(function(){
  var audio = false;
  var video = false;

  $("#audioPNG").click(function(){
    if(video){
      video = false;
      audio = true;
      $("#video").css("display", "none");
      $("#audio").css("display", "flex");
      return;
    }
    if(!audio){
      audio = true;
      $("#audio").css("display", "flex");
    } else if(audio){
      audio=false;
      $("#audio").css("display", "none");
    }
  });

  $("#videoPNG").click(function(){
    if(audio){
      audio = false;
      video = true;
      $("#audio").css("display", "none");
      $("#video").css("display", "flex");
      return;
    }
    if(!video){
      video = true;
      $("#video").css("display", "flex");
    }else if(video){
      video=false;
      $("#video").css("display", "none");
    }
  });
  // $("#video").css("display", "flex");
  // $("#video").css("display", "none");
  // $("#audio").css("display", "flex");
  // $("#audio").css("display", "none");


});