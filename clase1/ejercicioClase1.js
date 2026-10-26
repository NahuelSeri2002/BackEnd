const productos =[
    {id:1,nombre:"televisor", precio:600,stock:10},
    {id:2,nombre:"celular", precio:400,stock:4},
    {id:3,nombre:"reloj", precio:200,stock:7},
    {id:4,nombre:"play5", precio:1000,stock:1}
]

const productosCaros = productos.filter(p => p.precio > 100);
const nombresMayus = productosCaros.map(p => p.nombre.toUpperCase());
const productosStock = productos.every(p => p.stock > 0);
const id2 = productos.find(p => p.id === 2);
const total = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);

console.log(productosCaros);
console.log(nombresMayus);
console.log(productosStock);
console.log(id2);
console.log(total);
