function calcular() {
    let txtnum1 = document.getElementById('txtnum1')
    let txtnum2 = document.getElementById('txtnum2')
    let txtnum3 = document.getElementById('txtnum3')
    let num1 = Number(txtnum1.value)
    let num2 = Number(txtnum2.value)
    let num3 = Number(txtnum3.value)

    let media = (num1+num2+num3)/3

    if (num1 < 0 || num2 < 0 || num3 < 0 || num1 > 10 || num2 > 10 || num3 > 10) {
        res.innerHTML = `Você digitou um valor inválido. <br>Tente novamente.`
    } else if (media <= 5){
        res.innerHTML = `Sua média é ${media.toFixed(1)} <br>Reprovado <img src="nao.png" width="25px">`
    } else {
        res.innerHTML = `Sua média é ${media.toFixed(1)} <br>Aprovado <img src="sim.png" width="30px">`
    }
}