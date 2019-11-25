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
	let mensagem =document.createElement('div')
	let desisti = document.createElement('div')
	let nachei = document.createElement('div')
	let cancel = document.createElement('img')
	let ok = document.createElement('div')


	errado.addEventListener('click', function(){
		mensagem.innerHTML = 'Por que deseja remover esse item da lista?'
		mensagem.classList.add('mensagem')
		body = document.querySelector('body')
		body.appendChild(mensagem)
		desisti.innerHTML = 'Desisti da compra.'
		desisti.classList.add('desisti')
		body.appendChild(desisti)
		nachei.innerHTML = 'Não encontrei o produto.'
		nachei.classList.add('nachei')
		body.appendChild(nachei)
		cancel.src="assets/img/nao_tem.png"
		cancel.classList.add('cancel')
		body.appendChild(cancel)
	})

	cancel.addEventListener('click',function(){
		mensagem.remove()
		cancel.remove()
		desisti.remove()
		nachei.remove()
	})

	desisti.addEventListener('click',function(){
		mensagem.remove()
		cancel.remove()
		desisti.remove()
		nachei.remove()
		li.remove()
		certo.remove()
		errado.remove()
	})

	nachei.addEventListener('click',function(){
		mensagem.innerHTML = 'A informação foi atualizada! Obrigado pela colaboração!'
		cancel.remove()		
		desisti.remove()
		nachei.remove()
		li.remove()
		certo.remove()
		errado.remove()
		ok.innerHTML = 'Ok'
		ok.classList.add('ok')
		body.appendChild(ok)

	})	

	ok.addEventListener('click',function(){
		mensagem.remove()
		cancel.remove()
		desisti.remove()
		nachei.remove()
		li.remove()
		certo.remove()
		errado.remove()
		ok.remove()
	})



})	