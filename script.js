let td = document.getElementsByTagName(`td`)
let player

let label = document.getElementById(`label`)
let button = document.querySelector(`button`)
button.addEventListener(`click`, reset)

inicio()

for (let indice = 0; indice < td.length; indice++) {

    td[indice].addEventListener(`click`, () => {

        if (player == `X`) {

            td[indice].innerHTML = player
            player = `O`
            label.innerText = `O`
            label.style.color = `red`
            td[indice].style.pointerEvents = `none`
            

        } else if (player == `O`) {

            td[indice].innerHTML = player
            player = `X`
            label.innerText = `X`
            label.style.color = `blue`
            td[indice].style.pointerEvents = `none`

        }


    })

}


function inicio() {

    player = "X"
    label.innerText = "X"
    label.style.color = `blue`
    label.style.fontSize = `20px`


}

function reset() {

    for (let x = 0; x < td.length; x++) {

        td[x].innerHTML = ``
        td[x].style.pointerEvents = `all`

    }

    inicio()

}

function winner() {


    if ((td[0].innerText == td[1].innerText) && (td[1].innerText == td[2].innerText)) {
        td[0].style.backgroundColor = `#0F0`
        td[1].style.backgroundColor = `#0F0`
        td[2].style.backgroundColor = `#0F0`
        
        return td[0].innerText
    }
    else if ((td[1].innerText == td[4].innerText) && (td[4].innerText == td[7].innerText)) {
        window.alert(`Parabéns! O jogador ${player} venceu!`)
    }
}




