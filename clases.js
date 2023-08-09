class Personas {
    constructor(nombre, apellido, edad, cedula) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.cedula = cedula;
    }
  }
  

  class Animales {
    constructor(nombre, genero, raza) {
      this.nombre = nombre;
      this.genero = genero;
      this.raza = raza;
    }
  }
  

  class Veterinaria {
    constructor(nombre, direccion, telefono) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
    }
  }
  

const persona1 = new Personas("osman", "perez", 29, "1083569738");
const animal1 = new Animales("Chimy", "Macho", "Poodle");
const veterinaria1 = new Veterinaria("VETGURO", "Manzana 29 casa 1 nueva Andrea carolina,", "3173757518");

const persona2 = new Personas("eduar", "perez", 25, "9876543210");
const animal2 = new Animales("Max", "Macho", "labrador");
const veterinaria2 = new Veterinaria("Vipet", "Cl. 35a #5_16", "300 7280716 ");


console.log("Persona 1:", persona1);
console.log("Persona 2:", persona2);

console.log("Animal 1:", animal1);
console.log("Animal 2:", animal2);

console.log("Veterinaria 1:", veterinaria1);
console.log("Veterinaria 2:", veterinaria2);