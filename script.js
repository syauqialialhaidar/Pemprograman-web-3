  // Membuat event listener untuk anchor link
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      // Ambil elemen target berdasarkan atribut href
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Lakukan scroll yang halus
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

