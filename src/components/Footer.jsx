import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer-main">
      {/* TOP SECTION */}
      <div className="footer-top py-5">
        <div className="container">
          <div className="row">
            {/* LOGO & DESCRIPTION */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <h3 className="gold-text mb-4">
                  <i className="fas fa-seedling me-2"></i>
                  Calebase Dorée
                </h3>
                <p className="light-text lh-lg">
                  École de pâtisserie premium à Dakar. 
                  Céréales sénégalaises 100% locales : 
                  <strong>thiéré, fondé, lakh, thiakry</strong> 
                  pour vos recettes traditionnelles.
                </p>
                <div className="mt-4">
                  <a href="https://wa.me/221772901490" className="btn btn-gold btn-sm px-4 me-2 mb-2" target="_blank">
                    <i className="fab fa-whatsapp me-1"></i>Commande
                  </a>
                </div>
              </div>
            </div>

            {/* LIENS RAPIDES */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h6 className="gold-text mb-4">🚀 Rapide</h6>
              <ul className="list-unstyled">
                <li><Link to="/" className="light-text-link">Accueil</Link></li>
                <li><Link to="/products" className="light-text-link">Produits</Link></li>
                <li><Link to="/cart" className="light-text-link">Panier</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="gold-text mb-4">🛍️ Services</h6>
              <ul className="list-unstyled">
                <li><span className="light-text-link">Livraison Dakar</span></li>
                <li><span className="light-text-link">500g / 1kg</span></li>
                <li><span className="light-text-link">Paiement à réception</span></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h6 className="gold-text mb-4">📞 Contact</h6>
              <div className="contact-footer">
                <div className="mb-3">
                  <i className="fas fa-map-marker-alt gold-text me-2"></i>
                  <span className="light-text">HLM Grand Yoff, Dakar</span>
                </div>
                <div className="mb-3">
                  <a href="https://wa.me/221772901490" className="d-flex align-items-center light-text-link" target="_blank">
                    <i className="fab fa-whatsapp gold-text me-2 fs-5"></i>
                    77 290 14 90
                  </a>
                </div>
                <div>
                  <span className="light-text">
                    <i className="far fa-clock me-2"></i>
                    Lun-Sam 8h-19h
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-3 mb-md-0 light-text small text-center text-md-start">
                © 2026 <span className="gold-text">Calebase Dorée</span> - Tous droits réservés
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-links">
                <a href="https://wa.me/221772901490" className="btn-social gold-text me-3 mb-2" target="_blank">
                  <i className="fab fa-whatsapp fa-lg"></i>
                </a>
                <Link to="/products" className="btn-social light-text-link me-3 mb-2">
                  <i className="fas fa-store fa-lg"></i>
                </Link>
                <Link to="/cart" className="btn-social light-text-link">
                  <i className="fas fa-shopping-cart fa-lg"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
