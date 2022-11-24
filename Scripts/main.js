const menuButton = document.querySelector('.menu-btn');
const mymenu = document.querySelector('.menu-container');
let menuOpen = false;
const servicebuttons = document.querySelectorAll("#serviceButtons div");
const servicecontain = document.querySelectorAll('.mySliders>div');
//-----------------
const teamImagePhotos = document.querySelectorAll(".TeamCV");
// console.log(teamImagePhotos);
// let imgShow = false;
teamImagePhotos.forEach(imgbutton => {
    imgbutton.addEventListener('click', () => {
        const TeamId = imgbutton.dataset.tid;
        console.log(TeamId);
        if (imgbutton.classList.contains("grayscale")) {
            imgbutton.classList.remove("grayscale");
            imgbutton.classList.remove("bottom-0");
            imgbutton.classList.add("bottom-32");
            const btnBackimage = document.querySelector("#" + TeamId + ">div>.backImg>img");
            const imgCount = document.querySelector("#" + TeamId + ">div>.backImg");
            btnBackimage.classList.remove("bottom-0");
            btnBackimage.classList.add("bottom-32");
            imgCount.classList.remove("opacity-0");
            const tit = document.querySelector("#" + TeamId + ">div>.TitDiv");
            tit.classList.remove("opacity-0");
        } else {
            imgbutton.classList.add("grayscale");
            imgbutton.classList.remove("bottom-32");
            imgbutton.classList.add("bottom-0");
            const btnBackimage = document.querySelector("#" + TeamId + ">div>.backImg>img");
            const imgCount = document.querySelector("#" + TeamId + ">div>.backImg");
            btnBackimage.classList.remove("bottom-32");
            btnBackimage.classList.add("bottom-0");
            imgCount.classList.add("opacity-0");
            const tit = document.querySelector("#" + TeamId + ">div>.TitDiv");
            tit.classList.add("opacity-0");
        }
    });
});


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
        // console.log(slide);
        console.log(button);
        hideHover();
        button.classList.add("bg-primbackground");
        const panel = document.querySelector("#" + slide);
        // console.log(panel);
        panel.classList.remove("hide");
        panel.classList.add("show");
     });
});

function hideAll() {
    servicecontain.forEach(slide => { 
        slide.classList.add("hide");
        
    });
}

function hideHover()
{
    servicebuttons.forEach(slide => {
        slide.classList.remove("bg-primbackground");
     });
}

function hideAllTeam() {
    teamImagePhotos.forEach(imgbutton => {
        const TeamId = imgbutton.dataset.tid;
        if (imgbutton.classList.contains("grayscale")) {
            imgbutton.classList.remove("grayscale");
            imgbutton.classList.remove("bottom-0");
            imgbutton.classList.add("bottom-32");
            const btnBackimage = document.querySelector("#" + TeamId + ">div>.backImg>img");
            const imgCount = document.querySelector("#" + TeamId + ">div>.backImg");
            btnBackimage.classList.remove("bottom-0");
            btnBackimage.classList.add("bottom-32");
            imgCount.classList.remove("opacity-0");
            const tit = document.querySelector("#" + TeamId + ">div>.TitDiv");
            tit.classList.remove("opacity-0");
        } 
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