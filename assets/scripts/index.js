let devSimulator = new Game()

let btnElement = document.getElementById('start-btn')

let bugElement = document.getElementsByClassName('bug-img')

for(let i = 0; i < bugElement.length; i++) {
    bugElement[i].addEventListener('click', () => {
        if (devSimulator.lifes !== 0) {
            if (bugElement[i] === bugElement[devSimulator.pos]) {
                console.log('acertou!')
                devSimulator.naughtyPoints++
                if (devSimulator.naughtyPoints === 10) {
                    console.log('ganhou!')
                    clearInterval(teste)
                }
                console.log(devSimulator.naughtyPoints)
                bugElement[devSimulator.pos].classList.remove('d-content')
                bugElement[devSimulator.pos].classList.add('d-none')
            }
            else {
                devSimulator.lifes--
            }
        }
        else {
            console.log('perdeu')
        }
    })
}

btnElement.addEventListener('click', () => {

    teste = setInterval(() => {
        devSimulator.startGame()
        console.log(bugElement)
        console.log(devSimulator.pos)
        console.log(bugElement[devSimulator.pos])
        bugElement[devSimulator.pos].classList.remove('d-none')
        bugElement[devSimulator.pos].classList.add('d-content')
        setTimeout(() => {
          bugElement[devSimulator.pos].classList.remove('d-content')
          bugElement[devSimulator.pos].classList.add('d-none')
        }, devSimulator.duration)
    }, 2000);

})



