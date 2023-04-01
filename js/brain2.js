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
            count++;
            navLi[m].children[1].onmouseleave = () => {
                navLi[m].children[0].setAttribute("class","fas fa-angle-down");
                navLi[m].children[1].style.display="none";
                count = 0;
            }
        }
        else if(count%2 == 1) {
            navLi[m].children[0].setAttribute("class","fas fa-angle-down");
            navLi[m].children[1].style.display="none";
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
