function soma(a = 1, b = 3) { //colocar valores default ou imprimir mensagens em throws ou usar condições
    a = a || 0
    return a + b
}
console.log(soma(1, 2))
console.log(soma(1))
console.log(soma())


function concat(a, b) { //igual a função anterior, , ha valores não definidos
    if (a == undefined || b == undefined) {
        throw new ConcatException("valor nao definido");
    }
    return a + b;
}

try {
    console.log(concat("Hello ", "World"))
    console.log(concat(""))
    console.log(concat())
} catch (e) {
    console.log(e.message);
}

function ConcatException(message) {
    this.message = message;
}


function odd_demo2(a, b) { // a mesma situação que os anteriores so que corrigido com ifs
    if (a == undefined && b == undefined) {
        console.log("variaveis nao definidas");
    } else if (a == undefined) {
        console.log(b);
    } else if (b == undefined) {
        console.log(a);
    } else {
        console.log(a + " " + b);
    }
}
odd_demo2(1)
odd_demo2("hello", 3)
odd_demo2()


function element(index) {
    if (index < 0) {
        throw new OutOFBounds("index out of bounds")
    }
    var arr = [1, 2, 3]
    return arr[index]
}

try {
    console.log(element(-1));
} catch (e) {
    console.log(e.message)
}

function OutOFBounds(message) {
    this.message = message
}


function sample(unknown) {
    if (unknown == undefined) {
        console.log("variavel nao definida")
    }
    console.log(unknown)
}
sample("Hello")
