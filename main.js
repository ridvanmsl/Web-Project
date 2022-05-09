//header
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0)
})

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//hero swiper
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

});

//swiper

var swiper = new Swiper(".coming-container", {
    spaceBetween: 30,
    loop:true,
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            sledesPerView:2,
        },
        568:{
            slidesPerView:3,
        },
        768:{
            slidesPerView:4,
        },
        968:{
            slidesPerView:5,
        }
    },
});

//show video

let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let closebtn = document.querySelector('.close-video');

playButton.onclick = () =>{
    video.classList.add("show-video");
};

closebtn.onclick = () =>{
    video.classList.remove("show-video");

}


//https://squoosh.app/editor
//https://boxicons.com/
//https://wall.alphacoders.com/by_sub_category.php?id=317484&name=Doctor+Strange+in+the+Multiverse+of+Madness+Wallpapers