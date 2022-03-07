class Person
{
    constructor(first,middle,last)
    {
        this.first = first;
        this.middle = middle;
        this.last = last;
    }
    
}

var per1 = new Person("Hritik","Suresh");
per1.middle = "Superb";
per1.last = "Ray"
document.write(per1.first + " " + per1.middle + " " + per1.last);