class Person {
    constructor(first, age) {
        this.firstName = first;
        this.age = age;
    }

    evaluateAge() {
        if (this.age <= 12) {
            return "criança";
        } else if (this.age <= 21) {
            return "adolescente";
        } else {
            return "idoso";
        }
    }
}

class Portuguese extends Person {
    constructor(first, age, Nationality) {
        super(first, age);
        this.Nationality = Nationality;
    }
}


var person1 = new Portuguese("Pedro", 12, "PT");
var person2 = new Portuguese("Paulo", 15, "PT");

console.log(person1);
console.log(person2);

console.log(person1.evaluateAge());
console.log(person2.evaluateAge());