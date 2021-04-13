class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2,			
			}
			this.body=Bodies.circle(x,y,r);
			World.add(world, this.body);
            this.image=loadImage("paper.png");
	}
	display()
	{
		ellipse(0,0,10,10);
		image(this.image, 10,10);		

	}

}
function keyPressed() {
	if(keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:145});
	}
}