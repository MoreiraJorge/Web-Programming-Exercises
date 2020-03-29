class Contact{
    constructor(name, number, email, age, nickName){
        if (name == undefined) {
            throw new parameterNotDefinedException("name not defined");
        } else if (number == undefined) {
            throw new parameterNotDefinedException("number not defined");
        }
    
        var character = name.charAt(0);
        if (character == character.toUpperCase()) {
            this.name = name;
        } else {
            throw new UpperCaseException("First letter is not upper case");
        }
    
        if (number.toString().length == 9) {
            this.number = number;
        } else if (number.toString().length > 9) {
            throw new numberLengthException("number has more than 9 digits");
        } else {
            throw new numberLengthException("number has less than 9 digits");
        }
    
        this.email = email;
        this.age = age;
        this.nickName = nickName;
    }

    static add(myContact) {
        if (myContact == undefined) {
            console.log("Empty contact");
        }
        contactArray[count] = myContact;
        count++;
    }

    static update(index) {
        for (let i = index; i < contactArray.length; i++) {
            contactArray[i] = contactArray[i + 1];
        }
        contactArray.length--;
    }

    static remove(index) {
        if (index > count) {
            throw new indexNotFoundException("index out of bounds");
        }
        contactArray[index] = undefined;
        Contact.update(index);
        count--;
    }

    static filterAge(myAge) {
        for (let i = 0; i < contactArray.length; ++i) {
            if (contactArray[i].age > myAge) {
                console.log(contactArray[i]);
            } else {
                console.log("Not Older than myAge");
            }
        }
    
        
    }
}

var contactArray = [];
var count = 0;


function upperCaseException(message) {
    this.message = message
}

function parameterNotDefinedException(message) {
    this.message = message
}

function numberLengthException(message) {
    this.message = message
}

function indexNotFoundException(message) {
    this.message = message;
}

try {

    var person1 = new Contact("John", 987987987);
    //console.log(person1.name);
    var person2 = new Contact("John", 987654322);
    //console.log(person2.name);
    //console.log(person2.number.toString());
    var person3 = new Contact("Dude", 983845645, "ihgu@estg.ipp.pt", 12, "Mr.Bean");
    var person4 = new Contact("Fido", 981278942, "corona@estg.ipp.pt", 15, "Mr.sauce");

} catch (ex) {
    console.log(ex.message);
}

Contact.add(person1);
Contact.add(person2);
Contact.add(person3);
Contact.add(person4);

/*
for (let i = 0; i < contactArray.length; i++) {
    console.log(contactArray[i]);
}
*/

/*
Contact.remove(3);
console.log("Removed :");
for (let i = 0; i < contactArray.length; i++) {
    console.log(contactArray[i]);
}
*/

console.log("Age Filter:");
Contact.filterAge(10);
