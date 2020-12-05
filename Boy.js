class Boy{
    constructor(x, y,width,height){
        var options={
            isStatic:true
        }
this.image = loadImage("boy.png")
this.y = y;
this.x = x;
this.width = width;
this.height = height;

this.body = Bodies.rectangle(this.x, this.y,width,height, options);

World.add(world, this.body);
}    
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        
         pop(); 


    }

}