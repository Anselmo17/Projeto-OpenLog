/************************************************/
/**************************************************/
//***************armazena produtos***************/
document.getElementById('form-produtos').addEventListener('submit', ArmazenaProdutos);

function ArmazenaProdutos(e){

	var produto = document.getElementById('produto').value;
	var descricao = document.getElementById('descricao').value;
	var quantidade = parseInt(document.getElementById('quantidade').value);
	var valor = parseFloat(document.getElementById('valor').value);


/*teste para enviar o cadastro*/
if((!produto=='') && (!descricao == '') && (!quantidade == '') &&(!valor == '')) {
 
		alert('Cadastro enviado com sucesso!!!');
	}else{
		alert('Por favor preencha os campos...');
		return false;
	}

		//criando um objeto
	var produto = {
					produto:produto,
					descricao:descricao,
					quantidade:quantidade,
					valor:valor
					}

	//armazenando no localStorage as informações
	if(localStorage.getItem('produto2')==null){
		var produtos =  [];
		produtos.push(produto);
		localStorage.setItem('produto2',JSON.stringify(produtos));
	} else{
		var produtos = JSON.parse(localStorage.getItem('produto2'));
		produtos.push(produto);
		localStorage.setItem('produto2',JSON.stringify(produtos));
	}			

document.getElementById('form-produtos').reset();
	
}


/******************função  cadastra produtos********************/
function CadastraProdutos(){
	var produtos = JSON.parse(localStorage.getItem('produto2'));
	var produtosResultado = document.getElementById('resultado');

//recebe os resultados no html
produtosResultado.innerHTML ='';


//loop para informar o preenchimento
	for(var i = 0; i < produtos.length; i++){

		//recebendo os valores das variaveis 
		var produto = produtos[i].produto;
		var descricao = produtos[i].descricao;
		var quantidade = produtos[i].quantidade;
		var valor = produtos[i].valor;
		var total = quantidade * valor; 
		

		//arredondando os valores das casas decimais
		var tot = total.toFixed(2);
		var valor1 = valor.toFixed(2);

		//criando a linha na tabela
		produtosResultado.innerHTML += '<tr class="tamanho"><td>'+produto+'</td>'+'<td>'+descricao+'</td>'
		+'<td>'+quantidade+'</td>'+'<td>'+'R$'+valor1+'</td>'+'<td>'+'R$'+tot+
		'<td><button type="button" class="btn btn-danger botao-excluir" onclick="ExcluirItem(\''+produto+'\')">Excluir</button></td></tr>'

	} 

}


/******************função para excluir itens da lista********************/
function ExcluirItem(produto){

	//pegando itens no local Storage
	var produtos = JSON.parse(localStorage.getItem('produto2'));

	//laço excluir itens na lista
	for(var i = 0; i < produtos.length; i++){
		if(produtos[i].produto == produto){
			produtos.splice(i, 1);
		}

		//setand os produtos que está na lista
		localStorage.setItem('produto2', JSON.stringify(produtos));
	}

	//chamando a função cadastra produtos
	CadastraProdutos();
}

