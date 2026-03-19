var components = {
  logos: `
    <div class="logos" role="list">
      <img src="logos/aws.webp" alt="AWS" title="AWS" loading="lazy" role="listitem">
      <img src="logos/angular.webp" alt="Angular" title="Angular" loading="lazy" role="listitem">
      <img src="logos/ansible.webp" alt="Ansible" title="Ansible" loading="lazy" role="listitem">
      <img src="logos/azure.webp" alt="Azure" title="Azure" loading="lazy" role="listitem">
      <img src="logos/bash.webp" alt="Bash" title="Bash" loading="lazy" role="listitem">
      <img src="logos/bootstrap.webp" alt="Bootstrap" title="Bootstrap" loading="lazy" role="listitem">
      <img src="logos/docker.webp" alt="Docker" title="Docker" loading="lazy" role="listitem">
      <img src="logos/digitalocean.webp" alt="DigitalOcean" title="DigitalOcean" loading="lazy" role="listitem">
      <img src="logos/django.webp" alt="Django" title="Django" loading="lazy" role="listitem">
      <img src="logos/express.webp" alt="Express" title="Express" loading="lazy" role="listitem">
      <img src="logos/freebsd.webp" alt="FreeBSD" title="FreeBSD" loading="lazy" role="listitem">
      <img src="logos/git.webp" alt="Git" title="Git" loading="lazy" role="listitem">
      <img src="logos/grafana.webp" alt="Grafana" title="Grafana" loading="lazy" role="listitem">
      <img src="logos/html.webp" alt="HTML" title="HTML" loading="lazy" role="listitem">
      <img src="logos/javascript.webp" alt="JavaScript" title="JavaScript" loading="lazy" role="listitem">
      <img src="logos/jenkins.webp" alt="Jenkins" title="Jenkins" loading="lazy" role="listitem">
      <img src="logos/kubernetes.webp" alt="Kubernetes" title="Kubernetes" loading="lazy" role="listitem">
      <img src="logos/nginx.webp" alt="Nginx" title="Nginx" loading="lazy" role="listitem">
      <img src="logos/nodejs.webp" alt="Node.js" title="Node.js" loading="lazy" role="listitem">
      <img src="logos/oracle.webp" alt="Oracle Cloud" title="Oracle Cloud" loading="lazy" role="listitem">
      <img src="logos/postgresql.webp" alt="PostgreSQL" title="PostgreSQL" loading="lazy" role="listitem">
      <img src="logos/python.webp" alt="Python" title="Python" loading="lazy" role="listitem">
      <img src="logos/react.webp" alt="React" title="React" loading="lazy" role="listitem">
      <img src="logos/redis.webp" alt="Redis" title="Redis" loading="lazy" role="listitem">
      <img src="logos/terraform.webp" alt="Terraform" title="Terraform" loading="lazy" role="listitem">
    </div>
  `,

  home: function() {
    return `
      <section class="hero" aria-labelledby="hero-title">
        <h1 id="hero-title" class="hero-title" data-i18n="heroTitle">Build with a <span class="highlight">Senior Elixir & Cloud Architect</span></h1>
        <p class="hero-tagline" data-i18n="tagline">
          I work with SaaS companies who value reliability, scalability, and performance. If you're looking for a dedicated architect to join your team 20 hours a week, let's talk.
        </p>
      </section>

      <section aria-labelledby="urgent-section-title">
        <h2 id="urgent-section-title" class="urgent" data-i18n="urgent" role="alert" aria-live="polite"><span class="highlight">Available for New Long-Term Partnerships in Q2 2026</span></h2>
      </section>

      <section aria-labelledby="services-section-title">
        <h2 data-i18n="sectionServices" id="services-section-title">How I Can Help</h2>
        <div class="services">
          <div class="service-card">
            <h3 data-i18n="s1Title">Elixir & Phoenix Mastery</h3>
            <p data-i18n="s1Desc">Scalable, fault-tolerant backends and distributed services that handle growth effortlessly.</p>
          </div>
          <div class="service-card">
            <h3 data-i18n="s2Title">Full-Stack Excellence</h3>
            <p data-i18n="s2Desc"><span class="highlight">End-to-end development</span> with Angular, React, Next.js, Django, Flask, or Phoenix.</p>
          </div>
          <div class="service-card">
            <h3 data-i18n="s3Title">Cloud & DevOps Leadership</h3>
            <p data-i18n="s3Desc"><span class="highlight">Kubernetes, CI/CD, Terraform, Ansible, and multi-cloud expertise</span> to future-proof your infrastructure.</p>
          </div>
        </div>
        <p class="cta-container"><a href="#services" class="cta" data-i18n="viewAllServices">View All Services</a></p>
      </section>

      <section aria-labelledby="portfolio-section-title">
        <h2 data-i18n="sectionPortfolio" id="portfolio-section-title">Selected Work</h2>
        <div class="portfolio">
          <div class="portfolio-card">
            <h3 data-i18n="p1Title">Survation Panel System</h3>
            <p data-i18n="p1Desc"><span class="highlight">Full-stack survey platform</span> for a UK market research leader. Reduced cloud costs by 30% and improved response times by 40%.</p>
          </div>
          <div class="portfolio-card">
            <h3 data-i18n="p2Title">OCI Development Cloud</h3>
            <p data-i18n="p2Desc"><span class="highlight">Oracle Cloud Infrastructure as Code</span> for SkunkWerks. Cut deployment time by 70% and eliminated manual errors.</p>
          </div>
          <div class="portfolio-card">
            <h3 data-i18n="p3Title">Min.io Cluster Deployment</h3>
            <p data-i18n="p3Desc"><span class="highlight">Custom Min.io deployment</span> for Headbright Group. Saved $12K/year in storage costs and achieved 99.99% uptime.</p>
          </div>
        </div>
        <p class="cta-container"><a href="#portfolio" class="cta" data-i18n="viewAllProjects">View All Projects</a></p>
      </section>

      <section aria-labelledby="testimonials-section-title">
        <h2 data-i18n="testimonialsTitle" id="testimonials-section-title">What Clients Say</h2>
        <div class="testimonials">
          <div class="testimonial-card">
            <p data-i18n="t1Quote"><span class="highlight">"Maikel has a wide range of tech skills and navigated our environment with ease.</span> He picked up our stack quickly and made rapid progress with minimal oversight. <strong>He was a pleasure to work with, and I'd gladly do so again.</strong>"</p>
            <div class="testimonial-author">
              <img src="clients/skunkwerks.webp" alt="Photo of Dave Cottlehuber" title="Dave Cottlehuber" loading="lazy">
              <div>
                <h4 data-i18n="testimonial1Name">Dave Cottlehuber</h4>
                <p data-i18n="testimonial1Role">CEO @ SkunkWerks</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p data-i18n="t2Quote"><span class="highlight">"I engaged Maikel for a DevOps assignment.</span> His proficiency and dedication were clear from the start. <strong>He delivered with precision and ensured every detail was handled professionally.</strong>"</p>
            <div class="testimonial-author">
              <img src="clients/headbright1.webp" alt="Photo of Konstantin Kostov" title="Konstantin Kostov" loading="lazy">
              <div>
                <h4 data-i18n="testimonial2Name">Konstantin Kostov</h4>
                <p data-i18n="testimonial2Role">CEO @ Headbright Group</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p data-i18n="t3Quote"><span class="highlight">"Maikel is a multi-talented tech leader,</span> expertly managing code, clouds, and complexities. <strong>I would not hesitate to recommend him to anyone looking for a skilled, long-term partner.</strong>"</p>
            <div class="testimonial-author">
              <img src="clients/surva.webp" alt="Photo of John Gibb" title="John Gibb" loading="lazy">
              <div>
                <h4 data-i18n="testimonial3Name">John Gibb</h4>
                <p data-i18n="testimonial3Role">Head of Projects @ Survation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  services: function() {
    return `
      <h2 data-i18n="sectionServices" id="services-section-title">How I Can Help</h2>
      <div class="services">
        <div class="service-card">
          <h3 data-i18n="s1Title">Elixir & Phoenix Mastery</h3>
          <p data-i18n="s1Desc">Scalable, fault-tolerant backends and distributed services that handle growth effortlessly. I focus on building systems that evolve with your needs, so you can scale without worry.</p>
        </div>
        <div class="service-card">
          <h3 data-i18n="s2Title">Full-Stack Excellence</h3>
          <p data-i18n="s2Desc"><span class="highlight">End-to-end development</span> with Angular, React, Next.js, Django, Flask, or Phoenix. I don't just build features—I create solutions that give you a lasting competitive edge.</p>
        </div>
        <div class="service-card">
          <h3 data-i18n="s3Title">Cloud & DevOps Leadership</h3>
          <p data-i18n="s3Desc"><span class="highlight">Kubernetes, CI/CD, Terraform, Ansible, and multi-cloud expertise</span> to future-proof your infrastructure. I help you deploy with confidence and maintain systems that grow with your business.</p>
        </div>
        <div class="service-card">
          <h3 data-i18n="s4Title">Reliability Engineering</h3>
          <p data-i18n="s4Desc"><span class="highlight">Systems that thrive under pressure</span>, with zero downtime and maximum resilience. Your users enjoy a seamless experience, and your team gains peace of mind.</p>
        </div>
        <div class="service-card">
          <h3 data-i18n="s5Title">Strategic Cost Optimization</h3>
          <p data-i18n="s5Desc"><span class="highlight">Smart, sustainable savings</span> through right-sized cloud resources and open-source tools. I help you optimize costs so you can invest more in what matters.</p>
        </div>
        <div class="service-card">
          <h3 data-i18n="s6Title">GDPR Compliance</h3>
          <p data-i18n="s6Desc"><span class="highlight">Peace of mind</span> with audits, documentation, and best practices for full compliance. Your systems stay compliant and ready for the future.</p>
        </div>
      </div>

      <h2 data-i18n="sectionTech" id="tech-section-title">Technologies I Work With</h2>
      ${this.logos}
    `;
  },

  portfolio: function() {
    return `
      <h2 data-i18n="sectionPortfolio" id="portfolio-section-title">Selected Work</h2>
      <div class="portfolio" role="list">
        <div class="portfolio-card" role="listitem">
          <h3 data-i18n="p1Title">Survation Panel System</h3>
          <p data-i18n="p1Desc"><span class="highlight">Full-stack survey platform</span> for a UK market research leader. Together, we reduced cloud costs by 30% and improved response times by 40%, all with zero downtime.</p>
          <div class="skills" role="list">
            <span data-i18n="tech_angular">Angular</span>
            <span data-i18n="tech_express">Express</span>
            <span data-i18n="tech_kubernetes">Kubernetes</span>
            <span data-i18n="tech_mongodb">MongoDB</span>
            <span data-i18n="tech_redis">Redis</span>
            <span data-i18n="tech_aws">AWS</span>
          </div>
        </div>
        <div class="portfolio-card" role="listitem">
          <h3 data-i18n="p2Title">OCI Development Cloud</h3>
          <p data-i18n="p2Desc"><span class="highlight">Oracle Cloud Infrastructure as Code</span> for SkunkWerks. We cut deployment time by 70% and eliminated manual errors, setting them up for effortless scaling.</p>
          <div class="skills" role="list">
            <span data-i18n="tech_terraform">Terraform</span>
            <span data-i18n="tech_ansible">Ansible</span>
            <span data-i18n="tech_oracle_cloud">Oracle Cloud</span>
            <span data-i18n="tech_freebsd">FreeBSD</span>
            <span data-i18n="tech_qemu">QEMU</span>
          </div>
        </div>
        <div class="portfolio-card" role="listitem">
          <h3 data-i18n="p3Title">Min.io Cluster Deployment</h3>
          <p data-i18n="p3Desc"><span class="highlight">Custom Min.io deployment</span> for Headbright Group. By focusing on their long-term needs, we saved $12K/year in storage costs and achieved 99.99% uptime.</p>
          <div class="skills" role="list">
            <span data-i18n="tech_minio">Min.io</span>
            <span data-i18n="tech_hetzner">Hetzner</span>
            <span data-i18n="tech_bash">Bash</span>
            <span data-i18n="tech_cloud_init">Cloud-init</span>
          </div>
        </div>
      </div>

      <h2 data-i18n="sectionTech" id="tech-section-title">Technologies I Work With</h2>
      ${this.logos}
    `;
  },

  about: function() {
    return `
      <section aria-labelledby="about-section-title">
        <h2 data-i18n="aboutMe" id="about-section-title">About Me</h2>
        <p data-i18n="intro">
          I'm <strong>Maikel Frias Mosquea</strong>, a senior <strong>Elixir & Cloud Architect</strong> with 10+ years of experience. I specialize in long-term collaborations, helping teams scale their infrastructure seamlessly. I work as part of your team, 20 hours a week, to build and maintain systems that grow with your business.
        </p>
      </section>

      <section aria-labelledby="why-section-title">
        <h2 data-i18n="sectionWhy" id="why-section-title">Why Work With Me?</h2>
        <div class="exclusive-list" role="list">
          <div class="exclusive" role="listitem">
            <h4 data-i18n="w1Title">Focused on Your Success</h4>
            <p data-i18n="w1Desc">I work with a select few clients each quarter to ensure I can provide the attention and expertise you deserve. My goal is to integrate with your team and help you succeed.</p>
          </div>
          <div class="exclusive" role="listitem">
            <h4 data-i18n="w2Title">Solving Challenges Others Can't</h4>
            <p data-i18n="w2Desc"><span class="highlight">Where others see limitations, I see opportunities</span>. If you're facing systemic issues or cloud complexities, I'll help you turn them into strengths.</p>
          </div>
          <div class="exclusive" role="listitem">
            <h4 data-i18n="w3Title">Clear, Actionable Results</h4>
            <p data-i18n="w3Desc"><span class="highlight">No jargon, no fluff</span>—just practical solutions that move your business forward. My clients appreciate the clarity and the lasting impact of our work together.</p>
          </div>
          <div class="exclusive" role="listitem">
            <h4 data-i18n="w4Title">A Partner for the Long Haul</h4>
            <p data-i18n="w4Desc">I don't just build systems—I mentor your team, optimize your processes, and ensure your infrastructure scales as you grow. This is about building a relationship, not just a project.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="tech-section-title">
        <h2 data-i18n="sectionTech" id="tech-section-title">Technologies I Work With</h2>
        ${this.logos}
      </section>

      <p class="cta-container"><a href="mailto:hello@maikel.dev" class="cta" data-i18n="cta2" aria-label="Contact me via email"><span class="highlight">Let's Talk</span></a></p>
    `;
  },

  contact: function() {
    return `
      <section aria-labelledby="contact-section-title" class="contact-info">
        <h2 data-i18n="contactTitle" id="contact-section-title">Get In Touch</h2>
        <p data-i18n="contactDesc">Ready to start your project? Reach out via email and I'll get back to you within 24 hours.</p>
        
        <div class="email-container">
          <p class="email-text">Email: <span class="email-part">hello</span><span class="email-symbol">@</span><span class="email-part">maikel.dev</span></p>
        </div>
      </section>
    `;
  }
};
