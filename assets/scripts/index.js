let devSimulator = new Game()

let btnElement = document.getElementById('start-btn')

let bugElement = document.getElementsByClassName('bug-img')

let divsElements = document.getElementsByClassName('tile')

let dificultyBtnsElements = document.getElementsByClassName('dificulty-btns')

let playBtnElement = document.getElementsByClassName("play-btn")

let firstPageElement = document.getElementsByClassName('teste1')

let gameElement = document.getElementsByClassName('game-page')

let livesElement = document.getElementsByClassName('lives')

let safadezaPointsElement = document.getElementById('safadeza-pts')

let afterGameElement = document.getElementsByClassName('after-game')

let playAgainElement = document.getElementsByClassName('play-again-btn')

let finalMsgElement = document.getElementById('final-msg')

let finalTxtElement = document.getElementById('final-txt')

playAgainElement[0].addEventListener('click', () => {
    devSimulator.Points = 0
    safadezaPointsElement.innerHTML = `<img src="./assets/images/safadeza-coin.png" alt=""> Pontos de Safadeza: ${devSimulator.Points}`

    devSimulator.lifes = 4
    livesElement[0].innerHTML = `Vidas: ${devSimulator.lifes}`

    afterGameElement[0].classList.remove('d-content')
    afterGameElement[0].classList.add('d-none')

    firstPageElement[0].classList.remove('d-none')
    firstPageElement[0].classList.add('d-content')
})

let gameOver = false

// transicao da pagina atual para a pagina de jogo

let dificultyCheck = false


for (let i = 0; i < dificultyBtnsElements.length; i++) {
    dificultyBtnsElements[i].addEventListener('click', () => {
        if (i === 0) { // dificuldade fácil
            dificultyCheck = true
            devSimulator.duration = devSimulator.randomTime(800, 1000)
        }
        if (i === 1) { // dificuldade normal
            dificultyCheck = true
            devSimulator.duration = devSimulator.randomTime(600, 800)
        }
        if (i === 2) { // dificuldade the flash
            dificultyCheck = true
            devSimulator.duration = devSimulator.randomTime(300, 400)
        }
    })
}

playBtnElement[0].addEventListener('click', () => {
    if (dificultyCheck === false) {
        window.alert('selecione uma dificuldade para jogar!')
    }
    else {
        firstPageElement[0].classList.remove('d-content')
        firstPageElement[0].classList.add('d-none')
        gameElement[0].classList.remove('d-none')
        gameElement[0].classList.add('d-content')
    }
})

// manipulacao de innerText
// safadezaPointsElement.innerHTML = `<img src="./assets/images/safadeza-coin.png" alt=""> Pontos de Safadeza: ${devSimulator.Points}`



// -------------------------------------------------------


// console.log(divsElements)

// for (let i = 0; i < divsElements.length; i++) {
//     divsElements[i].addEventListener('click', () => {
//         if (i !== devSimulator.pos) {
//             bugElement[devSimulator.pos].classList.add('d-none')
//             devSimulator.lifes--
//             console.log('perdeu uma vida')
            
//         }
//     })
// }

// document.addEventListener('click', () => {
//     // setInterval(() => {
//     //     if (devSimulator.clicked === false) {
//     //         devSimulator.lifes--
//     //         cconsole.log(`lifes remaining: ${devSimulator.lifes}`)
//     //     }
//     // }, devSimulator.duration)
//     if (devSimulator.lifes <= 0) {
//         clearInterval(teste)
//         console.log('perdeu')
//         window.alert('perdeu!!! ficou sem vidas')
//     }

//     // if (devSimulator.clicked === true) {
//     //     console.log('perdeu uma vida')
//     //     devSimulator.lifes--
//     // }
// })


// ---------------------------------------------------------------------




for(let i = 0; i < bugElement.length; i++) {
    bugElement[i].addEventListener('click', () => {

        // if (devSimulator.lifes === 0) {
        //     clearInterval(teste)
        //     console.log('perdeu')
        //     window.alert('perdeu!!! ficou sem vidas')
        // }

        if (devSimulator.lifes !== 0) {
            if (bugElement[i] === bugElement[devSimulator.pos]) {
                devSimulator.clicked = false
                console.log(devSimulator.clicked)
                // console.log(bugElement[i].parentElement.id)
                console.log('acertou!')
                console.log(`lifes remaining: ${devSimulator.lifes}`)
                devSimulator.Points++
                safadezaPointsElement.innerHTML = `<img src="./assets/images/safadeza-coin.png" alt=""> Pontos de Safadeza: ${devSimulator.Points}`
                if (devSimulator.Points === 5) {
                    console.log('ganhou!')
                    clearInterval(teste)
                    gameOver = true
                    gameElement[0].classList.remove('d-content')
                    gameElement[0].classList.add('d-none')
            
                    afterGameElement[0].classList.remove('d-none')
                    afterGameElement[0].classList.add('d-content')

                    finalMsgElement.innerText = `Você Ganhou, Parabéns !`
                    finalTxtElement.innerText = `Você acumulou todos os Pontos de Safadeza necessários. Continue estudando e praticando! #ConfianoProcesso`

                }
                console.log(devSimulator.Points)
                bugElement[devSimulator.pos].classList.remove('d-content')
                bugElement[devSimulator.pos].classList.add('d-none')
            }
        }
        // if(devSimulator.lifes === 0) {
        //     clearInterval(teste)
        //     console.log(console.log('perdeu o jogo'))
        // }
    })
}

btnElement.addEventListener('click', () => {
    devSimulator.Points = 0
    devSimulator.lifes = 4
    devSimulator.startGame()

    teste = setInterval(() => {
        if(devSimulator.lifes === 0) {
            clearInterval(teste)
            console.log(console.log('perdeu o jogo'))
            gameOver = true
            gameElement[0].classList.remove('d-content')
            gameElement[0].classList.add('d-none')
    
            afterGameElement[0].classList.remove('d-none')
            afterGameElement[0].classList.add('d-content')

            finalMsgElement.innerText = `Você perdeu !`
            finalTxtElement.innerText = `Você perdeu todas as suas vidas e seu LAB foi comprometido! Se esforce mais e confie no processo!`
        }
        else {
            devSimulator.clicked = true
            devSimulator.startGame()
            // console.log(bugElement)
            // console.log(devSimulator.pos)
            // console.log(bugElement[devSimulator.pos])
            bugElement[devSimulator.pos].classList.remove('d-none')
            bugElement[devSimulator.pos].classList.add('d-content')
            setTimeout(() => {
              bugElement[devSimulator.pos].classList.remove('d-content')
              bugElement[devSimulator.pos].classList.add('d-none')
              if (devSimulator.clicked === true) {
                console.log('perdeu uma vida')
                devSimulator.lifes--
                livesElement[0].innerHTML = `Vidas: ${devSimulator.lifes}`
            }
            }, devSimulator.duration)
        }
    }, 1500);

    // if (devSimulator.clicked === true) {
    //     devSimulator.lifes--
    // }
})










