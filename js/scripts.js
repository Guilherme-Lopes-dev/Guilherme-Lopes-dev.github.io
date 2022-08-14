
let count = 0 ; 
const valueDisplay = document.getElementById('valueDisplay')
  function increment() {
    count++;
    valueDisplay.innerText = count;
    console.log(valueDisplay)
  }

  function decrement() {
    count--;
    valueDisplay.innerText = count;
  }

function showCount(){
  document.getElementById('count').innerHTML = count;
}
function showTotal(){
  document.getElementById('totalValue').innerHTML = 125.00 * count;
}

  /*=============================*/

function displayImg1(){
    document.getElementById('imgdisplay').style.backgroundImage = "url('../assets/image-product-1.jpg')";
}
function displayImg2(){
    document.getElementById('imgdisplay').style.backgroundImage = "url('../assets/image-product-2.jpg')";
}
function displayImg3(){
    document.getElementById('imgdisplay').style.backgroundImage = "url('../assets/image-product-3.jpg')";
}
function displayImg4(){
    document.getElementById('imgdisplay').style.backgroundImage = "url('../assets/image-product-4.jpg')";
}


/* Carrossel de imagens */
var slideIndex = 0; //Setar a primeira imagem como inicial
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n); //Mostrar a primeira imagem
} //Quando usuário clica um dos botões chama a plusDivs()

/*A plusDivs() subtrai ou adiciona 1 ao slideIndex
Showdiv() esconde todos os elementos com o nome "displayImg" e coloca display block
com o elemento que tem o slideIndex
se o slideIndex e mais alto que o numero de elementos (x.length), o slideIndex vai pra 0
se o slideIndex é menor que 1, seta o numero de elementos(x.lenght)
*/
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("displayimg");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length - 1}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showCarousel() {
    document.getElementById('displayCarousel').style.display = "block";
 }

 function closeCarousel() {
    document.getElementById('displayCarousel').style.display = "none";
 }



function closeCart(){
  document.getElementById('cart').style.display = "none";
}


function addToCart(){
  document.getElementById('cart-full').style.display = "block";
  document.getElementById('cart-empty').style.display = "none";
  document.getElementById('notification').style.display = "block";
}

function removeCart(){
  document.getElementById('cart-full').style.display = "none";
  document.getElementById('cart-empty').style.display = "block";
  document.getElementById('notification').style.display = "none";
}

function openSideMenu(){
document.getElementById('side-menu').style.display = "block";

}

function closeSideMenu(){
  document.getElementById('side-menu').style.display = "none";
}

