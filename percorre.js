function percorreArray (trsProdutos, comportamento) {
  for (var posicaoTrAtual = 0; posicaoTrAtual <= trsProdutos.length-1 ; posicaoTrAtual++){
    var produtosAtual = trsProdutos[posicaoTrAtual];
    comportamento(produtosAtual);
  }
}
