(function () {
  var STORAGE_KEY = 'maikel-dev-lang';

  var translations = {
    en: {
      urgent: 'ONLY 2 LONG-TERM PARTNERSHIP SLOTS OPEN FOR Q2 2026',
      heroTitle: 'Build a Lasting Relationship with a <span class="highlight">Senior Elixir & Cloud Architect</span>',
      tagline: 'I don’t just build systems—I build lasting partnerships with SaaS companies who want to scale with confidence, reliability, and zero downtime. With only 2 slots open for Q2 2026, now is the time to start a collaboration that grows with you.',
      intro: 'I’m <strong>Maikel Frias Mosquea</strong>, a senior <strong>Elixir & Cloud Architect</strong> with 10+ years of experience. I specialize in long-term partnerships with SaaS companies, helping them scale their infrastructure seamlessly and future-proof their systems. My calendar is selective—let’s build something extraordinary together.',
      scarcity1: '<strong>⚠️ Only 2 long-term partnership slots available for Q2 2026.</strong> Once they’re filled, new inquiries will be waitlisted until Q3.',
      cta1: 'Start the Conversation',
      sectionServices: 'What You Get in Our Partnership',
      s1Title: 'Elixir & Phoenix Mastery',
      s1Desc: 'Scalable, fault-tolerant Elixir/Phoenix backends that grow with your business. I don’t just deliver code—I build systems that evolve with your needs, so you never have to worry about outages or scalability again.',
      s2Title: 'Full-Stack Excellence',
      s2Desc: 'End-to-end development with Angular, React, Next.js, Django, Flask, or Phoenix. I don’t just build features—I craft competitive advantages that keep you ahead, with a focus on long-term maintainability and performance.',
      s3Title: 'Cloud & DevOps Leadership',
      s3Desc: 'Kubernetes, CI/CD, Terraform, Ansible, and multi-cloud expertise to future-proof your infrastructure. I help you deploy with confidence and maintain systems that scale effortlessly as your business grows.',
      s4Title: 'Reliability Engineering',
      s4Desc: 'Systems that don’t just work—they thrive under pressure. With zero downtime and maximum resilience, your users will never know what “error 500” means, and your team will always feel supported.',
      s5Title: 'Strategic Cost Optimization',
      s5Desc: 'Save on cloud costs without sacrificing performance. I help you right-size resources and leverage open-source tools for sustainable, long-term savings that grow with your business.',
      s6Title: 'GDPR Compliance',
      s6Desc: 'Full GDPR compliance with audits, documentation, and best practices. I ensure your systems are not just compliant today, but ready for whatever comes next—so you can focus on growth without legal worries.',
      sectionWhy: 'Why Partner With Me Now?',
      w1Title: '🔥 I’m Highly Selective',
      w1Desc: 'I only partner with a few SaaS companies each quarter to ensure I can provide the deep, ongoing support they deserve. If you’re ready for a long-term collaboration, now is the time to start the conversation.',
      w2Title: '🚀 I Solve What Others Can’t',
      w2Desc: 'Where others see dead ends, I see the beginning of a partnership. If you’re tired of brittle systems or cloud setups that slow you down, I’ll help you build a foundation for long-term success.',
      w3Title: '💡 I Deliver Clarity & Long-Term Results',
      w3Desc: 'No buzzwords, no short-term fixes—just clear, actionable solutions that grow with your business. My clients don’t just get results; they gain a partner who’s invested in their success.',
      w4Title: '🤝 I’m Your Long-Term Partner',
      w4Desc: 'I don’t just build systems—I mentor your team, optimize your processes, and ensure your infrastructure scales as you grow. This isn’t a one-time project; it’s the start of a relationship that evolves with your business.',
      countdown: '⏳ Only 2 long-term partnership slots left for Q2 2026. Act now to start the conversation.',
      sectionPortfolio: 'Proven Results for Long-Term Clients',
      p1Title: 'Survation Panel System',
      p1Desc: 'Full-stack survey platform for a UK market research leader. I didn’t just build their system—I partnered with them to reduce cloud costs by 30% and improve response times by 40%, with zero downtime. This is the kind of long-term impact I bring to every collaboration.',
      p2Title: 'OCI Development Cloud',
      p2Desc: 'Oracle Cloud Infrastructure as Code for SkunkWerks. Together, we cut deployment time by 70% and eliminated manual errors, setting them up for seamless scaling as their business grows.',
      p3Title: 'Min.io Cluster Deployment',
      p3Desc: 'Custom Min.io deployment for Headbright Group. By focusing on their long-term needs, we saved $12K/year in storage costs and achieved 99.99% uptime—proving that the right partnership delivers lasting value.',
      sectionTech: 'Technologies I Master',
      sectionTestimonials: 'Hear from Clients Who’ve Built Lasting Success',
      t1Quote: '"Maikel has a wide range of tech skills and navigated our unfamiliar environment easily. He picked up our diverse tech stack very quickly and made rapid progress with very little hand-holding. <strong>He was a pleasure to work with, and I’d gladly do so again.</strong>"',
      t2Quote: '"I recently engaged Maikel for a DevOps assignment. His proficiency and dedication were evident from the start. <strong>Maikel not only delivered the task with precision but also ensured that every detail was addressed with the utmost professionalism.</strong>"',
      t3Quote: '"Maikel is a multi-talented maestro of tech, expertly managing code, clouds, and complexities to craft solutions that push the boundaries of what’s possible. <strong>I would not hesitate to recommend him to anyone looking for a skilled, long-term partner.</strong>"',
      scarcity2: '<strong>⚠️ Only 2 long-term partnership slots left for Q2 2026.</strong> Once they’re filled, new inquiries will be waitlisted. <a href="mailto:hello@maikel.dev" style="color: var(--primary); text-decoration: underline;">Email me now</a> to start the conversation.',
      cta2: 'Start the Conversation Before It’s Too Late',
      footer: '© 2026 Maikel OÜ — Based in Estonia, serving elite SaaS clients worldwide.'
    },
    es: {
      urgent: 'SOLO 2 PLAZAS DISPONIBLES PARA COLABORACIONES A LARGO PLAZO EN Q2 2026',
      heroTitle: 'Construye una relación duradera con un <span class="highlight">Arquitecto Senior en Elixir y Cloud</span>',
      tagline: 'No solo construyo sistemas—construyo relaciones a largo plazo con empresas SaaS que quieren escalar con confianza, fiabilidad y cero tiempos de inactividad. Con solo 2 plazas disponibles para Q2 2026, ahora es el momento de empezar una colaboración que crezca contigo.',
      intro: 'Soy <strong>Maikel Frias Mosquea</strong>, <strong>Arquitecto Senior en Elixir y Cloud</strong> con más de 10 años de experiencia. Me especializo en colaboraciones a largo plazo con empresas SaaS, ayudándolas a escalar su infraestructura sin esfuerzo y a futuro-proteger sus sistemas. Mi agenda es selectiva—hablemos de cómo podemos crecer juntos.',
      scarcity1: '<strong>⚠️ Solo 2 plazas para colaboraciones a largo plazo disponibles para Q2 2026.</strong> Cuando se cubran, las nuevas solicitudes pasarán a lista de espera hasta Q3.',
      cta1: 'Inicia la Conversación',
      sectionServices: 'Qué obtienes en nuestra colaboración',
      s1Title: 'Dominio de Elixir y Phoenix',
      s1Desc: 'Backends escalables y tolerantes a fallos en Elixir/Phoenix que crecen con tu negocio. No solo entrego código—construyo sistemas que evolucionan con tus necesidades, para que nunca tengas que preocuparte por caídas o escalabilidad.',
      s2Title: 'Excelencia full-stack',
      s2Desc: 'Desarrollo de punta a punta con Angular, React, Next.js, Django, Flask o Phoenix. No solo construyo funciones—creo ventajas competitivas que te mantienen adelante, con un enfoque en mantenibilidad y rendimiento a largo plazo.',
      s3Title: 'Liderazgo en Cloud y DevOps',
      s3Desc: 'Experto en Kubernetes, CI/CD, Terraform, Ansible y multi-nube para futuro-proteger tu infraestructura. Te ayudo a desplegar con confianza y mantener sistemas que escalan sin esfuerzo a medida que crece tu negocio.',
      s4Title: 'Ingeniería de fiabilidad',
      s4Desc: 'Sistemas que no solo funcionan—prosperan bajo presión. Con cero tiempo de inactividad y máxima resiliencia, tus usuarios nunca verán un "error 500" y tu equipo siempre se sentirá apoyado.',
      s5Title: 'Optimización estratégica de costes',
      s5Desc: 'Ahorra en costes de cloud sin sacrificar rendimiento. Te ayudo a dimensionar recursos y aprovechar herramientas de código abierto para un ahorro sostenible que crece con tu negocio.',
      s6Title: 'Cumplimiento GDPR',
      s6Desc: 'Cumplimiento total del GDPR con auditorías, documentación y buenas prácticas. Aseguro que tus sistemas no solo cumplan hoy, sino que estén listos para lo que venga—para que puedas enfocarte en crecer sin preocupaciones legales.',
      sectionWhy: '¿Por qué colaborar conmigo ahora?',
      w1Title: '🔥 Soy muy selectivo',
      w1Desc: 'Solo colaboro con unas pocas empresas SaaS cada trimestre para garantizar que puedo ofrecer el apoyo profundo y continuo que merecen. Si estás listo para una colaboración a largo plazo, ahora es el momento de empezar la conversación.',
      w2Title: '🚀 Resuelvo lo que otros no pueden',
      w2Desc: 'Donde otros ven callejones sin salida, yo veo el inicio de una colaboración. Si estás cansado de sistemas frágiles o configuraciones en la nube que te frenan, te ayudaré a construir una base para el éxito a largo plazo.',
      w3Title: '💡 Ofrezco claridad y resultados a largo plazo',
      w3Desc: 'Sin palabras vacías ni soluciones temporales—solamente estrategias claras y accionables que crecen con tu negocio. Mis clientes no solo obtienen resultados; ganan un aliado invertido en su éxito.',
      w4Title: '🤝 Soy tu socio a largo plazo',
      w4Desc: 'No solo construyo sistemas—formo a tu equipo, optimizo tus procesos y aseguro que tu infraestructura escale contigo. Esto no es un proyecto puntual; es el inicio de una relación que evoluciona con tu negocio.',
      countdown: '⏳ Solo quedan 2 plazas para colaboraciones a largo plazo en Q2 2026. Actúa ahora para empezar la conversación.',
      sectionPortfolio: 'Resultados probados para clientes a largo plazo',
      p1Title: 'Survation Panel System',
      p1Desc: 'Plataforma de encuestas full-stack para un líder en investigación de mercados del Reino Unido. No solo construí su sistema—colaboré con ellos para reducir costes de cloud en un 30% y mejorar los tiempos de respuesta en un 40%, sin tiempo de inactividad. Este es el tipo de impacto duradero que aporto a cada colaboración.',
      p2Title: 'OCI Development Cloud',
      p2Desc: 'Oracle Cloud Infrastructure as Code para SkunkWerks. Juntos, redujimos el tiempo de despliegue en un 70% y eliminamos errores manuales, preparándolos para escalar sin esfuerzo a medida que crece su negocio.',
      p3Title: 'Min.io Cluster Deployment',
      p3Desc: 'Despliegue personalizado de Min.io para Headbright Group. Al enfocarnos en sus necesidades a largo plazo, ahorramos $12K al año en costes de almacenamiento y logramos un 99,99% de disponibilidad—demostrando que la colaboración correcta entrega valor duradero.',
      sectionTech: 'Tecnologías que domino',
      sectionTestimonials: 'Escucha a clientes que han construido éxito duradero',
      t1Quote: '"Maikel tiene un amplio abanico de habilidades técnicas y se movió con soltura en nuestro entorno. Asimiló nuestro stack muy rápido y avanzó con muy poca supervisión. <strong>Fue un placer trabajar con él y repetiría sin dudarlo.</strong>"',
      t2Quote: '"Tuve la oportunidad de contar con Maikel para una tarea de DevOps. Su competencia y dedicación fueron evidentes desde el primer momento. <strong>Maikel no solo entregó el trabajo con precisión, sino que abordó cada detalle con la máxima profesionalidad.</strong>"',
      t3Quote: '"Maikel es un maestro multitalento de la tecnología: código, nube y complejidad para crear soluciones que amplían lo posible dentro de tus plazos y presupuesto. <strong>No dudaría en recomendarlo a cualquiera que busque un socio técnico a largo plazo.</strong>"',
      scarcity2: '<strong>⚠️ Solo quedan 2 plazas para colaboraciones a largo plazo en Q2 2026.</strong> Cuando se cubran, las nuevas solicitudes pasarán a lista de espera. <a href="mailto:hello@maikel.dev" style="color: var(--primary); text-decoration: underline;">Escríbeme ahora</a> para hablar de cómo podemos crecer juntos.',
      cta2: 'Inicia la Conversación Antes de Que Sea Demasiado Tarde',
      footer: '© 2026 Maikel OÜ — Con base en Estonia, sirviendo a clientes SaaS exigentes en todo el mundo.'
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
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('.lang-toggle [data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang'));
    });
  });

  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  applyLang(saved === 'es' ? 'es' : 'en');
})();