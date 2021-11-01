let devSimulator = new Game()

let btnElement = document.getElementById('start-btn')

let bugElement = document.getElementsByClassName('bug-img')

let divsElements = document.getElementsByClassName('tile')


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
                if (devSimulator.Points === 5) {
                    console.log('ganhou!')
                    clearInterval(teste)
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
            }
            }, devSimulator.duration)
        }
    }, 1500);

    // if (devSimulator.clicked === true) {
    //     devSimulator.lifes--
    // }
})







