$(document).ready(function(){
  const txt = 
  $(".nav-bar").html(`<a href="index.html">Home</a>
            <div class="dropdown">
                <button class="dropbtn">Projects</button>
                <div class="dropdown-content">
                    <a href="Rhetorical-Analysis.html">Rhetorical Analysis</a>
                    <a href="Artifact.html">Writing Artifact</a>
                    <a href="Research-Paper.html">Research Paper</a>
                </div>
            </div>
            <a href="about.html">About Me</a>
            <div class="mail" style="width:100%; display:flex; justify-content: flex-end;">
                <a href="../index.html"><img style="margin:15px; filter: invert(1);"width="50" height="50" src="files/home.png"></a>
            </div>`)
});

