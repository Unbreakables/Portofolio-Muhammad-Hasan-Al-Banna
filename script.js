//==============================
// Fade Animation
//==============================

const fade = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    fade.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-120){

            item.classList.add("show");

        }

    });

});

fade.forEach(item=>{

    item.classList.add("fade");

});
const typing = document.querySelector(".typing-text");

const text = [
    "Keuangan & Akuntansi",
    "Bisnis Analis",
    
];

let i = 0;

function changeText(){

    typing.textContent = text[i];

    i++;

    if(i >= text.length){

        i = 0;

    }

}

changeText();

setInterval(changeText,2000);

const lightbox = document.querySelector(".lightbox");

const popupImage = document.getElementById("popup-image");

const closeBtn = document.querySelector(".close");

document.querySelectorAll(".view-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        popupImage.src = button.dataset.image;

        lightbox.classList.add("active");

    });

});

// Popup untuk gambar Experience & Certificate

document.querySelectorAll(".popup-image").forEach(img=>{

    img.addEventListener("click",()=>{

        popupImage.src = img.src;

        lightbox.classList.add("active");

    });

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});
