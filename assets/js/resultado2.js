document.addEventListener('DOMContentLoaded', function(){
	let link = document.querySelector('.table')
	link.addEventListener('click',function(){
		window.location.href="lista_uso.html";	
	})
	let link2 = document.querySelector('.table1')
	link2.addEventListener('click',function(){
		window.location.href="lista_inutil.html";	
	})
})	