var nossosTrs = document.getElementsByClassName("paciente");
percorreArray (nossosTrs, function (trAtual){
  var nomeTd = trAtual.getElementsByClassName("info-nome")[0];
  var pesoTd = trAtual.getElementsByClassName("info-peso")[0];
  var alturaTd = trAtual.getElementsByClassName("info-altura")[0];
  var imcTd = trAtual.getElementsByClassName("info-imc")[0];
  var pessoa = {
    nome : nomeTd.textContent,
    peso: pesoTd.textContent,
    altura: alturaTd.textContent,
    pegaImc : function (){
      if (this.peso!=0){
        var imcDoPaciente = this.peso / (this.altura * this.altura);
        console.log(imcDoPaciente);
        console.log(this.nome);
        return imcDoPaciente;
      } else {
        console.log("Peso inválido! ");
      }
    }
  }
  console.log(pessoa.nome);
})
