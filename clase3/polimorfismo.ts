// Mismo mensaje, distinta respuesta según el objeto.

class Animal{
  constructor(public nombre: string) {}

  hacerSonido(): string {
    return "Sonido genérico";
  }
}

// TODO: Perro, Gato y Vaca, cada una redefiniendo hacerSonido()
//       Poneles la palabra override adelante
class Perro extends Animal{
  override hacerSonido(): string {
    return "Guau";
  }
}

class Gato extends Animal{
  override hacerSonido(): string {
    return "Miau";
  }
}

class Vaca extends Animal{
  override hacerSonido(): string {
    return "Muu";
  }
}

class Oveja extends Animal{
  override hacerSonido(): string {
    return "Bee";
  }
}

// Un array del tipo del PADRE con objetos de las HIJAS
const animales: Animal[] = [
  new Perro("Firulais"),
  new Gato("Michi"),
  new Vaca("Lola"),
];

const oveja = new Oveja("Oscar");

animales.push(oveja);

// TODO: recorrelo con for...of e imprimí nombre y sonido.
//       Sin un solo if por tipo
for (const a of animales) {
  console.log(a.hacerSonido());
}

// TODO: agregá una clase Oveja, hacé push al array y volvé a recorrer.
//       ¿Hubo que tocar el for?

// Probá el typo: cambiale el nombre al método en una hija (hacerSonidos).
// Con override puesto, TypeScript avisa. Sin override, crea un método nuevo
// en silencio y el animal sigue haciendo el sonido genérico.