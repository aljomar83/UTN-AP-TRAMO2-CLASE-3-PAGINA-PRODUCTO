import './Main.css'; 
import { CardP } from '../CardP/CardP'

const Main=()=>{

    const producto = {   //Declaracion objeto
        id:'001',
        tittle:'Cupcake de Vainilla con Merengue Italiano',
        desc:'Suave y esponjoso biscochito de vainilla con notas cítricas, decorado con cobertura de merengue italiano (sin topping ni relleno)',
        price:500,
        condition:'Listo para consumo',
        stock:20,
        thumbnail: "../imgs/cupcakeBasicoVainilla.png"
    }

    const {id, tittle, price,condition,stock,thumbnail, desc} = producto //Deconstrucción de sus propiedades 
    
    return(	    

           <CardP id={id} tittle={tittle} price={price} desc={desc} condition={condition} stock={stock} thumbnail={thumbnail}/>    
            // paso por props al componente hijo CardP

    )
}

export {Main};