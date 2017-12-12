const Eventos = require('events');

class Carro extends Eventos {
    constructor(){
        super();
        this.contador = 0;
    }

    Arrancar(){
        console.log("el auto arranca");        
        //this.emit('arranco');
        this.emit('arranco_con_parametros', this.contador, 1);
        this.contador += 1;
    }
}

var carro1 = new Carro();

// PARA ESCUCHAR EVENTOS, SUSCRIBIRNOS CON EL METODO on()
carro1.on('arranco', function(){
    console.log("El eveto fue escuchado, y la secuencia ejecutada");
});

carro1.on('arranco_con_parametros', function(a, b){
    console.log(a, b, "El evento fue escuchado");
});

carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();