function prevSlide() {
    let slider = document.getElementById('galery-slider');
    if (slider.classList.contains('one')) {
        return ;
    } else if (slider.classList.contains('two')) {
        slider.classList.remove('two');
        slider.classList.add('one');
        document.getElementById('galery-btn-left').classList.add('hide');
    } else if (slider.classList.contains('three')) {
        slider.classList.remove('three');
        slider.classList.add('two');
    } else if (slider.classList.contains('four')) {
        slider.classList.remove('four');
        slider.classList.add('three');
        document.getElementById('galery-btn-right').classList.remove('hide');
    }
}

function nextSlide() {
    let slider = document.getElementById('galery-slider');
    if (slider.classList.contains('four')) {
        return ;
    } else if (slider.classList.contains('three')) {
        slider.classList.remove('three');
        slider.classList.add('four');
        document.getElementById('galery-btn-right').classList.add('hide');
    } else if (slider.classList.contains('two')) {
        slider.classList.remove('two');
        slider.classList.add('three');
    } else if (slider.classList.contains('one')) {
        slider.classList.remove('one');
        slider.classList.add('two');
        document.getElementById('galery-btn-left').classList.remove('hide');
    }
}