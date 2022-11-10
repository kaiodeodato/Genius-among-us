var clicar = new Audio();
clicar.src = "click.mp3"

var robosound = new Audio();
robosound.src = "robo.mp3"

var score = new Audio();
score.src = "score.mp3"

var erro = new Audio();
erro.src = "erro.mp3"


var robojogadas = [];
var playerjogadas = [];

let maximo = 5
let d = 1;
let contador = 1

console.log('normal')

// document.addEventListener("keydown",(e) => {
//     switch(e.key){
//         case '1':
//             maximo = 4;
//             d = 1.2;
//             console.log('fácil')
//             break;
//         case '2':
//             maximo = 5;
//             d = 1;
//             console.log('normal')
//             break;
//         case '3':
//             maximo = 6;
//             d = 0.7;
//             console.log('dificil')
//             break;   
//         }
//     }
// )

// funções dificuldade

function facil(){
    maximo = 4;
    d = 1.2;
    contador = 1;
    console.log('facil');
    const facil = document.getElementById('facil');
    const normal = document.getElementById('normal');
    const dificil = document.getElementById('dificil');
    facil.classList.add('ativado');
    normal.classList.remove('ativado');
    dificil.classList.remove('ativado');
}
function normal(){
    maximo = 5;
    d = 1;    
    contador = 1;
    console.log('normal');
    const facil = document.getElementById('facil');
    const normal = document.getElementById('normal');
    const dificil = document.getElementById('dificil');
    facil.classList.remove('ativado');
    normal.classList.add('ativado');
    dificil.classList.remove('ativado');
}
function dificil(){
    maximo = 6;
    d = 0.7;   
    contador = 1;
    console.log('dificil');
    const facil = document.getElementById('facil');
    const normal = document.getElementById('normal');
    const dificil = document.getElementById('dificil');
    facil.classList.remove('ativado');
    normal.classList.remove('ativado');
    dificil.classList.add('ativado');

}



// função jogo
function iniciar(){

    if (contador < maximo){
        ativarrobo(contador);

        setTimeout(() => {
        if (robojogadas.length != 0 && robojogadas.length == playerjogadas.length && (JSON.stringify(robojogadas) == JSON.stringify(playerjogadas))){

            score.play();
            const iniciaricon = document.getElementById('iniciaricon');
            iniciaricon.classList.toggle('ganhou')
            setTimeout(() => {iniciaricon.classList.toggle('ganhou')},500)
            robojogadas = []
            playerjogadas =[]
        }
        else if(robojogadas.length == playerjogadas.length && (JSON.stringify(robojogadas) != JSON.stringify(playerjogadas)) || robojogadas.length != playerjogadas.length
        ){
            const iniciaricon = document.getElementById('iniciaricon');
            iniciaricon.classList.toggle('errou')
            setTimeout(() => {iniciaricon.classList.toggle('errou')},500)
            erro.play();
            robojogadas = []
            playerjogadas =[]
            contador = 0
        }

        contador++;
        
    if(contador >= maximo){
        const iniciaricon = document.getElementById('iniciaricon');
        score.play();
        iniciaricon.classList.toggle('ganhou')

        for (let j = 1; j < 10 ; j++){
            let bloca = 'bloco' + j;
            const bloco = document.getElementById(bloca);
            bloco.classList.toggle('ganhou')

        }
    }
    },(contador*d*2300))
    }



}




// função player

function player(bloconum){
    clicar.play();
    const bloco = document.getElementById(bloconum);
    bloco.classList.toggle('ativar')
    playerjogadas.push(bloconum)

    setTimeout(() => {
        bloco.classList.toggle('ativar');
    },1000)

    // if (robojogadas.length == playerjogadas.length && (JSON.stringify(robojogadas) == JSON.stringify(playerjogadas))){
    //     console.log('acertou');
    //     score.play();
    //     robojogadas = []
    //     playerjogadas =[]
    // }
    // else if(robojogadas.length == playerjogadas.length && (JSON.stringify(robojogadas) != JSON.stringify(playerjogadas))){
    //     console.log('errou')
    //     erro.play();
    // }
}

// função robo

function ativarrobo(cont){
    for(let i = 0; i < cont; i++){
        setTimeout( function(a) {
        const num = Math.floor((Math.random()*9) + 1);
        dentro(num);
        },i*d*1000,i)
    }
}

function dentro(num){
        robosound.play()
        const blocu = 'bloco' + num;
        robojogadas.push(blocu)
        const blocunum2 = document.getElementById(blocu);
        blocunum2.classList.toggle('ativarrobo');
        setTimeout(() => {
            blocunum2.classList.toggle('ativarrobo');
        },1000)

        return robojogadas
}
