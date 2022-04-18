// ハンバーガーメニュー
$(".hamburger").click(function () {
	$(this).toggleClass("active");
	$(".header__nav").toggleClass("active");
});
$(".header .nav__item a").click(function () {
	$(".hamburger").removeClass("active");
	$(".header__nav").removeClass("active");
});
// const hamburger = querySelector(".hamburger");
// const headerNav = querySelector(".header__nav");
// const headerNavItem = querySelector(".header .nav__item a");

// ナビのスクロール遷移設定
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const id = e.currentTarget.getAttribute("href").slice(1);
		const element = document.getElementById(id);
		const navHeight = document.querySelector(".header").getBoundingClientRect().height;
		console.log(id, element, navHeight);
		let position = element.offsetTop - navHeight;
		window.scrollTo({
			left: 0,
			top: position,
		});
	});
});

// scrollinの設定
$(function () {
	$(window).scroll(function () {
		$(".fadein").each(function () {
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 150) {
				$(this).addClass("scrollin");
			}
		});
	});
});

//gsap
const tl = gsap.timeline({
	defaults: { duration: 0.7, opacity: 0, ease: Power2.easeInOut },
});
tl.from(".hero__title", {
	delay: 1.4,
	y: 50,
})
	.from(
		".hero__text",
		{
			y: 50,
		},
		"-=0.3"
	)
	.from(
		".hero__register",
		{
			// y: 60,
			scale: 0.1,
			ease: Back.easeInOut.config(2),
		},
		"-=0.2"
	)
	.from(
		".hero__login",
		0.6,
		{
			// y: 60,
		},
		"-=0.5"
	)
	.from(
		".hero__img--blue",
		0.8,
		{
			// y: 60,
			scale: 0.5,
			ease: Back.easeInOut.config(3),
		},
		"-=0.3"
	)
	.from(
		".hero__img--yellow",
		0.7,
		{
			// y: 60,
			scale: 0.3,
			ease: Back.easeInOut.config(4),
		},
		"-=0.45"
	)
	.from(
		".hero__img--image",
		0.7,
		{
			// y: 60,
			scale: 0.2,
			ease: Back.easeInOut.config(4),
		},
		"-=0.45"
	);
