var botao = document.querySelector("#adicionar-produto");
botao.addEventListener("click", function (event){
event.preventDefault();
var produto = document.querySelector("#campo-produto"); 
var preco = document.querySelector("#campo-preco");
var quantidade = document.querySelector("#campo-quantidade"); 
var novoProduto = 			"<tr class='produtos'>" + 
        "<td class='info-produto' >"+produto.value+"</td>" + 
        "<td class='info-preco' >"+preco.value+"</td>"+ 
		"<td class='info-quantidade' >"+quantidade.value+"</td>"+
		"<td class='info-total' ></td>" + 
		"</tr>"; 
var todosProduto = document.querySelector('table');
todosProduto.innerHTML = todosProduto.innerHTML + novoProduto;
produto.value = ''; 
preco.value ='';
quantidade.value = ''; 
}); 		


