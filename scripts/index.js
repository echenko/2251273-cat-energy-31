var e=document.querySelector(".navigation__list"),t=document.querySelector(".page-header__button"),s=document.documentElement.clientWidth;e.classList.remove("navigation__list--no-js");t.classList.remove("page-header__button--no-js");t.addEventListener("click",()=>{e.classList.toggle("navigation__list--closed"),t.classList.toggle("page-header__button--closed")});s>768&&(e.classList.add("navigation__list--no-js"),t.classList.add("page-header__button--no-js"));