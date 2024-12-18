$(document).ready(function(){
    const canvas = document.getElementById("cherry-blossoms");
    const ctx = canvas.getContext("2d");
    const branch1 = document.getElementById("branch1");
    const branch2 = document.getElementById("branch2");
    const blossom = document.getElementById("blossom");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particleArray;

    var tic = 0;
    var dir = 1;



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
            ctx.fillStyle = this.color;
            ctx.fill()
        }
        update() {
            if (this.x > canvas.width || this.x < 0){
                this.directionX = -this.directionX;
            }

            this.x += this.directionX/4;
            this.y += this.directionY/4;

            this.draw();
        }
    }

    function init(){
        particleArray = [];
        let numberOfParticles = (canvas.height * canvas.width)/ 50000;
        for(let i = 0; i < numberOfParticles; i++){
            addNew();
        }
    }

    function addNew(){
        let size = (Math.random()*5)+1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = 0;
        let directionX = (Math.random() * 3) - 1.5;
        let directionY = (Math.random() * 5);
        let color = '#ffb7c5';
        particleArray.push(new Particle(x,y,directionX,directionY,size,color))
    }

    function drawBranch1(image, x, y, theta){
        var TO_RADIANS = Math.PI/180; 
        var size = 300;
        ctx.save();
        ctx.translate(x,y);
        ctx.rotate(theta * TO_RADIANS)
        ctx.drawImage(image, 0, -size, -size, size);
        ctx.restore();
    }

    function drawBranch2(image, x, y, theta){
        var TO_RADIANS = Math.PI/180; 
        var size = 250;
        ctx.save();
        ctx.translate(x,y);
        ctx.rotate(theta * TO_RADIANS)
        ctx.drawImage(image, -0, -size, size, size);
        ctx.restore();
        ctx.save();
        ctx.translate(x,y);
        ctx.rotate((theta + 100*Math.tanh(theta/45)) * TO_RADIANS)
        ctx.drawImage(image, -0, -size, size, size);
        ctx.restore();
        ctx.save();
        ctx.translate(x,y);
        ctx.rotate((theta - 110*Math.tanh(theta/45)) * TO_RADIANS)
        ctx.drawImage(image, -0, -size, size, size);
        ctx.restore();
    }

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);

        if (Math.floor(Math.random() * 200) === 1){
                    addNew();
                }

        for (let i=0;i<particleArray.length;i++){
            particleArray[i].update();
        }
        
        if(Math.abs(tic) >= 100){
            dir *= -1;
        }
        tic+=dir;
        
        dang = 2*Math.tanh(tic/50);
        bang = 1.7*Math.tanh(tic/60);
        drawBranch1(branch1, canvas.width+50, 185, dang-30);
        drawBranch2(branch2, -30, canvas.height, dang+10);
        

    }

    window.addEventListener('mousemove',
            function(){
                if (Math.floor(Math.random() * 7) === 1){
                    addNew();
                }
            }
        )

    window.addEventListener('resize',
        function(){
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            init();
    });

    


    init();
    animate();
});
