const hideNavbar = () => {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navigation');
    window.addEventListener("scroll", function(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if(scrollTop > lastScrollTop){
            navbar.style.top="-100px";
        } else {
            navbar.style.top="0";
        }
        lastScrollTop = scrollTop;
    });
}
export default hideNavbar;