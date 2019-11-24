document.addEventListener('DOMContentLoaded', function(){

	let certo = document.querySelector('.tem')

	let errado = document.querySelector('.ntem')

	let li = document.querySelector('li')

	certo.addEventListener('click', function(){
		li.classList.add('afterClick')
		certo.src = "assets/img/tem_pos.png"
		certo.classList.add('tem_pos')
		errado.remove()
	})

})	