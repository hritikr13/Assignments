class  rectangle
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }


}
rectangle.prototype.getArea = function()
{
    var AreaH = this.height;
    var AreaW = this.width;

    var answ = AreaH * AreaW;

    return "Area is " + answ;
}

myRectangle = new rectangle(10,5);
document.write(myRectangle.width + " "+ myRectangle.height);

document.write(myRectangle.getArea());

myRec = new rectangle(9,4);
document.write(myRec.width + " "+ myRec.height);
document.write(myRec.getArea());