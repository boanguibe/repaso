// Fuertemente encapsulada
export default class Auto {
    #marca
    #modelo
    #annio

    getMarca(){
        return this.#marca
    }
    setMarca(marca){
        // puede tener una validacion previa
        this.#marca = marca
    }
    getModelo(){
        return this.#modelo
    }
    setModelo(modelo){
        this.#modelo = modelo
    }
    getAnio(){
        return this.#annio  
    }
    setAnio(annio){
        this.#annio = annio
    }   

    toString(){
        return `Marca: ${this.#marca} Modelo: ${this.#modelo} Año: ${this.#annio}`
    }

}

