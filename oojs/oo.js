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
const segundaMoto = new Moto('Honda', 'CBR1000RR', 1000);
const terceiraMoto = new Moto('Yamaha', 'YZF-R6', 600);

minhaMoto.ligar();
minhaMoto.acelerar();

segundaMoto.ligar();
segundaMoto.acelerar();

terceiraMoto.ligar();
terceiraMoto.acelerar();
