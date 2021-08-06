var canvas = new fabric.Canvas('myCanvas')
block_img_width = 30;
block_img_height = 30;
player_x = 10;
player_y = 10;

var player_object="";
var block_img_object="";

function plyer_update(){
 fabric.Image.fromURL("https://lh3.googleusercontent.com/proxy/Jiaq-H0bO-E1hrh_-NLwECodzyAsuLwZ-zO_8VLrdrmw3R5qLBFun-2evXu-NZf1H_6y0i65TyZ8ITyAe4ey1_AmhfpAwV-unRQGZmqlqsjwhU5DVtfg-6ZC33QnDBahRD3K-aq2uj6UsR0zETvzjcSIBfxYfhGHxC-jNDE",function(img){
  player_object=img;
  
  player_object.scaleToWidth(150);
  player_object.scaleToHeight(140);
  player_object.set({
   top:player_y,
   left:player_x
  });
  canvas.add(player_object);
  
 });
}

function new_img(get_img){
 fabric.Image.fromURL(get_img,function(img){
  block_img_object = img;
  
  block_img_object.scaleToWidth(block_img_width);
  block_img_object.scaleToHeight(block_img_height);
  block_img_object.set({
   top:player_y,
   left:player_x
  });
  canvas.add(block_img_object);
  
 });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
 var keypressed = e.keyCode;
 console.log(keypressed);
 if(e.shiftKey == true&& keypressed == '80'){
  console.log("p and shift");
  block_img_width = block_img_width+10;
  block_img_height = block_img_height+10;
  document.getElementById("current-width").innerHTML= block_img_width;
  document.getElementById("current-height").innerHTML= block_img_height;
 }
 if(e.shiftKey && keypressed == '77'){
    console.log("m and shift");
    block_img_width= block_img_width- 10;
    block_img_height= block_img_height-10;
    document.getElementById("current-width").innerHTML= block_img_width;
    document.getElementById("current-height").innerHTML= block_img_height;
    }
 if(keypressed=='38'){
    up();
    }
 if(keypressed=='40'){
    down();
    }
 if(keypressed=='37'){
    left();
    }
 if(keypressed=='39'){
    right();
    }
 if(keypressed=='82'){//r
    new_img('https://plainbackground.com/plain1024/ff2800.png');
    }
 if(keypressed=='71'){//g
    new_img('https://plainbackground.com/plain1024/ff8b00.png');
    }
 if(keypressed=='89'){//y
    new_img('https://plainbackground.com/plain1024/fff600.png');
    }
 if(keypressed=='80'){//p
    new_img('https://plainbackground.com/plain1024/8bbe3d.png');
    }
 if(keypressed=='66'){//b
    new_img('https://plainbackground.com/plain1024/0078d7.png');
    }
 if(keypressed=='81'){//q
    new_img('https://plainbackground.com/plain1024/6f00ff.png');
    }
 if(keypressed=='83'){//s
  new_img('https://plainbackground.com/plain1024/9f89d1.png');
 }
}
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_img_height;
		console.log("height = " + block_img_height);
		console.log("X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}

function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_img_height;
		console.log("height = " + block_img_height);
		console.log("X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}

function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_img_width;
		console.log("width = " + block_img_width);
		console.log("X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}

function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_img_width;
		console.log("width = " + block_img_width);
		console.log("X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		plyer_update();
	}
}