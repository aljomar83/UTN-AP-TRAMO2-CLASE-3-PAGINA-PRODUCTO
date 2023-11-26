import './Main.css'; 
import { CardP } from '../CardP/CardP'
import { Container } from '@chakra-ui/react';

const Main=()=>{

    const producto = {   //Declaracion objeto
        id:'Pasteleria001',
        tittle:'Cupcake Básico Vainilla',
        desc: 'Biscochito de vainilla con cobertura de merengue italiano (sin topping ni relleno)',
        price:500,
        condition:'Listo para consumo',
        stock:20,
        thumbnail: './imgs/cupcakeBasicoVainilla.png'}

    const {id, tittle, price,condition,stock,thumbnail, desc} = producto //Deconstrucción de sus propiedades 
    
    return(	    
        <Container minH="80vh">
        <CardP id={id} tittle={tittle} price={price} desc={desc} condition={condition} stock={stock} thumbnail={thumbnail}/>    
        </Container>
        /* paso por props al componente hijo CardP */
    )
}

export {Main};