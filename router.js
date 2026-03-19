var router = {
  routes: {
    '': 'home',
    'home': 'home',
    'services': 'services',
    'portfolio': 'portfolio',
    'about': 'about',
    'contact': 'contact'
  },
  
  currentRoute: 'home',
  
  init: function() {
    window.addEventListener('hashchange', this.handleRoute.bind(this));
    this.handleRoute();
  },
  
  handleRoute: function() {
    var hash = window.location.hash.replace('#', '') || 'home';
    this.navigate(hash);
  },
  
  navigate: function(route) {
    if (!this.routes[route]) {
      route = 'home';
    }
    this.currentRoute = route;
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.closeMobileMenu();
  },
  
  closeMobileMenu: function() {
    var toggle = document.querySelector('.mobile-menu-toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (mobileNav) mobileNav.hidden = true;
  },
  
  render: function() {
    var pageContent = document.getElementById('page-content');
    
    pageContent.innerHTML = components[this.currentRoute]();
    
    if (typeof i18n !== 'undefined') {
      i18n.apply();
    }
    
    this.updateMeta();
    this.updatePageTitle();
    this.updateActiveNav();
  },
  
  updateMeta: function() {
    var metaMap = {
      home: {
        title: 'Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
        desc: 'Partner with Maikel, a senior Elixir & Cloud Architect, to build and maintain scalable, fault-tolerant systems for your SaaS.'
      },
      services: {
        title: 'Services - Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
        desc: 'Expert services in Elixir, Cloud Architecture, and DevOps for SaaS companies'
      },
      portfolio: {
        title: 'Portfolio - Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
        desc: 'Selected projects and case studies from Maikel Frias Mosquea'
      },
      about: {
        title: 'About - Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
        desc: 'Learn more about Maikel Frias Mosquea\'s experience and expertise'
      },
      contact: {
        title: 'Contact - Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
        desc: 'Get in touch with Maikel Frias Mosquea for your Elixir and Cloud Architecture needs'
      }
    };
    
    var meta = metaMap[this.currentRoute] || metaMap.home;
    
    document.querySelector('meta[name="description"]').setAttribute('content', meta.desc);
    document.querySelector('meta[property="og:title"]').setAttribute('content', meta.title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', meta.desc);
    document.querySelector('meta[property="og:url"]').setAttribute('content', 'https://maikel.dev#' + this.currentRoute);
    document.querySelector('meta[name="twitter:title"]').setAttribute('content', meta.title);
    document.querySelector('meta[name="twitter:description"]').setAttribute('content', meta.desc);
  },
  
  updatePageTitle: function() {
    var metaMap = {
      home: 'Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
      services: 'Services - Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
      portfolio: 'Portfolio - Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
      about: 'About - Maikel Frias Mosquea — Senior Elixir & Cloud Architect',
      contact: 'Contact - Maikel Frias Mosquea — Senior Elixir & Cloud Architect'
    };
    
    document.title = metaMap[this.currentRoute] || metaMap.home;
  },
  
  updateActiveNav: function() {
    document.querySelectorAll('[data-nav]').forEach(function(link) {
      var route = link.getAttribute('data-nav');
      if (route === router.currentRoute) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
};
