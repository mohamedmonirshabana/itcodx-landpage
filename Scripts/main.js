const menuButton = document.querySelector('.menu-btn');
const mymenu = document.querySelector('.menu-container');
let menuOpen = false;
menuButton.addEventListener('click', () => { 
    if (!menuOpen){
        menuButton.classList.add('open');
        mymenu.classList.add('active');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        mymenu.classList.remove('active');
        menuOpen = false;
    }
});




function animate(elem,style,unit,from,to,time) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            elem.style[style] = (from+step*(to-from))+unit;
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}