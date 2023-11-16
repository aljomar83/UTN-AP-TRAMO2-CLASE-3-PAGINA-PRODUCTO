import React from "react";
import "./card.css"
const Card = ({producto}) =>{
    console.log(producto.tittle)
    return(
        <div className="container-card">
            <img className="img" src={producto.thumbnail} alt= ""/>
            <div className="product-details"> 
                <h6>{producto.tittle}</h6>
                <p><span>Precio: {producto.price}</span></p>
                <p><span>Condicion: {producto.condition}</span></p>
                <p><span>SKU: {producto.id}</span></p>
                <p><span>Stock: {producto.stock}</span></p>


            </div>
        </div>
    )
}

export { Card }