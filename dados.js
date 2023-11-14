

function jogarDados(){
    return Math.floor(Math.random()*6+1)
}
function ganhador(x,y){
    if(x>y){
        document.getElementById("ganhador").innerHTML="Vermelho Ganhou!"
    }
    else if(x<y){
        document.getElementById("ganhador").innerHTML="Preto Ganhou!"
    }
    else if(x==y){
        document.getElementById("ganhador").innerHTML="Deu Empate!"
    }
}
function iniciarJogo(){
    var dp1 = jogarDados()
    var dp2 = jogarDados()
    var dp3 = jogarDados()
    document.getElementById("dadoC1").src="Sprites/dadoPreto"+dp1+".png"
    document.getElementById("dadoC2").src="Sprites/dadoPreto"+dp2+".png"
    document.getElementById("dadoC3").src="Sprites/dadoPreto"+dp3+".png"
    var somaP = dp1+dp2+dp3
    var dj1 = jogarDados()
    var dj2 = jogarDados()
    var dj3 = jogarDados()
    document.getElementById("dadoJ1").src="Sprites/dadoVermelho"+dj1+".png"
    document.getElementById("dadoJ2").src="Sprites/dadoVermelho"+dj2+".png"
    document.getElementById("dadoJ3").src="Sprites/dadoVermelho"+dj3+".png"
    var somaV = dj1+dj2+dj3
    ganhador(somaV,somaP)
}

