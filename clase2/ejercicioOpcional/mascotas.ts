
type Especie = "Perro" | "Gato";

interface Mascota{
    nombre : string;
    especie : Especie;
    edad?: number;
}

enum Prioridad{
    Baja = "BAJA",
    Media = "MEDIA",
    Alta = "ALTA",
}

function veterinaria(mascota : Mascota, prioridad : Prioridad) : string{
    return mascota.edad ? `El ${mascota.especie} de nombre ${mascota.nombre} y de ${mascota.edad} años requiere atencion de prioridad ${prioridad}`
    : `El ${mascota.especie} de nombre ${mascota.nombre} requiere atencion de prioridad ${prioridad}`
}

const mascota : Mascota = {nombre: "Juan", especie:"Gato", edad: 15};
const prioridad = Prioridad.Alta;

console.log(veterinaria(mascota, prioridad));