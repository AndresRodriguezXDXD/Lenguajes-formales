$(document).ready(()=>{
    /*var alfabeto_str = $("#alfabeto").val();
    var lenguaje_str = $("#lenguaje").val();
    var palabras_str = $("#palabras").val();

    var alfabeto_str2 = $("#alfabeto2").val();
    var lenguaje_str2 = $("#lenguaje2").val();
    var palabras_str2 = $("#palabras2").val();*/

    var alfabeto_str = "a,b,c,d,e,f,g";
    var lenguaje_str = "abc,cbd,fgc";
    var palabras_str = "abc,cbd,fc,bd,cfe";

    var alfabeto_str2 = "i,j,k,l,m,n";
    var lenguaje_str2 = "kj,lm,ni,jl";
    var palabras_str2 = "kj,lm,ni,jl,li,nl";

    var alfabeto =  alfabeto_str.split(",");
    var lenguaje = lenguaje_str.split(",");
    var palabras = palabras_str.split(",");

    var alfabeto2 = alfabeto_str2.split(",");
    var lenguaje2 = lenguaje_str2.split(",");
    var palabras2 = palabras_str2.split(",");

    //funiones alfabeto
    /*union_alfabeto = union(alfabeto, alfabeto2);
    diferencia_alfabeto = diferencia(alfabeto, alfabeto2)
    interseccion_alfabeto = interseccion(alfabeto, alfabeto2)*/

    // funciones lenguaje
    union_lenguaje = union(lenguaje, lenguaje2);
    diferencia_lenguaje = diferencia(lenguaje, lenguaje2)
    interseccion_lenguaje = interseccion(lenguaje, lenguaje2)
    concatenacion_lenguaje = concatenacion(lenguaje, lenguaje2)
    potencia_lenguaje = potencia(lenguaje, 12)
    inversa_lenguaje = inversa(lenguaje)
    cardinalidad_lenguaje = lenguaje.length
    console.log("funciones del lenguaje")
    console.log(`la union del lenguaje es ${union_lenguaje}`)
    console.log(`la diferencia del lenguaje es ${diferencia_lenguaje}`)
    console.log(`la interseccion del lenguaje es ${interseccion_lenguaje}`)
    console.log(`la concatenacion del lenguaje es ${concatenacion_lenguaje}`)
    console.log(`la potencia del lenguaje es ${potencia_lenguaje}`)
    console.log(`la inversa del lenguaje es ${inversa_lenguaje}`)
    console.log(`la cardinalidad del lenguaje es ${cardinalidad_lenguaje}`)

    /*//palabras
    cardinalidad_palabras = len(palabras)*/

})


let union = (array1, array2)=>{
    array_union = array1.slice()
    for (const item in array2) {
        if(!array1.includes(array2[item])){
            if(!array_union.includes(array2[item])){
                array_union.push(array2[item])
            }
        }
    }
    return array_union
}
let inversa = (array1)=>{
    array_inversa = []
    for(const item in array1){
        str_array = array1[item].split("")
        inversa_array = str_array.reverse()
        str_inverso = inversa_array.join("")
        array_inversa.push(str_inverso)
    }

    return array_inversa
}

let concatenacion  = (array1, array2)=>{
    array_concatenacion = []
    for (const item in array2) {
        for (const item1 in array1) {
            array_concatenacion.push(array2[item].concat(array1[item1]))
        }
    }
    return array_concatenacion
}

let diferencia = (array1, array2)=>{
    array_diferencia =  []
    for(var i=0; i<array1.length; i++){
        if(!array2.includes(array1[i])){
            if(!array_diferencia.includes(array1[i])){
                array_diferencia.push(array1[i])
            }
        }
    }

    for(var i=0; i<array2.length; i++){
        if(!array1.includes(array2[i])){
            if(!array_diferencia.includes(array2[i])){
                array_diferencia.push(array2[i])
            }
        }
    }
    return array_diferencia
}
/*
let interseccion = (array1 , array2)=>{
    array_interseccion = []
    for(var i=0; i<array1.length; i++){
        if(array2.includes(array1[i])){
            if(!array_interseccion.includes(array1[i])){
                array_interseccion.push(array1[i])
            }
        }
    }
    return array_interseccion
}*/
/*
let potencia = (array, potencia)=>{
    

    array_copia = array.slice()
    console.log(array_copia)

    iteracion_potencia = []
    for(var i=2; i <= potencia; i++){
        for (const item in array) {
            for(const item_2 in array_copia){
                iteracion_potencia.push(array[item].concat(array_copia[item_2]))
            }
        }
        array_copia = iteracion_potencia.slice()
    }
    return iteracion_potencia
}