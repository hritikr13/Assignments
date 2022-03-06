var square=(num)=>{
    return num*num;
}
var double=(num)=>{
    return num*2;
}
var composedValue=(square,double,value)=>{
    return square(double(value));
}
document.write(composedValue(square,double,5))