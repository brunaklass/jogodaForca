class Forca {
  constructor(palavraJogo) {
    this.palavraJogo = palavraJogo;
    this.contVidas = 6;
    this.estado = "aguardando chute";
    this.letrasChutadas = [];
    this.palavraMontada = Array.from("_".repeat(palavraJogo.length));

  }
  chutar(letra) {
    if (letra.length > 1) {
      console.log("voce digitou mais de uma letra, faça um novo chute:");
      return;

    } else if (!/^[a-z]/.test(letra)) {
      console.log("você não digitou uma letra válida. digite novamente.");
      return;
    } else if (this.letrasChutadas.includes(letra)) {
      console.log("Você já digitou esta letra, faça um novo chute.");
      return;
    }

    this.letrasChutadas.push(letra);
    if (this.palavraJogo.includes(letra)) {

      var indice = this.palavraJogo.indexOf(letra);

      while (indice !== -1) {
        this.palavraMontada[indice] = letra;
        var indice = this.palavraJogo.indexOf(letra, indice + 1);
      }
    } else {

      this.contVidas--;
    }

  }

  buscarEstado() {
    if (this.contVidas == 0) {
      this.estado = "perdeu";

    }
    if (this.palavraJogo == this.palavraMontada.join('')) {
      this.estado = "ganhou";

    }
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.contVidas, // Quantidade de vidas restantes
      palavra: this.palavraMontada // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}


module.exports = Forca;