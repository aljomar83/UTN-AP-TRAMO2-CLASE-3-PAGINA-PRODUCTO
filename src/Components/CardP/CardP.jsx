
import "./CardP.css"
import { Card, CardBody, CardFooter, Divider, Image, Stack, Heading, Text, ButtonGroup, Button, Box  } from "@chakra-ui/react"; 


const CardP = ({id, tittle, price, condition,stock,thumbnail,desc}) =>{
    return(
        <Card>
                <Image src={thumbnail}/>
            <Heading>{tittle}</Heading>
            <CardBody>
                <Divider/>
                <Text><strong>SKU:</strong> {id}</Text>
                <Text><strong>Estado:</strong> {condition}</Text>
                <Text><strong>Precio:</strong> {price}</Text>
                <Text><strong>Stock:</strong> {stock}</Text>
                <Text><strong>Descripción:</strong> {desc}</Text>
            </CardBody>
        </Card>
        



    )
}

export { CardP }