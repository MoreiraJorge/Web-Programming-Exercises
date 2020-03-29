function product(a, b) {
    a = a || 0;
    b = b || 0;
    return a * b;
}
console.log(product(2, 2));
console.log(product(2));


function biggestString(array) {

    if (array == undefined) {
        console.log("Array não definido")
    } else {

        let biggest = array[0];

        for (var i = 0; i < array.length; i++) {

            if (array[i].length > biggest.length) {
                biggest = array[i];
            }

        }

        return biggest;
    }
}

var stringArray = ["Hello", "world", "JavaScript"];
console.log(biggestString(stringArray));

function toCaps(string) {
    if (String == undefined) {
        return "String nao definida";
    }

    if (string.charAt(0) == string.charAt(0).toUpperCase()) {
        return string;
    }

    let tmp = string.charAt(0).toUpperCase() + string.substring(1);

    return tmp;
}

console.log(toCaps("ola"));
console.log(toCaps("Mundo"));

function numberCount(array) {
    if (array == undefined) {
        console.log("Array nao defenido");
    }

    var mostRepeated = array[0];
    var repeatedOcurrences = 0;

    for (var i = 0; i < array.length; ++i) {
        var numberOfocurrences = 0;

        for (var j = 0; j < array.length; j++) {
            if (array[i] == array[j]) {
                numberOfocurrences++;
            }
        }

        if (numberOfocurrences > repeatedOcurrences) {
            mostRepeated = array[i];
            repeatedOcurrences = numberOfocurrences;
        }

    }

    return mostRepeated;
}

var numbers = [2, 4, 4, 4, 4, 5, 7, 9, 1, 3, 2, 2]
console.log(numberCount(numbers));

function checkEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

console.log(checkEmail('asdf@estg.com'));

function nineDigits(number) {
    number = number || 0;
    var newString = "";

    if (number.toString().length < 9) {

        while (number.toString().length + newString.length < 9) {
            newString += "0";
        }

        return newString + number.toString();
    }

    if (number.toString().length == 9) {
        return number.toString();
    }

    if (number.toString().length > 9) {
        throw new digitsException("O numero tem mais de 9 digitos");
    }
}

function digitsException(message) {
    this.message = message;
}

try {
    console.log(nineDigits(123456789));
    console.log(nineDigits(123));
    console.log(nineDigits(123456789123));

} catch (e) {
    console.log(e.message);
}

function primeNumberCheck(n) {
    n = n || 1;

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(primeNumberCheck(2));
console.log(primeNumberCheck(1));

function coin(value){
    var coins = [];

    while(value > 0){
        if (value >= 200){
            coins.push(200);
            value -= 200;
        } else if (value >= 100){
            coins.push(100);
            value -= 100;
        } else if (value >= 50){
            coins.push(50);
            value -= 100;
        } else if (value >= 20){
            coins.push(20);
            value -= 20;
        } else if (value >= 10){
            coins.push(10);
            value -= 10;
        } else if (value >= 5){
            coins.push(5);
            value -= 5;
        } else if (value >= 2){
            coins.push(2);
            value -= 2;
        } else if (value >= 1){
            coins.push(1);
            value -= 1;
        }
    }

    return coins;
}

var arr = coin(737);
for(var i = 0; i <arr.length;++i){
    console.log(arr[i] + ",");
}

function palinCheck(string){
    string = string || "";
    var reversedString = "";

    for(var i = string.length; i >= 0; i--){
        reversedString += string.charAt(i);
    }

    if(reversedString == string){
        return true;
    }
    return false;
}

console.log(palinCheck("ana"));
console.log(palinCheck("Jorge"));

function numberDays(d){

    var day = new Date(d.getFullYear(),d.getMonth(),0);
    return day.getDate();

}

var d = new Date(2018,2,24)
console.log(numberDays(d));