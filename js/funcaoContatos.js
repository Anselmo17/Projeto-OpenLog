/*****************pegando os valores do cadastro***********************/

function ArmazenaContato(){

	var nome = document.getElementById('nome').value;
	var empresa = document.getElementById('empresa').value;
	var email = document.getElementById('Email').value;
	var telefone = parseInt(document.getElementById('telefone').value);

//validando o campo email 
 var obj = eval("document.forms[0].Email");
	  var txt = obj.value;
	  if ((txt.length != 0) && ((txt.indexOf("@") < 1) || (txt.indexOf('.') < 7)))
	  {
	    alert('E-mail inválido favor digitar novamente !!!');
		obj.focus();
		return false;
	  }

/*teste para o formulário não está em branco para enviar o cadastro*/
if((!nome=='') && (!empresa == '') && (!email == '') &&(!telefone == '')) {

		alert('Cadastro enviado com sucesso!!!');
	}else{
		alert('Por favor preencha os campos...');
		return false;
	}


		//criando um objeto
	var contato = {
					nome:nome,
					empresa:empresa,
					email:email,
					telefone:telefone
					
					}

	//armazenamento no localStorage
	if(localStorage.getItem('contato2')==null){
		var contatos =  [];
		contatos.push(contato);
		localStorage.setItem('contato2',JSON.stringify(contatos));
	} else{
		var contatos = JSON.parse(localStorage.getItem('contato2'));
		contatos.push(contato);
		localStorage.setItem('contato2',JSON.stringify(contatos));
	}			
document.getElementById('form-cadastro').reset();

	}


/******************começa aqui******************************/

/******************função qu cadastra produtos********************/
function CadastraContatos(){
	var contatos = JSON.parse(localStorage.getItem('contato2'));
	var contatosResultado = document.getElementById('resultadoContato');
      
//recebe os resultados no html
contatosResultado.innerHTML ='';

//loop para informar o preenchimento
	for(var i = 0; i < contatos.length; i++){

		var nome = contatos[i].nome;
		var empresa = contatos[i].empresa;
		var email = contatos[i].email;
		var telefone = contatos[i].telefone;
		
		//criando a linha na tabela
		contatosResultado.innerHTML += '<tr class="cor-Contatos tabela-Contatos"><td>'+nome+'</td>'+'<td>'+empresa+'</td>'
		+'<td>'+email+'</td>'+'<td>'+telefone+'</td>'+
		'<td><button type="button" class="btn btn-danger botao-contatos" onclick="ExcluirItem(\''+nome+'\')">Excluir</button></td></tr>'

	} 

}


/******************função para excluir itens da lista********************/
function ExcluirItem(nome){

	//pegando itens no local Storage
	var nomes = JSON.parse(localStorage.getItem('contato2'));

	//laço excluir itens na lista
	for(var i = 0; i < nomes.length; i++){
		if(nomes[i].nome == nome){
			nomes.splice(i, 1);
		}

		//setand os produtos que está na lista
		localStorage.setItem('contato2', JSON.stringify(nomes));
	}

	//chamando a função cadastra produtos
	CadastraContatos();
}






