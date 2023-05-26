class Rectangle{
constructor(widthInit,heightInit){
this.width=widthInit;
this.height=heightInit;
this.xStart=0;
this.yStart=0;

}
getArea()
{

  return (this.width*this.height)
}
getPerimeter()
{
return (this.width+this.height)*2

}
draw(){
let board=document.getElementById('board')
let context=board.getContext('2d')
context.fillStyle='red'
context.fillRect(this.xStart,this.yStart,this.width,this.height)

}


}
let rectangleObj=new Rectangle(200,100)
rectangleObj.draw()
console.log(rectangleObj)
console.log('diện tích',rectangleObj.getArea())
console.log('chu vi',rectangleObj.getPerimeter())