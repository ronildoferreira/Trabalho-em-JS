var botao = document.getElementById('calculaTotal');
botao.addEventListener("click",calculaTodosTotal);

function calculaTodosTotal (){
  var nossosTrs = document.getElementsByClassName("produtos");
  percorreArray (nossosTrs, calculaTotal);
  function calculaTotal (trAtual){
    var produtoTd = trAtual.getElementsByClassName("info-produto")[0];
    var quantidadeTd = trAtual.getElementsByClassName("info-quantidade")[0];
    var precoTd = trAtual.getElementsByClassName("info-preco")[0];
    var valorTd = trAtual.getElementsByClassName("info-total")[0];
    var soma = {
      produto: produtoTd.textContent,
      quantidade: quantidadeTd.textContent,
      preco: precoTd.textContent,
      pegaTotal : function (){
          var total = this.quantidade * this.preco;
          return total;
        }
      }
    
    valorTd.textContent = soma.pegaTotal();
 }
}
