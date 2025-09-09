'use client'
import { cardapioCafeteria } from "../data/Produtos";
import useAlert from "../hooks/useAlerts";
import "./Cards.css"
import HeartLike from "./HeartLike";

export default function Cards(){
    const { ConfirmAlert, doubleAlert } = useAlert();
    return(
        <section className="cards-section">
            <h1 className="cards-title">CARDAPIO CAFETERIA</h1>
            <main className="cards-container">
                {cardapioCafeteria.map((product, index) =>(
                    <div key={index} className="card">
                        <div className="card-image-wrapper">
                            <img className="card-image" src={product.image} alt={product.title} />
                        </div>
                        <div className="card-content">
                            <div className="texto-btn">
                                    <h3 className="card-title">{product.title}</h3>
                                    <HeartLike initialCount={product.like} />
                                </div>
                            <div>
                                <p className="card-description">{product.description}</p>
                            </div>
                            <button className="card-button" onClick={()=> ConfirmAlert()}>Comprar : {product.price}</button>
                        </div>
                    </div>
                ))}
            </main>
        </section>
    );
}