var sliders = document.querySelectorAll('#sliders li');
var slideratual  = 0;
var total = sliders.length - 1;

window.setInterval(function(){
	/*
	 a variavel index será responsável pela
	 posição do elemento que iremos remover a classe
	*/
	var index =  slideratual ? slideratual - 1 : total;
	/*Pega o elemento pra remover a classe*/
	sliders[index].className  = '';
	/*Adiciona a classe no elemento atual*/
	sliders[slideratual].className  = 'slider-active';
	/*Calcular a posição do próximo elemento que será exibido*/
	slideratual = slideratual >= total ? 0 : slideratual+1; 	
}, 2000);