window.onload = function(){
    let mainNavBar = document.querySelector('.main-nav-bar');
    let burger = document.querySelector('.burger');
    let mediaQueryList = window.matchMedia('(min-width: 769px)');
    burger.addEventListener('click', (e) => {
    
        mainNavBar.classList.toggle("main-nav-bar-display")
        mainNavBar.classList.toggle("main-nav-bar")
        //burger.style.display = "none"
    })
    mediaQueryList.addEventListener( "change", (e) => {
        if (e.matches) { 
            mainNavBar.classList.add("main-nav-bar")
            mainNavBar.classList.remove("main-nav-bar-display")
        }
    })       
        /*     
            mainNavBar.addEventListener('mouseout', (e) => {
    
                mainNavBar.classList.add("main-nav-bar")
                mainNavBar.classList.remove("main-nav-bar-display")
                 burger.style.display = "block"
            })*/
        /* }
    }) */
   /*  mediaQueryList.addEventListener( "change", (e) => {
        if (e.matches) {
    mainNavBar.classList.remove("main-nav-bar-display")
    mainNavBar.classList.add("main-nav-bar")
    burger.style.display = "none"
    }}) */
    
}

