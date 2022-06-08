// ハンバーガーメニュー
$(".hamburger").click(function () {
	$(this).toggleClass("active");
	$(".header__nav").toggleClass("active");
});
$(".header .nav__item a").click(function () {
	$(".hamburger").removeClass("active");
	$(".header__nav").removeClass("active");
});

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
// $(function () {
// 	$(window).scroll(function () {
// 		$(".fadein").each(function () {
// 			var elemPos = $(this).offset().top;
// 			var scroll = $(window).scrollTop();
// 			var windowHeight = $(window).height();
// 			if (scroll > elemPos - windowHeight + 100) {
// 				$(this).addClass("scrollin");
// 			}
// 		});
// 	});
// });

//gsap
const tl = gsap.timeline({
	defaults: { duration: 0.7, opacity: 0, ease: Power2.easeInOut },
});
tl.from(
	".hero__img--blue",
	0.8,
	{
		scale: 0.5,
		ease: Back.easeInOut.config(3),
	},
	"+=0.5"
)
	.from(
		".hero__img--yellow",
		0.7,
		{
			scale: 0.3,
			ease: Back.easeInOut.config(4),
		},
		"-=0.45"
	)
	.from(
		".hero__img--image",
		0.7,
		{
			scale: 0.2,
			ease: Back.easeInOut.config(4),
		},
		"-=0.45"
	)

	.from(
		".hero__title",
		{
			y: 50,
		},
		"-=0.3"
	)
	.from(
		".hero__text",
		{
			y: 50,
		},
		"-=0.4"
	)
	.from(
		".hero__register",
		{
			// y: 60,
			scale: 0.1,
			ease: Back.easeInOut.config(2),
		},
		"-=0.4"
	)
	.from(
		".hero__login",
		0.6,
		{
			// y: 60,
		},
		"-=0.5"
	);

/* =================================== 
スクロールアニメーション
	==================================== */
// gsap.to('.js-demo-section', { //アニメーションしたい要素を指定
// 	x: 800, //横に800px動かす
// 	scrollTrigger: {
// 		trigger: '.js-trigger',//アニメーションが始まるトリガーとなる要素
// 		start: 'top center' //アニメーションが始まる位置を指定
// 	}
// });

/* cando section */
const candoSection = gsap.timeline({
	defaults: {
		ease: "Power2.easeOut",
	},
	scrollTrigger: {
		trigger: ".cando",
		start: "top bottom",
	},
});

candoSection
	.from(".cando .wrapper", {
		duration: 1,
		delay: 0.15,
		x: "-100%",
		ease: "Power2.easeInOut",
	})
	.from(
		".cando .cando__inner",
		{
			duration: 0.55,
			opacity: 0,
			y: 100,
		},
		"-=0.2"
	)
	.from(
		".cando .cando__board",
		{
			duration: 0.55,
			opacity: 0,
			y: -100,
		},
		"<"
	);

/* reason section */
const reasonSection = gsap.timeline({
	defaults: {
		ease: "Power3.easeOut",
	},
	scrollTrigger: {
		trigger: ".reason__inner",
		start: "top bottom",
	},
});

reasonSection.from(".reason__item", {
	x: "100%",
	opacity: 0,
	delay: 0.15,
	stagger: {
		from: "start",
		amount: 0.5,
	},
});

/* plan section */
const planSection = gsap.timeline({
	defaults: {
		ease: "Power2.easeInOut",
	},
	scrollTrigger: {
		trigger: ".plan__inner",
		start: "top bottom",
	},
});

planSection.from(".plan__inner .card", {
	delay: 0.15,
	y: -100,
	opacity: 0,
	stagger: {
		from: "start",
		amount: 0.5,
	},
});

/* questions */
const questionsSection = gsap.timeline({
	defaults: {
		ease: "Power2.easeInOut",
	},
	scrollTrigger: {
		trigger: ".questions__wrapper",
		start: "top bottom",
	},
});

questionsSection.from(".questions__content", {
	delay: 0.1,
	duration: 0.65,
	y: -50,
	opacity: 0,
});

/* trynow section */
const trynowSection = gsap.timeline({
	defaults: {
		duration: 0.3,
		opacity: 0,
		ease: "Power2.easeOut",
	},
	scrollTrigger: {
		trigger: ".trynow--title",
		start: "top bottom",
	},
});

trynowSection
	.from(".trynow--title", {
		y: 50,
		delay: 0.2,
	})
	.from(".trynow--text", {
		y: 50,
	})
	.from(".trynow--btn", {
		scale: 0.2,
		duration: 0.4,
		ease: Back.easeOut.config(2),
	});
