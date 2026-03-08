(function () {
  var STORAGE_KEY = 'maikel-dev-lang';

  var translations = {
    en: {
      urgent: 'LIMITED AVAILABILITY — ONLY 2 SLOTS OPEN FOR Q2 2026',
      heroTitle: 'Build with the Best, <span class="highlight">Before It\'s Too Late</span>',
      tagline: 'I partner with a select few SaaS companies who refuse to settle for anything less than world-class reliability, scalability, and performance. If you\'re serious about building something extraordinary, <strong>now is the time to act</strong>.',
      intro: 'I\'m <strong>Maikel Frias Mosquea</strong>, a senior <strong>Elixir & Cloud Architect</strong> with a decade of experience building and scaling distributed systems for companies that demand the best. My calendar fills up fast—<strong>don\'t miss your chance</strong>.',
      scarcity1: '<strong>⚠️ Only 2 project slots available for Q2 2026.</strong> Once they\'re gone, new inquiries will be waitlisted until Q3.',
      cta1: 'Claim Your Spot Now',
      sectionServices: 'What You Get When You Work With Me',
      s1Title: 'Elixir & Phoenix Mastery',
      s1Desc: 'Scalable, fault-tolerant backends and distributed services that handle growth effortlessly—so you never have to worry about outages again.',
      s2Title: 'Full-Stack Excellence',
      s2Desc: 'End-to-end development with Angular, React, Next.js, Django, Flask, or Phoenix. I don\'t just build features—I build <strong>competitive advantages</strong>.',
      s3Title: 'Cloud & DevOps Leadership',
      s3Desc: 'Kubernetes, CI/CD, Terraform, Ansible, and multi-cloud expertise to future-proof your infrastructure. No more chaotic deployments or sleepless nights.',
      s4Title: 'Reliability Engineering',
      s4Desc: 'Systems that don\'t just work—they <strong>thrive under pressure</strong>, with zero downtime and maximum resilience. Your users will never know what "error 500" means.',
      s5Title: 'Strategic Cost Optimization',
      s5Desc: 'Smart, sustainable savings through FOSS alternatives and right-sized cloud resources. <strong>Keep more of your budget</strong> for what really matters.',
      s6Title: 'GDPR Compliance',
      s6Desc: 'Peace of mind with audits, documentation, and best practices for full compliance. <strong>No legal surprises</strong>—just smooth sailing.',
      sectionWhy: 'Why You Need to Act Now',
      w1Title: '🔥 I\'m Highly Selective',
      w1Desc: 'I only take on a handful of projects each quarter. If you want my full attention and expertise, <strong>you need to secure your spot now</strong>.',
      w2Title: '🚀 I Solve What Others Can\'t',
      w2Desc: 'Where others see dead ends, I see opportunities. If you\'re stuck with a brittle system or a cloud setup that\'s holding you back, <strong>I\'m your solution</strong>.',
      w3Title: '💡 I Deliver Clarity & Results',
      w3Desc: 'No fluff, no jargon—just clear, actionable solutions that move your business forward. <strong>You\'ll wonder how you ever managed without me</strong>.',
      w4Title: '🤝 I\'m Your Long-Term Partner',
      w4Desc: 'I don\'t just build systems—I mentor your team and ensure long-term success. <strong>This isn\'t a one-time fix; it\'s a transformation</strong>.',
      countdown: '⏳ Only 2 slots left for Q2 2026. Act now to avoid the waitlist.',
      sectionPortfolio: 'Proven Results for Elite Clients',
      p1Title: 'Survation Panel System',
      p1Desc: 'Full-stack survey platform for a UK market research leader, using Angular, Express, MongoDB, Redis, and Kubernetes across AWS, DigitalOcean, and Hetzner. <strong>Zero downtime. Zero drama.</strong>',
      p2Title: 'OCI Development Cloud',
      p2Desc: 'Oracle Cloud Infrastructure as Code with custom FreeBSD images, Terraform, and Ansible for SkunkWerks. <strong>Deployed in weeks, not months.</strong>',
      p3Title: 'Min.io Cluster Deployment',
      p3Desc: 'Custom Min.io deployment scripts for Headbright Group on Hetzner Cloud. <strong>Faster, cheaper, and more reliable than the alternatives.</strong>',
      sectionTech: 'Technologies I Master',
      sectionTestimonials: 'What Clients Say',
      t1Quote: '"Maikel has a wide range of tech skills already to draw from, and navigated our unfamiliar environment easily. He picked up our diverse tech stack very quickly, and made rapid progress with very little hand-holding. <strong>He was a pleasure to work with, and I\'d gladly do so again.</strong>"',
      t2Quote: '"I recently had the opportunity to engage Maikel for a DevOps assignment. His proficiency and dedication were evident from the onset. <strong>Maikel not only delivered the task with precision but also ensured that every detail was addressed with the utmost professionalism.</strong>"',
      t3Quote: '"Maikel is a multi-talented maestro of tech, expertly managing code, clouds, and complexities to craft solutions that will push the boundaries of what\'s possible with your timescale and budget. <strong>I would not hesitate to recommend him to anyone looking for a skilled engineer.</strong>"',
      scarcity2: '<strong>⚠️ Only 2 slots left for Q2 2026.</strong> Once they\'re gone, new inquiries will be waitlisted until Q3. <a href="mailto:hello@maikel.dev" style="color: var(--primary); text-decoration: underline;">Secure your spot now</a>.',
      cta2: 'Claim Your Spot Before It\'s Gone',
      footer: '© 2026 Maikel OÜ — Based in Estonia, serving elite clients worldwide.'
    },
    es: {
      urgent: 'DISPONIBILIDAD LIMITADA — SOLO 2 PLAZAS PARA Q2 2026',
      heroTitle: 'Construye con los mejores, <span class="highlight">antes de que sea tarde</span>',
      tagline: 'Trabajo con unas pocas empresas SaaS que no se conforman con menos que fiabilidad, escalabilidad y rendimiento de primer nivel. Si te tomas en serio construir algo extraordinario, <strong>es el momento de actuar</strong>.',
      intro: 'Soy <strong>Maikel Frias Mosquea</strong>, <strong>Arquitecto senior en Elixir y Cloud</strong> con una década de experiencia construyendo y escalando sistemas distribuidos para empresas que exigen lo mejor. Mi agenda se llena rápido—<strong>no pierdas tu oportunidad</strong>.',
      scarcity1: '<strong>⚠️ Solo 2 plazas de proyecto disponibles para Q2 2026.</strong> Cuando se cubran, las nuevas solicitudes pasarán a lista de espera hasta Q3.',
      cta1: 'Reserva tu plaza ahora',
      sectionServices: 'Qué obtienes al trabajar conmigo',
      s1Title: 'Dominio de Elixir y Phoenix',
      s1Desc: 'Backends escalables y tolerantes a fallos y servicios distribuidos que asumen el crecimiento sin esfuerzo—para que no vuelvas a preocuparte por caídas.',
      s2Title: 'Excelencia full-stack',
      s2Desc: 'Desarrollo de punta a punta con Angular, React, Next.js, Django, Flask o Phoenix. No solo construyo funciones—construyo <strong>ventajas competitivas</strong>.',
      s3Title: 'Liderazgo en Cloud y DevOps',
      s3Desc: 'Kubernetes, CI/CD, Terraform, Ansible y experiencia multi-nube para blindar tu infraestructura. Adiós al caos en despliegues y a las noches en vela.',
      s4Title: 'Ingeniería de fiabilidad',
      s4Desc: 'Sistemas que no solo funcionan—<strong>rinden bajo presión</strong>, con cero tiempo de inactividad y máxima resiliencia. Tus usuarios no sabrán qué es un "error 500".',
      s5Title: 'Optimización estratégica de costes',
      s5Desc: 'Ahorros inteligentes y sostenibles con alternativas FOSS y recursos en la nube bien dimensionados. <strong>Más presupuesto</strong> para lo que de verdad importa.',
      s6Title: 'Cumplimiento GDPR',
      s6Desc: 'Tranquilidad con auditorías, documentación y buenas prácticas para cumplir la normativa. <strong>Sin sorpresas legales</strong>—navegación tranquila.',
      sectionWhy: 'Por qué debes actuar ahora',
      w1Title: '🔥 Soy muy selectivo',
      w1Desc: 'Solo asumo un puñado de proyectos cada trimestre. Si quieres mi atención y experiencia completas, <strong>debes asegurar tu plaza ahora</strong>.',
      w2Title: '🚀 Resuelvo lo que otros no pueden',
      w2Desc: 'Donde otros ven callejones sin salida, yo veo oportunidades. Si tienes un sistema frágil o una nube que te frena, <strong>soy tu solución</strong>.',
      w3Title: '💡 Ofrezco claridad y resultados',
      w3Desc: 'Sin relleno ni jerga—soluciones claras y accionables que impulsan tu negocio. <strong>Te preguntarás cómo pudiste gestionarlo sin mí</strong>.',
      w4Title: '🤝 Soy tu socio a largo plazo',
      w4Desc: 'No solo construyo sistemas—formo a tu equipo y aseguro el éxito a largo plazo. <strong>No es un parche puntual; es una transformación</strong>.',
      countdown: '⏳ Solo quedan 2 plazas para Q2 2026. Actúa ahora para evitar la lista de espera.',
      sectionPortfolio: 'Resultados probados para clientes exigentes',
      p1Title: 'Survation Panel System',
      p1Desc: 'Plataforma de encuestas full-stack para un líder en investigación de mercados en el Reino Unido, con Angular, Express, MongoDB, Redis y Kubernetes en AWS, DigitalOcean y Hetzner. <strong>Cero downtime. Cero drama.</strong>',
      p2Title: 'OCI Development Cloud',
      p2Desc: 'Oracle Cloud Infrastructure as Code con imágenes FreeBSD personalizadas, Terraform y Ansible para SkunkWerks. <strong>Desplegado en semanas, no meses.</strong>',
      p3Title: 'Min.io Cluster Deployment',
      p3Desc: 'Scripts de despliegue Min.io a medida para Headbright Group en Hetzner Cloud. <strong>Más rápido, económico y fiable que las alternativas.</strong>',
      sectionTech: 'Tecnologías que domino',
      sectionTestimonials: 'Lo que dicen los clientes',
      t1Quote: '"Maikel tiene un amplio abanico de habilidades técnicas y se movió con soltura en nuestro entorno. Asimiló nuestro stack muy rápido y avanzó con muy poca supervisión. <strong>Fue un placer trabajar con él y repetiría sin dudarlo.</strong>"',
      t2Quote: '"Tuve la oportunidad de contar con Maikel para una tarea de DevOps. Su competencia y dedicación fueron evidentes desde el primer momento. <strong>Maikel no solo entregó el trabajo con precisión, sino que abordó cada detalle con la máxima profesionalidad.</strong>"',
      t3Quote: '"Maikel es un maestro multitalento de la tecnología: código, nube y complejidad para crear soluciones que amplían lo posible dentro de tus plazos y presupuesto. <strong>No dudaría en recomendarlo a cualquiera que busque un ingeniero de alto nivel.</strong>"',
      scarcity2: '<strong>⚠️ Solo quedan 2 plazas para Q2 2026.</strong> Cuando se cubran, las nuevas solicitudes pasarán a lista de espera hasta Q3. <a href="mailto:hello@maikel.dev" style="color: var(--primary); text-decoration: underline;">Reserva tu plaza ahora</a>.',
      cta2: 'Reserva tu plaza antes de que se agoten',
      footer: '© 2026 Maikel OÜ — Con base en Estonia, sirviendo a clientes exigentes en todo el mundo.'
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
