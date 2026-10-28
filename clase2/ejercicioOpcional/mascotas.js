"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prioridad;
(function (Prioridad) {
    Prioridad["Baja"] = "BAJA";
    Prioridad["Media"] = "MEDIA";
    Prioridad["Alta"] = "ALTA";
})(Prioridad || (Prioridad = {}));
function veterinaria(mascota, prioridad) {
    return mascota.edad ? `El ${mascota.literal} de nombre ${mascota.nombre} y de ${mascota.edad} años requiere atencion de prioridad ${prioridad}`
        : `El ${mascota.literal} de nombre ${mascota.nombre} requiere atencion de prioridad ${prioridad}`;
}
const mascota = { nombre: "Juan", literal: "Gato", edad: 15 };
const prioridad = Prioridad.Alta;
console.log(veterinaria(mascota, prioridad));
//# sourceMappingURL=mascotas.js.map