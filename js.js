var tabela = document.getElementById("minhaTabela");
var linhas = tabela.getElementsByTagName("tr");

for(var i = 0; i < linhas.length; i++){
	var linha = linhas[i];
  
  linha.addEventListener("click", function(){
  	//Adicionar ao atual
	//	selLinha(this, false); //Selecione apenas um
    selLinha(this, true); //Selecione quantos quiser
	});
  
}

/**
Caso passe true, você pode selecionar multiplas linhas.
Caso passe false, você só pode selecionar uma linha por vez.
**/
function selLinha(linha, multiplos){ //seleciona a linha e atribui class 



	if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
    for(var i = 0; i < linhas.length; i++){
      var linha_ = linhas[i];
      linha_.classList.remove("naoselecionado");    //remove não selecionado para selecionar
    }
  }
  linha.classList.toggle("selecionado");            //se não selecionado muda para selecionado
  linha.classList.toggle("naoselecionado");  
}

/**
Exemplo de como capturar os dados
**/
var btnVisualizar = document.getElementById("visualizarDados"); //btn visualizar lista os selecionados

btnVisualizar.addEventListener("click", function(){  //verifica quem tem classe selecionado e mostra dados ao clicar no botão
	
  var selecionados = tabela.getElementsByClassName("selecionado");
  
  //Verificar se eestá selecionado
  if(selecionados.length < 1){
  	alert("Selecione pelo menos uma linha");
    return false;
  }

  //pegar os dados selecionados

  var dados = "";
  
  for(var i = 0; i < selecionados.length; i++){
  	var selecionado = selecionados[i];
    selecionado = selecionado.getElementsByTagName("td"); //pega o conteúdo da tag selecionado 
    dados += "ID: " + selecionado[0].innerHTML + " - Numero: " + selecionado[1].innerHTML + " - Chave: " + selecionado[2].innerHTML + " - Verificado: " + selecionado[3].innerHTML + "\n ";
  }
  
  alert(dados);


   //envia dados selecionados para o controller do php
 
 /*  $.post("<?= $this->basePath('Manifesto/recebeConhecimentosSelecionados') ?>", { dado: dados }, function(data) {
    if (data != null) {
        alert('Dados enviados');
        window.location = "recebeConhecimentosSelecionados?reg=" + dados;  //local do php que recebe os dados
    } else {
        alert('Dados não enviados');
    }
});*/




});



// le input chave para comparar com as linhas da tabela que não foram selecionadas
function verificaChave(){

    var input = document.querySelector("#chave");
    var chave = input.value;
    console.log(chave);

    var naoselecionados = tabela.getElementsByClassName("naoselecionado");  //verifica as linhas com classe selecionados

    var dados = "";
    
    for(var i = 0; i < naoselecionados.length; i++){
      var naoselecionado = naoselecionados[i]; //lista o numero de linhas não selecionadas
      naoselecionado = naoselecionado.getElementsByTagName("td"); //pega o conteúdo da tag selecionado coluna
      dados += "Não selecionado: ID: " + naoselecionado[0].innerHTML + " - Numero: " + naoselecionado[1].innerHTML + " - Chave: " + naoselecionado[2].innerHTML + " - Verificado: " + naoselecionado[3].innerHTML + "\n ";
    //usa o indice naoselecionado da coluna com o conteudo html (innerhtml).

    alert(dados);
      if(naoselecionado[2].innerHTML == chave){
        alert('chave igual ao input');
        
        //pega o indice da linha do não selecionado
        naoselecionados[i].classList.toggle("selecionado");            //se não selecionado muda para selecionado
        naoselecionados[i].classList.toggle("naoselecionado");  

        //sai da função achou a chave
      }else{
        alert('Chave não está na lista');
        continue;
         //sai da função não achou a chave
      }
       
      }
      alert(chave);

      alert(dados);
    }

/*

    var selecionados = tabela.getElementsByClassName("selecionado");  //verifica as linhas com classe selecionados

    if(selecionados.length < 1){
      alert("Selecione pelo menos uma linha");
      return false;
    }
    
    var dados = "";
    
    for(var i = 0; i < selecionados.length; i++){
      var selecionado = selecionados[i];
      selecionado = selecionado.getElementsByTagName("td"); //pega o conteúdo da tag selecionado 
      dados += "ID: " + selecionado[0].innerHTML + " - Numero: " + selecionado[1].innerHTML + " - Chave: " + selecionado[2].innerHTML + " - Verificado: " + selecionado[3].innerHTML + "\n ";
    
    }
    
    alert(dados);
    


    alert(chave);
    alert(dados);
}*/