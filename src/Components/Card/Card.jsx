import React from "react";
import "./card.css"
const Card = ({producto}) =>{
    console.log(producto.tittle)
    return(
        <div className="container-card">
            <img src={producto.thumbnail} alt= ""/>
            <div className="product-details"> 
                <h6>{producto.tittle}</h6>
                <p><span>Precio: {producto.price}</span></p>
                <p><span>Condicion: {producto.condition}</span></p>
            </div>
        </div>
    )
}

export { Card }