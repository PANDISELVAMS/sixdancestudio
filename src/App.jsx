import React,{ useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Check, ChevronDown, Instagram, Menu, MessageCircle,
  Phone, Play, Send, Sparkles, Star, X
} from "lucide-react";
import { studio, services, features, testimonials } from "./data/studioData";
import DanceAnimation from "./components/DanceAnimation";
const gold = "#d7ad55";

function Fade({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <Fade className="section-title">
      <span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Fade>
  );
}


function App() {
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].title, date: "", participants: "", message: "" });
  const [sent, setSent] = useState(false);

  const wa = (message = `Hi ${studio.name}, I would like to know more about your dance services.`) =>
    `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(message)}`;

  const submit = (e) => {
    e.preventDefault();
    const msg = `Hi ${studio.name}, I would like to make an enquiry.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AEvent Date: ${form.date}%0AParticipants: ${form.participants}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${studio.whatsapp}?text=${msg}`, "_blank");
    setSent(true);
  };

  const nav = ["home", "about", "services", "features", "testimonials", "contact"];

  return (
    <div className="site">
      <header className="nav">
        <a href="#home" className="brand" onClick={() => setMenu(false)}>
          <span className="brand-mark">6</span>
          <span><b>6-STEP</b><small>DANCE STUDIO</small></span>
        </a>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {nav.map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenu(false)}>
              {item === "home" ? "Home" : item === "about" ? "About" : item === "services" ? "Services" : item === "features" ? "Features" : item === "testimonials" ? "Testimonials" : "Contact"}
            </a>
          ))}
          <a className="nav-cta" href="#booking" onClick={() => setMenu(false)}>Book Now <ArrowUpRight size={16}/></a>
        </nav>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-bg">
            <div className="hero-dancer">DANCE</div>
            <DanceAnimation/>
          </div>
          <div className="grain" />
          <div className="hero-content">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
              <span className="eyebrow"><Sparkles size={15}/> PREMIUM CHOREOGRAPHY STUDIO</span>
              <h1><span>6-STEP</span><strong>DANCE</strong><em>STUDIO</em></h1>
              <p className="hero-tag">{studio.tagline}</p>
              <p className="hero-copy">From weddings and celebrations to stage performances and fitness, we turn every moment into a memorable performance.</p>
              <div className="actions">
                <a href="#booking" className="btn primary">Book a Class <ArrowUpRight size={18}/></a>
                <a href={wa()} target="_blank" rel="noreferrer" className="btn ghost"><MessageCircle size={18}/> WhatsApp Us</a>
              </div>
            </motion.div>
          </div>
          <div className="hero-side">MOVE <span>WITH</span> PASSION</div>
          <a href="#about" className="scroll">SCROLL <ChevronDown size={17}/></a>
          <div className="hero-orbit" />
        </section>
<section id="about" className="section about">
  <div className="about-photo">

    <div className="portrait">
      <img
        src="/choreographer.png"
        alt="6-STEP Dance Studio Choreographer"
        className="choreographer-img"
      />
    </div>

    <div className="photo-ring" />
    <div className="vertical">MOVE • CREATE • PERFORM</div>

  </div>

  <div className="about-copy">
    <SectionTitle
      eyebrow="ABOUT THE STUDIO"
      title="Where Every Step Tells a Story"
      text="6-STEP DANCE STUDIO brings together choreography, training and performance for celebrations, events and fitness. Every routine is shaped to make dancers feel confident, expressive and connected."
    />

    <div className="person">
      <div className="mini-avatar">6</div>
      <div>
        <b>{studio.choreographer}</b>
        <span>{studio.experience}</span>
      </div>
    </div>

    <div className="checks">
      <span><Check/> Event-focused choreography</span>
      <span><Check/> Friendly step-by-step training</span>
      <span><Check/> Programs for different skill levels</span>
      <span><Check/> Personalized performance guidance</span>
    </div>

    <a href="#booking" className="text-link">
      Enquire Now <ArrowUpRight size={18}/>
    </a>
  </div>
</section>
        
        <section id="services" className="section dark-section">
          <SectionTitle eyebrow="WHAT WE DO" title="Our Dance Services" text="From the first beat to the final pose, choose a program designed around your occasion." />
          <div className="service-grid">
            {services.map((s, i) => (
              <Fade key={s.title} delay={i * .04}>
                <article className="service-card">
                  <div className="service-top"><span className="service-icon">{s.icon}</span><span className="number">0{i + 1}</span></div>
                  <h3>{s.title}</h3><p>{s.text}</p>
                  <a href="#booking">Enquire <ArrowUpRight size={16}/></a>
                </article>
              </Fade>
            ))}
          </div>
        </section>

        <section className="statement">
          <div className="statement-word">FEEL</div>
          <div className="statement-center">
            <span className="eyebrow"><Sparkles size={14}/> YOUR MOMENT. YOUR MOVEMENT.</span>
            <h2>Don't just attend<br/><i>the moment.</i><br/><b>Dance it.</b></h2>
          </div>
          <div className="statement-word right">MOVE</div>
        </section>

        <section id="features" className="section features-section">
          <SectionTitle eyebrow="THE 6-STEP EXPERIENCE" title="Why Choose 6-STEP?" text="A practical, creative and supportive approach to learning and performing." />
          <div className="feature-list">
            {features.map(([num, title, text], i) => (
              <Fade key={num} delay={i * .04}>
                <div className="feature">
                  <span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight />
                </div>
              </Fade>
            ))}
          </div>
        </section>

        <section className="section programs">
          <div className="program-intro">
            <SectionTitle eyebrow="PROGRAMS" title="Made For Every Occasion" text="Choose the energy, format and training style that fits your moment." />
            <a href="#booking" className="btn primary">Plan Your Program <ArrowUpRight size={18}/></a>
          </div>
          <div className="program-cards">
            {["WEDDING", "EVENT", "FITNESS"].map((p, i) => (
              <Fade key={p} delay={i * .1}><div className="program-card"><span>0{i + 1}</span><b>{p}</b><small>{i === 0 ? "Choreography that celebrates together." : i === 1 ? "Performances built for the stage." : "Move, sweat and enjoy the rhythm."}</small><div className="program-line"/></div></Fade>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section dark-section">
          <SectionTitle eyebrow="CLIENT LOVE" title="What Our Clients Say" text="A few words from the people who stepped onto the floor with us." />
          <div className="testimonial-grid">
            {testimonials.map((t, i) => <Fade key={t.name} delay={i * .08}><article className="testimonial"><div className="stars">{[1,2,3,4,5].map(x => <Star key={x} size={15} fill={gold}/>)}</div><p>“{t.quote}”</p><div><b>{t.name}</b><span>{t.role}</span></div></article></Fade>)}
          </div>
        </section>

        <section id="booking" className="section booking">
          <div className="booking-info">
            <span className="eyebrow"><Sparkles size={14}/> START YOUR JOURNEY</span>
            <h2>Let's Create<br/><i>Your Moment.</i></h2>
            <p>Tell us what you're planning. We'll help shape the right choreography or dance program for you.</p>
            <div className="direct">
              <a href={`tel:${studio.phones[0]}`}><Phone size={18}/><span>Call Us<b>{studio.phones[0]}</b></span></a>
              <a href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={18}/><span>WhatsApp<b>Quick Enquiry</b></span></a>
            </div>
          </div>
          <form className="form" onSubmit={submit}>
            <div className="form-row"><label>Full Name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name"/></label><label>Phone Number<input required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91"/></label></div>
            <div className="form-row"><label>Service<select value={form.service} onChange={e => setForm({...form, service: e.target.value})}>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label><label>Event Date<input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}/></label></div>
            <div className="form-row"><label>Participants<input value={form.participants} onChange={e => setForm({...form, participants: e.target.value})} placeholder="Approx. number"/></label><label>Message<input value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us about your event"/></label></div>
            <button className="btn primary full" type="submit">{sent ? "Enquiry Ready ✓" : "Send Enquiry"} <Send size={17}/></button>
          </form>
        </section>

        <section id="contact" className="contact-band">
          <div><span className="eyebrow"><Sparkles size={14}/> CONTACT</span><h2>Ready to make<br/><i>your move?</i></h2></div>
          <div className="contact-details">
            {studio.phones.map(p => <a key={p} href={`tel:${p}`}><Phone size={17}/>{p}</a>)}
            <a href={studio.instagram}><Instagram size={17}/> Instagram</a>
            <span>📍 {studio.location}</span>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">6</span><div><b>6-STEP</b><small>DANCE STUDIO</small></div></div>
        <p>{studio.tagline}. Dance. Create. Perform.</p>
        <div className="footer-links"><a href="#home">Home</a><a href="#services">Services</a><a href="#booking">Book Now</a><a href="#contact">Contact</a></div>
        <small>© 2026 6-STEP DANCE STUDIO. All Rights Reserved.</small>
      </footer>

      <a className="floating-wa" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={23}/></a>
    </div>
  );
}

export default App;