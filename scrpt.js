
let palabraoculta = "pieza"
let intento = "perro"

if (palabraoculta == intento){
    console.log("ganamos")
}else{
    for (const i in intento) {
    comparar (i)
    }
}

function comparar(i){
    if (intento[i]==palabraoculta[i]){
        console.log(intento[i],"verde")
    }else if(palabraoculta.includes(intento[i])) {
        console.log(intento[i], "amarillo")
    }else{
        console.log(intento[i], "gris")
    }
}
