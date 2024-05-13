const elements = document.querySelectorAll(".lista-compra h4")
const elementos = document.getElementsByTagName('h4')

console.log(elementos)
console.log(elements)


lista_de_compras= ["Salgadinho", "chocolate", "bolacha", "biscoito"]

if(elements.length=== lista_de_compras.length){
  elements.forEach((element,i) =>{
    element.innerHTML = lista_de_compras[i];
  })
} else{
  console.error("O número de elementos esta errado")
}