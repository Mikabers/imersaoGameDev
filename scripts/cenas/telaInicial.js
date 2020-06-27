class TelaInicial {
  constructor(){
  
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(150);
    text('Hipsta', width / 2, height / 2);
    textSize(60);
    text('adventures', width / 2, height / 5 * 3);
  }
  
  _botao() {
    botaoGerenciador.posicaoY = height / 7 * 5;
    botaoGerenciador.draw();
  }
}