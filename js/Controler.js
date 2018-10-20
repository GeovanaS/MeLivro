var json = 
{
	0:{categoria:'livro',link: '#', imagem: 'img/livrodoscodigos.jpg', titulo:'Livro dos Códigos', descricao:'R$30.00',autor:'Simon Singh'},
	1:{categoria:'livro',link: '#', imagem: 'img/oandardobebado.jpg', titulo:'O Andar do Bêbado', descricao:'R$37.00',autor:'Leonard Mlodinow'},
	2:{categoria:'livro',link: '#', imagem: 'img/laranjamecanica.jpg', titulo:'Laranja Mecânica', descricao:'R$25.00',autor:'Anthony Burgess'},
	3:{categoria:'livro',link: '#', imagem: 'img/alice.jpg', titulo:'Alice no País das Maravilhas', descricao:'R$20.00',autor:'Lewis Carroll'},
	4:{categoria:'livro',link: '#', imagem: 'img/revolucaodosbichos.jpg', titulo:'A revolução dos bichos', descricao:'R$23.90',autor:'George Orwell'},
	5:{categoria:'livro',link: '#', imagem: 'img/engenhariasoftware.jpg', titulo:'Engenharia de Software', descricao:'R$90.00',autor:'Ian Sommerville'},
};


$(document).ready(function(){
	 $('#saidaTxt').html("");
	 listaItens(json);

	 $('#search').bind('input',function(){
	 	busca = $(this).val().toLowerCase();
	 	var keyTeste = null;
	 	if(busca!== ''){
	 		var corresponde = false;
	 		var saida = Array();
	 		var quantidade = 0;
	 		for(var key in json){
	 			var aux = json[key];
	 			for(var key2 in aux){
	 				corresponde = aux[key2].toLowerCase().indexOf(busca) >= 0;
	 				if(corresponde){
	 					if(keyTeste!=key){
	 						saida.push(json[key]);
	 						quantidade+=1;
	 						keyTeste=key;
	 					}
	 				}
	 			}
	 		}
	 		if(quantidade){
	 			$('#saidaTxt').text('');
	 			$('#quantidade').html(quantidade+' resultados!<br><br>');

	 			listaItens(saida);
	 		}else{
	 			$('#quantidade').html('Nenhum Resultado!');
	 			$('#saidaTxt').text('');
	 			listaItens(json);
	 		}
	 		}else{
	 			$('#quantidade').html('');
	 			$('#saidaTxt').text('');
	 			listaItens(json);	
	 	}
	 });

});

function listaItens(objeto){

   for(var ind in objeto){
   	 var li = '<li class="ui-li-has-thumb ui-first-child"><a href="' +objeto[ind]['link']+'" class="ui-btn">'+
			  '<img src="'+objeto[ind]['imagem']+'" class="ui-li-thumb">'+
			  '<h2>'+objeto[ind]['titulo']+'</h2>'+
			  '<p>'+objeto[ind]['descricao']+'</p>'+
			  '<p class="ui-li-aside">'+objeto[ind]['autor']+'</p>'+
			  '</a></li>';
			  $('#saidaTxt').append(li);
   }
 
}

$ (document ).on("pagecreate","body",function(){
	$(document ).on("swipeleft swiperight","body",function( e ) {
		if( $( ".ui-page-active").jsonData( "panel" )!== "open" ){
			if(e.type === "swiperight") {
				$( "#outside").panel("open");
			}
		}
	});
});
