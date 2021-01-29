class Pilha{
  constructor(){

   
     this.vetor = []


  }
    push(elemento){
        this.vetor.push(elemento) // colocar um contador para não utilizar o length

}
    top(){
       let ultimo = this.vetor.length
            return this.vetor[ultimo-1]  
      
}
    pop(){
           let ultimo = this.top()         
            this.vetor.pop()
       
        return ultimo
    }
    size(){
    let ultimo = this.vetor.length
    return ultimo

}
    isEmpty(){
        let ultimo = this.vetor.length
        if(ultimo===0){
            return true

        }
        
            return false
        
}


}
let y = new Pilha()

y.push(3)
y.push(4)
y.push(3)
console.log(y.top())
console.log(y.isEmpty())
console.log(y.size())
y.pop()
y.pop()
y.pop()
console.log(y.isEmpty())
console.log(y)