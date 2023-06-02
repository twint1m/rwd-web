function AnimateElement(element, options) {
    this.animate = function() {
      const randomTransform = Object.keys(options.transform)[Math.floor(Math.random() * Object.keys(options.transform).length)];
      anime({
        targets: element,
        [randomTransform]: options.transform[randomTransform],
        duration: options.duration,
        easing: options.easing,
        complete: function() {
          console.log('Анимация завершена на элементе:', element);
        }
      });
    }
  }
  

  const myElement = document.querySelector('.my-element');
const myAnimation = new AnimateElement(myElement, {
  duration: 1000,
  easing: 'easeInOutSine',
  transform: {
    translateX: '100px',
    rotate: '180deg',
    scale: 1.5
  }
});
myAnimation.animate();
