  // PASO 4 - Auto.ts
  import type { Motor } from "./interfaces.js";
  import { MotorDeCombustion } from "./MotorDeCombustion.js";
  import { MotorElectrico } from "./MotorElectrico.js";
  import { Ruedas, Chasis, TipoCombustible } from "./partes.js";

  export class Auto{
  // La clase central. El auto NO es un motor: se ARMA con un motor, un chasis
  // y unas ruedas, mas su precio y su patente. Tambien registra cuando se
  // vendio, pero recien fabricado todavia no se vendio.
  //
  // Las piezas no se crean acá adentro: llegan ya armadas de afuera.
    private motor: Motor;
    private chasis: Chasis;
    private ruedas: Ruedas;
    private precio: number;
    private patente: string;
    private fechaVenta: Date | null = null;

    //
    // 1) LAS REGLAS DEL NEGOCIO.
    //    Hay dos combinaciones que el negocio NO permite: un motor de combustion
    //    andando a bateria, y un motor electrico andando con cualquier otra cosa.
    //    La pregunta de la clase es DONDE ponerlas. Tiene que ser un lugar por el
    //    que sea IMPOSIBLE pasar de largo, y la construccion tiene que cortarse
    //    ahi mismo: un auto invalido no debe llegar a existir ni a medio hacer.
    //    Vas a necesitar preguntar de que clase es el motor que te pasaron.
    //

    constructor(motor: Motor, chasis: Chasis, ruedas: Ruedas, precio: number, patente: string){
      if(motor instanceof MotorDeCombustion && motor.tipoCombustible === TipoCombustible.BATERIA){
        throw new Error("Un motor de combustion no puede tener de combustible una bateria");
      }
      if(motor instanceof MotorElectrico && motor.tipoCombustible !== TipoCombustible.BATERIA){
        throw new Error("Un motor Electrico solo puede tener de combustible una bateria");
      }

      this.motor = motor;
      this.chasis = chasis;
      this.ruedas = ruedas;
      this.precio = precio;
      this.patente = patente;
    }


  // 2) ENCENDER Y APAGAR.
  //    El auto no enciende nada: se lo PIDE a su motor. Resisti la tentacion
  //    de tocarle el estado al motor desde acá.
  //

  public encender(): void{
    this.motor.arrancar();
  }

  public apagar(): void{
    this.motor.apagar();
  }

  // 3) CONDUCIR.
  //    Solo avanza si el motor esta encendido. Si no, decilo.
  //

  public conducir(): string{
    if(!this.motor.estaEncendido){
      return `El motor de ${this.patente} esta apagado`;
    }
    return `${this.patente} esta en movimiento`;
  }


  // 4) ACCESO A LOS DATOS.
  //    Las propiedades son privadas, asi que hace falta exponer lo que el
  //    concesionario va a necesitar: la patente, el precio, la fecha de venta
  //    (leerla y escribirla) y una descripcion legible del auto.
  //    El metodo que cambia el precio es el ejemplo de por que encapsulamos:
  //    es el unico lugar donde podes rechazar un precio que no tiene sentido.
  //    Convencion de la catedra: metodos normales, CON parentesis. Sin get/set.

  public getPatente(): string{
    return this.patente;
  }

  public getPrecio(): number{
    return this.precio;
  }

  }