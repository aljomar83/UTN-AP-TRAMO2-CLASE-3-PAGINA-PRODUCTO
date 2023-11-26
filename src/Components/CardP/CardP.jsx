
import "./CardP.css"
import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, ButtonGroup, Button, Box  } from "@chakra-ui/react"; 


const CardP = ({id, tittle, price, condition,stock,thumbnail,desc}) =>{
    return(
        <Card>
            <Heading>Producto: {tittle}</Heading>
            <CardBody>
                <Image src={thumbnail}/>
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