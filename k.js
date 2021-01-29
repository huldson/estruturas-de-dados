> push    : Empilha elementos
-> pop     : Retorna e remove o último elemento
-> size    : Retornar o tamanho da pilha
-> isEmpty : Se está ou não vazia a pilha
-> top     : Retornar o último elemento da pilha sem remove-lo
class Stack {
    constructor(nome, argumento){
        // nada
        this.nome = nome
        this.argumento = argumento
    }
    Methodo1(arg2){
        console.log("disparei o metodo com o arg2: ", arg2)
    }
    Methodo2(){
        console.log(this.argumento)
    }
    Methodo3(){
        console.log("meu nome é:", this.nome)
    }
}

let x = new Stack("pilha do huldson", "alguma coisa")

x.Methodo1("printa isso ae")
x.Methodo2()
x.Methodo3()