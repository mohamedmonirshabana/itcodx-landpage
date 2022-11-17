const menubutton = document.querySelector("#menubutton");
const svg1 = document.querySelector('#Capa_1');
const svg2 = document.querySelector("#Capa_2");
menubutton.addEventListener('click', () => {
    svg1.classList.toggle("hidden");
    svg2.classList.toggle("hidden");
})




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