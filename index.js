$(document).ready(function(){
  $(".mail").click(function(){
      $(".contact").slideToggle("slow");
  });

  $("#classBtn").click(function(){
    $("#classes").slideToggle("slow");
  });
});

$(document).ready(function(){
    const canvas = document.getElementById("bg");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const radiusDiv = 100;
    const speed = 0.2;

    let particleArray;

    //get mouse positions
    let mouse = {
        x: null,
        y: null,
        radius: (canvas.height/radiusDiv) * (canvas.width/radiusDiv)
    }

    window.addEventListener('mousemove',
        function (event){
            mouse.x = event.x;
            mouse.y = event.y;
        }
    );

    //particle class
    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#ffb7c5';
            ctx.fill()
        }
        update() {
            if (this.x > canvas.width || this.x < 0){
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0){
                this.directionY = -this.directionY;
            }
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt((dx**2) + (dy**2))
            if (distance < mouse.radius + this.size){
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10){
                    this.x += 10;
                }
                if (mouse.x > this.x && this.x > this.size * 10){
                    this.x -= 10;
                }
                if (mouse.y < this.y && this.x < canvas.height - this.size * 10){
                    this.y += 10;
                }
                if (mouse.y > this.y && this.y > this.size * 10){
                    this.y -= 10;
                }
            }

            this.x += this.directionX * speed;
            this.y += this.directionY * speed;

            this.draw();
        }
    }

    function init(){
        particleArray = [];
        let numberOfParticles = (canvas.height * canvas.width)/ 9000;
        for(let i = 0; i < numberOfParticles; i++){
            let size = (Math.random()*5)+1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 5) - 2.5;
            let directionY = (Math.random() * 5) - 2.5;
            let color = 'white';

            particleArray.push(new Particle(x,y,directionX,directionY,size,color));
        }
    }

    function connect(){
        let opacity = 1;
        for (let a =0;a<particleArray.length;a++){
            for(let b=a;b<particleArray.length;b++){
                let distance = (((particleArray[a].x - particleArray[b].x)**2)
                + ((particleArray[a].y - particleArray[b].y)**2));

                if (distance < (canvas.width/10) * (canvas.height/10)){
                    opacity = 1 - (distance/20000);
                    ctx.strokeStyle = 'rgba(200, 200, 200,' + opacity + ')';
                    ctx.beginPath();
                    ctx.moveTo(particleArray[a].x, particleArray[a].y);
                    ctx.lineTo(particleArray[b].x, particleArray[b].y);
                    ctx.stroke();

                }
            }
        }
    }

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);

        for (let i=0;i<particleArray.length;i++){
            particleArray[i].update();
        }

        connect();

    }

    window.addEventListener('resize',
        function(){
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            mouse.radius = ((canvas.height/radiusDiv) * (canvas.height/radiusDiv));
            init();
        })

    window.addEventListener("mouseout",
        function (){
            mouse.x = undefined;
            mouse.y = undefined;
        })
    init();
    animate();
});