import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Message envoyé avec succès!');
  };

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleOnHover = {
    hover: { scale: 1.05 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  const rotateOnHover = {
    hover: { rotate: 5 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  // Hero slideshow images
  const heroImages = [
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center'
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="contact-info">
              <span className="phone">+41 22 796 60 24</span>
              <span className="email">info@alpinaigp.ch</span>
            </div>
          </div>
        </div>
        
        <nav className="navbar">
          <div className="container">
            <div className="nav-brand">
              <h2>Alpina IGP</h2>
            </div>
            
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <a href="#accueil" className="nav-link">Accueil</a>
              <a href="#qui-sommes-nous" className="nav-link">Qui sommes nous</a>
              <a href="#plâtrerie" className="nav-link">Plâtrerie</a>
              <a href="#isolation" className="nav-link">Isolation Thermique Extérieure</a>
              <a href="#peinture" className="nav-link">Peinture</a>
              <a href="#faq" className="nav-link">FAQ</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="hero" ref={heroRef}>
        <motion.div 
          className="hero-background"
          style={{ y }}
        >
          <div className="hero-slideshow">
            {heroImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Construction Background ${index + 1}`}
                className={`hero-bg-image ${index === currentSlide ? 'active' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            ))}
          </div>
          <div className="hero-overlay"></div>
          
          {/* Slideshow indicators */}
          <div className="slideshow-indicators">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Floating decorative elements */}
        <motion.div 
          className="floating-element floating-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="floating-shape"></div>
        </motion.div>
        
        <motion.div 
          className="floating-element floating-2"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="floating-shape"></div>
        </motion.div>
        
        <motion.div 
          className="floating-element floating-3"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 8, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="floating-shape"></div>
        </motion.div>

        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Devenir LE partenaire de vos projets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Découvrez Alpina IGP, une entreprise dédiée à la qualité et au respect des délais pour tous vos projets de rénovation et neuf.
            </motion.p>
            <motion.button 
              className="cta-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Obtenir un devis
            </motion.button>
            <motion.div 
              className="hero-contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <span className="phone">+41 22 796 60 24</span>
            </motion.div>
          </motion.div>
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
                <h2>Gypsage, cloisons sèches et faux plafonds</h2>
                <p>Chez Alpina IGP, nous maîtrisons l'art de la plâtrerie depuis plus de 20 ans, en mettant notre savoir-faire au service de vos projets. Que vous souhaitiez rénover, moderniser ou créer, notre équipe d'experts est là pour donner vie à vos idées.</p>
                
                <motion.div 
                  className="features"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <h3>Expertise de plus de 20 ans</h3>
                    <p>Forts de plus de deux décennies d'expérience, nous avons perfectionné nos techniques pour garantir un rendu esthétique et durable.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <h3>Réactivité et efficacité</h3>
                    <p>Nous traitons vos demandes avec rapidité, en assurant une prise en charge efficace pour respecter vos besoins et contraintes.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <h3>Respect des délais</h3>
                    <p>La satisfaction client est notre priorité. C'est pourquoi nous nous engageons à respecter les délais convenus pour chaque projet.</p>
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
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&crop=center" 
                  alt="Plâtrerie"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center')}
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

      {/* Peinture Section */}
      <section id="peinture" className="services-section alt">
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
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center" 
                  alt="Peinture"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center')}
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
                <h2>Peinture et Décoration</h2>
                <p>Notre équipe de spécialistes chez Alpina IGP vous accompagne dans tous vos projets de peinture et de décoration, en apportant une touche d'élégance et de personnalisation à chaque espace, intérieur comme extérieur.</p>
                
                <motion.ul 
                  className="service-list"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.li variants={fadeInUp}>Peinture intérieure et extérieure</motion.li>
                  <motion.li variants={fadeInUp}>Revêtements muraux de qualité</motion.li>
                  <motion.li variants={fadeInUp}>Application de papiers peints</motion.li>
                  <motion.li variants={fadeInUp}>Décoration et finitions</motion.li>
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

      {/* Isolation Section */}
      <section id="isolation" className="services-section">
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
                <h2>Isolation Thermique Extérieure</h2>
                <p>Chez Alpina IGP, nous vous proposons des solutions d'isolation thermique extérieure pour optimiser l'efficacité énergétique de vos bâtiments tout en apportant une touche esthétique. Réduisez vos déperditions de chaleur et améliorez le confort de votre habitat avec nos techniques éprouvées.</p>
                
                <motion.div 
                  className="features"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <h3>Minimisation des déperditions de chaleur</h3>
                    <p>Grâce à des matériaux performants et à des techniques de pose rigoureuses, nous limitons les déperditions thermiques pour une maison mieux isolée et plus confortable.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <h3>Optimisation de l'efficacité énergétique</h3>
                    <p>Réduisez votre consommation d'énergie et faites des économies en optant pour une isolation extérieure qui améliore significativement l'efficacité énergétique de votre bâtiment.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <h3>Solutions créatives et esthétiques</h3>
                    <p>Alliez performance et design grâce à une large palette de finitions et de styles pour harmoniser votre façade avec votre vision.</p>
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

      {/* Project Gallery Section */}
      <section className="gallery-section" ref={galleryRef}>
        <div className="container">
          <motion.div 
            className="gallery-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Nos réalisations</h2>
            <p>Découvrez quelques-uns de nos projets récents</p>
          </motion.div>
          
          <motion.div 
            className="gallery-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="gallery-item"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&crop=center')}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center" 
                alt="Projet 1"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="gallery-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Rénovation Complète</h3>
                <p>Plâtrerie et peinture</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="gallery-item"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center')}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center" 
                alt="Projet 2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="gallery-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Isolation Extérieure</h3>
                <p>Rénovation énergétique</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="gallery-item"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center')}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop&crop=center" 
                alt="Projet 3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="gallery-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Décoration Intérieure</h3>
                <p>Peinture et finitions</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Study Process Section */}
      <section className="study-process">
        <div className="container">
          <h2>Réalisation d'étude</h2>
          <p>Chez Alpina IGP, nous réalisons l'étude de vos projets pour une solution clés en main.</p>
          
          <div className="process-steps">
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="step-image">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=300&h=200&fit=crop&crop=center" 
                  alt="Métrés"
                />
              </div>
              <div className="step-number">1</div>
              <h3>Réalisation des métrés</h3>
              <p>La première étape de notre étude consiste à effectuer des métrés précis. Nos spécialistes se déplacent sur site pour analyser les surfaces, prendre des mesures exactes et évaluer les contraintes spécifiques de votre projet.</p>
            </motion.div>
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-image">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop&crop=center" 
                  alt="Soumissions"
                />
              </div>
              <div className="step-number">2</div>
              <h3>Réalisation de soumissions</h3>
              <p>Sur la base des métrés, nous préparons une soumission complète et personnalisée. Nous détaillons les prestations prévues, les matériaux que nous utiliserons, ainsi que les techniques spécifiques adaptées à votre projet.</p>
            </motion.div>
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-image">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center" 
                  alt="Calcul de prix"
                />
              </div>
              <div className="step-number">3</div>
              <h3>Calculation de prix</h3>
              <p>Nous passons ensuite à la calculations des prix en tenant compte des spécificités de votre projet, des matériaux de qualité et des techniques requises.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <motion.div 
            className="faq-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>FAQ générale</h2>
            <div className="faq-header-image">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c6a0c3f2fcc0?w=400&h=300&fit=crop&crop=center" 
                alt="FAQ"
              />
            </div>
          </motion.div>
          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <h3>Quels services propose Alpina IGP SA ?</h3>
                <span className={`faq-toggle ${activeFaq === 0 ? 'active' : ''}`}>
                  {activeFaq === 0 ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${activeFaq === 0 ? 'active' : ''}`}>
                <p>Nous offrons des services de plâtrerie, peinture, isolation thermique extérieure et décoration.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <h3>Dans quelles régions opère Alpina IGP SA ?</h3>
                <span className={`faq-toggle ${activeFaq === 1 ? 'active' : ''}`}>
                  {activeFaq === 1 ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${activeFaq === 1 ? 'active' : ''}`}>
                <p>Nous intervenons principalement dans les cantons de Genève et de Vaud.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <h3>Comment contacter l'entreprise ?</h3>
                <span className={`faq-toggle ${activeFaq === 2 ? 'active' : ''}`}>
                  {activeFaq === 2 ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${activeFaq === 2 ? 'active' : ''}`}>
                <p>Vous pouvez nous joindre par téléphone, par mail ou via leur formulaire de contact en ligne.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <h3>Quelle est la philosophie d'Alpina IGP ?</h3>
                <span className={`faq-toggle ${activeFaq === 3 ? 'active' : ''}`}>
                  {activeFaq === 3 ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${activeFaq === 3 ? 'active' : ''}`}>
                <p>Notre philosophie repose sur la réactivité, le respect des engagements et la qualité des prestations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Laisser un message</h2>
              <p>Contactez-nous pour partager vos idées, poser vos questions ou demander un devis personnalisé. Nous sommes là pour vous aider !</p>
              
              <div className="contact-image">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=300&fit=crop&crop=center" 
                  alt="Contact"
                />
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Téléphone</h3>
                  <p>+41 22 796 60 24</p>
                </div>
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>info@alpinaigp.ch</p>
                </div>
                <div className="contact-item">
                  <h3>Adresse</h3>
                  <p>Chemin du Château-Bloch 10, 1219 Vernier</p>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit}>
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
              <button type="submit" className="submit-btn">Envoyer le message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact :</h3>
              <div className="footer-image">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center" 
                  alt="Contact Footer"
                />
              </div>
              <p>Chemin du Château-Bloch 10, 1219 Vernier</p>
              <p>+41 22 796 60 24</p>
              <p>info@alpinaigp.ch</p>
            </div>
            
            <div className="footer-section">
              <h3>Liens Rapide :</h3>
              <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#qui-sommes-nous">Qui sommes nous</a></li>
                <li><a href="#plâtrerie">Plâtrerie</a></li>
                <li><a href="#isolation">Isolation Thermique Extérieure</a></li>
                <li><a href="#peinture">Peinture</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Liens Utiles :</h3>
              <ul>
                <li><a href="#sitemap">Sitemap</a></li>
                <li><a href="#privacy">Politique de confidentialité</a></li>
                <li><a href="#legal">Mentions légales</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>Copyright © 2024 - Site créé et référencé par <strong>Digistylze</strong></p>
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
          onClick={closeLightbox}
        >
          <motion.div 
            className="lightbox-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
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
  );
}

export default App;
