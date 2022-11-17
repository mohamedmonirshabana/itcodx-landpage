const menuButton = document.querySelector('.menu-btn');
let menuOpen = false;
menuButton.addEventListener('click', () => { 
    if (!menuOpen){
        menuButton.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
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