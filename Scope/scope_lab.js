//global scope
var globalVar = "I'm a global variable";
let globalLet = "global but coped with let";
const globalConst = "global constant";

{
//block scope
var blockVar = "Block-scoped var";
let blockLet = "Block-scoped let";
const blockConst = "block-scoped const";
}
//global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
//block scope
//Block Scope
console.log(blockVar);//it is not block scoped
//console.log(blockLet); ...reference error(block scoped)
//console.log(blockConst);....refernce error(block scoped)

function show(){
    var functionVar ="block_scoped var";
    let functionLET = "block_scoped let";
    const functionConst ="block_scoped const";

}
console.log(functionVar); // Throws ReferenceError
//as var is function scoped
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError

