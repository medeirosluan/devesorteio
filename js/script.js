const pedra = document.querySelector('.pedra')
const papel = document.querySelector('.papel')
const tesoura = document.querySelector('.tesoura')
const icone = document.querySelector('img')
const minhaPontuacao = document.querySelector('.minha-pontuacao')
const perda = document.querySelector('.sorte')
const pontuacaoMaquina = document.querySelector('.pontuacao-maquina')



let meuScore = 0
let scoreMaquina = 0

const minhaEscolha = (minhaOpcao) => {

  playGamer(minhaOpcao, escolhaMaquina())

}

const playGamer = (humano, maquina) => {
  if (humano === maquina) {
    perda.src = './assets/direitos-iguais.png'
  } else if ((humano === 'papel' && maquina === 'pedra') ||
    (humano === 'pedra' && maquina === 'tesoura') ||
    (humano === 'tesoura' && maquina === 'papel')) {
    perda.src = './assets/feliz.png'
    meuScore++
    minhaPontuacao.innerHTML =  meuScore
  } else {
    scoreMaquina++
    pontuacaoMaquina.innerHTML = scoreMaquina 
    perda.src = './assets/robo.png'
  }

}

pedra.addEventListener('click', () => {
  minhaEscolha('pedra')

})
papel.addEventListener('click', () => {
  minhaEscolha('papel')

})
tesoura.addEventListener('click', () => {
  minhaEscolha('tesoura')
})

const escolhaMaquina = () => {
  const opcoesMaquina = ['pedra', 'papel', 'tesoura']
  const escolhaAleatoria = Math.floor(Math.random() * 3)
  return opcoesMaquina[escolhaAleatoria]
}





const trocaIcone = (iconeAntigo, novoIcone) => {
  iconeAntigo.src = novoIcone
}

pedra.addEventListener('click', () => trocaIcone(pedra, './assets/carvao.png'))
papel.addEventListener('click', () => trocaIcone(papel, './assets/folha-de-papel.png'))
tesoura.addEventListener('click', () => trocaIcone(tesoura, './assets/tesoura.png'))


const voltaIcone = (iconeNovo, voltaOriginal) => {
  iconeNovo.src = voltaOriginal
}

pedra.addEventListener('mouseout', () => voltaIcone(pedra, './assets/soco.png'))
papel.addEventListener('mouseout', () => voltaIcone(papel, './assets/mao-aberta.png'))
tesoura.addEventListener('mouseout', () => voltaIcone(tesoura, './assets/dois-dedos.png'))


