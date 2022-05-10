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
function newComment(){
    const date = new Date();
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var stringdata = "";
    var fulldate = stringdata.concat(date.getDate()," ",months[date.getMonth()]," ",date.getFullYear(),"  ",date.getHours(),":",date.getMinutes());
    var data = new FormData();
    var fullname = document.getElementById("full-name").value;
    var comment = document.getElementById("comment").value;
    console.log(comment)
    if(fullname == "" || comment == ""){
        alert("Fill the blanks");
    }
    else{
        var user_comment_box = document.createElement("div");
        var user_img_box = document.createElement("div");
        var user_img_com_bx_bxs_face_mask = document.createElement("i");
        var user_comment = document.createElement("div");
        var name_header = document.createElement("h4");
        var comment_of_user = document.createElement("p");
        var commentsection = document.getElementById("newcommentprepend");

        name_header.innerHTML = fullname;
        comment_of_user.innerHTML = comment; 

        user_comment_box.classList.add("user-comment-box");
        user_img_box.classList.add("user-img-box");
        user_img_com_bx_bxs_face_mask.classList.add("user-img-com");
        user_img_com_bx_bxs_face_mask.classList.add("bx");
        user_img_com_bx_bxs_face_mask.classList.add("bxs-face-mask");
        user_comment.classList.add("user-comment");

        commentsection.prepend(user_comment_box);
        user_comment_box.append(user_img_box);
        user_img_box.append(user_img_com_bx_bxs_face_mask);
        user_comment_box.append(user_comment);
        user_comment.append(name_header);
        user_comment.append(comment_of_user);
    }
    
}



// comment 





//https://squoosh.app/editor
//https://boxicons.com/
//https://wall.alphacoders.com/by_sub_category.php?id=317484&name=Doctor+Strange+in+the+Multiverse+of+Madness+Wallpapers