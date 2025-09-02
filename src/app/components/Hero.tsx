import "./Hero.css"
export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1 className="hero-title">BEM-VINDOS á</h1>
                <h2 className="hero-subtitle">Quintiliano's Café</h2>
                <h2 className="hero-phrase">A sotisficação dos cafés gourmet que encantam em cada gole.</h2>
                <p className="hero-description">
                    Nossos cafés e delicias combinam ingredientes selcionados
                    com um toque artesanala e sotisficado. Uma experiência única
                    em sabor e aroma.
                </p>
            </div>
            <div className="hero-image">
                <img src="croissant.png" alt="cafe/croissant"/>
            </div>
        </section>
    );
}