let bars =document.querySelector(".bars");
let navLi = document.querySelectorAll("header .links ul li");
let links = document.querySelector("header .links ul");
let count = 0; 
let count2 = 0;
for(let m =1 ; m< navLi.length-1 ; m++){
    navLi[m].onclick = () => {
        if (count%2 === 0){
            navLi[m].children[0].setAttribute("class","fas fa-angle-up");
            navLi[m].children[1].style.display="block";
            navLi[m].classList.add("black-click")
            count++;
            navLi[m].children[1].onmouseleave = () => {
                navLi[m].children[0].setAttribute("class","fas fa-angle-down");
                navLi[m].children[1].style.display="none";
                navLi[m].classList.remove("black-click")
                count = 0;
            }
        }
        else if(count%2 == 1) {
            navLi[m].children[0].setAttribute("class","fas fa-angle-down");
            navLi[m].children[1].style.display="none";
            navLi[m].classList.remove("black-click")
            count = 0;
        }
    }
}

bars.onclick= () => {
    links.classList.toggle("d-none")
}
links.addEventListener("mouseleave", function () {
    links.setAttribute("class","d-none")
})



let list = document.querySelectorAll(".list ul li");
let cards = document.querySelectorAll(".show .cards .card");

for (let i=1 ;i < list.length ; i++) {
    list[0].addEventListener("click",function (){
        list[0].setAttribute("class","active");
        for(let j = 0; j < cards.length ; j++) {
            cards[j].classList.add("d-block");
            cards[j].classList.remove("d-none");
        }
        for(let k = 1; k < list.length ; k++) {
            list[k].removeAttribute("class");
        }
    })
    list[i].addEventListener("click",function () {
        for(let j = 0; j < list.length ; j++)  {
            if(i === j) {
                list[i].setAttribute("class","active");
                for (let k = 0; k< cards.length ;k++) {
                    if(list[j].innerText === cards[k].children[0].children[1].innerText) {
                        cards[k].classList.add("d-block");
                        cards[k].classList.remove("d-none");
                    }
                    else {
                        cards[k].classList.remove("d-block");
                        cards[k].classList.add("d-none");
                    }
                }
            }
            else {
                list[j].removeAttribute("class");
            }
        }
    })
}



let searchBar = document.querySelector (".search input");
let searchIcon = document.querySelector(".ser-icon");

searchIcon.onclick = () => {
    let value = searchBar.value.toLowerCase();
    for(let i = 0 ; i < cards.length ; i++){
        let cardLowerCase = cards[i].innerText.toLowerCase();
        if(cardLowerCase.indexOf(`${value}`) !== -1) {
            cards[i].classList.add("d-block");
            cards[i].classList.remove("d-none");
        }
        else {
            cards[i].classList.remove("d-block");
            cards[i].classList.add("d-none");
        }
    }
}
searchBar.onkeyup = () => {
    let value = searchBar.value.toLowerCase();
    for(let i = 0 ; i < cards.length ; i++){
        let cardLowerCase = cards[i].innerText.toLowerCase();
        if(cardLowerCase.indexOf(`${value}`) !== -1) {
            cards[i].classList.add("d-block");
            cards[i].classList.remove("d-none");
        }
        else {
            cards[i].classList.remove("d-block");
            cards[i].classList.add("d-none");
        }
    }
}