function contact(name, number, email, age, nickName) {

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

function upperCaseException(message) {
    this.message = message
}

function parameterNotDefinedException(message) {
    this.message = message
}

function numberLengthException(message) {
    this.message = message
}

try {

    var person = new contact("John", 987987987);
    console.log(person.name);
    var person2 = new contact("John", 987654322);
    console.log(person2.name);
    console.log(person2.number.toString());
    var person3 = new contact("Dude", 983845645, "ihgu@estg.ipp.pt", 12, "Mr.Bean");
    var person4 = new contact("Fido", 981278942, "corona@estg.ipp.pt", 15, "Mr.sauce");

} catch (ex) {
    console.log(ex.message);
}

var contactArray = [];

function add(myContact) {
    if (myContact == undefined) {
        console.log("Empty contact");
    }
    contactArray[count] = myContact;
    count++;
}
var count = 0;

function remove(index) {
    if (index > count) {
        throw new indexNotFoundException("index out of bounds");
    }
    contactArray[index] = undefined;
    update(index);
    count--;
}

function indexNotFoundException(message) {
    this.message = message;
}

function update(index) {
    for (let i = index; i < contactArray.length; i++) {
        contactArray[i] = contactArray[i + 1];
    }
    contactArray.length--;
}


add(person);
add(person2);
add(person3);
add(person4);

/*
for (let i = 0; i < contactArray.length; i++) {
    console.log(contactArray[i]);
}

remove(3);
console.log("Removed :");
for (let i = 0; i < contactArray.length; i++) {
    console.log(contactArray[i]);
}
*/

console.log("Age Filter:");
function filterAge(myAge) {
    for (let i = 0; i < contactArray.length; ++i) {
        if (contactArray[i].age > myAge) {
            console.log(contactArray[i]);
        } else {
            console.log("Not Older than myAge");
        }
    }

    
}

filterAge(10);