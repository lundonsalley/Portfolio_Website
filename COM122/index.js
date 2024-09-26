$(document).ready(function(){
  $("#l0").hide();
  
  $("#l0").fadeIn("slow");
  
  var index = 0;
  var lc = 0;
  const lines = [
    "I'm Lundon Salley, and this is my portfolio website for COM122.",
    "My major is Aerospace Engineering on the Astro track, with a minor in robotics.",
    "My end goal is to help design and test rovers for NASA, using my many skillsets to contribute to as many different aspects of the project as I can.",
    "One of my hobbies is coding because I love learning new ways to apply concepts I'm learning about to various confusing and complex scenarios.",
    "From autonomous competition robots to hosting websites to neural networks, I'm here for it."
  ];
  const elements = ["#l1", "#l2", "#l3", "#l4", "#l5"];
  var elem = elements[lc]
  var txt = lines[lc];
  var speed = 30;
  var skipped = false;
  
  function typeWriter(){
    if (skipped == true){
      return;
    }
    if (index < txt.length && $("#l0").css("opacity") == 1){
      $(String(elem)).append(txt.charAt(index));
      index++;
      setTimeout(typeWriter, speed);
    }else if(index!=txt.length){
      setTimeout(typeWriter, speed);
    }else if(index==txt.length && lc < lines.length-1){
      index=0;
      lc++;
      txt=lines[lc];
      elem = elements[lc]
      typeWriter();
    }else if (skipped == false){
      $("#skip").animate({left: '+=70px', opacity: '0'});
    }
  }
  typeWriter();
  
  $("#skip").click(function(){
    skipped = true;
    for (var i=0;i<elements.length;i++){
      $(String(elements[i])).text(String(lines[i]))
    }
    $("#skip").animate({left: '+=70px', opacity: '0'});
    
  });

});

