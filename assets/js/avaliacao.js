function Avaliar(smile) {
 var url = window.location;
 url = url.toString()
 url = url.split("avaliacao.html");
 url = url[0];

 var s1 = document.getElementById("s1").src;
 var s2 = document.getElementById("s2").src;
 var s3 = document.getElementById("s3").src;
 
//Bai
if (smile == 3){ 
 if (s3 == url + "assets/img/verde0.jpeg") {
 document.getElementById("s1").src = "assets/img/vermelho0.jpeg";
 document.getElementById("s2").src = "assets/img/laranja0.jpeg";
 document.getElementById("s3").src = "assets/img/verde1.jpeg";
 } else {
 document.getElementById("s1").src = "assets/img/vermelho0.jpeg";
 document.getElementById("s2").src = "assets/img/laranja0.jpeg";
 document.getElementById("s3").src = "assets/img/verde0.jpeg";
}}
 
//ESTRELA 2
if (smile == 2){ 
 if (s2 == url + "assets/img/laranja0.jpeg") {
 document.getElementById("s1").src = "assets/img/vermelho0.jpeg";
 document.getElementById("s2").src = "assets/img/laranja1.jpeg";
 document.getElementById("s3").src = "assets/img/verde0.jpeg";
 } else {
 document.getElementById("s1").src = "assets/img/vermelho0.jpeg";
 document.getElementById("s2").src = "assets/img/laranja0.jpeg";
 document.getElementById("s3").src = "assets/img/verde0.jpeg";
}}
 
 //RUIM
if (smile == 1){ 
 if (s1 == url + "assets/img/vermelho0.jpeg") {
 document.getElementById("s1").src = "assets/img/vermelho1.jpeg";
 document.getElementById("s2").src = "assets/img/laranja0.jpeg";
 document.getElementById("s3").src = "assets/img/verde0.jpeg";
 } else {
 document.getElementById("s1").src = "assets/img/vermelho0.jpeg";
 document.getElementById("s2").src = "assets/img/laranja0.jpeg";
 document.getElementById("s3").src = "assets/img/verde0.jpeg";
}}
 
 document.getElementById('rating').innerHTML = avaliacao;
 
}

/*código base retirado de https: --> //www.blogson.com.br/sistema-de-rating-avaliacao-em-html-e-javascript-parte-1/ */
