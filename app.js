(function() {
  function init() {
    if (typeof i18n !== 'undefined') {
      i18n.init();
    }
    
    if (typeof router !== 'undefined') {
      router.init();
      router.updateActiveNav();
    }
    
    initMobileMenu();
    initScrollEffects();
  }
  
  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    
    if (!toggle || !mobileNav) return;
    
    toggle.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      mobileNav.hidden = expanded;
    });
    
    mobileNav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        router.closeMobileMenu();
      });
    });
  }
  
  function initScrollEffects() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    
    var lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      var currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
