import foto9 from '../src/foto9.png';
import foto10 from '../src/foto10.png';
import foto11 from '../src/foto11.png';
import foto12 from '../src/foto12.png';
import foto13 from '../src/foto13.png';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SahgriLogo from './components/SahgriLogo';
import './App.css';
import foto1 from '../src/foto1.png';
import foto2 from '../src/foto2.png';
import foto3 from '../src/foto3.png';
import foto4 from '../src/foto4.png';
import foto5 from '../src/foto5.png';


import foto6 from '../src/foto6.png';
import foto7 from '../src/foto7.png';
import foto8 from '../src/foto8.png';




function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  // For Centre Scolaire de Perrosalle - Ollon slideshow
  const [perrosalleIndex, setPerrosalleIndex] = useState(0);
  const perrosalleImages = [foto3, foto4, foto5];
  // For Tribunal cantonal de l'Hermitage slideshow
  const [tribunalIndex, setTribunalIndex] = useState(0);
  const tribunalImages = [foto1, foto2];

  // For Immeuble Locatif – Brassus slideshow
  const [brassusIndex, setBrassusIndex] = useState(0);
  const brassusImages = [foto7, foto8];

  // For Ecole du Martinet - Rolle slideshow
  const [martinetIndex, setMartinetIndex] = useState(0);
  const martinetImages = [foto9, foto10];

  // Refs for animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message envoyé avec succès!');
  };

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  // Hero slideshow images
  const heroImages = [foto13, foto1, foto2, foto3];

  // Responsive state for mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Logo intro animation
  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => setShowIntro(false), 800);
      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  return (
    <>
      {showIntro && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(30,34,40,0.55)',
            backdropFilter: 'blur(16px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <SahgriLogo size="large" />
        </div>
      )}
      <div
        className="App"
        style={{ minHeight: isMobile ? '90vh' : '100vh' }}
      >
        {/* Header */}
        <motion.header className="header"
          initial={{ y: -120, scale: 0.95, rotate: -5, opacity: 0 }}
          animate={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 70, damping: 16, delay: 0.3 }}
        >
        <div className="header-top">
          <div className="container">
            <div className="contact-info">
              
              <span className="email">info@sahgri.ch</span>
            </div>
          
          </div>
        </div>
        
        <nav className="navbar">
          <div className="container">
            <div className="nav-brand">
              <SahgriLogo size="small" />
            </div>
            <div className={`nav-menu${isMenuOpen ? ' active' : ''}`}>
              <a href="#accueil" className="nav-link" onClick={() => setIsMenuOpen(false)}>Accueil</a>
              <a href="#qui-sommes-nous" className="nav-link" onClick={() => setIsMenuOpen(false)}>Qui sommes nous</a>
              <a href="#plâtrerie" className="nav-link" onClick={() => setIsMenuOpen(false)}>Plâtrerie & Peinture</a>
              <a href="#etudes" className="nav-link" onClick={() => setIsMenuOpen(false)}>Études & Conseil</a>
              <a href="#faux-plafonds" className="nav-link" onClick={() => setIsMenuOpen(false)}>Faux-plafonds</a>
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
            <div className={`hamburger${isMenuOpen ? ' open' : ''}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
  </motion.header>

  {/* Hero Sectiondsd */}
      <section
        id="accueil"
        className="hero"
        ref={heroRef}
        style={{
          minHeight: isMobile ? '90vh' : '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: isMobile ? '0 8px' : '0 5vw',
        }}
      >
        <motion.div 
          className="hero-background"
          style={{ y }}
        >
          <div
            className="hero-slideshow"
            style={{
              touchAction: 'none',
              userSelect: 'none',
              WebkitUserDrag: 'none',
              msUserSelect: 'none',
              minHeight: isMobile ? '90vh' : undefined,
              height: isMobile ? '90vh' : undefined,
            }}
          >
            {heroImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt="Construction Background"
                className="hero-bg-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                draggable={false}
                style={{
                  touchAction: 'none',
                  userSelect: 'none',
                  WebkitUserDrag: 'none',
                  msUserSelect: 'none',
                  minHeight: isMobile ? '90vh' : undefined,
                  height: isMobile ? '90vh' : undefined,
                  objectFit: 'cover',
                  width: '100%',
                  maxWidth: '100%',
                }}
              />
            ))}
          </div>
          <div className="hero-overlay"></div>
          
          {/* Slideshow indicators */}
          <div className="slideshow-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className="indicator"
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </motion.div>
        {/* Floating decorative elements */}
        <motion.div 
          className="floating-element floating-1"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="floating-shape"></div>
        </motion.div>
        <motion.div 
          className="floating-element floating-2"
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <div className="floating-shape"></div>
        </motion.div>
        <motion.div 
          className="floating-element floating-3"
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <div className="floating-shape"></div>
        </motion.div>
        <div className="container">
          {/* Only one hero-content block should be present. Duplicate removed. */}
          {/* This container was empty and is now removed to prevent layout overlap. */}
        </div>

        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ marginBottom: '30px' }}
            >
              <SahgriLogo size="large" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1.2rem, 5vw, 2rem)',
                lineHeight: 1.1,
                marginBottom: '2vw',
                textAlign: 'center',
                marginTop: 0,
              }}
            >
              Devenir LE partenaire de vos projets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)',
                lineHeight: 1.25,
                marginBottom: '2vw',
                textAlign: 'center',
                marginTop: 0,
              }}
            >
              Découvrez SAHGRI SARL, spécialisée dans la plâtrerie-peinture, faux-plafonds et revêtements acoustiques. Forte expérience dans l'exécution de projets de plusieurs milliers de m² pour des marchés publics et privés.
            </motion.p>
            <motion.button 
              className="cta-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', padding: isMobile ? '10px 18px' : '15px 40px' }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Obtenir un devis
            </motion.button>
            <motion.div 
              className="hero-contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {/* Add any mobile-specific contact info here if needed */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Qui sommes nous Section */}
      <section id="qui-sommes-nous" className="about-section" style={{ background: '#f8f9fa', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: 24 }}>Qui sommes nous</h2>
          <p style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: '#444' }}>
            SAHGRI SARL est une entreprise spécialisée dans la plâtrerie-peinture, faux-plafonds et revêtements acoustiques. Forte d'une expérience de plus de 17 ans, notre équipe accompagne les projets publics et privés de toutes tailles, en garantissant qualité, expertise et respect des délais.
          </p>
        </div>
      </section>

       {/* Plâtrerie Section */}
       <section id="plâtrerie" className="services-section" ref={servicesRef}>
        <div className="container">
          <div className="section-content">
            <div className="service-layout">
              <motion.div 
                className="text-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                 <h2>Plâtrerie-Peinture</h2>
                 <p>SAHGRI SARL excelle dans l'exécution de projets de plâtrerie-peinture de plusieurs milliers de m². Notre équipe de vingtaine de collaborateurs maîtrise toutes les techniques de finition pour des projets de grande envergure.</p>
                
                <motion.div 
                  className="features"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="feature"

                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Plus de 17 ans d'expérience</h3>
                     <p>La direction possède une expérience de plus de 17 ans dans le domaine du second-œuvre, particulièrement appréciée des architectes, régies et administrations publiques.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Projets de grande envergure</h3>
                     <p>Capacité à prendre en charge de gros ouvrages : hôpitaux, centres administratifs, écoles, universités et banques. Exécution de projets de plusieurs milliers de m².</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Collaborations fournisseurs suisses</h3>
                     <p>SAHGRI SARL collabore avec un grand nombre de fournisseurs suisses, ce qui permet d'apporter de la diversité dans les solutions proposées.</p>
                  </motion.div>
                </motion.div>
                
                <div className="section-buttons">
                  <motion.button 
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                  <motion.button 
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contactez-nous
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="service-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={foto12} 
                  alt="Projet Plâtrerie"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(foto12)}
                />
                <motion.div 
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                   <span>Voir en détail</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

       {/* Faux-plafonds Section */}
       <section id="faux-plafonds" className="services-section alt">
        <div className="container">
          <div className="section-content">
            <div className="service-layout reverse">
              <motion.div 
                className="service-image"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={foto11} 
                  alt="Projet Faux-plafonds et Revêtements Acoustiques"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(foto11)}
                />
                <motion.div 
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                   <span>Voir en détail</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="text-content"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                 <h2>Faux-plafonds et Revêtements Acoustiques</h2>
                 <p>Notre expertise s'étend aux faux-plafonds métalliques, en fibre de bois et aux revêtements acoustiques. Nous proposons des solutions complètes pour l'amélioration de l'acoustique et l'esthétique de vos espaces.</p>
                
                <motion.ul 
                  className="service-list"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                   <motion.li>Faux-plafonds métalliques</motion.li>
                   <motion.li>Faux-plafonds en fibre de bois</motion.li>
                   <motion.li>Solutions acoustiques</motion.li>
                   <motion.li>Revêtements acoustiques</motion.li>
                </motion.ul>
                
                <div className="section-buttons">
                  <motion.button 
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                  <motion.button 
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contactez-nous
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

       {/* Études Section */}
       <section id="etudes" className="services-section">
        <div className="container">
          <div className="section-content">
            <div className="service-layout">
              <motion.div 
                className="text-content"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                 <h2>Études & Conseils</h2>
                 <p>SAHGRI SARL réalise des études de projets et conseils dans les domaines de la plâtrerie-peinture et des faux-plafonds. Notre direction apporte son expertise de plus de 17 ans dans le domaine du second-œuvre.</p>
                
                <motion.div 
                  className="features"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="feature"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Projets publics et privés</h3>
                    <p>Nous travaillons sur des projets variés : écoles, universités, hôpitaux, centres administratifs, banques, tribunaux, immeubles d'appartements et organisations internationales.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Projets de référence</h3>
                     <p>Parmi nos réalisations : Tribunal cantonal de l'Hermitage (CHF 800'000), Centre William Rappard - OMC Genève (CHF 8'000'000), École du Martinet - Rolle (CHF 470'000).</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Reconnaissance professionnelle</h3>
                     <p>Bien reconnus par les architectes, agences immobilières et administrations publiques pour la gestion de travaux de grande envergure.</p>
                  </motion.div>
                </motion.div>
                
                <div className="section-buttons">
                  <motion.button 
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                  <motion.button 
                    className="btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contactez-nous
                  </motion.button>
                </div>
              </motion.div>
              
              <motion.div 
                className="service-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center" 
                  alt="Isolation Thermique"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center')}
                />
                <motion.div 
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                   <span>Voir en détail</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* Study Process Section */}

      <section className="study-process new-real-section">
        <div className="container">
          <h2 className="reference-title-gradient" style={{textAlign: 'left', marginBottom: 24, fontSize: '2.2rem'}}>Nos Réalisations de Référence</h2>
          <div className="real-carousel-wrapper">
            <button className="real-carousel-arrow left" onClick={() => document.getElementById('real-carousel').scrollBy({left: -400, behavior: 'smooth'})}>&#8592;</button>
            <div
              className="real-carousel"
              id="real-carousel"
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                gap: isMobile ? 12 : 32,
                paddingBottom: isMobile ? 12 : 24,
                minHeight: isMobile ? 220 : 380,
              }}
            >
              {/* Project 1 */}
              <div
                className="real-slide"
                style={{
                  backgroundImage: `url(${foto6})`,
                  minWidth: isMobile ? 220 : 340,
                  height: isMobile ? 220 : 380,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: isMobile ? 14 : 24,
                  position: 'relative',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                }}
                onClick={() => openLightbox(foto6)}
              >
                <div className="real-info" style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(44,62,80,0.82)', color: '#fff', borderRadius: '0 0 24px 24px', padding: 20}}>
                  <h3 style={{margin: 0}}>Centre William Rappard (OMC) - Genève</h3>
                  <span style={{fontWeight: 600}}>CHF 8'000'000</span>
                  <p style={{margin: '8px 0 0'}}>Organisation Mondiale du Commerce, Genève (2008-2014). Travaux de plâtrerie et cloisons pour ce centre international prestigieux.</p>
                </div>
              </div>
              {/* Project 2 - Perrosalle slideshow */}
              <div
                className="real-slide"
                style={{
                  backgroundImage: `url(${perrosalleImages[perrosalleIndex]})`,
                  minWidth: isMobile ? 220 : 340,
                  height: isMobile ? 220 : 380,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: isMobile ? 14 : 24,
                  position: 'relative',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                }}
                onClick={() => openLightbox(perrosalleImages[perrosalleIndex])}
              >
                <div className="real-info" style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(44,62,80,0.82)', color: '#fff', borderRadius: '0 0 24px 24px', padding: 20}}>
                  <h3>Centre Scolaire de Perrosalle - Ollon</h3>
                  <span>CHF 470'000</span>
                  <p>Centre scolaire d'Ollon (2023). Faux-plafonds métalliques et fibre de bois pour améliorer l'environnement éducatif.</p>
                  <div className="real-thumbs" style={{display: 'flex', gap: 6, marginTop: 8}}>
                    {perrosalleImages.map((img, idx) => (
                      <img key={idx} src={img} alt="thumb" style={{width: 32, height: 32, borderRadius: 8, border: perrosalleIndex===idx?'2px solid #ffd166':'2px solid #fff', opacity: perrosalleIndex===idx?1:0.6, cursor: 'pointer'}} onClick={e => {e.stopPropagation(); setPerrosalleIndex(idx);}} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Project 3 - Tribunal slideshow */}
              <div
                className="real-slide"
                style={{
                  backgroundImage: `url(${tribunalImages[tribunalIndex]})`,
                  minWidth: isMobile ? 220 : 340,
                  height: isMobile ? 220 : 380,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: isMobile ? 14 : 24,
                  position: 'relative',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                }}
                onClick={() => openLightbox(tribunalImages[tribunalIndex])}
              >
                <div className="real-info" style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(44,62,80,0.82)', color: '#fff', borderRadius: '0 0 24px 24px', padding: 20}}>
                  <h3>Tribunal cantonal de l'Hermitage - Lausanne</h3>
                  <span>CHF 800'000</span>
                  <p>Tribunal cantonal de Lausanne (2022-2024). Travaux de plâtrerie-peinture et faux-plafonds pour ce bâtiment institutionnel important.</p>
                  <div className="real-thumbs" style={{display: 'flex', gap: 6, marginTop: 8}}>
                    {tribunalImages.map((img, idx) => (
                      <img key={idx} src={img} alt="thumb" style={{width: 32, height: 32, borderRadius: 8, border: tribunalIndex===idx?'2px solid #ffd166':'2px solid #fff', opacity: tribunalIndex===idx?1:0.6, cursor: 'pointer'}} onClick={e => {e.stopPropagation(); setTribunalIndex(idx);}} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Project 4 - Brassus slideshow */}
              <div
                className="real-slide"
                style={{
                  backgroundImage: `url(${brassusImages[brassusIndex]})`,
                  minWidth: isMobile ? 220 : 340,
                  height: isMobile ? 220 : 380,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: isMobile ? 14 : 24,
                  position: 'relative',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                }}
                onClick={() => openLightbox(brassusImages[brassusIndex])}
              >
                <div className="real-info" style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(44,62,80,0.82)', color: '#fff', borderRadius: '0 0 24px 24px', padding: 20}}>
                  <h3>IMMEUBLE LOCATIF – BRASSUS</h3>
                  <span>CHF 360'000.-</span>
                  <p>Plâtrerie-peinture, Faux-plafonds, carrelage, isolation périphérique, construction métallique<br/>Catégorie : Marché privé<br/>Année : 2023</p>
                  <div className="real-thumbs" style={{display: 'flex', gap: 6, marginTop: 8}}>
                    {brassusImages.map((img, idx) => (
                      <img key={idx} src={img} alt="thumb" style={{width: 32, height: 32, borderRadius: 8, border: brassusIndex===idx?'2px solid #ffd166':'2px solid #fff', opacity: brassusIndex===idx?1:0.6, cursor: 'pointer'}} onClick={e => {e.stopPropagation(); setBrassusIndex(idx);}} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Project 5 - Martinet slideshow */}
              <div
                className="real-slide"
                style={{
                  backgroundImage: `url(${martinetImages[martinetIndex]})`,
                  minWidth: isMobile ? 220 : 340,
                  height: isMobile ? 220 : 380,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: isMobile ? 14 : 24,
                  position: 'relative',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                  scrollSnapAlign: 'start',
                  cursor: 'pointer',
                }}
                onClick={() => openLightbox(martinetImages[martinetIndex])}
              >
                <div className="real-info" style={{position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(44,62,80,0.82)', color: '#fff', borderRadius: '0 0 24px 24px', padding: 20}}>
                  <h3>ECOLE DU MARTINET - ROLLE</h3>
                  <span>CHF 520'000.-</span>
                  <p>Revêtement acoustique et faux-plafonds métallique<br/>Catégorie : Marché public<br/>Année : 2016</p>
                  <div className="real-thumbs" style={{display: 'flex', gap: 6, marginTop: 8}}>
                    {martinetImages.map((img, idx) => (
                      <img key={idx} src={img} alt="thumb" style={{width: 32, height: 32, borderRadius: 8, border: martinetIndex===idx?'2px solid #ffd166':'2px solid #fff', opacity: martinetIndex===idx?1:0.6, cursor: 'pointer'}} onClick={e => {e.stopPropagation(); setMartinetIndex(idx);}} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button className="real-carousel-arrow right" onClick={() => document.getElementById('real-carousel').scrollBy({left: 400, behavior: 'smooth'})}>&#8594;</button>
          </div>
        </div>
      </section>

 

      {/* Contact Section */}
      <section id="contact" className="contact-section-advanced" style={{
        background: "linear-gradient(120deg, #f8fafc 60%, #e0e7ef 100%)",
        padding: "0",
        position: "relative"
      }}>
        <div className="contact-hero-bg" style={{
          background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat",
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          opacity: 0.18,
          zIndex: 0
        }}></div>
        <div className="contact-advanced-card" style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "flex",
          borderRadius: 32,
          boxShadow: "0 8px 40px rgba(44,62,80,0.13)",
          overflow: "hidden",
          background: "rgba(255,255,255,0.85)",
          marginTop: 64,
          marginBottom: 64
        }}>
          <div className="contact-advanced-left" style={{
            flex: 1.1,
            padding: "56px 48px 56px 56px",
            background: "rgba(255,255,255,0.92)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1.5px solid #e0e7ef"
          }}>
            <h2 style={{ fontSize: "2.3rem", color: "#2c3e50", marginBottom: 18, fontWeight: 800, letterSpacing: 0.5 }}>Laisser un message</h2>
            <p style={{ color: "#4b5563", fontSize: "1.15rem", marginBottom: 32 }}>Spécialistes en plâtrerie, peinture, faux-plafonds et solutions acoustiques haut de gamme. Contactez-nous pour un conseil ou un devis personnalisé.</p>
            {/* Timeline of specialties removed as requested */}
            <div style={{marginTop: 36}}>
              <div style={{display:'flex',alignItems:'center',gap:18,marginBottom:10}}>
                <span style={{fontSize:22, color:'#ff6b35'}}>📞</span>
                <span style={{fontWeight:600, color:'#2c3e50'}}>+41 22 796 60 24</span>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:18,marginBottom:10}}>
                <span style={{fontSize:22, color:'#3b82f6'}}>✉️</span>
                <span style={{fontWeight:600, color:'#2c3e50'}}>info@sahgri.ch</span>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:18,marginBottom:10}}>
                <span style={{fontSize:22, color:'#10b981'}}>📍</span>
                <span style={{fontWeight:600, color:'#2c3e50'}}>Avenue du Mont-Blanc 16, 1196 Gland</span>
              </div>
            </div>
          </div>
          <div className="contact-advanced-right" style={{
            flex: 1,
            padding: "56px 48px",
            background: "rgba(255,255,255,0.97)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}>
            <form className="contact-form-advanced" onSubmit={handleFormSubmit} style={{width:'100%',maxWidth:420,margin:'0 auto'}}>
              <div className="form-group">
                <label htmlFor="name">Nom *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="rgpd" name="rgpd" required />
                <label htmlFor="rgpd">Oui, j'accepte la politique de confidentialité.</label>
              </div>
              <button type="submit" className="submit-btn-advanced" style={{background:'#ff6b35',color:'#fff',border:'none',padding:'15px 0',fontWeight:700,fontSize:'1.1rem',borderRadius:18,marginTop:10,boxShadow:'0 2px 8px rgba(44,62,80,0.08)',width:'100%',letterSpacing:0.5}}>Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>



      {/* Full-width Map Section */}
      <section className="map-section">
        <div className="container">
          <h3>Notre localisation</h3>
        </div>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29032.382469299147!2d6.244010775429639!3d46.42285626610425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c4362156f23bf%3A0x1e4d33455f3b6e!2sAv.%20du%20Mont-Blanc%2016%2C%201196%20Gland%2C%20Zvic%C3%ABr!5e0!3m2!1ssq!2s!4v1757288738337!5m2!1ssq!2s" 
            width="100%" 
            height="450" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="SAHGRI SARL Location Map"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact :</h3>
              {/* Footer image removed as requested yes */}
                   <p>Avenue du Mont-Blanc 16, 1196 Gland</p>
              <p>Grillo Sonny - 079/672.88.18</p>
              <p>Sahiti Agron - 078/673.50.03</p>
              <p>info@sahgri.ch</p>
            </div>
            
            <div className="footer-section">
              <h3>Liens Rapide :</h3>
              <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#qui-sommes-nous">Qui sommes nous</a></li>
                 <li><a href="#plâtrerie">Plâtrerie</a></li>
                 <li><a href="#etudes">Études & Conseil</a></li>
                 <li><a href="#faux-plafonds">Faux-plafonds</a></li>
                {/* FAQ link removed as requested */}
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Liens Utiles :</h3>
              <div style={{margin:'8px 0 12px 0'}}>
                <a href="https://www.instagram.com/sahgri.sarl/" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:4,textDecoration:'none',color:'#E4405F',fontWeight:600,fontSize:18}} title="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="6" fill="#fff"/>
                    <path d="M16.98 3H7.02C4.25 3 2 5.25 2 8.02v8.96C2 18.75 4.25 21 7.02 21h8.96C19.75 21 22 18.75 22 15.98V7.02C22 5.25 19.75 3 16.98 3zM20 15.98c0 1.66-1.36 3.02-3.02 3.02H7.02A3.02 3.02 0 0 1 4 15.98V7.02C4 5.36 5.36 4 7.02 4h8.96C18.64 4 20 5.36 20 7.02v8.96z" fill="#E4405F"/>
                    <path d="M12 7.5A4.5 4.5 0 1 0 12 16.5a4.5 4.5 0 0 0 0-9zm0 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5-7.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" fill="#E4405F"/>
                  </svg>
                  <span style={{fontSize:15, fontWeight:500}}>Instagram</span>
                </a>
              </div>
              <ul>
                {/* Links removed as requested */}
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom" style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:12}}>
            <p style={{margin:0}}>Copyright © 2025</p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div 
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="lightbox-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Gallery Image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      )}
  </div>
  </>
  );
}

export default App;
