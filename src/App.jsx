import { useState, useEffect } from 'react'

const projects = [
  {
    name: 'Skanda Nilaya',
    location: 'Shivamogga',
    description: 'Modern contemporary duplex residence with elegant architectural design and premium finishes.',
    type: 'Residential',
    status: 'completed',
    image: '/images/projects/skanda-nilaya/hero.png',
    specs: { site: '30x50', floors: 'G+1 Duplex' },
  },
  {
    name: 'Darpana',
    location: 'Vinobanagar, Shimoga',
    description: 'G+1 duplex house with modern elevation, luxurious interiors and thoughtful spatial planning.',
    type: 'Residential',
    status: 'completed',
    image: '/images/projects/darpana/hero.png',
    specs: { site: '30x45', floors: 'G+1 Duplex' },
  },
  {
    name: 'Ankith Residence',
    location: 'Kashipura, Shimoga',
    description: 'Ground floor residential house with commercial shop. Blend of modern living and business space.',
    type: 'Residential',
    status: 'completed',
    image: '/images/projects/ankith-residence/hero.png',
    specs: { site: '30x60', floors: 'GF' },
  },
  {
    name: 'Ajay Residence',
    location: 'Vinobanagar, Shimoga',
    description: 'G+2 floors residential building with 2 BHK units and parking in the ground floor.',
    type: 'Residential',
    status: 'completed',
    image: '/images/projects/skanda-nilaya/1.jpg',
    specs: { site: '30x40', floors: 'G+2' },
  },
  {
    name: 'National High School & PU College',
    location: 'Shankaraghatta, Shivamogga',
    description: 'Construction of new blocks including toilets and classrooms for the BR Project. Total 4,500 sqft.',
    type: 'Institutional',
    status: 'completed',
    image: '/images/projects/skanda-nilaya/2.jpg',
    specs: { area: '4,500 sqft', type: 'Institutional' },
  },
  {
    name: 'NES IAS College',
    location: 'JNNCE Campus, Shivamogga',
    description: 'Construction of fourth floor with 7 classrooms, 2 auditoriums, staff & principal office and toilets.',
    type: 'Institutional',
    status: 'ongoing',
    image: '/images/projects/darpana/1.jpg',
    specs: { area: '25,000 sqft', type: 'Institutional' },
  },
  {
    name: 'Sourabha Residence',
    location: 'Rashi Layout, Somminkoppa, Shivamogga',
    description: 'GF+1 duplex house in a prime residential layout with modern amenities.',
    type: 'Residential',
    status: 'ongoing',
    image: '/images/projects/ankith-residence/1.jpg',
    specs: { site: '30x50', floors: 'GF+1 Duplex' },
  },
  {
    name: 'Lakshmikanth Residence',
    location: 'Vaddinkoppa, Shivamogga',
    description: 'GF+1 duplex house with contemporary design in a serene neighbourhood.',
    type: 'Residential',
    status: 'ongoing',
    image: '/images/projects/ankith-residence/2.jpg',
    specs: { site: '30x50', floors: 'GF+1 Duplex' },
  },
  {
    name: 'Prabhavathi Residence',
    location: 'Vaddinkoppa, Shivamogga',
    description: 'GF+1 duplex house with thoughtful planning and quality construction.',
    type: 'Residential',
    status: 'ongoing',
    image: '/images/projects/darpana/2.jpg',
    specs: { site: '30x50', floors: 'GF+1 Duplex' },
  },
]

const services = [
  {
    icon: '🏠',
    title: 'Residential Construction',
    desc: 'Custom-designed homes from individual houses to duplex residences, built with precision and attention to every detail.',
  },
  {
    icon: '🏢',
    title: 'Commercial Construction',
    desc: 'Professional commercial building services including shops, complexes, and mixed-use developments.',
  },
  {
    icon: '🏫',
    title: 'Institutional Projects',
    desc: 'Educational institutions, colleges, and public buildings with focus on functionality and durability.',
  },
  {
    icon: '🔨',
    title: 'Renovation & Remodeling',
    desc: 'Transform existing spaces with expert renovation, kitchen remodeling, and structural alterations.',
  },
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [filter, setFilter] = useState('all')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter)

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="nav-logo">Civil <span>Sutra</span></div>
          <ul className="nav-links">
            <li><a href="#home" onClick={e => { e.preventDefault(); scrollTo('home') }}>Home</a></li>
            <li><a href="#services" onClick={e => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
            <li><a href="#projects" onClick={e => { e.preventDefault(); scrollTo('projects') }}>Projects</a></li>
            <li><a href="#about" onClick={e => { e.preventDefault(); scrollTo('about') }}>About</a></li>
            <li><a href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
          </ul>
          <a className="nav-phone" href="tel:+919901811943">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 99018 11943
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">&times;</button>
        {['home','services','projects','about','contact'].map(s => (
          <a key={s} href={`#${s}`} onClick={e => { e.preventDefault(); scrollTo(s) }}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </a>
        ))}
      </div>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="container hero-content">
          <div className="hero-text">
            <p className="section-label">Civil Sutra Associates</p>
            <h1>Building Your <span className="highlight">Vision</span> Into Reality</h1>
            <p>End-to-end civil engineering solutions in Shivamogga. From architectural design to construction, we deliver quality that stands the test of time.</p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>
                Get Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a className="btn btn-outline" href="#projects" onClick={e => { e.preventDefault(); scrollTo('projects') }}>
                View Projects
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="hero-stat">
                <h3>50+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="hero-stat">
                <h3>100+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/projects/skanda-nilaya/hero.png" alt="Skanda Nilaya - Modern Residence" />
            <div className="hero-image-badge">
              <strong>A+</strong>
              Quality Rating
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-subtitle">Comprehensive civil construction solutions tailored to your needs, from concept to completion.</p>
          </div>
          <div className="services-grid">
            {services.map(s => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="projects-header">
            <div>
              <p className="section-label">Our Portfolio</p>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <div className="project-filters">
              {[['all', 'All Projects'], ['completed', 'Completed'], ['ongoing', 'Ongoing']].map(([val, label]) => (
                <button key={val} className={`filter-btn ${filter === val ? 'active' : ''}`} onClick={() => setFilter(val)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="projects-grid">
            {filtered.map(p => (
              <div className="project-card" key={p.name}>
                <div className="project-card-image">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <span className={`project-card-badge ${p.status === 'completed' ? 'badge-completed' : 'badge-ongoing'}`}>
                    {p.status}
                  </span>
                </div>
                <div className="project-card-body">
                  <h3>{p.name}</h3>
                  <div className="project-card-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {p.location}
                  </div>
                  <p>{p.description}</p>
                  <div className="project-card-specs">
                    {p.specs.site && <span className="project-spec"><strong>Site:</strong> {p.specs.site}</span>}
                    {p.specs.floors && <span className="project-spec"><strong>Type:</strong> {p.specs.floors}</span>}
                    {p.specs.area && <span className="project-spec"><strong>Area:</strong> {p.specs.area}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Have a Project in Mind?</h2>
          <p>Let's discuss how we can bring your vision to life with our expert construction services.</p>
          <a className="btn btn-dark" href="#contact" onClick={e => { e.preventDefault(); scrollTo('contact') }}>
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-text">
            <p className="section-label">About Us</p>
            <h2 className="section-title">Building Excellence Since 2010</h2>
            <p>Civil Sutra Associates is a leading civil construction company based in Shivamogga, Karnataka. With over 15 years of experience, we specialize in residential, commercial, and institutional construction projects.</p>
            <p>Our team of skilled professionals is committed to delivering projects on time with uncompromising quality. From duplex residences to large-scale college buildings, we bring precision and innovation to every project.</p>
            <div className="about-values">
              {['Quality Craftsmanship', 'On-Time Delivery', 'Transparent Pricing', 'Client Satisfaction'].map(v => (
                <div className="about-value" key={v}>
                  <div className="about-value-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {v}
                </div>
              ))}
            </div>
          </div>
          <div className="about-counters">
            <div className="about-counter"><h3>15+</h3><p>Years</p></div>
            <div className="about-counter"><h3>50+</h3><p>Projects</p></div>
            <div className="about-counter"><h3>100+</h3><p>Clients</p></div>
            <div className="about-counter"><h3>25K+</h3><p>Sqft Built</p></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Have a project in mind? Reach out to us and let's build something great together.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Our Office</h4>
                  <p>40, 41 Sri Thippeswamy Complex,<br/>100 Feet Road, Rajendranagar,<br/>Shivamogga, Karnataka</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 9901811943<br/>+91 7090264645</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>civilsutraassociates@gmail.com</p>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <h3>Send Us a Message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your phone number" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your email address" />
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select defaultValue="">
                  <option value="" disabled>Select project type</option>
                  <option>Residential Construction</option>
                  <option>Commercial Construction</option>
                  <option>Renovation & Remodeling</option>
                  <option>Institutional Project</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Civil <span>Sutra</span> Associates</h3>
              <p>Delivering excellence in civil construction with over 15 years of experience. We build dreams into reality with precision, innovation, and quality craftsmanship.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {['Home','Services','Projects','About','Contact'].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase()}`} onClick={e => { e.preventDefault(); scrollTo(l.toLowerCase()) }}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Residential Construction</a></li>
                <li><a href="#services">Commercial Buildings</a></li>
                <li><a href="#services">Institutional Projects</a></li>
                <li><a href="#services">Renovation & Remodeling</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact Info</h4>
              <ul className="footer-links">
                <li>40, 41 Sri Thippeswamy Complex, 100 Feet Road, Rajendranagar, Shivamogga</li>
                <li><a href="tel:+919901811943">+91 9901811943</a></li>
                <li><a href="tel:+917090264645">+91 7090264645</a></li>
                <li><a href="mailto:civilsutraassociates@gmail.com">civilsutraassociates@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Civil Sutra Associates. All rights reserved.</p>
            <p className="footer-gst">GST: 29AAQFC4539C1ZA</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
