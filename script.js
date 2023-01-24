function sorteioDeReais() {
  const buttonSortear = document.querySelector('.js-button')
  const numero = document.querySelector('.js-numero')

  if (buttonSortear && numero) {
    function sortear() {
      let numeroSorteado = Math.random() * 1000
      numeroSorteado = +numeroSorteado.toFixed(2)
      numero.innerText = numeroSorteado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    }

    buttonSortear.addEventListener('click', sortear)
  }

}

sorteioDeReais()