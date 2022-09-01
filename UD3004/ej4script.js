let valores =[true, 5, false, "hola", "adios", 2];

let var1, var2;

valores.forEach(valor => {
    if(typeof valor === "string"){
        if(typeof var1 === "string") {
            var2 = valor;
        } else {
            var1 = valor;
        }
    }
});

if(var1 > var2) {
    console.log(var1+" es mas grande que " + var2);
} else {
    console.log(var2+" es mas grande que " + var1);
}

valores.forEach(valor => {
    if(typeof valor === "boolean"){
        if(typeof var1 === "boolean") {
            var2 = valor;
        } else {
            var1 = valor;
        }
    }
});

console.log(var1 || var2);
console.log(var1 && var2);

valores.forEach(valor => {
    if(typeof valor === "number"){
        if(typeof var1 === "number") {
            var2 = valor;
        } else {
            var1 = valor;
        }
    }
});

console.log("Suma: "+(var1+var2));
console.log("Resta: "+(var1-var2));
console.log("Multiplicación: "+(var1*var2));
console.log("División: "+(var1/var2));
console.log("Modulo: "+(var1%var2));

