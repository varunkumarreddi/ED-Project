const navSlide=()=>{
  const burger= document.querySelector('.burger');
  const nav= document.querySelector('.navlist');
  const navList = document.querySelectorAll('.navlist li');
  //toggle Nav
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');

    //Animate Links
    navList.forEach((link,index)=>{
      if(link.style.animation){
        link.style.animation= '';
      }else{
        link.style.animation = `navListFade 0.5s ease forwards ${index / 7 }s`;
      }
    });

    //Burger animation
    burger.classList.toggle('toggle');
  })
  
}

navSlide();



const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25, delay: 2.2 })
  .fromTo('.intro', { opacity:1},{opacity:0, duration: 1})
  .fromTo('.home',{ opacity:0 },{opacity: 1, duration:1},'-=0.2')
  .to('.landing',{y:'-100%', duration:0})


