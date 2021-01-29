class Pilha{
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



function contrario(palavra){
    let pilha4 = new Pilha()
    let i = 0
    let contr = []
    while(pilha4.size()!=palavra.length){
        pilha4.push(palavra[i])
        i++

}

  while(pilha4.isEmpty()===false){

        contr.push(pilha4.pop())
   }
   return contr.join("")
}
console.log(contrario("amanha"))

