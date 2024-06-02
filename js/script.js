const numberUm = document.querySelector('#um')
 const numberdois = document.querySelector('#dois')
const btn = document.querySelector('button')
const aviso = document.querySelector('p')


 function sortearNumber(){
    const numberSorteado = Math.floor(Math.random() * (numberdois.value - numberUm.value + 1) + numberUm.value)

   aviso.innerHTML = `${numberSorteado}`

 }

 btn.addEventListener('click',sortearNumber)
