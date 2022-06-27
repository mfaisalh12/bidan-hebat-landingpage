let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('myslides');
	if (n >= slides.length || slideIndex >= slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	if (window.matchMedia('only screen and (max-width: 520px)')) {
		slides[slideIndex - 1].style.display = 'block';
	} else {
		slides[slideIndex - 1].style.display = 'block';
		slides[slideIndex].style.display = 'block';
	}
}
