burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('ulvresp');
    navlist.classList.toggle('ulvresp');
    navbar.classList.toggle('navhresp');

})
