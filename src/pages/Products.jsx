import { useState, useEffect, useContext } from "react";
import { useSearchParams, Link } from "react-router-dom";
import productsData from "../data/products.json";
import { CartContext } from "../context/CartContext";

export default function Products() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(productsData);
  const { addToCart } = useContext(CartContext);

  const category = searchParams.get("cat");

  useEffect(() => {
    if (category) {
      setProducts(productsData.filter(p => p.category === category));
    } else {
      setProducts(productsData);
    }
  }, [category]);

  const categories = [...new Set(productsData.map(p => p.category))];

  return (
    <div className="min-vh-100 home-bg pt-5">
      {/* HEADER + FILTRES */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-4 gold-text section-title">
              🛒 Nos Céréales Premium
            </h1>
            <p className="lead text-light fs-4 mb-5">
              Thiéré • Fondé • Lakh • Thiakry | <strong>500g & 1kg</strong>
            </p>

            {/* FILTRES */}
            <div className="filter-container mb-5">
              <Link 
                to="/products" 
                className={`filter-btn ${!category ? 'active' : ''}`}
              >
                <i className="fas fa-th-large me-2 cat-icon"></i>Tous
              </Link>
              {categories.map(cat => (
                <Link 
                  key={cat} 
                  to={`/products?cat=${cat}`} 
                  className={`filter-btn ${category === cat ? 'active' : ''}`}
                >
                  <span className="cat-icon">{cat.charAt(0).toUpperCase()}</span>
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRILLE PRODUITS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 g-lg-3">
            {products.map(product => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="product-card-modern h-100">
                  {/* IMAGE + BADGES */}
                  <div className="position-relative overflow-hidden broutech-image-container">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image-modern w-100"
                    />
                    <div className="product-stock-badge">
                      <span className="badge bg-success text-white">En stock</span>
                    </div>
                    <div className="product-category-badge">
                      <span className="badge bleu-clair-text">{product.category.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* CONTENU */}
                  <div className="card-content p-4">
                    <h6 className="product-name fw-bold mb-3 fs-6 lh-sm">
                      {product.name}
                    </h6>
                    
                    <p className="text-light small mb-4 product-desc lh-sm" 
                      style={{height: '48px', overflow: 'hidden'}}>
                      {product.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="gold-text fw-bold mb-0 fs-5">
                        {product.price.toLocaleString()} FCFA
                      </h5>
                      <button 
                        className="btn btn-gold px-4 py-2 fw-bold"
                        onClick={() => addToCart(product)}
                      >
                        <i className="fas fa-plus me-2"></i>Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AUCUN PRODUIT */}
          {products.length === 0 && (
            <div className="text-center py-5">
              <i className="fas fa-search fa-5x gold-text mb-4 opacity-75"></i>
              <h3 className="gold-text mb-3">Aucun produit trouvé</h3>
              <p className="text-light fs-5 mb-4">Essayez une autre catégorie</p>
              <Link to="/products" className="btn btn-gold btn-lg px-5">
                <i className="fas fa-store me-2"></i>Voir tous les produits
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
