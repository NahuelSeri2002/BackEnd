function aprobo(nota){
    if(typeof nota !== "number" || nota < 0 || nota > 10){
        return null;
    }

    if(nota >= 6){
        return true;
    }else{
        return false;
    }

}

console.log(aprobo(5));// false
console.log(aprobo(9));// true
console.log(aprobo(-2));// null
console.log(aprobo("hola"));// null

// If ternario
const nota = 2;
const resultado = nota >= 6 ? "Aprobado" : "Desaprobado";
console.log(resultado);

// SWITCH
function categoria(nota){
    if(typeof nota !== "number" || nota < 0 || nota > 10){
        return null;
    }

    switch (nota) {
        case 10:
            return "Sobresaliente"
        case 9:
        case 8:
            return "Muy Bueno";
        case 7:
        case 6:
            return "Aprobado";
        default:
            return "A recuperar"
    }
}

console.log(categoria(10));
console.log(categoria(8));
console.log(categoria(6));
console.log(categoria(3));

// bucles
// for
const notas = [4,7,9,10];
for(let i = 0; i < notas.length; i++){
    const e = notas[i];
    console.log("for", e, aprobo(e));
}

// foreach
notas.forEach((nota)=>{
    console.log("foreach", nota, aprobo(nota))
})