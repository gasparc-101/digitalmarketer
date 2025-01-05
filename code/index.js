let navBarDynamic = document.querySelector('#nav-bar');
let burger = document.getElementById('ham-menu');
let links = document.querySelectorAll('#nav-bar a')

burger.addEventListener("click", () => {
    burger.classList.toggle('fa-times');
    navBarDynamic.classList.toggle('nav-active');
    console.log(navBarDynamic.classList); // Verifica as classes aplicadas
});

links.forEach(link => {
    link.addEventListener('click', ()=>{
        burger.classList.toggle('fa-times');
        navBarDynamic.classList.toggle('nav-active');
    })
})
