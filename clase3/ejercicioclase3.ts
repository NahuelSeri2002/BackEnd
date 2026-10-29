// Ejercicio: modelá un sistema de empleados.

// 1) 
// TODO: class Empleado con nombre y sueldoBase,
class Empleado {
    nombre : string;
    sueldoBase : number;

    constructor(nombre : string, sueldoBase : number){
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }

    //calcularSueldo(): number y recibo(): string

    calcularSueldo() : number {
        return this.sueldoBase;
    }

    recibo() : string{
        return `El sueldo del ${this.nombre} es ${this.calcularSueldo()}`
    }
}



// 2) 
// TODO: class Vendedor extends Empleado, agrega comisiones
//          y redefine calcularSueldo() sumándolas
class Vendedor extends Empleado{
    comisiones : number;

    constructor(nombre: string, sueldoBase: number, comisiones: number){
        super(nombre, sueldoBase)
        this.comisiones = comisiones;
    }

    calcularSueldo(): number {
        return this.sueldoBase + this.comisiones;
    }
}

// 3) 
// TODO: class Gerente extends Empleado, agrega bonoFijo
//          y redefine calcularSueldo() usando super.calcularSueldo() + el bono
class Gerentre extends Empleado{
    bonoFijo : number;

    constructor(nombre : string, sueldoBase: number, bonoFijo:number){
        super(nombre,sueldoBase)
        this.bonoFijo = bonoFijo;
    }

    calcularSueldo(): number {
        return this.sueldoBase + this.bonoFijo;
    }
}

// 4) 
// TODO: un array Empleado[] con un Empleado, un Vendedor y un Gerente
const empleados: Empleado[] = [
    new Empleado("Jorge", 10),
    new Vendedor("Honorio", 20, 5),
    new Gerentre("Manuel", 30, 10)
]

// 5) 
// TODO: recorrelo con forEach mostrando el recibo de cada uno,
//          sin un solo if por tipo

// 7) 
// TODO: agregá una clase Pasante (cobra la mitad del base),
//          hacele push al array y volvé a recorrer. ¿Tocaste el forEach?
class Pasante extends Empleado{
    override calcularSueldo(): number {
        return this.sueldoBase/2;
    }
}

const pasante = new Pasante("Juana", 20)
empleados.push(pasante);

empleados.forEach(element => {
    console.log(element.recibo());
});

// 6) 
// TODO: calculá la masa salarial total con reduce()
const resultado = empleados.reduce((acc, emp) => acc + emp.calcularSueldo(), 0);
console.log(`La masa salarial total es $${resultado}`)

// Para probar los errores (descomentá de a uno):
// - una hija con constructor propio sin super()
// - un override que devuelva string en vez de number