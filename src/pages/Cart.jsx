import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  // Formulaire client
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 5000;
  const grandTotal = totalAmount + shipping;

  const handleWhatsApp = () => {
    const orderDetails = cart.map(item => 
      `${item.quantity}x ${item.name} (${item.category}) - ${item.price.toLocaleString()} FCFA`
    ).join('\n');
    
    const message = `🛒 *COMMANDE CALEBASSE DOREE*\n\n` +
      `👤 *Client:* ${formData.name}\n` +
      `📞 *Téléphone:* ${formData.phone}\n` +
      `📍 *Livraison:* ${formData.address}\n\n` +
      `📦 *PRODUITS:*\n${orderDetails}\n\n` +
      `💰 *TOTAL: ${grandTotal.toLocaleString()} FCFA*\n` +
      `✅ Paiement à la livraison\n\n` +
      `HLM Grand Yoff, Dakar`;

    const whatsappUrl = `https://wa.me/221772901490?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
    setShowForm(false);
  };

  if (cart.length === 0) {
    return (
      <div className="min-vh-100 home-bg d-flex align-items-center">
        <div className="container text-center py-5">
          <div className="empty-cart-icon mb-5">
            <i className="fas fa-shopping-cart fa-6x gold-text opacity-25"></i>
          </div>
          <h2 className="gold-text mb-4">Votre panier est vide</h2>
          <p className="light-text fs-5 mb-5">Découvrez nos céréales premium thiéré, fondé, lakh et thiakry</p>
          <Link to="/products" className="btn btn-gold btn-lg px-5">
            <i className="fas fa-store me-2"></i>Nos Produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="home-bg min-vh-100 pt-5 pb-5">
      <div className="container py-5">
        <div className="row">
          {/* LISTE PRODUITS */}
         <div className="col-lg-8 mb-5">
  <div className="d-flex align-items-center justify-content-between mb-5">
    <h1 className="h2 gold-text mb-0">
      <i className="fas fa-shopping-cart me-2"></i>
      Mon Panier ({cart.length})
    </h1>
    <button className="btn btn-outline-light btn-sm" onClick={clearCart}>
      <i className="fas fa-trash me-2"></i>Vider
    </button>
  </div>

  <div className="cart-items">
    {cart.map(item => (
      <div key={item.id} className="cart-item-card-modern mb-4">
        <div className="row g-4 align-items-stretch">
          {/* IMAGE - 25% */}
          <div className="col-md-3 col-lg-2">
            <div className="product-image-cart position-relative h-100">
              <img 
                src={item.image} 
                alt={item.name}
                className="img-fluid rounded-3 w-100 h-100"
                style={{objectFit: 'cover'}}
              />
              <span className="badge bg-gold position-absolute top-0 start-0 m-2">
                {item.category.toUpperCase()}
              </span>
            </div>
          </div>

          {/* INFO PRODUIT - 40% */}
          <div className="col-md-4 col-lg-4">
            <h5 className="text-white fw-bold mb-3 fs-6">{item.name}</h5>
            <p className="light-text small mb-3 lh-sm" style={{height: '60px', overflow: 'hidden'}}>
              {item.description}
            </p>
            <span className="text-muted small d-block">
              {item.price.toLocaleString()} FCFA / unité
            </span>
          </div>

         {/* QUANTITÉ + PRIX CÔTE À CÔTE */}
<div className="col-md-5 col-lg-6">
  <div className="d-flex align-items-center justify-content-between gap-4 mt-3">
    {/* QUANTITÉ */}
    <div className="quantity-control-modern flex-shrink-0" style={{width: '200px'}}>
      <button 
        className="qty-btn-modern qty-minus position-absolute start-0"
        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
        style={{left: '-12px'}}
      >
        <i className="fas fa-minus"></i>
      </button>
      
      <span className="qty-display-modern gold-text fw-bold fs-3 mx-auto d-block text-center">
        {item.quantity}
      </span>
      
      <button 
        className="qty-btn-modern qty-plus position-absolute end-0"
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
        style={{right: '-12px'}}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>

    {/* PRIX TOTAL */}
    <div className="text-end flex-grow-1">
      <h3 className="gold-text fw-bold mb-2 fs-3">
        {(item.price * item.quantity).toLocaleString()} FCFA
      </h3>
      <span className="light-text small">({item.price.toLocaleString()} FCFA/unité)</span>
    </div>
  </div>

</div>

        </div>
      </div>
    ))}
  </div>
</div>


          {/* SIDEBAR RÉSUMÉ */}
          <div className="col-lg-4">
            <div className="summary-card sticky-top" style={{top: '20px'}}>
              <h3 className="gold-text mb-4 text-center">
                <i className="fas fa-receipt me-2"></i>Résumé
              </h3>
              
              <div className="summary-item mb-3">
                <span className="light-text">Sous-total ({cart.length} article{cart.length > 1 ? 's' : ''})</span>
                <span className="gold-text fw-bold">{totalAmount.toLocaleString()} FCFA</span>
              </div>
              
              <div className="summary-item mb-4">
                <span className="light-text">🚚 Livraison HLM Grand Yoff</span>
                <span className="text-white fw-bold">5,000 FCFA</span>
              </div>
              
              <hr className="gold-divider" />

              <div className="total-row mb-5">
                <span className="h4 text-white fw-bold">TOTAL</span>
                <span className="h3 gold-text fw-bold">{grandTotal.toLocaleString()} FCFA</span>
              </div>

              {/* FORMULAIRE */}
              {showForm ? (
                <div className="delivery-form mb-4">
                  <h6 className="gold-text mb-3">📋 Infos Livraison</h6>
                  <input 
                    type="text" 
                    className="form-control form-control-dark mb-3" 
                    placeholder="Nom complet *"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    className="form-control form-control-dark mb-3" 
                    placeholder="Téléphone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <textarea 
                    className="form-control form-control-dark" 
                    rows="3"
                    placeholder="Adresse livraison complète *"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
              ) : (
               <button 
  className="btn btn-fill-info w-100 mb-3 px-4 py-3"
  onClick={() => setShowForm(true)}
>
  <i className="fas fa-user-edit me-2"></i>
  Remplir mes informations
</button>
              )}

              {/* BOUTON PRINCIPAL */}
          {/* Remplace le bouton WhatsApp entier */}
<div className="mb-3">
  <button 
    className={`btn w-100 px-4 py-3 fs-5 fw-bold ${
      showForm && (!formData.name || !formData.phone || !formData.address)
        ? 'btn-secondary' 
        : 'btn-gold'
    }`}
    onClick={handleWhatsApp}
    disabled={!showForm || !formData.name || !formData.phone || !formData.address}
  >
    <i className="fab fa-whatsapp me-2"></i>
    {showForm && (!formData.name || !formData.phone || !formData.address)
      ? '⚠️ Remplissez tous les champs'
      : '✅ Commander sur WhatsApp'
    }
  </button>
</div>


              {/* ACTIONS SECONDAIRES */}
              <div className="d-grid gap-2">
            <button 
  className="btn btn-continue-shopping w-100 mt-3 py-3"
  onClick={() => navigate("/")}
>
  <i className="fas fa-shopping-cart me-2"></i>
  Continuer mes achats
</button>
                <button className="btn btn-outline-danger px-4 py-2" onClick={clearCart}>
                  <i className="fas fa-trash me-2"></i>Vider panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
