
function Moto(marca, modelo, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;


    this.ligar = function () {
    console.log(`A ${this.marca} ${this.modelo} (${this.cilindrada}cc) está ligada.`);
    };

    this.acelerar = function () {
    console.log(`A ${this.marca} ${this.modelo} está acelerando.`);
    };
}


const minhaMoto = new Moto('Ducati', 'Monster', 821);


minhaMoto.ligar(); 
minhaMoto.acelerar(); 
