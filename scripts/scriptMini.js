const hamNav=document.querySelector(".icon"),menu=document.querySelector(".menu"),menuItems=document.querySelectorAll(".menuItem"),closeIcon=document.querySelector(".closeIcon"),menuIcon=document.querySelector(".menuIcon");function toggleMenu(){menu.classList.contains("showMenu")?(menu.classList.remove("showMenu"),closeIcon.style.display="none",menuIcon.style.display="block"):(menu.classList.add("showMenu"),closeIcon.style.display="block",menuIcon.style.display="none")}hamNav.addEventListener("click",toggleMenu);const slideWrapper=document.querySelector(".carouselItems"),slides=Array.from(slideWrapper.children);console.log(slides);const nextBtn=document.querySelector(".rightBtn"),prevBtn=document.querySelector(".leftBtn"),dotsNav=document.querySelector(".carouselNav"),dots=Array.from(dotsNav.children);console.log(dots);const slideWidth=slides[0].getBoundingClientRect().width;console.log(slideWidth);const setSlidePosition=(e,t)=>{e.style.left=slideWidth*t+"px"};slides.forEach(setSlidePosition);const moveToSlide=(e,t,s)=>{e.style.transform="translateX(-"+s.style.left+")",t.classList.remove("currentSlide"),s.classList.add("currentSlide")},updateDots=(e,t)=>{e.classList.remove("currentSlide"),t.classList.add("currentSlide")},hideShowArrows=(e,t,s,l)=>{0===l?(t.classList.add("isHidden"),s.classList.remove("isHidden")):l===e.length-1?(t.classList.remove("isHidden"),s.classList.add("isHidden")):(t.classList.remove("isHidden"),s.classList.remove("isHidden"))};function debounce(e,t){let s;return function(){let l=this,n=arguments;clearTimeout(s),s=setTimeout(function(){e.apply(l,n)},t)}}nextBtn.addEventListener("click",e=>{let t=slideWrapper.querySelector(".currentSlide"),s=t.nextElementSibling,l=dotsNav.querySelector(".currentSlide"),n=l.nextElementSibling,i=slides.findIndex(e=>e===s);moveToSlide(slideWrapper,t,s),updateDots(l,n),hideShowArrows(slides,prevBtn,nextBtn,i)}),prevBtn.addEventListener("click",e=>{let t=slideWrapper.querySelector(".currentSlide"),s=t.previousElementSibling,l=dotsNav.querySelector(".currentSlide"),n=l.previousElementSibling,i=slides.findIndex(e=>e===s);moveToSlide(slideWrapper,t,s),updateDots(l,n),hideShowArrows(slides,prevBtn,nextBtn,i)}),dotsNav.addEventListener("click",e=>{let t=e.target.closest("button");if(console.log(t),console.log("test1"),!t)return;console.log("test2"),currentSlide=slideWrapper.querySelector(".currentSlide");let s=dotsNav.querySelector(".currentSlide");console.log(dots);let l=dots.findIndex(e=>e===t);console.log(l);let n=slides[l];console.log(n),moveToSlide(slideWrapper,currentSlide,n),updateDots(s,t),hideShowArrows(slides,prevBtn,nextBtn,l)}),window.addEventListener("resize",debounce(function(){location.reload()},250));