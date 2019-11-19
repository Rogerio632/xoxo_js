let li = document.getElementsByTagName(`li`)
let player

let label = document.getElementById(`label`)
let button = document.querySelector(`button`)
button.addEventListener(`click`, reset)

inicio()

for (let indice = 0; indice < li.length; indice++) {

    li[indice].addEventListener(`click`, () => {

        if (player == `X`) {

            li[indice].innerHTML = player
            player = `O`
            label.innerText = `O`
            label.style.color = `red`
            li[indice].style.pointerEvents = `none`
            

        } else if (player == `O`) {

            li[indice].innerHTML = player
            player = `X`
            label.innerText = `X`
            label.style.color = `blue`
            li[indice].style.pointerEvents = `none`

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

    for (let x = 0; x < li.length; x++) {

        li[x].innerHTML = ``
        li[x].style.pointerEvents = `all`

    }

    inicio()

}

function winner() {


    if ((li[0].innerText == li[1].innerText) && (li[1].innerText == li[2].innerText)) {
        li[0].style.backgroundColor = `#0F0`
        li[1].style.backgroundColor = `#0F0`
        li[2].style.backgroundColor = `#0F0`
        
        return li[0].innerText
    }
    else if ((li[1].innerText == li[4].innerText) && (li[4].innerText == li[7].innerText)) {
        window.alert(`Parabéns! O jogador ${player} venceu!`)
    }
}




