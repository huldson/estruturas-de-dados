class pilha{
    constructor(){
        this.vetorp = []
        this.contador = 0
}
push(elemento){
    this.vetorp.push(elemento)
    this.contador++
}
pop(){
    this.contador--
    return this.vetorp.pop()
}
size(){
    return this.contador
}
isEmpty(){
    return this.contador===0
}
top(){
    return this.vetorp[this.contador-1]    
}

}
/* let pilha2 = new pilha()

    pilha2.push(3)
    pilha2.push(4)
    pilha2.push(6)
    let q = pilha2.top()
    console.log(q)
    let tamanho = pilha2.size()
    let r = pilha2.pop()
    console.log(pilha2.size()) 
    console.log(pilha2.vetorp)
    console.log( pilha2.isEmpty())
 */
    let pilha3 = new pilha()
    pilha3.push(0)
    pilha3.push(1)
    pilha3.push(2)
    pilha3.push(3)
    pilha3.push(4)
    pilha3.push(5)
    let ciclo=pilha3.isEmpty()
    let vetorcontrario = []

while(ciclo===true){
    console.log('dentro')
      vetorcontrario = pilha3.pop()                  
}
console.log(vetorcontrario)




