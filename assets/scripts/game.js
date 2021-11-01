


class Game {
    constructor() {
        this.divs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        this.indice
        this.pos
        this.duration
        this.previousPos
        this.clicked = false
        this.Points = 0
        this.lifes = 4
    }

    randomPos() {
        this.indice = Math.floor(Math.random() * this.divs.length)
        this.pos = this.divs[this.indice]
        if (this.pos === this.previousPos){
            return randomPos;
        }
        this.previousPos = this.pos;
        return this.pos;
        
    }

    randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    popUp() {
        this.duration = this.randomTime(700, 800)
        this.randomPos()
        // adicionar funcao setTimeout() no arquivo index.js depois
        // lembrar de adicionar um classe e remover para poder fazer o bug aparecer e sumir depois de um tempo x
    }

    startGame() {
        // devSimulator.clicked = true
        this.popUp()
        // criar um limite de tempo para o jogo ou deixar infinito?
    }
    
    
}