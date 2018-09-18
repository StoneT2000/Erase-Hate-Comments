var ccanvas;
var cWidth = window.innerWidth;
var cHeight = window.innerHeight;
var cursorcanvas;
var commentscanvas;
var bgcolor = "rgb(250,250,250)";
var cursorImg;
function preload() {
  cursorImg = loadImage('images/icons8-erase.png');
}
function setup() {
  ccanvas = createCanvas(cWidth, cHeight);
  //cursor('images/icons8-erase-80.png')
  ccanvas.parent('ccanvas');
  
  //Create commentscanvas, where all text is put up
  commentscanvas = createGraphics(cWidth, cHeight)
  cursorcanvas = createGraphics(cWidth, cHeight)
  generate_comments(commentscanvas)
}

var erase_point = [[0,0],[0,0]];
var pos = 1;
function draw() {
  background(bgcolor);
  //Have an eraser as a cursor
  //cursorcanvas.clear();
  image(commentscanvas, 0, 0)
  noFill();
  stroke(1);
  image(cursorImg, mouseX - 13,mouseY - 64)
  //ellipse(mouseX+16, mouseY+16, 30, 30)
  if (mouseIsPressed) {
    erase_point[pos] = [mouseX,mouseY]
    if (pos == 1) {
      pos = 0;
    }
    else {
      pos = 1;
    }
    //Erase in line between two points?
    commentscanvas.stroke(bgcolor);
    commentscanvas.strokeWeight(40)
    commentscanvas.line(erase_point[0][0],erase_point[0][1],erase_point[1][0],erase_point[1][1])
  }
  else {
    erase_point[pos] = [mouseX,mouseY]
    if (pos == 1) {
      pos = 0;
    }
    else {
      pos = 1;
    }
  }
  
}

//Generate random comments onto canvas context ctx
function generate_comments(ctx) {
  ctx.noStroke();
  for (var i = 0; i < 10; i++) {
    ctx.textSize(random(10,40));
    var randomWord = hate_comments[floor(random(0,hate_comments.length))];
    ctx.text(randomWord, random(10, cWidth-100), random(10,cHeight-100));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cursorcanvas = createGraphics(cWidth, cHeight)
}

var hate_comments = ['Your content sucks', 'Go away', 'Get a life', 'You suck', 'Hater was here', 'You got played', 'Go somewhere else', 'Trash', 'Peasant', 'Bully', 'Muppet', 'Muggle', 'Haters gonna hate', 'Stop trying', 'Get out', 'Disappointment', 'Try harder', '>:(', 'What a mess', 'Pleb', 'Junk', 'Worthless', 'You are nothing', 'Personality thinner than paper', 'Character weaker than my old man', 'Stop.', '...', 'What the hell is this', 'When will you learn', 'Try something else', 'jeez', 'get gud mate', 'u trash', '💩']