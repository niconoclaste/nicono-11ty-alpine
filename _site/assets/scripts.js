function draggableSlider(element) {
  let isDown = false;
  let startX;
  let scrollLeft;
  const slider = element.querySelector('.m-works-list');
  const sliderWidth = slider.outerWidth;
	const slide = slider.querySelector('li');
	const slideWidth = slide.outerWidth;
	console.log(sliderWidth);
	console.log(slideWidth);
  const end = () => {
    isDown = false;
    slider.classList.remove('draggin');
    // setTimeout(() => slider.classList.remove('draggin'), 400);
  }
  const start = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;	
  }
  const move = (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    if(slider.scrollLeft !== scrollLeft - dist){
      slider.classList.add('draggin');
    }else{
       // slider.classList.remove('draggin');
      // setTimeout(() => slider.classList.remove('draggin'), 400);
    }
    slider.scrollLeft = scrollLeft - dist;
  }
  (() => {
    slider.addEventListener('mousedown', start);
    // slider.addEventListener('touchstart', start);
  
    slider.addEventListener('mousemove', move);
    // slider.addEventListener('touchmove', move);
  
    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    window.addEventListener('resize', () => slider.scrollLeft = 0);
    // slider.addEventListener('touchend', end);
  })();
};

if(document.getElementById('top-works')){
	draggableSlider(document.getElementById('top-works'));
}

function setWave(){
	const yDecal = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--yDecal'));
	const scale = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--scale'));
	const adjust = parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--adjust'));
	const radius = window.innerWidth * scale;
	const xDecal = Math.sqrt(((radius / 2) ** 2) - ((((radius / 2) - yDecal) + adjust) ** 2));
	document.documentElement.style.setProperty('--xDecal', xDecal+'px');
}
setWave();
addEventListener('resize', (e) => {setWave()});