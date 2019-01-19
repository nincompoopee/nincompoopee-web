function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
line(220, 100, 450, 100)
  line (450, 100, 500, 500)
  line (500, 500, 100, 500)
  line (100, 500, 100, 180)
  line (220, 100, 200, 180)
  line (200, 180, 100, 180)

  var s = 30
  
  fill (62, 182, 244)
  ellipse (380, 420, s, s)
  
  ellipse (150, 455, 2*s, 2*s)
   
  fill (100, 30, 130)
  textSize (25)
  text ("San Francisco", 210, 50) 
}
