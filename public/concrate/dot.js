class Dot{
    constructor(dot){
        if (dot) {
            this.x = dot.x;
            this.y = dot.y;
            this.alp = dot.alp;
        } else {
            this.x = 15;
            this.y = 75;
            this.alp = random(51)
        }
    }

    move(){
        dot.x +=5;
    }

    show(){
        fill(0);
        ellipse(this.x,this.y,30,30);
    }
}