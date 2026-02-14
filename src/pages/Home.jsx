import { useContext } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useContext(CartContext);

  const categories = {
    thiéré: products.filter(p => p.category === 'thiéré').slice(0,1),
    fonde: products.filter(p => p.category === 'fonde').slice(0,1),
    lakh: products.filter(p => p.category === 'lakh').slice(0,1),
    thiakry: products.filter(p => p.category === 'thiakry').slice(0,1)
  };

  return (
    <div className="min-vh-100 home-bg">
      {/* Hero */}
      <section className="hero-section py-5 position-relative">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-3 fw-bold mb-4 hero-title">Calebas Dorée</h1>
              <p className="lead mb-3 hero-text fs-4"> 
                <strong>SAVEURS TRADITIONNELLES DAKAROISES</strong><br/>
                Araw mil pour <strong>thiéré vendredi, fondé muscade, lakh Aïd, thiakry fêtes</strong><br/>
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/products" className="btn btn-gold btn-lg px-5">
                  <i className="fas fa-shopping-bag me-2"></i> Boutique
                </Link>
                <Link to="/products" className="btn btn-bleu-clair btn-lg px-5">
                  <i className="fas fa-play-circle me-2"></i> Nos Recettes
                </Link>
              </div>
              <p className="mt-3 text-light small">
                🚚 Livraison gratuite dès 10kg • 📱 WhatsApp 77 290 14 90
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image-container position-relative">
                <img 
                  src="../image/fond1.webp" 
                  alt="Pâtisserie artisanale sénégalaise" 
                  className="img-fluid rounded-5 shadow-lg hero-image"
                />
                <div className="hero-badge">
                  <span className="badge bg-warning text-dark fs-6 fw-bold">100% Local</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-5 section-dark">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="h1 fw-bold mb-4 gold-text section-title">Pourquoi Choisir Nos Araw ?</h2>
              <p className="lead text-light fs-5 mb-0">
                <strong>Qualité garantie depuis HLM Grand Yoff</strong> - Mil sélectionné, transformation artisanale
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 rounded-4 shadow-sm" style={{background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(79,111,82,0.2)'}}>
                <div className="feature-icon mb-3">
                  <i className="fas fa-seedling fa-3x bleu-clair-text"></i>
                </div>
                <h5 className="gold-text mb-3">100% Mil Local</h5>
                <p className="text-light">Perles de mil sénégalais pur, sans additifs chimiques</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 rounded-4 shadow-sm" style={{background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(79,111,82,0.2)'}}>
                <div className="feature-icon mb-3">
                  <i className="fas fa-balance-scale fa-3x bleu-clair-text"></i>
                </div>
                <h5 className="gold-text mb-3">Poids Garanti</h5>
                <p className="text-light">500g et 1kg précis • Conditionnement sous vide</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 rounded-4 shadow-sm" style={{background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(79,111,82,0.2)'}}>
                <div className="feature-icon mb-3">
                  <i className="fas fa-shipping-fast fa-3x bleu-clair-text"></i>
                </div>
                <h5 className="gold-text mb-3">Livraison Rapide</h5>
                <p className="text-light">Dakar même jour • WhatsApp suivi commande</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4 rounded-4 shadow-sm" style={{background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(79,111,82,0.2)'}}>
                <div className="feature-icon mb-3">
                  <i className="fas fa-users fa-3x bleu-clair-text"></i>
                </div>
                <h5 className="gold-text mb-3">Pro & Particuliers</h5>
                <p className="text-light">Écoles, traiteurs, familles • Quantités adaptées</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* À Propos */}
      <section className="py-5 section-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center order-lg-1">
              <img 
                src="../image/p2.jpg" 
                alt="École de pâtisserie Calebase Dorée" 
                className="img-fluid rounded-4 shadow-lg w-100"
              />
            </div>
            <div className="col-lg-6 order-lg-2">
              <h2 className="h2 fw-bold mb-4 gold-text">🎓 Calebas Dorée - Excellence Pâtissière</h2>
              <div className="about-content">
                <p className="text-light fs-6 mb-4">
                  <strong>École de formation professionnelle</strong> spécialisée pâtisserie, boulangerie et cuisine sénégalaise à Dakar.
                </p>
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-check-circle gold-text me-2"></i>
                      <span className="text-light">Formations certifiantes</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-check-circle gold-text me-2"></i>
                      <span className="text-light">Matériel professionnel</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fas fa-check-circle gold-text me-2"></i>
                      <span className="text-light">Chefs expérimentés</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-check-circle gold-text me-2"></i>
                      <span className="text-light">Emplois garantis</span>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link to="/products" className="btn btn-gold btn-lg px-5">
                    <i className="fas fa-shopping-cart me-2"></i>Commander Araw Maintenant
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-5 section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4 gold-text section-title">
              🛒 Nos 4 Céréales Premium
            </h2>
            <p className="lead text-light fs-4 mb-0">
              Thiéré, Fondé, Lakh, Thiakry - Tradition & Qualité
            </p>
          </div>

          <div className="row g-4 g-lg-5">
            {Object.entries(categories).map(([cat, items]) => (
              <div key={cat} className="col-lg-3 col-md-6">
                <Link to={`/products?cat=${cat}`} className="text-decoration-none">
                  <div className="category-card-modern h-100">
                    <div className="category-image-container position-relative">
                      <img 
                        src={items[0]?.image} 
                        alt={`${cat} sénégalais`}
                        className="category-image-modern w-100"
                      />
                      <div className="category-price-badge">
                        Dès {items[0]?.price.toLocaleString()} FCFA
                      </div>
                    </div>

                    <div className="card-content p-4 d-flex flex-column">
                      <h5 className="fw-bold bleu-clair-text mb-3 fs-5">{cat.toUpperCase()}</h5>
                      <p className="text-light small mb-4 lh-sm flex-grow-1" style={{height: '50px', overflow: 'hidden'}}>
                        {items[0]?.description}
                      </p>
                      
                      <div className="d-flex gap-2 justify-content-center flex-wrap mb-4">
                        <span className="badge bg-warning text-dark px-3 py-2 fw-bold">
                          500g
                        </span>
                        <span className="badge bg-warning text-dark px-3 py-2 fw-bold">
                          1kg
                        </span>
                      </div>
                      
                      <Link 
                        to={`/products?cat=${cat}`} 
                        className="btn btn-gold w-100 mt-auto"
                      >
                        <i className="fas fa-store me-2"></i>
                        Voir Produits
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 pt-5">
            <Link to="/products" className="btn btn-gold btn-lg px-5 py-3 fs-5">
              <i className="fas fa-store me-2"></i>
              Voir Tous les Produits
            </Link>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-5 section-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 text-center mb-4 mb-lg-0">
              <div className="map-container position-relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1343.8561143003178!2d-17.45350943902444!3d14.742942150317088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d3815c75c01%3A0xd0ac2464e4d7df36!2sHlm%20grand%20yoff%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1771013963728!5m2!1sfr!2ssn"
                  width="100%"
                  height="420"
                  className="map-frame rounded-4 shadow-lg"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 ps-lg-5">
              <div className="text-center text-lg-start">
                <h2 className="h2 fw-bold mb-4 gold-text section-title mb-5">📍 HLM Grand Yoff</h2>
                
                <div className="contact-card p-4 rounded-4 mb-4 shadow-sm" style={{background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(79,111,82,0.3)'}}>
                  <div className="contact-item d-flex align-items-start mb-4">
                    <i className="fas fa-map-marker-alt gold-text fs-2 mt-1 me-4"></i>
                    <div>
                      <h5 className="mb-2 bleu-clair-text">📌 Adresse Exacte</h5>
                      <p className="text-light mb-0 fs-6">HLM Grand Yoff<br/>Dakar, Sénégal</p>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-start mb-4">
                    <i className="fab fa-whatsapp gold-text fs-2 mt-1 me-4"></i>
                    <div>
                      <h5 className="mb-2 bleu-clair-text">📱 Commandes WhatsApp</h5>
                      <p className="text-light mb-0 fs-6">
                        <a href="https://wa.me/221772901490" className="gold-text fw-bold fs-5 text-decoration-none" target="_blank">
                          <i className="fas fa-phone me-1"></i>77 290 14 90
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-start">
                    <i className="fas fa-clock gold-text fs-2 mt-1 me-4"></i>
                    <div>
                      <h5 className="mb-2 bleu-clair-text">⏰ Horaires d'ouverture</h5>
                      <p className="text-light mb-0 fs-6">
                        <strong>Lun-Vend:</strong> 8h-19h<br/>
                        <strong>Sam:</strong> 9h-17h<br/>
                        <strong>Fermé dimanche</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-lg-start mt-4">
                  <a href="https://wa.me/221772901490" className="btn btn-gold btn-lg px-5" target="_blank">
                    <i className="fab fa-whatsapp me-2"></i>Commander Maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-5 text-center section-gradient">
        <div className="container">
          <h2 className="h2 fw-bold mb-4 gold-text">Prêt à Commander ?</h2>
          <p className="lead text-light fs-4 mb-5">
            Livraison express Dakar • <strong>Paiement à la livraison</strong> • Satisfaction garantie
          </p>
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-center">
            <Link to="/products" className="btn btn-gold btn-lg px-6">
              <i className="fas fa-shopping-cart me-2"></i>Commander Maintenant
            </Link>
            <a href="https://wa.me/221772901490" className="btn btn-bleu-clair btn-lg px-6" target="_blank">
              <i className="fab fa-whatsapp me-2"></i>WhatsApp 77 290 14 90
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
