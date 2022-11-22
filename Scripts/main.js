const menuButton = document.querySelector('.menu-btn');
const mymenu = document.querySelector('.menu-container');
let menuOpen = false;
const servicebuttons = document.querySelectorAll("#serviceButtons div");
const servicecontain = document.querySelectorAll('.mySliders>div');
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

servicebuttons.forEach(button => {
    button.addEventListener('click', () => {
        hideAll();
        const slide = button.dataset.subfor;
        console.log(slide);
        const panel = document.querySelector("#" + slide);
        console.log(panel);
        panel.classList.remove("hide");
        panel.classList.add("show");
        
     });
});

function hideAll() {
    servicecontain.forEach(slide => { 
        slide.classList.add("hide");
    });
}


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