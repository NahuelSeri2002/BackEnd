// Ejercicio: creá tu primer módulo tipado.

// 1) interface Mascota
// TODO: nombre (string), especie (solo "perro" o "gato") y edad opcional
type Especie = "Perro" | "Gato";

interface Mascota{
    nombre: string;
    especie: Especie;
    edad ? : number;
    prioridad : Prioridad;
}

// 2) enum Prioridad
// TODO: Baja = 1, Media = 2, Alta = 3
enum Prioridad{
    Baja = 1,
    Media = 2,
    Alta = 3,
}

// 3) La función: recibe una Mascota y una Prioridad, devuelve un string
// TODO: mensajeDeAtencion(mascota, prioridad): string
//       - edad es opcional: preguntá antes de usarla
//       - switch sobre la prioridad para armar el texto de urgencia
function mensajeDeAtencion(mascota:Mascota) : string{
    const edad = mascota.edad ? `${mascota.edad} de edad` : "edad indefinida";
    let urgencia : string;
    switch (mascota.prioridad) {
        case Prioridad.Alta:
            urgencia = "Prioridad Alta"
            break;
        case Prioridad.Media:
            urgencia = "Prioridad Media"
            break;
        case Prioridad.Baja:
            urgencia = "Prioridad Baja"
            break;
        default:
            urgencia = "Prioridad no existe"
            break;
    }

    return `El ${mascota.especie} de ${edad} tiene ${urgencia} para pasar a la sala de urgencias`
}


// 4) Los datos
// TODO: un array de Mascota con 3 mascotas, una de ellas sin edad
const mascotas : Mascota[] = [
    {nombre: "Juan", especie : "Gato", edad : 4, prioridad : Prioridad.Media},
    {nombre: "Jorge", especie :"Perro", edad : 15, prioridad : Prioridad.Alta},
    {nombre: "Pancho", especie : "Gato", prioridad : Prioridad.Baja},
]

// 5) Probá los errores (descomentá de a uno y volvé a comentar)
// const pez: Mascota = { nombre: "Nemo", especie: "pez" };
// const anonima: Mascota = { especie: "gato" };

// 6) Imprimí el mensaje de cada mascota
// TODO: recorré el array con for...of
 for (const m of mascotas) {
    console.log(mensajeDeAtencion(m));
 }

// 7) Comprobá que los tipos desaparecen
//    npm run build  y abrí dist/07-ejercicio-mascotas.js
//    ¿quedó la interface? ¿quedó el enum?