import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const handleNavLinkClick = () => {
    // Ferme le menu mobile après clic
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-calebasse fixed-top shadow-lg">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-2 navbar-logo" to="/">
          <i className="fas fa-seedling me-2 bleu-clair-text"></i>
          <span className="gold-text">Calebase</span> 
          <span className="bleu-clair-text">Dorée</span>
        </Link>
        
        {/* Toggle Mobile */}
        <button 
          className="navbar-toggler border-0 p-2 navbar-toggler-calebasse" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars fs-4 bleu-clair-text"></i>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item mx-lg-2 mb-2 mb-lg-0">
              <Link 
                className="nav-link nav-link-calebasse fs-6 fw-semibold" 
                to="/" 
                onClick={handleNavLinkClick}
              >
                <i className="fas fa-home me-1"></i>Accueil
              </Link>
            </li>
            <li className="nav-item mx-lg-2 mb-2 mb-lg-0">
              <Link 
                className="nav-link nav-link-calebasse fs-6 fw-semibold" 
                to="/products"
                onClick={handleNavLinkClick}
              >
                <i className="fas fa-store me-1"></i>Produits
              </Link>
            </li>
            <li className="nav-item mx-lg-2 mb-2 mb-lg-0 position-relative">
              <Link 
                className="nav-link nav-link-calebasse fs-6 fw-semibold" 
                to="/cart"
                onClick={handleNavLinkClick}
              >
                <i className="fas fa-shopping-cart me-2"></i>
                Panier
                {cart.length > 0 && (
                  <span className="cart-badge-gold">
                    {cart.length > 99 ? '99+' : cart.length}
                  </span>
                )}
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
