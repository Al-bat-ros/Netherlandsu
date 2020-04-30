// меню бургер
const menuBurger = () => {
  const icon = document.querySelector('.menu-icon'),
        iconWrapper = document.querySelector('.icon-wrapper'),
        sidebar = document.querySelector('.sidebar'),
        closeBtn = document.querySelector('.close-btn');
        

  iconWrapper.addEventListener('click', () => {
      icon.classList.toggle('menu-icon-active');
      sidebar.classList.toggle('sidebar-active');
  });
  closeBtn.addEventListener('click', () => {
       sidebar.classList.remove('sidebar-active');
       icon.classList.remove('menu-icon-active');
  });

};
menuBurger();


//слайдер
const slideShow = () => {

  const imgIsland = document.querySelector('.img-island');
    

  let currentSlide = 0,
      interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  }

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

  const autoPlaySlide = () => {
    prevSlide(imgIsland.children, currentSlide, 'z-position');
    currentSlide++;
    if(currentSlide >= imgIsland.children.length){
      currentSlide = 0;
    }
    nextSlide(imgIsland.children, currentSlide, 'z-position');
  };

  const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time); 
  };
  
  const stopSlide = () => {
      clearInterval(interval);
  };

  imgIsland.addEventListener('click', (event) => {
    let target = event.target;
    if(target.matches('.arrow-img')){
      autoPlaySlide();
    }
  });

  imgIsland.addEventListener('mouseover', (event) => {
    if(event.target.matches('.img-block img, p')){
        stopSlide();
    }
  });

  imgIsland.addEventListener('mouseout', (event) => {   
    if(event.target.matches('.img-block img, p')){
        startSlide();
    }
  });

  startSlide(4000);
 
};
slideShow();


    


