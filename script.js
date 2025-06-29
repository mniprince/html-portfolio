const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        if(link.hash) {
          e.preventDefault();
          const target = document.querySelector(link.hash);
          if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
          
          navLinks.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    });

    
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      navLinks.forEach(link => {
        if(link.hash) {
          const section = document.querySelector(link.hash);
          if(section) {
            if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
              navLinks.forEach(a => a.classList.remove('active'));
              link.classList.add('active');
            }
          }
        }
      });
    });
  
  const dots = document.querySelectorAll('.testimonial-dots .dot');
  const img = document.getElementById('testimonial-img');
  const name = document.getElementById('testimonial-name');
  const text = document.getElementById('testimonial-text');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      img.src = dot.getAttribute('data-img');
      name.textContent = dot.getAttribute('data-name');
      text.textContent = dot.getAttribute('data-text');
    });
  });
  
  document.getElementById('year').textContent = new Date().getFullYear();
