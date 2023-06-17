import Persona from './persona.js'

class Estudiante extends Persona {
    asignatura

    constructor(nombre, edad, asignatura) {
        super(nombre, edad) // llamamos al constructor de la clase padre
        this.asignatura = asignatura
    }

    saludar(){
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años y soy estudiante de ${this.asignatura}`)
    }
}

const instanciaEstudiante = new Estudiante('Juan', 30, 'Programación')
console.log(instanciaEstudiante.saludar())