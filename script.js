let read_more = document.querySelector(".btn");
let hide = document.createElement('button');

hide.classList.add('btn');
hide.classList.add('btn-info');
hide.classList.add('btn_style');
hide.innerHTML="Hide";

let paragraphs = document.querySelectorAll(".flex_p");
function show_p(){
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.remove("hidden");
    }

    read_more.remove()
    document.querySelector('#about_me').appendChild(hide);
}

function hide_p (){
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.add("hidden");
    }

    hide.remove();
    document.querySelector('#about_me').appendChild(read_more);
}

read_more.addEventListener('click', show_p);
hide.addEventListener('click', hide_p)