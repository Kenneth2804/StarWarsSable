const handle = document.querySelector('.handle');
const blade = document.querySelector('.blade');


handle.addEventListener('click', function () {
	handle.classList.toggle('active');
	blade.classList.toggle('active');
})