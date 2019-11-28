document.addEventListener('DOMContentLoaded', function(){

	let certo = document.querySelector('.tem')

	let errado = document.querySelector('.ntem')

	let li = document.querySelector('li')

	let certo_novo =document.createElement('img')
	let errado_novo =document.createElement('div')

	certo.addEventListener('click', function(){
		li.classList.add('afterClick')
		certo_novo.src = "assets/img/tem_pos.png"
		certo_novo.classList.add('tem_pos')
		certo_novo.classList.add('errado_novo')
		errado.parentNode.replaceChild(errado_novo, errado)
		certo.parentNode.replaceChild(certo_novo, certo)
	})

	certo_novo.addEventListener('click', function(){
		li.classList.remove('afterClick')
		certo_novo.parentNode.replaceChild(certo, certo_novo)
		errado_novo.parentNode.replaceChild( errado, errado_novo)
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

	let certo2 = document.getElementById('certo2')
	let errado2 = document.getElementById('errado2')
	let li2 = document.getElementById('li2')
	let certo_novo2 =document.createElement('img')
	let errado_novo2 =document.createElement('div')

	let mensagem2 =document.createElement('div')
	let desisti2 = document.createElement('div')
	let nachei2 = document.createElement('div')
	let cancel2 = document.createElement('img')
	let ok2 = document.createElement('div')


	certo2.addEventListener('click', function(){
		li2.classList.add('afterClick')
		certo_novo2.src = "assets/img/tem_pos.png"
		certo_novo2.classList.add('tem_pos')
		certo_novo2.classList.add('errado_novo')
		errado2.parentNode.replaceChild(errado_novo2, errado2)
		certo2.parentNode.replaceChild(certo_novo2, certo2)
	})

	certo_novo2.addEventListener('click', function(){
		li2.classList.remove('afterClick')
		certo_novo2.parentNode.replaceChild(certo2, certo_novo2)
		errado_novo2.parentNode.replaceChild( errado2, errado_novo2)
	})	

	errado2.addEventListener('click', function(){
		mensagem2.innerHTML = 'Por que deseja remover esse item da lista?'
		mensagem2.classList.add('mensagem')
		body = document.querySelector('body')
		body.appendChild(mensagem2)
		desisti2.innerHTML = 'Desisti da compra.'
		desisti2.classList.add('desisti')
		body.appendChild(desisti2)
		nachei2.innerHTML = 'Não encontrei o produto.'
		nachei2.classList.add('nachei')
		body.appendChild(nachei2)
		cancel2.src="assets/img/nao_tem.png"
		cancel2.classList.add('cancel')
		body.appendChild(cancel2)
	})

	cancel2.addEventListener('click',function(){
		mensagem2.remove()
		cancel2.remove()
		desisti2.remove()
		nachei2.remove()
	})

	desisti2.addEventListener('click',function(){
		mensagem2.remove()
		cancel2.remove()
		desisti2.remove()
		nachei2.remove()
		li2.remove()
		certo2.remove()
		errado2.remove()
	})

	nachei2.addEventListener('click',function(){
		mensagem2.innerHTML = 'A informação foi atualizada! Obrigado pela colaboração!'
		cancel2.remove()		
		desisti2.remove()
		nachei2.remove()
		li2.remove()
		certo2.remove()
		errado2.remove()
		ok2.innerHTML = 'Ok'
		ok2.classList.add('ok')
		body.appendChild(ok2)

	})	

	ok2.addEventListener('click',function(){
		mensagem2.remove()
		cancel2.remove()
		desisti2.remove()
		nachei2.remove()
		li2.remove()
		certo2.remove()
		errado2.remove()
		ok2.remove()
	})

	let certo3 = document.getElementById('certo3')
	let errado3 = document.getElementById('errado3')
	let li3 = document.getElementById('li3')
	let certo_novo3 =document.createElement('img')

	let mensagem3 =document.createElement('div')
	let desisti3 = document.createElement('div')
	let nachei3 = document.createElement('div')
	let cancel3 = document.createElement('img')
	let ok3 = document.createElement('div')
	let errado_novo3 =document.createElement('div')


	certo3.addEventListener('click', function(){
		li3.classList.add('afterClick')
		certo_novo3.src = "assets/img/tem_pos.png"
		certo_novo3.classList.add('tem_pos')
		certo_novo3.classList.add('errado_novo')
		errado.parentNode.replaceChild(errado_novo3, errado3)
		certo.parentNode.replaceChild(certo_novo3, certo3)
	})

	certo_novo3.addEventListener('click', function(){
		li3.classList.remove('afterClick')
		certo_novo3.parentNode.replaceChild(certo3, certo_novo3)
		errado_novo3.parentNode.replaceChild( errado3, errado_novo3)
	})	


	errado3.addEventListener('click', function(){
		mensagem3.innerHTML = 'Por que deseja remover esse item da lista?'
		mensagem3.classList.add('mensagem')
		body = document.querySelector('body')
		body.appendChild(mensagem3)
		desisti3.innerHTML = 'Desisti da compra.'
		desisti3.classList.add('desisti')
		body.appendChild(desisti3)
		nachei3.innerHTML = 'Não encontrei o produto.'
		nachei3.classList.add('nachei')
		body.appendChild(nachei3)
		cancel3.src="assets/img/nao_tem.png"
		cancel3.classList.add('cancel')
		body.appendChild(cancel3)
	})

	cancel3.addEventListener('click',function(){
		mensagem3.remove()
		cancel3.remove()
		desisti3.remove()
		nachei3.remove()
	})

	desisti3.addEventListener('click',function(){
		mensagem3.remove()
		cancel3.remove()
		desisti3.remove()
		nachei3.remove()
		li3.remove()
		certo3.remove()
		errado3.remove()
	})

	nachei3.addEventListener('click',function(){
		mensagem3.innerHTML = 'A informação foi atualizada! Obrigado pela colaboração!'
		cancel3.remove()		
		desisti3.remove()
		nachei3.remove()
		li3.remove()
		certo3.remove()
		errado3.remove()
		ok3.innerHTML = 'Ok'
		ok3.classList.add('ok')
		body.appendChild(ok3)

	})	

	ok3.addEventListener('click',function(){
		mensagem3.remove()
		cancel3.remove()
		desisti3.remove()
		nachei3.remove()
		li3.remove()
		certo3.remove()
		errado3.remove()
		ok3.remove()
	})

})	