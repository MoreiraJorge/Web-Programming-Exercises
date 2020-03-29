//for each com objeto
const myObject = { a: 1, b: 2, c: 3 };
for (const property in myObject) {
    console.log(property);
} //o ciclo vai imprimir as propriedades do objeto, isto é , as chaves de cada propriedade

//for each com array
const myArray = [1, 2, 3];
for (const property in myArray) {
    console.log(property);
} //o ciclo vai imprimir as propriedades do array, isto é , as posiçoes e nao os valores

//for each com objetos 
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
    console.log("Propriedade: " + property + " Objeto: " + object[property]);
}

//for each com array
const array = [1, 2, 3];
for (const property in array) {
    console.log("Propriedade: " + property + " Objeto: " + array[property]);
}

//for of com objeto
//const object1 = { a: 1, b: 2, c: 3 };
//for (const element of object1) {
    //console.log(element);
//} // object1 não e iteravel

//for of com arrays 
const array1=['a','b','c'];
for(const element of array1){
    console.log(element);
}