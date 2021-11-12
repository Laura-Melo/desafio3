const calcularFinanciamento = document.getElementById('calcular');

const financiamentoCarro = () => {
  const nome = document.getElementById('nome').value
  const preco = document.getElementById('preco').value
  const salario = document.getElementById('salario').value
  const valorent = document.getElementById('valorent').value
  const qparcelas = document.getElementById('qparcelas').value
  const resultado = document.getElementById('resultado');

  let juros = document.getElementById('juros').value

  jurosDecimais = (juros / 100)

  if(preco !== '' && salario !== '' && valorent !== '' && juros !== '' && qparcelas !== '' && resultado !== ''){
   
    const PV = preco - valorent;
    const vMaximo = salario * 0.3;

    const PMT = ((PV*(1+jurosDecimais) ** qparcelas *(jurosDecimais)) / ((1 + jurosDecimais)**qparcelas-1)).toFixed(2);

    if (PMT <= vMaximo) {
      resultadoFinanciamento = "aprovado";
    }else{
      resultadoFinanciamento = "recusado.";
    }

    resultado.textContent = `Olá ${nome}! O valor ${PV} foi parcelado em ${qparcelas} parcelas com ${juros}% de juros mensais, resultando no valor total de R$ ${PMT} por parcela. De acordo o seu salario de R$ ${salario} e o seu limite de R$ ${vMaximo} para cada parcela, o seu financiamento foi ${resultadoFinanciamento}!`;
  }else{
    alert('Por favor preencha todos os camps para que o financiamento possa ser feito.')
  }  
}


calcularFinanciamento.addEventListener("click", financiamentoCarro)
