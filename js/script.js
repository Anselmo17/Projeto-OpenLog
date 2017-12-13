

/*função que valida o sistema*/
function ValidaLogin(e){

var login = document.getElementById('login').value;
var senha = document.getElementById('senha').value;


//Validação de entrada no sistema login

		if(login == 'anselmo@hotmail.com' && senha == 123){
			
			var form = document.getElementById('form-senha').innerHTML = 'home.html';
			window.location.href= form;

		}else{
			alert('Erro no usuario ou senha favor tentar novamente!!!');
			return false;
		}

		
}


/*************função pra o carrossel funcionar a cada 3 segundos ********************/

function TempoCarrossel(){
	$('.carousel').carousel({
	  interval: 3000
	});
}



