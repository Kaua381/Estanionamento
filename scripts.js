class Parquimetro {
  constructor() {
    this.valorMinimo = 1.00;
  }

  calcularTempo() {
    const valorInserido = parseFloat(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");
    const formatador = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    if (isNaN(valorInserido) || valorInserido < this.valorMinimo) {
      resultado.innerHTML = "<p>Valor insuficiente. Insira pelo menos R$ 1,00.</p>";
      return;
    }

    let tempo = 0;
    let troco = 0;

    if (valorInserido >= 3.00) {
      tempo = 120;
      troco = valorInserido - 3.00;
    } else if (valorInserido >= 1.75) {
      tempo = 60;
      troco = valorInserido - 1.75;
    } else if (valorInserido >= 1.00) {
      tempo = 30;
      troco = valorInserido - 1.00;
    }

    resultado.innerHTML = `
      <p>Tempo de permanência: ${tempo} minutos</p>
      <p>Troco: ${formatador.format(troco)}</p>
    `;
  }
}

const parquimetro = new Parquimetro();