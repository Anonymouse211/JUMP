var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(237,41,57);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(62,103,206);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(102,153,102);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(255,204,0);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background(rgb(33,41,48));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = rgb(237,41,57);
        music.play();
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb(62,103,206);
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = rgb(102,153,102);
    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = rgb(255,204,0);
    }

    drawSprites();
}
