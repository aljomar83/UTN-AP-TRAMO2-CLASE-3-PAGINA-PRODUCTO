
import "./CardP.css"
import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, ButtonGroup, Button, Box  } from "@chakra-ui/react"; 


const CardP = ({id, tittle, price, condition,stock,thumbnail,desc}) =>{
    // console.log(tittle)
    return(
        
        // <div className="container-card">
        //     <img className="img" src={thumbnail} alt= ""/>
        //     <div className="product-details"> 
        //         <h6 id="tittle">{tittle}</h6>
        //         <p><span>Precio: {price}</span></p>
        //         <p><span>Condicion: {condition}</span></p>
        //         <p><span>SKU: {id}</span></p>
        //         <p><span>Stock: {stock}</span></p>  
        //     </div>
        // </div>
        
        <Card>
            <Heading>Producto: {tittle}</Heading>
            <CardBody>
                <Image scr={thumbnail}/>
                <Divider/>
                <Text>SKU: {id}</Text>
                <Text>Descripción: {desc}</Text>
                <Text>Estado: {condition}</Text>
                <Text>Precio: {price}</Text>
            </CardBody>
        </Card>
        



    )
}

export { CardP }