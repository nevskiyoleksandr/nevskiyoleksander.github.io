menu.onclick = function myFunction() {
	var x = document.getElementById('mytopnav');
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
window.onscroll = function showHeader(){

	var header = document.querySelector('.header');

	if(window.pageYOffset > 800){
		header.classList.add('header_fixed');
	}
	else{
		header.classList.remove('header_fixed');
	}

}
