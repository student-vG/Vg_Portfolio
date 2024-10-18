// var typed = new Typed(".auto-type",{
//     strings : ["programmer", "Designer", "Youtuber"],
//     typeSpeed : 150,
//     backSpeed : 150,
//     loop : true
// });     


// Scroll to top button functionality
// const scrollTopBtn = document.getElementById('scroll-top-btn');

// scrollTopBtn.addEventListener('click', () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// });

//! for animation to element smoothly 


document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll('.box-anim ');
  
    const observerOptions = {
      threshold: 0.5, // 50% of the element must be visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, observerOptions);
  
    boxes.forEach(box => {
      observer.observe(box);
    });
  });
  
