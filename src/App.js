import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SahgriLogo from './components/SahgriLogo';
import './App.css';
import foto1 from '../src/foto1.png';
import foto2 from '../src/foto2.png';



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
              <span className="email">info@sahgri.ch</span>
            </div>
          </div>
        </div>
        
        <nav className="navbar">
          <div className="container">
            <div className="nav-brand">
              <SahgriLogo size="small" />
            </div>
            
            <div className="nav-menu">
              <a href="#accueil" className="nav-link">Accueil</a>
              <a href="#qui-sommes-nous" className="nav-link">Qui sommes nous</a>
              <a href="#plâtrerie" className="nav-link">Plâtrerie & Peinture</a>
              <a href="#etudes" className="nav-link">Études & Conseil</a>
              <a href="#faux-plafonds" className="nav-link">Faux-plafonds</a>
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
                alt="Construction Background"
                className="hero-bg-image"
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
                className="indicator"
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
            >
              Devenir LE partenaire de vos projets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Plus de 17 ans d'expérience</h3>
                     <p>La direction possède une expérience de plus de 17 ans dans le domaine du second-œuvre, particulièrement appréciée des architectes, régies et administrations publiques.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Projets de grande envergure</h3>
                     <p>Capacité à prendre en charge de gros ouvrages : hôpitaux, centres administratifs, écoles, universités et banques. Exécution de projets de plusieurs milliers de m².</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
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
                 <h2>Faux-plafonds et Revêtements Acoustiques</h2>
                 <p>Notre expertise s'étend aux faux-plafonds métalliques, en fibre de bois et aux revêtements acoustiques. Nous proposons des solutions complètes pour l'amélioration de l'acoustique et l'esthétique de vos espaces.</p>
                
                <motion.ul 
                  className="service-list"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                   <motion.li variants={fadeInUp}>Faux-plafonds métalliques</motion.li>
                   <motion.li variants={fadeInUp}>Faux-plafonds en fibre de bois</motion.li>
                   <motion.li variants={fadeInUp}>Solutions acoustiques</motion.li>
                   <motion.li variants={fadeInUp}>Revêtements acoustiques</motion.li>
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
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Projets publics et privés</h3>
                     <p>Nous travaillons sur des projets variés : écoles, universités, hôpitaux, centres administratifs, banques, tribunaux, immeubles d'appartements et organisations internationales.</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                     <h3>Projets de référence</h3>
                     <p>Parmi nos réalisations : Tribunal cantonal de l'Hermitage (CHF 800'000), Centre William Rappard - OMC Genève (CHF 8'000'000), École du Martinet - Rolle (CHF 470'000).</p>
                  </motion.div>
                  <motion.div 
                    className="feature"
                    variants={fadeInUp}
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
                 <h3>Tribunal cantonal de l'Hermitage</h3>
                 <p>Plâtrerie-peinture & Faux-plafonds - CHF 800'000</p>
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
                 <h3>Centre William Rappard (OMC)</h3>
                 <p>Plâtrerie & Cloisons - CHF 8'000'000</p>
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
                 <h3>École du Martinet - Rolle</h3>
                 <p>Revêtements acoustiques - CHF 520'000</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Study Process Section */}
      <section className="study-process">
        <div className="container">
           <h2>Nos Réalisations de Référence</h2>
           <p>Découvrez quelques-uns de nos projets majeurs réalisés pour des institutions publiques et privées.</p>
          
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
                   alt="Mètres"
                />
              </div>
              <div className="step-number">1</div>
               <h3>Centre William Rappard (OMC) - Genève</h3>
               <p>Projet de CHF 8'000'000 - Organisation Mondiale du Commerce, Genève (2008-2014). Travaux de plâtrerie et cloisons pour ce centre international prestigieux.</p>
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
               <h3>Centre Scolaire de Perrosalle - Ollon</h3>
               <p>Projet de CHF 470'000 - Centre scolaire d'Ollon (2023). Faux-plafonds métalliques et fibre de bois pour améliorer l'environnement éducatif.</p>
            </motion.div>
            <motion.div 
              className="step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <h3>Tribunal cantonal de l'Hermitage - Lausanne</h3>
              <p>Projet de CHF 800'000 - Tribunal cantonal de Lausanne (2022-2024). Travaux de plâtrerie-peinture et faux-plafonds pour ce bâtiment institutionnel important.</p>
              <div className="project-images">
                <img 
                  src={foto1}
                  alt="Tribunal cantonal de l'Hermitage - Vue d'ensemble du chantier"
                  onClick={() => openLightbox(foto1)}
                />
                <img 
                  src={foto2} 
                  alt="Tribunal cantonal de l'Hermitage - Escalier en spirale"
                  onClick={() => openLightbox(foto2)}
                />
              </div>
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
                <h3>Quels services propose SAHGRI SARL ?</h3>
                <span className="faq-toggle">
                  {activeFaq === 0 ? '' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                 <p>Nous offrons des services de plâtrerie-peinture, faux-plafonds (métalliques, fibre de bois), revêtements acoustiques et études de projets pour des travaux de grande envergure.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                 <h3>Dans quelles régions opère SAHGRI SARL ?</h3>
                <span className="faq-toggle">
                  {activeFaq === 1 ? '' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                 <p>Nous intervenons principalement en Suisse romande, avec des projets dans les cantons de Genève, Vaud et autres régions. Notre siège est situé à Gland.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                 <h3>Quels types de projets réalisez-vous ?</h3>
                <span className="faq-toggle">
                  {activeFaq === 2 ? '' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                 <p>Nous travaillons sur des projets publics et privés : écoles, universités, hôpitaux, centres administratifs, banques, tribunaux, immeubles locatifs et organisations internationales.</p>
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                 <h3>Quelle est l'expérience de votre équipe ?</h3>
                <span className="faq-toggle">
                  {activeFaq === 3 ? '' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                 <p>Notre équipe compte une vingtaine de collaborateurs. La direction possède une importante expérience dans l'exécution de projets de grandes envergures et est particulièrement appréciée des architectes, régies et administrations publiques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&h=1080&fit=crop&crop=center')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative"
      }}>
        <div className="contact-overlay" style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2, color: "white" }}>
          <div className="contact-content">
            <div className="contact-info">
              <h2 style={{ color: "white" }}>Laisser un message</h2>
               <p style={{ color: "white" }}>Contactez-nous pour partager vos idées, poser vos questions ou demander un devis personnalisé. Nous sommes là pour vous aider !</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3 style={{ color: "white" }}>Téléphone</h3>
                  <p style={{ color: "white" }}>+41 22 796 60 24</p>
                </div>
                <div className="contact-item">
                  <h3 style={{ color: "white" }}>Contact Principal</h3>
                  <p style={{ color: "white" }}>Grillo Sonny - 079/672.88.18</p>
                </div>
                <div className="contact-item">
                  <h3 style={{ color: "white" }}>Contact Secondaire</h3>
                  <p style={{ color: "white" }}>Sahiti Agron - 078/673.50.03</p>
                </div>
                <div className="contact-item">
                  <h3 style={{ color: "white" }}>Email</h3>
                  <p style={{ color: "white" }}>info@sahgri.ch</p>
                </div>
                <div className="contact-item">
                  <h3 style={{ color: "white" }}>Adresse</h3>
                  <p style={{ color: "white" }}>Avenue du Mont-Blanc 16, 1196 Gland</p>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name" style={{ color: "white" }}>Nom *</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ color: "white" }}>E-mail *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                 <label htmlFor="phone" style={{ color: "white" }}>Téléphone</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <div className="form-group">
                <label htmlFor="message" style={{ color: "white" }}>Message</label>
                <textarea id="message" name="message" rows="5"></textarea>
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="rgpd" name="rgpd" required />
                 <label htmlFor="rgpd" style={{ color: "white" }}>Oui, j'accepte la politique de confidentialité.</label>
              </div>
              <button type="submit" className="submit-btn">Envoyer le message</button>
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
              <div className="footer-image">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center" 
                  alt="Contact Footer"
                />
              </div>
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
