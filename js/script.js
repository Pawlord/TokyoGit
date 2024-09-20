(function(){
    const header = document.querySelector('.header')
    window.onscroll = () => {
        if (window.pageYOffset > 150) {
            header.classList.add('header-active-scroll')
            header.classList.remove('header-padding')
        } else if(window.pageYOffset < 150){
            header.classList.remove('header-active-scroll')
            header.classList.add('header-padding')
        }
    }
}());

//Burger handler
(function(){
    const burgerButton = document.querySelector('.burger')
    const closeBurgerMenu = document.querySelector('.header-nav-close')
    const headerNav = document.querySelector('.header-nav')

    burgerButton.addEventListener('click', function(){
        headerNav.classList.add('header-nav-active')
    })

    closeBurgerMenu.addEventListener('click', function(){
        headerNav.classList.remove('header-nav-active')
    })
}());