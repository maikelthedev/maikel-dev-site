(function () {
  var STORAGE_KEY = 'maikel-dev-lang';

  var translations = {
    en: {
      urgent: 'Available for New Long-Term Partnerships in Q2 2026',
      heroTitle: 'Scale Your Systems with a <span class="highlight">Senior Elixir & Cloud Architect</span>',
      tagline: 'I work with companies who value reliability, scalability, and performance. If you’re looking for a dedicated architect to collaborate with your team, let’s talk.',
      intro: 'I’m <strong>Maikel Frias Mosquea</strong>, a senior <strong>Elixir & Cloud Architect</strong> with 10+ years of experience. I specialize in long-term collaborations, helping teams scale their infrastructure seamlessly. I work closely with your team to build and maintain systems that grow with your business.',
      scarcity1: '',
      cta1: 'Let’s Talk',
      sectionServices: 'How I Can Help',
      s1Title: 'Elixir & Phoenix Mastery',
      s1Desc: 'Scalable, fault-tolerant backends and distributed services that handle growth effortlessly. I focus on building systems that evolve with your needs, so you can scale without worry.',
      s2Title: 'Full-Stack Excellence',
      s2Desc: 'End-to-end development with Angular, React, Next.js, Django, Flask, or Phoenix. I don’t just build features—I create solutions that give you a lasting competitive edge.',
      s3Title: 'Cloud & DevOps Leadership',
      s3Desc: 'Kubernetes, CI/CD, Terraform, Ansible, and multi-cloud expertise to future-proof your infrastructure. I help you deploy with confidence and maintain systems that grow with your business.',
      s4Title: 'Reliability Engineering',
      s4Desc: 'Systems that thrive under pressure, with zero downtime and maximum resilience. Your users enjoy a seamless experience, and your team gains peace of mind.',
      s5Title: 'Strategic Cost Optimization',
      s5Desc: 'Smart, sustainable savings through right-sized cloud resources and open-source tools. I help you optimize costs so you can invest more in what matters.',
      s6Title: 'GDPR Compliance',
      s6Desc: 'Peace of mind with audits, documentation, and best practices for full compliance. Your systems stay compliant and ready for the future.',
      sectionWhy: 'Why Work With Me?',
      w1Title: '🔥 Focused on Your Success',
      w1Desc: 'I work with a select few clients each quarter to ensure I can provide the attention and expertise you deserve. My goal is to integrate with your team and help you succeed.',
      w2Title: '🚀 Solving Challenges Others Can’t',
      w2Desc: 'Where others see limitations, I see opportunities. If you’re facing systemic issues or cloud complexities, I’ll help you turn them into strengths.',
      w3Title: '💡 Clear, Actionable Results',
      w3Desc: 'No jargon, no fluff—just practical solutions that move your business forward. My clients appreciate the clarity and the lasting impact of our work together.',
      w4Title: '🤝 A Partner for the Long Haul',
      w4Desc: 'I don’t just build systems—I mentor your team, optimize your processes, and ensure your infrastructure scales as you grow. This is about building a relationship, not just a project.',
      countdown: '',
      sectionPortfolio: 'How I’ve Helped Teams Like Yours',
      p1Title: 'Survation Panel System',
      p1Desc: 'Full-stack survey platform for a UK market research leader. Together, we reduced cloud costs by 30% and improved response times by 40%, all with zero downtime.',
      p2Title: 'OCI Development Cloud',
      p2Desc: 'Oracle Cloud Infrastructure as Code for SkunkWerks. We cut deployment time by 70% and eliminated manual errors, setting them up for effortless scaling.',
      p3Title: 'Min.io Cluster Deployment',
      p3Desc: 'Custom Min.io deployment for Headbright Group. By focusing on their long-term needs, we saved $12K/year in storage costs and achieved 99.99% uptime.',
      sectionTech: 'Technologies I Work With',
      sectionTestimonials: 'What Clients Say',
      t1Quote: '"Maikel has a wide range of tech skills and navigated our environment with ease. He picked up our stack quickly and made rapid progress with minimal oversight. <strong>He was a pleasure to work with, and I’d gladly do so again.</strong>"',
      t2Quote: '"I engaged Maikel for a DevOps assignment. His proficiency and dedication were clear from the start. <strong>He delivered with precision and ensured every detail was handled professionally.</strong>"',
      t3Quote: '"Maikel is a multi-talented tech leader, expertly managing code, clouds, and complexities. <strong>I would not hesitate to recommend him to anyone looking for a skilled, long-term partner.</strong>"',
      scarcity2: '<a href="mailto:hello@maikel.dev" style="color: var(--primary); text-decoration: underline;">Let’s talk about how we can work together</a>.',
      cta2: 'Join Forces',
      footer: '© 2026 Maikel OÜ — Based in Estonia, serving clients worldwide.'
    },
    es: {
      urgent: 'Disponible para nuevas colaboraciones a largo plazo en Q2 2026',
      heroTitle: 'Escala tus sistemas con un <span class="highlight">Arquitecto Senior en Elixir y Cloud</span>',
      tagline: 'Trabajo con empresas que valoran la fiabilidad, escalabilidad y rendimiento. Si buscas un arquitecto dedicado para colaborar con tu equipo, hablemos.',
      intro: 'Soy <strong>Maikel Frias Mosquea</strong>, <strong>Arquitecto Senior en Elixir y Cloud</strong> con más de 10 años de experiencia. Me especializo en colaboraciones a largo plazo, ayudando a equipos a escalar su infraestructura sin esfuerzo. Trabajo estrechamente con tu equipo para construir y mantener sistemas que crezcan con tu negocio.',
      scarcity1: '',
      cta1: 'Hablemos',
      sectionServices: 'Cómo Puedo Ayudarte',
      s1Title: 'Dominio de Elixir y Phoenix',
      s1Desc: 'Backends escalables y tolerantes a fallos que manejan el crecimiento sin esfuerzo. Me enfoco en construir sistemas que evolucionan con tus necesidades, para que puedas escalar sin preocupaciones.',
      s2Title: 'Excelencia Full-Stack',
      s2Desc: 'Desarrollo de punta a punta con Angular, React, Next.js, Django, Flask o Phoenix. No solo construyo funciones—creo soluciones que te dan una ventaja competitiva duradera.',
      s3Title: 'Liderazgo en Cloud y DevOps',
      s3Desc: 'Experto en Kubernetes, CI/CD, Terraform, Ansible y multi-nube para futuro-proteger tu infraestructura. Te ayudo a desplegar con confianza y mantener sistemas que crecen con tu negocio.',
      s4Title: 'Ingeniería de Fiabilidad',
      s4Desc: 'Sistemas que prosperan bajo presión, con cero tiempo de inactividad y máxima resiliencia. Tus usuarios disfrutan de una experiencia fluida y tu equipo gana tranquilidad.',
      s5Title: 'Optimización Estratégica de Costes',
      s5Desc: 'Ahorros inteligentes y sostenibles mediante recursos en la nube bien dimensionados y herramientas de código abierto. Te ayudo a optimizar costes para que puedas invertir más en lo que importa.',
      s6Title: 'Cumplimiento GDPR',
      s6Desc: 'Tranquilidad con auditorías, documentación y buenas prácticas para el cumplimiento total. Tus sistemas permanecen cumpliendo la normativa y listos para el futuro.',
      sectionWhy: '¿Por qué Trabajar Conmigo?',
      w1Title: '🔥 Enfocado en Tu Éxito',
      w1Desc: 'Trabajo con unos pocos clientes cada trimestre para garantizar que pueda ofrecer la atención y experiencia que mereces. Mi objetivo es integrarme en tu equipo y ayudarte a tener éxito.',
      w2Title: '🚀 Resuelvo Desafíos que Otros No Pueden',
      w2Desc: 'Donde otros ven limitaciones, yo veo oportunidades. Si enfrentas problemas sistémicos o complejidades en la nube, te ayudaré a convertirlos en fortalezas.',
      w3Title: '💡 Resultados Claros y Accionables',
      w3Desc: 'Sin jerga, sin relleno—solamente soluciones prácticas que impulsan tu negocio. Mis clientes valoran la claridad y el impacto duradero de nuestro trabajo.',
      w4Title: '🤝 Un Socio a Largo Plazo',
      w4Desc: 'No solo construyo sistemas—formo a tu equipo, optimizo tus procesos y aseguro que tu infraestructura escale contigo. Se trata de construir una relación, no solo un proyecto.',
      countdown: '',
      sectionPortfolio: 'Cómo He Ayudado a Equipos Como el Tuyo',
      p1Title: 'Survation Panel System',
      p1Desc: 'Plataforma de encuestas full-stack para un líder en investigación de mercados del Reino Unido. Juntos, redujimos los costes de cloud en un 30% y mejoramos los tiempos de respuesta en un 40%, todo sin tiempo de inactividad.',
      p2Title: 'OCI Development Cloud',
      p2Desc: 'Oracle Cloud Infrastructure as Code para SkunkWerks. Redujimos el tiempo de despliegue en un 70% y eliminamos errores manuales, preparándolos para escalar sin esfuerzo.',
      p3Title: 'Min.io Cluster Deployment',
      p3Desc: 'Despliegue personalizado de Min.io para Headbright Group. Al enfocarnos en sus necesidades a largo plazo, ahorramos $12K al año en costes de almacenamiento y logramos un 99,99% de disponibilidad.',
      sectionTech: 'Tecnologías con las que Trabajo',
      sectionTestimonials: 'Lo que Dicen los Clientes',
      t1Quote: '"Maikel tiene un amplio abanico de habilidades técnicas y se adaptó a nuestro entorno con facilidad. Asimiló nuestro stack rápidamente y avanzó con muy poca supervisión. <strong>Fue un placer trabajar con él y repetiría sin dudarlo.</strong>"',
      t2Quote: '"Tuve la oportunidad de contar con Maikel para una tarea de DevOps. Su competencia y dedicación fueron evidentes desde el principio. <strong>No solo entregó el trabajo con precisión, sino que abordó cada detalle con profesionalismo.</strong>"',
      t3Quote: '"Maikel es un líder técnico multitalento, gestionando código, nube y complejidades con maestría. <strong>No dudaría en recomendarlo a cualquiera que busque un socio técnico a largo plazo.</strong>"',
      scarcity2: '<a href="mailto:hello@maikel.dev" style="color: var(--primary); text-decoration: underline;">Hablemos de cómo podemos trabajar juntos</a>.',
      cta2: 'Unámonos',
      footer: '© 2026 Maikel OÜ — Con base en Estonia, sirviendo a clientes en todo el mundo.'
    }
  };

  function applyLang(lang) {
    var t = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.innerHTML = t[key];
    });
    document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch ( e ) {}
  }

  document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch ( e ) {}
  applyLang(saved === 'es' ? 'es' : 'en');
})();