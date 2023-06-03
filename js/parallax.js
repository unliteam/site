let groups = document.querySelectorAll('.parallax__group');
let parallax_divide = 1.5;
[].forEach.call(groups, group => {
	let parallax = group.children[0];
	let scroller = group.parentNode;
	let parallax_set = event => {
		let rect;
		parallax.style.height = window.innerHeight * parallax_divide + 'px';
		rect = group.offsetTop / parallax_divide;
		parallax.style.transform = 'translateY('+ (scroller.scrollTop / parallax_divide - rect) + 'px)';
	}
	group.style.overflow = 'hidden';
	parallax.style.transform= 'scale(1.2)';

	scroller.addEventListener('scroll', parallax_set);
	window.addEventListener('resize', parallax_set);

	parallax_set();
})

setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);
