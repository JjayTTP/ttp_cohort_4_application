
let menuIcon= document.querySelector ('#menu-icon');
let menuIcon= document.querySelector ('.navbar');

menuIcon.onclcik = () => {
	menuIcon.classlist.toggle('bx-x');
	navbar.classlist.toggle('active');
}


let section = document. querySelector All('section');
let navlink = document. querySelector All('header nav a ');


window.onscroll=() => {
	section.forEach(sec=>{
		let top =window.scrolly;
		let offset= sec.offsetTop - 150;
		let height= sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top< offset + height ){
			navlink.forEach(links =>{
				links.classlist.remove('active');
				document.querySelector('header nav a [href*='+ id +']').classlist.add('active')
			
			});
		};

	});

	let header = document.querySelector('header');

	header.classlist.toggle('sticky', window.scrolly> 100);
};