let maxDepth=6;
let colors=[];

function setup () {
  	createCanvas(windowWidth,windowHeight);
  	noLoop();
	noFill();
	noStroke();
	colors = [
						color(118,12,232), 		//magenta
						color(239,0,52), 			//red
						color(2,151,106), 		//green
						color(246,194,3), 		//yellow
						color(255,148,165), 	//pink
						color(222,222,222), 	//gray
					]
	
	drawGrid(0,0, width, height, true);
}

function draw() {}

function drill(){
	return random()>0.5;
}

function getColor(repeat){
	return random( colors );
}

function drawGrid(x, y, w, h, dig, depth){
	depth = depth || 0;

	let split = random([2,3,4]);
	let w2 = (w / random([1,split]));
	let h2 = (h / random([1,split]));
	
	for(let x1=0; x1 < w; x1 += w2){
		for(let y1=0; y1 < h; y1 += h2){
			
			if(dig && depth < maxDepth){
				drawGrid(x+x1, y+y1, w2,h2, drill(), ++depth);
			}else{
				drawCell(	x+x1, y+y1, w2, h2)
			}
			
		}
	}	
}


function drawCell(x,y,w,h){
		let r = getColor();
		let c = getColor();
		push()
		fill( r );
		rect(x,y,w,h);
		while( r == c ){
			c = getColor();
		}
		pop();
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}