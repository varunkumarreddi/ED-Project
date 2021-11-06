const navSlide=()=>{
  const burger= document.querySelector('.burger');
  const nav= document.querySelector('.navlist');

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  })
}

navSlide();



const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25, delay: 2.2 })
  .to('.slider3', { y: '100%', duration: 1 ,delay:0.8})
  .to('.intro', { y: '-100%', duration: 0.8, delay:0.2 })
  .to('.slider3', { y: '-100%', duration: 0.8 }, '-=1')
  .to('.home',{ opacity:'1',duration:0})
  .to('.landing',{y:'-100%', duration:0})


