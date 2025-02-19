function aboutBtnClear() {
    let btns = document.querySelectorAll('.about-btn');
    let lists = document.querySelectorAll('.about-info-list');

    console.log(btns);
    for (let i = 0; i != btns.length; i++) {
        btns[i].classList.remove('active');
        lists[i].classList.remove('active');
    }
}

function missionBtn() {
    aboutBtnClear();
    document.getElementById('about-mission-list').classList.add('active');
    document.getElementById('mission_button').classList.add('active');
}

function visionBtn() {
    aboutBtnClear();
    document.getElementById('about-vision-list').classList.add('active');
    document.getElementById('vision_button').classList.add('active');
}

function valuesBtn() {
    aboutBtnClear();
    document.getElementById('about-values-list').classList.add('active');
    document.getElementById('values_button').classList.add('active');
}

