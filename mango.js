class Mango{
	constructor(x,y,radius)
	{
		var options={
			isStatic:true,
			restitution :0.04,
            friction :0,
			}
		this.x=x;
		this.y=y;
		this.radius=radius
		this.image=loadImage("mango.png")
		this.body=Bodies.circle(this.x, this.y, this.radius, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		//translate(mangoPos.x, mangoPos.y);
		//rectMode(CENTER);
		//srotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		
		image(this.image, mangoPos.x,mangoPos.y,this.radius*2,this.radius*2);
		pop()
 }
}