 const toggleBtn = document.getElementById('toggleBtn');
    const aboutMore = document.getElementById('aboutMore');

    aboutMore.addEventListener('shown.bs.collapse', () => {
      toggleBtn.textContent = 'Show Less';
    });

    aboutMore.addEventListener('hidden.bs.collapse', () => {
      toggleBtn.textContent = 'Show More';
    });
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      });
    });