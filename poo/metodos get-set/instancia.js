import Auto from "./auto.js";

const auto = new Auto()
auto.setMarca("Ferrari")
auto.setModelo("F40")
auto.setAnio(2020)

console.log(auto.getMarca())
console.log(auto.getModelo())
console.log(auto.getAnio())
console.log(auto.toString())