class Ground
{
    constructor(x,y,w,h){

        let ground_opt={
            isStatic:true
        };

        this.body = Bodies.rectangle(x,y,w,h,ground_opt);
        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }
    display(){

        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke(0);
        fill(rgb(101,67,33));
        rect(pos.x,pos.y,this.w,this.h);
        pop();

    }

}


